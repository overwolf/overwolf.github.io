---
id:overwolf-games-events-wow
title: World of Warships Game Events
sidebar_label: World of Warships Events
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
10746
:::

## Sample Apps
* [WOWS game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [game_info](#game_info)
* [account_info](#account_info)
* [match](#match)
* [match_info](#match_info)
* [kill](#kill)
* [death](#death)

## Game events status

It is highly recommended to communicate errors and warnings to your app users. 

Check [here](../status/all) the game events status. OR -  easily check the game events status from your app, [using our API](../topics/howto-check-events-status-from-app).

## `game_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- |
game_start_timestamp | match_info   | Time of when the game process started running  |See [notes](#game_start_timestamp-note)|   119.1   |
scene | match_info   | See [notes](#scene-note) |                       |   119.1   |

#### *game_start_timestamp* note

Data Example:

`"value":"2018-10-25T06:02:03.555Z"`

#### *scene* note

Possible Values:

* initializing
* dock
* battle
* loading_screen
* post_battle
* result_screen

## `account_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- |
realm | account_info   |                            | See [notes](#realm-note) |     119.1     |
id | account_info   | The local player’s Wargaming account id |                |     119.1     |
playerName | account_info   | The local player’s Wargaming name |              |     119.1     |

#### *realm* note

Possible Values:

* ru
* eu
* na
* asia

## `match_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- |
pseudo_match_id| match_info   |The current session’s ID code.| See [notes](#pseudo_match_id-note) |     119.1     |

#### *pseudo_match_id* note

Data Example:

`0c0ea3df-97ea-4d3a-b1f6-f8e34042251f`

## `match`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- |
mapName| match     |Map name – string| See [notes](#mapName-note) |     119.1     |
players| roster    |Array of “player” objects| See [notes](#players-note) |     119.1     |
health| ship      |The current “health” of the user’s ship – int| See [notes](#health-note) |     119.1     |
name| ship      | The ship’s name – string| See [notes](#name-note) |     119.1     |
level| ship      |The level of the player’s ship| See [notes](#level-note) |     122.1     |
burning| ship      |Whether the ship is burning or not (true / false)| See [notes](#burning-note) |     122.1     |
flooding| ship      |Whether the ship is flooding or not| See [notes](#flooding-note) |     122.1     |
nation| ship      |The current nation of the player’s ship| See [notes](#nation-note) |     122.1     |
state| match     |Check notes| See [notes](#state-note) |     119.1     |

#### *mapName* note

Data Example:

`{"feature":"match","category":"match","key":"mapName","value":"33_new_tierra"}`

* An empty string will be set when there is no relevant map (e.g. while in the dock)
* On tutorial maps (e.g. “i01_tutorial”), some features might not work correctly (specifically death/kill)

#### *players* note

Each “player” contains the following data:

* <b>shipId</b>
* <b>name</b> – player name
* <b>team</b> – ally/enemy
* <b>ship</b> – ship name
* <b>maxHealth</b> – The ship’s max health

Data Example:

```json
"[{\"shipId\":\"1175724\",\"name\":\":Wright:\",\"team\":\"ally\",
\"ship\":\"PZSC101_Cheng_An\",\"maxHealth\":\"4900\"},
{\"shipId\":\"1175726\",\"name\":\":Buckmaster:\",\"team\":\"ally\",
\"ship\":\"PJSC037_Hashidate_1940\",\"maxHealth\":\"5150\"},
...
{\"shipId\":\"1175728\",\"name\":\":Tovey:\",\"team\":\"enemy\",
\"ship\":\"PASC001_Erie_1936\",\"maxHealth\":\"4950\"}]"
```

#### *health* note

Data Example:

`{"feature":"match","category":"ship","key":"health","value":"4900"}`

#### *name* note

Data Example:

`{"feature":"match","category":"ship","key":"name","value":"PZSC101_Cheng_An"}`

#### *level* note

Data Example:

`{"feature":"match","category":"ship","key":"level","value":"1"}`

#### *burning* note

Data Example:

`{"feature":"match","category":"ship","key":"burning","value":false}`

#### *flooding* note

Data Example:

`{"feature":"match","category":"ship","key":"flooding","value":false}`

#### *nation* note

Data Example:

`{"feature":"match","category":"ship","key":"nation","value":"Pan_Asia"}`

#### *state* note

Possible values:

* <b>running</b> – match is active
* <b>empty string</b> – match is not active

Data Example:

`{"feature":"match","category":"match","key":"state","value":"running"}`

### Events

Event      | Event Data  | Fired When          | Notes              | Since GEP Ver. |
-----------| ------------| ------------------- | ------------------ | --------------|
matchStart | null        |  Match starts       |                    |   119.1       | 
matchEnd   | null        | Match ends          |                    |   119.1       | 
matchOutcome | "victory" / "lost" |  Match ends |                   |   119.1       | 

## `kill`

### Events

Event      | Event Data  | Fired When          | Notes              | Since GEP Ver. |
-----------| ------------| ------------------- | ------------------ | --------------|
kill |Ship id of the “victim” ship – int|A ship was destroyed by the local user|        |   121.0       | 
damage   |<ul><li>amount – amount of damage done</li><li>shipId – int</li>|A ship was damaged by the local user|     |   121.0   | 
ribbon |  ribbon – string | Ribbon was awarded |                    |   119.1       | 

## `death`

### Events

Event      | Event Data  | Fired When          | Notes              | Since GEP Ver. |
-----------| ------------| ------------------- | ------------------ | --------------|
death      |Ship id of the “killer” ship – int|  Match starts       |            |   119.1       | 
hit        |<ul><li>damage – amount -int</li><li>ship name – string</li>| The player’s ship was damaged|     |   119.1       | 
