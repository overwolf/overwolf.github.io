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
* [mods](#mods)

## Game event status

It is highly recommended to communicate errors and warnings to app users. 

Check the current game event status [here](../status/all). Alternately, you can easily check that status from your app itself, [using our API](../topics/howto-check-events-status-from-app).

:::warning note
The events are currently available only to the standard game. We do not support modded  clients.
:::

<b>`GEP supports the following Minecraft versions:`</b>

* 1.12.2
* 1.16 & 1.16.1 versions are NOT supported.
* 1.16.2 - present.
* addons supported from versions 1.8 to 1.18 

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

## `game_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
scene        | game_info   | The name of the current scene. |See [notes](#scene-note)|   153.0       |
name         | game_info   | The name of the local player. |See [notes](#name-note)|   153.0       |

#### *scene* note

Data Example:

```json
{"info":{"game_info":{"scene":"Title Screen"}},"feature":"game_info"}
{"info":{"game_info":{"scene":"Select World"}},"feature":"game_info"}
```

#### *name* note

Data Example:

```json
{"info":{"game_info":{"name":"OverwoldDeBest"}},"feature":"game_info"}
```

## `match_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
server       | match_info  | The full id of the server. |See [notes](#server-note)|   153.0       |
general_stats| match_info  | All of the current general statistics. |See [notes](#general_stats-note)|   153.0       |
item_stats   | match_info  | All of the current item statistics. |See [notes](#item_stats-note)|   153.0       |
mobs_stats   | match_info  | All of the current mob statistics. |See [notes](#mobs_stats-note)|   153.0       |
location     | match_info  | Current player's location in the game. |See [notes](#location-note)|   157.0       |
facing       | match_info  | The current direction the player is facing. |See [notes](#facing-note)|   157.0       |


### Events

Event        | Event Data        | Fired When        | Notes              | Since GEP Ver. |
-------------| ------------------| ----------------- | ------------------ | ---------------|
match_start  | null              | When loading into map.|See [notes](#match_start-note)|   153.0  |
match_end    | null              | When disconnecting from map. |See [notes](#match_end-note)|   153.0  |
chat         | text              | When chat window is updated. |See [notes](#chat-note)|   187.0  |


#### *server* note

Data Example:

```json
{"info":{"match_info":{"server":"Play.datblock.com"}},"feature":"match_info"}
```

#### note regarding statistics

To activate and extract the data out of the statistics you must open the main menu (ESC) and click on the statistics.

#### *general_stats* note

Data Example:

```json
{
    "info": {
        "match_info": {
            "general_stats": "[ {
                "name": "damage_absorbed",
                "value": "0"
            },
            {
                "name": "fall_one_cm",
                "value": "0 cm"
            },
            {
                "name": "walk_one_cm",
                "value": "79.65 m"
            },
...
            {"name":"enchant_item","value":"0"}]"}},
                "feature":"match_info"}
```

#### *item_stats* note

Data Example:

```json
    {"info":
        {"match_info":{"items_stats":"[
            {"name":"rass","value":"4","stat_type":"stat_type.minecraft.mined"},
            {"name":"ead_bush","value":"31","stat_type":"stat_type.minecraft.mined"},
            {"name":"ft.wheat_seeds","value":"6","stat_type":"stat_type.minecraft.picked_up"},
            {"name":"ft.beef","value":"1","stat_type":"stat_type.minecraft.picked_up"},
            {"name":"ft.leather","value":"1","stat_type":"stat_type.minecraft.picked_up"}]"}},
            "feature":"match_info"}
```

#### *mobs_stats* note

Data Example:

```json
{"info":{"match_info":{"mobs_stats":"[{"name":"cow","value":"1","stat_type":"stat_type.minecraft.killed"}]"}},"feature":"match_info"}
```

#### *location* note

Data Example:

```json
{"info":{"match_info":{"location":"{"x":-289.403,"y":60.9237,"z":474.063}"}},"feature":"match_info"}
{"info":{"match_info":{"location":"{"x":-289.669,"y":60.4237,"z":475.049}"}},"feature":"match_info"}
{"info":{"match_info":{"location":"{"x":-290.248,"y":59.9237,"z":476.861}"}},"feature":"match_info"}
{"info":{"match_info":{"location":"{"x":-290.754,"y":59.4237,"z":478.788}"}},"feature":"match_info"}
```

#### *facing* note

Data Example:

```json
{"info":{"match_info":{"facing":"{"x":146.851,"y":1.34979}"}},"feature":"match_info"}
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

#### *chat* note

Data Example:

```json
{"events":[{"name":"chat","data":"§7overwolfqa§7: hello"}]}
```
## `game_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
scene        | game_info   | The name of the current scene. |See [notes](#scene-note)|   153.0       |
name         | game_info   | The name of the local player. |See [notes](#name-note)|   153.0       |

#### *scene* note

Data Example:

```json
{"info":{"game_info":{"scene":"Title Screen"}},"feature":"game_info"}
{"info":{"game_info":{"scene":"Select World"}},"feature":"game_info"}
```

#### *name* note

Data Example:

```json
{"info":{"game_info":{"name":"OverwoldDeBest"}},"feature":"game_info"}
```

## `mods`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
addon_xxx        |  mods  | Addons list used by the player |See [notes](#addon_xxx-note)|   190.0       |

#### *addon_xxx* note

Supported from versions 1.8 to 1.18 

Data Example:

```json
{"info":{"mods":{"addon_153":"{"name":"xpbook","display_name":"XP Tome","version":"2.1.3"}"}},"feature":"mods"}
```
