import React, { useEffect, useState } from 'react';
import GameEventsStatus from '@site/src/components/game-events-status/gameEventsStatus';
import SpecificGameEventsStatus from '@site/src/components/game-events-status/specificGameEventsStatus';
import { GamesMetadata } from './gamesMetaData';
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

              if (!GamesMetadata[game.game_id]) continue;

              // exclude the launchers
              if (onlyGames && GamesMetadata[game.game_id].games) continue;

              // exclude the games
              if (onlyLaunchers && !GamesMetadata[game.game_id].launcher)
                continue;

              GamesMetadata[game.game_id].state = GamesMetadata[game.game_id]
                .endOfLife
                ? 0
                : game.state;

              games.push(GamesMetadata[game.game_id]);
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
          docsPath={docsPath}
          endOfLife={endOfLife}
        />
      )}
    </>
  ) : (
    <Preloader />
  );
}

export default EventsData;
