import React, { FC } from 'react';
import './tooltip.scss';
import { handleMegaToolTipMouseOut, handleMegaToolTipOnOver } from './tooltip-logic';

interface OWToolTipIconProps {
  text: string;
  position?: string;
  size?: string;
}

const OWToolTipIcon: FC<OWToolTipIconProps> = props => {
  const {
    text,
    position = 'top',
    size = ''
  } = props;

  // ---------------------------------------------------------------------------

  return (
    <button className='tool-tip-info-icon'
      data-tooltip={text} 
      tooltip-position={position} 
      tooltip-size={size}
      onMouseOver={handleMegaToolTipOnOver} 
      onMouseOut={handleMegaToolTipMouseOut}
      onFocus={handleMegaToolTipOnOver}
      onBlur={handleMegaToolTipMouseOut}
      >
      <svg className='tool-tip-icon'><use href="/img/sprite.svg#info"></use></svg>
    </button>
  );

}

export default OWToolTipIcon;