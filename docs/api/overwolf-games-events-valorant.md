---
id: overwolf-games-events-valorant
title: Valorant
sidebar_label: Valorant
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
21640
:::

## Sample Apps
* [VALORANT game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [gep_internal](#gep_internal)
* [me](#me)
* [game_info](#game_info)
* [match_info](#match_info)
* [kill](#kill)
* [death](#death)

## Game event status

It is highly recommended to communicate errors and warnings to app users. 

Check the current game event status [here](../status/all). Alternately, you can easily check that status from your app itself, [using our API](../topics/howto-check-events-status-from-app).

## `gep_internal`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
gep_internal | gep_internal| Local + Public version number|See [notes](#gep_internal-note)|   143.0       |

#### *gep_internal* note

Data Example:

```json
{"feature":"gep_internal","category":"gep_internal","key":"version_info","value":"{"local_version":"143.0.10","public_version":"143.0.10","is_updated":true}"}
```

## `me`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
player_name  | me          | Name of local player.     |See [notes](#player_name-note)|   148.0       |
player_id    | me          | ID of the local player.   |See [notes](#player_id-note)|   148.0       |
region       | me          | Region of the local player.|See [notes](#region-note)|   148.0       |


#### *player_name* note

Data Example:

```json
{"info":{"me":{"player_name":"Doom#5339"}},"feature":"me"}
```

#### *player_id* note

Data Example:

```json
{"info":{"me":{"player_id":"f4029eff-92e6-56db-adba-4d073df968a4"}},"feature":"me"}
```

#### *region* note

Data Example:

```json
{"info":{"me":{"region":"esp"}},"feature":"me"}
```

## `match_info`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
match_start | null         | Match started. | See [notes](#match_start-note) | 148.0  |
match_end   | null         | Match ended.   | See [notes](#match_end-note) | 148.0  |

#### *match_start* note

Data Example:

```json
{"feature":"match_info","event":"match_start","data":null}
```

#### *match_end* note

Data Example:

```json
{"feature":"match_info","event":"match_end","data":null}

```

## `game_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
scene        | game_info   | The current scene-state.   |See [notes](#scene-note)|   148.0       |
state        | game_info   | The current game-state.   |See [notes](#state-note)|   148.0       |

#### *scene* note

"Scene" info includes the scenes of the game and the name of the map that is currently played (like in the example down below - Triad).

Data Example:

```json
{"feature":"game_info","category":"game_info","key":"scene","value":"Triad"}
```
Possible Scene values:

* "MainMenu" - Main menu
* "Triad" - Bind map
* "Duality" - Haven map
* "Bonsai" - Split map
* "Range" - Practice Range map
* "CharacterSelectPersistentLevel" - Character Selection


#### *state* note

Data Example:

```json
{"feature":"game_info","category":"game_info","key":"state","value":"WaitingToStart"}
{"feature":"game_info","category":"game_info","key":"state","value":"InProgress"}
```

Possible states:
* "WaitingToStart"
* "LeavingMap"
* "Aborted"
* "InProgress"
* "Init"

## `kill`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
kills         | kill        | Amount of kills performed by the local player. |See [notes](#kill-note)|   148.0       |
assists       | kill        | Amount of assists performed by the local player. |See [notes](#assist-note)|   148.0  |

#### *kill* note

Data Example:

```json
{"feature":"kill","category":"kill","key":"kills","value":1}
{"feature":"kill","category":"kill","key":"kills","value":2}
{"feature":"kill","category":"kill","key":"kills","value":3}
```

#### *assist* note

Data Example:

```json
{"info":{"kill":{"assists":1}},"feature":"kill"}
```

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
kill        | Total kills  | Kill is performed. | See [notes](#kill-note) | 148.0  |
assist      | Total assists| Assist is performed. | See [notes](#assist-note) | 148.0  |

#### *kill* note

Data Example:

```json
{"events":[{"name":"kill","data":6}]}
```

#### *assist* note

Data Example:

```json
{"events":[{"name":"assist","data":1}]}
```

## `death`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
deaths       | death       | Amount of deaths by the local player. |See [notes](#death-note)|   148.0       |

#### *death* note

Data Example:

```json
{"feature":"death","category":"death","key":"deaths","value":1}
```

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
death       | Total deaths | Local player died. | See [notes](#death-note) | 148.0  |

#### *death* note

Data Example:

```json
{"events":[{"name":"death","data":14}]}
```

