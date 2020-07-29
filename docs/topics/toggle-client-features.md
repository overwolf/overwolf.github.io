---
id: toggle-client-features
title:  Turn on/off client features
sidebar_label: Toggle client features
---

Overwolf client let you turn on or off a couple of client features, like enable developer tools and more.  
The full list of supported features can be found [below](#supported-features).  

You can toggle these features in several ways: through the command line, through the OW settings file, and through the windows registry.  

:::tip
The recommended and easiest way to enable Chrome Developer Tools is to [add a registry key](#windows-registry).
:::

## Supported features

Currently this is the list of features that can be toggled:

* `enable-dev-tools` - enable Chrome Developer Tools for OW windows (disabled as default).
* extension-validation
* gep-validation
* track-extension-validation
* force-validation-report-only

> Note that currently, only the first feature (enable-dev-tools) is useful for the dev community. Other features are for internal usage.

## How to toggle a feature

There are three ways to toggle a feature (ordered by precedence): command line, settings file, or registry.

### Command line

To **enable** feature through the command line: "*overwolf.exe --ow-enable-features="%feature1%,%feature2%*".

To **disable**: "*overwolf.exe --ow-disable-features="%feature1%,%feature2%*".

Example:

```shell
overwolf.exe --ow-enable-features=enable-dev-tools
```

### Settings file

The features settings for the OW client are saved in a file called features.json, located under the OW installation folder.  
You can view the latest version of this file on our GitHub [here](https://github.com/overwolf/community-gists/tree/master/features.json/features.json).

Note that every manual change of this file on your local OW client installation will be overwritten once the client is updated.

### Windows registry

As mentioned earlier, the easiest way to toggle a feature is by adding a registry key.

This method is also not affected by a client update - once you enable a feature through the registry (for example - enabled the dev tools) - it's enabled, even if there was a client update.  

Having said that, the [setting file](#settings-file) (features.json) got higher precedence than the registry, so if it explicitly disabled this feature, the registry change will be ignored.

To enable a feature through the registry, you should add it under the [HKEY_CURRENT_USER\SOFTWARE\Overwolf\CEF]
 node.

 For example, enable the dev tools feature:

 ```
 [HKEY_CURRENT_USER\SOFTWARE\Overwolf\CEF]
"enable-features"="enable-dev-tools"
 ```

 #### Download registry key

 To enable the developer tools on your OW client, you can save [this file](https://raw.githubusercontent.com/overwolf/community-gists/master/features.json/enable-dev-tools.reg) to your machine (make sure to save it with the *.reg extension), and run it.

