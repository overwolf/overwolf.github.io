import React, {FC} from 'react';
import { checkHashUrl } from './code-block-utils';

interface CodeBlockLiveLinkProps {
  text: string;
  targetID: string;
  codeBlockID: string;
}

// -----------------------------------------------------------------------------

const CodeBlockLiveLink: FC<CodeBlockLiveLinkProps> = props => {
  const {
    text,
    targetID,
    codeBlockID
  } = props;

  const handleLiveLink = () => {
    const codeBlock = document.getElementById(codeBlockID);
    if(codeBlock === null) return;
    codeBlock.querySelector('.target')?.classList.remove('target');
    checkHashUrl(codeBlock, targetID);
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