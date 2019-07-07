---
id: overwolf-games-events-rainbow-six
title: Rainbow Six Siege Game Events
sidebar_label: Rainbow Six Siege Game Events
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
10826
:::

## Sample Apps
* [R6:Siege game events sample app](https://github.com/overwolf/rainbow-six-sample-app)

## Available Features

* [game_info](#game-info)
* [match](#match)
* [match_info](#match-info)
* [roster](#roster)
* [kill](#kill)
* [death](#death)

## `game_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
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

key          | Category    | Values                    | Notes                 | Since Version |
--------------- | -----------| ------------------------------------------------------------------------------------ | ------------------------------------ | ------------- | 
pseudo_match_id | match_info | The current session’s ID code. Example:</br> `0c0ea3df-97ea-4d3a-b1f6-f8e34042251f`  |  This is an Overwolf-generated code. |   130.0.15 |

## `match`

### Info Updates

key          | Category    | Values                            | Notes                 | Since Version |
------------ | ------------| --------------------------------- | --------------------- | ------------- | 
number       | round   | The number of the current round</br>Example:</br>`{"round":{"number":"3"}}` |                       |   123.0 |
score       | match   | Match score</br>Example:</br>`{"match":{"score":"{\"blue\":\"2\",\"orange\":\"1\"}"}}` |                       |   123.0  |

### Events

Event | Event Data                        | Fired When                  | Notes              | Since Version |
------| ----------------------------------| --------------------------- | ------------------ | --------------|
roundStart | null | The player’s champion died  |  round starts |     123.0      |
roundEnd | null | The player’s champion died  | round ends |     123.0      |
roundOutcome | victory / defeat</br>`{"name":"roundOutcome","data":"victory"}` |  round starts  |  Match has started |     123.0      | 
matchOutcome | victory / defeat</br>`{"name":"matchOutcome","data":"defeat"}` |  round ends  |  Match has started |     123.0     | 

## `roster`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
--------------- | -----------| ------------------------------------------------------------------------------------ | ------------------------------------ | ------------- | 
roster_XX | players | This feature provides info for the currently active players (10 players). See [notes](#roster_xx-notes) below |  This is an Overwolf-generated code. |   123.0 |
team | player | The player’s current team – Orange/Blue  |   |   123.0 |
health | player | The player’s current health – (100-0)</br>`{"player":{"health":"70"}}` |   |   123.0 |
score | player | The player’s current score</br>`{"player":{"score":"335"}}` |   |   123.0 |
kills | player | Total number of kills done by the player</br>`{"player":{"kills":"0"}}` |   |   123.0 |
deaths | player | Total number of the local player’s deaths</br>`{"player":{"deaths":"1"}}` |   |   123.0 |

#### `roster_XX` notes

Each player that joins the game will be reported in the following way:

`{"roster_0":"{\"name\":\"overwolfqa\",\"team\":\"Orange\",\"is_local\":true}"}`

As you can see, this object includes:

* name - player name
* team - Blue/Orange
* is_local - local player or not (Boolean)

When one of the players dies or leaves the match the relevant “roster_ XX” object will be updated to:

`{"players":{"roster_3":null}}`

In case the player has left the match, a new “roster_XX” object will be assigned to the new player that replaced him.

## `kill`

### Events

Event  | Event Data                                       |               Fired When                  | Notes     | Since Version |
-------| -------------------------------------------------| ----------------------------------------- | --------- | --------------|
kill | null | The local player killed an enemy |                  |   123.0     |
headshot | null | The local player killed an enemy with a headshot |   |   123.0     |


## `death`

### Events

Event  | Event Data                                       |               Fired When                  | Notes     | Since Version |
-------| -------------------------------------------------| ----------------------------------------- | --------- | --------------|
knockedout | null | The local player’s hp reaches 20. |                  |   123.0     |
death | null |  The local player dies |                  |   123.0     |
killer | killer name</br>`{"name":"killer","data":"Pickyuser18857"}` |  The local player was killed by an enemy |                  |   123.0     |