---
id: using-overwolf-windows
title: Using Overwolf windows
sidebar_label: Using Overwolf windows
---

## Overview

Every Overwolf app uses Overwolf windows, whether in-game or while on desktop. When you get to work on your own app, the first step is declaring your app’s windows in it's [manifest.json](../api/manifest-json) file. You will NOT be able to create an Overwolf window without declaring it in the manifest (window.open is not an Overwolf window).  

The idea here is to declare a **window class** with it's properties and later you can create an **instance** of that class.
It's not currently possible to create multiple instances of a window class - having many windows is discouraged because it might make your app more complicated than required or hurt user experience.

## Declaring windows in manifest.json

Declare your window objects by giving the object a name under the data.windows section and adding [properties](manifest-json#extension_window_data-object) that you want the window to inherit when created. Properties can include size, starting position, transparency and others.

Here is an example window declaration:

```json
 "data": {
        "start_window": "MainWindow",
        "windows": {
            "MainWindow": {
                "file": "Files/index.html",
                "transparent": true,
                "resizable": true,
                "size": {"width": 400, "height": 300},
                "min_size": {"width": 200, "height": 200},
                "max_size": {"width": 600, "height": 500}
            }
        }
 }
```

### Essential window properties

* [`start_window`](../api/manifest-json#start_window) - Every app always has a default window, a main window which is the first to be shown when your app is launched. A Start Window MUST exist in order for the other windows to exist – if you close your main window (or if the user closes it) all other app windows will be closed as well, factually closing your app.

* [`file`](../api/manifest-json#window-file) – This is the core HTML file which will be loaded into your window when it's opened. This can only be a local file. If you wish to host your app on a remote web-site, you’ll have to build a local page that redirects to that website (If you do so, make sure that the **block_top_window_navigation** property is set to **false**).

* [`transparent`](../api/manifest-json#window-transparent) – When this property is set to true, your window will have no borders or background. Any part of your window that has a transparent background ("background: transparent;") will become a see-through area that blends with the game or desktop behind it. If this property is set to false, your window will have the common Overwolf window borders and white background.

* [`grab_keyboard_focus`](../api/manifest-json#windows-grab_keyboard_focus) – This property is set to false by default, but if set to true, this property means opening your window will automatically take the user's keyboard focus and any keystrokes will be made in the app window rather than the current game the user's seeing. Since some windows open surprisingly or automatically, for example based on a game event or a hotkey pressed, you want to keep this false in most cases and avoid 'stealing' user keyboard focus away. **grab_focus_on_desktop** is the complementary property which describes out-of-game behavior, this is set to True by default because the user is not playing when launching the app in desktop mode.

* [`size`](../api/manifest-json#windows-size) – Allows you to set the size of your app window when it is first opened. If your window is not resizable, this will be its permanent size. However, if your app is resizable – app size is saved by Overwolf when closed so that the next time it is opened, **it will open with the same size as it was closed with by the user**, this will persist even if the app is uninstalled and reinstalled. More [window size tips](#window-sizes).

* [`min_size`](../api/manifest-json#windows-min_size) and [`max_size`](../api/manifest-json#windows-max_size) - These properties define the smallest and largest your app window can be in pixels.


## Accessing your declared windows

There are two ways we identify windows: the `name` and `id` properties.

### Using window.name

When accessing a window by name, you need to use the name value exactly as it appears in your manifest.json window declaration.

> A window name is always a value declared by the developer of the app.

### Using window.id

Accessing a window by id is possible when you already have an instance of your window declared – you can retrieve this id using one of two overwolf.windows functions: 

* [overwolf.windows.obtainDeclaredWindow()](../api/overwolf-windows#obtaindeclaredwindowwindowname-callback)
* [overwolf.windows.getCurrentWindow()](../api/overwolf-windows#getcurrentwindowcallback)

> A window id is set by the Overwolf API. This value is subject to change in future Overwolf versions – so you should avoid using hardcoded values.

Currently we do not support generating multiple instances of the same window class, most functions that use window id will accept window name just the same.

## How to create a new window

### Call obtainDeclaredWindow()

First, you must call [overwolf.windows.obtainDeclaredWindow()](../api/overwolf-windows#obtaindeclaredwindowwindowname-callback) using the window’s name as declared in your manifest.json. This will create a single instance of your window and return basic window information including id, name, width, height and other base properties.

### Call restore()

Afterwards, you need to call [overwolf.windows.restore()](../api/overwolf-windows#restorewindowid-callback) using either the window's name or id retrieved from obtainDeclaredWindow.

:::warning
Skipping obtainDeclaredWindow() and calling restore() with the window’s name will **not work** unless the window is already instantiated and minimized (in which case it will be restored).
:::

## Communicating between windows

Over the years we had multiple methods used to communicate between Overwolf windows: localStorage events, cookies and more.
But due the fact that windows of the same app share the same process, the communications between windows can be done with direct pointers to the window/DOM, without any overhead. Naturally, this also means that the calls are synchronous.

Recommended ways to communicate between app windows:

### Using a background controller

In our experience the best method for communicating between windows of the same app is using [`overwolf.windows.getMainWindow()`](../api/overwolf-windows#getmainwindow). This function allows you to get direct access to your main index page and it’s HTML Window object - including any JS function or DOM element.   

Using this method, you can use a shared “communication-bus” variable that allows different windows to communicate.  

We strongly recommend not to use [overwolf.windows.getOpenWindows()](../api/overwolf-windows#getopenwindowscallback) for windows communication.

* Read more about [background controllers](#use-a-background-controller). 
* Download [our sample app](../start/sample-app-overview) which demonstrates all basic design principals.

### Using direct messages

Another option for communication between windows is the method [`overwolf.windows.sendMessage()`](../api/overwolf-windows#sendmessagewindowid-messageid-messagecontent-callback). This method allows to send messages directly to a window. The window receiving the message needs to listen on the [`overwolf.windows.onMessageReceived event`](../api/overwolf-windows#onmessagereceived).

:::warning
Using sendMessage is not our best practice since it might not work on some occasions, for example, when sending extremely long messages .
:::

## Communication channels using an iframe inside an Overwolf window

The recommended way to access the overwolf object from an online web page loaded inside an iframe is to set up a communication channel using the [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) method.  

To do so, allow your app to load and communicate with your domain via [externally_connectable](../api/manifest-json#externally_connectable) configuration in the manifest.  

Your web page should post a message to the parent window (the Overwolf app) containing the page.  

In the Overwolf app add an event listener for “message” event and validate the origin of the message:

```js
window.addEventListener("message", message => {
	if (message.origin !== "https://yourdomain.gg") {
	return;
	}

	let data = message.data;
	if (!data) {
	return;
	}

	// do something interesting with the data
});
```

Make sure to handle cases where the iframe may not load or when an error may prevent setting the communication channel (a fallback or retry mechanism).

## Windows Types

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
The term transparent might be a bit misleadin, . This window has no borders, window control buttons or default background – create those elements by yourself in your HTML/CSS.
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

## Window resolution

Setting window resolution and position whether it's in-game or in desktop requires you to first get the user's current screen resolution. 

### Detecting screen resolution

Users have two relevant resolutions to consider:  

"Screen resolution", which is the operating system's default desktop resolution, and "game resolution" which is the resolution in which they play their game and can be different from the desktop setting.

* Desktop resolution can be detected by using [overwolf.utils.getMonitorsList()](../api/overwolf-utils#getmonitorslistcallback).

* Game resolution can be detected by using [overwolf.games.getRunningGameInfo()](../api/overwolf-games#getrunninggameinfocallback).

### Logical resolution

The [GameInfo](../api/overwolf-games#gameinfo-object) object sent by the getRunningGameInfo() function has, in addition to the expected `width` and `height` fields, two more properties called `logicalWidth` and `logicalHeight`. These fields return the game's reported logical pixel dimensions.  
If your screen is scaled by a DPI factor, you should work with logical sizes, as the regular sizes will wound up being scaled in proportion, while the logical is not DPI aware.

### Detecting resolution changes

In order to detect whether a user has changed their resolution:

* In-game resolution change – Register to the [overwolf.games.onGameInfoUpdated()](../api/overwolf-games#ongameinfoupdated) event to get updated in-game resolution.

* Desktop /out-of-game resolution change – There's no way to detect a change in desktop resolution, you’ll have to check each time your app launches by using [getMonitorsList()](../api/overwolf-utils#getmonitorslistcallback).

## Window sizes

Correct planning is critical for your app's development process. While Overwolf is handling the huge variety of user specs and screen resolutions, it's still important to pick the optimal size for your app’s windows.  

While the most commonly used window size would be 1366×768, the optimal size would be 1200×700, which better supports a wider variety of resolutions.

You can also do the following when handling window sizes:

### Set default window size

As the [size](../api/manifest-json#windows-size) flag only applies during the first time you open the window, you can force create the new window using the default size/position. 

you can set [min_size](../api/manifest-json#windows-min_size) and [max_size](../api/manifest-json#windows-max_size) to the same values and force your app window to always load with identical dimensions, or you can set the [`useDefaultSizeAndLocation`](../api/overwolf-windows#obtaindeclaredwindowwindowname-usedefaultsizeandlocation-callback) to true, when calling the [obtainDeclaredWindow()](../api/overwolf-windows#obtaindeclaredwindowwindowname-usedefaultsizeandlocation-callback) function.

In addition, if you want to dynamically set your window size according to the [user's desktop resolution](#detecting-screen-resolution) and [DPI](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio), you can use [setMinSize()](../api/overwolf-windows#setminsizewindowid-width-height-callback).

### Enable user resolution choices

You can allow users to choose their preferred window size in the app's settings. Some Examples for common and optimal window sizes, as well as apps that let the user choose their preferred app window size:

<div class="box">
<a data-fancybox="gallery" data-caption="custom window size" href="../assets/size-example-user-custom.jpg">
    Examples for app that let the user choose his preferred app window size:
    <span class="thumb">
      <img src="../assets/size-example-user-custom.jpg" alt="custom window size">
    </span>
  </a>
  <a data-fancybox="gallery" data-caption="1280×775 Window size" href="../assets/size-example-screen-1.jpg">
    Examples for common and optimal app window sizes: 1280×775
    <span class="thumb">
      <img src="../assets/size-example-screen-1.jpg" alt="1280×775 Window size">
    </span>
  </a>
  <a data-fancybox="gallery" data-caption="1366×775 Window size" href="../assets/size-example-screen-2.jpg">
    Examples for common and optimal app window sizes: 1366×775
    <span class="thumb">
      <img src="../assets/size-example-screen-2.jpg" alt="1366×775 Window size">
    </span>
  </a>
  <a data-fancybox="gallery" data-caption="1680×980 Window size" href="../assets/size-example-screen-3.jpg">
    Examples for common and optimal app window sizes: 1680×980
    <span class="thumb">
      <img src="../assets/size-example-screen-3.jpg" alt="1680×980 Window size">
    </span>
  </a>
</div>

## Window position

### Set a default position

As the [start_position](../api/manifest-json#windows-start_position) flag only applies the first time you open a windows, you can use [changePosition()](../api/overwolf-windows#changepositionwindowid-left-top-callback) if you want to change the position of the window dynamically. For example, if you'd like to place the window in the middle of the screen after you [calculate the user's resolution](#detect-the-resolution).

### Change window position

In order to position your window in a specific location, you'll first need to [get the current user's screen resolution](#detect-the-resolution). As explained above, there are two types of resolutions – "Screen resolution" (the resolution of the user's OS) and "game resolution" which is the actual in-game resolution used.

* To reposition a desktop window of your app, get the user desktop resolution by using [getMonitorsList()](../api/overwolf-utils#getmonitorslistcallback) and calculate the required location in pixels.

* To reposition an in-game window of your app, get the in-game resolution by using [getRunningGameInfo()](../api/overwolf-games#getrunninggameinfocallback) and calculate the required location in pixels.

### Identify when the window is dragged between monitors

To identify if your app window was dragged from one monitor to another, you can follow these steps:

* Identify when the drag is completed using the[dragMove()](../api/overwolf-windows#dragmovewindowid-callback) function.

* Get the position of the window (window.screenX, window.screenY). 

* Now with a simple calculation, you can determine which monitor the window is displayed. (For example, if you know that the 1st monitor has 1080px width, and the current window position start beyond that, it means that the window is displayed on the second monitor, etc.)

## General tips for using windows

In this segment we'll share some best practices and tips born of experience on using Overwolf windows:

### Call getCurrentWindow() once

A window should call [overwolf.windows.getCurrentWindow()](../api/overwolf-windows#getcurrentwindowcallback) once during startup and then store the results in a variable for later use. Also makes your code more elegant:

```js
overwolf.windows.getCurrentWindow(function(result) {
    if(result.status === "success") {
        overwolf.windows.dragMove(result.window.id);
    }
});
```

### Avoid full-screen transparent windows

Overwolf apps are supposed to act like native desktop applications and not as websites – therefore, don’t be tempted to create full-screen transparent windows with draggable HTML elements (e.g. `<div>`) as windows.
Doing so will:

  * Create a low-performance, laggy experience.

  * Use a lot more CPU than required for your features.

  * Will not support dual screens or companion laptop screens, including dragging an element to the second screen.

  * Cause a risk of a broken HTML page covering the entire game screen.

  * Cause a risk of grabbing focus without the gamer wanting it or understanding why.

### Your app is not a website!

Overwolf apps are supposed to act like native desktop applications, not websites. Avoid enabling mousewheel scrolls or [text selection](https://stackoverflow.com/questions/826782/how-to-disable-text-selection-highlighting) in your app's windows, these are website features which would look and feel weird in an application setting. Whenever in doubt in terms of design or user experience, compare your app to desktop applications and not to websites. 

### Keep your windows small

App windows should provide their value in the leanest, more accurate fashion possible. When Overwolf renders transparent windows it does it’s best to do it efficiently, however, large windows do have performance costs. Therefore, avoid using large windows and try to get your app's design to be focused, to the point and as small as you can effectively make it.

### Use block_top_window_navigation

Unless you have good reasons to do otherwise, always set the [block_top_window_navigation](../api/manifest-json#windows-block_top_window_navigation) flag to true in your manifest.json file.

This will ensure that no bugs or accidental calls like window.top.href take control of your entire app.
The only reason this isn’t set to true by default is for backwards compatibility for apps that are hosted on remote servers.

### Use a background controller

Consider using your main window as a hidden controller window that the user doesn’t see – it can act as a service that runs in the background and communicates with other visible windows of the app. For apps that auto-launch when the game starts or wish to implement pop-up notifications, this is a must-have.

This "hidden" window should have the [is_background_page](../api/manifest-json#is_background_page) flag set to true in the app’s manifest.json file:

```json
"index" : {
  ...
  "is_background_page": true,
  ...
}
```

### Use native desktop windows

If your app includes a window that will only be visible on desktop but not while playing, you should add the following flags to that window's data in the app’s manifest.json file:

```json
"desktop_only": true,
"native_window":true
```

These steps will dramatically improve your app performance and help design an efficient, elegant product.
