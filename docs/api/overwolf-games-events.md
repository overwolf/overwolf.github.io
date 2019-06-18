---
id:overwolf-games-events
title: overwolf.games.events API
sidebar_label: overwolf.games.events
---

## General
`overwolf.games.events` allows you to be notified when something interesting happens while playing a certain game (e.g. a hero killed someone, someone killed the gamer’s hero, etc.).</br>Overwolf supports events for multiple games, you can see the list of supported games [here](games-ids). 

## Methods Reference

* [`setRequiredFeatures()`](#setRequiredFeatures)
* [`getInfo()`](#getInfo)

## Events Reference

* [`onError()`](#onError)
* [`onInfoUpdates2()`](#onInfoUpdates2)
* [`onNewEvents()`](#onNewEvents)

## Sample App
You can [download here](https://github.com/overwolf/lol-events-sample-app) an example of using the `overwolf.games.events` API to be notified whenever an interesting event has happened in League of Legends.

## Features Overview
Each supported game has its own set of available features.
A feature is a collection of related game events (e.g events related to a “match” feature – ‘started’/’ended’/’outcome’, etc.). You can view the features of each supported game in the relevant game page on the side menu, for example, [League of Legends page](overwolf-games-events-lol).

## Features types
A feature is further broken down into two entity types:
1. `Info Updates` – game information changes that define the game’s current state (e.g. the match is currently taking place)
2. `Events` – volatile events that happen in the game (e.g. player just got killed)

So for example, the feature "death" in the game LOL, has a: 
* **"death" event**, which fired when the player's champion died.</br>
You can  receive this event by registering to the `overwolf.games.events.onNewEvents` event listner.
*  **"deaths" info update**, which holds a counter for the player's deaths in the current session. </br>
   You can  receive this event by registering to the `overwolf.games.events.onInfoUpdates2` event listner.</br>
   It is also possible to get the current available information using [`overwolf.games.events.getInfo()`](#getInfo)

Note that a feature can contain a few info updates and events, and not just one info update and one event like the above example.

:::important
Each feature is a collection of related `info updates` and `events`.
When an app wants to receive events from the Game Events Provider it needs to set the requested features from the Game Events Provider.
:::

## How to register for features
### 1. Update the manifest file
The first step is to declare which game the app wants to register features for.</br>
The declaration is done by adding the game’s class id under the `game_events` section in the [manifest.json](manifest-json).</br>
This property is an array of [game class ids](games-ids) that the app wants to register for (it can register to multiple games).

This is how the value would look like if the app is interested in receiving events for LOL and CS:GO:

```json
"data":{     
      "game_events":[5426, 7764]
      ... 
   }
```
### 2. Call  setRequiredFeatures()
The next step is to call [`overwolf.games.events.setRequiredFeatures`](#setRequiredFeatures).
Once the app wants to start receiving specific info updates and events, you call this function with an array of feature names that you would like your app to consume.

This is an example when an app requires Rocket League features like the following:

```javascript
overwolf.games.events.setRequiredFeatures(['stats', 'match'], function(info) {
    console.log(info);
});
```

### 3. Listen to the relevant JS object
The final step is to add a listener to the relevant JavaScript Event object in your app’s code:

* For listening to game events, use the [`overwolf.games.events.onNewEvent`](#onNewEvents) object.
* For listening to info updates, use the [`overwolf.games.events.onInfoUpdates2`](#onInfoUpdates2) object.

:::tip
In some cases you might add the listener to [`overwolf.games.events.onInfoUpdates2`](#onInfoUpdates2) after the info update has already happened, so the app will miss the info-update event. For that reason, you should also call [`overwolf.games.events.getInfo()`](#getInfo) to get the current info state.
:::

<a name='setRequiredFeatures'>
## setRequiredFeatures(features, callback)
#### Version added: 0.93

> Sets the required features from the provider.

Parameter | Type     | Description |
--------- | ---------| ------------ |
features  | string[] | A string array of features to utilize |
callback  | function | A callback function which will be called with the status of the request |

#### Callback argument
In case of success, the callback will contain all the available features for the registered games that we declated in the manifest.

```json
{  
   "status":"success",
   "supportedFeatures":[  
      "summoner_info",
      "teams",
      "kill"
   ]
}
```
#### Usage Example
Example for setting League of Legends required features:

```javascript
var g_interestedInFeatures = [
  'summoner_info',
  'gameMode',
  'teams',
  'matchState',
  'kill'
];

overwolf.games.events.setRequiredFeatures(g_interestedInFeatures, function(info) {
    if (info.status == "error")
    {
      console.log("Could not set required features: " + info.reason);
      return;
    }
}
```

<a name='getInfo'>
## getInfo(callback)
#### Version added: 0.95

> Gets the current game info.

Parameter | Type     | Description |
--------- | ---------| ------------ |
callback  | function | A callback function which will be called with the status of the request |

#### Callback argument
The current game info: to which features you are registered, and all the available info for the current game session. 

```json
{  
      "status":"status",
      "res":{  
         "summoner_info":{  
            "id":"79489298",
            "name":"itaygl",
            "region":"EUW",
            "champion":"Rengar"
         },
         "game_info":{  
            "match_started":"True",
            "matchStarted":"True",
            "teams":"%5B%7B%22team%22:%22100%22,%22champion%22:%22Rengar%22",
            "gameMode":"custom",
            "game_mode":"custom",
            "minionKills":"5",
            "minions_kills":"5",
            "gold":"1002"
         },
         "features":{  
            "kill":"True",
            "assist":"True",
            "minions":"True",
            "deathAndRespawn":"True",
            "death":"True",
            "minion":"True",
            "gold":"True",
            "level":"True",
            "abilities":"True",
            "gameMode":"True",
            "game_mode":"True"
         },
         "level":{  
            "level":"3"
         }
      }
   }
```

#### Usage Example
```javascript
overwolf.games.events.getInfo(function(info) { 
		console.log(info); 
	});
```

<a name='onError'>
## onError
#### Version added: 0.78

> Fired when there was an error in the game events system.

<a name='onInfoUpdates2'>
## onInfoUpdates2
#### Version added: 0.96

> Fired when there are game info updates with a JSON object of the updates.

#### Usage Example

```javascript
overwolf.games.events.onInfoUpdates2.addListener(function(info) {
      console.log("Info UPDATE: " + JSON.stringify(info));
});
```

#### Event data example:
```json
{  
   "info":{  
      "game_info":{  
         "minionKills":"3"
      }
   },
   "feature":"minions"
}
```

<a name='onNewEvents'>
## onNewEvents
#### Version added: 0.96

> Fired when there are new game events with a JSON object of the events information.

#### Usage Example

```javascript
overwolf.games.events.onNewEvents.addListener(function(info) {
		onsole.log('EVENT FIRED: ' + JSON.stringify(info));  
	});
```

#### Event data example
```json
{
  "events": [
    {
      "name": "death",
      "data": "{"count": "2"}"
    }
  ]
}
```