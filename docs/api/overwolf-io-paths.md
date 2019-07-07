---
id:overwolf-io-paths
title: overwolf.io.paths API
sidebar_label: overwolf.io.paths
---

Use the `overwolf.io.paths` API to obtain system folder paths. 
You can call the object properties to get the requested path:

:::tip
 For more I/O functionalities, please use our [simple I/O plugin](../topics/simple-io-plugin).
:::

## Supported paths

* programFiles
* programFilesX86
* commonFiles
* commonFilesX86
* commonAppData
* desktop
* windows
* system
* systemX86
* documents
* videos
* pictures
* music
* commonDocuments
* favorites
* fonts
* startMenu
* localAppData

## Usage Example

To get the full path of the current extension (OW app), you can call `overwolf.io.paths.localAppData` and concatenate your extension id and your app version to it:

```javascript
Overwolf.io.paths.localAppData + "/overwolf/extensions/[your extension id]/[version]"
```
Where version can be [retrieved from the app manifest](overwolf-extension-current#getmanifestcallback).

_note that this will not work if the extension is loaded as unpacked while developing._

