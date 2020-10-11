---
id: changelog
title: Changelog
sidebar_label: Changelog
---

Follow this entry for ongoing updates and changes to the project or tools.

Here you can find our [Developers Roadmap](https://trello.com/b/1V10E4IB/overwolf-roadmap).

## Version 0.157 (In-Progress)

Note that the work on the documentation for this version is still in-progress.

#### API

* Soon.

#### Platform

* Soon.

#### Bug fixes

* [overwolf.io.listenOnFile](overwolf-io#listenonfileid-path-option-callback) - add an indication that the watching on file started successfully.

#### Dev Console

* Soon.

#### Game events

* We're expanding our library with typedef files for the different in-game events, starting with Valorant info updates (since I personally love it and it doesn't say anywhere that I'm not allowed to have fun at work).

## Version 0.156 (Oct. 2020)

#### API

* [overwolf.windows.onScreenPropertyChanged](overwolf-windows#onscreenpropertychanged) event:  
  Now the event is being fired for all the declared windows. So you also need to test the window name/id arguments that are passed to the event to see if it is relevant for your window.
* [overwolf.extensions.current.getExtraObject](overwolf-extensions-current#getextraobjectname-callback): Improve the robustness of the API. Write to log and return a callback.
* [overwolf.utils.getSystemInformation](overwolf-utils#getsysteminformationcallback): return if Windows 10 version 2004 *Hardware-Accelerated GPU Scheduling* is enabled. 

#### Platform

* Replay capture accuracy: change replay's timestamp logic: capture replay's with using PTS (Presentation timestamp) and not ETS (Encoding timestamp).
* Multiple audio tracks: It is now possible to record videos that support more than one audio track, using the new flag for [stream settings](overwolf-streaming#streamsettings-object): **separate_tracks": bool**.  
  When disabled (default), create the video source with track1 only.  
  When enabled, video (mp4) will be created with three different audio tracks:
  * track1: Microphone + Desktop.
  * track2: Desktop output.
  * track3: Microphone input.  
* Extension logs: Send the isolated relevant's extension logs to server (upon crash/request to send logs).

#### Bug fixes

* Do not launch extension with "LaunchWithOverwolf" launch event when extension is disabled. 
* overwolf.extensions.current.getExtraObject - Fixed cases where this function wouldn’t return a callback.
* Fixed a bug with native windows when navigating to a different window.
* Reaching 50MB of free space no longer causes the OBS process to hang.
* The video recording UI no longer stays in a pending state if we can’t load ow-graphics-hook32.dll for whatever reason.

#### Dev Console

* Soon

#### Game events
* GENERAL
  * Recently both Path of Exile and Rocket League received an Epic Games version and our events are currently unreliable on those versions. We are adjusting the events and will update in the near future.
* [WARFRAME](overwolf-games-events-warframe)
  * New updates and events under:
    * inventory
    * username
* [Call of Duty - Warzone](overwolf-games-events-warzone)
  * New updates and events under:
    * match_info
    * game_info
* [Fortnite](overwolf-games-events-fortnite)
  * New update under:
    * me
* [World of Warcraft](overwolf-games-events-wow)
  * New update under:
    * group_applicants
* [Minecraft](overwolf-games-events-minecraft)
  * New update under:
    * match_info
    
## Version 0.155 (Sep. 2020)

Note that iterations 154 and 155 were combined into a single iteration.  

#### API

* [overwolf.utils.placeOnClipboard()](overwolf-utils#placeonclipboarddata) and [overwolf.utils.getFromClipboard()](overwolf-utils#getfromclipboardcallback) reimplemented so that we tackle the coexistence issues with AutoHotKey script.

* [overwolf.games.inputTracking.getActivityInformation()](overwolf-games-inputTracking#getactivityinformationcallback) - remove the 5 minutes min time for getting a result.  
  Note that We're still not recording the first 30 characters, and we will send the activity info to our servers only if your sessions is longer than 5 minutes.

* New flag for [replay](overwolf-media-replays#replayvideooptions-object) \ [streaming](overwolf-streaming#streamvideooptions-object) video settings object: **use_app_display_name**.  
  If this flag in on, when creating a video capture folder, it will use the app "short name" as the folder name, instead of using the app name from the manifest. (the app "short name" is defined in the [dock_button_title](manifest-json#meta-dock) manifest flag).

* it is now possible to change the number of maximum saved log files that
apps are saving with the new max_rotation_log_file manifest flag
New manifest flag [max_rotation_log_files](manifest-json#max_rotation_log_files) - for app Log rotaion control. It allow to increase app log's file rotation (up to 40).
    
* New feature: Set window zoom level - [overwolf.window.setZoom()](overwolf-windows#setzoomwinzoomfactorowid-windowid).  
  Now you can change the zoom factor of your window through the API (the effect is exactly like changing the zoom in a web browser).

* The [overwolf.media.audio](overwolf-media-audio) is now considered obsolete, and will display the relevant warning in the console when using it.

* We marked several functions and APIs as **OBSOLETE**. Soon, we altogether remove them from the docs and from the API itself. Note that you should get a warning in your dev console when using one of the obsolete functions.  
This is the full list of OBSOLETE functions and APIs:
  * overwolf.media.stopGifBuffer()
  * overwolf.media.generateGif()
  * overwolf.media.startGifBuffer()
  * overwolf.media.replays.turnOff(replyID, callback) - this signature already removed from the docs.
  * overwolf.media.replays.getState()
  * overwolf.media.replays.startCapture(replayType, pastDuration, callback)
  * overwolf.media.replays.stopCapture(ReplayType, replayId, callback)
  * overwolf.media.replays.capture(replayType, pastDuration, futureDuration, captureFinishedCallback, callback)
  * overwolf.media.replays.finishCapture() - already removed from the docs.
  * overwolf.streaming.updateStreamingDesktopOptions()
  * overwolf.benchmarking (all)
  * overwolf.tobii (all)
  * overwolf.media.audio (all)
  * overwolf.settings.setFpsSettings()
  * overwolf.settings.getHotKey()
  * overwolf.settings.registerHotKey()
  * overwolf.settings.getCurrentOverwolfLanguage()
  * overwolf.settings.OnHotkeyChanged

#### Platform

* WebServer: [overwolf.web.webserver](overwolf-web-webserver) now allow CORS.  
  Now the built-in OW webserver sends the correct CORS headers ([Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)) to client.  
  It's useful for case when you need to pass some data (ex: authentication token) from your website to Overwolf app. More info [here](overwolf-web-webserver).
* Windows 10 version 2004 *Hardware-Accelerated GPU Scheduling* feature might cause captured videos to be laggy. More info [here](../topics/video-capture#windows-10-hardware-accelerated-gpu-scheduling-notice).

#### Bug fixes

* On Uninstall, Overwolf now deletes all related registry entries from all users.
* Fixed a highlights bug where on rare occasions it would record the video, but wouldn't inform the app requesting it.
* Fixed cases where the video onStop/onStart listeners wouldn't return a callback.
* Fixed a bug where HTML5 audio would play twice.
* Fixed a bug with video naming when using the split API and the configuration include_full_size_video was false.

#### Dev Console
 
* Now you can edit your subscription plan and manage your subscribers.  
  We have added to the Dev Console a new tab: "Subscription". When clicked, two options will appear:
  * Plans - you can edit the subscription plans you already own: title, price, description, period, status, and assets (that'll be shown in Overwolf's app store).  
    For now, you can only edit current plans. To create one, please ask your dev-rel manager.
  * Subscribers - you’ll be able to edit each subscriber expiration date and status (active/canceled/revoked/invalid).
* You can now see your app's URL to the Overwolf store listing directly from the console.
* To make our apps more transparent to users, we added the option to configure if you have ads, subs, and if the app is free. This will be shown to users on the app store.
* You can now see which tags are enabled for your app when searching for a game. To add more tags contact your dev-rel manager.


#### Game events

* [Hearthstone](overwolf-games-events-hearthstone) - "match_end" now includes a match outcome value.d
* [League of Legends](overwolf-games-events-lol#live_client_data) - new event - "port". Random port that comes from Riot

## Version 0.153 (Aug. 2020)

Note that iterations 150 to 153 were combined into a single iteration.  

#### API

* [overwolf.utils.openUrlInDefaultBrowser()](overwolf-utils#openurlindefaultbrowserurlopenurloptions) - Now allows extra behaviour. Right now "skip_in_game_notification" is the only option. When set to true, the alert notifying in-game users that their browser is about to open will not display. 
* Add to [overwolf.utils.enums.eStorePage](overwolf-utils#estorepage-enum) - Now you can Open the requested app’s reviews/feedabck page in the Overwolf Appstore.
* [overwolf.windows.getCurrentWindow()](overwolf-windows#getcurrentwindowcallback) now returns also the monitor id.  
  Now you quickly determine which monitor the window is displayed.
* New manifest flag - [process_name](manifest-json#process_name-notes).  
  using one simple flag in the manifest, app developers can now differentiate their own apps from the rest of the OverwolfBrwoser.exe process rubble in the Task Manager.  
  By adding your custom "process_name" to an app manifest, all the processes related to the app ads are now running with the name given them by this flag.
* Added extra info to the overwolf.settings.hotkeys.onChanged API, so it’s consistent with the overwolf.settings.hotkeys.get function.
* The "file" param is now optional when calling overwolf.social.discord.share(). Instead, you can use the "message" param to include a URL of a file that you want to share.

#### Platform

* [Disabled Dev Tools as a default](../topics/enable-dev-tools#supported-features).  
  From now on, when clicking Ctrl+Shift+I on a window will NOT open the developer tools. (Even if the [disable_dt](manifest-json#disable_dt) manifest flag is set to false). The only way to enable it back is by changing a registry key.  
* Allow pin to the taskbar (and launch the app + app icon):  
  Now you can pin an open app to the taskbar, and the app icon will not change to the Overwolf icon, and the pinned app can be launched from the taskbar. (even if OW is closed)
* Non-logged in app installations - We have reverted the need to be logged into Overwolf in order download and install apps.

#### Game events

* [Minecraft](overwolf-games-events-minecraft)
  * New supported game
* [LOL](overwolf-games-events-lol)
  * New updates under:
    * match_info
* [MTGA](overwolf-games-events-mtga)
  * New updates under:
    * game_info
* [LoL Launcher](overwolf-games-events-launchers-events-lol)
  * New updates under:
    * clash

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
