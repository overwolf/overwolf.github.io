// import './ow-tabs.scss';
import React, {FC, Children, useRef, useState} from 'react';

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
  const [isRowExpended, setIsRowExpended] = useState<boolean>(false);

  const handleExpandRow = () => {
    if(row.current !== null) {
      const expandedRow = row.current.nextElementSibling as HTMLElement;
      const expandedRowContent = expandedRow?.firstChild as HTMLElement;
      
      if(!isRowExpended) {
        expandedRow.style.display = "table-row";
        const expandedRowHeight = expandedRowContent?.offsetHeight;
        expandedRow.style.height = `${expandedRowHeight}px`;
        setIsRowExpended(true);
      } else {
        expandedRow.style.display = "none";
        setIsRowExpended(false);
      }
    }

  }

  return (
    <div className='ow-table-body-row' ref={row}>
      {children}

      {isExpended &&
        <button 
          className={`expand-row ${isRowExpended ? 'is-expanded' : ''}`} 
          title={`${!isRowExpended ? 'Expand Row ' : ''}`}
          onClick={handleExpandRow}
        >
          {isRowExpended && 
            <span>Hide</span>
          }
          
          <svg><use href="/img/sprite.svg#arrowDown" /></svg>

        </button>
      }

    </div>
  );
};

export default OWTableRow;