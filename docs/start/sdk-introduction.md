---
id: sdk-introduction
title: Overwolf SDK Introduction
sidebar_label: SDK Introduction
---

Overwolf has an SDK that unlocks new kinds of in-game app development.

The documents listed in the left-hand side navigation bar have all the information you need to create apps using Overwolf’s diverse [APIs](../api/overwolf-api-overview).

## Whitelist you as a developer

Only whitelisted Overwolf developers allows to load or install apps not directly from the Overwolf store. If you are not whitelisted you will not be able to run or install such an apps.

## Overwolf app architecture

An Overwolf app has three main parts:

1. A manifest file (manifest.json), containing the properties of the app. More info [here](#manifest-file).
2. HTML / javascript source files. More info [here](#html-js-source-files).
3. Visuals and images associated with the app (icons and buttons for example). More info [here](#assets).

:::important
Note that **only JS frameworks are supported** (vue.js, angular.js, react, backbone.js, etc.) but not full-blown desktop application solutions such as NW.js, electron.js, AppJS, etc.
:::

Note that To build Overwolf apps, you first need to download the Overwolf client.
You can find the latest version [Here](https://download.overwolf.com/install/Download?Name=Game+Summary&ExtensionId=flkgdpkkjcoapbgmgpidhepajgkhckpgpibmlclb&Channel=developers).

### Manifest file

The manifest file is responsible for describing the different aspects of your app. This is a mandatory file for all apps and has to be present in the root folder for your app to function.

You can read the [Manifest.json](../api/manifest-json) section to learn about additional features you can use to make your app even more awesome.

An example of the most basic manifest file:

```json
{
	"manifest_version":1,
	"type":"WebApp",
	"meta":{
		"name":"Demo App",
		"version":"1.0.0",
		"minimum-overwolf-version":"0.77.10",
		"author":"Developer Name",
		"icon":"IconMouseOver.png",
        "icon_gray":"IconMouseNormal.png",
        "launcher_icon": "desktop-icon.ico",
		"description":"Demo App"
	},
	"data": {
		"start_window":"MainWindow",
		"windows":{
			"MainWindow":{
					"file":"index.html",
					"transparent": false,
					"resizable": true,
					"use_os_windowing": true,
					"size": {
						"width":700,
						"height":400
						},
					"min_size": {
						"width":400,
						"height":400
					}
				}
		}
	}
}
```


### HTML/JS Source files

You can see that in the above manifest the app contains a single window. The source file of this window is set to the file `index.html`.

A simple example of an HTML  window source file can be something like:

```html
<!DOCTYPE html>
<html>
<body>

<h1>Basic sample app</h1>
<p>This is an Overwolf app window.</p>

</body>
</html>
```

### Assets

You can use images and regular assets like in any other web app, but there are few mandatory assets that every Overwolf app should set - the app's icons.
You can see that in the above manifest all the mandatory icons has been set: [icon](../api/manifest-json#meta-mouse-over), [icon_gray](../api/manifest-json#meta-gray_icon) and [launcher_icon](../api/manifest-json#meta-launcher_icon).

### OPK packge

After you finish to develop your app, you need to pack everything (manifest, source files, assets) into a single Overwolf app installer, called an `OPK` packge.

An OPK package is actually a ZIP package, with an OPK extension instead of ZIP:  To create it, just ZIP all your files, and change the extension from ZIP to OPK.  

You can double click to install an OPK package.

Note, that only [whitelisted](#whitelist-you-as-a-developer) developers can install OPK that not downloaded from the store.

## Safety & Security

We work hard to ensure developers don’t mess around. A few measures help us with that:

1. Each app goes through a review process.
2. Each app is hosted in its own web browser, and each web browser runs in a separate process.
3. Each app is being run from a different virtual directory.

These measures support security, separation and encapsulation: An app does not have access to the user’s local files, an app can’t interfere with other apps and if an app crashes or breaks, it doesn’t affect the rest of the system.

## API

You can do some great stuff with web technologies, we know that. To help you take your app up a notch, Overwolf provides a JavaScript API which opens up enable different functions that relate to the game played by the user.

For example, getting in-game events that happen during play (kill, death,etc.),  taking a screenshot of the game, getting the current game name, changing the window size, location, transparency and more.. We are constantly developing new tools and features that you can use to build your dream app.

## Overwolf Plugins

You can add even more features to your app by using one of our [plugins](../topics/plugins-overview), like the [simple I/O plugin](../topics/simple-io-plugin) for reading files from the local disk, or even creating your own plugin: 

You can leverage existing C/C++/C# code, wrap it inside an Overwolf Plugin DLL file and interact with it via your Overwolf app.

For more details, you can review the [Overwolf Plugins](../topics/plugins-overview) section.

## Real world sample app

To learn how to build an app that actually pulls in-game events, pops notifications, displays in-game overlays and more - please continue to study our official [sample app showcasing](sample-app-overview) what you can do and how.

