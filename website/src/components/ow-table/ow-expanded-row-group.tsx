import React, {FC, Children, useRef, useState} from 'react';

interface OWexpandedRowGroupProps {
  children: React.ReactNode;
  expandButton: boolean;
}

// -----------------------------------------------------------------------------

const OWexpandedRowGroup: FC<OWexpandedRowGroupProps> = props => {
  const {children} = props;

  return (
    <div className='ow-table-body-expended-row-group'>
      {children}
    </div>
  );
};

export default OWexpandedRowGroup;