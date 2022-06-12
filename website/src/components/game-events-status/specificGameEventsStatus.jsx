import React from 'react';

function GameTitle(props) {
  const { className, imgSrc, name, href} = props;
  return (
      <h3 className={`game-title ${className}`}>
        <img src={imgSrc}  />
        {name}
        <a href={`${href}`} title="full API docs">Go to the API docs page</a>
      </h3>
  );
}


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

function EventsList(props) {
  const { title, events } = props;
  return (
    <div className="game-data">
      <h4>{title}</h4>
      <ul>
        {events}
      </ul>
    </div>
  );
}

function Lists(props) {
  return (
    <div className="game-events-info">
      <EventsList title="Events" events={props.events}></EventsList>
      <EventsList title="Info updates" events={props.updates}></EventsList>
  </div>
  )
}

class SpecificGameEventsStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: props.gameStatusData,
      gamesMetadata: props.gamesMetaData,
      id: props.gameID,
      apiLink: props.docsPath,
    };
  }

  // componentDidMount() {
  //   // const script = document.createElement("script");

  //   // script.src = "../../js/games_metadata.js";
  //   // script.async = true;

  //   // document.head.appendChild(script);

  //   fetch(`https://game-events-status.overwolf.com/${this.state.id}_prod.json`)
  //     .then(response => response.json())
  //     .then(status => {
  //       this.setState({ status });
  //     })
  // }

  // loadSearchScript() {
  //   const script = document.createElement("script");

  //   script.src = "/js/game-events-status.js";
  //   script.async = true;

  //   document.body.appendChild(script);
  // }

  stateToCss(state) {
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

  getEventsByType(type) {
    const { status } = this.state;
    const { features } = status;
    if (!features  || features.length === 0) {
      return (<li className="coming-soon">Coming soon</li>)
    }

    let idx = 0;
    const list = []

    for (let feature of features) {
      for (let key of feature.keys) {
        if (key.type == type) {
          list.push(
            <li className={this.stateToCss(key.state)} key={idx++}>
              {key.name}
            </li>
          );
        }
      }
    }

    return list;
  }

  render() {
    const events = this.getEventsByType(0);
    const updates = this.getEventsByType(1);
    const stateCss = this.stateToCss(this.state.status.state);
    const imgSrc = this.state.gamesMetadata[this.state.id].iconLargeUrl;
    const name = this.state.gamesMetadata[this.state.id].name;

    return (
      <article className="hentry">
        <div className="entry-content">
          <div className="gep-game">
            <GameTitle className={stateCss} name={name} imgSrc={imgSrc} href={this.state.apiLink}></GameTitle>
            <SearchBar href={name}></SearchBar>
            <Lists events={events} updates={updates}></Lists>
          </div>
        </div>
      </article>
    );


  }
}

export default SpecificGameEventsStatus;
