import React, { useEffect, useState } from 'react';
import GameEventsStatus from '@site/src/components/game-events-status/gameEventsStatus';
import SpecificGameEventsStatus from '@site/src/components/game-events-status/specificGameEventsStatus';

  const GamesMetadata = {
    10878: {
      id: 10878,
      path: "#",
      iconUrl: "../../img/games-logos/battlerite.png",
      iconLargeUrl: "../../img/games-logos/large/battlerite.png",
      name: "Battlerite"
    },
    6365: {
      id: 6365,
      path: "../status/world-of-tanks",
      iconUrl: "../../img/games-logos/wot.png",
      iconLargeUrl: "../../img/games-logos/large/wot.png",
      name: "World Of Tanks"
    },
    10826: {
      id: 10826,
      path: "../status/rainbow-six-siege",
      iconUrl: "../../img/games-logos/rainbow_six_siege.png",
      iconLargeUrl: "../../img/games-logos/large/rainbow_six_siege.png",
      name: "Rainbow Six: Siege"
    },
    10798: {
      id: 10798,
      path: "../status/rocket-league",
      iconUrl: "../../img/games-logos/rocket_league.png",
      iconLargeUrl: "../../img/games-logos/large/rocket_league.png",
      name: "Rocket League"
    },
    10906: {
      id: 10906,
      path: "../status/pubg",
      iconUrl: "../../img/games-logos/pubg.png",
      iconLargeUrl: "../../img/games-logos/large/pubg.png",
      name: "PUBG"
    },
    5426: {
      id: 5426,
      path: "../status/lol",
      iconUrl: "../../img/games-logos/lol.png",
      iconLargeUrl: "../../img/games-logos/large/lol.png",
      name: "League of Legends"
    },
    9898: {
      id: 9898,
      path: "../status/hearthstone",
      iconUrl: "../../img/games-logos/hearthstone.png",
      iconLargeUrl: "../../img/games-logos/large/hearthstone.png",
      name: "Hearthstone"
    },
    21216: {
      id: 21216,
      path: "../status/fortnite",
      iconUrl: "../../img/games-logos/fortnite.png",
      iconLargeUrl: "../../img/games-logos/large/fortnite.png",
      name: "Fortnite"
    },
    7314: {
      id: 7314,
      path: "../status/dota2",
      iconUrl: "../../img/games-logos/dota2.png",
      iconLargeUrl: "../../img/games-logos/large/dota2.png",
      name: "Dota 2"
    },
    7764: {
      id: 7764,
      path: "../status/csgo",
      iconUrl: "../../img/games-logos/cs_go.png",
      iconLargeUrl: "../../img/games-logos/large/cs_go.png",
      name: "CS: GO"
    },
    21566: {
      id: 21566,
      path: "../status/apex",
      iconUrl: "../../img/games-logos/apex.png",
      iconLargeUrl: "../../img/games-logos/large/apex.png",
      name: "Apex Legends"
    },
    21570: {
      id: 21570,
      path: "../status/teamfight-tactics",
      iconUrl: "../../img/games-logos/tft.png",
      iconLargeUrl: "../../img/games-logos/large/tft.png",
      name: "Teamfight Tactics"
    },
    10746: {
      id: 10746,
      path: "../status/world-of-warships",
      iconUrl: "../../img/games-logos/wow.png",
      iconLargeUrl: "../../img/games-logos/large/wow.png",
      name: "World of Warships"
    },
    10624: {
      id: 10624,
      path: "../status/heroes-of-the-storm",
      iconUrl: "../../img/games-logos/hots.png",
      iconLargeUrl: "../../img/games-logos/large/hots.png",
      name: "Heroes of the Storm"
    },
    21308: {
      id: 21308,
      path: "../status/mtga",
      iconUrl: "../../img/games-logos/mtg.png",
      iconLargeUrl: "../../img/games-logos/large/mtg.png",
      name: "MTG Arena"
    },
    21586: {
      id: 21586,
      path: "../status/underlords",
      iconUrl: "../../img/games-logos/dota_underlords.png",
      iconLargeUrl: "../../img/games-logos/large/dota_underlords.png",
      name: "Dota Underlords"
    },
    5855: {
      id: 5855,
      path: "../status/sc2",
      iconUrl: "../../img/games-logos/sc2.png",
      iconLargeUrl: "../../img/games-logos/large/sc2.png",
      name: "StarCraft II"
    },
    10902: {
      id: 10902,
      path: "../status/lol-launcher",
      iconUrl: "../../img/games-logos/lol-launcher.png",
      iconLargeUrl: "../../img/games-logos/large/lol-launcher.png",
      name: "League of Legends Launcher"
    },
    7212: {
      id: 7212,
      path: "../status/path-of-exile",
      iconUrl: "../../img/games-logos/path-of-exile.png",
      iconLargeUrl: "../../img/games-logos/large/path-of-exile.png",
      name: "Path of Exile"
    },
    21620: {
      id: 21620,
      path: "../status/lor",
      iconUrl: "../../img/games-logos/lor.png",
      iconLargeUrl: "../../img/games-logos/large/lor.png",
      name: "Legends of Runeterra"
    },
    765: {
      id: 765,
      path: "../status/world-of-warcraft",
      iconUrl: "../../img/games-logos/warcraft.png",
      iconLargeUrl: "../../img/games-logos/large/warcraft.png",
      name: "World of Warcraft"
    },
    21634: {
      id: 21634,
      path: "../status/escape-from-tarkov",
      iconUrl: "../../img/games-logos/tarkov.png",
      iconLargeUrl: "../../img/games-logos/large/tarkov.png",
      name: "Escape From Tarkov"
    },
    21640: {
      id: 21640,
      path: "../status/valorant",
      iconUrl: "../../img/games-logos/valorant.png",
      iconLargeUrl: "../../img/games-logos/large/valorant.png",
      name: "Valorant"
    },
    10844: {
      id: 10844,
      path: "../status/overwatch",
      iconUrl: "../../img/games-logos/overwatch.png",
      iconLargeUrl: "../../img/games-logos/large/overwatch.png",
      name: "Overwatch"
    },
    8032: {
      id: 8032,
      path: "../status/minecraft",
      iconUrl: "../../img/games-logos/minecraft.png",
      iconLargeUrl: "../../img/games-logos/large/minecraft.png",
      name: "Minecraft"
    },
    8954: {
      id: 8954,
      path: "../status/warframe",
      iconUrl: "../../img/games-logos/warframe.png",
      iconLargeUrl: "../../img/games-logos/large/warframe.png",
      name: "Warframe"
    },
    21626: {
      id: 21626,
      path: "../status/warzone",
      iconUrl: "../../img/games-logos/warzone.png",
      iconLargeUrl: "../../img/games-logos/large/warzone.png",
      name: "Call of Duty: Warzone"
    },
    6350: {
      id: 6350,
      path: "../status/ff-xiv",
      iconUrl: "../../img/games-logos/ff-xiv.png",
      iconLargeUrl: "../../img/games-logos/large/ff-xiv.png",
      name: "Final Fantasy XIV"
    },
    21668: {
      id: 21668,
      path: "../status/valheim",
      iconUrl: "../../img/games-logos/valheim.png",
      iconLargeUrl: "../../img/games-logos/large/valheim.png",
      name: "Valheim"
    },
    21404: {
      id: 21404,
      path: "../status/splitgate",
      iconUrl: "../../img/games-logos/splitgate.png",
      iconLargeUrl: "../../img/games-logos/large/splitgate.png",
      name: "Splitgate: Arena Warfare"
    },
    21666: {
      id: 21666,
      path: "../status/fm2021",
      iconUrl: "../../img/games-logos/fm2021.png",
      iconLargeUrl: "../../img/games-logos/large/fm2021.png",
      name: "Football Manager 2021"
    },
    21856: {
      id: 21856,
      path: "../status/fm2022",
      iconUrl: "../../img/games-logos/fm2022.png",
      iconLargeUrl: "../../img/games-logos/large/fm2022.png",
      name: "Football Manager 2022"
    },
    21816: {
      id: 21816,
      path: "../status/new-world",
      iconUrl: "../../img/games-logos/new-world.png",
      iconLargeUrl: "../../img/games-logos/large/new-world.png",
      name: "New World"
    },
    21672: {
      id: 21672,
      path: "../status/eternal-return",
      iconUrl: "../../img/games-logos/eternal-return.png",
      iconLargeUrl: "../../img/games-logos/large/eternal-return.png",
      name: "Eternal Return"
    },
    21854: {
      id: 21854,
      path: "../status/halo-infinite",
      iconUrl: "../../img/games-logos/halo-infinite.png",
      iconLargeUrl: "../../img/games-logos/large/halo-infinite.png",
      name: "Halo Infinite"
    },
    21328: {
      id: 21328,
      path: "../status/hunt-showdown",
      iconUrl: "../../img/games-logos/hunt-showdown.png",
      iconLargeUrl: "../../img/games-logos/large/hunt-showdown.png",
      name: "Hunt Showdown"
    },
    21876: {
      id: 21876,
      path: "../status/vanguard",
      iconUrl: "../../img/games-logos/vanguard.png",
      iconLargeUrl: "../../img/games-logos/large/vanguard.png",
      name: "Call of Duty: Vanguard"
    }
  }

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
          <SpecificGameEventsStatus gamesMetaData={GamesMetadata} gameStatusData={gameStatus} gameID={gameID} docsPath={docsPath} />
        }

      </>
    );
  }

export default EventsData;