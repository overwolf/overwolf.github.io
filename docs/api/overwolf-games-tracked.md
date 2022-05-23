---
id: overwolf-games-tracked
title: overwolf.games.tracked API
sidebar_label: overwolf.games.tracked
---

:::important Use this API to get information about games that are defined as unsupported in the Gameslist.
Requires `tracked` under the [launch_events](../api/manifest-json#launch_event_settings-array) property in the `manifest.json`
:::


## Methods Reference

* [overwolf.games.tracked.getRunningGameInfo()](#getrunninggameinfocallback)

## Events Reference

* [overwolf.games.tracked.onUnsupportedExecuted()](#onunsupportedexecuted)
* [overwolf.games.tracked.onTermiated()](#onterminated) 



## getRunningGameInfo(callback)

#### Version added: 0.199

> If `track_all_games` is set to true, returns an object with information about the currently running untracked game

Note: In a scenario when more than one game is running, we'll display information only from the latest one that was launched.

Parameter | Type     | Description                                                              |
----------| -------- | ------------------------------------------------------------------------ |
callback  | [(Result: GetRunningGameInfoResult)](overwolf-games#getrunninggameinforesult-object) => void | Returns info about the currently running game |


## onUnsupportedExecuted
#### Version added: 0.195
:::important
Requires `tracked` and `track_all_games` under the [launch_events](../api/manifest-json#launch_event_settings-array) property in the `manifest.json`
:::

> Fired when an unsupported game process has launched.


## onTermiated
#### Version added: 0.83
:::important
Requires `tracked` under the [launch_events](../api/manifest-json#launch_event_settings-array) property in the `manifest.json`
:::
> Fired when an unsupported game process has terminated.
