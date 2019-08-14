---
id: how-to-use-plugins-in-your-app
title: How to Use Plugins In Your App
sidebar_label: How to Use Plugins In Apps
---


To use an existing plugin in your app, follow these steps:

1. Place the plugin’s DLL file(s) inside your app’s directory (and inside your app’s opk file when you deploy it).

2. Make sure the DLL is "Unblocked" – When you download a DLL file from a browser, Windows marks it as unsafe. Please make sure to check the "Unblock" box in the DLL's file properties.

![alt-text](assets/unblock_dll.jpg)

3. Declare the plugin inside your manifest.json under `data.extra-objects` property.
Here’s an example:

```json
"data": {
"extra-objects": {
  "simple-io-plugin": {
    "file": "files/plugins/simple-io-plugin.dll",
    "class": "overwolf.plugins.SimpleIOPlugin"
    }
  }
}
```

This tells Overwolf that your app contains a plugin named: `simple-io-plugin` that resides inside the file: `files/plugins/simple-io-plugin.dll` whose .NET class name is: `overwolf.plugins.SimpleIOPlugin.`

4. Inside your app's Javascript code, create an instance of the plugin:

```js
var _plugin = null;
overwolf.extensions.current.getExtraObject(“simple-io-plugin”, (result) => {
  if (result.status === “success”) {
    _plugin = result.object;
  }
})
```

Now you can call on the plugin’s functions/events/properties directly.   Take a look at our [sample app](https://github.com/overwolf/sample-app) on GitHub for an example of using a plugin. The sample app uses a generic [helper class](https://github.com/overwolf/overwolf-plugins/blob/master/sampleapp/overwolfplugin.js) for initializing the plugin – feel free to use it or modify it in your own app.
