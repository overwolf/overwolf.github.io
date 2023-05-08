import React, {FC} from 'react';
import { checkHashUrl, updateUrl } from './code-block-utils';

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

  const handleLiveLink = (e) => {
    e.preventDefault();
    const codeBlock = document.getElementById(codeBlockID);
    if(codeBlock === null) return;
    codeBlock.querySelector('.target')?.classList.remove('target');
    checkHashUrl(codeBlock, targetID);
    updateUrl(targetID)
  }

  return (
    <a
      className='code-block-live-link'
      onClick={handleLiveLink}
      href={`#${targetID}`} //fallback link
    >
      {text}
    </a>
  );
};

export default CodeBlockLiveLink;