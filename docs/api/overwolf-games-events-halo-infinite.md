---
id: overwolf-games-events-halo-infinite
title: Halo Infinite
sidebar_label: Halo Infinite
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
21854
:::

## Sample Apps
* [Halo Infinite game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [gep_internal](#gep_internal)
* [game_info](#game_info)
* [match_info](#match_info)
* [kill](#kill)
* [assist](#assist)
* [death](#death)

## Game event status

It is highly recommended to communicate errors and warnings to app users. 
Check the current game event status [here](../status/all). Alternately, you can easily check that status from your app itself, [using our API](../topics/howto-check-events-status-from-app).

## `gep_internal`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
gep_internal | gep_internal| Local + Public version number|See [notes](#gep_internal-note)|   143.0       |

#### *gep_internal*  note

Data Example:

```json
{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}
```

## `game_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
scene        | game_info   | The name of the current scene. |See [notes](#scene-note)|   190.0       |

#### *scene* note

Data Example:

```json
{"info":{"game_info":{"scene":"lobby"}},"feature":"game_info"}
```
List of possible values:
* intro
* transfer_to_lobby
* lobby
* match_start_countdown
* loading
* ingame

## `match_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
local_player_stats | match_info  | A variety of in-game stats for local player. |See [notes](#local_player_stats-note)|   190.0       |


#### *local_player_stats*  note

Data Example:

```
{"info":{"match_info":{"local_player_stats":"{"Score":0,"RoundsWon":1,"RoundsTied":0,"PersonalScore":1350,"Kills":8,"Deaths":13,"Assists":8,"KDA":0,"Suicides":0,"Betrayals":0,"AverageLifeDuration":0,"BestKillingSpree":3,"Headshots":0,"ShotsFired":0,"ShotsHit":0,"AccuracyPercentage":0,"MeleeKills":3,"GrenadeKills":1,"PowerWeaponKills":0,"DamageDone":0,"DamageTaken":0}"}},"feature":"match_info"}
```

Important note:
Some of the stat parameters at the moment don't return any values (KDA, AccuracyPercentage, ShotsHit, DamageDone, DamageTaken, ShotsFired, AverageLifeDuration and more).

### Events

Event        | Event Data        | Fired When        | Notes              | Since GEP Ver. |
-------------| ------------------| ----------------- | ------------------ | ---------------|
match_start  | null              | When loading into map.|See [notes](#match_start-note)|   190.0  |
match_end    | null              | When disconnecting from map. |See [notes](#match_end-note)|   190.0  |

#### *match_start*  note

Data Example:

```json
{"events":[{"name":"match_start","data":"null"}]}
```

#### *match_end*  note

Data Example:

```json
{"events":[{"name":"match_end","data":"null"}]}
```

## `kill`

### Events

Event        | Event Data        | Fired When        | Notes              | Since GEP Ver. |
-------------| ------------------| ----------------- | ------------------ | ---------------|
kill         | Integer           | Killing an opponent. |See [notes](#kill-note)|   190.0  |

#### *kill*  note

Data Example:

```json
{"events":[{"name":"kill","data":"1"}]}
```

## `assist`

### Events

Event        | Event Data        | Fired When        | Notes              | Since GEP Ver. |
-------------| ------------------| ----------------- | ------------------ | ---------------|
assist         | Integer           | Assist in killing an opponent. |See [notes](#assist-note)|   190.0  |

#### *assist*  note

Data Example:

```json
{"events":[{"name":"assist","data":"1"}]}
```

## `death`

### Events

Event        | Event Data        | Fired When        | Notes              | Since GEP Ver. |
-------------| ------------------| ----------------- | ------------------ | ---------------|
death        | Integer           | Dying to an opponent. |See [notes](#death-note)|   190.0  |

#### *death*  note

Data Example:

```json
{"events":[{"name":"death","data":"1"}]}
```
