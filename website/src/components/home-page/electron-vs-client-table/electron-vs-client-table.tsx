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

      <div className='evc-inner'>

        <div className='evc-table'>

        <div className='table-header'>
          <h2>Feature Comparison</h2>
          <h2 className='logo'>
            <img
              src="/img/home-2023/native-vs-electron/native-logo-desktop.svg"
              alt="Overwolf Native"
              className="native-logo desktop"
              width={193}
              height={40}
            />
          </h2>
          <h2 className='logo'>
            <img
              src="/img/home-2023/native-vs-electron/electron-logo-desktop.svg"
              alt="Overwolf Electron"
              className="electron-logo desktop"
              width={215}
              height={40}
            />
          </h2>
        </div>

        </div>

      </div>

      <button className="btn-secondary show-hide-table-btn">Open features comparison</button>
    </section>
  );
};

export default ElectronVsClientTable;
