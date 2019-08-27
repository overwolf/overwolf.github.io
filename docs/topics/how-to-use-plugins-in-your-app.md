---
id: how-to-use-plugins-in-your-app
title: Implementing Plug-ins
sidebar_label: Plug-in Implementation
---


To implement an existing plugin for use in your app, follow these steps:

1. Place the plugin’s DLL file or files in your app’s directory as well as inside your OPK when you create it.

2. Make sure the DLL is "Unblocked". Windows automatically marks downloaded DLLs as unsafe and you will have to go into file properties and check the 'Unblock' option there.

![alt-text](assets/unblock_dll.jpg)

3. Declare the plugin in your manifest.json under the `data.extra-objects` property. For example:

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

This tells Overwolf that your app contains a plugin named: `simple-io-plugin` which can be found inside the file: `files/plugins/simple-io-plugin.dll` with the .NET class name `overwolf.plugins.SimpleIOPlugin.`

4. Create an instance of this plug-in in your app's Javascript code:

```js
var _plugin = null;
overwolf.extensions.current.getExtraObject(“simple-io-plugin”, (result) => {
  if (result.status === “success”) {
    _plugin = result.object;
  }
})
```

Now you can call on the plugin’s functions, events or properties directly. Take a look at our [sample app](https://github.com/overwolf/sample-app) on GitHub for an example of using plugins, in this case a generic [helper class](https://github.com/overwolf/overwolf-plugins/blob/master/sampleapp/overwolfplugin.js) for initializing the plugin – feel free to use or modify it in your own app as needed.
