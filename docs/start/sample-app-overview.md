---
id: sample-app-overview
title: Overwolf sample app
sidebar_label: The Basics
---

In this article, we'll use an example in order to learn how to build Overwolf apps that respond to real time game events and display content in an overlay while playing. If you are new to the concept of Overwolf apps, this is a great place to get started, and you can use it as a base for your own project.

The sample app's functionality is pretty straightforward: It auto-launches when the user launches Fortnite, just like any other Fortnite app, and reads all real time game events as you play. To demonstrate overlay features, the sample app prints all in-game event data collected into an overlay-based component.

The sample app is built with JS code and TypeScript. An official Vue, React, and Angular version will be added soon. Until then, check our [community snippets](../topics/snippets) page for an unofficial Vue version and other code samples, like React boilerplate for Overwolf apps and more.

## Sample App Functionality

For demonstration purposes, the sample app is configured for [Fortnite](https://www.epicgames.com/fortnite/en-US/download). It loads when Fortnite starts and reads Fortnite in-game events. You can easily customize this example to fit other games.

The basic functions our sample app demonstrates:

* Automatically launch when the game is loaded.

* After registering to the overwolf.games.events API, the app can receive real time events from the game.

* Identify specific events and respond as defined.

* Define a custom hotkey to be used in-game.

* Interact between app windows.

* Background controller that manages data transfers.

## Setting up

In order to run the app, you must first complete several steps.

### 1. Install Overwolf Client

Download and install the [Overwolf desktop client](https://download.overwolf.com/install/Download).

### 2. Install NodeJS

Download and install [NodeJS](https://nodejs.org/).  

After installing, run the following commands in your favorite IDE terminal ([Visual Studio Code](https://code.visualstudio.com/) is free and easy to use)

```js
node -v //returns your node version, if installed
npm -v  //returns your npm version, if installed
```

If they run successfully, proceed to the next steps.

### 3. Download the source code

[This repository](https://github.com/overwolf/sample-app/tree/master/ts) contains the Overwolf sample app.  
Download the app's source code from the repository as a zip file, and extract it to a new folder on your machine.

### 4. Build the app

In your terminal, run the following commands:

```js
cd ts //the path to your extracted 'ts' folder here
npm install //install all modules listed as dependencies in package.json
npm run build //create a "dist" folder with the compiled components
```

### 5. Install the app as "unpacked extension"

Usually, all the apps in the Overwolf app store are OPK packages that can be installed with a double-click.
Unlike that, while you are developing an app, you want to load the unpacked code, change it, and test it regularly.  

For this reason, in addition to the OPK installation, you can load the app as "unpacked extension":  
(Note that to do that you have to **[whitelist](sdk-introduction#whitelist-as-a-developer)** your OW username as a developer).

* Open the Overwolf desktop client settings (by right-clicking the client and selecting "Packages"  
  Or by clicking on the wrench icon in the dock and going to the "About" tab => "Development Options").

* Click on "Development options".

* In the opened window, click on "Load unpacked extension" and select the extracted 'ts' folder.  
  This will add the app to your Overwolf dock.  
  
* **Make sure you are logged in to the OW client**. Otherwise, you will get an "Unauthorized App" error message. (Click on the "Appstore" icon in the OW dock to login to the OW client).

* Click on the app's icon in your OW dock to run the app.

::: important
Each app has a unique id (UID) that is generated using the "name" and "author" strings. Once an app is published on the Appstore, its UID can't be changed.
The same goes for the sample app, so make sure not to edit the author or app name in the manifest. It will prevent loading the app as an unpacked app. 
:::

## Screenshots

This is how the sample app's main window looks like: a desktop window disaplying some textual information.

![alt-text](assets/sample-app/desktop-window.png)

The real action will take place in the in-game window - once you launch Fortnite, the desktop window will be replaced with this in-game window:

![alt-text](assets/sample-app/in-game-window.png)

This is the injected in-game window overlayed on your game screen.  The window displays game events, collected data, and a sample advertisement for monetization.

When you hit the close button, the app warns you if you want to close it or just minimize it:

![alt-text](assets/sample-app/notification-window.png)

The sample app contains other reusable code like a settings button, FAQ button, hotkeys and other best practices that we implemented and you can use in your apps.
