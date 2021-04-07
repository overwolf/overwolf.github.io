---
id:overwolf-games-events-valheim
title: Valheim
sidebar_label: Valheim
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
21668
:::

## Sample Apps

* [Valheim game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [gep_internal](#gep_internal)
* [game_info](#game_info)


## Game events status

It is highly recommended to communicate errors and warnings to your app users. 

Check [here](../status/all) the game events status. OR -  easily check the game events status from your app, [using our API](../topics/howto-check-events-status-from-app).

## `gep_internal`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
gep_internal | gep_internal| Local + Public version number|See [notes](#gep_internal-note)|   143.0       |

#### *gep_internal* note

Data Example:

```json
{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}
```

## `game_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
scene        | game_info   | The current game scene.   |  See [notes](#scene-note) |   169.0       |
player_name  | game_info   | Name of local Player      |  See [notes](#player-note)|   169.0       |
death        | game_info   | Total number of deaths    |  See [notes](#death-note) |   169.0       |
state        | game_info   | In progress / Not in progress | See [notes](#state-note)|   169.0       |

#### *scene* note

Data Example:

```json
{"game_info":{"scene":"MainMenu"}},"feature":"game_info"}
{"game_info":{"scene":"SelectCharacter"}},"feature":"game_info"}
{"game_info":{"scene":"WorldList"}},"feature":"game_info"}
{"game_info":{"scene":"ServerList"}},"feature":"game_info"}
{"game_info":{"scene":"Loading"}},"feature":"game_info"}
```

#### *player_name* note

Data Example:

```json
{"game_info":{"player_name":"Shargaas"}},"feature":"game_info"}
```

#### *death* note

Data Example:

```json
{"game_info":{"death":"14"}},"feature":"game_info"}
```

#### *state* note

Data Example:

```json
{"game_info":{"state":"in_progress"}},"feature":"game_info"}
{"game_info":{"state":"ended"}},"feature":"game_info"}
```

### Events

Event  | Event Data        | Fired When (announcement)           | Notes      | Since GEP Ver. |
-------| ------------------| -------------------------------------| ---------- | --------------|
respawn | null      | Entering a game / Dying. |See [notes](#respawn-note)     |    169.0      |

#### *match_start* note

Data Example:

```json
{"name":"respawn","data":""}
```
