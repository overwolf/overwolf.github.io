import React, { FC, useContext, useEffect } from 'react';
import './tooltip.scss';
import { killAllTooltips, handleMegaToolTip } from './tooltip-logic';
import { IsMobileContext } from '../contexts/is-mobile-context';

interface OWToolTipIconProps {
  text: string;
  position?: string;
  size?: string;
}

const OWToolTipIcon: FC<OWToolTipIconProps> = (props) => {
  const { text, position = 'top', size = '' } = props;

  const className = 'tool-tip-info-icon';
  const isMobile = useContext(IsMobileContext);

  const onScroll = () => {
    killAllTooltips();
  };

  const handleClickOutside = (e) => {
    // console.log(e.composedPath())
    if (e.target.className !== className) {
      killAllTooltips();
    }
  };

  useEffect(() => {
    if (window) window.addEventListener('scroll', onScroll);
    document.addEventListener('mousedown', handleClickOutside);
  }, []);

  // ---------------------------------------------------------------------------

  return (
    <>
      {isMobile && (
        <button
          className="tool-tip-info-icon"
          data-tooltip={text}
          tooltip-position={position}
          tooltip-size={size}
          onClick={handleMegaToolTip}
        >
          <svg className="tool-tip-icon">
            <use href="/img/sprite.svg#info"></use>
          </svg>
        </button>
      )}
      {!isMobile && (
        <button
          className={className}
          data-tooltip={text}
          tooltip-position={position}
          tooltip-size={size}
          onMouseOver={handleMegaToolTip}
          onMouseOut={killAllTooltips}
          onFocus={handleMegaToolTip}
          onBlur={killAllTooltips}
        >
          <svg className="tool-tip-icon">
            <use href="/img/sprite.svg#info"></use>
          </svg>
        </button>
      )}
    </>
  );
};

export default OWToolTipIcon;
