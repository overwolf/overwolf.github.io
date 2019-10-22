---
id: sample-app-overview
title: Overwolf sample app
sidebar_label: The Basics
---

In this article, we'll use an example in order to learn how to build Overwolf apps that respond to real time game events and display content in an overlay while playing. If you are new to the concept of Overwolf apps, this is a great place to get started, and you can use it as a base for your own project.

The sample app's functionality is pretty straight-forward: It auto-launch when the user launches Fortnite, just like any other Fortnite app, and reads all real time game events as you play. To demonstrate overlay features, the sample app prints all in-game event data collected into an overlay based component.

## Sample App Functionality

For demonstration purposes, the sample app is configured for [Fortnite](https://www.epicgames.com/fortnite/en-US/download), it loads when Fortnite starts and reads Fortnite in-game events. You can easily customize this sample to fit other games.

Basic functions our sample app demonstrates:

* Automatically launches when the game is loaded.

* After registering to the overwolf.games.events API, the app can receive real time events from the game.

* Identify specific events and respond as defined.

* Define a custom hotkey to be used in-game.

* Interactions between app windows.

* Background controller that manages data transfers.

## How to load the app

[This repository](https://github.com/overwolf/sample-app) contains the Overwolf sample app.

1. Download the app to your machine as a ZIP archive, Unzip it.

2. Under Overwolf's settings, choose the *Support* tab and then go into *Development options*.

3. Click the *Load unpacked* button and choose the folder where you placed the sample app's repository.

::: important
Each app has a unique id (UID) that is generated out of the "name" and "author" strings. Once an app is published on the Appstore, its UID can’t be changed.
Same for the sample app, so make sure not to edit the author or app name in the manifest. It will prevent loading the app as unpacked app. 
:::

## Screenshots

This is how the sample app's main window looks like: a desktop window that disaply some textual information.

![alt-text](assets/sample-app/desktop-window.png)

But the real action will take place in the in-game window - Once you launch Fortniote, the desktop window will be replaced with this in-game window:

![alt-text](assets/sample-app/in-game-window.png)

This is the injected in-game window overlayed on your game screen.  The window displays game events, data collected as well as a sample advertisement for monetization.