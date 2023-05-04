import React, {FC} from 'react';
import { checkHashUrl } from './code-block-utils';

interface CodeBlockLiveLinkProps {
  text: string;
  hash: string;
  codeBlockID: string;
}

// -----------------------------------------------------------------------------

const CodeBlockLiveLink: FC<CodeBlockLiveLinkProps> = props => {
  const {
    text,
    hash,
    codeBlockID
  } = props;

  const handleLiveLink = () => {
    const codeBlock = document.querySelector(codeBlockID);
    if(codeBlock === null) return;

    checkHashUrl(codeBlock, hash);
  }

  return (
    <button 
      className='code-block-live-link'
      onClick={handleLiveLink}
    >
      {text}
    </button>
  );
};

export default CodeBlockLiveLink;