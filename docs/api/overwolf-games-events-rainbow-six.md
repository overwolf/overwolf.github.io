---
id: overwolf-games-events-rainbow-six
title: Rainbow Six Siege Game Events
sidebar_label: Rainbow Six Siege
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
10826
:::

## Sample Apps
* [R6:Siege game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [game_info](#game_info)
* [match](#match)
* [match_info](#match_info)
* [roster](#roster)
* [kill](#kill)
* [death](#death)

## Game events status

It's highly recommended to communicate errors and warnings to your app users. Check game event status [here](../status/all) or easily check game event status directly from your app [using our API](../topics/howto-check-events-status-from-app).

## `game_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
phase | game_info   | The current game scene/phase. See [notes](#phase-notes) below |                       |   123.0  |

#### `phase` notes

Possible values:

* lobby
* teammates
* announce
* operator_select
* loading
* round_results

Example:

`{"game_info":{"phase":"operator_select"}}`

## `match_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
--------------- | -----------| ------------------------------------------------------------------------------------ | ------------------------------------ | ------------- | 
pseudo_match_id | match_info | The current session’s ID code. Example:</br> `0c0ea3df-97ea-4d3a-b1f6-f8e34042251f`  |  This is an internal Overwolf-generated code. |   130.0 |
game_mode | match_info   | The current type of game mode. |See [notes](#game_mode-note) below for possible values|   134.0  |

#### *game_mode* note

The `game_mode` returns on this format:

```json
{"info":{"match_info":{"game_mode":"THE_SELECTED_GAME_MODE"}},"feature":"match_info"}
```

While the possible values are:

* No mode was selected: `NONE`
* Multiplayer > Newcomer: `MATCHMAKING_PVP`
* Multiplayer > Casual: `MATCHMAKING_PVP`
* Multiplayer > Unranked: `MATCHMAKING_PVP_UNRANKED`
* Multiplayer > Ranked: `MATCHMAKING_PVP_RANKED`
* Multiplayer > Custom game > Local: `CUSTOMGAME_PVP`
* Multiplayer > Custom game > Online: `CUSTOMGAME_PVP_DEDICATED`
* Player vs. AI > Situations: `OPERATIONS`
* Player vs. AI > Lonewolf: `LONEWOLF`
* Player vs. AI > Terrorist Hunt: `MATCHMAKING_PVE`
* Tutorials: It’s just a video tutorial, not a game mode.

*Note that on custom games or vs. AI, there is no support in Overwolf real time game events*

## `match`

### Info Updates

key          | Category    | Values                            | Notes                 | Since GEP Ver. |
------------ | ------------| --------------------------------- | --------------------- | ------------- | 
number       | round   | Current round number</br>Example:</br>`{"round":{"number":"3"}}` |                       |   123.0 |
score       | match   | Match score</br>Example:</br>`{"match":{"score":"{\"blue\":\"2\",\"orange\":\"1\"}"}}` |                       |   123.0  |

### Events

Event | Event Data                        | Fired When                  | Notes              | Since GEP Ver. |
------| ----------------------------------| --------------------------- | ------------------ | --------------|
roundStart | null                         | Round starts.               |                    |     123.0      |
roundEnd | null                           | Round ends.                 |                    |     123.0      |
roundOutcome | victory / defeat</br>`{"name":"roundOutcome","data":"victory"}` | Round concluded. |            |     123.0      | 
matchOutcome | victory / defeat</br>`{"name":"matchOutcome","data":"defeat"}` | Match concluded. |           |     123.0     | 

## `roster`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
--------------- | -----------| ------------------------------------------------------------------------------------ | ------------------------------------ | ------------- | 
roster_XX | players | Provides info for the currently active players (10 players). See [notes](#roster_xx-notes) below |  This is an internal Overwolf-generated code. |   123.0 |
team | player | Player’s current team – Orange/Blue  |   |   123.0 |
health | player | Player’s current health – (0-100)</br>`{"player":{"health":"70"}}` |   |   123.0 |
score | player | Player’s current score</br>`{"player":{"score":"335"}}` |   |   123.0 |
kills | player | Total number of kills by the player</br>`{"player":{"kills":"0"}}` |   |   123.0 |
deaths | player | Total number of player's deaths</br>`{"player":{"deaths":"1"}}` |   |   123.0 |

#### `roster_XX` notes

Each player joining the game will be reported in the following way:

`{"roster_0":"{\"name\":\"overwolfqa\",\"team\":\"Orange\",\"is_local\":true}"}`

As you can see, this object includes:

* name - player name
* team - Blue/Orange
* is_local - local player or not (Boolean)

When one of the players dies or leaves the match, the relevant “roster_ XX” object will be updated to:

`{"players":{"roster_3":null}}`

If a new player replaces a leaver, a new “roster_XX” object will be assigned to the new player who joined.

## `kill`

### Events

Event  | Event Data                                       |               Fired When                  | Notes     | Since GEP Ver. |
-------| -------------------------------------------------| ----------------------------------------- | --------- | --------------|
kill | null | Local player killed an enemy |                  |   123.0     |
headshot | null | Local player killed an enemy with a headshot |   |   123.0     |


## `death`

### Events

Event  | Event Data                                       |               Fired When                  | Notes     | Since GEP Ver. |
-------| -------------------------------------------------| ----------------------------------------- | --------- | --------------|
knockedout | null | Local player’s hp reaches 20. |                  |   123.0     |
death | null |  Local player dies |                  |   123.0     |
killer | Killer name</br>`{"name":"killer","data":"Pickyuser18857"}` |  The local player was killed by an enemy |                  |   123.0     |
