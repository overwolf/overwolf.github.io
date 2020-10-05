---
id: overwolf-games-events-sc2
title: StarCraft II Game Events
sidebar_label: StarCraft II
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
5855
:::

## Sample Apps

* [SC2 game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [gep_internal](#gep_internal)
* [match_info](#match_info)

## Game events status

It's highly recommended to communicate errors to your users. Check game event status [here](../status/all) or easily verify event status directly from your app [using our API](../topics/howto-check-events-status-from-app).

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

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
match_start | null         |When the match starts|See [notes](#match_start-note)|   139.0   | 
match_end   | victory/defeat|When the match ends|See [notes](#match_end-note)|   139.0   | 

#### *match_start* note

Data Example:

```json
{"events":[{"name":"match_start","data":""}]}
```

#### *match_end* note

Data Example:

```json
{"events":[{"name":"match_end","data":"defeat"}]}
```
```json
{"events":[{"name":"match_end","data":"victory"}]}
```
