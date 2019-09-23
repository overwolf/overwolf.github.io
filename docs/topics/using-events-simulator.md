---
id: using-events-simulator
title: Using the Game Events simulator App
sidebar_label: Game Events Simulator
---

## Overview

This app can simulate events and updates for all Overwolf game-events-enabled games: Fortnite, LOL, CS:GO, and the rest of the list. The full list of supported games can be found [here](../status/all).

When the app identifies that one of the supported game is running, it automatically pulls the full list of features and events for that game from the Overwolf servers. Then you can simulate "fake" events and info updates of any sort you want to test.

::: important
The app can work on Overwolf client version 0.135 and above. In order to download it, please [contact us](../support/contact-us).
:::

## Roadmap

Our next major step planned for the sample app is including data validation features in it. Currently the app doesn't check the data being sent to it, so if you send an integer instead of a True/False flag for an integer field it will just not work. For now, please make sure you send data in the correct format and of the correct type per function.

Down the road, we will add samples for each event type so you can validate more easily.

## "no active game" mode

When you start the app with no active game running, you will see the following screen. As you can see, no active game is detected, and you can't really do anything till you run one of the supported games.

![alt-text](assets/events-simulator/non-active.png)

## 1. Choose game feature

The app automatically pulls the list of available features for this game.

You should choose the requested feature. Please review our API documentation to get a list of supported features, events and info updates each game can get.

![alt-text](assets/events-simulator/1.png)


## 2. Choose the event to trigger

Once you choose a feature, the list of events and info updates for this feature is pulled from the server. Note that some features contains only events or only info updates.  

![alt-text](assets/events-simulator/2.png)

## 3. Send data to the app

After a feature was selected, you can set an exact value to send to the app as event data. Once the data is ready, just hit the "Trigger" button.

::: note how to send data
* Strings: encapsulate the text in double quotes (example: "my string")
* Numbers: simply type the number (example: 123)
* Boolean: true / false
* Objects: stringify them and send them as strings (see strings)
:::

![alt-text](assets/events-simulator/3.png)

## 4. Trigger the event

Once you hit the "Trigger" button, you can see the event was triggered in the dev console. In this stage, if YOUR app is listenning to the triggered event / info update, it should respond to it as well.

![alt-text](assets/events-simulator/console.png)
