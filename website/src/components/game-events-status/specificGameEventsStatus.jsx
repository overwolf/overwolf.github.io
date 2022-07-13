import React from 'react';
import GameInfo from '../game-info/game-info';
import { stateToCss } from './events-utils/events-utils';
import './gep-game-list.scss';

function SearchBar(props) {
  return (
    <form role="search" method="get" className="search-game" action="#" autoComplete="off" onSubmit={(e) => {e.preventDefault()}}>
      <input type="search" name="search" className="search-input" placeholder="Search for game events, e.g. “kill”" onKeyUp={(e) => {filterEvents(e)}} />
      <button type="submit" className="search-submit" title="Search">
        <svg className='games-icon'><use href="../../img/sprite.svg#searchIcon" /></svg>
      </button>
    </form>
  );
}
// ---------------------------------------------------------------------------

function filterEvents(e) {

  const searchInputTarget = e.target

  const list = document.querySelectorAll('.game-data ul li');
  let search = searchInputTarget.value.toLowerCase();

  if ( search.length === 0 ) {

    list.forEach(li => li.removeAttribute("style"));

  } else {

    list.forEach(function (li) {
      let text = li.textContent.toLowerCase();

      if ( text.includes(search) )
       li.removeAttribute("style")
      else
      li.style.display = "none"
    });

  }

}
// ---------------------------------------------------------------------------

function SpecificGameEventsStatus(props) {

  const { gameStatusData, gameID, docsPath } = props;
  // ---------------------------------------------------------------------------

  const getEventsByType = (type) => {

    if (!gameStatusData.features || gameStatusData.features.length === 0) {
      return (<li className="coming-soon">Coming soon</li>)
    }

    let idx = 0;
    const list = []

    for (let feature of gameStatusData.features) {
      for (let key of feature.keys) {
        if (key.type == type) {
          list.push(
            <li className={stateToCss(key.state)} key={idx++}>
              {key.name}
            </li>
          );
        }
      }
    }

    return list;
  }
  // ---------------------------------------------------------------------------

  const events = getEventsByType(0);
  const updates = getEventsByType(1);

  // ---------------------------------------------------------------------------

  return (
    <article>
      <div className="entry-content">
        <div className="gep-game">

          <GameInfo gameID={gameID} showStatus={false} />

          <SearchBar></SearchBar>

          <div className="game-events-info">

            <div className="game-data">
              <h4>Events</h4>
              <ul>
                {events}
              </ul>
            </div>

            <div className="game-data">
              <h4>Info updates</h4>
              <ul>
                {updates}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </article>
  );

}

export default SpecificGameEventsStatus;
