import React, { useState } from 'react';

const stateToTxt = (state) => {
  let txt = '';
  switch (state) {
    case 1:
      txt = 'Good to go';
      break;
    case 2:
      txt = 'Some events may be unavailable';
      break;
    case 3:
      txt = 'Events are currently unavailable';
      break;
  }
  return txt;
}

function StatusToolTip(props) {
  const {gameState} = props;

  return (
    <div className='status-tooltip-trigger'>
      <div className='status-tooltip'>
        <span>{stateToTxt(gameState)}</span>
      </div>
    </div>
  )
}

export default StatusToolTip;