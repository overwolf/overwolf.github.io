import React, { FC, useEffect, useState } from 'react';
import EVCrowGroup from './row-group';
import PlatformLogo from './platform-logo';
import './electron-vs-client-table.scss';

interface ElectronVsClientTableProps {
  iconDarkSrc?: string;
}

const ElectronVsClientTable: FC<ElectronVsClientTableProps> = props => {
  const {} = props;

  //view type true = native false = electron
  const [viewType, setViewType] = useState(true); 
  const [elmRole, setElmRole] = useState(''); 
  const [showHideTable, setShowHideTable] = useState(false); 

  // ---------------------------------------------------------------------------

  useEffect(() => {
    if(window.innerWidth < 600) {
      setElmRole('button');
    } else {
      setElmRole('heading');
    }
  }, [])

  const handleToggleViewType = () => {
    if(window.innerWidth <= 600) {
      setViewType((current) => !current);
     }
  };

  const handleToggleTable = () => {
    setShowHideTable((current) => !current);
  };

  // ---------------------------------------------------------------------------

  return (
    <>
      <div className='table-action-container'>
      {!showHideTable &&
          <button
            className="btn-secondary show-hide-table-btn"
            onClick={handleToggleTable}
            >
              Open features comparison
          </button>
        }
      </div>

      <section className={`
        electron-vs-client-table-section 
        ${viewType ? 'native-is-shown' : 'electron-is-shown'}
      `}>

        <div className={`evc-inner ${showHideTable ? 'is-open' : ''}`}>

          <div className='evc-table'>

            <div className='table-header'>
              <h2>Feature Comparison</h2>
              <h2 
                className='logo native-logo' 
                onClick={handleToggleViewType}
                role={elmRole}
                aria-label='show/hide ow native parameters'
                >
                <PlatformLogo native={true} />
              </h2>
              <h2 
                className='logo electron-logo' 
                onClick={handleToggleViewType}
                role={elmRole}
                aria-label='show/hide ow electron parameters'
                >
                <PlatformLogo electron={true} />
              </h2>
            </div>

            <h3 className='group-title'>Performance</h3>
            <EVCrowGroup title='CPU Impact (Idle)' nativeText='0.2%' electronText='0.1%' />
            <EVCrowGroup title='CPU Impact (Avg Window Interaction)' nativeText='3%' electronText='0.5%' />
            <EVCrowGroup title='RAM Consumption (Peak)' nativeText='420 MB' electronText='380 MB' />
            <EVCrowGroup title='Total Running Processes' nativeText='9' electronText='7' />

            <h3 className='group-title'>Growth and Support</h3>
            <EVCrowGroup title='Analytics' nativeText='Yes' electronText='Yes' green={true} />
            <EVCrowGroup title='Marketing Support' nativeText='Yes' electronText='Yes' green={true} />
            <EVCrowGroup title='Funding Support' nativeText='Yes' electronText='Yes' green={true} />
            <EVCrowGroup title='Product Design and Development' nativeText='Yes' electronText='Yes' green={true} />
            <EVCrowGroup title='Developer Support' nativeText='Yes' electronText='Yes' green={true} />
            <EVCrowGroup title='Appstore Presence + Discoverability' nativeText='Yes' electronText='Yes' green={true} />

            <h3 className='group-title'>Tech</h3>
            <EVCrowGroup title='Overlay SDK (1500+ Games)' nativeText='Yes' electronText='Yes' green={true} />
            <EVCrowGroup title='Realtime Game Events API' nativeText='Yes' electronText='Yes' green={true} />
            <EVCrowGroup title='Ad Fraud Protection' nativeText='Yes' electronText='Yes' green={true} />
            <EVCrowGroup title='Dev Console' nativeText='Yes' electronText='Yes' green={true} />
            <EVCrowGroup title='Installer' nativeText='Yes' electronText='Optional' nativeGreen={true} />
            <EVCrowGroup title='Coupled with Overwolf Client' nativeText='Yes' electronText='No' nativeGreen={true} />

            <h3 className='group-title'>Terms and Conditions</h3>
            <EVCrowGroup title='Ads Revshare' nativeText='70/30' electronText='70/30' />
            <EVCrowGroup title='Subscriptions Revshare' nativeText='85/15' electronText='85/15' />

          </div>

        </div>

        {showHideTable &&
          <button
            className="btn-secondary show-hide-table-btn close-btn"
            onClick={handleToggleTable}
            >
              Close features comparison
          </button>
        }

      </section>

    </>
  );
};

export default ElectronVsClientTable;
