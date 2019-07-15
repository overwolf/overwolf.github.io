---
id: overwolf-api-overview
title: Overwolf API Overview
sidebar_label: Overview
---

The main entry point for all of Overwolf's APIs.
This class provides access to global components that allow interaction with the various Overwolf features.

## API's Reference

* [overwolf.benchmarking](#overwolfbenchmarking-docs-api-overwolf-benchmarking)
* [overwolf.extensions](#overwolfextensions-docs-api-overwolf-extensions)
* [overwolf.io](#overwolfio-docs-api-overwolf-io)
* [overwolf.log](#overwolflog-docs-api-overwolf-log)
* [overwolf.streaming](#overwolfstreaming-docs-api-overwolf-streaming)
* [overwolf.profile](#overwolfprofile-docs-api-overwolf-profile)
* [overwolf.tobii](#overwolftobii-docs-api-overwolf-tobii)
* [overwolf.utils](#overwolfutils-docs-api-overwolf-utils)
* [overwolf.os](#overwolfos-docs-api-overwolf-os)
* [overwolf.games](#overwolfgames-docs-api-overwolf-games)
* [overwolf.games.events](#overwolfgamesevents-docs-api-overwolf-games-events)
* [overwolf.logitech](#overwolflogitech-docs-api-overwolf-logitech)
* [overwolf.media](#overwolfmedia-docs-api-overwolf-media)
* [overwolf.settings](#overwolfsettings-docs-api-overwolf-settings)
* [overwolf.social](#overwolfsocial-docs-api-overwolf-social)
* [overwolf.web](#overwolfweb-docs-api-overwolf-web)
* [overwolf.windows](#overwolfwindows-docs-api-overwolf-windows)

## [overwolf.benchmarking](api/overwolf-benchmarking.md)

> Use the overwolf.benchmarking API to query system stats and benchmarks.

Common use cases:

* Get hardware information
* Get FPS information

## [overwolf.extensions](api/overwolf-extensions.md)

> Use the overwolf.extensions API to control and retrieve details on a specific Overwolf app (extension).

Common use cases:

* Launch another app
* Get the running state of an Overwolf app
* Get the manifest.json data of an app

## [overwolf.io](api/overwolf-io.md)

> Use the overwolf.io API to check if a certain file exists or to write content to a file.\
For more I/O functionalities, please use our [simple I/O plugin](../topics/simple-io-plugin).

## [overwolf.log](api/overwolf-log.md)

> Use the overwolf.log API to write different messages (info, warning, error, critical, etc.) to the common log.

## [overwolf.streaming](api/overwolf-streaming.md)

Permissions required: Streaming

> Use the overwolf.streaming API to capture a video of the current game, or stream the current game to [Twitch.tv](https://www.twitch.tv/)

## [overwolf.profile](api/overwolf-profile.md)

Permissions required: profile

> Use the overwolf.profile API to get Overwolf information for the current user of the app (e.g user name, user log-in event, etc.).\

## [overwolf.tobii](api/overwolf-tobii.md)

> Provides an API to Overwolf Tobii.

## [overwolf.utils](api/overwolf-utils.md)

> Use the overwolf.utils API to get the user's system information, send keystrokes to the game, open URL in default browser and more.

Common use cases:

* Getting a string that is currently placed on the clipboard
* Getting the user's system information (OS, monitors, CPU, GPU, input devices and more)
* Opening a URL in a browser
* Send keystrokes to the running game

## [overwolf.os](api/overwolf-os.md)

> Use the overwolf.os APIfor Operating System related functionalities.

## [overwolf.games](api/overwolf-games.md)

> Use the overwolf.games API to query system stats and benchmarks.

Common use cases:

* Get hardware information
* Get FPS information

## [overwolf.games.events](api/overwolf-games-events.md)

> Use the overwolf.games.events API to be notified when something interesting happens while playing a certain games:

 (e.g. a hero killed someone, someone killed the gamer's hero, etc.)

## [overwolf.logitech](api/overwolf-logitech.md)

> Provides interface for Logitech hardware such as Logitech ARX and Logitech LED keyboards.

Common use cases:

* Light the user's LED keyboard when an interesting event has happened in the game (by using the overwolf.game.events API)

## [overwolf.media](api/overwolf-media.md)

Permissions required: Media

> Use the overwolf.media API to capture a screenshot or create a GIF of the currently running game.

* Use the [overwolf.media.audio](api/overwolf-media-audio.md) API to play an audio file.
* Use the [overwolf.media.replays](api/overwolf-media-replays.md) API to capture a short video replay of the currently running game.
* Use the [overwolf.media.videos](api/overwolf-media-videos.md) API to create video composition, delete video files, and get details of video files that were created by the app.

## [overwolf.settings](api/overwolf-settings.md)

> Use the overwolf.settings API to view and modify one of the following Overwolf settings properties:

* Hotkeys - register a function for a given hotkey, or retrieve an existing hotkey key combination
* Retrieve the current Overwolf user language
* Video (i.e., folder location, capture settings, FPS settings, etc.)

## [overwolf.social](api/overwolf-social.md)

> Provides access to the different social providers we support.

* [overwolf.social.youtube](api/overwolf-social-youtube.md) Provides access to the YouTube social provider.
* [overwolf.social.dicord](api/overwolf-social-discord.md) Provides access to the Dicord social provider.
* [overwolf.social.gfycat](api/overwolf-social-gfycat.md) Provides access to the Gfycat social provider.
* [overwolf.social.twitter](api/overwolf-social-twitter.md) Provides access to the Twitter social provider.

## [overwolf.web](api/overwolf-web.md)

> Use the overwolf.web API to open a local HTTP web-server.

## [overwolf.windows](api/overwolf-windows.md)

> Use the overwolf.windows API to to create, modify or interact with your app's windows.

Common use cases:

* Open a new app window.
* Change window location or size
* Getting information about a specific app window - window id, name, width, height, location and more.
* Minimize or maximize a window
* Communicate between windows
