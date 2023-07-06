import { createTreeNode } from "../../base/mdx/baseBlockPlugin";
import DisplayJSONEscapeSequence, { ValidSequences } from "../enums/DisplayJSONEscapeSequence";
import { DisplayJSONNodeTypes } from "../enums/DisplayJSONNodeTypes";
import { DisplayJSONNode, DisplayJSONNodeBase, DisplayJSONParametersNode, DisplayJSONTypeNode, dArray, dComment, dCommented, dFunction, dInnerValue, dLiteral, dObject, dRecord, dRecordDefinition, dType } from "../types/DisplayJSONNodes";
import { Root } from "../types/DisplayJSONProperties";
import { RecordTypes } from "../enums/DisplayJSONRecordTypes";

export const CreateDisplayJSON = (properties: Root, children: (dRecord | dComment)[]): DisplayJSONNode => {
  return CreateDisplayJSONNode(DisplayJSONNodeTypes.DisplayJSON, properties, children);
}

export const CreateCommentNode = (comment: DisplayJSONEscapeSequence): dComment => {
  switch (comment.sequence) {
    case ValidSequences["//"]:
      return CreateDisplayJSONNode(DisplayJSONNodeTypes.CommentLine, { comment: comment.content });
    case ValidSequences["/*"]:
      return CreateDisplayJSONNode(DisplayJSONNodeTypes.CommentBlock, { comment: comment.content });
    default:
      throw new Error(`Unsupported comment sequence! \`${comment.sequence}\` (\`${comment.content}\`)`);
  }
}

export const CreateStringValueNode = (value: DisplayJSONEscapeSequence, comments: dComment[]): dLiteral => {
  switch (value.sequence) {
    case ValidSequences["\""]:
      return TryCreateCommentedNode(
        CreateDisplayJSONNode(DisplayJSONNodeTypes.DoubleQuote, {
          value: value.content
        }),
        comments
      );
    case ValidSequences["'"]:
      return TryCreateCommentedNode(
        CreateDisplayJSONNode(DisplayJSONNodeTypes.SingleQuote, {
          value: value.content
        }),
        comments
      );
    case ValidSequences["`"]:
      return TryCreateCommentedNode(
        CreateDisplayJSONNode(DisplayJSONNodeTypes.BacktickQuote, {
          value: value.content
        }),
        comments
      );
    default:
      throw new Error(`Unsupported string sequence! \`${value.sequence}\` (\`${value.content}\`)`);
  }
}

export const CreateExpandedTypeNode = (typeName: string, comments: dComment[], expandedType?: dArray | dObject): dType => {
  const children: [dObject | dArray | DisplayJSONTypeNode] = [CreateTypeNode(typeName)];
  if(expandedType) children.push(expandedType);
  return TryCreateCommentedNode(
    CreateDisplayJSONNode(DisplayJSONNodeTypes.ExpandedType, undefined, children),
    comments
  );
}

export const CreateTypeNode = (typeName: string): DisplayJSONTypeNode => {
  return CreateDisplayJSONNode(DisplayJSONNodeTypes.Type, { name: typeName });
}

export const CreateTopLevelRecordDefinition = (recordType: RecordTypes, recordName: string): dRecordDefinition => {
  return CreateDisplayJSONNode(DisplayJSONNodeTypes.TopLevelRecordDefinition, {
    name: recordName,
    type: recordType
  })
}

export const CreateRecordDefinition = (recordName: string): dRecordDefinition => {
  return CreateDisplayJSONNode(DisplayJSONNodeTypes.RecordDefinition, {
    name: recordName
  })
}

export const CreateRecordNode = (fieldDefinition: dRecordDefinition, recordContent: dInnerValue, comments?: dComment[]): dRecord => {
  return TryCreateCommentedNode(
    CreateDisplayJSONNode(DisplayJSONNodeTypes.Record, undefined, [
      fieldDefinition,
      recordContent
    ]),
    comments
  )
}

export const CreateArrayNode = (children: (dInnerValue | dComment)[]): dArray => {
  return CreateDisplayJSONNode(DisplayJSONNodeTypes.Array, undefined, children)
}

export const CreateFunctionNode = (params: (dInnerValue | dComment)[], returnType: dType, comments: dComment[]): dFunction => {
  return TryCreateCommentedNode(
    CreateDisplayJSONNode(DisplayJSONNodeTypes.Function, undefined, [
      CreateParametersNode(params),
      returnType
    ]),
    comments
  );
}

export const CreateParametersNode = (params: (dInnerValue | dComment)[]): DisplayJSONParametersNode => {
  return CreateDisplayJSONNode(DisplayJSONNodeTypes.Parameters, undefined, params);
}

export const CreateObjectNode = (children: (dRecord | dComment)[]): dObject => {
  return CreateDisplayJSONNode(DisplayJSONNodeTypes.Object, undefined, children)
}

export const TryCreateCommentedNode = <NodeType extends DisplayJSONNodeBase<any, any>>(node: NodeType, comments: dComment[]): dCommented<NodeType> => {
  if (!comments) return node;
  return CreateDisplayJSONNode(DisplayJSONNodeTypes.CommentedNode, undefined, [
    ...comments,
    node
  ]);
}

export const CreateDisplayJSONNode = <Type extends DisplayJSONNodeTypes, Properties = undefined>(type: Type, properties: Properties, children?: DisplayJSONNodeBase<any, any>[]): DisplayJSONNodeBase<Type, Properties> => {
  const stringType = DisplayJSONNodeTypes[type];
  return createTreeNode(stringType, properties, type, children)
}