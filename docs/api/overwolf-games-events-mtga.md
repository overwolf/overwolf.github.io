---
id: overwolf-games-events-mtga
title: MTGA Game Events
sidebar_label: Magic The Gathering: Arena Events
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

## game_info

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | -------------  | 
detailed_logs_enabled | game_info   | True / False | See [notes](#detailed_logs_enabled-note) |     138.0      |

#### *detailed_logs_enabled* note

Data Example:

```json
{"feature":"game_info","category":"game_info","key":"detailed_logs_enabled","value":true}
```

## match_info

Event  | Event Data        | Fired When (announcement)                                          | Notes      | Since GEP Ver. |
-------| ------------------| -------------------------------------------------------------------| ---------- | --------------|
match_outcome |  victory/defeat   | When the local player wins/loses. |See [notes](#match_outcome)|    130.0      |

#### *match_outcome*

Data Example:

```json
{"feature":"match_outcome","data":"victory"}
{"feature":"match_outcome","data":"defeat"}
```
