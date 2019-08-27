---
id: changelog
title: Changelog
sidebar_label: Changelog
---

All notable changes to this project will be documented in this file.

## Version 0.134 (August 2019)

* New API: [overwolf.profile.subscription](overwolf-profile.subscription).  
  Provides functions and events to help with user profile subscription management.
  
* [Teamfight Tactics Events](https://overwolf.github.io/docs/api/overwolf-games-events-tft#docsNav)
  * New info updates:
    * store
    * board
    * bench
    * carousel
* [League of Legends Launcher Events](https://overwolf.github.io/docs/api/overwolf-games-launchers-events-lol#docsNav)
  * New info update:
    * end_game
* [Hearhstone game events](https://overwolf.github.io/docs/api/overwolf-games-events-heartstone#docsNav)
  * New info updates/events:
    * match_type
    * match_start/end
    * match_outcome
* [Rainbow Six: Siege game events](https://overwolf.github.io/docs/api/overwolf-games-events-rainbow-six#docsNav)
  * New info update:
    * game_mode
* [CS: GO game events](https://overwolf.github.io/docs/api/overwolf-games-events-csgo#docsNav)
  * New info update
    * replay
    * server_info
    * game_mode
* [PUBG game events](https://overwolf.github.io/docs/api/overwolf-games-events-pubg#docsNav)
  * New info update
    * team_location

## Version 0.133 (July 2019)

* [minimum-gep-version](manifest-json#meta-minimum-gep) - New manifest flag.
  Allow extensions to set a minimum GEP version in manifest (similar to minimum-overwolf-version).

* [overwolf.extensions.updateExtension()](overwolf-extensions#updateextensioncallback) - new method.  
  Tries to download an update for the calling extension.

* [overwolf.extensions.onExtensionUpdateStateChanged](overwolf-extensions#onextensionupdatestatechanged) - new event.  
  Notify when the app were updated.

## Version 0.132 (July 2019)

* [overwolf.os.getRegionInfo()](overwolf-os#getregioninfocallback) - new method.  
  Returns regional information about the user.
  
* [overwolf.windows.setMinSize()](overwolf-windows#setminsizewindowid-width-height-callback) - new method.  
  Overrides the window's defined minimum size.

* [Teamfight Tactics Game Events](overwolf-games-events-tft) - TFT game events are now available.  
This game-mode is officially supported and more events will be added soon.

## Version 0.131 (June 2019)

* [LoL Launcher events](overwolf-games-launchers-events-lol)
  * New info update:
    * lobby_info
* [PUBG game events](overwolf-games-events-pubg)
  * New info updates:
    * safe_zone
    * blue_zone
    * red_zone
* [Fortnite game events](overwolf-games-events-fortnite)
  * New info update:
    * shield
