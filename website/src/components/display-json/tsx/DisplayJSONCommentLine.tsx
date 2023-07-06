import React from 'react';
import { CommentLine, DisplayJSONProps } from "../types/DisplayJSONProperties";
import NewLine from './syntactic/NewLine';
import Indent from './utils/Indent';

function DisplayJSONCommentLine(props: DisplayJSONProps<CommentLine>) {
  const {} = props;
  // ---------------------------------------------------------------------------

  return (
    <span className='comment-line'>
      <Indent/>{props.comment}<NewLine/>
    </span>
  );
}

export default DisplayJSONCommentLine;