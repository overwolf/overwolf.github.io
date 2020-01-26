---
id: overwolf-games-events-mtga
title: MTG Arena Game Events
sidebar_label: MTG Arena
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
21308
:::

## Sample Apps
* [MTGA game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [gep_internal](#gep_internal)
* [game_info](#game_info)
* [match_info](#match_info)

## `gep_internal`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
gep_internal | gep_internal| Local + Public version number|See [notes](#gep_internal-note)|   143.0       |

#### `gep_internal` note

Data Example:

```json
{"feature":"gep_internal","category":"gep_internal","key":"version_info","value":"{"local_version":"143.0.10","public_version":"143.0.10","is_updated":true}"}
```

## `game_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | -------------  | 
detailed_logs_enabled | game_info   | True / False | See [notes](#detailed_logs_enabled-note) |     138.0      |
scene | game_info   | Current state (screen) of the game | See [notes](#scene-note) |     139.0      |

#### *scene* note

Possible values:

* home
* profile
* decks
* packs
* store
* event
* loading
* draft_pack (vertical/horizontal)
* deck_building
* match
* sideboarding

Data Example:

```json
{"feature":"game_info","category":"game_info","key":"scene","value":"home"}
```
```json
{"feature":"game_info","category":"game_info","key":"scene","value":"decks"}
```

#### *detailed_logs_enabled* note

In order to get events for this game, you need to enable "Detailed Logs" from your account settings in the game.
At the bottom you will have a checkbox - "Detailed Logs (Plugin Support)". You'll need to check it.

Data Example:

```json
{"feature":"game_info","category":"game_info","key":"detailed_logs_enabled","value":true}
```

## `match_info`

### Events

Event  | Event Data        | Fired When (announcement)                                          | Notes      | Since GEP Ver. |
-------| ------------------| -------------------------------------------------------------------| ---------- | --------------|
game_outcome |  victory/defeat   | When the local player wins/loses. |See [notes](#game_outcome)|    139.0      |
match_outcome |  victory/defeat   | When the local player wins/loses. |See [notes](#match_outcome)|    139.0      |
match_start | game_format+deck_id   | When match has started + Deck information |See [notes](#match_start)|    139.0      |


#### *game_outcome*

Data Example:

```json
{"feature":"game_outcome","data":"victory"}
{"feature":"game_outcome","data":"defeat"}
```

#### *match_outcome*

This event is relevant for modes that have a best-of-3 format, thus giving the final outcome.

Data Example:

```json
{"feature":"match_outcome","data":"victory"}
{"feature":"match_outcome","data":"defeat"}
```

#### *match_start*

Data Example:

```json
{"events":[{"name":"match_start","data":"{"game_format":"Constructed_Event_2020","deck_id":"b6ed3e9b-db31-43b5-a903-29694f21f977","main_deck":[{"id":69890,"count":1},{"id":70107,"count":1},{"id":69905,"count":4},{"id":68526,"count":3},{"id":68547,"count":3},{"id":70105,"count":3},{"id":70110,"count":3},{"id":70109,"count":4},{"id":69218,"count":3},{"id":69876,"count":2},{"id":69880,"count":2},{"id":69894,"count":3},{"id":69877,"count":2},{"id":70017,"count":1},{"id":70054,"count":25}],"sideboard":[]}"}]}
```

