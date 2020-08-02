---
id: enable-dev-tools
title:  Enable Developer Tools
sidebar_label: Enable Developer Tools
---

Overwolf client let you turn on or off a couple of client features, like enable developer tools and more.  
The full list of supported features can be found [below](#supported-features).  

You can toggle these features in two ways: through the command line, or through the windows registry.  

:::tip
The recommended and easiest way to enable Chrome Developer Tools is to [add a registry key](#windows-registry).
:::

## Supported features

Currently there is only one feature that can be toggled:

* `enable-dev-tools` - enable Chrome Developer Tools for OW windows (disabled as default).

## How to toggle a feature

There are two ways to toggle a feature (ordered by precedence): command line, or registry.

### Command line

To **enable** feature through the command line: "*overwolf.exe --ow-enable-features="%feature1%,%feature2%*".

To **disable**: "*overwolf.exe --ow-disable-features="%feature1%,%feature2%*".

Example:

```shell
overwolf.exe --ow-enable-features=enable-dev-tools
```

### Windows registry

As mentioned earlier, the easiest way to toggle a feature is by adding a registry key.

This method is also not affected by a client update - once you enable a feature through the registry (for example - enabled the dev tools) - it's enabled, even if there was a client update.

Uninstalling the OW client, removes the registry key.

Note that the command line got higher precedence than the registry, so if it explicitly disabled this feature, the registry change will be ignored.

To enable a feature through the registry, you should add it under the [HKEY_CURRENT_USER\SOFTWARE\Overwolf\CEF]
 node.

 For example, enable the dev tools feature:

 ```
 [HKEY_CURRENT_USER\SOFTWARE\Overwolf\CEF]
"enable-features"="enable-dev-tools"
 ```

 #### Download registry key

 To enable the developer tools on your OW client, you can save [this file](https://raw.githubusercontent.com/overwolf/community-gists/master/features.json/enable-dev-tools.reg) to your machine (make sure to save it with the *.reg extension), and run it.

