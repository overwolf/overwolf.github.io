// import './ow-tabs.scss';
import React, {FC, Children, useRef} from 'react';

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

  const row = useRef<HTMLInputElement>(null);

  const handleExpandRow = () => {
    if(row.current !== null) {
      const expandedRow = row.current.nextElementSibling as HTMLElement;
      const expandedRowContent = expandedRow?.firstChild as HTMLElement;
      expandedRow.style.display = "table-row";

      const expandedRowHeight = expandedRowContent?.offsetHeight;
      expandedRow.style.height = `${expandedRowHeight}px`;

    }

  }

  return (
    <div className='ow-table-body-row' ref={row}>
      {children}
      {isExpended &&
      <button className='expand-row' title="expand row" onClick={handleExpandRow}>
        <span className={`hidden`}>Hide</span>
        <svg><use href="/img/sprite.svg#arrowDown" /></svg>
      </button>
      }
    </div>
  );
};

export default OWTableRow;