---
id: overwolf-api-overview
title: Overwolf API Overview
sidebar_label: Overview
---

Overwolf APIs are global components that allow interaction with various Overwolf features, third party services and server-side queries.

## API's Reference

* [overwolf.benchmarking](#overwolfbenchmarking-docs-api-overwolf-benchmarking)
* [overwolf.egs](#overwolfegs-docs-api-overwolf-egs)
* [overwolf.extensions](#overwolfextensions-docs-api-overwolf-extensions)
* [overwolf.games](#overwolfgames-docs-api-overwolf-games)
* [overwolf.games.events](#overwolfgamesevents-docs-api-overwolf-games-events)
* [overwolf.io](#overwolfio-docs-api-overwolf-io)
* [overwolf.log](#overwolflog-docs-api-overwolf-log)
* [overwolf.logitech](#overwolflogitech-docs-api-overwolf-logitech)
* [overwolf.media](#overwolfmedia-docs-api-overwolf-media)
* [overwolf.os](#overwolfos-docs-api-overwolf-os)
* [overwolf.profile](#overwolfprofile-docs-api-overwolf-profile)
* [overwolf.profile.subscription](#overwolfprofilesubscription-docs-api-overwolf-profilesubscription)
* [overwolf.settings](#overwolfsettings-docs-api-overwolf-settings)
* [overwolf.social](#overwolfsocial-docs-api-overwolf-social)
* [overwolf.streaming](#overwolfstreaming-docs-api-overwolf-streaming)
* [overwolf.tobii](#overwolftobii-docs-api-overwolf-tobii)
* [overwolf.utils](#overwolfutils-docs-api-overwolf-utils)
* [overwolf.web](#overwolfweb-docs-api-overwolf-web)
* [overwolf.windows](#overwolfwindows-docs-api-overwolf-windows)

## [overwolf.benchmarking](api/overwolf-benchmarking.md)

> Use the overwolf.benchmarking API to query system stats and benchmarks.

Common use cases:

* Get hardware information
* Get FPS performance information

## [overwolf.egs](api/overwolf-egs.md)

> Use the overwolf.egs API if you'd like to show your own Game Summary information for the last game session within the Overwolf Game Summary endgame screen.

## [overwolf.extensions](api/overwolf-extensions.md)

> Use the overwolf.extensions API to operate or retrieve details on a specific Overwolf app.

Common use cases:

* Launch another app
* Get the running state of an Overwolf app
* Get the manifest.json data of an app

## [overwolf.games](api/overwolf-games.md)

> Use the overwolf.games API to receive basic game information.

Common use cases:

* Your app wants to know whether an Overwolf supported game was launched or closed
* Get the currently running game's name, Overwolf ID, screen resolution and more information

## [overwolf.games.events](api/overwolf-games-events.md)

> Use the overwolf.games.events API to get notified when certain interesting events happens while playing in a certain game. This could be a death, a kill, an item purchase or anything else we're able to log from that game (see the Available Game Events list for more ideas).

## [overwolf.io](api/overwolf-io.md)

> Use the overwolf.io API to check whether a certain file exists or in order to write content in a file. For more I/O functionalities, please use our [simple I/O plugin](../topics/simple-io-plugin).

## [overwolf.log](api/overwolf-log.md)

> Use the overwolf.log API to write different messages including info, warnings, errors, critical errors and others to the common log.

## [overwolf.logitech](api/overwolf-logitech.md)

> Provides an interface for Logitech hardware such as Logitech ARX and Logitech LED keyboards.

Common use cases:

* Light the user's LED keyboard in a certain pattern when an interesting event has happened in-game by using the overwolf.game.events API and the overwolf.logitech API together.

## [overwolf.media](api/overwolf-media.md)

> Use the overwolf.media API to capture a screenshot or create a GIF of the game currently played.

* Use the [overwolf.media.audio](api/overwolf-media-audio.md) API to play an audio file.
* Use the [overwolf.media.replays](api/overwolf-media-replays.md) API to capture a short video replay of the game currently played.
* Use the [overwolf.media.videos](api/overwolf-media-videos.md) API to create a video composition, delete video files, or get the information of video files that were created by this app.

## [overwolf.os](api/overwolf-os.md)

> Use the overwolf.os API for Operating System related functions.


## [overwolf.profile](api/overwolf-profile.md)

> Use the overwolf.profile API to get Overwolf account information for the current user, this includes user name, log-in events and more.

## [overwolf.profile.subscriptions](api/overwolf-profile.subscriptions.md)

> Provides functions and events to help with user profile subscription management.


## [overwolf.settings](api/overwolf-settings.md)

> Use the overwolf.settings API to view and modify one of the following Overwolf preferences:

* Set hotkeys, register a function for a hotkey, or retrieve an existing hotkey key combination
* Retrieve the currently selected Overwolf client language
* Video recording location, capture settings, quality settings etc.

## [overwolf.social](api/overwolf-social.md)

> Provides access to social networks we support:

* [overwolf.social.youtube](api/overwolf-social-youtube.md) Provides access to the YouTube social provider.
* [overwolf.social.discord](api/overwolf-social-discord.md) Provides access to the Discord social provider.
* [overwolf.social.gfycat](api/overwolf-social-gfycat.md) Provides access to the Gfycat social provider.
* [overwolf.social.twitter](api/overwolf-social-twitter.md) Provides access to the Twitter social provider.
* [overwolf.social.reddit](api/overwolf-social-reddit.md) Provides access to the Reddit social provider.

## [overwolf.streaming](api/overwolf-streaming.md)

> Use the overwolf.streaming API to capture a video of the current game, or stream the current game directly to [Twitch.tv](https://www.twitch.tv/)

## [overwolf.tobii](api/overwolf-tobii.md)

> Provides an API for Overwolf Tobii.

## [overwolf.utils](api/overwolf-utils.md)

> Use the overwolf.utils API to get the user's system information, send keystrokes to the game, open URLs in default browser and more.

Common use cases:

* Getting a string that is currently placed in the clipboard
* Getting the user's system information including OS, monitors, CPU, GPU, input devices etc.
* Opening a URL in a new browser window
* Sending keystrokes to the running game


## [overwolf.web](api/overwolf-web.md)

> Use the overwolf.web API to open a local HTTP web-server.

## [overwolf.windows](api/overwolf-windows.md)

> Use the overwolf.windows API to to create, modify or interact with your app's windows.

Common use cases:

* Open a new app window
* Change window location or size
* Get information about a specific app window - id, name, width, height, location and more.
* Minimize or maximize a window
* Facilitate communications between windows
