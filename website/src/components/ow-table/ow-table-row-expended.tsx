import './ow-tabs.scss';
import React, {FC} from 'react';

interface OWTableRowExpendedProps {
  children: React.ReactNode;
}

// -----------------------------------------------------------------------------

const OWTableRowExpended: FC<OWTableRowExpendedProps> = props => {
  const {
    children
  } = props;

  return (
    <tr className='expanded-row'>
      <td>{children}</td>
    </tr>
  );
};

export default OWTableRowExpended;