---
id: using-overwolf-windows
title: Using Overwolf Windows
sidebar_label: Using Overwolf Windows
---

## Overwolf Windows Overview

The starting point of working with Overwolf windows is declaring your app’s windows in the [manifest.json](manifest-json) file.

You can NOT create an Overwolf window without declaring it in your manifest.json (window.open is not an Overwolf window).
The idea behind declaring the window in the manifest is that you are actually declaring a window class with properties and later creating an instance of that class.
Currently, you can NOT create multiple instances of a window class. (having many windows is discouraged – because it might make your app more complicated than required).

### 1. Declaring windows in the manifest.json

Under the section: data.windows – you declare your window objects by giving the object a name (which will be the way you create the windows from your code) and adding different [properties](manifest-json#extension_window_data-object) that you want the window to inherit when created (transparency, size, starting position, etc.).

```json
"data": { "start_window": "windowName" }
```