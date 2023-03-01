import './ow-table.scss';
import React, {FC, Children} from 'react';
import useThemeState from '../hooks/theme-state';

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
  const themeState = useThemeState();

  // -----------------------------------------------------------------------------

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