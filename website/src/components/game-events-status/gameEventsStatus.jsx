import React from 'react';
import './game-list.scss';

// ---------------------------------------------------------------------------
function GameListItem(props) {
  const { className, path, imgSrc, text, gameID } = props;
  return (
    <li className={className}>
      <a href={path}>
        <span className='game-info'>
          <img src={imgSrc}  /> {text}
        </span>
        <span className='game-id'>Game ID: <span>{gameID}</span></span>
      </a>
    </li>
  );
}
// ---------------------------------------------------------------------------

function renderGameList(gameListData, urlAsDocsPath) {

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
      gameID={game.displayId ? game.displayId : game.id}
      className={className}
      path={urlAsDocsPath ? game.docs : game.path}
      imgSrc={game.iconUrl}
      text={game.name}
    />
  });

  return gameListItems;

}
// ---------------------------------------------------------------------------

function GameEventsStatus(props) {
  const { gameListData, urlAsDocsPath } = props;

  const gameList = renderGameList(gameListData, urlAsDocsPath);

  gameList.sort((a, b) => {
    return a.props.text < b.props.text ? -1 : 1;
  })

  // ---------------------------------------------------------------------------
  return (
    <article>
      <div className="gep-games-list">
      <ul className="legend">
        <li className="good">Good to go</li>
        <li className="medium">Some game events may be unavailable</li>
        <li className="bad">Game events are currently unavailable</li>
      </ul>

        <ul className="list">
          {gameList}
        </ul>
      </div>
    </article>
  );

}

export default GameEventsStatus;

