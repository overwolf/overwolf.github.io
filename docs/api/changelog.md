---
id: changelog
title: Changelog
sidebar_label: Changelog
---

All notable changes to this project will be documented in this file.

## 0.132 (July 2019)

### API Features

* [overwolf.os.getRegionInfo()](overwolf-os#getregioninfocallback) - new method.  
  Returns regional information about the user.

* [overwolf.extensions.updateExtension()](overwolf-extensions#updateextensioncallback) - new method.  
  Tries to download an update for the calling extension.

* [overwolf.extensions.onExtensionUpdateStateChanged](overwolf-extensions#onextensionupdatestatechanged) - new event.  
  Notift when the app were updated.
  
* [overwolf.windows.setMinSize()](overwolf-windows#setminsizewindowid-width-height-callback) - new method.  
  Overrides the window's defined minimum size.

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
