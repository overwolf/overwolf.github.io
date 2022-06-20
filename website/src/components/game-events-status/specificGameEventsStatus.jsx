import React from 'react';
import './gep-game-list.scss'

function SearchBar(props) {
  return (
    <form role="search" method="get" className="search-game" action="#" autoComplete="off" onSubmit={(e) => {e.preventDefault()}}>
      <input type="search" name="search" className="search-input" placeholder="Search for game events, e.g. “kill”" onKeyUp={(e) => {filterEvents(e)}} />
      <button type="submit" className="search-submit" title="Search">
        <img src="../../img/search.svg"  />
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

  const { gameStatusData, gamesMetaData, gameID, docsPath } = props;
  // ---------------------------------------------------------------------------

  const stateToCss = (state) => {
    let css = '';
    switch (state) {
      case 1:
        css = 'good';
        break;
      case 2:
        css = 'medium';
        break;
      case 3:
        css = 'bad';
        break;
    }
    return css;
  }
  // ---------------------------------------------------------------------------

  const getEventsByType = (type) => {

    if (!gameStatusData.features  || gameStatusData.features.length === 0) {
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
  const stateCss = stateToCss(gameStatusData.state);
  const imgSrc = gamesMetaData[gameID].iconLargeUrl;
  const name = gamesMetaData[gameID].name;
  // ---------------------------------------------------------------------------

  return (
    <article className="hentry">
      <div className="entry-content">
        <div className="gep-game">

          <h3 className={`game-title ${stateCss}`}>
            <img src={imgSrc}  />
            {name}
            <a href={`${docsPath}`} title="full API docs">Go to the API docs page</a>
          </h3>

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
