---
id: windows-types
title: Windows Types
sidebar_label: Windows Types
---

Behavior is different depending on window type, and we're going to go over two main types of Overwolf app windows: Transparent vs. Non-Transparent Windows.

###  Non-Transparent Window

A non-Transparent Window is the **standard** Overwolf window. A window with borders, control buttons, opacity slider and a white background.

 * In order to create this window you should set the [`transparent`](../api/manifest-json#window-transparent) property in your manifest.json to 'false'.
 * In order to enable a maximize button, you need to set the [`show_maximize`](api/manifest-json#show_maximize) property to 'true'.

An example from the manifest.json file:

```json
"windows": {
    "windowName": {
      "file": "name.html",
      "transparent": true,
      "show_maximize": true
     }
}
```

Below you can see an example from the [sample app](#sample-app).

### Transparent window

:::important
The term transparent might be a bit misleading. This window has no borders, window control buttons or default background – create those elements by yourself in your HTML/CSS.
:::

In order to create this window type, the `transparent` property in the manifest.json should be set to ‘true’.

Here you can see examples for standard and transparent windows from the sample app, and other windows from live apps on our appstore:

<div class="box" data-slick='{"variableWidth": true}'>
  <a data-fancybox="gallery1" data-caption="standard window sample app" href="../assets/standard-window.png">
  "standard" window that is being used in our sample app. 
    <span class="thumb">
      <img src="../assets/standard-window.png" alt="standard window">
    </span>
  </a>
  <a data-fancybox="gallery1" data-caption="transparent window sample app" href="../assets/transparent-window.png">
  "transparent" window that is being used in our sample app. 
    <span class="thumb">
      <img src="../assets/transparent-window.png" alt="transparent window">
    </span>
  </a>
  <a data-fancybox="gallery1" data-caption="1366×775 Window size" href="../assets/transparent-overwolf-window-2.jpg">
  “transparent” window that is being used in the Spawning Tool Build Advisor. 
    <span class="thumb">
      <img src="../assets/transparent-overwolf-window-2.jpg" alt="1366×775 Window size">
    </span>
  </a>
  <a data-fancybox="gallery1" data-caption="1680×980 Window size" href="../assets/transparent-overwolf-window-3.jpg">
  “transparent” window being used in the Legendary Builds app
    <span class="thumb">
      <img src="../assets/transparent-overwolf-window-3.jpg" alt="1680×980 Window size">
    </span>
  </a>
</div>

### Sample app

You should **download our [sample app](../start/sample-app-overview)**, it covers transparent/non-transparent window creation and much more.