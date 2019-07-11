---
id: using-overwolf-windows
title: Using Overwolf Windows
sidebar_label: Using Overwolf Windows
---

## Overwolf Windows Overview

The starting point of working with Overwolf windows is declaring your app’s windows in the [manifest.json](../api/manifest-json) file.

You can NOT create an Overwolf window without declaring it in your manifest.json (window.open is not an Overwolf window).  

The idea behind declaring the window in the manifest is that you are actually declaring a **window class** with properties and later creating an **instance** of that class.
Currently, you can **NOT create multiple instances** of a window class. (having many windows is discouraged – because it might make your app more complicated than required).

## Declaring windows in the manifest.json

Under the section: data.windows – you declare your window objects by giving the object a name (which will be the way you create the windows from your code) and adding different [properties](manifest-json#extension_window_data-object) that you want the window to inherit when created (transparency, size, starting position, etc.).

Here is an example of a window declaration:

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

* `start_window` - Your app will always have a "main" window, the main window is the first window to be shown when your app is launched, and it MUST exist in order for the other windows to exist – if you close your main window (or if the user closes it) all other windows will be closed (and, in fact, your entire app is turned off).

* `file` – The most basic property of your window. This is the HTML file to be loaded into your window when it is opened. This can only be a local file. If you wish to host your app in a remote web-site, you’ll have to have a local page that redirects to the remote website (in such cases, you need to make sure that the **block_top_window_navigation** property is set to false).

* `transparent` – When set to true, your window has no window borders or background. Any part of your window that has a transparent background ("background: transparent;") will be a see-through area that blends with the game or desktop. If this is false, your window will have the common Overwolf window borders and background (white).

* `grab_keyboard_focus` – The default value is false. Indicates whether the window will grab the keyboard focus when it is opened. Some windows can be opened automatically (e.g. based on a game event or a notification) or even by hotkey – you might not want to "steal" the keyboard focus from the game in such cases.
**grab_focus_on_desktop** is the complementary property when outside of the game (however, unlike grab_keyboard_focus, the default value is true).

* `size` – Allows you to set the default size of the window when it is first opened. If your window is not resizable, this will be the constant size of your window.
However, if your app is resizable – the app size is saved by Overwolf when closed so that the next time it is opened, it will preserve this size.

## Accessing your declared windows

There are two types of window identifiers: `name` and `id`.

### Access by window.name

When accessing a window by it’s name – you need to pass the name value as it appears in your manifest.json window declaration.

> A window name is always a value set/declared by the developer of the app.

### Access by window.id

When accessing a window by it’s id (which means you already have an instance of your window) – you need to retrieve this id from one of the two overwolf.windows functions: 

* [overwolf.windows.obtainDeclaredWindow()](../api/overwolf-windows#obtaindeclaredwindowwindowname-callback)
* [overwolf.windows.getCurrentWindow()](../api/overwolf-windows#getcurrentwindowcallback)

> A window id is always a value set by the Overwolf API. This value is subject to change in future Overwolf versions – so do not use hardcoded values.

Because we currently do not support creating multiple instances of a window class – most functions that accept a window id also accept the window’s name.

## How to open a new window

### Call obtainDeclaredWindow()

First, you must call [overwolf.windows.obtainDeclaredWindow()](../api/overwolf-windows#obtaindeclaredwindowwindowname-callback) passing it the window’s name (as declared in your manifest.json) – this, in turn, will create an instance of your window (currently a single instance) and return basic window information (id, name, width, height etc…).

### Call restore()

Second, you need to call [overwolf.windows.restore()](../api/overwolf-windows#restorewindowid-callback) passing it either the window name or id (the id is retrieved from obtainDeclaredWindow).

:::warning
you can not skip obtainDeclaredWindow() and call restore() on the window’s name – it will just NOT work (It will work only if the window is already instantiated and minimized, and you want to restore it).
:::

## Communication between windows

We’ve had a long history of methods used to communicate between Overwolf windows: localStorage events, cookies, etc…

### using background controller

We believe the best method for communicating between windows of the same app is by using [`overwolf.windows.getMainWindow()`](../api/overwolf-windows#getmainwindow). This function allows you to get direct access to your main index page (which should be a controller/background page) and it’s HTML Window object (and thus any JS function or DOM element).  

Using this method, you can use a shared “communication-bus” variable, that allows communication between the different app windows.  

Note that we highly recommend not to use [overwolf.windows.getOpenWindows()](../api/overwolf-windows#getopenwindowscallback) for windows communication.

* Download a sample app that examples [simple communication between windows](https://github.com/overwolf/windows-communication-sample-app).
* Download the PUBG sample app that demonstrates [more advanced communication between windows](https://github.com/overwolf/pubg-dev-challenge-samples/tree/master/ow-native-sample).

### using direct messages

Another option for communication between windows is the method [`overwolf.windows.sendMessage()`](../api/overwolf-windows#sendmessagewindowid-messageid-messagecontent-callback).   allows for sending messages directly to a window. The window receiving the message needs to listen on the [`overwolf.windows.onMessageReceived event`](../api/overwolf-windows#onmessagereceived).

:::warning
Using sendMessage is not our suggested choice since it might not work on some occasions (for example, when sending extremely big messages) .
:::

## Communication channel with an iframe inside an Overwolf window

## Windows Types

There are two main types of Overwolf app windows:Transparent vs. Non-Transparent Windows.

###  Non-Transparent Window

A non-Transparent Window or **standard** Overwolf window, is a window that has borders, window control buttons, opacity slider and a white background.

 * In order to create this window you should set the [`transparent`](../api/manifest-json#window-transparent) window property in the manifest.json to 'false'.
 * In order to enable the maximize button, you need to set the [`show_maximize`](api/manifest-json#show_maximize) property to 'true'.

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

Here you can see an example from the [sample app](#sample-app), for a standard Overwolf window:

<img src="../assets/standard-window.png" alt="drawing" width="500"/>

### Transparent window

:::important
The term transparent might be a bit misleading, we consider the non-standard Overwolf window as a “transparent” window. This window has no borders, window control buttons or background – you should create those elements by yourself in your HTML/CSS.
:::

In order to create this window type, the `transparent` property in the manifest.json should be set to ‘true’.

Here you can see an example from the sample app, for a "transparent" Overwolf window:

<img src="../assets/standard-window.png" alt="drawing" width="500"/>

And you can see a real live examples for transparent windows, from our apps store:

<div class="box" data-slick='{"slidesToShow": 2}'>
  <a data-fancybox="gallery" data-caption="1366×775 Window size" href="../assets/transparent-overwolf-window-2.jpg">
An example for a “transparent” window that is being used in the Spawning Tool Build Advisor. 
    <span class="thumb">
      <img src="../assets/transparent-overwolf-window-2.jpg" alt="1366×775 Window size">
    </span>
  </a>
  <a data-fancybox="gallery" data-caption="1680×980 Window size" href="../assets/transparent-overwolf-window-3.jpg">
An example for a “transparent” window being used in the Legendary Builds app
    <span class="thumb">
      <img src="../assets/transparent-overwolf-window-3.jpg" alt="1680×980 Window size">
    </span>
  </a>
</div>

### Sample app

Here you can **download a [sample app](https://github.com/overwolf/app-window-sample)** that shows you how a “transparent” window should be created.

## Windows sizes

The right planning is crucial before you start with the development process of your app.  
While Overwolf is handling the high variety of user’s specs and screen resolutions for you, it is still important to pick the optimal size for your app’s windows.  

While the most common window dimension would be 1366×768, the best optimal size would be 1200×700, in order to support all screen resolutions.

You can also do the following when handling with windows sizes:

* Get the user's resolution from Overwolf’s API  to determine the appropriate window size:
  * Get the game's resolution (for in-game windows) using [`overwolf.games.onGameInfoUpdated()`](../api/overwolf-games#ongameinfoupdated).
  * Get the user's desktop resolution (for out of game windows) using [`overwolf.utils.getMonitorsList()`](../api/overwolf-utils#getmonitorslistcallback).
* Allow the user to choose the right window size from the app’s settings.

Examples for apps that let the user choose his preferred app window size:

<img src="../assets/size-example-user-custom.jpg" alt="drawing" width="800"/>

Examples for common and optimal app window sizes:

<div class="box" data-slick='{"slidesToShow": 3}'>
  <a data-fancybox="gallery" data-caption="1280×775 Window size" href="../assets/size-example-screen-1.jpg">
    1280×775 Window size
    <span class="thumb">
      <img src="../assets/size-example-screen-1.jpg" alt="1280×775 Window size">
    </span>
  </a>
  <a data-fancybox="gallery" data-caption="1366×775 Window size" href="../assets/size-example-screen-2.jpg">
1366×775 Window size
    <span class="thumb">
      <img src="../assets/size-example-screen-2.jpg" alt="1366×775 Window size">
    </span>
  </a>
  <a data-fancybox="gallery" data-caption="1680×980 Window size" href="../assets/size-example-screen-3.jpg">
1680×980 Window size
    <span class="thumb">
      <img src="../assets/size-example-screen-3.jpg" alt="1680×980 Window size">
    </span>
  </a>
</div>

## General Tips for using windows

We collected some various best practices on how to use the Overwolf windows more efficiently: 

### Call getCurrentWindow() once

A window should call [overwolf.windows.getCurrentWindow()](../api/overwolf-windows#getcurrentwindowcallback) once during startup and then store the results in a variable for all later access. It can save a lot of code like:

```js
overwolf.windows.getCurrentWindow(function(result) {
    if(result.status === "success") {
        overwolf.windows.dragMove(result.window.id);
    }
});
```

### Don't use full-screen transparent window

Overwolf apps are supposed to act like native desktop applications and not a website – therefore, don’t be tempted to create a full-screen transparent window with draggable HTML elements (e.g. `<div>`) as windows.
Doing so will:

  * Create a laggy experience.

  * Use a lot more CPU than required + can hurt the game’s performance.

  * Doesn’t support dual screens (i.e. dragging an element to the second screen).

  * Risk of having the entire game covered with a broken html page.

  * Risk of grabbing the game’s focus without the gamer understanding why.

### Your app is not a website

Overwolf apps are supposed to act like native desktop applications (part 2): Unlike a website, where it is “okay” to allow the user to select text from the page or perform a mouse-wheel movement on the page – in a desktop application, this doesn’t look/feel natural and might even break your app’s design.
Treat your app as an application, not as a website.

### Keep your windows small

Keep it small – when Overwolf renders transparent windows – it does it’s best to do it efficiently, however, large windows do have a performance cost. If possible, don’t use large windows (It’s hard to define what a large window’s dimensions are, but we hope you get the point).

### Use block_top_window_navigation

Unless you know otherwise, always set: `block_top_window_navigation` to true in the manifest.
This will make sure that no bugs or accidental calls like: window.top.href = … take control of your entire app.
The only reason this isn’t set by default, is for backwards compatibility (e.g. apps that want to host themselves on a remote server).

### Use background controller

Consider using your main window as a hidden/background window (that the user doesn’t see) – it then can act as a controller/service that runs in the background and controls or communicate with other visible windows of the app. It is a MUST for apps that auto-launch when the game starts or just want to popup notifications.
This kind of "hidden" window should have the `is_background_page` flag set to true in the app’s manifest.json file:

```json
"index" : {
  ...
  "is_background_page": true,
  ...
}
```

### Use native desktop window

If your app includes a window that will only be visible on desktop (and not in-game), you should add the following flags to the window data section in the app’s manifest.json file:

```json
"desktop_only": true,
"native_window":true
```

This will dramatically improve your app performance. 