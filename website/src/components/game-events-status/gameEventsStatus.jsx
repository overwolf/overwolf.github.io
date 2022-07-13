import React from 'react';
import './game-list.scss';

// ---------------------------------------------------------------------------
function GameListItem(props) {
  const { className, path, imgSrc, text } = props;
  return (
    <li className={className}>
      <a href={path}>
        <img src={imgSrc}  />
        {text}
      </a>
    </li>
  );
}
// ---------------------------------------------------------------------------

function renderGameList(gameListData) {

  const gameListItems = gameListData.map(game => {
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

  return gameListItems;

}
// ---------------------------------------------------------------------------

function GameEventsStatus(props) {
  const { gameListData } = props;

  const gameList = renderGameList(gameListData);

  gameList.sort((a, b) => {
    return a.props.text < b.props.text ? -1 : 1;
  })

  // ---------------------------------------------------------------------------
  return (
    <article>
      <div className="gep-games-list">
        <ul className="list">
          {gameList}
        </ul>

        <ul className="legend">
          <li className="good">Good to go</li>
          <li className="medium">Some game events may be unavailable</li>
          <li className="bad">Game events are currently unavailable</li>
        </ul>
      </div>
    </article>
  );

}

export default GameEventsStatus;

