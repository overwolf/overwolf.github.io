---
id: second-monitor
title: Second monitor usage
sidebar_label: Second monitor usage
---

## Second Screen value opportunities

Many gamers have a second screen which is usually unused while they play and focus on their main monitor. The second screen is a great opportunity to provide more value in more ways for your users - and building a second window experience is just as simple as creating a normal window which communicates with GEP and has a transparent background window.

* Second screen windows should launch automatically.

* Second screen windows should have easy ways to close them - at least a hotkey and an X button at the top.

* The second screen launcher should default in full screen but have the ability to scale/restore down.

* If you don’t know the exact resolution of the second screen, use 1920X1080 which is the most common one. 

#### When building the second screen window, follow these rules:

1. Set the [`windows-keep_window_location`](../api/manifest-json#windows-keep_window_location) flag to true.

2. Set the [`desktop_only`](../api/manifest-json#windows-desktop_only) flag to true.

3. We recommend you set [`native_window`](/api/manifest-json#native_window) flag to true.

4. Identify which screen is the secondary one and display the secondary window on that screen.  
  Use the [getMonitorsList()](../api/overwolf-utils#getmonitorslistcallback) function for that.  
  If you know the resolution of each screen, you can do the calculation for exactly where you should display your window.

5. Note that the [GameInfo](../api/overwolf-games#gameinfo-object) object contains a monitorHandle and a windowHandle. Take advantage of that if needed.  
  Usage example: [identify](windows-resolution-size-position#identify-when-the-window-is-dragged-between-monitors) that the user moved the game window to the secondary screen.
 
6. Use the transparent background window to share data and have your app windows communicate.
