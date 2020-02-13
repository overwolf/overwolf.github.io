---
id: overwolf-games-events-path-of-exile
title: Path of Exile
sidebar_label: Path of Exile
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
7212
:::

## Sample Apps
* [Path of Exile game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [gep_internal](#gep_internal)
* [kill](#kill)
* [death](#death)
* [me](#me)
* [match_info](#match_info)

## Game event status

It is highly recommended to communicate errors and warnings to app users. 

Check the current game event status [here](../status/all). Alternately, you can easily check that status from your app itself, [using our API](../topics/howto-check-events-status-from-app).

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

## kill

### Events

Event        | Event Data        | Fired When   | Notes              | Since GEP Ver. |
-------------| ------------------| ------------ | ------------------ | ---------------|
boss_kill    | Name of boss      | Boss was killed| See [notes](#boss_kill-note)| 143.1 |

#### *boss_kill* note

Data Example:

```json
{"events":[{"name":"boss_kill","data":"Fire Fury"}]}
```

## death

### Events

Event        | Event Data        | Fired When        | Notes              | Since GEP Ver. |
-------------| ------------------| ----------------- | ------------------ | ---------------|
death        | null              | Local player died | See [notes](#death-note)| 143.1     |

#### *death* note

Data Example:

```json
{"events":[{"name":"death","data":null}]}
```

## me

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
character_name| me        | Local player nickname.     |See [notes](#character_name-note)|   144.0  |
character_level| me        | Local player level.       |See [notes](#character_level-note)|   144.0  |


#### *character_name* note

Data Example:

```json
{"info":{"me":{"character_name":"Shaelgaas"}},"feature":"me"}
```

#### *character_level* note

Data Example:

```json
{"info":{"me":{"character_level":"31"}},"feature":"me"}
```

## match_info

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
current_zone | match_info  | Name of the current zone  |See [notes](#current_zone-note)|   144.0  |
opened_page  | match_info  | Whether inventory is open/closed |See [notes](#opened_page-note)|   144.0  |

### Events

Event        | Event Data        | Fired When        | Notes              | Since GEP Ver. |
-------------| ------------------| ----------------- | ------------------ | ---------------|
match_outcome| victory/defeat  | Boss killed/You died.|See [notes](#match_outcome-note)|   144.0  |

#### *current_zone* note

Data Example:

```json
{"feature":"match_info","category":"match_info","key":"current_zone","value":"Lioneye's Watch"}
```

#### *opened_page* note

Data Example:

```json
{"feature":"match_info","category":"match_info","key":"opened_page","value":"inventory"}
{"feature":"match_info","category":"match_info","key":"opened_page","value":null}
```

#### *match_outcome* note

Data Example:

```json
{"events":[{"name":"match_outcome","data":"victory"}]}
{"events":[{"name":"match_outcome","data":"defeat"}]}
```
