import React, {FC, useRef} from 'react';

interface OWexpandedRowGroupProps {
  children: React.ReactNode;
  expandButton: boolean;
}

// -----------------------------------------------------------------------------

const OWexpandedRowGroup: FC<OWexpandedRowGroupProps> = props => {
  const { children } = props;
  const rowGroup = useRef<HTMLDivElement>(null);

  if(rowGroup.current !== null) {
      const TitleElem = document.createElement('h1')
      const dataCellHeadingForMobile = rowGroup.current?.querySelectorAll(".desktop-only span");
      dataCellHeadingForMobile.forEach((span: any)=> {
        const spanElm = document.createElement('div') as any;
        const textItem = span.textContent;
        spanElm.innerHTML = textItem;
        TitleElem.appendChild(spanElm)
      })
      rowGroup.current.appendChild(TitleElem);
    }

  return (
    <div className='ow-table-body-expended-row-group' ref={rowGroup} >
      {children}
    </div>
  );
};

export default OWexpandedRowGroup;