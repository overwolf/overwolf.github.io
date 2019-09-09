---
id: overwolf-games-events-tft
title: League of Legends Teamfight Tactics Game Events
sidebar_label: Teamfight Tactics Events
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
5426
:::

**Note** that TFT and LOL share the same Game ID.

## Sample Apps

* [TFT game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [me](#me)
* [match_info](#match_info)
* [roster](#roster)
* [store](#store)
* [board](#board)
* [bench](#bench)
* [carousel](#carousel)

## Game events status

It is highly recommended to communicate errors and warnings to your app users. 

Check [here](../status/all) the game events status. OR -  easily check the game events status from your app, [using our API](../topics/howto-check-events-status-from-app).

## `me`

### Info Updates

key                 | Category      | Values                                                   | Notes                                               | Since Version |
------------------- |---------------| -------------------------------------------------------- | --------------------------------------------------- | ------------- |
summoner_name       | me            | Name of local player.  |  See [notes](#summoner_name-note) |   0.133       |
xp                  | me            | Current player level, current xp points, and total xp points to next level.   | See [notes](#xp-note) |   0.133       |
health              | me            | The amount of health points of the player. |  See [notes](#health-notes) |   0.133       |
rank                | me            | The current standing of the player.        |   See [notes](#rank-notes)  |   0.133       |
gold                | me             | The local player's amount of gold in hand.   | See [notes](#gold-notes) |   0.133       |

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
pseudo_match_id | match_info | The current session’s ID code.      |See [notes](#pseudo_match_id-note)|   0.133       |
battle_state | match_info | Boolean. Whether a battle is in progress. |See [notes](#battle_state-note)|   0.133       |
match_state | match_info | Boolean. Whether a match is in progress.    |See [notes](#match_state-note)|   0.133       |
round_type | match_info | Round is PvE/PvP, or Carousel (Also stage number).  |See [notes](#round_type-note)|   0.133       |
round_outcome | match_info | The outcome of the previous round.      |See [notes](#round_outcome-note)|   0.133       |
opponent | match_info | The name of the opponents.                        |See [notes](#opponent-note)|   0.133       |
game_mode | match_info | Whether the current game mode is TFT or default LoL.  |See [notes](#game_mode-note)|   0.133       |
local_player_damage | match_info | The amount of damage caused by your champions. |See [notes](#local_player_damage-note)|   0.136       |

#### *pseudo_match_id* notes

This is an Overwolf-generated code. Unrelated to Riot Games.

Data example:

```json
a4e8fc75-b35e-466f-976c-09f4ee633d95
```

#### *battle_state* notes

Data example:

```json
{"info":{"match_info":{"battle_state":"{"in_progress":true}"}},"feature":"match_info"}
```

#### *match_state* notes

Returns 'True' when match starts. Returns 'False' once local player dies/wins the match.

Data example:

```json
{"info":{"match_info":{"match_state":"``{"in_progress":true}"}},"feature":"match_info"}{"info":{"match_info":{"match_state":"{"in_progress":false}"}},"feature":"match_info"}
```

#### *round_type* notes

Data example:

```json
{"info":{"match_info":{"round_type":"{"stage":"1-1","name":"Carousel","type":null}"}},"feature":"match_info"}{"info":{"match_info":{"round_type":"{"stage":"1-2","name":"PVE","type":"Minions_1"}"}},"feature":"match_info"}{"info":{"match_info":{"round_type":"{"stage":"2-1","name":"PVP","type":null}"}},"feature":"match_info"}
```

#### *round_outcome* notes

Data example:

```json
{"info":{"match_info":{"round_outcome":"{"Duzalth":{"outcome":"victory"},"Sacrada":{"outcome":"defeat"},"Broxaskh":{"outcome":"defeat"},"PoSeiDonProX1":{"outcome":"victory"},"Lil Jafi":{"outcome":"victory"}}"}},"feature":"match_info"}
```

#### *opponent* notes

Data example:

```json
{"info":{"match_info":{"opponent":"{\"name\":\"Eksuspuroshion\"}"}},"feature":"match_info"}
```

#### *game_mode* notes

Data example:

```json
{"info":{"match_info":{"game_mode":"tft"}},"feature":"match_info"}
```
```json
{"info":{"match_info":{"game_mode":"lol"}},"feature":"match_info"}
```

#### *local_player_damage* notes

This also includes the star-level of the champion (1, 2 and 3 stars) and indicated as "level 1, 2 or 3".

Data Example:

```json
{"local_player_damage":"{"unit_0":{"name":"TFT_Brand","damage":"8161","level":"2"},"unit_1":{"name":"TFT_Shyvana", "damage":"2725","level":"2"},"unit_2":{"name":"TFT_Gnar","damage":"2271","level":"2"},"unit_3":{"name":"TFT_Nidalee","damage":"1033","level":"2"},"unit_4":{"name":"TFT_Swain", "damage":"907", "level":"1"},"unit_5":{"name":"TFT_Elise","damage":"577","level":"2"},"unit_6":{"name":"TFT_Sejuani", "damage":"565","level":"2"},"unit_7":{"name":"TFT_Jayce","damage":"102","level":"1"}}"}}
```

### Events

Event       | Event Data                        | Fired When                                                             | Notes              | Since Version |
------------| ----------------------------------| ---------------------------------------------------------------------- | ------------------ | --------------|
round_start | "PVE"/"PVP"/"carousel"            | One round passes and another begins.    |See [notes](#round_start-note)|     0.133     |
round_end   | null                              | At the round's end.                       |See [notes](#round_end-note)|     0.133     |
battle_start| "PVP"/"PVE"                       | The start of the battle vs an opponent or AI.   |See [notes](#battle_start-note)|     0.133     |
battle_end  | null                              | The end of the battle vs an opponent or AI.   |See [notes](#battle_end-note)|     0.133     |
match_start | null                              | Beginning of the TFT match.             |See [notes](#match_start-note)|     0.133     |
match_end   | null                              | Ending of the TFT match.        |See [notes](#match_end-note)|     0.133     |

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
player_status  | roster      | A full list of the players currently in the match.  |[See notes](#player_status-note)|   0.133       |

#### *player_status* notes

Each player object includes the following data:

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

## `store`

### Info Updates

key            | Category    | Values                           | Notes                    | Since Version |
-------------- | ------------| ---------------------------------|--------------------------|---------------|
shop_pieces    |    store    | Available champion for purchase. | [See notes](#shop_pieces-note) |  0.134  |

#### *shop_pieces* note

Once you purchase a champion, there will be a new update which indicates "Sold" for a purchased slot.

Data Example:

```json
{  
   "info":{  
      "store":{  
         "shop_pieces":"{
         "slot_1":{  
            "name":"TFT_Blitzcrank"
         },
         "slot_2":{  
            "name":"TFT_Garen"
         },
         "slot_3":{  
            "name":"TFT_Nidalee"
         },
         "slot_4":{  
            "name":"TFT_Mordekaiser"
         },
         "slot_5":{  
            "name":"TFT_Ahri"
         }
      }      "}},"feature":"store"
   }

{  
   "info":{  
      "store":{  
         "shop_pieces":"{
         "slot_1":{  
            "name":"TFT_Blitzcrank"
         },
         "slot_2":{  
            "name":"Sold"
         },
         "slot_3":{  
            "name":"TFT_Nidalee"
         },
         "slot_4":{  
            "name":"TFT_Mordekaiser"
         },
         "slot_5":{  
            "name":"TFT_Ahri"
         }
      }      "}},"feature":"store"
   }

```

## `board`

### Info Updates

key            | Category    | Values                           | Notes                    | Since Version |
-------------- | ------------| ---------------------------------|--------------------------|---------------|
board_pieces   |    board    | The exact position of each chess-piece on the board. | [See notes](#board_pieces-note) |  0.134  |

#### *board_pieces* note

Data Example:

```json
{  
   "info":{  
      "board":{  
         "board_pieces":"{
         "cell_10":{  
            "name":"TFT_Vayne",
            "level":"0",
            "item_1":"0",
            "item_2":"0",
            "item_3":"0"
         },
         "cell_11":{  
            "name":"TFT_Camille",
            "level":"0",
            "item_1":"0",
            "item_2":"0",
            "item_3":"0"
         },
         "cell_16":{  
            "name":"TFT_Fiora",
            "level":"0",
            "item_1":"0",
            "item_2":"0",
            "item_3":"0"
         },
         "cell_17":{  
            "name":"TFT_Garen",
            "level":"0",
            "item_1":"0",
            "item_2":"0",
            "item_3":"0"
         }
      }      "}},"feature":"board"
   }
```

<b>Currently "level" and "item" are NOT available/accurate</b>

## `bench`

### Info Updates

key            | Category    | Values                           | Notes                    | Since Version |
-------------- | ------------| ---------------------------------|--------------------------|---------------|
bench_pieces   |    bench    | The exact position of each chess-piece on the bench. | [See notes](#bench_pieces-note) |  0.134  |

#### *bench_pieces* note

Data Example:

```json
{  
   "info":{  
      "bench":{  
         "bench_pieces":"{
         "slot_1":{  
            "name":"TFT_Lucian",
            "level":"0",
            "item_1":"0",
            "item_2":"0",
            "item_3":"0"
         },
         "slot_2":{  
            "name":"TFT_Camille",
            "level":"0",
            "item_1":"0",
            "item_2":"0",
            "item_3":"0"
         },
         "slot_3":{  
            "name":"TFT_Camille",
            "level":"0",
            "item_1":"0",
            "item_2":"0",
            "item_3":"0"
         },
         "slot_4":{  
            "name":"TFT_Vayne",
            "level":"0",
            "item_1":"0",
            "item_2":"0",
            "item_3":\"0"
         },
         "slot_9":{  
            "name":"TFT_Nidalee",
            "level":"0",
            "item_1":"0",
            "item_2":"0",
            "item_3":"0"
         }
      }      "}},"feature":"bench"
   }
```

<b>Currently "level" and "item" are NOT available/accurate</b>

## `carousel`

### Info Updates

key            | Category    | Values                           | Notes                    | Since Version |
-------------- | ------------| ---------------------------------|--------------------------|---------------|
carousel_pieces   |   carousel  | Names of available champions in the carousel. | [See notes](#carousel_pieces-note) |  0.134  |

#### *carousel_pieces* note

Data Example:

```json
{  
   "info":{  
      "carousel":{  
         "carousel_pieces":"{
         "slot_1":{  
            "name":"TFT_Morgana",
            "item_1":"0"
         },
         "slot_2":{  
            "name":"TFT_Lissandra",
            "item_1":"0"
         },
         "slot_3":{  
            "name":"TFT_Rengar",
            "item_1":"0"
         },
         "slot_4":{  
            "name":"TFT_Veigar",
            "item_1":"0"
         },
         "slot_5":{  
            "name":"TFT_Gangplank",
            "item_1":"0"
         },
         "slot_6":{  
            "name":"TFT_Zed",
            "item_1":"0"
         },
         "slot_7":{  
            "name":"TFT_Brand",
            "item_1":"0"
         },
         "slot_8":{  
            "name":"TFT_Graves",
            "item_1":"0"
         },
         "slot_9":{  
            "name":"TFT_Gnar",
            "item_1":"0"
         },
         "slot_10":{  
            "name":"TFT_Chogath",
            "item_1":"0"
         }
      }      "}},"feature":"carousel"
   }
```

<b>Currently "level" and "item" are NOT available/accurate</b>
