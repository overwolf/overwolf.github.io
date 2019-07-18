---
id: overwolf-settings-games
title: overwolf.settings.games API
sidebar_label: overwolf.settings.games
---

Use the `overwolf.settings.games` API to view the game-settings features functions.

* More information and best practices for using game settings can be found [here](../topics/games-settings).

## Special OW URL's

You can also use the following helpful URLs to open the relevant Overwolf game settings in the Appstore:

* `overwolf://store/game-settings/game-id/[game-id]`  
  A clickable link that opens the Overwolf (game-id) game settings window from your app.

* `overwolf://store/game-settings/appid-id/[extension-id]`  
   A clickable link that opens the Overwolf (targeted by your app) game settings window from your app.

## Methods Reference

* [overwolf.settings.games.getOverlayEnabled()](#getoverlayenabledgameclassid-callback)
* [overwolf.settings.games.getAutoLaunchEnabled()](#getautolaunchenabledgameclassid-callback)

## Events Reference

* [overwolf.settings.games.onOverlayEnablementChanged](#onoverlayenablementchanged)
* [overwolf.settings.games.onAutoLaunchEnablementChanged](#onautolaunchenablementchanged)

## getOverlayEnabled(gameClassId, callback)
#### Version added: 0.112

> Provides per-game settings as set by the user via the Overwolf store.

Parameter   | Type      | Description                                                             |
----------- | ----------| ----------------------------------------------------------------------- |
gameClassId | int       | The game ID for which the flag is retrieved for                         |
callback    | function  | A callback function which will be called with the status of the request |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{ "status": "success", "gameClassId": 5426, "enabled": true}
```

## getAutoLaunchEnabled(gameClassId, callback)
#### Version added: 0.112

> Returns the current Auto-Launch enabled setting for the calling app in a given game (gameClassId).

Parameter   | Type      | Description                                                             |
----------- | ----------| ----------------------------------------------------------------------- |
gameClassId | int       | The game ID for which the flag is retrieved for                         |
callback    | function  | A callback function which will be called with the status of the request |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{ "status": "success", "gameClassId": 5426, "autoLaunchEnabled": true }
```

## onOverlayEnablementChanged
#### Version added: 0.124

> Fired when the overlay is enabled or disabled for a game.

#### Event Data Example: Success

```json
{ "gameId": 7764, "enabled": false}
```

## onAutoLaunchEnablementChanged
#### Version added: 0.124

> Fired when auto launch is enabled or disabled for a game.

#### Event Data Example: Success

```json
{ "gameId": 7764, "appId": "hffhbjnafafjnehejohpkfhjdenpifhihebpkhni", "enabled": false }
```