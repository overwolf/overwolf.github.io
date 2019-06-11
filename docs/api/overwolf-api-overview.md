---
id: overwolf-api-overview
title: Overwolf API Overview
sidebar_label: Overview
---

The main entry point for all of Overwolf's APIs.\
This class provides access to global components that allow interaction with the various Overwolf features.

## API's Reference

* [`overwolf.benchmarking`](#benchmarking)
* [`overwolf.extensions`](#extensions)
* [`overwolf.io`](#io)
* [`overwolf.log`](#log)
* [`overwolf.streaming`](#streaming)
* [`overwolf.profile`](#profile)
* [`overwolf.tobii`](#tobii)
* [`overwolf.utils`](#utils)
* [`overwolf.os`](#os)
* [`overwolf.games`](#games)
* [`overwolf.games.events`](#events)
* [`overwolf.logitech`](#logitech)
* [`overwolf.media`](#media)
* [`overwolf.settings`](#settings)
* [`overwolf.social`](#social)
* [`overwolf.web`](#web)
* [`overwolf.windows`](#windows)

<a name='benchmarking'>
## [overwolf.benchmarking](api/overwolf-benchmarking.md)

> Use the overwolf.benchmarking API to query system stats and benchmarks.

Common use cases:
* Get hardware information
* Get FPS information

<a name='extensions'>
## [overwolf.extensions](api/overwolf-extensions.md)

> Use the overwolf.extensions API to control and retrieve details on a specific Overwolf app (extension).

Common use cases:
* Launch another app
* Get the running state of an Overwolf app
* Get the manifest.json data of an app

<a name='io'>
## [overwolf.io](api/overwolf-io.md)

> Use the overwolf.io API to check if a certain file exists or to write content to a file.\
For more I/O functionalities, please use our [simple I/O plugin](). 

<a name='log'>
## [overwolf.log](api/overwolf-log.md)

> Use the overwolf.log API to write different messages (info, warning, error, critical, etc.) to the common log.

<a name='streaming'>
## [overwolf.streaming](api/overwolf-streaming.md)

> Use the overwolf.streaming API to capture a video of the current game, or stream the current game to [Twitch.tv](https://www.twitch.tv/)\
**Permissions required: Streaming.**

<a name='profile'>
## [overwolf.profile](api/overwolf-profile.md)

> Use the overwolf.profile API to get Overwolf information for the current user of the app (e.g user name, user log-in event, etc.).\
**Permissions required: profile.**

<a name='tobii'>
## [overwolf.tobii](api/overwolf-tobii.md)

> Provides an API to Overwolf Tobii.

<a name='utils'>
## [overwolf.utils](api/overwolf-utils.md)

> Use the overwolf.utils API to get the user's system information, send keystrokes to the game, open URL in default browser and more.

Common use cases:
* Getting a string that is currently placed on the clipboard
* Getting the user's system information (OS, monitors, CPU, GPU, input devices and more)
* Opening a URL in a browser
* Send keystrokes to the running game

<a name='os'>
## [overwolf.os](api/overwolf-os.md)

> Use the overwolf.os APIfor Operating System related functionalities.

<a name='games'>
## [overwolf.games](api/overwolf-games.md)

> Use the overwolf.games API to query system stats and benchmarks.

Common use cases:
* Get hardware information
* Get FPS information

<a name='events'>
## [overwolf.games.events](api/overwolf-games-events.md)

> Use the overwolf.games.events API to be notified when something interesting happens while playing a certain games:
 (e.g. a hero killed someone, someone killed the gamer's hero, etc.)


<a name='logitech'>
## [overwolf.logitech](api/overwolf-logitech.md)

> Provides interface for Logitech hardware such as Logitech ARX and Logitech LED keyboards.

Common use cases:
* Light the user's LED keyboard when an interesting event has happened in the game (by using the overwolf.game.events API)

<a name='media'>
## [overwolf.media](api/overwolf-media.md)

> Use the overwolf.media API to capture a screenshot or create a GIF of the currently running game.
* Use the [overwolf.media.audio](api/overwolf-media-audio.md) API to play an audio file.
* Use the [overwolf.media.replays](api/overwolf-media-replays.md) API to capture a short video replay of the currently running game.
* Use the [overwolf.media.videos](api/overwolf-media-videos.md) API to create video composition, delete video files, and get details of video files that were created by the app.

Permissions required: Media.

<a name='settings'>
## [overwolf.settings](api/overwolf-settings.md)

> Use the overwolf.settings API to view and modify one of the following Overwolf settings properties:
* Hotkeys - register a function for a given hotkey, or retrieve an existing hotkey key combination
* Retrieve the current Overwolf user language
* Video (i.e., folder location, capture settings, FPS settings, etc.)

<a name='social'>
## [overwolf.social](api/overwolf-social.md)

> Provides access to the different social providers we support.
* [overwolf.social.youtube](api/overwolf-social-youtube.md) Provides access to the YouTube social provider.
* [overwolf.social.dicord](api/overwolf-social-discord.md) Provides access to the Dicord social provider.
* [overwolf.social.gfycat](api/overwolf-social-gfycat.md) Provides access to the Gfycat social provider.
* [overwolf.social.twitter](api/overwolf-social-twitter.md) Provides access to the Twitter social provider.


<a name='web'>
## [overwolf.web](api/overwolf-web.md)

> Use the overwolf.web API to open a local HTTP web-server.

<a name='windows'>
## [overwolf.windows](api/overwolf-windows.md)

> Use the overwolf.windows API to to create, modify or interact with your app's windows.

Common use cases:
* Open a new app window.
* Change window location or size
* Getting information about a specific app window - window id, name, width, height, location and more.
* Minimize or maximize a window
* Communicate between windows


