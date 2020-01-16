---
id: games-ids
title: Games IDs
sidebar_label: Games IDs
---

Each [supported game](#overwolf-supported-game-definition) has a unique Game ID.

Game Ids are used in your app’s manifest.json in several places:  

* [game_targeting](manifest-json#game_targeting) property - A list of games which enable overlay for this app.  

* [game_events](manifest-json#game_events) property - A list of games for which game events are required.

* [launch_events](manifest-json#launch_events) property -  A list of games causing the app to launch.


## "Overwolf supported game" definition

In Overwolf, when we refer the term "supported game" we are talking about two levels of support:

1. Overlay support - all the games that support overlay injection.  
   On these games, we can display the OW apps as an overlay, and make use in the different overwolf API's.  
   The full list of games that supports overlay injection can be found in the [gamelist.xml](#the-gamelistxml-file) file.

2. Game events support - all the games that support overlay injection + real-time game events.  
   You can create OW apps for these games, that consume game events using the [overwolf.games.events](overwolf-games-events) API.   
   The full list of games that supports events can be found [here](../status/all).


## The gamelist.xml file

We support overlay injection in a vast and growing number of games.  
The list is always updated, and you can find it in your local Overwolf app data folder (after installing Overwolf, of course).

1. Browse to your `%localappdata%` folder and open the `overwolf` folder.

2. Open the Game List XML file (named with a number postfix, for example, gamelistXXX.xml, higher number means newer version), and search your game by name.

3. Under each game, you can find it’s game ID.  
   If you didn’t find the game you need, [contact us](../support/contact-us).

## Game-ID and Instance-ID

Because a single game can have multiple executables: Steam, GOG, 32 / 64-bit clients, etc.  
We differentiate between them by adding one digit for each game id, which is called an "Instance ID."  
Basically, you have the ID, and then a series of instances (212160, 212161, …) 

So basically, when your browser the [gamelist.xml](the-gamelistxml-file) file, you will get the game ID's that includes the instance id.
Also, when you call [overwolf.games.onGameInfoUpdated](#overwolf-games#ongameinfoupdated), you will also get the full game id that includes the instance id.)

I order to "strip" the instance ID and get the game ID that needs to be used in the manifest, you can divide the ID by 10.

For example for Fortnite: in order to get 21216 instead of 212161, you can do:

```js
Math.floor(gameInfoResult.gameInfo.id/10)
```

You can see how we are using it in the [Fortnite events sample](https://github.com/overwolf/events-sample-apps/blob/master/fortnite-sample-app/main.js#L81) app.

## Top 30 Game IDs

<details>
<summary>Here you can see the top 30 game id's (this list might be not up to date)</summary>

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
