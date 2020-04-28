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
{"feature":"gep_internal","category":"gep_internal","key":"version_info","value":"{"local_version":"143.0.10","public_version":"143.0.10","is_updated":true}"}
```

## `match_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
map          | match_info  | Name of selected map.     | See [notes](#map-note)|   148.0       |

#### *map* note

Data Example:

```json
{“feature”:”match_info”,“category”:”match_info”,“key”:”map”,“value”:” woods”}
```

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
match_start | null         | Match is found and about to start. | See [notes](#match_start-note) | 148.0  |
match_end   | null         | Match has ended.                   | See [notes](#match_end-note)   | 148.0  |

#### *match_start* note

Data Example:

```json
{“feature”:”match_info,“event”:”match_start”,“data”:”null”}
```

#### *match_end* note

Data Example:

```json
{“feature”:”match_info,“event”:”match_end”,“data”:”null”}
```

## `game_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
phase        | game_info   | Current game state.       | See [notes](#phase-note)|   148.0       |

#### *phase* note

Data Example:

```json
{“feature”:”game_info”, ”category”:”game_info”, ”key”:”phase”, ”value”:”scene_Login”}
```
```json
{“feature”:”game_info”, ”category”:”game_info”, ”key”:”phase”, ”value”:”scene_ExitRaid”}
```
```json
{“feature”:”game_info”, ”category”:”game_info”, ”key”:”phase”, ”value”:”scene_BattleUI”}
```
```json
{“feature”:”game_info”, ”category”:”game_info”, ”key”:”phase”, ”value”:”scene_SelectRaidSide”}
```
```json
{“feature”:”game_info”, ”category”:”game_info”, ”key”:”phase”, ”value”:”scene_SelectLocation”}
```
