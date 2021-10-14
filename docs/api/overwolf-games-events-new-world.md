---
id:overwolf-games-events-new-world
title: New World
sidebar_label: New World
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
21816
:::

## Sample Apps

* [New World game events sample app](https://github.com/overwolf/events-sample-apps)

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
gep_internal | gep_internal| Local + Public version number|See [notes](#gep_internal-note)|   182.0       |

#### *gep_internal* note

Data Example:

```json
{"gep_internal":{"version_info":"{"local_version":"182.0.1","public_version":"182.0.1","is_updated":true}"}},"feature":"gep_internal"}
```

## `game_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
location     | game_info   | The current game scene.   |  See [notes](#location-note) |   182.0       |

#### *location* note

Data Example:

```json
{"info":{"game_info":{"location":"{ "player.position.x,9597.41,player.position.y,2313.18,player.position.z,42.21,player.rotation.x,0,player.rotation.y,0,player.rotation.z,19,player.compass,E" }"}},"feature":"location"}
```
