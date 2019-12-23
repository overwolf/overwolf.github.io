---
id: using-tab
title: Use Tab as an app Hotkey
sidebar_label:  Use Tab as an app Hotkey
---

## Hotkeys - Overview

Overwolf Hotkeys are keys or key combinations that can control your app in-game. When using a hotkey, your app window is opened, and clicking it again will hide or minimize it. You can allow users to change hotkey combinations from your app’s settings panel by automatically directing the user to the Overwolf settings page.  

You can read all about hotkeys in our [Hotkey best practices](hotkeys-best-practices) guide.

## Binding App Hotkeys to Game Hotkeys

Most games already have built-in hotkeys for common actions. These key combinations usually bound to the most important and common actions. Adding new hotkeys for your app makes the lives of players harder, as they needs to remember additional combinations.

We can "hitch a ride" on game hotkeys and provide value in an automated manner. The main advanatage of this approach is that the player doesn't need to remember new hotkeys: We can bind OW hotkeys in parallel to the existing game hotkeys to increase value on existing actions.

## Use Tab as an app Hotkey

One of the most common hotkeys used in many games is the Tab key.

The tab button is a physically large button, easy to use and to reach which makes it comfortable for players. A lot of games use it as a built-in "special" hotkey that displays important information, scoreboards and similar data, sometimes in a "ShowOnHold" manner: It displays the info while the key is held down, and hides it when Tab is released.  

Examples:

* In League of Legends, when a player is pressing TAB to see match statistics, you can provide him with additional stats on top.
* In CS:GO, when a player buys weapons, you can show the player his new weapon's recoil pattern.
* In Hearthstone, when a player enters the deck / collection screen, you can tell him which of his prepared decks is closest to a good meta deck and what cards he is missing to complete it.

**"Riding" the Tab key and similar hotkeys, when done right, is a highly recommended practice.**

A LOL example of the popup that appears while the player is holding the tab key (and hides it on release):

![alt-text](assets/tab-example-lol.gif)

## Implement "Tabbing" in Your App

Start by spotting the hotkeys your app's targeted game uses in this fashion - whether it's Tab or other hotkeys. Break down what happens on a tab press - Is a new window launched? Is there a new bit of UI? Maybe the champion is doing something? Once mapped, you can think up ways to add value from your app to these screens and automated functions. 

As mentioned above,  Overwolf hotkeys do not yet offer a "ShowOnHold" mode like the tab key does in some games. For now, in order to implement a hotkey which works with an OnHold Tab functionality, we will have to implement it in different way than the existing hotkeys API.

The [overwolf.games.inputTracking](../api/overwolf-games-inputTracking) API offers some useful events for that purpose.

:::important
Generally, hotkeys cannot be shared between Overwolf apps: once an app is using a hotkey, no other app can use it. However, this method of listening to OnKey events bypasses that limitation by allowing several apps to register the same hotkey actions (for example, several apps can set Tab as an hotkey and it will respond differently in each game depending on it's Tab features).  
:::

### Using the onKeyDown event

The [onKeyDown](../api/overwolf-games-inputTracking#onkeydown) event fires when a keyboard key has been pressed.

We will use it to catch the user's tab keypress:

```js
overwolf.games.inputTracking.onKeyDown.addListener(function(info) {
    if(info.key == "9") //9=tab
		console.log("Tab key pressed: " + JSON.stringify(info));
});
```

The event also returns a boolean stating whether that keypress happened in the game or outside of it, so we can make sure that the our app window will be displayed at the right time, only when the user is in the game.

### Using the onKeyUp event

The [onKeyUp](../api/overwolf-games-inputTracking#onkeyup) event fires when a keyboard key has been released, and it also states whether the keypress was in the game or not.  

We will use it to catch the user's tab release:

```js
overwolf.games.inputTracking.onKeyUp.addListener(function(info) {
    if(info.key == "9") //9=tab
		console.log("Tab key released: " + JSON.stringify(info));
});
```

Once released, we can hide/minimize our window.
