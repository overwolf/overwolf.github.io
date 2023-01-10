import './apps-live-list.scss';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function AppLiveList(props) {
  const { } = props;
  const [siteTheme, setSiteTheme] = useState('light');
  // ---------------------------------------------------------------------------

  useEffect(() => {
    const html = document.querySelector('html');

    switch(html.dataset.theme) {
      case 'light':
        setSiteTheme('light')
        break;
      case 'dark':
        setSiteTheme('dark')
        break;
    }

    html.addEventListener("click", () => {

      setTimeout(() => {
        setSiteTheme(html.dataset.theme)
      }, 0)

     }, false);

  }, []);

  return (
    <ul className="were-apps-live-list">
      <li className="in-game">
        <div className='asset'>
          <img src={`/img/getting-started/apps-live-list/in-game-overlay-${siteTheme}.svg`} alt="In-Game Overlays"/>
        </div>
        <div className='info'>
          <h3>In-Game Overlays</h3>
          <p>Using overlays, apps can extend a game's UI, create value in otherwise "dead" moments, or just generally work as seamless extensions of the game. Minesweeper during loading screens anyone?</p>
        </div>
      </li>
      <li className="desktop">
        <div className='asset'>
          <img src={`/img/getting-started/apps-live-list/independent-${siteTheme}.svg`} alt="Independent Desktop Windows"/>
        </div>
        <div className='info'>
          <h3>Independent Desktop Windows</h3>
          <p>Apps can also provide native desktop windows, containing anything from game debriefing, performance analysis, highlights management, and much much more, running regardless of a game.</p>
        </div>
      </li>
      <li className="companion-screen">
        <div className='asset'>
          <img src={`/img/getting-started/apps-live-list/screen-${siteTheme}.svg`} alt="Second Screen Views"/>
        </div>
        <div className='info'>
          <h3>Second Screen Views</h3>
          <p>As more and more gamers adopt setups with more than one screen, so can your app expand. Provide even better, more detailed functionality during the game, without hiding even a single extra in-game pixel.</p>
        </div>
      </li>
    </ul>
  );

}

export default AppLiveList;