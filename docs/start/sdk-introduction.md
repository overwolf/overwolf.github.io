---
id: sdk-introduction
title: Overwolf SDK Introduction
sidebar_label: SDK Introduction
---

Overwolf has an SDK that unlocks new kinds of in-game app development.

The documents listed in the left-hand side navigation bar have all the information you need to create apps using Overwolf’s diverse [APIs](../api/overwolf-api-overview).

## Overwolf app fundamentals

### Architecture

An Overwolf app has three main parts:

1. HTML / javascript source files.
2. A manifest file (manifest.json), containing the properties of the app.
3. Visuals and images associated with the app (icons and buttons for example).

:::important
Note that **only JS frameworks are supported** (vue.js, angular.js, react, backbone.js, etc.) but not full-blown desktop application solutions such as NW.js, electron.js, AppJS, etc.
:::

### Safety & Security

We work hard to ensure developers don’t mess around. A few measures help us with that:

1. Each app goes through a review process.
2. Each app is hosted in its own web browser, and each web browser runs in a separate process.
3. Each app is being run from a different virtual directory.

These measures support security, separation and encapsulation: An app does not have access to the user’s local files, an app can’t interfere with other apps and if an app crashes or breaks, it doesn’t affect the rest of the system.

### API

You can do some great stuff with web technologies, we know that. To help you take your app up a notch, Overwolf provides a JavaScript API which opens up enable different functions that relate to the game played by the user.

For example, getting in-game events that happen during play (kill, death,etc.),  taking a screenshot of the game, getting the current game name, changing the window size, location, transparency and more.. We are constantly developing new tools and features that you can use to build your dream app.

### Overwolf Plugins

You can add even more features to your app by using one of our [plugins](../topics/plugins-overview), like the [simple I/O plugin](../topics/simple-io-plugin) for reading files from the local disk, or even creating your own plugin: 

You can leverage existing C/C++/C# code, wrap it inside an Overwolf Plugin DLL file and interact with it via your Overwolf app.

For more details, you can review the [Overwolf Plugins](../topics/plugins-overview) section.
