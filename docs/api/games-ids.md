---
id: games-ids
title: Games IDs
sidebar_label: Games IDs
---

## What is the Game ID

Each [supported game](#what-is-an-overwolf-supported-game) has its own unique Game ID.

Game IDs are used in your app’s manifest.json in multiple ways:  

* [game_targeting](manifest-json#game_targeting) property - A list of games which enable overlay for this app.  

* [game_events](manifest-json#game_events) property - A list of games for which game events are required.

* [launch_events](manifest-json#launch_events) property -  A list of games triggering the app to launch.


## What is an Overwolf Supported Game?

In Overwolf, when we refer to a "supported game" it could mean one of two levels of support:

1. Overlay support - games that support overlay injection.  
   In these games, we can display OW apps as an overlay, and make use of Overwolf APIs.  
   The full list of games that support overlay injection can be found in the [gamelist.xml](#the-gamelistxml-file) file.

2. Game events support - games which support overlay injection as well as real-time game events.  
   You can create OW apps for these games, that leverage game events using the [overwolf.games.events](overwolf-games-events) API.   
   The full list of games that supports events can be found [here](../status/all).


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
<summary>Listed here are the top 30 game ID's (this list might outdated)</summary>

| #   | Game Title                                               | Game ID       |
------| ---------------------------------------------------------| --------------|
| 1   | League of Legends                                        |  5426         |
| 2   | Hearthstone: Heroes of Warcraft                          |  9898         |
| 3   | Counter-Strike: Global Offensive                         |  7764         |
| 4   | Minecraft                                                |  8032         |
| 5   | PUBG                                                     |  10906        |
| 6   | Overwatch                                                |  10844        |
| 7   | World of Warcraft                                        |  765          |
| 8   | Grand Theft Auto V                                       |  10760        |
| 9   | Rocket League                                            |  10798        |
| 10  | World Of Tanks                                           |  6365         |
| 11  | Tom Clancy’s Rainbow Six: Siege                          |  10826        |
| 12  | Diablo III                                               |  7152         |
| 13  | Garry’s Mod                                              |  1406         |
| 14  | Heroes of the Storm                                      |  10624        |
| 15  | Dota 2                                                   |  7314         |
| 16  | Blocks That Matter                                       |  12018        |
| 17  | 8BitMMO                                                  |  11018        |
| 18  | Paladins                                                 |  10872        |
| 19  | Grand Theft Auto: San Andreas Multiplayer                |  1340         |
| 20  | Unturned                                                 |  10470        |
| 21  | Apex Legends                                             |  21566        |
| 22  | Euro Truck Simulator 2                                   |  8584         |
| 23  | ARMA 3                                                   |  9208         |
| 24  | PAYDAY 2                                                 |  9694         |
| 25  | Rust                                                     |  10156        |
| 26  | Team Fortress 2                                          |  3026         |
| 27  | ARK: Survival Evolved                                    |  10778        |
| 28  | Battlefield 1                                            |  10876        |
| 29  | Warframe                                                 |  8954         |
| 30  | Fortnite                                                 |  21216        |

</details>

## Game launcher IDs

IDs for Launchers such as the League of Legends launcher can be found [here](launchers-ids).
