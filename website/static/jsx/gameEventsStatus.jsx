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

class GameEventsStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = { games: [] };
  }

  componentDidMount() {
    fetch('https://game-events-status.overwolf.com/all_prod.json')
      .then(response => response.json())
      .then(response => {
        const games = [];
        for (let game of response) {
          // Ignore state 0 (unsupported)
          if (game.state == 0) continue;

          if (!GamesMetadata[game.game_id]) continue;

          GamesMetadata[game.game_id].state = game.state;
          games.push(GamesMetadata[game.game_id]);
        }

        this.setState({ games });
      })
  }

  render() {
    const list = this.state.games.map(game => {
      let className = 'game ';
      switch (game.state) {
        case 1:
          className += 'good';
          break;
        case 2:
          className += 'medium';
          break;
        case 3:
          className += 'bad';
          break;
      }

      return <GameListItem
        key={game.id}
        className={className}
        path={game.path}
        imgSrc={game.iconUrl}
        text={game.name}
      />
    });

    list.sort((a, b) => {
      return a.props.text < b.props.text ? -1 : 1;
    })

    return (
      <article className="hentry">
        <div className="gep-games-list">
          <GamesList>
            {list}
          </GamesList>
          <ul className="legend">
            <li className="good">Good to go</li>
            <li className="medium">Some game events may be unavailable</li>
            <li className="bad">Game events are currently unavailable</li>
          </ul>
        </div>
      </article>
    );
  }
}

ReactDOM.render(<GameEventsStatus />, gameEventsStatus);