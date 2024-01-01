import React, { useState, useRef } from 'react';
import gameData from '~games-data/game-data.json';
import FancyLink from '../fancy/fancy-link';
import SpecificGameInfo, { AllLinksOn } from './specific-game-info';

function LauncherGamesList(props) {
  const { gamesListData } = props;

  const [glIsOpen, setGlIsOpen] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);
  const expendContainer = useRef(null);

  const gameList = gamesListData.map((gameID) => {
    const metaData = gameData[gameID] as GameMetaData;
    return (
      <li>
        <h3>
          <img src={metaData.iconLargeUrl} />
          <span>{metaData.name}</span>
        </h3>
        <SpecificGameInfo metaData={metaData} type="Game" disabledLinks={AllLinksOn()} />
      </li>
    )
  });

  // ---------------------------------------------------------------------------

  function handleExpandCollapse() {

    if (glIsOpen) {
      setContainerHeight(0);
      setGlIsOpen(false);
    } else {
      // @ts-ignore
      // TODO: Fix this
      setContainerHeight(expendContainer.current.querySelector('ul').clientHeight);
      setGlIsOpen(true);
    }

  }

  // ---------------------------------------------------------------------------

  return (
    <div className={`expended-launcher-game-list ${glIsOpen ? 'is-open' : ''}`}>

      <button className='expend-btn' onClick={handleExpandCollapse}>
        <svg className='games-icon'><use href="/img/sprite.svg#gamesIcon" /></svg>
        Launcher's supported games list
        <svg><use href="/img/sprite.svg#arrowDown" /></svg>
      </button>

      <div className='launcher-game-list-inner'
        ref={expendContainer}
        style={{ height: containerHeight + 'px' }}
      >
        <ul className='launcher-game-list'>
          {gameList}
        </ul>

        <button className='hide-button' onClick={handleExpandCollapse}>Hide List</button>
      </div>
    </div>
  )
}

export default LauncherGamesList;