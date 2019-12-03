---
id: changelog
title: Changelog
sidebar_label: Changelog
---

Follow this entry for ongoing updates and changes to the project or tools:

## Version 0.139 (Dec. 2019)

* [overwolf.utils.getSystemInformation()](overwolf-utils#getsysteminformationcallback) now has **VideoEncSupport** property.  
  (New boolean parameter in response, under SystemParams.
* [League of Legends Events](overwolf-games-events-lol)
  * New event & info:
    * damage
    * heal

  

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
    
* [Hearhstone game events](overwolf-games-events-heartstone#docsNav)
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
