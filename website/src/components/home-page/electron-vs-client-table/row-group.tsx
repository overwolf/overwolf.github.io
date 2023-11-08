import React, { FC, useState } from 'react';
import './electron-vs-client-table.scss';

interface EVCrowGroup {
  title: string;
  nativeText: string;
  electronText: string;
  green?: boolean;
  nativeGreen?: boolean;
  electronGreen?: boolean;
}

const EVCrowGroup: FC<EVCrowGroup> = props => {
  const {
    title,
    nativeText,
    electronText,
    green = false,
    nativeGreen = false,
    electronGreen = false
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
      <h4>{title}</h4>
      <p className='native' title={`Native ${title}`}>{nativeText}</p>
      <p className='electron' title={`Electron ${title}`}>{electronText}</p>
    </div>
  );
};

export default EVCrowGroup;
