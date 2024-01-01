import React, {FC, useRef} from 'react';

interface OWexpandedRowGroupProps {
  children: React.ReactNode;
  mobileTitle: string;
  mobileDescription: string;
}

// -----------------------------------------------------------------------------

const OWexpandedRowGroup: FC<OWexpandedRowGroupProps> = props => {
  const { children, mobileTitle, mobileDescription } = props;
  // const rowGroup = useRef<HTMLDivElement>(null);

  // if(rowGroup.current !== null) {
  //     const TitleElem = document.createElement('h1')
  //     const dataCellHeadingForMobile = rowGroup.current?.querySelectorAll(".desktop-only span");
  //     dataCellHeadingForMobile.forEach((span: any)=> {
  //       const spanElm = document.createElement('div') as any;
  //       const textItem = span.textContent;
  //       spanElm.innerHTML = textItem;
  //       TitleElem.appendChild(spanElm)
  //     })
  //     rowGroup.current.appendChild(TitleElem);
  //   }

  return (
    <div className='ow-table-body-expended-row-group'>
      {children}
      <h1>
        <div>{mobileTitle}</div>
        <div>{mobileDescription}</div>
      </h1>
    </div>
  );
};

export default OWexpandedRowGroup;