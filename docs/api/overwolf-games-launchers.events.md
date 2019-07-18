---
id: overwolf-games-launchers-events
title: overwolf.games.launchers.events API
sidebar_label: overwolf.games.launchers.events
---

This API returns an object with launchers related events and info-updates.  
(Currently supported only with League of Legends Launcher/Client).

## Methods Reference

* [overwolf.games.launchers.events.setRequiredFeatures()](#setrequiredfeatureslauncherclassid-features-callback)
* [overwolf.games.launchers.events.getInfo()](#getinfolauncherclassid-callback)

## Events Reference

* [overwolf.games.launchers.events.onInfoUpdates](#oninfoupdates)
* [overwolf.games.launchers.events.onNewEvents](#onnewevents)

## How to register for features

The Launcher Events Provider keeps an info DB with various information about the launcher state.

Updates about this information can be received as events by registering an event listener using [`overwolf.games.launchers.events.onInfoUpdates()`](#oninfoupdates).  

It is also possible to get the current available information using [`overwolf.games.launchers.events.getInfo()`](#getinfolauncherclassid-callback).

## setRequiredFeatures(launcherClassId, features, callback)
#### Version added: 0.126

> Sets the required features from the provider.

Parameter        | Type     | Description                            |
---------------- | ---------| -------------------------------------- |
launcherClassId  | int      | The launcher Id of interest            |
features         | string   | A string array of features to utilize  |
callback         | function | Returns with the result                |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{"status": "success", "supportedFeatures": Array(1)}
```

## getInfo(launcherClassId, callback)
#### Version added: 0.126

> Gets the current state of information for a given launcher id.

Parameter        | Type     | Description                            |
---------------- | ---------| -------------------------------------- |
launcherClassId  | int      | The launcher Id of interest            |
callback         | function | Provides the current game info                |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{  
   "status":"success",
   "res":{  
      "game_flow":{  
         "phase":"None"
      },
      "summoner_info":{  
         "account_id":"224346939",
         "display_name":"itaygl",
         "internal_name":"itaygl",
         "profile_icon_id":"3902",
         "summoner_id":"79489298",
         "summoner_level":"31"
      }
   }
}
```

## onInfoUpdates

#### Version added: 0.78

> Fired when there are game info updates with a JSON object of the updates.

## onNewEvents

#### Version added: 0.78

> Fired when there are new game events with a JSON object of the events information.