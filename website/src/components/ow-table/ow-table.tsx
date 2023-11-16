import './ow-table.scss';
import React, { FC, useState } from 'react';
import Preloader from '../preloader/preloader';
interface OWTableProps {
  children: React.ReactNode;
  headerCellNames: Array<string>;
}

// -----------------------------------------------------------------------------

const OWTable: FC<OWTableProps> = (props) => {
  const { children, headerCellNames = [] } = props;

  const [layoutLoad, isLayoutLoad] = useState(false);

  setTimeout(() => {
    isLayoutLoad(true);
  }, 1500);

  return (
    <>
      {!layoutLoad && <Preloader />}
      <section
        className="ow-table"
        style={{ display: layoutLoad ? '' : 'none' }}
      >
        <div className="ow-table-header">
          <div className="ow-table-header-row">
            {headerCellNames.length != 0 &&
              headerCellNames.map((th, i) => <div key={i}> {th} </div>)}
          </div>
        </div>

        <div className="ow-table-body">{children}</div>
      </section>
    </>
  );
};

export default OWTable;
