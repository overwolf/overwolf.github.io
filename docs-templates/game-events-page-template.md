---
id: overwolf-games-events-xepa-legends
title: Xepa Legends Game Events
sidebar_label: xepa Legends Events
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
21566
:::

## Sample Apps
* [Xepa game events sample app](https://github.com/overwolf/xepa-events-sample-app)

## Available Features

* [me](#me)
* [match_info](#match_info)
* [match_state](#match_state)

## `me`

### Info Updates

key               | Category    | Values                    | Notes                 | Since Version |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
me                | game_info   | Local Player Name         |                       |  0. 128       |
ultimate_cooldown | me          | Ultimate ability cooldown |                       |  0. 128       |

## `match_info`

### Info Updates

key               | Category    | Values                                                              | Notes                 | Since Version |
----------------- | ------------| ------------------------------------------------------------------- | --------------------- | ------------- |
pseudo_match_id   | match_info  |The current session’s ID code. See [notes](#pseudo_match_id-notes)   |                       |  0. 130       |

#### *pseudo_match_id* notes

Note that this is an Overwolf-generated code. Unrelated to Respawn.

Example data:

`0c0ea3df-97ea-4d3a-b1f6-f8e34042251f`

## `match_state`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
------------ | ------------| ------------------------- | --------------------- | ------------- |
match_state  | game_info   | active/inactive           |                       |  0. 128       |

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
match_Start | null         | Match started |                    |     0.128     |
match_End   | null         | Match ended   |                    |     0.128     |
