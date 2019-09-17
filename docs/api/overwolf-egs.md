---
id: overwolf-egs
title: overwolf.egs API
sidebar_label: overwolf.egs
---

## EGS Overview

The end game summary screen (EGS) provides a summary of information about the last game session – including statistics such as Actions-Per-Minute as well as video highlights of key plays. You can choose to show different and unique EGS information by creating a 'shelf' inside the EGS window. 

:::important
This feature should be enabled from Overwolf's server side. Please contact us if you want to use this feature: developers@overwolf.com.
:::

## Supported games

League of Legends, CS:GO, Dota2, Hearthstone, Fortnite, PUBG, Rocket League, Splitgate, Tom Clancy’s Rainbow Six: Siege, World of Tanks, World of Warships.

## Sample App

Please take a look at our [EGS shelf sample app](https://github.com/overwolf/egs-shelf) to quickly understand how developing your shelf works.

## How to integrate your app with EGS

Steps to integrate your app with the end game summary window:

### 1. Declare your app shelf

To enable your app's EGS shelf, you need an html page that will implement the UI and logic of the shelf. This HTML is placed inside your opk.

You also need to declare the following in your app's manifest's `data.windows.egs_shelf_window` section:

```json
{
    "file": "files/html/shelf.html", // where the html of the shelf exists in your app
    "size": , // To be discussed
    "egs_shelf": {
      "title": "my shelf", // shelf title
      "loading_text": "Loading My App Summary...", // text to be shown while the shelf is loading
      "tooltip_text": "My App Summary", // the tooltip to be shown when the user mouse-over's the title of the shelf
      "tooltip_url": "http...", // optional url to get more help about the shelf
      "logo": "files/images/shelf/logo.png", // shelf's logo in the title
      "background": "#FFFFFF", // default ARGB background of shelf
      "ftue_header": "My App", // First-time-user-experience message - the title of this message
      "ftue_body": "This shelf shows my app's summary of the last game" // FTUE description
    }    
  }
```

### 2. Check if your shelf is relevant

Use the overwolf.egs namespace to request that your custom shelf will show in the EGS, but only show when relevant. The idea is to only display your shelf when you have enough information to display something interesting to the end user. For example, if your shelf shows the amount of Kills the user has made during the game, yet the user hasn’t killed anyone in a particular match – you might not want to show your shelf at all.

### 3. Create the shelf

The flow for displaying a shelf once you have enough data and want to show your shelf in the EGS:

Call:

```js
overwolf.egs.isEnabled(function(result) {
  // result.status == ["success"| "error"]
  // result.isEnabled == [true | false]
  });
```

EGS does not fully support all games. To verify whether EGS is available for this game if enabled – call:

```js
overwolf.egs.requestToDisplay(function(result) {
    // result.status == ["success" | "error"]
    // result.reason == [undefined | "EndGameScreen is disabled" | "Not accepting shelves"]
  });
```

This will let EGS know that your app is interested in opening a shelf in the EGS when the game session is over.

### 4. Display the shelf

Once EGS is open, it will start loading your shelf's HTML page in “hidden” mode and wait for it to be ready for display.

From within the shelf’s HTML page context, use: 

`overwolf.egs.setStatus(status, function(result) { ...` 

Where 

`status == overwolf.egs.enums.ShelfStatus.[Loading | Ready | Retrying | Error]`

And result:

```js
result.status == ["success" | "error"]
result.reason == [undefined | "EndGameScreen is disabled" | "You must first call requestToDisplay()"]
```

When `overwolf.egs.enums.ShelfStatus.Ready` is set – the HTML will appear to the user.
If `overwolf.egs.enums.ShelfStatus.Error` is returned, an error message with a Retry button will be shown to the user.

## Other notes

There are two events you may listen to:

* `overwolf.egs.onEgsEnablementChanged.addListener(function(result) { result.isEnabled == [true | false] });`
  Will indicate when the EGS is enabled/disabled – you can wait for this event if a call to `overwolf.egs.isEnabled` returns false.

* `overwolf.egs.onRetryRequested.addListener(function() { });`
  Will be triggered if the `ShelfStatus.Error` status is set by your app and then the user clicked on retry.  
  In this case – the app is responsible for reloading it’s data and then setting a `ShelfStatus.Ready` status.

* Shelf windows will ALWAYS be transparent – Overwolf will override any manifest setting in this regard.

* Shelf windows will NEVER be visible in the task manager – Overwolf will override any manifest setting in this regard.

* Shelf windows may be opened with or without the app being opened – this means you’ll need to use localStorage to keep track of information between sessions.


## Methods Reference

* [overwolf.egs.isEnabled()](#)
* [overwolf.egs.requestToDisplay()](#)
* [overwolf.egs.setStatus()](#)
* [overwolf.egs.setHeight()](#)
* [overwolf.egs.getSessionInfo()](#)
* [overwolf.egs.getSelectedMatch()](#)

## Events Reference

* [overwolf.egs.onEgsEnablementChanged()](#onegsenablementchanged)
* [overwolf.egs.onRetryRequested()](#onretryrequested)
* [overwolf.egs.onMatchSelectionChanged()](#onmatchselectionchanged)
* [overwolf.egs.onSessionInfoChanged()](#onsessioninfochanged)

## Types Reference

* [overwolf.egs.enums.ShelfStatus](#overwolfegsenumsshelfstatus) Enum

## isEnabled(callback)
#### Version added: 0.94

> Returns whether Overwolf’s EGS is running.

Parameter | Type                       | Description                                                             |
--------- | ---------------------------| ----------------------------------------------------------------------- |
callback  | function                   | The result of the request                                               |

## requestToDisplay(callback)
#### Version added: 0.94

> Requests a shelf to be displayed in the EGS.

Parameter | Type                       | Description                                                             |
--------- | ---------------------------| ----------------------------------------------------------------------- |
callback  | function                   | The result of the request                                               |

## setStatus(status, callback)
#### Version added: 0.94

> Sets the status of the shelf. This call is only valid after a successful call to [requestToDisplay()](#requesttodisplaycallback).

Parameter | Type                                                | Description                                                             |
--------- | ----------------------------------------------------| ----------------------------------------------------------------------- |
status	  | [ShelfStatus](#overwolfegsenumsshelfstatus) enum    | Status to update                                                    |
callback  | function                                            | Result of the request                                               |

## setHeight(height, callback)
#### Version added: 0.103

> Sets the shelf height.

#### Notes

* It's up to the Game Summary Screen to accept or decline the new requested size.
* Width can not be changed by the app.
* The shelf should be responsive to the size of the containing window and not try to change its size according to the call of this function.

Parameter | Type                                                | Description                                                             |
--------- | ----------------------------------------------------| ----------------------------------------------------------------------- |
height	  | int                                                 | Requested height                                                    |
callback  | function                                            | Result of the request                                               |

## getSessionInfo(callback)
#### Version added: 0.110

> Get current EGS session info.

Parameter | Type                                                | Description                                                             |
--------- | ----------------------------------------------------| ----------------------------------------------------------------------- |
callback  | function                                            | Result of the request                                               |

## getSelectedMatch(callback)
#### Version added: 0.110

> Get current EGS selected match.

Parameter | Type                                                | Description                                                             |
--------- | ----------------------------------------------------| ----------------------------------------------------------------------- |
callback  | function                                            | Result of the request                                               |

## onEgsEnablementChanged
#### Version added: 0.94

> Fired when Overwolf’s EGS screen is enabled or disabled.

## onRetryRequested
#### Version added: 0.94

> Fired when EGS requests a shelf to perform a retry attempt in case of an error.

## onMatchSelectionChanged
#### Version added: 0.94

> Fired when EGS selected match \ session changed.

## onSessionInfoChanged
#### Version added: 0.94

> Fired when EGS session info changed (new match started).

## overwolf.egs.enums.ShelfStatus
#### Version added: 0.94

> EGS Shelf Status.

Option    | Description  |
--------- | -------------|
Loading   |              |
Ready     |              |
Retrying  |              |
Error     |              |



