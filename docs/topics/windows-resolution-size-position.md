---
id: windows-resolution-size-position
title: Windows Resolution Size and Position
sidebar_label: Resolution Size and Position
---

## Window resolution

Setting window resolution and position whether it's in-game or in desktop requires you to first get the user's current screen resolution. 

### Detecting screen resolution

Users have two relevant resolutions to consider:  

"Screen resolution", which is the operating system's default desktop resolution, and "game resolution" which is the resolution in which they play their game and can be different from the desktop setting.

* Desktop resolution can be detected by using [overwolf.utils.getMonitorsList()](../api/overwolf-utils#getmonitorslistcallback).

* Game resolution can be detected by using [overwolf.games.getRunningGameInfo()](../api/overwolf-games#getrunninggameinfocallback).  
In addition, it returns also the monitorHandle, which can be used to get the monitor the game runs in.

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

### Window coordinates overview

The windows API using X and Y coordinates to define the position of a window.  

#### X note
X returns the pixel distance of your currently active monitor from your primary monitor.
For example, if your primary monitor is 1920px wide, and the currently active window is on another monitor located to the left of your primary, X will return 1920 or -1920 based on their relative positions.

#### Y note
Y returns the pixel distnace of your currently active monitor from your primary monitor.
For Example, if your primary monitor and secondary monitor are side by side, Y will return 0, if your displays are one on top of the other and the primary monitor is 1200px tall, Y will return 1200 or -1200 based on their relative positions.

### Set a default position

As the [start_position](../api/manifest-json#windows-start_position) flag only applies the first time you open a windows, you can use [changePosition()](../api/overwolf-windows#changepositionwindowid-left-top-callback) if you want to change the position of the window dynamically. For example, if you'd like to place the window in the middle of the screen after you [calculate the user's resolution](#detecting-screen-resolution).

### Change window position

In order to position your window in a specific location, you'll first need to [get the current user's screen resolution](#detect-the-resolution). As explained above, there are two types of resolutions – "Screen resolution" (the resolution of the user's OS) and "game resolution" which is the actual in-game resolution used.

* To reposition a desktop window of your app, get the user desktop resolution by using [getMonitorsList()](../api/overwolf-utils#getmonitorslistcallback) and calculate the required location in pixels.

* To reposition an in-game window of your app, get the in-game resolution by using [getRunningGameInfo()](../api/overwolf-games#getrunninggameinfocallback) and calculate the required location in pixels.

### Identify when the window is dragged between monitors

To identify if your app window was dragged from one monitor to another, you can follow these steps:

* Identify when the drag is completed using the [dragMove()](../api/overwolf-windows#dragmovewindowid-callback) function.

* Get the position of the window (window.screenX, window.screenY).

Note that when you move a **native window** between monitors with different DPIs, the window will automatically resize according to the new DPI.

### determine which monitor the window is displayed

Once you get the X & Y coordinates of a window (at the end of dragMove(), using getCurrentWindow(), etc.), With a simple calculation, you can determine which monitor the window is displayed. (For example, if you know that the 1st monitor has 1080px width, and the current window position start beyond that, it means that the window is displayed on the second monitor, etc.)
