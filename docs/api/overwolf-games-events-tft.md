---
id: overwolf-games-events-tft
title: League of Legends Teamfight Tactics Game Events
sidebar_label: Teamfight Tactics Events
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
5426
:::

## Sample Apps

* [TFT game events sample app](https://github.com/overwolf/tft-events-sample-app)

## Available Features

* [me](#me)
* [match_info](#match_info)
* [roster](#roster)

## `me`

### Info Updates

key                 | Category      | Values                                                   | Notes                                               | Since Version |
------------------- |---------------| -------------------------------------------------------- | --------------------------------------------------- | ------------- |
summoner_name       | me            | Name of local player. See [notes](#summoner_name-notes) |                                                      |   0.133       |
xp                  | me            | Current player level, current xp points, and total xp points to next level. See [notes](#xp-notes)  |          |   0.133       |
health              | me            | The amount of health points of the player.See [notes](#health-notes) |                                         |   0.133       |
rank                | me            | The current standing of the player. See [notes](#rank-notes)       |                                           |   0.133       |
gold                | me             | The local player's amount of gold in hand.  See [notes](#gold-notes) |                                        |   0.133       |

#### *summoner_name* notes

Data example:

`{"feature":"me","category":"me","summoner_name":"PoSeIdOnPrOx1"}`

#### *xp* notes

Data example:

`{"xp_level":"3", "xp_progress":"4", "xp_progress_max":"6"}`

#### *health* notes

Data example:

`{"summoner":"PoSeiDonProX1","index":"8", "health":"89", "xp":"3","localplayer":"1","rank":"0"}]`

#### *rank* notes

Data example:

`{"PoSeiDonProX1":{"index":7,"health":16,"xp":8,`</br>`"localplayer":true,"rank":1}`

Meaning 1st place/8th place, etc.

#### *gold* notes

Data example:

`{"info":{"me":{"gold":"1"}},"feature":"me"}`

## `match_info`

### Info Updates

key             | Category   | Values                                                                 | Notes                 | Since Version |
--------------- | -----------| -----------------------------------------------------------------------| ----------------------| ------------- |
pseudo_match_id | match_info | The current session’s ID code. See [notes](#pseudo_match_id-notes)     |                       |   0.133       |
battle_state | match_info | Boolean. Whether a battle is in progress. See [notes](#battle_state-notes)|                       |   0.133       |
match_state | match_info | Boolean. Whether a match is in progress. See [notes](#match_state-notes)   |                       |   0.133       |
round_type | match_info | Round is PvE/PvP, or Carousel (Also stage number). See [notes](#round_type-notes) |                 |   0.133       |
round_outcome | match_info | The outcome of the previous round. See [notes](#round_outcome-notes)     |                       |   0.133       |
opponent | match_info | The name of the opponents. See [notes](#opponent-notes)                       |                       |   0.133       |
game_mode | match_info | Whether the current game mode is TFT or default LoL. See [notes](#game_mode-notes) |                 |   0.133       |

#### *pseudo_match_id* notes

This is an Overwolf-generated code. Unrelated to Riot Games.

Data example:

`a4e8fc75-b35e-466f-976c-09f4ee633d95`

#### *battle_state* notes

Data example:

`{"info":{"match_info":{"battle_state":"{"in_progress":true}"}},"feature":"match_info"}`

#### *match_state* notes

Returns 'True' when match starts. Returns 'False' once local player dies/wins the match.

Data example:

`{"info":{"match_info":{"match_state":"``{"in_progress":true}"}},"feature":"match_info"}{"info":{"match_info":{"match_state":"{"in_progress":false}"}},"feature":"match_info"}`

#### *round_type* notes

Data example:

`{"info":{"match_info":{"round_type":"{"stage":"1-1","name":"Carousel","type":null}"}},"feature":"match_info"}{"info":{"match_info":{"round_type":"{"stage":"1-2","name":"PVE","type":"Minions_1"}"}},"feature":"match_info"}{"info":{"match_info":{"round_type":"{"stage":"2-1","name":"PVP","type":null}"}},"feature":"match_info"}`

#### *round_outcome* notes

Data example:

`{"info":{"match_info":{"round_outcome":"{"Duzalth":{"outcome":"victory"},"Sacrada":{"outcome":"defeat"},"Broxaskh":{"outcome":"defeat"},"PoSeiDonProX1":{"outcome":"victory"},"Lil Jafi":{"outcome":"victory"}}"}},"feature":"match_info"}`

#### *opponent* notes

Data example:

`{"info":{"match_info":{"opponent":"{\"name\":\"Eksuspuroshion\"}"}},"feature":"match_info"}`

#### *game_mode* notes

Data example:

`{"info":{"match_info":{"game_mode":"tft"}},"feature":"match_info"}`

### Events

Event       | Event Data                        | Fired When                                                             | Notes              | Since Version |
------------| ----------------------------------| ---------------------------------------------------------------------- | ------------------ | --------------|
round_start | "PVE"/"PVP"/"carousel"            | One round passes and another begins. See [notes](#round_start-notes)   |                    |     0.133     |
round_end   | null                              | At the round's end. See [notes](#round_end-notes)                      |                    |     0.133     |
battle_start| "PVP"/"PVE"                       | The start of the battle vs an opponent or AI.  See [notes](#battle_start-notes) |           |     0.133     |
battle_end  | null                              | The end of the battle vs an opponent or AI. See [notes](#battle_end-notes)  |               |     0.133     |
match_start | null                              | Beginning of the TFT match. See [notes](#match_start-notes)            |                    |     0.133     |
match_end   | null                              | Ending of the TFT match. See [notes](#match_end-notes)                 |                    |     0.133     |

#### *round_start* notes

Data example:

`{"events":[{"name":"round_start","data":""}]}`

#### *round_end* notes

Data example:

`{"events":[{"name":"round_end","data":""}]}`

#### *battle_start* notes

Data example:

`{"events":[{"name":"battle_start","data":"PVE"}]}`

#### *battle_end* notes

Data example:

`{"events":[{"name":"battle_end","data":""}]}`

#### *match_start* notes

Data example:

`{"events":[{"name":"match_start","data":""}]}`

#### *match_end* notes

Data example:

`{"events":[{"name":"match_end","data":""}]}`


## `roster`

### Info Updates

key            | Category    | Values                                                                               | Notes    | Since Version |
-------------- | ------------| -------------------------------------------------------------------------------------| -------- | ------------- |
player_status  | roster      | A full list of the players currently in the match. [See notes](#player_status-notes) |          |   0.133       |

#### *player_status* notes

Each player provides the following data:

* summoner name
* slot
* health
* xp level
* rank 

Data example:

```json
{  
   "category":"game_info",
   "key":"tft_roster",
   "value":"[{summoner:Sh4rgaas}]",
   "index":"1",
   "health":"100",
   "xp":"1",
   "localplayer":"1",
   "rank":"0"
},
{  
   "summoner":"Zedester",
   "index":"2",
   "health":"100",
   "xp":"1",
   "localplayer":"0",
   "rank":"0"
},
{  
   "summoner":"littlemelony",
   "index":"3",
   "health":"100",
   "xp":"1",
   "localplayer":"0",
   "rank":"0"
},
{  
   "summoner":"XKrosX",
   "index":"4",
   "health":"100",
   "xp":"1",
   "localplayer":"0",
   "rank":"0"
},
{  
   "summoner":"UP GuyFromMiddle",
   "index":"5",
   "health":"100",
   "xp":"1",
   "localplayer":"0",
   "rank":"0"
},
{  
   "summoner":"Storas Tevas",
   "index":"6",
   "health":"100",
   "xp":"1",
   "localplayer":"0",
   "rank":"0"
},
{  
   "summoner":"MAYAH MELISSA",
   "index":"7",
   "health":"100",
   "xp":"1",
   "localplayer":"0",
   "rank":"0"
},
{  
   "summoner":"TabsWay",
   "index":"8",
   "health":"100",
   "xp":"1",
   "localplayer":"0",
   "rank":"0\"}]",
   "valueLength":772
}
```

