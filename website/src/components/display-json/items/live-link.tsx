import React, {FC, MouseEventHandler} from 'react';
import { checkHashUrl, updateUrl } from '../display-json-utils';

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

  const handleLiveLink: MouseEventHandler<HTMLAnchorElement> = (e) => {
    // Check if this display json exists
    const codeBlock = document.getElementById(codeBlockID);
    // If it does not, then do nothing (making this act like a default link)
    if(codeBlock === null) return;
    // Prevent the default event from running
    e.preventDefault();
    // Remove the previous target from the code block
    codeBlock.querySelector('.target')?.classList.remove('target');
    checkHashUrl(codeBlock, targetID);
    updateUrl(targetID);
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