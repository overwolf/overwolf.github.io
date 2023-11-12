import React, { FC } from 'react';
import './electron-vs-client-table.scss';
import OWToolTipIcon from '../../tooltip/ow-tooltip-icon';

interface EVCrowGroupProps {
  title: string;
  nativeText: string;
  electronText: string;
  green?: boolean;
  nativeGreen?: boolean;
  electronGreen?: boolean;
  titleToolTip?: string;
  nativeToolTip?: string;
  electronToolTip?: string;
}

const EVCrowGroup: FC<EVCrowGroupProps> = props => {
  const {
    title,
    nativeText,
    electronText,
    green = false,
    nativeGreen = false,
    electronGreen = false,
    titleToolTip = '',
    nativeToolTip = '',
    electronToolTip = ''
  } = props;

  return (
    <div
      className={`
        evc-row-group 
        ${green ? 'green' : ''}
        ${nativeGreen ? 'native-green' : ''}
        ${electronGreen ? 'electron-green' : ''}
        `}
      >
      <h4>{title}
        { titleToolTip &&
          <OWToolTipIcon text={titleToolTip} />
        }
      </h4>
      <p className='native' title={`Native ${title}`}>
        {nativeText}
        { nativeToolTip &&
          <div className='tt-container'><OWToolTipIcon text={nativeToolTip} /></div>
        }
      </p>
      <p className='electron' title={`Electron ${title}`}>
        {electronText}
        { electronToolTip &&
          <div className='tt-container'><OWToolTipIcon text={electronToolTip} /></div>
        }
      </p>
    </div>
  );
};

export default EVCrowGroup;
