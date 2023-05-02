import React, { useEffect, useState } from 'react';
import GameEventsStatus from '@site/src/components/game-events-status/gameEventsStatus';
import SpecificGameEventsStatus from '@site/src/components/game-events-status/specificGameEventsStatus';
import { GamesMetadata } from './gamesMetaData';
import Preloader from '../preloader/preloader';

  function EventsData(props) {
    const {
      allGames,
      specificGame,
      gameId,
      docsPath,
      urlAsDocsPath = false,
      onlyGames = false,
      onlyLaunchers = false
    } = props;

    const [gameListData, setGameListData] = useState(null);
    const [gameStatus, setGameStatus] = useState(null);

    useEffect(() => {

      if(allGames) {
        async function getGameList() {
          await fetch('https://game-events-status.overwolf.com/all_prod.json')
          .then(response => response.json())
          .then(response => {
            const games = [];

            for (let game of response) {

              // Ignore state 0 (unsupported)
              // if (game.state == 0) continue;

              if (!GamesMetadata[game.game_id]) continue;

              //exclude the launchers
              if(onlyGames && GamesMetadata[game.game_id].launcher) continue;

              //exclude the games
              if(onlyLaunchers && !GamesMetadata[game.game_id].launcher) continue;

              GamesMetadata[game.game_id].state = game.state;

              games.push(GamesMetadata[game.game_id]);
            }

            setGameListData(games)
          })
        }

        getGameList()
      }

      if(specificGame) {

        async function getStatus() {
          await fetch(`https://game-events-status.overwolf.com/${gameId}_prod.json`)
          .then(response => response.json())
          .then(data => setGameStatus(data));
        }

        getStatus();

      }

    }, []);

    return gameListData != null || gameStatus != null ? (
      <>

        { allGames && gameListData != null &&
          <GameEventsStatus gameListData={gameListData} urlAsDocsPath={urlAsDocsPath} />
        }

        { specificGame && gameStatus != null &&
          <SpecificGameEventsStatus gameStatusData={gameStatus} gameId={gameId} docsPath={docsPath} />
        }

      </>
    ) : (
      <Preloader />
    );
  }

export default EventsData;