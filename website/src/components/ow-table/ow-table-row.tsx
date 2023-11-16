import React, { FC, useRef, useState } from 'react';
import useIsMobile from '../hooks/is-mobile-hook';

interface OWTableRowProps {
  children: React.ReactNode;
  expandButton?: boolean;
}

// -----------------------------------------------------------------------------

const OWTableRow: FC<OWTableRowProps> = (props) => {
  const { children, expandButton = false } = props;

  const row = useRef<HTMLDivElement>(null);
  const [isRowExpended, setIsRowExpended] = useState<boolean>(false);
  const isMobile = useIsMobile();

  const handleExpandRow = () => {
    if (row.current !== null) {
      const expandedRow = row.current.nextElementSibling as HTMLElement;

      if (!isRowExpended) {
        expandedRow.style.display = 'table-row';
        setExpandedRowHeight(true);
        setIsRowExpended(true);
      } else {
        expandedRow.style.display = 'none';
        setIsRowExpended(false);
      }
    }
  };

  const setExpandedRowHeight = (nextRowSibling: boolean) => {
    if (row.current !== null) {
      const expandedRow = nextRowSibling
        ? (row.current.nextElementSibling as HTMLElement)
        : (row.current as HTMLElement);

      const expandedRowContent = expandedRow?.firstChild as HTMLElement;
      const expandedRowHeight = expandedRowContent?.offsetHeight;
      expandedRow.style.height = `${expandedRowHeight}px`;
    }
  };

  return (
    <div
      className="ow-table-body-row"
      ref={row}
      onClick={() => {
        if (!isMobile) {
          setExpandedRowHeight(false);
        }
      }}
    >
      {children}

      {expandButton && (
        <button
          className={`expand-row ${isRowExpended ? 'is-expanded' : ''}`}
          onClick={handleExpandRow}
        >
          {!isRowExpended ? 'View Full' : 'Collapse'}
          <svg>
            <use href="/img/sprite.svg#arrowDown" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default OWTableRow;
