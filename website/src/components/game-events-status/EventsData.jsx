import React, { useEffect, useState } from 'react';
import GameEventsStatus from '@site/src/components/game-events-status/gameEventsStatus';
import SpecificGameEventsStatus from '@site/src/components/game-events-status/specificGameEventsStatus';
import { GamesMetadata } from './gamesMetaData';

  function EventsData(props) {
    const { allGames, specificGame, gameID, docsPath} = props;
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
              if (game.state == 0) continue;

              if (!GamesMetadata[game.game_id]) continue;

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
          await fetch(`https://game-events-status.overwolf.com/${gameID}_prod.json`)
          .then(response => response.json())
          .then(data => setGameStatus(data));
        }

        getStatus();

      }

    }, []);

    return (
      <>

        { allGames && gameListData != null &&
          <GameEventsStatus gameListData={gameListData} />
        }

        { specificGame && gameStatus != null &&
          <SpecificGameEventsStatus gameStatusData={gameStatus} gameID={gameID} docsPath={docsPath} />
        }

      </>
    );
  }

export default EventsData;