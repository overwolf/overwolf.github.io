---
id: overwolf-api-overview
title: Overwolf API Overview
sidebar_label: Overview
---

Overwolf APIs are global components that allow interaction with various Overwolf features, third party services and server-side queries.

## API's Reference

* [overwolf.benchmarking](#overwolfbenchmarking)
* [overwolf.campaigns](#overwolfcampaigns)
* [overwolf.extensions](#overwolfextensions)
* [overwolf.games](#overwolfgames)
* [overwolf.games.events](#overwolfgamesevents)
* [overwolf.io](#overwolfio)
* [overwolf.log](#overwolflog)
* [overwolf.logitech](#overwolflogitech)
* [overwolf.media](#overwolfmedia)
* [overwolf.os](#overwolfos)
* [overwolf.profile](#overwolfprofile)
* [overwolf.profile.subscriptions](#overwolfprofilesubscriptions)
* [overwolf.settings](#overwolfsettings)
* [overwolf.social](#overwolfsocial)
* [overwolf.streaming](#overwolfstreaming)
* [overwolf.tobii](#overwolftobii)
* [overwolf.utils](#overwolfutils)
* [overwolf.web](#overwolfweb)
* [overwolf.windows](#overwolfwindows)

## overwolf.benchmarking

> Use the [overwolf.benchmarking](overwolf-benchmarking) API to query system stats and benchmarks.

Common use cases:

* Get hardware information.
* Get FPS performance information.

## overwolf.campaigns

> Use the [overwolf.campaigns](overwolf-campaigns-crossapp) API to get info about active campagins.

Common use cases:

* Get info about active campagins.
* Allows crossapp-promotions: One app can promote another app and then get an indication for a successful conversion.

## overwolf.extensions

> Use the [overwolf.extensions](overwolf-extensions) API to operate or retrieve details on a specific Overwolf app.

Common use cases:

* Launch another app.
* Get the running state of an Overwolf app.
* Get the manifest.json data of an app.

## overwolf.games

> Use the [overwolf.games](overwolf-games) API to receive basic game information.

Common use cases:

* Your app wants to know whether an Overwolf supported game was launched or closed
* Get the currently running game's name, Overwolf ID, screen resolution and more information

## overwolf.games.events

> Use the [overwolf.games.events](overwolf-games-events) API to get notified when certain interesting events happens while playing in a certain game. This could be a death, a kill, an item purchase or anything else we're able to log from that game (see the Available Game Events list for more ideas).

## overwolf.io

> Use the [overwolf.io](overwolf-io) API to check whether a certain file exists or in order to write content in a file. For more I/O functionalities, please use our [simple I/O plugin](../topics/simple-io-plugin).

## overwolf.log

> Use the [overwolf.log](overwolf-log) API to write different messages including info, warnings, errors, critical errors and others to the common log.

## overwolf.logitech

> Use the [overwolf.logitech](overwolf-logitech) as an interface for Logitech hardware such as Logitech ARX and Logitech LED keyboards.

Common use cases:

* Light the user's LED keyboard in a certain pattern when an interesting event has happened in-game by using the overwolf.game.events API and the overwolf.logitech API together.

## overwolf.media

> Use the [overwolf.media](overwolf-media) API to capture a screenshot or create a GIF of the game currently played.

* Use the [overwolf.media.audio](overwolf-media-audio) API to play an audio file.
* Use the [overwolf.media.replays](overwolf-media-replays) API to capture a short video replay of the game currently played.
* Use the [overwolf.media.videos](overwolf-media-videos) API to create a video composition, delete video files, or get the information of video files that were created by this app.

## overwolf.os

> Use the [overwolf.os](overwolf-os) API for Operating System related functions.


## overwolf.profile

> Use the [overwolf.profile](overwolf-profile) API to get Overwolf account information for the current user, this includes user name, log-in events and more.

## overwolf.profile.subscriptions

> [overwolf.profile.subscriptions](overwolf-profile-subscriptions) Provides functions and events to help with user profile subscription management.


## overwolf.settings

> Use the [overwolf.settings](overwolf-settings) API to view and modify one of the following Overwolf preferences:

* Set hotkeys, register a function for a hotkey, or retrieve an existing hotkey key combination
* Retrieve the currently selected Overwolf client language
* Video recording location, capture settings, quality settings etc.

## overwolf.social

> [overwolf.social](overwolf-social) provides access to social networks we support:

* [overwolf.social.youtube](overwolf-social-youtube) Provides access to the YouTube social provider.
* [overwolf.social.discord](overwolf-social-discord) Provides access to the Discord social provider.
* [overwolf.social.gfycat](overwolf-social-gfycat) Provides access to the Gfycat social provider.
* [overwolf.social.twitter](overwolf-social-twitter) Provides access to the Twitter social provider.
* [overwolf.social.reddit](overwolf-social-reddit) Provides access to the Reddit social provider.

## overwolf.streaming

> Use the [overwolf.streaming](overwolf-streaming) API to capture a video of the current game, or stream the current game directly to [Twitch.tv](https://www.twitch.tv/)

## overwolf.tobii

> [overwolf.tobii](overwolf-tobii) provides an API for Overwolf Tobii.

## overwolf.utils

> Use the [overwolf.utils](overwolf-utils) API to get the user's system information, send keystrokes to the game, open URLs in default browser and more.

Common use cases:

* Getting a string that is currently placed in the clipboard
* Getting the user's system information including OS, monitors, CPU, GPU, input devices etc.
* Opening a URL in a new browser window
* Sending keystrokes to the running game


## overwolf.web

> Use the [overwolf.web](overwolf-web) API to open a local HTTP web-server.

## overwolf.windows

> Use the [overwolf.windows](overwolf-windows) API to to create, modify or interact with your app's windows.

Common use cases:

* Open a new app window
* Change window location or size
* Get information about a specific app window - id, name, width, height, location and more.
* Minimize or maximize a window
* Facilitate communications between windows
