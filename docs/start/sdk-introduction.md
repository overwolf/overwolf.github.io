---
id: sdk-introduction
title: Overwolf SDK Inroduction
sidebar_label: SDK Inroduction
---

Overwolf provides a SDK that allows you to build amazing gaming-related apps.

The documents listed in the left navigation provide details about how to create Overwolf apps using Overwolf’s diverse [APIs](../api/overwolf-api-overview).

## Overwolf app fundamentals

### Architecture

An app consists of three main parts:

1. HTML / javascript source files.
2. A manifest file (manifest.json), containing the various properties of the app.
3. The images that are associated with the app (buttons for example).

Note that only **JS frameworks are supported** (vue.js, angular.js, react, backbone.js, etc.) and not full-blown desktop application solutions (NW.js, electron.js, AppJS, etc.)

### Security

We work hard to make sure that developers don’t mess around. A few measures help us with that:

1. Each app goes through a review process.
2. Each app is hosted in its own web browser, and each web browser runs in a separate process.
3. Each app is being run from a different virtual directory.

These three measures enable security (an app does not have access to the user’s local files), separation (an app can’t interfere with other apps) and encapsulation (if an app crashes or breaks, it doesn’t affect the rest of the system).

### API

You can do some great stuff with web technologies, we know that. To help you kick your app up a notch, Overwolf provides a JavaScript API to enable different functions that relate to the game that is being played by the user, or the operating system.

For example, getting interesting events that happen in the game (kill, death,etc.),  taking a screenshot of the game, getting the current game name, changing the window size, location, transparency and more.. coding just got real.

### Overwolf Plugins

You can add more features to your app by using one of our plugins, like the [simple I/O plugin](../topics/simple-io-plugin) (for reading files from the local disk) or by creating your own plugin:

You can leverage your existing C/C++/C# code, wrap it inside an Overwolf Plugin DLL file and communicate with it via your Overwolf app.

For more details, please go to the [Overwolf Plugins](../topics/plugins-overview) section.
