---
id: using-tab
title: Show important data on Tab Key
sidebar_label:  Using Tab in your app
---

## Hotkeys overview

Overwolf Hotkeys are keys or key combinations that can be used in-game to launch/hide your OW app/window quickly.  
When using an hotkey, your app window is launched, and clicking it again hide/minimize it.  
You can allow users to change hotkey combinations from inside your app’s settings panel by automatically directing the user to the Overwolf settings page.  

You can read all the info about hotkeys in our [Hotkeys best practice](hotkeys-best-practices) guide.

## Bind Hotkeys to built-in game hotkeys

Most of the games already offers built-in hotkeys for common actions.  
These key combinations usually binded to the most important and common actions, like viewing stats, etc.  
Adding new hotkeys for your app usage, make the life of the player harder, as he needs to remember addiotnal hotkeys.

We can "ride" on the same hotkeys and provide value in an automated manner.  
The main advanatage of this approach, is that the player don't need to remember new hotkeys:  
We can bind the OW hotkeys in parallel to the existing game hotkeys.

## The Tab hotkey

One of the common built in hotkeys that is used in many games, is the tab key.

The tab button is one of the biggest buttons, and it's ease of use makes it most comfortable for the player.  
A lot of games using it as a built-in "special" hotkey, that display the most commonm and important data, sometimes in a "ShowOnHold" manner:  
It display the info while the tab is pressed, and hide it back when the tab is released.  

Examples:

* In LOL Rift, when a player is pressing TAB to see stats, you can provide him with additional stats on top.
* In CS:GO, when a player buy weapons, or switch, and then, you can show the player the recoil pattern.
* In Hearthstone, when a player enter the screen of his decks, you can tell him which one is closest to a good meta deck and what cards he miss to complete it.

"Riding" on tab key, use it as a hotkey in parallel also for your OW app, is a common and recomened practice.

## Implement "Tabbing" in your app

Once you recognized that your app's targeted game is using a tab, you should map what exactly happens on a tab press - if a screen is opened, if there are any UI changes, does the character is doing something, etc.  Than, you should offer some added and related value from your app.

As mentioned above, the Overwolf hotkeys not offers (yet) a "ShowOnHold" mode like the tab key (shows while clicked, hide on release).  
In order to implement in our app an hotkey with the same behaviour as the tab, we will have to implemet it in different way, and not through the existing hotkeys API.

The [overwolf.games.inputTracking](../api/overwolf-games-inputTracking) API offers some useful events for that purpose.

### Using the onKeyDown event

The [onKeyDown](../api/overwolf-games-inputTracking#onkeydown) event fired when a keyboard key has been pressed.

We will use it to catch the user's tab keypress:

```js
overwolf.games.inputTracking.onKeyDown.addListener(function(info) {
    if(info.key == "9") //9=tab
		console.log("Tab key pressed: " + JSON.stringify(info));
});
```

As the event also returns a boolean stating whether the keypress was in the game or not, we can make sure that the our app window will be dispolayed at the right time, only when the user is in the game.

### Using the onKeyUp event

The [onKeyUp](../api/overwolf-games-inputTracking#onkeyup) event fired when a keyboard key has been released, and it also stating whether the keypress was in the game or not.  

We will use it to catch the user's tab release:

```js
overwolf.games.inputTracking.onKeyUp.addListener(function(info) {
    if(info.key == "9") //9=tab
		console.log("Tab key released: " + JSON.stringify(info));
});
```

Once released, we can hide/minimize our window.

:::important
Regaular hotkeys not allowed cross reference of hotkeys between apps: once an app is using an hotkey, no other app can use it.  
In contrast, listen to key events allows several apps to "bypass" the OW hotkeys mechanisem and register the same hotkeys (for example, several apps can set the tab as an hotkey).  
:::






