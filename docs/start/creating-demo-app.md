---
id: creating-demo-app
title: Creating the Main App Window
sidebar_label: Creating the Main App Window
---

To help you get a feel of Overwolf's API, here's an explanation on how to create a simple app that displays the name of the game you are currently playing.

We'll describe two different methods:

* Working [from scratch](#create-demo-app-from-scrarch) and create a fundamental one window app.
  This app not follows our best practices and not even inject the window in-game.  
  It just for a quick demo about the essential components of an Overwolf app.

* Download our [sample app](#download-sample-app) and use it as a base for your app.  
  This example is using our sample app, that uses all the recommended best practices like background controller, in-game window, etc.

**Note** that For both methods, you should download the latest [Developers version of Overwolf](https://download.overwolf.com/install/Download?Name=Game+Summary&ExtensionId=flkgdpkkjcoapbgmgpidhepajgkhckpgpibmlclb&Channel=developers) Client.

## create demo app from scrarch

In this example we will learn how to develop a very basic Overwolf app in just few steps.
The source code and files that used in this example can be found in the [app's repository](https://github.com/overwolf/basic-demo-app).

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

## download sample app

To use the sample app as a base, please follow these steps:

[This repository](https://github.com/overwolf/sample-app) contains the Overwolf sample app, that targeted for Fortnite. Why Fortnite? because it's popular and free. Anyway, you can easily customize this sample to fit any other supported game.

The apps demonstrate our best practices like background controller, custom hotkey, ad display and much more. You can read all the details in the repo readme.
