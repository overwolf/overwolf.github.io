---
id:overwolf-games-events-autochess
title: Auto Chess Game Events
sidebar_label: Auto Chess Events
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
7314
:::

## Sample Apps
* [Auto-chess game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [shop](#shop)
* [bench](#bench)
* [board](#board)
* [roundNumber](#roundNumber)
* [roundOutcome](#roundOutcome)
* [autochess_loading](#autochess_loading)
* [autochess_match_start](#autochess_match_start)
* [autochess_match_end](#autochess_match_end)
* [autochess_preparation_start](#autochess_preparation_start)
* [autochess_preparation_end](#autochess_preparation_end)
* [roster](#roster)
* [match_info](#match_info)

## `roster`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
players      | roster      |A string holding a JSON array of player objects.|See [notes](#players-note)|     129.0     |

#### *players* note

Data Example:

```json
"{\"steamId\":\"76561198296251542\",\"name\":\"A.S.Lexx\",\"pickConfirmed\"
:true,\"hero\":\"wisp\",\"team\":11},
{\"steamId\":\"76561198045142971\",\"name\":\"Klide\",\"pickConfirmed\"
:true,\"hero\":\"wisp\",\"team\":9},
...
{\"steamId\":\"76561198013211988\",\"name\":\"PORQUEOUTAI\",\"pickConfirmed\
":true,\"hero\":\"wisp\",\"team\":12}"
```
Player object structure:
```json
{
  "steamId": "steamId string",
  "name": "player name in game",
  "team": teamId,
  "hero": heroId
}
```
Notes:

* steamID – ID of player
* name – Name of player
* team – Each player receives team number for themselves (chess board number)
* hero – Every player is wisp and/or empty.

## `shop`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
slot_x| match_info  |The chess pieces that are available for purchase currently in the shop.|See [notes](#slot_x-note)|     131.0     |

#### *slot_x* note

Data Example:

`{"info":{"match_info":{"slot_1":"mars"}},"feature":"shop"}`

Note: This information is for each available slot (slots 1-5).

## `bench`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
cell_x| match_info  |The chess pieces that are currently on the first row, below the board.|See [notes](#cell_x-note)|     131.0     |

#### *cell_x* note

Data Example:

```json
{"info":{"match_info":{"cell_1":"{\"name\":\"mars\",\"level\":\"1\"}"}},"feature":"bench"}
{"info":{"match_info":{"cell_2":"{\"name\":\"tuskarr\",\"level\":\"1\"}"}},"feature":"bench"}
```

Note: This information is for each bench slot (slots  1-8).

## `board`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
cell_x_y| match_info  |Provides the content of a contained cell in the bottom half of the board.|See [notes](#cell_x_y-note)|  131.0   |

#### *cell_x_y* note

The provided info for each cell is:

1. name – chess piece
2. level – the current level of the chess piece.

Data Example:

`{"info":{"match_info":{"cell_3_3":"{\"name\":\"beastmaster\",\"level\":\"2\"}"}},"feature":"board"}`

Notes:

X_Y are correspondent to the location on the board.

For example: The bottom left cell is “cell_1_1”.

Next cell to the right is “cell_1_2” etc.

## `roundNumber`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
roundNumber  | match_info  |The numeric indication of the current round.|See [notes](#roundNumber-note)|  131.0   |

#### *roundNumber* note

Data Example:

`{"info":{"match_info":{"roundNumber":"4"}},"feature":"roundNumber"}`

## `roundOutcome`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
totalWon     | match_info  |The total amount of rounds won.|See [notes](#totalWon-note)|  131.0   |
totalLost    | match_info  |The total amount of rounds lost.|See [notes](#totalLost-note)|  131.0   |

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
roundOutcome|victory/defeat|Winning or losing the round|                    |     131.0     | 

#### *totalWon* note

Data Example:

`{"info":{"match_info":{"totalWon":"2"}},"feature":"roundOutcome"}`

#### *totalLost* note

Data Example:

`{"info":{"match_info":{"totalLost":"2"}},"feature":"roundOutcome"}`

## `autochess_loading`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
autochess_loading| null    |Loading screen shows up|            |     129.0     | 

## `autochess_match_start`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
autochess_match_start| null| match starts  |                    |     129.0     | 

## `autochess_match_end	`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
autochess_match_end| null| match ends	     |                    |     129.0     | 

## `autochess_preparation_start`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
autochess_preparation_start| null  |Preparation phase starts|   |     129.0     | 

## `autochess_preparation_end`

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
autochess_preparation_end| null  |Preparation phase ends|       |     129.0     | 

## `match_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
--------------- | -----------| ------------------------------------------------------------------------------------ | ------------------------------------ | ------------- | 
pseudo_match_id | match_info | The current session’s ID code. Example:</br> `a4e8fc75-b35e-466f-976c-09f4ee633d95`  |  This is an Overwolf-generated code. Unrelated to Valve.  |   0.130 |
game_mode | match_info | Whether the current game mode is Dota2 or Autochess. |                 |   0.133       |

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
matchOutcome|victory/defeat|Winning or losing the match|        |     131.0     | 
