// import './ow-tabs.scss';
import React, {FC, Children} from 'react';

interface OWTableRowProps {
  children: React.ReactNode;
  isExpended: boolean;
}

// -----------------------------------------------------------------------------

const OWTableRow: FC<OWTableRowProps> = props => {
  const {
    children,
    isExpended = false
  } = props;

  return (
    <tr>
      {children}
      {isExpended && 
      <button>
        <span>Hide</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.37534 7.21913C9.74056 6.92696 10.2595 6.92696 10.6247 7.21913L15.6247 11.2191C16.056 11.5641 16.1259 12.1934 15.7809 12.6247C15.4359 13.056 14.8066 13.1259 14.3753 12.7809L10 9.28062L5.62473 12.7809C5.19347 13.1259 4.56418 13.056 4.21917 12.6247C3.87416 12.1934 3.94408 11.5641 4.37534 11.2191L9.37534 7.21913Z" fill="#CCCCCC"/>
        </svg>
      </button>
      }
    </tr>
  );
};

export default OWTableRow;