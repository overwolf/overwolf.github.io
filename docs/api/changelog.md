---
id: changelog
title: Changelog
sidebar_label: Changelog
---

Follow this entry for ongoing updates and changes to the project or tools.

Here you can find our [Developers Roadmap](https://trello.com/b/1V10E4IB/overwolf-roadmap).

## Version 0.153 (Aug. 2020)

Note that iterations 150 to 153 were combined into a single iteration.  
In addition, the work on the documentation for this version is still in-progress.

#### API

* [overwolf.utils.openUrlInDefaultBrowser()](overwolf-utils#openurlindefaultbrowserurlopenurloptions) - Now allows extra behaviour. Right now "skip_in_game_notification" is the only option. When set to true, the alert notifyi8ng in-game users that their browser is about to open will not display. 
* Add to [overwolf.utils.enums.eStorePage](overwolf-utils#estorepage-enum) - Now you can Open the requested app’s reviews/feedabck page in the Overwolf Appstore.
* [overwolf.windows.getCurrentWindow()](overwolf-windows#getcurrentwindowcallback) now returns also the monitor id.  
  Now you quickly determine which monitor the window is displayed.

#### Platform

* `Chrome Developer Tools disabled for OW windows as default`.  
  From now on, when clicking Ctrl+Shift+I on a window will NOT open the developer tools. (Even if the [disable_dt](manifest-json#disable_dt) manifest flag is set to false). The only way to enable it back is by changing a registry key.  
  This key will be published on our slack only for OW whitelisted developers. Of course, you can always [contact us](../support/contact-us) and request it.
* Feature flag  - ablility to turn on\off client features (via command line, remote server, remote config app).
* Allow pin to taskbar (and launch the app + app icon).
* "Jump list" to show the extension's icon.

#### Game events

* [Minecraft](overwolf-games-events-minecraft)
  * New supported game
* [LOL](overwolf-games-events-lol)
  * New updates under:
    * match_info

## Version 0.149 (Jul. 2020)

#### API and Platform

* [overwolf.windows.changeSize()](overwolf-windows#changesizechangesizeparams-callback).  
  Accept now a new boolean param whether to automatically account for DPI scale when resizing ("auto_dpi_resize").
* ["LaunchWithOverwolf"](manifest-json#enable-app-auto-launch-with-overwolf) - new manifest flag, enable launching app together with the OW client.
* New API to support enabling/disabling auto-launch with the Overwolf client:  
  (Apps launched this way will have [origin](overwolf-extensions#the-origin-string) "overwolfstartlaunchevent") 
  * [overwolf.settings.setExtensionSettings(extensionSettings, callback)](overwolf-settings#setextensionsettingsextensionsettings-callback)
  * [overwolf.settings.getExtensionSettings](overwolf-settings#getextensionsettingscallback).

#### Game events

* [MTGA](overwolf-games-events-mtga)
  * New updates and events under:
    * match_info
    * game_info
* [VALORANT](overwolf-games-events-valorant)
  * New updates and events under:
    * match_info
    * kill
* [OVERWATCH](overwolf-games-events-overwatch)
  * New supported game
  * [Auto-highlights](../api/auto-highlights) support
* [RAINBOW SIX](overwolf-games-events-rainbow-six)
  * New updates and events under:
    * roster

#### Docs

* We are now supporting bigger [screenshots](../start/submit-your-app-to-the-store#3-screenshotxjpg) for your OW app store page: 1200x750 pixels, instead of the old 656X410.

## Version 0.148 (Jun. 2020)

#### API and Platform

* "DPI-aware" feature for [native](../topics/windows-types#native-window) windows:  
  It means that when you move the native window between monitors with different DPIs for example from 100 DPI to 125 DPI, the window will automatically resize according to the new DPI.  
  There's also a new manifest flag to disable that behavior if the developer wants none of that: [disable_auto_dpi_sizing](manifest-json#disable_auto_dpi_sizing).
* Moved to be part of our internal API and removed from the docs:
    * event *overwolf.streaming.onRecordingEngineStateChanged*.
    * function *overwolf.streaming.getRunningRecorders()*.

## Version 0.147 (May. 2020)

Note that iteration 146 and 147 were combined into a single iteration.  

#### API and Platform

* New feature: [overwolf.window.flash()](overwolf-windows#flashwindowid-behaviorcallback)  
  Flashes a window that is not in focus (for example, minimized to taskbar).  
  Support either constant pulses or a single flash - the choice is yours. 
* New manifest flag: [disable_cleanup](manifest-json#disable_cleanup).  
  If set to true, app local data will not be cleaned up after app uninstallation.
* New API: [overwolf.extensions.io](overwolf-extensions-io)  
  No need to use the external I/O plugin anymore for your current extension-related I/O functionalities.  
  Now you can easily create, delete, or update files on your extension's [dedicated storage space](overwolf-extensions-io#storagespace-enum).   
* Allow apps to request [opening the hotkey settings](../topics/hotkeys-best-practices#reassign-hotkeys) for a specific game. An example:
  * Current hotkey URL:  
    `overwolf://settings/hotkeys#hotkey_name_in_manifest`.  
  * New hotkey URL:  
    `overwolf://settings/games-overlay?hotkey=hotkey_name_in_manifest&gameId=game_id`.  
    game_id is optional.
* Upgrade to OBS 25.0.0 
  * Update obs-ffmpeg.dll (NVENC encoder).
    That can affect some devs that are trying to capture videos and get encoders errors and a message that the NVEC driver should be updated.
* Updates for the streaming and replay APIs: added a [quota object](#overwolf-streaming#streamquotaparams-object):  
  Allow setting max media folder size in GB, and exclude folders that are not part of this quota.
* Video recording engine updated, and now it supports Vulkan capturing!

#### Game events

* [PUBG Lite](overwolf-games-events-pubglite)
  * New event:
    * team_feed
    * knockout
* [CS: GO](overwolf-games-events-csgo)
  * New event:
    * kill_feed
  * New event:
    * scoreboard
* [Rainbow Six: Siege](overwolf-games-events-rainbow-six)
  * New feature:
    * me
* [Escape From Tarkov](overwolf-games-events-escape-from-tarkov)
  * New supported game
* [VALORANT](overwolf-games-events-valorant)
  * New supported game
* [Auto-highlights](../topics/video-capture#auto-highlights-capture) now supports VALORANT "kill", "death" and "assist" events

## Version 0.145 (Apr. 2020)

Note that iteration 144 and 145 were combined into a single iteration.

#### API and Platform

* New API: [overwolf.campaigns]() for the new LoL "Refer a friend" feature. **Note: the docs for this API will be released soon**
* Cookie Sync - Cookie Syncing was updated to support Microsoft Edge (non-dev version) and the new Firefox schema.
* Security and bug Fixes.

## Version 0.143 (Mar. 2020)

#### Game events

* The Vulkan Graphics API is now supported.
* From now, whenever you try to use an obsolete API, the dev console will print a warning.  
  Try: overwolf.setting.getCurrentOverwolfLanguage().
* New API - [overwolf.settings.language](overwolf-settings-language).  
  Returns an object with language methods and events.
  * [overwolf.settings.language.get()](overwolf-settings-language#getcallback).
  * [overwolf.settings.language.onLanguageChanged](overwolf-settings-language#onlanguagechanged) event.
* New event: [overwolf.windows.onScreenPropertyChanged](overwolf-windows#onscreenpropertychanged).  
  Detect moving window to another monitor.  
  Triggered if more than 50% of the window has been moved to another monitor.  
  Returns the new monitor handle.
* Upgrade OBS to 24.0.5.  
  * Update FFMpeg version.
  * Support new NVEC Encoders ("NVEC New").
* Allow overriding recording indication type and position in API:  
  Now when calling [overwolf.streaming.start()](overwolf-streaming#startsettings-callback), [indication_position](overwolf-streaming#indication_position-enum) and [indication_type](overwolf-streaming#indication_type-enum) can be set under video settings. (Until now, you could do that only from the OW client UI).
* HTTPS - "Referrers", "Origins", and "AncestorsOrigin" should now all be using HTTPS instead of HTTP.

#### Game events

* [PUBG Lite game events](overwolf-games-events-pubg-lite)
  * New supported game
* [Legends of Runeterra game events](overwolf-games-events-lor)
  * New supported game
* [World of Warcraft game events](overwolf-games-events-wow)
  * New supported game
* [Rocket League game events](overwolf-games-events-rocket-league)
  * New info updates:
    * server_info
    * mutator_settings
    * arena

## Version 0.142 (Feb. 2020)

#### API and Platform

* New API - [overwolf.settings.hotkeys](overwolf-settings-hotkey).  
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

* Cleanup upon uninstall:
  * Delete extension folder upon uninstall extension.
  * Clear all extension windows proprieties from setting.
  * Clear localstorage.
* Enable Drag & drop To Overwolf app window.

#### Game events

* [Hearthstone game events](overwolf-games-events-hearthstone#docsNav)
  * New info updates:
    * adventure_stats
* [League of Legends Events](overwolf-games-events-lol)
  * New event & info:
    * live_client_data
* [Path of Exile game events](games-events-path-of-exile)
  * New events & info
    * kill
    * death
    * match_outcome
    * current_zone
    * inventory open/close
    * character_name
    * character_level
    
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

* New API: [overwolf.profile.subscriptions](overwolf-profile-subscriptions).  
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
