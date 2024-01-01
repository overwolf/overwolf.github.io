import React, {FC, useRef} from 'react';

interface OWdataCellProps {
  children: React.ReactNode;
  thTitle: string;
  useAsMobileTitle?: boolean;
  desktopOnly?: boolean;
  width?: string;
  bold?: boolean;
  center?: boolean;
}

// -----------------------------------------------------------------------------

const OWdataCell: FC<OWdataCellProps> = props => {
  const {
    children,
    thTitle,
    width,
    bold,
    center,
    desktopOnly,
    useAsMobileTitle} = props;
  const cell = useRef<HTMLDivElement>(null);

  if(cell.current !== null) {

    // set manual styles if needed
    if (width) {
      cell.current.style.width = width;
    }
    if (bold) {
      cell.current.style.fontWeight = 'bold';
    }
    if (center) {
      cell.current.style.textAlign = 'center';
    }

    //set data attribute for mobile content in title of row
    // if (useAsMobileTitle) {
    //   cell.current.setAttribute('data-cell', 'mobile');
    // }
  }



  return (
    <div
      className={`ow-data-cell ${desktopOnly || useAsMobileTitle ? 'desktop-only' : ''}`}
      ref={cell}
    >
      <span className='mobile-label mobile-only'>{thTitle}</span>
      <span>{children}</span>
    </div>
  );
};

export default OWdataCell;