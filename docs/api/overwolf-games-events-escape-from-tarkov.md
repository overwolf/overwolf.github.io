---
id: overwolf-games-events-escape-from-tarkov
title: Escape From Tarkov
sidebar_label: Escape From Tarkov
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
21634
:::

## Sample Apps
* [TARKOV game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [gep_internal](#gep_internal)
* [match_info](#match_info)
* [game_info](#game_info)

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
{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}
```

## `match_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
map          | match_info  | Name of selected map.     | See [notes](#map-note)|   148.0       |

#### *map* note

Data Example:

```json
{"info":{"match_info":{"map":"woods"}},"feature":"match_info"}
```

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
match_start | null         | Match is found and about to start. | See [notes](#match_start-note) | 148.0  |
match_end   | null         | Match has ended.                   | See [notes](#match_end-note)   | 148.0  |

#### *match_start* note

Data Example:

```json
{“event”:”match_start”,“data”:”null”}
```

#### *match_end* note

Data Example:

```json
{“event”:”match_end”,“data”:”null”}
```

## `game_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
phase        | game_info   | Current game state.       | See [notes](#phase-note)|   148.0       |

#### *phase* note

Data Example:

```json
{"info":{"game_info":{"phase":"scene_Login"}},"feature":"game_info"}
```
```json
{"info":{"game_info":{"phase":"scene_ExitRaid"}},"feature":"game_info"}
```
```json
{"info":{"game_info":{"phase":"scene_BattleUI"}},"feature":"game_info"}
```
```json
{"info":{"game_info":{"phase":"scene_SelectRaidSide"}},"feature":"game_info"}
```
```json
{"info":{"game_info":{"phase":"scene_SelectLocation"}},"feature":"game_info"}
```
