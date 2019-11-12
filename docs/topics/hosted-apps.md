---
id: hosted-apps
title: Game Summary: Hosted Apps
sidebar_label: Game Summary Hosted Apps
---

Game Summary is a customizable “browser” for post match apps. 
TBD - User customization, reach, add your content, etc.

## Supported games

You can host your OW app as a game summary hosted app if your app targeted to one of the supported games in [this list](../api/games-ids).

## Sample App

Please take a look at our [Game Summary tab sample app](https://github.com/overwolf) to quickly understand how developing your tab works.

## How to integrate your app with Game Summary

Integrating your app to be hosted in Game Summary is easily done with these 3 steps:

1. Declare your tab -  let Game Summary know that you want to be hosted.  
2. Build tab content - show post match content and respond to user interactions.  
3. Integrate with your app - adjust your app behavior based on the user preferences.

### Declare your tab

To be able to host your app in Game Summary, you must declare the following in your app’s manifest:

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

With this declaration, you are providing Game Summary (UID `nafihghfcpikebhfhdhljejkcifgbdahdhngepfb`) the enclosed data:

| Name     | Type  |  Description                          | 
|----------------|-------| ------------------------------------- |
| file           | string |  The path for the tab’s html content page, to be used whenever your app tab is selected.  | 
| game_targeting | array |  The list of games that are supported by your app. Game Summary will add your tab for each supported game. Provide the game id: {"game": <game id>}  | 
| tab_icon       | string | A link to the icon to be used in the tab navigation | 
| tab_title      | string | A title to be used for your tab  | 
| tab_tooltip   | string |  (Optional) A short name to be used as a tool tip message when hovering the tab icon. tab_title  will be used in case this field is not provided  | 


