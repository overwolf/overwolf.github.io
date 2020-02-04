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
