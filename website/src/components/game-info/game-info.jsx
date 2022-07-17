import React, { useEffect, useState } from 'react';
import './game-info.scss';
import { GamesMetadata } from '../game-events-status/gamesMetaData';
import { stateToCss } from '../game-events-status/events-utils/events-utils';
import GameInfoListItem from './game-info-list-item';
import LauncherGamesList from './launcher-games-list';
import StatusToolTip from './status-tooltip';

function GameInfo(props) {
  const {
    gameID,
    showCompliance = true,
    showDocs = true,
    showStatus = true,
    showLauncherDocs = true,
  } = props;

  const [gameStatus, setGameStatus] = useState(null);

  // ---------------------------------------------------------------------------

  useEffect(() => {

    async function getGameStatus() {
      await fetch(`https://game-events-status.overwolf.com/${gameID}_prod.json`)
      .then(response => response.json())
      .then(data => setGameStatus(data));
    }

    getGameStatus();

  }, []);

  // ---------------------------------------------------------------------------

  const gameOrLauncherIdName = GamesMetadata[gameID].launcher ? 'Game Launcher ID' : 'Game ID';
  const gameOrLauncherName = GamesMetadata[gameID].launcher ? 'Launcher' : 'Game';
  const launcherID = GamesMetadata[gameID].launcherId;
  const launcherGameList = GamesMetadata[gameID].launcher ? GamesMetadata[gameID].launcher.games.length : 0;
  const IsDisplayOrGameID = GamesMetadata[gameID].displayId ?  GamesMetadata[gameID].displayId : gameID;

  // ---------------------------------------------------------------------------
  return (
    <section className='game-info-section'>
      <div className="game-info-item">

        <h1
          className={`game-info-title ${gameStatus ? stateToCss(gameStatus.state) : ''}`}>
          <img src={GamesMetadata[gameID].iconLargeUrl}/>
          <span>{GamesMetadata[gameID].name}</span>

          {gameStatus &&
            <StatusToolTip gameState={gameStatus.state} />
          }
        </h1>

        <ul className='game-info-list'>

          <li>
            <span>{gameOrLauncherIdName}:</span>
            {IsDisplayOrGameID}
          </li>

          { GamesMetadata[gameID].path && showStatus &&
            <li>
              <GameInfoListItem
                name={`${gameOrLauncherName} events status`}
                pathUrl={GamesMetadata[gameID].path}
              />
            </li>
          }

          { GamesMetadata[gameID].docs && showDocs && showLauncherDocs &&
            <li>
              <GameInfoListItem
                name={`${gameOrLauncherName} API docs`}
                pathUrl={GamesMetadata[gameID].docs}
              />
            </li>
          }

          { GamesMetadata[gameID].compliance && showCompliance && gameOrLauncherName == 'Game' &&
            <li>
              <GameInfoListItem
                name={`Game compliance page`}
                pathUrl={GamesMetadata[gameID].compliance}
              />
            </li>
          }

        </ul>

        {launcherID &&

          <ul className='launcher-info-list'>

            <li>
              <span>Game Launcher ID:</span>{launcherID}
            </li>

            { GamesMetadata[launcherID].path &&
              <li>
                <GameInfoListItem
                  name={"Launcher events status"}
                  pathUrl={GamesMetadata[launcherID].path}
                />
              </li>
            }

            { GamesMetadata[launcherID].docs &&
              <li>
                <GameInfoListItem
                  name={"Launcher API docs"}
                  pathUrl={GamesMetadata[launcherID].docs}
                />
              </li>
            }

          </ul>
        }

      </div>

        {launcherGameList > 0 &&
          <LauncherGamesList gamesListData={GamesMetadata[gameID].launcher.games} />
        }

        {!showStatus &&
          <ul className="legend">
            <li className="good">Good to go</li>
            <li className="medium">Some events may be unavailable</li>
            <li className="bad">Events are currently unavailable</li>
          </ul>
        }

    </section>
  );

}

export default GameInfo;
