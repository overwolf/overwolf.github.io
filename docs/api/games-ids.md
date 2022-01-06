---
id: games-ids
title: Games IDs
sidebar_label: Games IDs
---

## What is an Overwolf Supported Game?

In Overwolf, when we refer to a "supported game" it could mean one of two levels of support:

1. Overlay support - games that support overlay injection.  
   In these games, we can display OW apps as an overlay, and make use of Overwolf APIs.  
   The full list of games that support overlay injection can be found in the [gamelist.xml](#the-gamelistxml-file) file.

2. Game events support - games which support overlay injection as well as real-time game events.  
   You can create OW apps for these games, that leverage game events using the [overwolf.games.events](overwolf-games-events) API.   
   The full list of games that supports events can be found [here](../status/all).

 :::tip Note
 Game events can vary between games. If you'd like us to enable a new game event, you can request it [here](https://discuss.overwolf.com/c/game-events-features/42).
 :::

## What is the Game ID

Each [supported game](#what-is-an-overwolf-supported-game) has its own unique Game ID.

Game IDs are used in your app’s manifest.json in multiple ways:  

* [game_targeting](manifest-json#game_targeting) property - A list of games which enable overlay for this app.  

* [game_events](manifest-json#game_events) property - A list of games for which game events are required.

* [launch_events](manifest-json#launch_events) property -  A list of games triggering the app to launch.

## The gamelist.xml file

We support overlay injection in a vast and growing number of games.  
The list is kept up to date, and you can find it in your local Overwolf app data folder after installing Overwolf.

1. Navigate to your `%localappdata%` folder and open the `overwolf` folder.

2. Open the Game List XML file (named with a number postfix, for example, gamelistXXX.xml, higher number means newer version), and search your game by name.

3. Under each game, you can find game ID listed.  
   If you didn’t find the game you need, [contact us](../support/contact-us).

## Game-ID and Instance-ID

A single game can have multiple executables: Steam, GOG, 32 / 64-bit clients, etc.  
We differentiate between them by adding one digit to each game ID, which is called an "Instance ID."  
Basically, you have the base game ID, and then a series of instances (212160, 212161, …) 

When you call [overwolf.games.onGameInfoUpdated](overwolf-games#ongameinfoupdated) you will get the same full ID including the instance ID.  
Besides, there is a file called "gamelist.xml" in the OW client folder that contains all the supported game ids, including instance ID.
In order to translate the instance ID into the game ID that needs to be used in the manifest, you can divide the instance ID by 10 and round down.

For example for Fortnite: in order to get 21216 instead of 212161, you can do:

```js
Math.floor(gameInfoResult.gameInfo.id/10)
```

You can see how we use it in the [Fortnite events sample](https://github.com/overwolf/events-sample-apps/blob/master/fortnite-sample-app/main.js#L81) app.

Note that the [RunningGameInfo object](overwolf-games#runninggameinfo-object) also has a `classId` property, which already equals the game ID.

## Top 30 Game IDs

<details open>
<summary>Listed here are games that support game events</summary>

| # | Game Title | Game ID |
| --- | --- | --- |
| 1 | Ancestors Legacy | 21236 |
| 2 | Apex Legends | 21566 |
| 3 | Battlerite Royale | 21450 |
| 4 | Call of Duty: Modern Warfare | 21626 |
| 5 | Counter-Strike: Global Offensive | 7764 |
| 6 | Dauntless | 21214 |
| 7 | Dota 2 | 7314 |
| 8 | Dota Underlords | 21586 |
| 9 | Escape From Tarkov | 21634 |
| 10 | Final Fantasy | 6350 |
| 11 | Football Manager 2021 | 21666 |
| 12 | Football Manager 2022 | 21856 |
| 13 | Fortnite | 21216 |
| 14 | Hearthstone: Heroes of Warcraft | 9898 |
| 15 | Heroes of the Storm | 10624 |
| 16 | League of Legends | 5426 |
| 17 | Legends of Runeterra | 21620 |
| 18 | Magic the Gathering | 21308 |
| 19 | Minecraft | 8032 |
| 20 | New World | 21816 |
| 21 | Overwatch | 10844 |
| 22 | Path of Exile | 7212 |
| 23 | PUBG | 10906 |
| 24 | PUBG lite | 21598 |
| 25 | Rocket League | 10798 |
| 26 | Smite | 8134 |
| 27 | Splitgate | 21404 |
| 28 | StarCraft II | 5855 |
| 29 | Tom Clancy’s Rainbow Six: Siege | 10826 |
| 30 | Valheim | 21668 |
| 31 | VALORANT | 21640 |
| 32 | Warface | 7784 |
| 33 | Warframe | 8954 |
| 34 | World Of Tanks | 6365 |
| 35 | World of Warcraft | 765 |
| 36 | World of Warships | 10746 |

</details>

## Game launcher IDs

IDs for Launchers such as the League of Legends launcher can be found [here](launchers-ids).
