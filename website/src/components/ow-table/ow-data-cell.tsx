import React, {FC, useRef} from 'react';

interface OWdataCellProps {
  children: React.ReactNode;
  thTitle: string;
  width?: string;
  bold?: boolean;
  center?: boolean;
}

// -----------------------------------------------------------------------------

const OWdataCell: FC<OWdataCellProps> = props => {
  const { children, thTitle, width, bold, center } = props;
  const cell = useRef<HTMLDivElement>(null)

  if(cell.current !== null) {
    if (width) {
      cell.current.style.width = width;
    }
    if (bold) {
      cell.current.style.fontWeight = 'bold';
    }
    if (center) {
      cell.current.style.textAlign = 'center';
    }
  }

  return (
    <div className='ow-data-cell' ref={cell}>
      <span className='mobile-only'>{thTitle}:</span>
      <span>{children}</span>
    </div>
  );
};

export default OWdataCell;