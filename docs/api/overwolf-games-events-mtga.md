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

* [game_info](#game_info)
* [match_info](#match_info)

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

