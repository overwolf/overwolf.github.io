---
id: overwolf-games-launchers-events-lol
title: League of Legends Launcher Events
sidebar_label: LOL Launcher Events
---

Please read the [overwolf.games.launchers.events](overwolf-games-launchers-events#how-to-register-for-features) documentation page to learn how to use Overwolf game launchers events.

:::important Game Launcher ID
10902
:::

:::tip
if the  game launcher wasn't closed by the user, it is possible to access the game launcher methods while being in-game.
:::


## Sample Apps
* [LOL game launcher sample app](https://github.com/overwolf/lol-launcher-sample-app)

## Available Features

* [game_flow](#game-flow)
* [summoner_info](#summoner-info)
* [champ_select](#champ-select)
* [lobby_info](#lobby-info)

## `game_flow`

### Info Updates

key   | Category    | Values                    | Notes                 | Since Version |
------| ------------| ------------------------- | --------------------- | ------------- |
phase | game_flow   | The current phase in game |                       |   125.0       |

## `summoner_info`

### Info Updates

key             | Category       | Values                                        | Notes                 | Since Version |
----------------| ---------------| --------------------------------------------- | --------------------- | ------------- |
account_id      | summoner_info  | the local player’s account id                 |                       |   125.0       |
display_name    | summoner_info  | the local player’s display name               |                       |   125.0       |
internal_name   | summoner_info  | the local player’s internal name              |                       |   125.0       |
profile_icon_id | summoner_info  | the local player’s icon id	                 |                       |   125.0       |
summoner_id     | summoner_info  | the local player’s summoner id                |                       |   125.0       |
summoner_level	| summoner_info  |the local player’s summoner level              |                       |   125.0       |
region          | summoner_info  | Tthe local player’s server (EU/NA etc)        |                       |   125.0       |
locale          | summoner_info  | the local player’s language on his lol client |                       |   125.0       |
web_language    | summoner_info  | the local player’s type of language           |                       |   125.0       |
web_region      | summoner_info  | the local player’s web region                 |                       |   125.0       |
platform_id     | summoner_info  | the local player’s platform id                |                       |   125.0       |

## `champ_select`

### Info Updates

key      | Category       | Values                                                                                                 | Notes                 | Since Version |
---------| ---------------| ------------------------------------------------------------------------------------------------------ | --------------------- | ------------- |
raw      | info           | All relevant information regarding Champ-selection pre-start of the game. See [notes below](#raw-notes)|                       |   125.0       |

#### `raw` notes

There is a great deal of information that is provided. Few Example:

* Assigned Position
* Skin ID
* Champion ID
* Summoner Name

And many more.

## `lobby_info`

### Info Updates

key      | Category       | Values                                                                                                 | Notes                 | Since Version |
---------| ---------------| ------------------------------------------------------------------------------------------------------ | --------------------- | ------------- |
queueID  | lobby_info     |The queueID of the currently chosen game mode. See [notes below](#queueid-notes)                        |                       |   126.0       |

#### `queueID` notes

The queueID of the currently chosen game mode. Example:

`{"feature":"lobby_info","category":"lobby_info","key":"queueId","value":1090}`

* You can find here a [list of possible queue ids](https://developer.riotgames.com/game-constants.html). 
* 1090 is the queueID of TFT mode.

## `end_game`

### Info Updates

key   | Category    | Values                    | Notes                 | Since Version |
------| ------------| ------------------------- | --------------------- | ------------- |
tft_end_game_stats | end_game_tft| See [notes](#tft_end_game_stats-note) |                |   134.0       |

#### *tft_end_game_stats* note

Data Example:

```json
{  
   "launcherClassId":10902,
   "feature":"end_game",
   "info":{  
      "end_game_tft":{  
         "tft_end_game_stats":"{"gameId":4156875865,"gameLength":1983,"isRanked":false,"localPlayer":
{"boardPieces":[{"icon":"/lol-game-data/assets/v1/champion-icons/10.png","level":2,"name":"Kayle","price":5}
,{"icon":"/lol-game-data/assets/v1/champion-icons/222.png","level":2,"name":"Jinx","price":4},
{"icon":"/lol-game-data/assets/v1/champion-icons/89.png","level":2,"name":"Leona","price":4},
{"icon":"/lol-game-data/assets/v1/champion-icons/254.png","level":2,"name":"Vi","price":3},
{"icon":"/lol-game-data/assets/v1/champion-icons/236.png","level":2,"name":"Lucian","price":2},
{"icon":"/lol-game-data/assets/v1/champion-icons/114.png","level":2,"name":"Fiora","price":1},
{"icon":"/lol-game-data/assets/v1/champion-icons/86.png","level":2,"name":"Garen","price":1},
{"icon":"/lol-game-data/assets/v1/champion-icons/67.png","level":2,"name":"Vayne","price":1}],"companion":{"colorName":"","icon":"lol-game-data/assets/ASSETS/Loadouts/Companions/Tooltip_MiniGolem_Grey_Tier1.Companions.png","speciesName":"Runespirit"}
,"ffaStanding":0,"health":13,"iconId":3552,"isLocalPlayer":true,"puuid":"4379f318-5717-5891-8c29-29d703729921","rank":2,"summonerId":57427695,"summonerName":"PoSeiDonProX1"}
...
               }
   }
}
```
