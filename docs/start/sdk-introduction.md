---
id: sdk-introduction
title: Overwolf SDK introduction
sidebar_label: SDK Introduction
---

Overwolf's SDK unlocks in-game app development, and the documents listed in the left-hand side navigation bar have all the information you need to create apps using Overwolf’s diverse [APIs](../api/overwolf-api-overview). To get you started, here are some important basics:

## Whitelist as a developer

Only whitelisted Overwolf developer accounts can load or install apps that not available on the Overwolf store, including unreleased beta versions. If you are not whitelisted you will not be able to run or install such apps, which means testing your work in progress will be hard. Therefore, start by [submitting your app proposal](https://overwolf.github.io/docs/start/submit-app-proposal#legal) in order to get whitelisted.

## App architecture

An Overwolf app's code has three main parts:

1. A manifest file (manifest.json), detailing the properties of the app. More info [here](#manifest-file).
2. HTML / javascript source files. More info [here](#htmljs-source-files).
3. Visuals and images such as icons and buttons. More info [here](#assets).

:::important Only JS frameworks are supported
For example vue.js, angular.js, react, backbone.js and similar ones.  
However, full-blown desktop application solutions such as electron.js, AppJS and similar ones are not supported.  
For Vue.JS developers - we strongly advise against using UI libraries like Vuetify, Bueify, etc., as we've seen issues in non-native windows where different controls might not respond to clicks.
:::

If you know what you're doing and are looking for a workaround, find the control's outer element, have it listen to onmousedown, and simulate a click().
To build Overwolf apps, you need to download the Overwolf client.
You can find the latest developer client version [Here](https://download.overwolf.com/install/Download?Channel=developers).

### Manifest file

This mandatory file describes the different aspects of your app, it has to be present in your app's root folder for it to function.

You can read more in the [Manifest.json](../api/manifest-json) section and learn what more you can do to make your app even more awesome.

An example of a basic manifest file:

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


### HTML/JS source files

In the sample manifest above, the app contains a single window. The source file of this window is `index.html`. Here's a sample HTML  window source file that could be referred to in the manifest:

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

You can use images and assets like in any other web app. The only mandatory assets that every Overwolf app needs are icons. For example, in the sample manifest above all mandatory icons have been configured: [icon](../api/manifest-json#meta-mouse-over), [icon_gray](../api/manifest-json#meta-gray_icon) and [launcher_icon](../api/manifest-json#meta-launcher_icon).

### OPK package

After you finish building your app, you need to pack everything including the manifest, source files and assets into a single Overwolf app installer, called an `OPK` package.

An OPK package is actually a ZIP package:  To create it, just ZIP all your files together, then manually change the file extension from ZIP to OPK. Double clicking an OPK will install the package.

We remind you that only [whitelisted](#whitelist-as-a-developer) developers can install OPKs that were not downloaded from the store.

## Safety & Security

Protecting our community of gamers is a top priority, and we work hard to ensure developers don’t mess around. A few measures help us with that:

1. Each app goes through a full review process.
2. Each app is hosted separately in its own web browser, and each web browser runs as a separate process.
3. Each app is being run from a different virtual directory.

These measures support security, separation and encapsulation: An app does not have access to the user’s local files, an app can’t interfere with other apps and if an app crashes or breaks, it doesn’t affect the rest of the system.

## API

You can build some awesome things with web technologies. Our way to make apps even better is using in-game real time information and events to fuel app functions. With [our JavaScript API](../api/overwolf-api-overview) you can unlock features that read and interact with in-game events.

To get some ideas for in-game events you can use - from basics like kills, deaths, victories and similar key events, through taking a screenshot or recording a video of the game, changing window size, analyzing in-game stats to display tips and more.. We are constantly developing new tools and features that you can use to build your dream app, if there's a feature you cannot find, suggest it!

## Overwolf Plugins

You can add even more features to your app by using one of our [plugins](../topics/plugins-overview), like the [simple I/O plugin](../topics/simple-io-plugin) for reading files from the local disk. You can even create your own plugin: 

Use existing C/C++/C# code, wrap it inside an Overwolf Plugin DLL file and interact with it in your Overwolf app.

For more details, you can review the [Overwolf Plugins](../topics/plugins-overview) section.

## Real world sample app

To learn how to build an app that actually pulls in-game events, pops notifications, displays in-game overlays and more - please continue our official [sample app showcasing](sample-app-overview).

