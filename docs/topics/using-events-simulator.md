---
id: using-events-simulator
title: Using the Game Events simulator App
sidebar_label: Game Events simulator
---

This app can simulate events and info updates for all the Overwolf game-events-enalbed games: Fortnite, LOL, CS:GO, etc.  
The full list of supported games can be found [here](../status/all).

When the app identifies that one of the supported game is running, it pulls automatically from the Overwolf servers, the full list of features, events and info updates, for this particular games. Than, you can simulate "fake" events and info updates with any data that you like.

::: important
The app can work on Overwolf client version 0.135 and above. In order to download it, please [contact us](../support/contact-us).
:::

## "no active game" mode

When you start the app with no active geme running, you will see the following screen.
As you can see, no active game is detected, and you can't really do nothing till you will run one of the supported games.

![alt-text](assets/events-simulator/non-active.png)

## 1. Choose the game feature

The app automatically pulls the list of available features for this game.

You should choose the requested feature.  Please follow our API documentation for each game, to get a list of supported features, events and info updates.

![alt-text](assets/events-simulator/1.png)


## 2. Choose the event to simulate

Once you choose a feature, the list of events and info updates for this feature is pulled from the server.

Note that some features contains only events or only info updates.  

![alt-text](assets/events-simulator/2.png)

## 3. Set the data to send

Once a feature / info update was selected, you can set in the text box the exact value to send as the event data. Once the data is ready, just hit the "Trigger" button.

Note that currently there is no validation on the data that you can send. Which means, that if your app is expecting to get from Overwolf a specific event data (like "true" or an integer), you need to make sure to send the data in the exact format.

On a future version, we will add for each event a sample data, so you can easily determine which format should be sent.

![alt-text](assets/events-simulator/3.png)

## 4. Trigger the event

Once you hit the "Trigger" button, you can see in the dev tools console that the event was triggered.

On this stage, if YOUR app is listenning to the triggered event / info update, it should catch it as well.

![alt-text](assets/events-simulator/console.png)
