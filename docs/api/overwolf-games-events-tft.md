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

It's highly recommended to communicate errors to your users. Check game event status [here](../status/all) or easily verify event status directly from your app [using our API](../topics/howto-check-events-status-from-app).

:::important
Because LOL and TFT share the same GameID, when checking TFTs game event status please use 21570 as the unique GameID for TFT.
:::

## `me`

### Info Updates

key                 | Category      | Values                                                   | Notes                                               | Since GEP Ver. |
------------------- |---------------| -------------------------------------------------------- | --------------------------------------------------- | ------------- |
summoner_name       | me            | Summoner name of the local player  |  See [notes](#summoner_name-note) |   133.0       |
xp                  | me            | Current player level, xp points, and xp points left to reach the next level  | See [notes](#xp-note) |   133.0       |
health              | me            | Current amount of health points of the player |  See [notes](#health-notes) |   133.0       |
rank                | me            | Current standing of the player        |   See [notes](#rank-notes)  |   133.0       |
gold                | me             | Player's spare gold in hand   | See [notes](#gold-notes) |   133.0       |

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

("Index" <b>rank</b> data in roster is not accurate in real-time - only once the local player had died or won).

#### *gold* notes

Data example:

`{"info":{"me":{"gold":"1"}},"feature":"me"}`

## `match_info`

### Info Updates

key             | Category   | Values                                                                 | Notes                 | Since GEP Ver. |
--------------- | -----------| -----------------------------------------------------------------------| ----------------------| ------------- |
pseudo_match_id | match_info | Current session’s ID code      |See [notes](#pseudo_match_id-notes)|   133.0       |
battle_state | match_info | Boolean. Whether a battle is in progress |See [notes](#battle_state-notes)|   133.0       |
match_state | match_info | Boolean. Whether a match is in progress    |See [notes](#match_state-notes)|   133.0       |
round_type | match_info | Round is PvE, PvP or Carousel, as well as stage number  |See [notes](#round_type-notes)|   133.0       |
round_outcome | match_info | Outcome of the previous round      |See [notes](#round_outcome-notes)|   133.0       |
opponent | match_info | Names of your opponents                        |See [notes](#opponent-notes)|   133.0       |
game_mode | match_info | Whether the current game mode is TFT or default LoL  |See [notes](#game_mode-notes)|   133.0       |
local_player_damage | match_info | Amount of damage caused by your champions |See [notes](#local_player_damage-notes)|   0.136       |

#### *pseudo_match_id* notes

This is an internal Overwolf-generated code, not related to Riot Games.

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

Returns 'True' when match starts. Returns 'False' once local player dies or wins the match.

Data example:

```json
{"info":{"match_info":{"match_state":"``{"in_progress":true}"}},"feature":"match_info"}{"info":{"match_info":{"match_state":"{"in_progress":false}"}},"feature":"match_info"}
```

#### *round_type* notes

Data examples:

```json
{"info":{"match_info":{"round_type":"{"stage":"1-1","name":"Carousel","type":null}"}},"feature":"match_info"}

{"info":{"match_info":{"round_type":"{"stage":"1-2","name":"PVE","type":"Minions_1"}"}},"feature":"match_info"}

{"info":{"match_info":{"round_type":"{"stage":"2-1","name":"PVP","type":null}"}},"feature":"match_info"}
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

This also includes the star level of each champion (1, 2 and 3 stars), indicated as "level 1, 2 or 3".

Data Example:

```json
{"local_player_damage":"{"unit_0":{"name":"TFT_Brand","damage":8161,"level":2},"unit_1":{"name":"TFT_Shyvana", "damage":2725,"level":2},"unit_2":{"name":"TFT_Gnar","damage":2271,"level":2},"unit_3":{"name":"TFT_Nidalee","damage":1033,"level":2},"unit_4":{"name":"TFT_Swain", "damage":907, "level":1},"unit_5":{"name":"TFT_Elise","damage":577,"level":2},"unit_6":{"name":"TFT_Sejuani", "damage":565,"level":2},"unit_7":{"name":"TFT_Jayce","damage":102,"level":1}}"}}
```

### Events

Event       | Event Data                        | Fired When                                                             | Notes              | Since GEP Ver. |
------------| ----------------------------------| ---------------------------------------------------------------------- | ------------------ | --------------|
round_start | "PVE"/"PVP"/"carousel"            | One round ends and another begins    |See [notes](#round_start-notes)|     133.0     |
round_end   | null                              | At the round's end                       |See [notes](#round_end-notes)|     133.0     |
battle_start| "PVP"/"PVE"                       | Start of the battle vs an opponent or AI   |See [notes](#battle_start-notes)|     133.0     |
battle_end  | null                              | End of the battle vs an opponent or AI   |See [notes](#battle_end-notes)|     133.0     |
match_start | null                              | Beginning of a TFT match            |See [notes](#match_start-notes)|     133.0     |
match_end   | null                              | Ending of a TFT match       |See [notes](#match_end-notes)|     133.0     |

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

key            | Category    | Values                                       | Notes                           | Since GEP Ver. |
-------------- | ------------| ---------------------------------------------| ------------------------------- | -------------- |
player_status  | roster      | Full list of players currently in the match  | [See notes](#player_status-note)|   133.0        |

#### *roster/player_status* notes

The full roster of players will first appear during the loading screen.

Each player object includes the following data:

* summoner name
* slot
* health
* xp level
* rank 

Aside from summoner name which is received during the loading screen, the rest of the data mentioned above will be delivered once the actual game has begun.

#### Important note regarding "index" data

The final & accurate rank position of each player in the match will be given only at the end of the match when the local player had died or won.

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

key            | Category    | Values                           | Notes                          | Since GEP Ver. |
-------------- | ------------| ---------------------------------|--------------------------------|----------------|
shop_pieces    |    store    | Available champions for purchase | [See notes](#shop_pieces-note) |  134.0         |

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

key            | Category    | Values                           | Notes                    | Since GEP Ver. |
-------------- | ------------| ---------------------------------|--------------------------|---------------|
board_pieces   |    board    | Exact position of each chess piece on the grid, including their current level and the items they possess | [See notes](#board_pieces-note) |  134.0  |

#### *board_pieces* note

Data Example:

```json
{ 
   "info":{ 
      "board":{ 
         "board_pieces":"{"         cell_9":{ 
            "name":"TFT_Tristana",
            "level":"1",
            "item_1":"TFT_Item_GuinsoosRageblade",
            "item_2":"",
            "item_3":""
         },
         "cell_16":{ 
            "name":"TFT_KhaZix",
            "level":"1",
            "item_1":"",
            "item_2":"",
            "item_3":""
         }
      }      "
      }
   },
   "      feature":"board"
   }
```

## `bench`

### Info Updates

key            | Category    | Values                           | Notes                    | Since GEP Ver. |
-------------- | ------------| ---------------------------------|--------------------------|---------------|
bench_pieces   |    bench    | Exact position of each chess-piece on the bench including their current level and items they possess (inventory) | [See notes](#bench_pieces-note) |  134.0  |

#### *bench_pieces* note

Data Example:

```json
{ 
   "info":{ 
      "bench":{ 
         "bench_pieces":"{"         slot_1":{ 
            "name":"TFT_Garen",
            "level":"1",
            "item_1":"",
            "item_2":"",
            "item_3":""
         },
         "slot_2":{ 
            "name":"TFT_Darius",
            "level":"2",
            "item_1":"",
            "item_2":"",
            "item_3":""
         },
         "slot_3":{ 
            "name":"TFT_Leona",
            "level":"1",
            "item_1":"",
            "item_2":"",
            "item_3":""
         },
         "slot_4":{ 
            "name":"TFT_Sejuani",
            "level":"1",
            "item_1":"",
            "item_2":"",
            "item_3":""
         },
         "slot_5":{ 
            "name":"TFT_Leona",
            "level":"1",
            "item_1":"",
            "item_2":"",
            "item_3":""
         },
         "slot_6":{ 
            "name":"TFT_Kayle",
            "level":"1",
            "item_1":"TFT_Item_RapidFirecannon",
            "item_2":"",
            "item_3":""
         },
         "slot_9":{ 
            "name":"TFT_MissFortune",
            "level":"1",
            "item_1":"",
            "item_2":"",
            "item_3":""
         }
      }      "
      }
   },
   "      feature":"bench"
   }
```

## `carousel`

### Info Updates

key            | Category    | Values                           | Notes                    | Since GEP Ver. |
-------------- | ------------| ---------------------------------|--------------------------|---------------|
carousel_pieces   |   carousel  | Names of available champions in the carousel | [See notes](#carousel_pieces-note) |  134.0  |

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
