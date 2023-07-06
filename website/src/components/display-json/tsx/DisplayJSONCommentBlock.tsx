import React from 'react';
import { CommentBlock, DisplayJSONProps } from "../types/DisplayJSONProperties";
import NewLine from './syntactic/NewLine';
import Indent from './utils/Indent';

function DisplayJSONCommentBlock(props: DisplayJSONProps<CommentBlock>) {
  const {} = props;
  // ---------------------------------------------------------------------------

  return (
    <span className='comment-block'>
      <Indent/>{props.comment}<NewLine />
    </span>
  );
}

export default DisplayJSONCommentBlock;