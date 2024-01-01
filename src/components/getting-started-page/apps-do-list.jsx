import './apps-do-list.scss';
import React from 'react';

function AppsDoList(props) {
 const { } = props;

// ---------------------------------------------------------------------------

  return (
    <ul className="what-apps-do-list">
      <li>
        <div className='asset'>
          <img src="/img/getting-started/apps-do-list/game-stats.svg" alt="Game Stats"/>
        </div>
        <div className='info'>
          <h3>Game Stats</h3>
          <p>Highlight in-game stats, keep track of useful intel, and even show a live performance analysis, directly within the game - encouraging better tactics and smarter plays.</p>
        </div>
      </li>
      <li className="build-recommendations">
        <div className='asset'>
          <img src="/img/getting-started/apps-do-list/builds-strategies.svg" alt="Builds & Strategies"/>
        </div>
        <div className='info'>
          <h3>Builds & Strategies</h3>
          <p>Provide recommendations for builds, loadouts, compositions, strategies, decks, and so much more, without the player ever leaving the game.</p>
        </div>
      </li>
      <li className="tournaments">
        <div className='asset'>
          <img src="/img/getting-started/apps-do-list/quality-of-life.svg" alt="Quality of Life"/>
        </div>
        <div className='info'>
          <h3>Quality of Life</h3>
          <p>Go above and beyond, identifying and fixing unplanned friction points in the original game. Become the natural complement to the most beloved titles.</p>
        </div>
      </li>
      <li className="highlights">
        <div className='asset'>
          <img src="/img/getting-started/apps-do-list/high.svg" alt="Highlights"/>
        </div>
        <div className='info'>
          <h3>Highlights</h3>
          <p>Automatically clip highlights based on in game events, such as kills, deaths, and more - so gamers can always look back at the moments that truly mattered.</p>
        </div>
      </li>
      <li className="easy-integration">
        <div className='asset'>
          <img src="/img/getting-started/apps-do-list/3rd-party.svg" alt="3rd Party Integration"/>
        </div>
        <div className='info'>
          <h3>3rd Party Integration</h3>
          <p>Integrate with any number of external services: Game forums, stream chats, even food ordering! The whole world, at your users' fingertips.</p>
        </div>
      </li>
    </ul>
  );

}

export default AppsDoList;