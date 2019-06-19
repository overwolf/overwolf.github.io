---
id:overwolf-io-paths
title: overwolf.io.paths API
sidebar_label: overwolf.io.paths
---

Use the `overwolf.io.paths` API to obtain system folder paths. 
You can call the object properties to get the requested path:

:::tip
 For more I/O functionalities, please use our simple I/O plugin.
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

#### Usage Example:

```javascript
string commonAppDataFolder = overwolf.io.paths.commonAppData;
```