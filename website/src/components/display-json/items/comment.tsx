import React, {FC} from 'react';

interface CodeBlockCommentProps {
  comment: string;
}

// -----------------------------------------------------------------------------

const CodeBlockComment: FC<CodeBlockCommentProps> = props => {
  const {
    comment
  } = props;

  return (
    <p>{comment}</p>
  );
};

export default CodeBlockComment;