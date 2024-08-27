import React from 'react';
import GameInfo from '../game-info/game-info';
import { stateToCss } from './events-utils';
import './gep-game-list.scss';
import electronIcon from '../../../static/img/components/game-events-status/overwolf-electron.png';
import overwolfIcon from '../../../static/img/components/game-events-status/overwolf-platform.png';
import EventStatus from './EventStatus';

function SearchBar(props) {
  return (
    <form role="search" method="get" className="search-game" action="#" autoComplete="off" onSubmit={(e) => { e.preventDefault() }}>
      <input type="search" name="search" className="search-input" placeholder="Search for game events, e.g. “kill”" onKeyUp={(e) => { filterEvents(e) }} />
      <button type="submit" className="search-submit" title="Search">
        <svg className='games-icon'><use href="../../img/sprite.svg#searchIcon" /></svg>
      </button>
    </form>
  );
}
// ---------------------------------------------------------------------------

function filterEvents(e) {

  const searchInputTarget = e.target

  const list = document.querySelectorAll('.game-data .body');
  const search = searchInputTarget.value.toLowerCase();

  if (search.length === 0) {

    list.forEach(li => li.removeAttribute("style"));

  } else {

    list.forEach(function (li) {
      const textNode = li.querySelector('.text');
      const text = textNode?.textContent?.toLowerCase();

      if (text?.includes(search))
        li.removeAttribute("style")
      else
        li["style"].display = "none"
    });

  }

}
// ---------------------------------------------------------------------------

function SpecificGameEventsStatus(props) {

  const { gameStatusData, gameId, docsPath, endOfLife } = props;
  // ---------------------------------------------------------------------------

  const getEventsByType = (type: number) => {

    console.log(docsPath)

    if(docsPath) {
      window.location.href = `https://dev.overwolf.com/ow-native/reference/live-game-data-gep/supported-games/${docsPath}?game-tab=events-status`;
    } else {
      window.location.href = `https://dev.overwolf.com/ow-native/guides/general-tech/game-events-status-health`;
    }

    if (!gameStatusData.features || gameStatusData.features.length === 0) {
      return (<EventStatus name='Coming soon' />)
    }

    const list: JSX.Element[] = []

    for (let feature of gameStatusData.features) {
      for (let key of feature.keys) {
        if (key.type == type) {
          list.push(
            <EventStatus key={key} name={key.name} platformStatus={key.state} electronStatus={key.state} />
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

          <GameInfo gameId={gameId} page={"status"} />

          {!endOfLife && <>
            <SearchBar></SearchBar>

            <div className="game-events-info">

              <div className="game-data">
                <div className='table'>
                  <div className="row">
                    <h4 className='title'>Events</h4>
                    <img className='icon'
                      alt={"Overwolf Platform"}
                      title={"Overwolf Platform"}
                      src={overwolfIcon}
                    />
                    <img className='icon'
                      alt={"Overwolf Electron"}
                      title={"Overwolf Electron"}
                      src={electronIcon}
                    />
                  </div>
                  {events}
                </div>
              </div>

              <div className="game-data">
                <div className='table'>
                  <div className="row">
                    <h4 className='title'>Info updates</h4>
                    <img className='icon'
                      alt={"Overwolf Platform"}
                      title={"Overwolf Platform"}
                      src={overwolfIcon}
                    />
                    <img className='icon'
                      alt={"Overwolf Electron"}
                      title={"Overwolf Electron"}
                      src={electronIcon}
                    />
                  </div>
                  {updates}
                </div>
              </div>
            </div>
          </>
          }
        </div>
      </div>
    </article>
  );

}

export default SpecificGameEventsStatus;
