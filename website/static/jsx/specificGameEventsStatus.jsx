function GamesList(props) {
  return (
    <ul className="list">
      {props.children}
    </ul>
  );
}

function GameListItem(props) {
  const { className, path, imgSrc, text } = props;
  return (
    <li className={className}>
      <a href={path}>
        <img src={imgSrc} />
        {text}
      </a>
    </li>
  );
}

function GameTitle(props) {
  const { className, imgSrc, name } = props;
  return (
    <h3 className={`game-title ${className}`}>
      <img src={imgSrc} />
      {name}
    </h3>
  );
}

function SearchBar(props) {
  return (
    <form role="search" method="get" className="search-game" action="#" autoComplete="off" onSubmit={(e) => {e.preventDefault()}}>
      <input type="search" name="search" className="search-input" placeholder="Search for game events, e.g. “kill”" />
      <button type="submit" className="search-submit" title="Search">
        <img src="/img/search.svg" />
      </button>
    </form>
  );
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

class GameEventsStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: {},
      gamesMetadata: GamesMetadata,
      id: GameID,
    };
  }

  componentDidMount() {
    this.loadSearchScript();

    fetch(`https://game-events-status.overwolf.com/${this.state.id}_prod.json`)
      .then(response => response.json())
      .then(status => {
        this.setState({ status });
      })
  }

  loadSearchScript() {
    const script = document.createElement("script");

    script.src = "https://developers.overwolf.com/wp-content/themes/owdev/js/game-events-status.js";
    script.async = true;

    document.body.appendChild(script);
  }

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
            <GameTitle className={stateCss} name={name} imgSrc={imgSrc}></GameTitle>
            <SearchBar></SearchBar>
            <Lists events={events} updates={updates}></Lists>
          </div>
        </div>
      </article>
    );
  }
}

ReactDOM.render(<GameEventsStatus />, gameEventsStatus);