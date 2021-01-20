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

* [gep_internal](#gep_internal)
* [game_info](#game_info)
* [match](#match)
* [match_info](#match_info)
* [roster](#roster)
* [kill](#kill)
* [death](#death)
* [me](#me)
* [defuser](#defuser)


## Game events status

It's highly recommended to communicate errors and warnings to your app users. Check game event status [here](../status/all) or easily check game event status directly from your app [using our API](../topics/howto-check-events-status-from-app).

## `gep_internal`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
gep_internal | gep_internal| Local + Public version number|See [notes](#gep_internal-note)|   143.0       |

#### *gep_internal* note

Data Example:

```json
{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}
```

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
pseudo_match_id | match_info | The current match’s ID code. Example:</br> `0c0ea3df-97ea-4d3a-b1f6-f8e34042251f`  |  This is an internal Overwolf-generated code. |   130.0 |
game_mode | match_info   | The current type of game mode. |See [notes](#game_mode-note) below for possible values|   134.0  |
match_id | match_info   | The current match's ID. |See [notes](#match_id-note) below for possible values|   162.1  |
map_id | match_info   | The currently played map. |See [notes](#map_id-note) below for possible values|   162.1  |


#### *game_mode* note

The `game_mode` returns on this format:

```json
{"info":{"match_info":{"game_mode":"THE_SELECTED_GAME_MODE"}},"feature":"match_info"}
```

While the possible values are:

* No mode was selected: `NONE`
* Multiplayer > Newcomer: `MATCHMAKING_PVP_NEWCOMER`
* Multiplayer > Quick Match: `MATCHMAKING_PVP`
* Multiplayer > Special Event: `MATCHMAKING_PVP_EVENT`
* Multiplayer > Arcade Playlist: `MATCHMAKING_PVP_EVENT`
* Multiplayer > Unranked: `MATCHMAKING_PVP_UNRANKED`
* Multiplayer > Ranked: `MATCHMAKING_PVP_RANKED`
* Multiplayer > Custom game > Local: `CUSTOMGAME_PVP`
* Multiplayer > Custom game > Online: `CUSTOMGAME_PVP_DEDICATED`
* Player vs. AI > Situations: `OPERATIONS`
* Player vs. AI > Training Grounds Lonewolf: `MATCHMAKING_PVE_LONEWOLF`
* Player vs. AI > Training Grounds with Squad only: `MATCHMAKING_PVE_PARTY`
* Player vs. AI > Training Grounds Online: `MATCHMAKING_PVE`
* Tutorials: It’s just a video tutorial, not a game mode.

*Note that on custom games or vs. AI, there is no support in Overwolf real time game events*

#### *match_id* note

The `match_id` returns on this format:

```json
{"info":{"match_info":{"match_id":"18F5D014-3FB9-0510-9083-DF555E39AD2B"}},"feature":"match_info"}
```

#### *map_id* note

The `map_id` returns on this format:

```json
{"info":{"match_info":{"map_id":"BANK"}},"feature":"match_info"}
```

The possible values are:

* `HOUSE`
* `OREGON`
* `HEREFORD BASE`
* `CLUB HOUSE`
* `PRESIDENTIAL PLANE`
* `YACHT`
* `CONSULATE`
* `BANK`
* `KANAL`
* `CHALET`
* `BARLETT UNIVERSITY` (note this is misspelled, the map in-game is named Bar***t***lett U.)
* `KAFE DOSTOYEVSKY`
* `BORDER`
* `FAVELA`
* `SKYSCRAPER`
* `COASTLINE`
* `THEME PARK`
* `TOWER`
* `VILLA`
* `FORTRESS`
* `OUTBACK`


## `match`

### Info Updates

key          | Category    | Values                            | Notes                 | Since GEP Ver. |
------------ | ------------| --------------------------------- | --------------------- | ------------- | 
number       | round   | Current round number</br>Example:</br>`{"round":{"number":"3"}}` |                       |   123.0 |
score       | match   | Match score</br>Example:</br>`{"match":{"score":"{"blue":"2","orange":"1"}"}}` |                       |   123.0  |

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
roster_XX | players | Provides info for the currently active players (10 players). See [notes](#roster_xx-notes) below |   |   123.0 |
team | players | Player’s current team – Orange/Blue/Spectator  |   |   123.0 |
health | players | Player’s current health – (0-100)</br>`{"player":{"health":"70"}}` |   |   123.0 |
score | players | Player’s current score</br>`{"player":{"score":"335"}}` |   |   123.0 |
kills | players | Total number of kills by the player</br>`{"player":{"kills":"0"}}` |   |   123.0 |
deaths | players | Total number of player's deaths</br>`{"player":{"deaths":"1"}}` |   |   123.0 |
operator | players | The numeric ID of the chosen operator.<br>`{"player":{"operator":"514"}}` |  |   151.0 |


#### `roster_XX` notes

Each player joining the game will be reported in the following way:

`{"info":{"players":{"roster_0":"{"name":"WolfOnTop.top","is_local":"1","team":"1","operator":"0","kills":"0","headshots":"0","deaths":"0","score":"0","defuser":"0","health":"0"}"}},"feature":"roster"}`

As you can see, this object includes:

* name - player's name
* team - Blue/Orange/Spectator

As of version 159, you may detect the local player as a spectator when creating a custom match (Example: `{"info":{"player":{"team":"Spectator"}},"feature":"roster"}`).
* is_local - local player or not (Boolean)
* [operator](https://github.com/overwolf/community-gists/blob/master/siege_operator_ids.json) - The ID of the selected operator (available for team members only)
* kills - Total amount of kills made by the player (<b>Important</b>: Kill score is being reset between rounds).
* deaths - Total amount of deaths (<b>Important</b>: Death score is being reset between rounds).
* score - Player score in the current round (<b>Important</b>: Score is being reset between rounds).
* health - Current health of the player (available for team members only)

When one of the players leaves the match, the relevant “roster_ XX” object will be updated to:

`{"players":{"roster_3":null}}`

If a new player replaces a leaver, a new “roster_XX” object will be assigned to the new player who joined.

## `kill`

### Events

Event  | Event Data                                       |               Fired When                  | Notes     | Since GEP Ver. |
-------| -------------------------------------------------| ----------------------------------------- | --------- | --------------|
kill | null | Local player killed an enemy |                       |   123.0     |
headshot | null | Local player killed an enemy with a headshot |   |   123.0     |

## `death`

### Events

Event  | Event Data                                       |               Fired When                  | Notes     | Since GEP Ver. |
-------| -------------------------------------------------| ----------------------------------------- | --------- | --------------|
knockedout | null | Local player’s hp reaches 20. | See [notes](#death-notes) |   123.0     |
death | null |  Local player dies |                  |   123.0     |
killer | Killer name</br>`{"name":"killer","data":"Pickyuser18857"}` |  The local player was killed by an enemy |                  |   123.0     |

## `me`

### Info Updates

key          | Category    | Values                            | Notes                 | Since GEP Ver. |
------------ | ------------| --------------------------------- | --------------------- | ------------- | 
name         | me          | Local player's in-game name.      | See [notes](#name-note)     |   148.0  |
account_id   | me          | Local player's account ID.        |See [notes](#account_id-note)|   148.0  |

#### *name* note

Data Example:

```json
{"info":{"me":{"name":"WolfOnTop.top"}},"feature":"me"}
```

#### *account_id* note

Data Example:

```json
{"info":{"me":{"account_id":"1b810848-34df-4834-aa26-61c838059a37"}},"feature":"me"}
```

## `defuser`

### Events

Event  | Event Data                                       |               Fired When                  | Notes     | Since GEP Ver. |
-------| -------------------------------------------------| ----------------------------------------- | --------- | --------------|
defuser_planted | null | Defuser was planted. | See [notes](#defuser_planted-notes) |   162.1     |

#### *defuser_planted* note

Data Example:

```json
{"events":[{"name":"defuser_planted","data":""}]}
```
