---
id: overwolf-games-launchers-events-lol
title: League of Legends Launcher Events
sidebar_label: LOL Launcher
---

Please read the [overwolf.games.launchers.events](overwolf-games-launchers-events#how-to-register-for-features) documentation page to learn how to use Overwolf game launchers events.

:::important Game Launcher ID
10902
:::

:::tip
if the  game launcher wasn't closed by the user, it is possible to access game launcher methods while being in-game.
:::

## Sample Apps

* [LOL game launcher sample app](https://github.com/overwolf/lol-launcher-sample-app)

## Available Features

* [game_flow](#game_flow)
* [summoner_info](#summoner_info)
* [champ_select](#champ_select)
* [lobby_info](#lobby_info)
* [end_game](#end_game)
* [lcu_info](#lcu_info)
* [game_info](#game_info)

## `game_flow`

### Info Updates

key   | Category    | Values                    | Notes                 | Since Version |
------| ------------| ------------------------- | --------------------- | ------------- |
phase | game_flow   | Current phase in the game |                       |   125.0       |

## `summoner_info`

### Info Updates

key             | Category       | Values                                        | Notes                 | Since Version |
----------------| ---------------| --------------------------------------------- | --------------------- | ------------- |
account_id      | summoner_info  | Local player’s account id                 |                       |   125.0       |
display_name    | summoner_info  | Local player’s display name               |                       |   125.0       |
internal_name   | summoner_info  | Local player’s internal name              |                       |   125.0       |
profile_icon_id | summoner_info  | Local player’s icon id	                 |                       |   125.0       |
summoner_id     | summoner_info  | Local player’s summoner id                |                       |   125.0       |
summoner_level	 | summoner_info  | Local player’s summoner level              |                       |   125.0       |
region          | summoner_info  | Local player’s server (EU/NA etc)        |                       |   125.0       |
locale          | summoner_info  | Local player’s selected LoL client language |                       |   125.0       |
web_language    | summoner_info  | Local player’s type of language           |                       |   125.0       |
web_region      | summoner_info  | Local player’s web region                 |                       |   125.0       |
platform_id     | summoner_info  | Local player’s platform id                |                       |   125.0       |
is_garena_user  | summoner_info  | Boolean - True / False                    | See [notes](#is_garena_user-note) |   143.0       |

#### *is_garena_user* note

Data Example:

```json
{"feature":"summoner_info","category":"summoner_info","key":"is_garena_user","value":false}
{"feature":"summoner_info","category":"summoner_info","key":"is_garena_user","value":true}
```

## `champ_select`

### Info Updates

key      | Category       | Values                                                                                                 | Notes                 | Since Version |
---------| ---------------| ------------------------------------------------------------------------------------------------------ | --------------------- | ------------- |
raw      | info           | All relevant information regarding Champion selection pre-start of the game. See [notes below](#raw-notes)|                       |   125.0       |

#### `raw` notes

There is a great deal of information provided. Few Example:

* Assigned Position
* Skin ID
* Champion ID
* Summoner Name

And much more.

## `lobby_info`

### Info Updates

key      | Category       | Values                                                                                                 | Notes                 | Since Version |
---------| ---------------| ------------------------------------------------------------------------------------------------------ | --------------------- | ------------- |
queueID  | lobby_info     |The queueID of the currently chosen game mode. See [notes below](#queueid-notes)                        |                       |   126.0       |

#### `queueID` notes

The queueID of the currently chosen game mode. Example:

`{"feature":"lobby_info","category":"lobby_info","key":"queueId","value":1090}`

* You can find here a [list of possible queue ids](https://developer.riotgames.com/game-constants.html). 
* 1090 is the queueID of TFT regular match.
* 1100 is the queueID of TFT ranked match.

## `end_game`

### Info Updates

key   | Category    | Values                    | Notes                 | Since Version |
------| ------------| ------------------------- | --------------------- | ------------- |
tft_end_game_stats | end_game_tft| See [notes](#tft_end_game_stats-note) |                |   134.0       |
lol_end_game_stats | end_game_lol| See [notes](#end_game_stats-note) |                |   137.0       |

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

#### *end_game_stats* note

Provides a variety of data regarding the previous game.
Data includes information such as:

* Damage Dealt
* Damage Taken
* Heals Given
* Magic Damage
* True Damage
* etc. etc..

The following object contains one team and one player, but the real object contains 2 teams and X player per team : 

```json
{
   "accountId":23894133,
         "basePoints":0,
         "battleBoostIpEarned":0,
         "boostIpEarned":0,
         "boostXpEarned":0,
         "causedEarlySurrender":false,
         "championId":75,
         "coOpVsAiMinutesLeftToday":180,
         "coOpVsAiMsecsUntilReset":0,
         "completionBonusPoints":0,
         "currentLevel":118,
         "customMinutesLeftToday":0,
         "customMsecsUntilReset":0,
         "difficulty":"NONE",
         "earlySurrenderAccomplice":false,
         "elo":0,
         "eloChange":0,
         "experienceEarned":627,
         "experienceTotal":1138,
         "firstWinBonus":0,
         "gameEndedInEarlySurrender":false,
         "gameId":4385639801,
         "gameLength":2002,
         "gameMode":"CLASSIC",
         "gameMutators":[
             "TeambuilderRosterPositions(1)",
             "Moments",
             "Banana",
             "BannerSystem(1)",
             "TrophySystem(1)",
             "BananasFoster(1)",
             "SRTrophyWinner(8)"
         ],
         "gameType":"MATCHED_GAME",
         "globalBoostXpEarned":0,
         "imbalancedTeamsNoPoints":false,
         "invalid":false,
         "ipEarned":0,
         "ipTotal":0,
         "leveledUp":false,
         "loyaltyBoostIpEarned":0,
         "loyaltyBoostXpEarned":0,
         "missionsXpEarned":400,
         "myTeamStatus":"",
         "newSpells":[
 
         ],
         "nextLevelXp":3456,
         "odinBonusIp":0,
         "partyRewardsBonusIpEarned":0,
         "pointsPenalties":null,
         "preLevelUpExperienceTotal":511,
         "preLevelUpNextLevelXp":3456,
         "previousLevel":0,
         "previousXpTotal":0,
         "queueBonusEarned":0,
         "queueType":"RANKED_SOLO_5x5",
         "ranked":true,
         "reportGameId":4385639801,
         "rerollData":{
             "pointChangeFromChampionsOwned":0,
             "pointChangeFromGameplay":0,
             "pointsUntilNextReroll":0,
             "pointsUsed":0,
             "previousPoints":0,
             "rerollCount":0,
             "totalPoints":0
         },
         "roomName":"endGame4385639801",
         "roomPassword":"IOW2r8Z9ktvDEGup",
         "rpEarned":0,
         "sendStatsToTournamentProvider":false,
         "skinId":75000,
         "skinIndex":0,
         "summonerId":20649197,
         "summonerName":"NORA Sorikairo",
         "talentPointsGained":0,
         "teamBoost":{
             "availableSkins":[
 
             ],
             "ipReward":0,
             "ipRewardForPurchaser":0,
             "price":-1,
             "skinUnlockMode":"",
             "summonerName":"",
             "unlocked":false
         },
         "teamEarlySurrendered":false,
         "teams":[
             {
                 "championBans":[
                     523,
                     84,
                     157,
                     53,
                     58
                 ],
                 "fullId":"",
                 "isBottomTeam":true,
                 "isPlayerTeam":true,
                 "isWinningTeam":true,
                 "memberStatusString":"",
                 "name":"",
                 "players":[
                     {
                         "botPlayer":false,
                         "championId":145,
                         "detectedTeamPosition":"BOTTOM",
                         "elo":0,
                         "eloChange":0,
                         "gameId":4385639801,
                         "isReportingDisabled":false,
                         "items":[
                             3072,
                             3115,
                             3157,
                             3006,
                             3124,
                             3042,
                             3340
                         ],
                         "leaver":false,
                         "leaves":0,
                         "level":42,
                         "losses":0,
                         "profileIconId":18,
                         "selectedPosition":"BOTTOM",
                         "skinIndex":14,
                         "skinName":"Kaisa",
                         "spell1Id":7,
                         "spell2Id":4,
                         "stats":{
                             "ASSISTS":6,
                             "BARRACKS_KILLED":0,
                             "CHAMPIONS_KILLED":23,
                             "COMBAT_PLAYER_SCORE":0,
                             "GAME_ENDED_IN_EARLY_SURRENDER":0,
                             "GAME_ENDED_IN_SURRENDER":0,
                             "GOLD_EARNED":19996,
                             "LARGEST_CRITICAL_STRIKE":0,
                             "LARGEST_KILLING_SPREE":9,
                             "LARGEST_MULTI_KILL":3,
                             "LEVEL":17,
                             "MAGIC_DAMAGE_DEALT_PLAYER":44003,
                             "MAGIC_DAMAGE_DEALT_TO_CHAMPIONS":18170,
                             "MAGIC_DAMAGE_TAKEN":4228,
                             "MINIONS_KILLED":207,
                             "NEUTRAL_MINIONS_KILLED":16,
                             "NEUTRAL_MINIONS_KILLED_ENEMY_JUNGLE":4,
                             "NEUTRAL_MINIONS_KILLED_YOUR_JUNGLE":4,
                             "NUM_DEATHS":3,
                             "OBJECTIVE_PLAYER_SCORE":0,
                             "PERK0":8005,
                             "PERK0_VAR1":1791,
                             "PERK0_VAR2":1271,
                             "PERK0_VAR3":519,
                             "PERK1":9111,
                             "PERK1_VAR1":1195,
                             "PERK1_VAR2":580,
                             "PERK1_VAR3":0,
                             "PERK2":9104,
                             "PERK2_VAR1":11,
                             "PERK2_VAR2":20,
                             "PERK2_VAR3":0,
                             "PERK3":8299,
                             "PERK3_VAR1":489,
                             "PERK3_VAR2":0,
                             "PERK3_VAR3":0,
                             "PERK4":8473,
                             "PERK4_VAR1":667,
                             "PERK4_VAR2":0,
                             "PERK4_VAR3":0,
                             "PERK5":8453,
                             "PERK5_VAR1":606,
                             "PERK5_VAR2":346,
                             "PERK5_VAR3":0,
                             "PERK_PRIMARY_STYLE":8000,
                             "PERK_SUB_STYLE":8400,
                             "PHYSICAL_DAMAGE_DEALT_PLAYER":147180,
                             "PHYSICAL_DAMAGE_DEALT_TO_CHAMPIONS":21930,
                             "PHYSICAL_DAMAGE_TAKEN":12462,
                             "PLAYER_SCORE_6":1,
                             "SIGHT_WARDS_BOUGHT_IN_GAME":0,
                             "SPELL1_CAST":96,
                             "SPELL2_CAST":74,
                             "TEAM_EARLY_SURRENDERED":0,
                             "TEAM_OBJECTIVE":0,
                             "TIME_CCING_OTHERS":0,
                             "TOTAL_DAMAGE_DEALT":193325,
                             "TOTAL_DAMAGE_DEALT_TO_BUILDINGS":6050,
                             "TOTAL_DAMAGE_DEALT_TO_CHAMPIONS":40292,
                             "TOTAL_DAMAGE_DEALT_TO_OBJECTIVES":16120,
                             "TOTAL_DAMAGE_DEALT_TO_TURRETS":6050,
                             "TOTAL_DAMAGE_SELF_MITIGATED":14229,
                             "TOTAL_DAMAGE_SHIELDED_ON_TEAMMATES":0,
                             "TOTAL_DAMAGE_TAKEN":17113,
                             "TOTAL_HEAL":5470,
                             "TOTAL_HEAL_ON_TEAMMATES":1232,
                             "TOTAL_PLAYER_SCORE":0,
                             "TOTAL_SCORE_RANK":0,
                             "TOTAL_TIME_CROWD_CONTROL_DEALT":14,
                             "TOTAL_TIME_SPENT_DEAD":122,
                             "TRUE_DAMAGE_DEALT_PLAYER":2142,
                             "TRUE_DAMAGE_DEALT_TO_CHAMPIONS":192,
                             "TRUE_DAMAGE_TAKEN":422,
                             "TURRETS_KILLED":2,
                             "VISION_SCORE":28,
                             "VISION_WARDS_BOUGHT_IN_GAME":1,
                             "WARD_KILLED":1,
                             "WARD_PLACED":12,
                             "WIN":1
                         },
                         "summonerId":45367382,
                         "summonerName":"Kreed58",
                         "teamId":100,
                         "userId":45367382,
                         "wins":1
                 }],
                 "tag":"",
                 "teamId":200
             }
         ],
         "timeUntilNextFirstWinBonus":0,
         "userId":23894133
    }
```

## `lcu_info`

### Info Updates

key   | Category    | Values                    | Notes                 | Since Version |
------| ------------| ------------------------- | --------------------- | ------------- |
lcu_info |credentials| Credentials that are used to connect to the launcher API |See [notes](#lcu_info-note)|   135.0   |

#### *lcu_info* note:

Data Example:

```json
{"feature":"lcu_info","category":"credentials","key":"token","value":"cmlvdDoyZ3ltZUNKN3JxNUNNdTliaGlCUlNR"}
{"feature":"lcu_info","category":"credentials","key":"port","value":"61862"}
```

## `game_info`

### Info Updates

key   | Category    | Values                    | Notes                 | Since Version |
------| ------------| ------------------------- | --------------------- | ------------- |
game_version |game_info| Numerical version of the client. |See [notes](#game_version-note)|   137.0       |
close_client_during_game |game_info| True / False (Bool) |See [notes](#close_client_during_game-note)|   137.0       |

#### *game_version* note:

Data Example:

```json
{"feature":"game_info","category":"game_info","key":"game_version","value":"9.21.2940813"}
```

#### *close_client_during_game* note

Data Example:

```json
{"feature":"game_info","category":"game_info","key":"close_client_during_game","value":false}
```
```json
{"feature":"game_info","category":"game_info","key":"close_client_during_game","value":true}
```
