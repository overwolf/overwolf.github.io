---
id: hosted-apps
title: Game Summary: Hosted Apps
sidebar_label: Game Summary Hosted Apps
---

Game Summary is a customizable "browser" for post-matchpost match apps.  

Here are some screenshots of different OW apps that hosted as tabs for game summary:

<div class="box" data-slick='{"slidesToShow": 1}'>
  <a data-fancybox="gallery" data-caption="game Summary apps" href="../assets/hosted-apps/gs-screenshot-1.png">
    Game Summary app
    <span class="thumb">
      <img src="../assets/hosted-apps/gs-screenshot-1.png">
    </span>
  </a>
  <a data-fancybox="gallery" data-caption="Legendary Builds" href="../assets/hosted-apps/gs-screenshot-2.png">
    Game Performance Optimizer app
    <span class="thumb">
      <img src="../assets/hosted-apps/gs-screenshot-2.png">
    </span>
  </a>
  <a data-fancybox="gallery" data-caption="Legendary Builds" href="../assets/hosted-apps/gs-screenshot-3.png">
    APM app
    <span class="thumb">
      <img src="../assets/hosted-apps/gs-screenshot-3.png">
    </span>
  </a>
  <a data-fancybox="gallery" data-caption="Legendary Builds" href="../assets/hosted-apps/gs-screenshot-4.png">
    Videos and Streams app
    <span class="thumb">
      <img src="../assets/hosted-apps/gs-screenshot-4.png">
    </span>
  </a>
</div>

## Supported Games

You can host your OW app as a tab for game summary.  
This feature is currenly supported if your app is targeted to one of the following games:

* League of Legends
* CS:GO
* Dota2
* Hearthstone
* Fortnite
* PUBG
* Rocket League
* Splitgate
* Tom Clancy’s Rainbow Six: Siege
* World of Tanks
* World of Warships
* Heroes of the Storm.

## Sample App

Please take a look at our [Game Summary tab sample app](https://github.com/overwolf) to quickly understand how developing your tab works.

## Integrate your app with Game Summary

Integrating your app to be hosted as a Game Summary tab is easily done with these 3 steps:

1. [Declare your tab](#declare-your-tab) -  Let Game Summary know that you want to be hosted.  
2. [Build tab content](#build-tab-content) - Show post match content and respond to user interactions.  
3. [Integrate with your app](#integrate-with-your-app) - Adjust your app behavior based on user preferences.

### Declare your tab

To be able to host your app in Game Summary, you must add a [service_providers](../api/manifest-json#service_providers) object in your app’s manifest (nested under the "data" Object):

```json
 "service_providers": {
      "nafihghfcpikebhfhdhljejkcifgbdahdhngepfb": {
        "game_summary_tab": {
          "file": "windows/tabs/tab.html",
          "game_targeting": [{"game": 5426}, {"game": 10798}],
          "tab_icon": "images/icon.svg",
          "tab_title": "Hosted app sample",
          "tab_tooltip": "This is a hosted app"
        }
      }
 }
```

With the above declaration, you define the game summary built-in app (UID `nafihghfcpikebhfhdhljejkcifgbdahdhngepfb`) as your hosting app, and you are providing the `game_summary_tab` object with the enclosed data:

| Name           | Type  |  Description                                                                                                       | 
|----------------|-------| ------------------------------------------------------------------------------------------------------------------ |
| file           | string |  The path for the tab’s html content page, to be used whenever your app tab is selected.                          | 
| game_targeting | array |  The list of games that are supported by your app. Game Summary will add your tab for each supported game. </br>Provide the game id: {"game": game id }  | 
| tab_icon       | string | A link to the icon to be used in the tab navigation                                                               | 
| tab_title      | string | A title to be used for your tab                                                                                   | 
| tab_tooltip    | string |  (Optional) A short name to be used as a tool tip message when hovering the tab icon. tab_title  will be used in case this field is not provided  | 

Apps with the above declaration will be added as a tab to Game Summary for the targeted games. The user will be able to enable/disable your tab in the Game Summary settings.

### Build tab content

This section describes how your tab content can communicate with Game Summary, mainly used to receive the selected match. You will only be able to use this API when Game Summary index window is open, and your page is hosted inside the content iFrame.

Game Summary tab content should present information relevant to the selected match.  

In order to know which match is selected, and some other useful functionality, you should use the following "overwolf.gamesummary" API functions and events:

* **[overwolf.gamesummary.getCurrentMatch()]()**: Returns the current game and match. If no match is selected yet returns null.
* **[overwolf.gamesummary.onMatchChanged Event]()**: Fired when the user selects a new match.

#### Notes

1. When your tab is first loaded, register to [onMatchChanged]() to be notified when the user changes a match.
2. Since you might be loaded after a match is selected, you need to use [getCurrentMatch()](#getcurrentmatch) to receive the currently selected match.
3. Your tab should always present content relevant to the selected match.
4. `matchId` is based on the standard OW `pseudo_match_id`, you should track it and keep a mapping between the `matchID` and the relevant match data.

### Integrate with your app

This section describes how your app can communicate with Game Summary, mainly used to determine if the tab is enabled or not. See notes below for more info.

Your app should only collect the data needed for the tab content if the user has your tab enabled and active inside Game Summary.  

In order to know if your tab is enabled, and some other useful functionality, you should use the following [overwolf.extensions.sharedData](../api/overwolf-extensions-sharedData) API functions and events:

* **[overwolf.extensions.sharedData.get()](../api/overwolf-extensions-sharedData#getshareddataparams-param-callback)**: Retrieve your app data from Game Summary.
* **[overwolf.extensions.sharedData.onChanged Event](../api/overwolf-extensions-sharedData#onchanged)**: Fired when Game Summary changes your app tab settings data, mainly when the user enables/disables your tab.


#### Notes

1. To decide if your tab content is enabled you should check (isActive && isGameActive).
2. The user may decide to disable your app tab for a specific game (For example, the user can disable Game Highlights for LOL but keep it enabled for Dota 2).
3. If your tab is disabled for a game, the user expects that you will not collect any data needed only for the tab content. It is even more important if your app may impact the game’s performance (For example, the user will not want highlights to be recorded for LOL when the Game Highlights tab is disabled for LOL).
4. As a best practice, once your app wakes up due to a new game start, check if your app tab is enabled for this game. If it does, go on and collect data as you need. If it doesn’t, don’t collect the tab content data. If your app only works as a Game Summary tab, terminate the process altogether. 

