import React, { useEffect, useState } from 'react';
import GameEventsStatus from './gameEventsStatus';
import gameData from '~games-data/game-data.json';
import SpecificGameEventsStatus from './specificGameEventsStatus';

import Preloader from '../preloader/preloader';

// TODO: Convert to use GameMetaData
function EventsData(props) {
  const {
    allGames,
    specificGame,
    gameId,
    docsPath,
    urlAsDocsPath = false,
    onlyGames = false,
    onlyLaunchers = false,
    endOfLife = undefined,
  } = props;

  const [gameListData, setGameListData] = useState(null);
  const [gameStatus, setGameStatus] = useState(null);

  useEffect(() => {
    if (allGames) {
      async function getGameList() {
        await fetch('https://game-events-status.overwolf.com/all_prod.json')
          .then((response) => response.json())
          .then((response) => {
            const games = [];

            for (const game of response) {
              // Ignore state 0 (unsupported)
              // if (game.state == 0) continue;

              if (!gameData[game.game_id]) continue;

              // exclude the launchers
              if (onlyGames && gameData[game.game_id].games) continue;

              // exclude the games
              if (onlyLaunchers && !gameData[game.game_id].launcher) continue;

              gameData[game.game_id].state = gameData[game.game_id].endOfLife
                ? 0
                : game.state;

              games.push(gameData[game.game_id]);
            }

            setGameListData(games);
          });
      }

      getGameList();
    }

    if (specificGame) {
      async function getStatus() {
        await fetch(
          `https://game-events-status.overwolf.com/${gameId}_prod.json`,
        )
          .then((response) => response.json())
          .then((data) => setGameStatus(data));
      }

      getStatus();
    }
  }, []);

  return gameListData != null || gameStatus != null ? (
    <>
      {allGames && gameListData != null && (
        <GameEventsStatus
          gameListData={gameListData}
          urlAsDocsPath={urlAsDocsPath}
        />
      )}

      {specificGame && gameStatus != null && (
        <SpecificGameEventsStatus
          gameStatusData={gameStatus}
          gameId={gameId}
          docsPath={gameData[gameId].rawPath}
          endOfLife={endOfLife}
        />
      )}
    </>
  ) : (
    <Preloader />
  );
}

export default EventsData;
