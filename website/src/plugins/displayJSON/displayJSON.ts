import { CommentData, FieldNodeData } from "@site/src/components/display-json/mdx/interfaces";
import pluginFactory, {
  BaseBlockOptions,
  DeEscapeOpening,
  OpeningTagFactory,
  DeEscapeClosing,
  ClosingTagFactory,
  ContentTransform,
  ContentNodesTransform,
  TreeNode,
  createTreeNode
} from "../base/baseBlockPlugin";
import createContentIterator from "../base/contentIterator";

export interface DisplayJSONOptions extends BaseBlockOptions {
  types: {
    [key: string]:
      (options: DisplayJSONOptions, content: string[]) => [string, number];
  }
};

// This string value does not matter much
const nodeType = "DisplayJSON";
const defaultOptions: DisplayJSONOptions = {
  openingTag: '!JSON',
  closingTag: "\/JSON",
  includeOpening: false,
  includeClosing: false,
  parseContent: false,
  types: {
    'Function': (options, content) => {
      return ["", 1];
    },
    'Event': (options, content) => {
      return ["", 1];
    },
    'GameEvent': (options, content) => {
      return ["", 1];
    },
    'Values': (options, content) => {
      return ["", 1];
    }
  }
};

// export const 

const openingTagFuzzy = (openingTag: string) => `${openingTag}`;
const closingTagFuzzy = (closingTag: string) => `${closingTag}`;

// IMPORTANT - Make sure not to try to match for word boundry here, since some of the lines this will run on are split into strings already
const openingTagFactory: OpeningTagFactory<DisplayJSONOptions> = (options: DisplayJSONOptions, typesMatcher: string) =>
  new RegExp(`^(?<!${options.escapeString})${openingTagFuzzy(options.openingTag)} (${typesMatcher}) ([\\w\\.\\-]*)(?:\\s*)`);

// IMPORTANT - Make sure not to try to match for line-end here, since the lines this will run on are split into strings already
const closingTagFactory: ClosingTagFactory<DisplayJSONOptions> = (options: DisplayJSONOptions) =>
  new RegExp(`^(?<!${options.escapeString})${closingTagFuzzy(options.closingTag)}(?:\\s*?)$`);

const deEscapeOpening: DeEscapeOpening<DisplayJSONOptions> = (options: DisplayJSONOptions, escaped: string) =>
  escaped.replace(`${options.escapeString}(${openingTagFuzzy(options.openingTag)})`, "$1");

const deEscapeClosing: DeEscapeClosing<DisplayJSONOptions> = (options: DisplayJSONOptions, escaped: string) =>
  escaped.replace(`${options.escapeString}(${closingTagFuzzy(options.openingTag)})`, "$1");

// The plugin can transform the content here before passing it to further parsing, either the plugins' or remarks'
/* const contentTransformm: ContentTransform<DisplayJSONOptions> = (options: DisplayJSONOptions, content: string[]) => {

} */

// Where we would transform the 
const contentNodesTransform: ContentNodesTransform<DisplayJSONOptions> = (options: DisplayJSONOptions, content: string[], matchGroups: string[], childNodes: TreeNode[]): [TreeNode[], any] => {
  const [/* full */, type, name] = matchGroups as [string, string, string];
  const contentIterator = createContentIterator(content);


  
  console.log(type, name)
  const [mainNode, startIndex] = tryParseMain(options, type, content);

  return [[], {raw: content, matches: matchGroups}];
}

const tryParseMain = (options: DisplayJSONOptions, type: string, content: string[]): [string, number] => {
  return options.types[type]?.(options, content);
}

const tryParseComment = (content: string[], nodeId: string, commentLine: number, index: number): [CommentData | undefined, number, number] => {
  let result: CommentData;
  if(content[index].startsWith("//")) {
    result = {
      // id: `${nodeId}-comment-${commentLine++}`,
      label: content[index]
    }
    index++;
  }
  return [result, commentLine, index];
}

const tryParseField = (content: string, nodeId: string, index: number): [FieldNodeData | undefined, number] => {
  let result: FieldNodeData;
  const match = /^(\w*?):\s*?([\{\[\"\'])?]/.exec(content);
  if(match) {
    const name = match[1];
    console.log(match)
    // result = {
    //   id: `${nodeId}-${name.toLowerCase()}`,
    //   label: 
    // }
  }
  return [result, index]
}

// const tryParseSubGroup = (content: string): string | undefined => {

// }

export const displayJSON = pluginFactory(
  nodeType,
  defaultOptions,
  openingTagFactory,
  closingTagFactory,
  deEscapeOpening,
  deEscapeClosing,
  /* contentTransform */ undefined,
  contentNodesTransform
)

export default displayJSON;