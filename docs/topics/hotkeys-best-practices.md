---
id: hotkeys-best-practices
title: Hotkey Best Practices
sidebar_label: Hotkey Best Practices
---

## Using Hotkeys

There are two types of Hotkeys we use:

* **Custom** - will only work and get a response from your app after registering that hotkey and only when the app is already running. To register a hotkey use [`overwolf.settings.registerHotKey()`](http://developers.overwolf.com/documentation/sdk/overwolf/settings/#registerhotkey)).

* **Toggle** - A special hotkey that launches your in-game app window if it isn’t already running.

Note that Hotkeys will only work in-game, not on desktop.

## Hotkeys tips

1. If you're using the `focus_game_takeover: ReleaseOnHidden` flag, don't forget to use the `focus_game_takeover_release_hotkey` flag as well.  

2. if you're using a transparent background window, note that a toggle hotkey will not work properly - the hotkey will show the app, but will not hide it. In order to hide it as intended, you will have to call the registerHotkey() function from your background window - exactly like a custom hotkey. You don't need to change the hotkey type to "custom", it should work as is.
   
3. You can learn whether the user changed your app's hotkey in Overwolf's settings by registering to the [overwolf.settings.OnHotKeyChanged](../api/overwolf-settings#onhotkeychanged) event.

4. It's possible to use left or right arrows for hotkeys. To do so, you should use the code `Left` or `Right` in your manifest.json.

5. it is not possible to reassign hotkeys directly from apps, only through the Overwolf client settings page. What you can do is place a direct link to the relevant settings page using `href="overwolf://settings/hotkeys#hotkey_name_in_manifest`.  

An alternative is to use [overwolf.games.inputTracking](../api/overwolf-games-inputTracking) to set up additional hotkeys that the user can change from within the app.
