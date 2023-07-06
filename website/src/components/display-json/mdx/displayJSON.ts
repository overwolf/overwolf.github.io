import pluginFactory, {
  BaseBlockOptions,
  DeEscapeOpening,
  OpeningTagFactory,
  DeEscapeClosing,
  ClosingTagFactory,
  // ContentTransform,
  CreateContentNode
} from "../../base/mdx/baseBlockPlugin";
import createContentIterator from "../../base/mdx/contentIterator";
import { DoubleQuote } from "./escapeSequences/doubleQuote";
import { SingleQuote } from "./escapeSequences/singleQuote";
import { BacktickQuote } from "./escapeSequences/backtickQuote";
import { CommentLine } from "./escapeSequences/commentLine";
import { CommentBlock } from "./escapeSequences/commentBlock";
import EscapeRegistry from "../../base/mdx/escapeRegistry";
import { EscapeType } from "../../base/mdx/escapeType";
import { SyntacticType } from "../enums/DisplayJSONSyntacticType";
import { dArray, dComment, DisplayJSONNode, dRecordDefinition, dFunction, dInnerValue, dObject, dType, dRecord } from "../types/DisplayJSONNodes";
import DisplayJSONEscapeSequence, { ValidSequences } from "../enums/DisplayJSONEscapeSequence";
import { RecordTypes } from "../enums/DisplayJSONRecordTypes";
import { CreateArrayNode, CreateCommentNode, CreateDisplayJSON, CreateExpandedTypeNode, CreateFunctionNode, CreateObjectNode, CreateRecordDefinition, CreateRecordNode, CreateStringValueNode, CreateTopLevelRecordDefinition } from "./treeConstructor";

const rootNodeType = "DisplayJSON";

export interface DisplayJSONOptions extends BaseBlockOptions {
  _internalEscapePrefix?: string;
};

const defaultOptions: DisplayJSONOptions = {
  openingTag: '!JSON',
  closingTag: "\/JSON",
  includeOpening: false,
  includeClosing: false,
  parseContent: false,
};

type DisplayJSONEscapeRegistry = EscapeRegistry<SyntacticType, ValidSequences>;

const openingTagFuzzy = (openingTag: string) => `${openingTag}`;
const closingTagFuzzy = (closingTag: string) => `${closingTag}`;

// IMPORTANT - Make sure not to try to match for word boundry here, since some of the lines this will run on are split into strings already
const openingTagFactory: OpeningTagFactory<DisplayJSONOptions> = (options: DisplayJSONOptions) =>
  new RegExp(`^(?<!${options.escapeString})${openingTagFuzzy(options.openingTag)}(?: ([\\w\\.\\-]*))?(?:\\s*)`);

// IMPORTANT - Make sure not to try to match for line-end here, since the lines this will run on are split into strings already
const closingTagFactory: ClosingTagFactory<DisplayJSONOptions> = (options: DisplayJSONOptions) =>
  new RegExp(`^(?<!${options.escapeString})${closingTagFuzzy(options.closingTag)}(?:\\s*?)$`);

const deEscapeOpening: DeEscapeOpening<DisplayJSONOptions> = (options: DisplayJSONOptions, escaped: string) =>
  escaped.replace(`${options.escapeString}(${openingTagFuzzy(options.openingTag)})`, "$1");

const deEscapeClosing: DeEscapeClosing<DisplayJSONOptions> = (options: DisplayJSONOptions, escaped: string) =>
  escaped.replace(`${options.escapeString}(${closingTagFuzzy(options.openingTag)})`, "$1");

// The plugin can transform the content here before passing it to further parsing, either the plugins' or remarks'
// TODO: Make this flow optionally support escapeSequences + the escape registry, so we can move pre-parse logic here
/* const contentTransformm: ContentTransform<DisplayJSONOptions> = (options: DisplayJSONOptions, content: string[]) => {
  
} */

export type ParenthesesType = 'Object' | 'Array' | 'Method'
export type Parentheses = {
  opening: string | RegExp;
  closing: string;
  value: ParenthesesType;
}

const SyntaxSplit = (line: string, condition: string | RegExp) => {
  const result = [];
  if (condition instanceof RegExp) {
    condition = condition as RegExp;
    let match: RegExpExecArray;
    while (match = condition.exec(line)) {
      result.push(line.substring(0, match.index));
      result.push(line.substring(match.index, match.index + match[0].length));
      line = line.substring(match.index + match[0].length);
    }
  } else {
    let index;
    while ((index = line.indexOf(condition)) !== -1) {
      result.push(line.substring(0, index));
      result.push(line.substring(index, index + condition.length));
      line = line.substring(index + condition.length);
    }
  }
  if (line = line.trim()) result.push(line);
  return result;
}

const typeMatcher = /^([a-zA-Z0-9_])+(\.[a-zA-Z0-9_]+)*$/;
const primitiveTypes = [
  "any",
  "void",
  "string",
  "boolean",
  "number",
  "true",
  "false",
  "null"
]

// Where we would transform the 
const createContentNode: CreateContentNode<DisplayJSONOptions> = (options: DisplayJSONOptions, content: string[], matchGroups: string[]): DisplayJSONNode => {
  const [/* full */, name] = matchGroups as [string, string, string];
  const registry = new EscapeRegistry<SyntacticType, ValidSequences>(options._internalEscapePrefix);
  const safeContent = escapeContent(registry, createContentIterator(content))
    .flatMap((value) => { return SyntaxSplit(value, /[\[\]\(\)\{\}]/) })
    .flatMap((value) => { return SyntaxSplit(value, /:|=>|=/) }).flatMap((value) => { return SyntaxSplit(value, /\s+/) })
    .flatMap((value) => { return SyntaxSplit(value, registry.NumberedSequenceMatcher()) })
    .flatMap((value) => { return SyntaxSplit(value, ",").filter((isComma) => isComma !== ",") })
    .flatMap((value) => { return SyntaxSplit(value, ";").filter((isSemiColon) => isSemiColon !== ";") })
    .filter((value) => !!value)
  //   console.log(`Full mapped content so far:
  // ${safeContent.map((value) => {
  //     return registry.SerializeEscapedString(value)
  //   }).join("\n")}
  //   ${safeContent.map((value) => {
  //     return `
  //     ----------------
  //     Escaped: \`${value}\`
  //     Flattened: \`${registry.SerializeEscapedString(value)}\``
  //   }).join("")}`)
  //   throw new Error("Forced");

  const escapedGenerator = createContentIterator(safeContent);
  // Run once, start loop, run parseNodeContent
  // while(contentIterator.hasCurrent()) {
  //   parseNodeContent(contentIterator, treeRoot, undefined)
  // }

  let result: DisplayJSONNode;
  try {
    result = ParseFull(name, registry, escapedGenerator);
  } catch(e) {
    throw new Error(`
    Escaped Content:
    ${safeContent.map((value) => {
      return registry.SerializeEscapedString(value)
    }).join("\n\t")}
        ${safeContent.map((value) => {
      return `
          ----------------
          Escaped: \`${value}\`
          Flattened: \`${registry.SerializeEscapedString(value)}\``
    }).join("")}
    ----------------------
    Full Raw Content: ${content.join("\n\t")}
    ----------------------
    ${e}`);
  }
  // console.log(JSON.stringify(result, undefined, 4));
  return result;
}

const ValidFieldName = (name: DisplayJSONEscapeSequence): boolean => {
  return name.syntacticType === SyntacticType.StringValue || (name.syntacticType === SyntacticType.Literal && ValidLiteralFieldName(name));
}

const ValidLiteralFieldName = (name: DisplayJSONEscapeSequence): boolean => {
  return name.syntacticType === SyntacticType.Literal && !!/^[\w\.]+$/.exec(name.content);
}

const ParseFull = (name: string, registry: DisplayJSONEscapeRegistry, contentIterator: Generator<string>): DisplayJSONNode => {
  // Comments up to first text
  const topLevelNodes: (dRecord | dComment)[] = []
  let [done, record, comments] = ParseUntilContent(registry, contentIterator);

  while (!done) {
    try {
      if (record.syntacticType !== SyntacticType.Literal) throw new Error(`Invalid record in top level! ${JSON.stringify(record, undefined, 4)}`);
      const recordType = record.content.toLowerCase();
      if (recordType != record.content) console.warn(`Found capitalized display JSON block keyword ${record.content}`);
      const recordName = TryGenerate(contentIterator);
      if(!ValidLiteralFieldName(LiteralToRecord(recordName))) throw new Error(`Invalid name for \`${record.content}\` \`${recordName}\`, name must contain only alphanumeric characters, and/or \`\\-\` and \`\\.\`!`);
      let recordDefinition: dRecordDefinition, recordContent: dType | dFunction;
      let firstContentRecord: DisplayJSONEscapeSequence, leadingComments: dComment[];
      let enumRecordType: RecordTypes = RecordTypes[recordType];
      switch (enumRecordType) {
        case RecordTypes.function:
          // function {name}(...) => Type{...}
          // Read function
          recordDefinition = ParseRecordDefinition(LiteralToRecord(recordName), registry, contentIterator, {recordType: enumRecordType, unAssignable: true});
          [firstContentRecord, leadingComments] = InnerParseUntilContent(registry, contentIterator, "");
          if(LiteralToSyntacticType(firstContentRecord) !== SyntacticType.Function) throw new Error(`Mismatched record decleration! Can't start a ${recordType} record with a ${LiteralToSyntacticType(firstContentRecord)} Decleration (Evaluated as ${firstContentRecord.content}).`);
          recordContent = ParseFunction(registry, contentIterator, leadingComments);
          break;
        case RecordTypes.const:
          // const {name} = Type{...}
          // const {name} = Type[...]
          // const {name} = Type
        case RecordTypes.event:
          // event {name} = Type{...}
        case RecordTypes.game_event:
          // game_event {name} = Type{...}
        case RecordTypes.game_info:
          // game_info {name} = Type{...}
          recordDefinition = ParseRecordDefinition(LiteralToRecord(recordName), registry, contentIterator, {recordType: enumRecordType});
          // Read object
          [firstContentRecord, leadingComments] = InnerParseUntilContent(registry, contentIterator);
          const syntacticType = LiteralToSyntacticType(firstContentRecord);
          if(syntacticType !== SyntacticType.Literal) throw new Error(`Mismatched record decleration! ${recordType} is not a type! (Evaluated as ${JSON.stringify(firstContentRecord, undefined, 4)}).`);
          recordContent = ParseType(firstContentRecord, registry, contentIterator, leadingComments);
          break;
        default:
          throw new Error(`Invalid display JSON record keyword ${record.content}`);
      }
      const recordNode = CreateRecordNode(recordDefinition, recordContent, comments); // group{definition, node}
      topLevelNodes.push(recordNode);
    } catch (e) {
      throw new Error(`Failed to parse content record!
      ----------------------
      Successfully parsed up to: ${JSON.stringify(topLevelNodes, undefined, 4)}
      ----------------------
      Stacktrace: ${e}`);
    }
    [done, record, comments] = ParseUntilContent(registry, contentIterator);
  }

  topLevelNodes.push(...comments);
  // First text is a type - `function`, `event`, `const` (values), `game_event`, `game_info` - make sure to separate those out of the text (as well as ;)
  // Then, value is parsed accordingly
  // Subsequent values are parsed as is, recursively if need be
  // Just run in a loop until running out of items, but ONLY return gracefully if that happens in the top level

  return CreateDisplayJSON({name}, topLevelNodes);
}

const TryGenerate = (contentIterator: Generator<String>, error?: string): string => {
  const result = contentIterator.next();
  if(result.done) throw new Error(error ?? "String ended unexpectedly!");
  return result.value;
}

type ParseFieldFlags = {
  recordType?: RecordTypes,
  unAssignable?: boolean,
}

const RecordToText = (record: DisplayJSONEscapeSequence, registry: DisplayJSONEscapeRegistry) => {
  if(record.syntacticType === SyntacticType.Literal) return record.content;
  return registry.SerializeEscapedString(record.content);
}

const ParseRecordDefinition = (name: DisplayJSONEscapeSequence, registry: DisplayJSONEscapeRegistry, contentIterator: Generator<string>, options?: ParseFieldFlags): dRecordDefinition => {
  const { recordType, unAssignable } = options ?? {};
  const assign = recordType ? "=" : ":";
  if(!(recordType ? ValidLiteralFieldName(name) : ValidFieldName(name))) throw new Error(`Invalid field name! ${name}, name must contain only alphanumeric characters ${recordType ? "" : `, and/or \`\-\` and \`\.\``}!`);
  if(!unAssignable){
    const recordAssigner = TryGenerate(contentIterator);
    if(recordAssigner != assign) throw new Error(`Invalid assignment operator ${recordAssigner} for record name ${name}, expected ${assign}!`);
  }

  return recordType ? CreateTopLevelRecordDefinition(recordType, RecordToText(name, registry)) : CreateRecordDefinition(RecordToText(name, registry))
}

const InnerParseUntilContent = (registry: DisplayJSONEscapeRegistry, contentIterator: Generator<string>, error?: string): [DisplayJSONEscapeSequence, dComment[]] => {
  const [done, record, comments] = ParseUntilContent(registry, contentIterator);
  // TODO - make this more descriptive
  if(done) throw new Error(error ?? "Unterminated content detected!");
  return [record, comments];
}

const ParseUntilContent = (registry: DisplayJSONEscapeRegistry, contentIterator: Generator<string>): [boolean, DisplayJSONEscapeSequence, dComment[]] => {
  const comments = [];
  let value: string, done: boolean;
  let record: DisplayJSONEscapeSequence;
  do {
    const nextLine = contentIterator.next();
    value = nextLine.value;
    done = nextLine.done;
    record = registry.RecordFor(value);
    if (IsComment(record)) {
      comments.push(CreateCommentNode(record));
    }
  } while (IsComment(record));
  if(!record) record = LiteralToRecord(value);
  return [done, record, comments];
}

const LiteralToRecord = (record: string): DisplayJSONEscapeSequence => {
  return {
    content: record,
    sequence: undefined,
    syntacticType: SyntacticType.Literal
  }
}

const LiteralToSyntacticType = (record: DisplayJSONEscapeSequence): SyntacticType => {
  if(record.syntacticType !== SyntacticType.Literal) return record.syntacticType;
  if(record.content.startsWith("(")) return SyntacticType.Function;
  if(record.content.startsWith("[")) return SyntacticType.Array;
  if(record.content.startsWith("{")) return SyntacticType.Object;
  return SyntacticType.Literal;
}

const ParseInnerValue = (firstValue: DisplayJSONEscapeSequence, leadingComments: dComment[], registry: DisplayJSONEscapeRegistry, contentIterator: Generator<string>): dInnerValue => {
  const syntacticType = LiteralToSyntacticType(firstValue);
  let innerValue: dInnerValue;
  switch(syntacticType){
    case SyntacticType.Function:
      innerValue = ParseFunction(registry, contentIterator, leadingComments)
      break;
    case SyntacticType.Literal:
      innerValue = ParseType(firstValue, registry, contentIterator, leadingComments);
      break;
    case SyntacticType.StringValue:
      innerValue = CreateStringValueNode(firstValue, leadingComments);
      break;
    default:
      throw new Error(`Invalid value assignment! Cannot infer a value from ${JSON.stringify(firstValue, undefined, 4)}`);
  }

  return innerValue;
}

const ParseFunction = (registry: DisplayJSONEscapeRegistry, contentIterator: Generator<string>, comments: dComment[]): dFunction => {
  const parameters: (dInnerValue | dComment)[] = [];
  let value: DisplayJSONEscapeSequence, leadingComments: dComment[];
  do {
    [value, leadingComments] = InnerParseUntilContent(registry, contentIterator);
    switch (value.content) {
      case ")":
        parameters.push(...leadingComments);
        value = null;
        break;
      default:
        parameters.push(
          CreateRecordNode(
            ParseRecordDefinition(value, registry, contentIterator),
            ParseInnerValue(...InnerParseUntilContent(registry, contentIterator), registry, contentIterator),
            leadingComments
          )
        );
        break;
    }
  } while (value);

  const arrow = TryGenerate(contentIterator);
  if(arrow !== "=>") throw new Error(`Invalid lambda token! Expected =>, but got ${arrow}`);

  const [typeRecord, typeComents] = InnerParseUntilContent(registry, contentIterator);
  const returnType = ParseType(typeRecord, registry, contentIterator, typeComents);
  return CreateFunctionNode(parameters, returnType, comments)
}

const ParseArray = (registry: DisplayJSONEscapeRegistry, contentIterator: Generator<string>): dArray => {
  const children: (dInnerValue | dComment)[] = [];
  let value: DisplayJSONEscapeSequence, leadingComments: dComment[];
  do {
    [value, leadingComments] = InnerParseUntilContent(registry, contentIterator);
    switch (value.content) {
      case "]":
        children.push(...leadingComments);
        value = null;
        break;
      default:
        children.push(ParseInnerValue(value, leadingComments, registry, contentIterator))
        break;
    }
  } while (value);

  return CreateArrayNode(children);
}

const ParseObject = (registry: DisplayJSONEscapeRegistry, contentIterator: Generator<string>): dObject => {
  const children: (dRecord | dComment)[] = [];
  let value: DisplayJSONEscapeSequence, leadingComments: dComment[];
  do {
    [value, leadingComments] = InnerParseUntilContent(registry, contentIterator);
    switch (value.content) {
      case "}":
        children.push(...leadingComments);
        value = null;
        break;
      default:
        children.push(
          CreateRecordNode(
            ParseRecordDefinition(value, registry, contentIterator),
            ParseInnerValue(...InnerParseUntilContent(registry, contentIterator), registry, contentIterator),
            leadingComments
          )
        );
        break;
    }
  } while (value);

  return CreateObjectNode(children);
}

const ParseType = (record: DisplayJSONEscapeSequence, registry: DisplayJSONEscapeRegistry, contentIterator: Generator<string>, comments: dComment[]): dType => {
  // Ensure first real value is Type
  const type = record.content;
  if(!typeMatcher.exec(type)) throw new Error(`${JSON.stringify(record, undefined, 4)} is not a valid type syntax!`);

  let expandedType: dArray | dObject;
  if(!primitiveTypes.includes(type)) {
    const expandedStart = TryGenerate(contentIterator, `${type} is not defined as an accepted primitive type! ${!!primitiveTypes.filter((primitive) => primitive.toLocaleLowerCase() === type.toLocaleLowerCase()) ? `Mind the capitalization!` : `Maybe there is a typo somewhere?`}`);
    const expandedSyntacticType = LiteralToSyntacticType(LiteralToRecord(expandedStart));
    switch(expandedSyntacticType) {
      case SyntacticType.Array:
        expandedType = ParseArray(registry, contentIterator);
        break;
      case SyntacticType.Object:
        expandedType = ParseObject(registry, contentIterator);
        break;
      default:
        throw new Error(`Invalid suffix for type name ${expandedStart}, resulted in SyntacticType of ${expandedSyntacticType}`);
    }
  }

  return CreateExpandedTypeNode(type, comments, expandedType);
}

const IsComment = (record: DisplayJSONEscapeSequence): boolean => {
  return record?.syntacticType === SyntacticType.Comment;
}

type EscapeSequence = {
  index: number,
  consumer?: EscapeType<SyntacticType, ValidSequences>["handleEscape"]
}

const escapeSequences = [
  new SingleQuote(), new DoubleQuote(), new BacktickQuote(), new CommentLine(), new CommentBlock()
]

const findEscapeSequence = (currentLine: string): EscapeSequence => {
  let escapeStart: EscapeSequence = {
    index: currentLine.length
  }
  escapeSequences.forEach((value) => {
    const newIndex = currentLine.indexOf(ValidSequences[value.sequence]);
    if (newIndex === -1) return;[]
    if (newIndex < escapeStart.index) escapeStart = { index: newIndex, consumer: value.handleEscape };
  })
  return escapeStart;
}

const escapeContent = (registry: DisplayJSONEscapeRegistry, contentIterator: Generator<string>) => {
  const stringEscaped: string[] = [];
  let lastFullLine: IteratorResult<string, any>;
  try {
    while (!(lastFullLine = contentIterator.next() as IteratorYieldResult<string>).done) {
      let currentLine = lastFullLine.value;
      let escapeStart: EscapeSequence;
      do {
        escapeStart = findEscapeSequence(currentLine);
        // TODO: Clean this up
        if (escapeStart.consumer) {
          currentLine = escapeStart.consumer(currentLine, registry, escapeStart.index, contentIterator);
        }
      }
      while (escapeStart.consumer)
      stringEscaped.push(currentLine);
    }
  } catch (e) {
    throw new Error(`Failed to parse string, escaped sequence could not be terminated. Started at ${lastFullLine.value}!
    Full mapped content so far:
${stringEscaped.map((value) => {
      return registry.SerializeEscapedString(value)
    }).join("\n")}
    ${stringEscaped.map((value) => {
      return `
      ----------------
      Escaped: \`${value}\`
      Flattened: \`${registry.SerializeEscapedString(value)}\``
    }).join("")}
    ----------------
    Full error: ${e}`);
  }

  return stringEscaped;
}


export const displayJSON = pluginFactory(
  rootNodeType,
  defaultOptions,
  openingTagFactory,
  closingTagFactory,
  deEscapeOpening,
  deEscapeClosing,
  /* contentTransform */ undefined,
  createContentNode
)

export default displayJSON;