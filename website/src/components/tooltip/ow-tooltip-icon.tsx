import React, { FC, useEffect } from 'react';
import './tooltip.scss';
import { killAllTooltips, handleMegaToolTip } from './tooltip-logic';

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

  const className = 'tool-tip-info-icon';

  const onScroll = () => {
    killAllTooltips()
  }

  const handleClickOutside = e => {
    // console.log(e.composedPath())
    if (e.target.className != className) {
      killAllTooltips()
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    document.addEventListener('mousedown', handleClickOutside);
  }, [])
  
  // ---------------------------------------------------------------------------

  return (
    <>
      {window.innerWidth < 600 &&
        <button className='tool-tip-info-icon'
          data-tooltip={text}
          tooltip-position={position}
          tooltip-size={size}
          onClick={handleMegaToolTip}
          >
          <svg className='tool-tip-icon'><use href="/img/sprite.svg#info"></use></svg>
        </button>
      }
      {window.innerWidth > 600 &&
        <button className={className}
          data-tooltip={text}
          tooltip-position={position}
          tooltip-size={size}
          onMouseOver={handleMegaToolTip}
          onMouseOut={killAllTooltips}
          onFocus={handleMegaToolTip}
          onBlur={killAllTooltips}
          >
          <svg className='tool-tip-icon'><use href="/img/sprite.svg#info"></use></svg>
        </button>
      }
    </>
  );

}

export default OWToolTipIcon;