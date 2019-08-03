---
id: sample-app-overview
title: Overwolf sample app
sidebar_label: Overview
---

Learn the basics concepts on how to build Overwolf apps that listen to real time game events and displaying content overlay the game. If you are new to the concept of an Overwolf app, this is a great place to get started, and you can use it as a base for your app.

In practice, what the app is doing is auto-launch when the user loads Fortnite and listen to all the real time game events. Once the match started, it prints all the events data into an in-game window overlay.

## Overview

The app is targeted to [Fortnite](https://www.epicgames.com/fortnite/en-US/download) (loads when Fortnite starts, listen to Fortnite events), but you can easily customize it to fit other games. We choose Fortnite as it's free to download and use.

The basic points and flows that that the sameple app demonstrate:

* Automatically launch when the game starts.

* Register to the overwolf.games.events API in order to receive real time events from the game.

* Identify specific events and acts as defined.

* Define a custom hotkey to be used in-game.

* Communication between the app windows according to our best practices.

* Background controller that manage the communication.

## How to load the app

[This repository](https://github.com/overwolf/sample-app) contains the Overwolf sample app.

1. Download the app to your machine (as a ZIP package), and Unzip it whenever you want.

2. Under Overwolf's settings, choose *Support* tab and then *Development options*.

3. Click the *Load unpacked* button and choose the "native" folder of this repository.

::: important
Editing the author or app name in the manifest will prevent loading the app as unpacked app.
:::

## Screenshots

This is how to main window of the app is looks like: an in-game window that injected to the game screen and dislayed overlay.  The window displays the game events, info updates and a sample Ad for monitization.

![alt-text](assets/sample-app/in-gmae-window.png)
