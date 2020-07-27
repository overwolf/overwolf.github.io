---
id: overwolf-games-events-minecraft
title: Minecraft
sidebar_label: Minecraft
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
8032
:::

## Sample Apps
* [Minecraft game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [gep_internal](#gep_internal)
* [game_info](#game_info)
* [match_info](#match_info)

## Game event status

It is highly recommended to communicate errors and warnings to app users. 

Check the current game event status [here](../status/all). Alternately, you can easily check that status from your app itself, [using our API](../topics/howto-check-events-status-from-app).

:::warning note
The events are currently available only to the standard game. We do not support moded  clients.
:::

## gep_internal

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
gep_internal | gep_internal| Local + Public version number|See [notes](#gep_internal-note)|   143.0       |

#### *gep_internal* note

Data Example:

```json
{"feature":"gep_internal","category":"gep_internal","key":"version_info","value":"{"local_version":"143.0.10","public_version":"143.0.10","is_updated":true}"}
```

## game_info

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
scene        | game_info   | The name of the current scene. |See [notes](#scene-note)|   153.0       |
name         | game_info   | The name of the local player. |See [notes](#name-note)|   153.0       |

#### *scene* note

Data Example:

```json
{"feature":"game_info","category":"game_info","key":"scene","value":"Play Multiplayer"}
{"feature":"game_info","category":"game_info","key":"scene","value":"Game Menu"}
{"feature":"game_info","category":"game_info","key":"scene","value":"Statistics"}
```

#### *name* note

Data Example:

```json
{"feature":"game_info","category":"game_info","key":"name","value":"OverwoldDeBest"}
```

## match_info

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
server       | match_info  | The full id of the server. |See [notes](#server-note)|   153.0       |
general_stats| match_info  | All of the current general statistics. |See [notes](#general_stats-note)|   153.0       |
item_stats   | match_info  | All of the current item statistics. |See [notes](#item_stats-note)|   153.0       |
mobs_stats   | match_info  | All of the current mob statistics. |See [notes](#mobs_stats-note)|   153.0       |

### Events

Event        | Event Data        | Fired When        | Notes              | Since GEP Ver. |
-------------| ------------------| ----------------- | ------------------ | ---------------|
match_start  | null              | When loading into map.|See [notes](#match_start-note)|   153.0  |
match_end    | null              | When disconnecting from map.|See [notes](#match_end-note)|   153.0  |

#### *server* note

Data Example:

```json
{"feature":"match_info","category":"match_info","key":"server","value":"play.omniverse.rocks"}
```

#### *general_stats* note

Data Example:

```json
{"feature":"match_info","category":"match_info","key":"general_stats","value":"[
    {"name":"clean_banner","value":"0"},
    {"name":"open_shulker_box","value":"0"},
    {"name":"animals_bred","value":"0"},
    {"name":"fish_caught","value":"0"},
    {"name":"leave_game","value":"278"},
    {"name":"interact_with_smithing_table","value":"0"},
    {"name":"interact_with_crafting_table","value":"0"},
...
    {"name":"jump","value":"4872"},
    {"name":"inspect_dispenser","value":"0"},
    {"name":"tune_noteblock","value":"0"},
    {"name":"crouch_one_cm","value":"19.8 m"},
    {"name":"open_chest","value":"0"},
    {"name":"time_since_death","value":"6.46667 min"},
    {"name":"walk_under_water_one_cm","value":"99.38 m"},
    {"name":"drop","value":"2"}
```

#### *item_stats* note

Data Example:

```json
{"feature":"match_info","category":"match_info","key":"items_stats","value":"[
    {"name":".stone_sword","value":"1","stat_type":"stat_type.minecraft.dropped"},
    {"name":".stone_pickaxe","value":"1","stat_type":"stat_type.minecraft.dropped"},
    {"name":"ft.stone_pickaxe","value":"1","stat_type":"stat_type.minecraft.picked_up"},
    {"name":"ft.stone_sword","value":"1","stat_type":"stat_type.minecraft.picked_up"},
    {"name":"ead","value":"13","stat_type":"stat_type.minecraft.used"}]"}
```

#### *mobs_stats* note

Data Example:

```json
{"feature":"match_info","category":"match_info","key":"mobs_stats","value":"[
    {"name":"sheep","value":"6","stat_type":"stat_type.minecraft.killed"},
    {"name":"cow","value":"1","stat_type":"stat_type.minecraft.killed"}]"}
```

#### *match_start* note

Data Example:

```json
{"events":[{"name":"match_start","data":"null"}]}

```

#### *match_end* note

Data Example:

```json
{"events":[{"name":"match_end","data":"null"}]}
```
