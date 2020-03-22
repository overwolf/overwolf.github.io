---
id: sample-app-components
title: Sample app components
sidebar_label: Components
---

You can download the latest version from our GitHub [here](https://github.com/overwolf/sample-app/tree/master/ts), and read how to setup it [here](sample-app-overview).

You will find several files and folders in the sample app repository:

<pre>
  +---- css
  +---- img
  +---- windows
  +---- icons
  +---- odk-ts
  +---- types
  +---- manifest.json
  +---- consts.ts
  +---- package.json
  +---- tsconfig.json
  +---- webpack.config.js
</pre>

## manifest.json

The [manifest](../api/manifest-json) file is responsible for describing the different aspects of your app. This is a mandatory file for all apps and has to be present in the root folder for your app to function.

In our manifest.json file, we have [{start_window:background}](../api/manifest-json#start_window) defined.  
This sets our [background](#windows-background) window as the app's starting point.

All of this app's windows' properties can be found under the [windows](../api/manifest-json#window-data) object.

## windows

Each app window is based on an HTML file. This folder contains these files for each of your pages.

### windows/background

The background folder holds the background window, which serves as the application's starting point and window orchestrator.  
The window's `run()` method detects whether a Fortnite game is currently running, decides which window to launch accordingly, and listens for changes.

The background window has no visual representation, which can be gleaned from the empty background.html file or from the [{is_background_page:true}](../api/manifest-json#is_background_page) property the background window has in our manifest.json.

### windows/in_game

The in_game window listens to [Info Events](../api/overwolf-games-events#oninfoupdates2) and [Game Events](../api/overwolf-games-events#onnewevents) emitted by the game and
displays an ad. Furthermore, it defines the behavior for the show/hide hotkey.

Read all about hotkeys [here](../topics/hotkeys-best-practices).

### windows/desktop

This window serves a purely visual purpose and has no special logic.

### windows/AppWindow

This is a base class that holds the logic shared by the in_game and desktop windows, such as minimize/close, drag, etc.

## odk-ts and types

Currently, the Overwolf SDK is written in javascript. These folders hold typescript wrappers and type definitions for the SDK methods used in this app.

We are constantly working on improving our SDK and both the odk-ts and the types definition file will be released as proper packages in the future.

## icons

Mandatory files showing up in the Overwolf dock and other locations:  
Tile.jpg, IconMouseNormal.png, IconMouseOver.png, desktop-icon.ico.

## css and images

All of the visual resources used by the app.
