---
id: hotkeys-best-practices
title: Hotkeys Best Practices
sidebar_label: Hotkeys Best Practices
---

## a guide on how to use hotkeys

There are two types of Hotkeys:

* **Custom** - will only work (work=trigger a callback in your app) when your app is already running and registered to the hotkey (via [`overwolf.settings.registerHotKey()`](http://developers.overwolf.com/documentation/sdk/overwolf/settings/#registerhotkey)).

* **Toggle** - will make sure to launch your app if it isn’t already running (use it If you want the hotkey to launch your app).

Note that Hotkeys will only work in-game (not on desktop).

## Hotkeys tips and tricks

1. If you are using `focus_game_takeover: ReleaseOnHidden` flag, don't forget to use also the `focus_game_takeover_release_hotkey` flag.  

2. if you are using a transparent background window, note that a toggle hotkey will not work as expected - the hotkey will start/show the OW app, but will not hide it.
   In order to hide it, you will have to call the registerHotkey(), from your background window - exactly like custom hotkey. You don't need to change the hotkey type to "custom". Everything should work now.
   
3. to get notified when the user changed your app hotkey from the OW setting, you shoud register to the [overwolf.settings.OnHotKeyChanged](../api/overwolf-settings#onhotkeychanged) event.

4. You can use left/right arrows for hotkeys. To do so,  you should use the code `Left` or `Right` in the manifest.json.

5. it is not possible to reassign hotkeys directly from a user's app. It can only be done through the Overwolf client settings page.  
   All you can do is link directly to the hotkey there with `href="overwolf://settings/hotkeys#hotkey_name_in_manifest`.  
   An alternative is to use [overwolf.games.inputTracking](http://developers.overwolf.com/documentation/sdk/overwolf/games/inputtracking/) to set up additional hotkeys that the user can change from within the app.



