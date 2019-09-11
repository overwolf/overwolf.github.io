---
id:overwolf-games-events-wot
title: World of Tanks Game Events
sidebar_label: World of Tanks Events
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
6365
:::

## Sample Apps
* [WOT game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [kill](#kill)
* [death](#death)
* [game_info](#game_info)
* [match_info](#match_info)

## Game events status

It is highly recommended to communicate errors and warnings to your app users. 

Check [here](../status/all) the game events status. OR -  easily check the game events status from your app, [using our API](../topics/howto-check-events-status-from-app).

## `kill`

### Events

Event      | Event Data  | Fired When          | Notes              | Since GEP Ver. |
-----------| ------------| ------------------- | ------------------ | --------------|
kill       |See [notes](#kill-note)| A tank was destroyed |         |     47.0      | 
one_shot_kill|See [notes](#one_shot_kill-note)| The player’s tank destroyed another tank in a single shot (without any assistance from other players)  |       |     47.0      | 
damage     |See [notes](#damage-note)| The player’s tank damaged  another tank |       |     47.0      | 
assist     |See [notes](#assist-note)| The player’s tank assisted destroying another tank |       |     47.0      | 

#### *kill* note

Event Data:

JSON containing:
* {enemyTeam: boolean}
True if the event refers to an enemy unit
False if the event refers to an ally unit

#### *one_shot_kill* note

Event Data:

JSON containing:

* {enemyTeam: boolean}
True if the event refers to an enemy unit
False if the event refers to an ally unit

#### *damage* note

Event Data:

JSON containing:

* {enemyTeam: boolean}
True if the event refers to an enemy unit
False if the event refers to an ally unit
* {damage: number}

#### *assist* note

Event Data:

JSON containing:

* {enemyTeam: boolean}
True if the event refers to an enemy unit
False if the event refers to an ally unit

## `death`

### Events

Event      | Event Data  | Fired When          | Notes              | Since GEP Ver. |
-----------| ------------| ------------------- | ------------------ | --------------|
death      |See [notes](#death-note)| The player’s tank was destroyed |         |     47.0      | 
hit	       |See [notes](#hit-note)| The player’s tank was damaged |         |     47.0      | 

#### *death* note

Event Data:

JSON containing:

* {enemyTeam: boolean}
True if the event refers to an enemy unit
False if the event refers to an ally unit
* {damage: integer}

#### *hit* note

JSON containing:
* {damage: integer}

## `game_info`

### Info Updates

key          | Category    | Values                            | Notes                 | Since GEP Ver. |
------------ | ------------| --------------------------------- | --------------------- | ------------- |
game_start_timestamp| game_info   |Date string of the time the game was launched|               |      47.0     |
game_state   | game_info   |battle/hangar/wot_starting/replay|               |      47.0     |
map_name     | game_info   | See [notes](#map_name-note) |               |      86.0     |

#### *map_name* note

Name of the map or loading space the player is currently in

Data Example:

`'hangar_v2' | 'hangar_bootcamp' | '05_prohorovka' | '08_ruinberg'`

## `match_info`

key          | Category    | Values                            | Notes                 | Since GEP Ver. |
------------ | ------------| --------------------------------- | --------------------- | ------------- |
pseudo_match_id| match_info   |The current session’s ID code.|See [notes](#pseudo_match_id-note)|      47.0     |

#### *pseudo_match_id* note

Data Example:

`0c0ea3df-97ea-4d3a-b1f6-f8e34042251f`
