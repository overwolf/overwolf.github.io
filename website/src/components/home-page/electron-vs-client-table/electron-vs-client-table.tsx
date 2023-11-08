import React, { FC, useState } from 'react';
import './electron-vs-client-table.scss';

interface ElectronVsClientTableProps {
  iconDarkSrc?: string;
}

const ElectronVsClientTable: FC<ElectronVsClientTableProps> = props => {
  const {} = props;

  // const [appBtn, seAppBtn] = useState(false);

  // ---------------------------------------------------------------------------

  // const handleToggleApp = () => {
  //   seAppBtn((current) => !current);
  // };


  return (
    <section className="electron-vs-client-table-section">
      <button className="btn-secondary">Open features comparison</button>
    </section>
  );
};

export default ElectronVsClientTable;
