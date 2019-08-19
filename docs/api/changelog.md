---
id: changelog
title: Changelog
sidebar_label: Changelog
---

All notable changes to this project will be documented in this file.

## Version 135 (August 2019)

* [CS: GO events](https://overwolf.github.io/docs/api/overwolf-games-events-csgo#docsNav)
  * New info update:
    * server_info

## Version 134 (August 2019)

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
* [PUBG game events](https://overwolf.github.io/docs/api/overwolf-games-events-pubg#docsNav)
  * New info update
    * team_location

## 0.133 (July 2019)

### API Features

* [minimum-gep-version](manifest-json#meta-minimum-gep) - New manifest flag.
  Allow extensions to set a minimum GEP version in manifest (similar to minimum-overwolf-version).

* [overwolf.extensions.updateExtension()](overwolf-extensions#updateextensioncallback) - new method.  
  Tries to download an update for the calling extension.

* [overwolf.extensions.onExtensionUpdateStateChanged](overwolf-extensions#onextensionupdatestatechanged) - new event.  
  Notify when the app were updated.

## 0.132 (July 2019)

### API Features

* [overwolf.os.getRegionInfo()](overwolf-os#getregioninfocallback) - new method.  
  Returns regional information about the user.
  
* [overwolf.windows.setMinSize()](overwolf-windows#setminsizewindowid-width-height-callback) - new method.  
  Overrides the window's defined minimum size.

* [Teamfight Tactics Game Events](overwolf-games-events-tft) - TFT game events are now available.  
This game-mode is officially supported and more events will be added soon.

### Documentation

* PUBG [matchEnd](overwolf-games-events-pubg#matchend-notes) event - added a new note.

## 0.131 (June 2019)

### API Features

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
