import './apps-live-list.scss';
import React from 'react';

function AppLiveList(props) {
 const { } = props;

// ---------------------------------------------------------------------------

  return (
    <ul className="icons-list were-apps-live-list">
      <li className="in-game">
        <h3>In-Game Overlays</h3>
        <p>Using overlays, apps can extend a game's UI, create value in otherwise "dead" moments, or just generally work as seamless extensions of the game.</p>
      </li>
      <li className="desktop">
        <h3>Independent Desktop Windows</h3>
        <p>Apps can also provide native desktop windows, containing anything from game debriefing, performance analysis, highlights management, and much much more, running regardless of a game.</p>
      </li>
      <li className="companion-screen">
        <h3>Second Screen Views</h3>
        <p>As more and more gamers adopt setups with more than one screen, so can your app expand. Provide even better, more detailed functionality during the game, without hiding even a single extra in-game pixel.</p>
      </li>
    </ul>
  );

}

export default AppLiveList;