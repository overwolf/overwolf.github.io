import React, { FC, useEffect, useRef, useState } from 'react';
import EVCrowGroup from './row-group';
import PlatformLogo from './platform-logo';
import './electron-vs-client-table.scss';
import OWToolTipIcon from '../../tooltip/ow-tooltip-icon';

interface ElectronVsClientTableProps {
  test?: string;
}

const ElectronVsClientTable: FC<ElectronVsClientTableProps> = props => {
  const {} = props;

  //view type true = native false = electron
  const [viewType, setViewType] = useState(true); 
  const [elmRole, setElmRole] = useState(''); 
  const [showHideTable, setShowHideTable] = useState(false); 
  const tableContainer = useRef<HTMLDivElement>(null);

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
    let ScrollOffset = -100;

    if(window.innerWidth <= 600) {
     ScrollOffset = -160;
    }

    if (tableContainer) {
      // 👇 Will scroll smoothly to the table
      const y = tableContainer.current.getBoundingClientRect().top + window.scrollY + ScrollOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

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

        <div className={`evc-inner ${showHideTable ? 'is-open' : ''}`} ref={tableContainer}>

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

            <h3 className='group-title'>
              Performance
              <OWToolTipIcon text="All performance benchmarks are measured on an ‘AMD Ryzen 5 5600X 6-Core Processor’, and include the total overhead for running and displaying a simple window." />
            </h3>
            <EVCrowGroup title='CPU Impact (Idle)' nativeText='0.2%' electronText='0.1%' />
            <EVCrowGroup title='CPU Impact (Avg Window Interaction)' nativeText='3%' electronText='0.5%' />
            <EVCrowGroup title='RAM Consumption (Peak)' nativeText='420 MB' electronText='380 MB' />
            <EVCrowGroup title='Total Running Processes' nativeText='9' electronText='7' />

            <h3 className='group-title'>Growth and Support</h3>
            <EVCrowGroup title='Analytics' nativeText='Yes' electronText='Yes' green={true} />
            <EVCrowGroup title='Marketing Support' nativeText='Yes' electronText='Yes' green={true} />
            <EVCrowGroup title='Funding Support' nativeText='Yes' electronText='Yes' green={true} />
            <EVCrowGroup
              title='Product Design and Development'
              nativeText='Yes'
              electronText='Yes'
              green={true}
              titleToolTip={'Branding, UI/UX, Development, Commercial design.'}
            />
            <EVCrowGroup title='Developer Support' nativeText='Yes' electronText='Yes' green={true} />
            <EVCrowGroup title='Appstore Presence + Discoverability' nativeText='Yes' electronText='Yes' green={true} />
            <EVCrowGroup
              title='Own Branding'
              nativeText='Yes'
              electronText='Yes'
              green={true}
              nativeToolTip={'OW-Native offers mixed branding (Overwolf + app) during installation, while OW-Electron offers 100% app branding.'}
            />

            <h3 className='group-title'>Tech</h3>
            <EVCrowGroup title='Overlay SDK (1500+ Games)' nativeText='Yes' electronText='Yes' green={true} />
            <EVCrowGroup title='Realtime Game Events API' nativeText='Yes' electronText='Yes' green={true} />
            <EVCrowGroup title='Ad Fraud Protection' nativeText='Yes' electronText='Yes' green={true} />
            <EVCrowGroup title='Dev Console' nativeText='Yes' electronText='Yes' green={true} />
            <EVCrowGroup title='Installer' nativeText='Yes' electronText='Optional' nativeGreen={true} />
            <EVCrowGroup
              title='Coupled with Overwolf Client'
              nativeText='Yes'
              electronText='No'
              nativeGreen={true}
              titleToolTip={"OW-Native requires Overwolf client installation to run the app, while OW-Electron doesn't require the client at all - the flow is entirely up to the app."}
            />

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
