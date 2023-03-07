import './ow-table.scss';
import React, {FC} from 'react';
interface OWTableProps {
  children: React.ReactNode;
  headerCellNames: Array<string>;
}

// -----------------------------------------------------------------------------

const OWTable: FC<OWTableProps> = props => {
  const {
    children,
    headerCellNames = []
  } = props;

  return (
    <section className='ow-table'>
      <div className='ow-table-header'>
        <div className='ow-table-header-row'>
          {headerCellNames.length != 0 &&
            headerCellNames.map( (th, i) => <div key={i}> {th} </div> )
          }
        </div>
      </div>

        <div className='ow-table-body'>
          {children}
        </div>

    </section>
  );
};

export default OWTable;