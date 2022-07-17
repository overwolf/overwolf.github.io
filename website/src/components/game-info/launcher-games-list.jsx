import React, { useState, useRef } from 'react';
import { GamesMetadata } from '../game-events-status/gamesMetaData';
import GameInfoListItem from './game-info-list-item';

function LauncherGamesList(props) {
  const {gamesListData} = props;

  const [glIsOpen, setGlIsOpen] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);
  const expendContainer = useRef(null);


  const gameList = gamesListData.map((gameID) =>
    <li>

      <h3>
        <img src={GamesMetadata[gameID].iconLargeUrl}/>
        <span>{GamesMetadata[gameID].name}</span>
      </h3>

      <p><span>Game ID: </span>{gameID}</p>

      { GamesMetadata[gameID].path &&
        <GameInfoListItem
          name={`Game events status`}
          pathUrl={GamesMetadata[gameID].path}
        />
      }

      { GamesMetadata[gameID].docs &&
        <GameInfoListItem
          name={`Game API docs`}
          pathUrl={GamesMetadata[gameID].docs}
        />
      }

      { GamesMetadata[gameID].compliance &&
        <GameInfoListItem
          name={`Game compliance page`}
          pathUrl={GamesMetadata[gameID].compliance}
        />
      }

    </li>
  );

   // ---------------------------------------------------------------------------

  function handleExpandCollapse() {

    if(glIsOpen) {
      setContainerHeight(0);
      setGlIsOpen(false);
    } else {
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
        style={{height: containerHeight+'px'}}
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