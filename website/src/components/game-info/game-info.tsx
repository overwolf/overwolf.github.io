import React, { useEffect, useState } from 'react';
import './game-info.scss';
import { GamesMetadata } from '../game-events-status/gamesMetaData';
import { stateToCss } from '../game-events-status/events-utils';
import LauncherGamesList from './launcher-games-list';
import StatusToolTip from './status-tooltip';
import Preloader from '../preloader/preloader';
import SpecificGameInfo, { AllLinksOn, DisabledLinks } from './specific-game-info';

function GameInfo(props: { gameId: any; page: "docs" | "status" | "compliance"; }) {
  const {
    gameId,
    page
  } = props;

  const [gameStatus, setGameStatus] = useState<number | null>(null);

  // ---------------------------------------------------------------------------

  useEffect(() => {

    async function getGameStatus() {
      await fetch(`https://game-events-status.overwolf.com/${gameId}_prod.json`)
      .then(response => response.json())
      .then(data => setGameStatus(data.state));
    }
    getGameStatus();

  }, []);

  // ---------------------------------------------------------------------------

  const metaData = GamesMetadata[gameId] as GameMetaData;
  const launcherData = GamesMetadata[metaData.launcher] as GameMetaData;
  const launcherGames = metaData?.games;
  const mainVariant = GamesMetadata[metaData.mainVariant] as GameMetaData;
  const subVariants = metaData.subVariants;

  console.log(metaData);

  // ---------------------------------------------------------------------------
  return gameStatus != null ? (
    <section className='game-info-section'>
      <div className="game-info-item">

        <h1
          className={`game-info-title ${gameStatus ? stateToCss(gameStatus) : ''}`}>
          <img src={GamesMetadata[gameId].iconLargeUrl}/>
          <span>{GamesMetadata[gameId].name}</span>

          {gameStatus &&
            <StatusToolTip gameState={gameStatus} />
          }
        </h1>

        <ul className='game-info-groups'>

          { !mainVariant &&
            <li className='main'>
              <SpecificGameInfo metaData={metaData} type="Game" disabledLinks={LinkToggler(page)} />
            </li>
          }

          {mainVariant &&
            <>
              <li className='main'>
                <SpecificGameInfo metaData={mainVariant} type="Game" disabledLinks={AllLinksOn()} />
              </li>

              <li>
                <SpecificGameInfo metaData={metaData} type="Game" disabledLinks={LinkToggler(page, LinkTogglerSub(mainVariant, metaData))} />
              </li>
            </>
          }

          { subVariants && subVariants.map((subVariant) => {
              const subMetaData = GamesMetadata[subVariant];
              return (
                <li>
                  <SpecificGameInfo metaData={subMetaData} type="Game" disabledLinks={LinkTogglerSub(metaData, subMetaData)} />
                </li>
              );
            })
          }
          
          { launcherData &&
            <li>
              <SpecificGameInfo metaData={launcherData} type="Launcher" disabledLinks={AllLinksOn()} />
            </li>
          }

        </ul> 


      </div>

        {launcherGames?.length &&
          <LauncherGamesList gamesListData={launcherGames} />
        }

        {page === "status" &&
          <ul className="legend">
            <li className="good">Good to go</li>
            <li className="medium">Some events may be unavailable</li>
            <li className="bad">Events are currently unavailable</li>
          </ul>
        }

    </section>
  ) : (
    <Preloader small={true}/>
  );

}

function LinkTogglerSub(main: GameMetaData, variant: GameMetaData) : DisabledLinks {
  return {
    docs: main.docs === variant.docs,
    compliance: main.compliance === variant.compliance,
    status: main.path === variant.path
  };
}

function LinkToggler(page: string, disabled: DisabledLinks = AllLinksOn()): DisabledLinks {
  disabled[page] = true;
  return disabled;
}

export default GameInfo;
