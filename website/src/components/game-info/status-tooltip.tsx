import React from 'react';
import { stateToTxt } from '../game-events-status/events-utils';



function StatusToolTip(props: { gameState: number; }) {
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