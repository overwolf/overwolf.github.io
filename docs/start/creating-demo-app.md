---
id: creating-demo-app
title: Creating the Main App Window
sidebar_label: Creating the Main App Window
---

To help you get a feel of Overwolf's API, here's an explanation on how to create a simple app that displays the name of the game you are currently playing.

We`ll describe two different methods, one with the demo app as a base, and another working from scratch.
It is best to review each method, so you can better understand the development process.

For both methods, you should download the latest [Developers version of Overwolf](https://download.overwolf.com/install/Download?Name=Game+Summary&ExtensionId=flkgdpkkjcoapbgmgpidhepajgkhckpgpibmlclb&Channel=developers).

## create demo app from scrarch

Learn how to develop apps in just few steps.

1. Create a folder, name it whatever you like.

2. Create a file named "manifest.json" in that folder.

3. Copy and paste the code from the [Manifest.json](../api/manifest-json) section. If you scroll down to the technical explanation about the manifest.json, you can read about additional features that you can use to make your app even more awesome.

4. Provide an icon for your app, and place it into the folder you created. Remember to reference it in the "icon" field of the manifest.json.

```js
"meta":{
        "name":"Demo_App",
        "version":"1.0.0",
        "minimum-overwolf-version":"0.77.10",
        "author":"Developer_Name",
        "icon":"IconMouseOver.png",
        "icon_gray":"IconMouseNormal.png",
        "description":"Demo App"
},
```

5. Create an `index.html` file in that folder. You can create a sub-folder, and place any of the resources your app needs in there.  Refer to this file in the "file" field of the manifest.json.

```js
"MainWindow":{
        "file":"Files/index.html",
        "transparent":"true",
        "resizable":"true",
        "size":{ "width":"400", "height":"300" },
        "min_size":{ "width":"200", "height":"200" },
        "max_size":{ "width":"600", "height":"800" }
}
```

From here, you can use the standard web development techniques to create, debug, and finish your application (doesn’t matter which way you used to create your app).


## download sample app

To use the sample app as a base, please follow these steps:

[This repository]() contains the Overwolf sample app, that targeted for Fortnite. Why Fortnite? because it's popular and free. Anyway, you can easily customize this sample to fit any other supported game.

The apps demonstrate our best practices like background controller, custom hotkey, ad display and much more. You can read all the details in the repo readme.
