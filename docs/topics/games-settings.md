---
id: games-settings
title: Games Settings
sidebar_label: Games Settings
---
# Game Settings

### Overview
The Overwolf platform gives the user the ability to control permission settings for auto-launching apps and the ability to disable the overlay per installed game that Overwolf detects.

The platform informs the user in advance about major changes in those settings through on-boarding messages and permission notifications system.

### Key reasons for allowing users to change those settings:

* Being less intrusive
* Being more informative/clear about changes that happen
* Giving the user (better) tools to optimize his gaming experience with Overwolf

### Your goals should be:

* Inform users about expected app behavior or changes in it in advance
* Let them manage the apps and platform basic behavior – Activity and launch

### Key solution components

* Improved on-boarding process that includes reference to the bundled content and its effect on seeing Overwolf in-game
* Settings page in which the user can control key settings of the platform, game and apps
* Permissions messages when changes are due

### Terminology
* **Games Settings** – The Library\Games section of the store’s client.
* **Auto Launch** – An app’s ability to launch itself according to internal logic, once activated by the platform.
* **Auto Launch Permission** – Platform’s capability to allow/disallow the activation of an app’s internal logic, in order to allow/disallow the auto launch.
* **Permission** – A system notification following an app install, in case the overlay settings for all game/s that app is for is not enabled (there is at least one disabled overlay on a supported game).
* **Dedicated app** – An app which is intended to be used on a single game, and declared as such in the manifest (e.g. HeroWatch).
* **Multi app** – An app which is intended to be used on a finite number of games, and declared as such in the manifest (e.g. Killer Voices).
* **Global app** – An app which is intended to be used on any game, and declared as such in the manifest (e.g. TeamSpeak)
* **Games Settings API** – The API by which an app may query for the status of Overlay and Auto Launch Permission settings, per game.
* **Overlay** – The ability to inject/display Overwolf components (including apps) in-game.

### Overwolf settings explained
* When the overlay of a game is disabled, it means that apps and Overwolf itself cannot be displayed inside this game.
* Apps may, or may not, have an Auto Launch capability.
  * This has to be stated in the manifest.
  * Auto Launch Permission per app is the platform’s way to allow (if checked) or disallow (if unchecked) an app to auto launch in-game.
  * A user may launch the app manually from the dock, desktop or any other way regardless of the permission state.
  * Apps without auto launch capability don’t have a permission checkbox.

### Using API
* Every app can use the [Games Settings API](https://overwolf.github.io/docs/api/overwolf-settings-games) (aka “API”) to query PER GAME for the status of:
* **Overlay Settings** – enabled/disabled
   * [getOverlayEnabled()](../docs/api/overwolf-settings-games#getoverlayenabledgameclassid-callback)
 
* **Auto Launch Permission** - checked/unchecked 
  * [getAutoLaunchEnabled()](../docs/api/overwolf-settings-games#getautolaunchenabledgameclassid-callback)
  
 ### Bring more value
* An app may, and should, inform its users in the following cases:
  * Overlay for the supported game is disabled – user will not be able to use the app in-game.
  * Auto Launch Permission is unchecked – app will NOT auto launch when game begins (or when supposed to), but may be manually launched.
  * Additionally – in some games and some apps, late manual launch may result with lack of information/functionality. This can be told to user as well.

* In case of a Multi/Global app, it is important to inform user in which game/s the settings prevent normal usage of the app, as there may be more than one game in which it happens.

* When informing the users about the cases above, it is important to offer a recovery option – call to action – so a link or a button to launch the Games Settings can be placed in a prime location.
  *Apps cannot change the settings through the API by themselves. It has to be a user opt-in action.

   
![Herowatch](assets/herowatch-case-study.jpg)
