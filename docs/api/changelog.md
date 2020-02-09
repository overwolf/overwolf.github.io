---
id: changelog
title: Changelog
sidebar_label: Changelog
---

Follow this entry for ongoing updates and changes to the project or tools:

## Version 0.142 (Feb. 2020)

Note that the full documentation and links for this version will be added soon to the site.

* New API - overwolf.settings.hotkeys.  
  Returns an object with hotkeys methods and events.
  * New manifest flag: `hold`: Will be added to the [hotkeys object](manifest-json#hotkeys).  
    Defines a new type of hotkey - hotkey that works only while you are holding the key.  
    The flag also added to our [manifest schema file](https://github.com/overwolf/community-gists/blob/master/overwolf-manifest-schema.json).  
  * New function: [overwolf.settings.hotkeys.get()](overwolf-settings-hotkeys#getcallback). Returns all calling extension’s hotkeys.
  * New event: [overwolf.settings.onHold](overwolf-settings-hotkeys#onhold): will fire only for hotkeys that are defined as "hold".  
    This event will be fired twice - on key down and on key up.
  * New event: [overwolf.settings.onPressed](overwolf-settings-hotkeys#onpressed): will fire only for hotkeys that are not defined as "hold".  
    This event will replace the depracated [overwolf.settings.registerHotKey](overwolf-settings#registerhotkeyactionid-callback) function.    
  * New event: [overwolf.settings.onChanged](overwolf-settings-hotkeys#onchanged):  will fire on hotkeys change. 

* `overwolf.extensions.getExtensions()` will now also return the permissions of the extension (required for the settings app).  

* Cleanup upon uninstall:
  * Delete extension folder upon uninstall extension.
  * Clear all extension windows proprieties from setting.
  * Clear localstorage.
* Enable Drag & drop To Overwolf app window.

* [Hearthstone game events](overwolf-games-events-hearthstone#docsNav)
  * New info updates:
    * adventure_stats

## Version 0.141 (Jan. 2020)

* Manifest flag [enable_top_isolation](manifest-json#enable_top_isolation) has been "moved up" in the hirarchy:  
  Now it's per app and not per windows - means, it's under the "data" node and not the "window" node.  
  Note that it's backward compatible (means that if one of the app windows set this flag in the manifest - it will auto-merge to the entire app).
* New function: [overwolf.utils.OpenFilePicker](overwolf-utils#openfilepickerfilter-initialpath-callback).  
  Now also accepts an initialPath parameter.
* Logs: now end with the extension "log" (instead of numbers).  
  In addition, logs file names are now counted where the last number one is the newest file.  
* New function: [overwolf.streaming.split](overwolf-streaming#splitstreamid-callback).  
  Split video files.
* Implement the main features of the [IO-Pluign](../topics/simple-io-plugin) inside the [overwolf.io](overwolf-io) API: 
  * [overwolf.io.dir()](overwolf-io#dirpath-callback)
  * [overwolf.io.readBinaryFile()](overwolf-io#readbinaryfilepath-options-callback)
  * [overwolf.io.readTextFile()](overwolf-io#readtextfilepath-options-callback)
  * [overwolf.io.exist()](overwolf-io#existpath-callback)
  * [overwolf.io.listenOnFile()](overwolf-io#listenonfileid-path-option-callback)
  * [overwolf.io.stopFilelistener()](overwolf-io#stopfilelistenerid)
* [League of Legends Launcher Events](overwolf-games-launchers-events-lol#docsNav)
  * New [status page](../status/lol-launcher) for LOL launcher.
  * New update:
    * is_garena_user
* [Hearthstone game events](overwolf-games-events-hearthstone#docsNav)
  * New info updates:
    * Adventure Deck
    * adventure_loot_options
    * battlegrounds_rating
* All game-events
  * New update:
    * gep_internal

## Version 0.140 (Dec. 2019)

* Internal bug fixes and refactoring.

## Version 0.139 (Dec. 2019)

* [overwolf.utils.getSystemInformation()](overwolf-utils#getsysteminformationcallback) now has **VideoEncSupport** property.  
  (New boolean parameter in response, under SystemParams.
* [League of Legends Events](overwolf-games-events-lol)
  * New event & info:
    * damage
    * heal
* [League of Legends Launcher Events](overwolf-games-launchers-events-lol#docsNav)
  * New update:
    * close_client_during_game
* [MTGA Events](overwolf-games-events-mtga)
   * New info-update:
     * scene
* [Dota Underlords Events](https://overwolf.github.io/docs/api/overwolf-games-events-underlords)
  * New events:
    * round_outcome
    * match_outcome
* [Starcraft II Events](https://overwolf.github.io/docs/api/overwolf-games-events-sc2)
  * New supported game
* [CS: GO game events](overwolf-games-events-csgo#docsNav)
  * New update:
    * match_outcome
* [PUBG game events](overwolf-games-events-pubg#docsNav)
  * New update
    * team_index


## Version 0.138 (Nov. 2019)

* All API functions that take callback arguments:  
from now on, we guarantee that a non-null result object parameter will always be returned and it will always contain a |success| boolean field.  
This means no more if (!result || !result.status ...) checks. Instead, this should always work: if (result.success).
* New Overwolf definition file addition -  make your lives easier and your coding experience faster. Full details can be found [here](../topics/type-definition-file).
* New Event: [overwolf.extensions.onExtensionUpdated](overwolf-extensions#onextensionupdated). Notify when the app was updated.  
  This event will replace the depracated "overwolf.extensions.onExtensionUpdateStateChanged" event.   
  Fires after the current app were successfully updated.
* We updated the [recommended process](../start/submit-an-app-update#forced-user-updates) for manual update of your app.
* [overwolf.tobii](overwolf-tobii): this API has been deprecated.
* [League of Legends Events](overwolf-games-events-lol)
  * New event:
    * match_clock
* [Dota 2 Events](overwolf-games-launchers-events-dota2#docsNav)
  * New info-update:
    * role
    * hero_pool
* [Dota Underlords Events](https://overwolf.github.io/docs/api/overwolf-games-events-underlords)
  * New supported game events
  
## Version 0.137 (Nov. 2019)

* [MTGA Events](overwolf-games-events-mtga) - New supported game
   * New info-update:
     * detailed_logs_enabled
   * New event:
     * match_outcome
* [WOT Events](overwolf-games-launchers-events-wot#docsNav)
  * New event:
    * match_outcome
* New doc about our [Game Events Simulator app](../topics/using-events-simulator).
* New [sample app](../start/sample-app-overview) with enhanced UI.
* New game events [past Incidents](../status/past-incidents) page.
* New manifest flag: [minimum-gs-version](manifest-json#meta-minimum-gs) - Allows extensions (apps) to set a minimum game summary app version in the manifest, this works similarly to minimum-overwolf-version and relevant only for apps thay using the game summary pannel.
* New manifest flag: [service_providers](manifest-json#service_providers) - you can use this flag to set different parameters that are relevant for a service provider app. Use the new API function [overwolf.extensions.getServiceConsumers()](overwolf-extensions#getserviceconsumerscallback) to read the flag value.
* New API function: [overwolf.utils.openStore()](overwolf-utils#openstoreparam) - Opens the requested app’s profile/login/subscription page in the Overwolf Appstore.
* New API namespace: [overwolf.extensions.shareddata](overwolf-extension-sharedData) - a new namespace that allows any app to share data with another app. the plan is to use it for the Game Summary tabs.
* New plugin: The [Process Manager plugin](../topics/process-manager-plugin) that allow OW apps to run executable (for example, run a game when you launch an OW app). 


## Version 0.136 (Oct. 2019)

* Added new override setting to overwolf.windows.obtainDeclaredWindow() - [useDefaultSizeAndLocation](overwolf-windows#obtaindeclaredwindowwindowname-usedefaultsizeandlocation-callback).
  When this flag is set to true, the window will be created using the default (manifest) size and location, rather than the saved setting.
* [League of Legends Launcher Events](overwolf-games-launchers-events-lol#docsNav)
  * New update:
    * lcu_info
    * lol_end_game_stats
    * game_version

## Version 0.135 (Sep. 2019)

* [CS: GO game events](overwolf-games-events-csgo#docsNav)
  * New update:
    * phase
* New properties for the [GameInfo](overwolf-games#gameinfo-object) object:
  * monitorHandle - Returns the current monitor handle. You can now check for example, on which monitor your app is running.
  * windowHandle - Returns the current app window handle.
* New function: [overwolf.extensions.checkForExtensionUpdate()](overwolf-extensions#checkforextensionupdatecallback) -  allows the current app to check if there is an extension update.

## Version 0.134 (Aug. 2019)

* New API: [overwolf.profile.subscriptions](overwolf-profile.subscriptions).  
  Provides functions and events to help with user subscription management.

* [Teamfight Tactics Events](overwolf-games-events-tft#docsNav)
  * New updates:
    * store
    * board
    * bench
    * carousel
    * local_player_damage
    
* [League of Legends Launcher Events](overwolf-games-launchers-events-lol#docsNav)
  * New update:
    * end_game
    
* [Hearthstone game events](overwolf-games-events-hearthstone#docsNav)
  * New events:
    * match_type
    * match_start/end
    * match_outcome
* [Rainbow Six: Siege game events](overwolf-games-events-rainbow-six#docsNav)
  * New update:
    * game_mode
* [CS: GO game events](overwolf-games-events-csgo#docsNav)
  * New update:
    * replay
    * server_info
    * game_mode
* [PUBG game events](overwolf-games-events-pubg#docsNav)
  * New update
    * team_location
    * health

## Version 0.133 (Jul. 2019)

* [minimum-gep-version](manifest-json#meta-minimum-gep) - New manifest flag. Allow extensions to set a minimum GEP version in manifest, this works similarly to minimum-overwolf-version.

* [overwolf.extensions.updateExtension()](overwolf-extensions#updateextensioncallback) - new method. Tries to download an update for the calling extension.

* [overwolf.extensions.onExtensionUpdateStateChanged](overwolf-extensions#onextensionupdatestatechanged) - new event. Notify when the app was updated.

## Version 0.132 (Jul. 2019)

* [overwolf.os.getRegionInfo()](overwolf-os#getregioninfocallback) - new method. Returns regional information about the user.
  
* [overwolf.windows.setMinSize()](overwolf-windows#setminsizewindowid-width-height-callback) - new method. Overrides the window's defined minimum size.

* [Teamfight Tactics Game Events](overwolf-games-events-tft) - TFT game events are now available. This game-mode is officially supported and more events will be added soon!

## Version 0.131 (Jun. 2019)

* [LoL Launcher events](overwolf-games-launchers-events-lol)
  * New update:
    * lobby_info
* [PUBG game events](overwolf-games-events-pubg)
  * New updates:
    * safe_zone
    * blue_zone
    * red_zone
* [Fortnite game events](overwolf-games-events-fortnite)
  * New update:
    * shield
