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

    // do stuff

  }

  return (
    <div className='ow-table-body-expended-row-group' ref={rowGroup}>
      {children}
    </div>
  );
};

export default OWexpandedRowGroup;