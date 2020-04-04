---
id:overwolf-games-events
title: overwolf.games.events API
sidebar_label: overwolf.games.events
---

## General

`overwolf.games.events` can notify you when something interesting happens while playing a certain game. There are many possible events including kills, deaths, victories, damage caused, gold spent and many others.

Overwolf supports events for multiple games, you can see the full list of supported games [here](games-ids).

:::note
The full list of supported games with their Game ID’s is always up to date and can be found [here](games-ids).
:::

## Methods Reference

* [overwolf.games.events.setRequiredFeatures()](#setrequiredfeaturesfeatures-callback)
* [overwolf.games.events.getInfo()](#getinfocallback)

## Events Reference

* [overwolf.games.events.onError](#onerror)
* [overwolf.games.events.onInfoUpdates2](#oninfoupdates2)
* [overwolf.games.events.onNewEvents](#onnewevents)

## Types Reference

* [overwolf.games.events.SetRequiredFeaturesResult](#setrequiredfeaturesresult-object) Object
* [overwolf.games.events.GetInfoResult](#getinforesult-object) Object

## Sample App

You can find an example of `overwolf.games.events` API usage [here](https://github.com/overwolf/events-sample-apps/tree/master/lol-events-sample-app), this one notifies whenever a relevant event has happened in League of Legends.

## Features Overview

Each supported game has its own set of available features.
A feature is a category of related game events, for example 'Match Start', 'Match End', 'Match Outcome' are all events belonging to the Match feature.  

You can review the supported features for each game in the relevant game page found on the sidebar menu, for example, [the League of Legends page](overwolf-games-events-lol).

## Feature types

Each feature is broken down into two entity types: **info updates** and **events**.

1. `Info Updates` – game information changes that define the game’s current status.  
   For example - a match is currently taking place.

2. `Events` – specific events that happen in the game.  
   For example - You just got killed.

A single feature can contain multiple info updates and events.  

Follow this guide to learn how to [register to features](#how-to-register-to-features) and listen to events or info updates.

#### feature example: "Death" feature in LoL

The "Death" feature in League of Legends has a:

* "death" **event**, which fires when the player's champion died.

* "deaths" **info update**, holds a counter for the total number of player deaths in the current session.

## How to register to features

To make sure the data you have is full and consistent, please follow these steps in order:

### 1. Update your manifest file

#### set the relevant game events

The first step is to declare the game for which your app wants to register features.</br>
The declaration is made by adding the game’s class ID under the [game_events](manifest-json#game_events) section in your manifest.json.  
This property is an array of [game class ids](games-ids) that the app wants to register for.  

Note that a single app can register for multiple games, but there is no wildcard support, so even if your app wants to consume events from all the supported games, you should set each one of them.

This is how the value would look like if the app is interested in receiving events for LoL and CS:GO:

```json
"data":{
      "game_events":[5426, 7764]
      ...
   }
```

#### set the overlay permissions

The second step is to set the game IDs that your app targeted and permitted to display in-game overlay windows on them

This is how the value would look like if the app is interested in displaying an in-game overlay for LoL and CS:GO:

```json
"game_targeting": {
    "type": "dedicated",
    "game_ids": [5426, 7764]
}
```

### 2. Listen to info updates or events

We mentioned above that each feature is broken down into two entity types: info updates and events.  
The next step is to add a listener to the relevant entity type in your code.  

#### Listen to game events

You can receive this entity type by registering to the [overwolf.games.events.onNewEvents](#onnewevents) event listener.

#### Listen to info updates

You can receive this entity type by registering to the [overwolf.games.events.onInfoUpdates2](#oninfoupdates2) event listener.  

To get all the current info state and all the info-updates that happend BEFORE you registered to this event listnerer, make sure to call [overwolf.games.events.getInfo()](#getinfocallback). Read more about it on [chapter 4](#4-get-current-info-state). 

### 3. Call setRequiredFeatures()

The final step is to call [overwolf.games.events.setRequiredFeatures](#setrequiredfeaturesfeatures-callback). Once the app wants to start receiving specific info updates and events, you call this function with an array of feature names that you would like your app to use.

This is an example when an app requires Rocket League features:

```javascript
overwolf.games.events.setRequiredFeatures(['stats', 'match'], function(info) {
    console.log(info);
});
```

### 4. Get current info state

In some cases, you might add the listener to [onInfoUpdates2](#oninfoupdates2) or to [onNewEvents](#onnewevents) AFTER the info update has already happened so that the app will miss the info-update event.

Also, you might want to receive all info updates that happened before [setRequiredFeatures()](#setrequiredfeaturesfeatures-callback) succeeded.

For those reasons, as a final step, you should call [overwolf.games.events.getInfo()](#getinfocallback) to get the current info state.

## setRequiredFeatures(features, callback)

#### Version added: 0.93

> Sets the required features from the provider.

Parameter | Type     | Description |
--------- | ---------| ------------ |
features  | string[] | String array of features to utilize |
callback  | [(Result:SetRequiredFeaturesResult)](##setrequiredfeaturesresult-object) => void | all available features for the registered games declared in the manifest|

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
    if (info.success == false)
    {
      console.log("Could not set required features: " + info.error);
      return;
    }
}
```

:::important
it's important to wait for the **success** status to make sure that required features will be registered and trigger events properly.
:::

Example for setting required features and waiting for 'success':

```js
  async setRequiredFeatures() {
    let tries = 1;
    let result;

    while ( tries <= MAX_RETRIES ) {
      result = await new Promise(resolve => {
        overwolf.games.events.setRequiredFeatures(FEATURES_ARRAY, resolve);
      })

      if ( result.success === true ) {
        // make sure our required features were registered
        return (result.supportedFeatures.length > 0); 
      }

      // wait 3 sec before retry
      await new Promise(resolve => {
        setTimeout(resolve, 3000);
      });
      tries++;
    }

    console.warn('setRequiredFeatures(): failure after '+ tries +' tries'+ JSON.stringify(result, null, 2));
    return false;
  }
```

## getInfo(callback)

#### Version added: 0.95

> Gets the current game info.

Parameter | Type                                                    | Description                    |
--------- | --------------------------------------------------------| ------------------------------ |
callback  | [(Result:GetInfoResult)](#getinforesult-object) => void | Provides the current game info |

#### Usage Example

```javascript
overwolf.games.events.getInfo(function(info) {
   console.log(info);
});
```

## onError

#### Version added: 0.78

> Fired when an error occured in the Game Event system.

## onInfoUpdates2

#### Version added: 0.96

> Fired when there are game info updates with a JSON object of the updates.

**Our best practice is removing event listeners and then adding the listener back to prevent accidental multiple listeners.**

#### Usage Example

```javascript
overwolf.games.events.onInfoUpdates2.addListener(function(info) {
      console.log("Info UPDATE: " + JSON.stringify(info));
});
```

#### Event data example

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

## onNewEvents

#### Version added: 0.96

> Fired when there are new game events with a JSON object of events information.

**Our best practice is removing event listeners and then adding the listener back to prevent accidental multiple listeners.**

#### Usage Example

```javascript
overwolf.games.events.onNewEvents.addListener(function(info) {
   console.log('EVENT FIRED: ' + JSON.stringify(info));  
});
```

#### Event data example

```json
{
  "events": [
    {
      "name": "death",
      "data": "{`count`: `2`}"
    }
  ]
}
```

## SetRequiredFeaturesResult Object

Parameter          | Type     | Description                                                              |
-------------------| ---------| ------------------------------------------------------------------------ |
success            | boolean  |                                                                          |
error              | string   | null if success is true                                                  |
supportedFeatures  | string[] | all available features for the registered games declared in the manifest |   

#### Example data: Success

```json
{  
   "success":true,
   "supportedFeatures":[  
      "summoner_info",
      "teams",
      "kill"
   ]
}
```

## GetInfoResult Object

Parameter          | Type     | Description                                                              |
-------------------| ---------| ------------------------------------------------------------------------ |
success            | boolean  |                                                                          |
error              | string   | null if success is true                                                  |
res                | object   | Provides the current game info                                           |   

#### Example data: Success

The current game's info, registered features, and all available info for the current game session.

```json
{  
   "success":true,
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