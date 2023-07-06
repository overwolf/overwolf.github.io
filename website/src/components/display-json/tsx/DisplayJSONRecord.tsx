import "../scss/DisplayJSON.scss";
import React from 'react';
import { DisplayJSONPropsChildren, TopLevelRecordDefinition } from "../types/DisplayJSONProperties";
import { ExactChildren, ToChildArray } from "./utils/ChildValidation";
import Equals from "./syntactic/Equals";
import Column from "./syntactic/Column";
import Indent from "./utils/Indent";
import NewLine from "./syntactic/NewLine";

function DisplayJSONRecord(props: DisplayJSONPropsChildren) {
  const { children } = props;
  ExactChildren(children, 2);
  const [definition, value] = props.children as JSX.Element[];
  const isToplevel = (definition.props as TopLevelRecordDefinition).type;
  const assign = IsFunction(value) ? undefined : 
    (isToplevel ? <Equals/> : <Column/>);
  // ---------------------------------------------------------------------------

  return (
    <>
      <span className="record">{definition}{assign}{value}</span>{isToplevel && <><NewLine/><NewLine/></>}
    </>
  );

}

function IsFunction(value: JSX.Element) {
  const directType = value.props.mdxType;
  const extractedCommentedType = ToChildArray(value.props?.children).slice(-1)[0];
  if(directType === "Function") return true;
  if(directType === "CommentedNode" &&
     extractedCommentedType?.props.mdxType === "Function") return true;
  return false;
}

export default DisplayJSONRecord;