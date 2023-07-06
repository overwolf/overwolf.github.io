import { TreeNode } from "../../base/mdx/baseBlockPlugin";
import { DisplayJSONNodeTypes } from "../enums/DisplayJSONNodeTypes";
import { Comment, RecordDefinition, Root, StringValue, TopLevelRecordDefinition, TypeDefinition } from "./DisplayJSONProperties";

export type DisplayJSONNodeBase<Type extends DisplayJSONNodeTypes, Properties = undefined> = TreeNode<Type, Properties>

export interface DisplayJSONNode extends DisplayJSONNodeBase<DisplayJSONNodeTypes.DisplayJSON, Root> {

}

export interface DisplayJSONRecordNode extends DisplayJSONNodeBase<DisplayJSONNodeTypes.Record> {

}

export interface DisplayJSONRecordDefinitionNode extends DisplayJSONNodeBase<DisplayJSONNodeTypes.RecordDefinition, RecordDefinition> {

}

export interface DisplayJSONTopLevelRecordDefinitionNode extends DisplayJSONNodeBase<DisplayJSONNodeTypes.TopLevelRecordDefinition, TopLevelRecordDefinition> {
  
}

export interface DisplayJSONTypeNode extends DisplayJSONNodeBase<DisplayJSONNodeTypes.Type, TypeDefinition> {

}

export interface DisplayJSONExpandedTypeNode extends DisplayJSONNodeBase<DisplayJSONNodeTypes.ExpandedType> {

}

export interface DisplayJSONFunctionNode extends DisplayJSONNodeBase<DisplayJSONNodeTypes.Function> {

}

export interface DisplayJSONParametersNode extends DisplayJSONNodeBase<DisplayJSONNodeTypes.Parameters> {

}

export interface DisplayJSONObjectNode extends DisplayJSONNodeBase<DisplayJSONNodeTypes.Object> {

}

export interface DisplayJSONArrayNode extends DisplayJSONNodeBase<DisplayJSONNodeTypes.Array> {

}

export interface DisplayJSONCommentedNode extends DisplayJSONNodeBase<DisplayJSONNodeTypes.CommentedNode> {

}

export interface DisplayJSONCommentNode<Type extends DisplayJSONNodeTypes> extends DisplayJSONNodeBase<Type, Comment> {

}

export interface DisplayJSONCommentLineNode extends DisplayJSONCommentNode<DisplayJSONNodeTypes.CommentLine> {

}

export interface DisplayJSONCommentBlockNode extends DisplayJSONCommentNode<DisplayJSONNodeTypes.CommentBlock> {

}

export interface DisplayJSONQuoteNode<Type extends DisplayJSONNodeTypes> extends DisplayJSONNodeBase<Type, StringValue> {

}

export interface DisplayJSONDoubleQuoteNode extends DisplayJSONQuoteNode<DisplayJSONNodeTypes.DoubleQuote> {

}

export interface DisplayJSONSingleQuoteNode extends DisplayJSONQuoteNode<DisplayJSONNodeTypes.SingleQuote> {

}

export interface DisplayJSONBacktickQuoteNode extends DisplayJSONQuoteNode<DisplayJSONNodeTypes.BacktickQuote> {

}

export type dCommented<Node> = DisplayJSONCommentedNode | Node;
export type dRecord = dCommented<DisplayJSONRecordNode>;
export type dRecordDefinition = dCommented<DisplayJSONRecordDefinitionNode | DisplayJSONTopLevelRecordDefinitionNode>;
export type dInnerValue = dType | dFunction | dLiteral;
export type dLiteral = dCommented<DisplayJSONQuoteNode<any>>;
export type dType = dCommented<DisplayJSONExpandedTypeNode>;
export type dFunction = dCommented<DisplayJSONFunctionNode>;
export type dObject = DisplayJSONObjectNode;
export type dArray = DisplayJSONArrayNode;
export type dComment = DisplayJSONCommentNode<any>