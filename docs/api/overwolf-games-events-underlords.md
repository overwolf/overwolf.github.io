---
id: overwolf-games-events-underlords
title: Dota Underlords
sidebar_label: Dota Underlords
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
21586
:::

## Sample Apps
* [Dota Underlords game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [match_info](#match_info)

## Game event status

It is highly recommended to communicate errors and warnings to app users. 

Check the current game event status [here](../status/all). Alternately, you can easily check that status from your app itself, [using our API](../topics/howto-check-events-status-from-app).

## match_info

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | -------------  | 
mode         | match_info  | Current-played game mode  |See [notes](#mode-note)      |     139.0      |
round_type   | match_info  | PVE / PVP                 |See [notes](#round_type-note)|     139.0      |
round_state  | match_info  |State the game is currently in.|See [notes](#round_state-note)|   139.0  |

#### *mode* note

Data Example:

```json
{"info":{"match_info":{"mode":"Casual"}},"feature":"match_info"}
```

#### *round_type* note

Data Example:

```json
{"info":{"match_info":{"round_type":"{"round":1,"type":"PvE_creep_wave_1_#dac_creep_wave_1"}"}},"feature":"match_info"}
```
```json
{"info":{"match_info":{"round_type":"{"round":4,"type":"PvP"}"}},"feature":"match_info"}
```

#### *round_state* note

Data Example:

```json
{"info":{"match_info":{"round_state":"Ready"}},"feature":"match_info"}
```
```json
{"info":{"match_info":{"round_state":"Combat"}},"feature":"match_info"}
```

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | ---------------|
match_start | null         | Match started |See [notes](#match_start-note) |     139.0      | 
match_end   | null         | Match ended   |See [notes](#match_end-note)   |     139.0      | 
battle_start| null         | Combat started|See [notes](#battle_start-note)|     139.0      | 
battle_end  | null         | Combat ended  |See [notes](#battle_end-note)  |     139.0      | 

#### *match_start* note

Data Example:

```json
{"events":[{"name":"match_start","data":""}]}
```

#### *match_end* note

Data Example:

```json
{"events":[{"name":"match_end","data":""}]}
```

#### *battle_start* note

Data Example:

```json
{"events":[{"name":"battle_start","data":""}]}
```

#### *battle_end* note

Data Example:

```json
{"events":[{"name":"battle_end","data":""}]}
```



