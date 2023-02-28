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
      <button className='expand-row' title="expand row">
        <span className={`hidden`}>Hide</span>
        <svg><use href="/img/sprite.svg#arrowDown" /></svg>
      </button>
      }
    </tr>
  );
};

export default OWTableRow;