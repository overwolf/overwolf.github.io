---
id: hotkeys-best-practices
title: Hotkeys Best Practices
sidebar_label: Hotkeys best practices
---

## Using Hotkeys

The hotkeys are set in the manifest file, under the [hotKeys section](../api/manifest-json#hotkeys-object).

:::important
Hotkeys will only work in-game, not on desktop.
:::

An example of a hotkeys section from the manifest:

```json
"hotkeys": {
    "show_YourAppName": {  //hotkey #1 name identifier
        "title": "Show Player", //hotkey title
        "action-type": "custom",//toggle or custom
        "default": "Shift+F9", //key combination
        "passthrough": true, //pass the keys to the game or not
        "hold": true //invoke the action only while it's being held
    },
    "save_YourAppName": { //hotkey #2 name identifier
        "title": "Save Replay for later",
        "action-type": "custom",
        "default": "Ctrl+Shift+F9"
    }
}
```

## Types of hotkeys

There are two types of Hotkeys we use:

### Toggle

A special hotkey that toggles the application visibility by showing or hiding it.  
**The minority of the apps are using it, as it's the only action that it can do.**

* The advantage of it is that it can activate your app if it's closed, and launches your in-game app window.
* Another advantage is that you don't have to register for any event. Just define the hotkey as "toggle" in the manifest.

:::important
If you are using a transparent background controller (window), a toggle hotkey will not work properly. Please use a [custom hotkey](#custom).
:::

### Custom

Defines a custom hotkey to be used by the app.  
Most of the apps are using this kind of hotkey, as it can activate any action and, you can customize your app window behavior.

* Custom hotkeys will only work when your app is already running.  
  Unlike Toggle hotkeys, using a custom hotkey with the app closed will do nothing.
* Custom hotkeys will only work and get a response from your app after registering the hotkey using the [overwolf.settings.hotkeys.onPressed](../api/overwolf-settings-hotkeys#onpressed) event.
* If you are using a [hold](#hold-hotkeys) hotkey, you should register to the [overwolf.settings.hotkeys.onHold](../api/overwolf-settings-hotkeys#onhold) event, instead of the [onPressed](../api/overwolf-settings-hotkeys#onhold) event.

:::important
If you are using a transparent background controller (window), you must register the hotkey in that window.
:::

## "hold" hotkeys

## Global hotkeys

## Get notified on a hotkey change

Listen to the [overwolf.settings.hotkeys.onChanged](../api/overwolf-settings-hotkeys#onchanged) event if you want to get notified when the user changed your app hotkeys from the OW client settings page.

## Reassign hotkeys

It is not possible to reassign hotkeys directly from apps, only through the Overwolf client settings page.  
What you can do is place a direct link to the relevant settings page using `href="overwolf://settings/hotkeys#hotkey_name_in_manifest`.  

:::note
It's possible to use left or right arrows for hotkeys. To do so, you should use the code `Left` or `Right` in your manifest.json.
:::

## Pass through 

You can set a hotkey as "passthrough," which means that the hotkey will not block keys from the game.  
The key combination will trigger your app hotkey and then will "passthrough" the game.

Example code from the manifest, for a hotkey that set to pass through:

```json
"hotkeys": {
    "show_YourAppName": { 
        "title": "Show Player",
        "action-type": "custom",
        "default": "Shift+F9",
        "passthrough": true,
    },
}
```
