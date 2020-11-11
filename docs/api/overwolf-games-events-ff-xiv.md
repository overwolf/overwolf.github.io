---
id: overwolf-games-events-ff-xiv
title: Final Fantasy XIV Game Events
sidebar_label: Final Fantasy XIV
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
6350
:::

## Sample Apps
* [Final Fantasy XIV game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [gep_internal](#gep_internal)
* [game_info](#game_info)
* [match_info](#match_info)

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

## `match_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
contact_xx   | match_info  | Names of people in your contacts. |See [notes](#contact_xx-note)|   159.0    |

#### *contact_xx* note

Data Example:

```json
{"info":{"match_info":{"contact_0":"{"name":"Lucy Floresta","home_world":"Twintania"}"}},"feature":"match_info"}
{"info":{"match_info":{"contact_1":"{"name":"Onodera Kosaki","home_world":"Twintania"}"}},"feature":"match_info"}
{"info":{"match_info":{"contact_2":"{"name":"Nihlomer Vox","home_world":"Lich"}"}},"feature":"match_info"}
...
```
