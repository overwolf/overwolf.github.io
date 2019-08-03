---
id: creating-demo-app
title: Creating a basic one window app
sidebar_label: Build a basic app
---

To help you get a feel of Overwolf's apps, here's an explanation on how to create a simple app that displays the most basic Overwolf app window.

In this example, we will work from scratch, and manually build a fundamental one window app. This window does not listen to game events and not even injected into any game. It just a swift demonstration on how to build a window, and how to pack it as an Overwolf app that can be launched from the Overwold dock.

::: important
To learn how a real world Overwolf apps should look like, continue later to the [sample app guide](sample-app-overview).
:::

## Download the overwolf Client

To run or build Overwolf apps, you first need to download the Overwolf client of course.
Here you can find the latest [Developers version of Overwolf](https://download.overwolf.com/install/Download?Name=Game+Summary&ExtensionId=flkgdpkkjcoapbgmgpidhepajgkhckpgpibmlclb&Channel=developers) Client.

## Create a demo app from scratch

In this example we will learn how to develop a very basic Overwolf app in just few steps.
The source code and files that used in this example can be found in the [app's repository](https://github.com/overwolf/basic-demo-app).

Follow these steps:

1. Create a folder, name it whatever you like.

2. Create a file named "manifest.json" in that folder.

3. Copy and paste the below manifest code snippet into the "manifest.json" file.
You can read in the [Manifest.json](../api/manifest-json) section about additional features that you can use to make your app even more awesome.

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

4. Provide an icons for your app, and place them into the folder you created. Remember to reference it in the "icon" field of the manifest.json.
   For this example you can download the two icons from the [app's repository](https://github.com/overwolf/basic-demo-app).

5. Create an `index.html` file in the main folder and paste the below snippet:  

```html
<!DOCTYPE html>
<html>
<body>

<h1>Basic sample app</h1>
<p>This is a native desktop window that cannot be injectd into the game.</p>

</body>
</html>
```

6. Pack all the files and icons in the folder as an Overwolf app installer A.K.A ["OPK" packge](https://discuss.developers.overwolf.com/t/what-is-an-opk-package/23):  
  just zip everything, name the package whatever you like. After it's done, rename the `ZIP` extension to `OPK` extension.

**Now you have a working Overwolf app installer!**  
You can double click on it, and it will be installed into the Overwolf dock.  

After launch the app from the Overwolf dock, the app window should be displayed:

![alt-text](assets/basic-sample-app.png)

From here, you can use the standard web development techniques to create, debug, and finish your application (doesn’t matter which way you used to create your app).

The source code and files that used in this example can be found in the [app's repository](https://github.com/overwolf/basic-demo-app).

## Real world Sample app

As mentioned, the above app is working, but.. do nothing. To learn how to build an app that implements our best practices with all the typical features like events listening, background controller, notifications, in-game windows, ad display and more - please follow our official [sameple app guide](sample-app-overview).
