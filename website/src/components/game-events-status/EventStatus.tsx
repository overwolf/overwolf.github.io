import React from 'react';
import "./gep-game-list.scss";
import Status from '@site/static/img/components/game-events-status/status.svg'
import { stateToCss } from './events-utils';

function EventStatus(props: {name: string, platformStatus?: number, electronStatus?: number}) {
  const { name, platformStatus, electronStatus } = props;

  // ---------------------------------------------------------------------------

  return (
    <div className="row">
      <div className='text'>{name}</div>
      <div className={`status ${stateToCss(platformStatus ?? 0)}`}><Status/></div>
      <div className={`status ${stateToCss(electronStatus ?? 0)}`}><Status/></div>
    </div>
  );
}

export default EventStatus;