---
id: second-monitor
title: Second Monitor Usage
sidebar_label: Second Monitor Usage
---

## Second Screen value opportunities

Many gamers have a second screen which is usually unused while they play and focus on their main monitor. The second screen is a great opportunity to provide more value in more ways for your users - and building a second window experience is just as simple as creating a normal window which communicates with GEP and has a transparent background window.

* Second screen windows should launch automatically.

* Second screen windows should have easy ways to close them - at least a hotkey and an X button at the top.

* The second screen launcher should default in full screen but have the ability to scale/restore down.

* If you don’t know the exact resolution of the second screen, use 1920X1080 which is the most common one. 

When building the second screen window, follow these rules:

1. Set the `windows-keep_window_location` flag to true -  https://overwolf.github.io/docs/api/manifest-json#windows-keep_window_location

2. Set the `desktop_only` flag to true -  https://overwolf.github.io/docs/api/manifest-json#windows-desktop_only

3. We recommend you set `native_window` flag to true - https://overwolf.github.io/docs/api/manifest-json#native_window

4. Identify which screen is the secondary one and display the secondary screen on that window -  https://overwolf.github.io/docs/api/overwolf-utils#getmonitorslistcallback
(If you know the resolution of each screen, you can do the calculation for exactly where you should display your window.)
 
5. Use the transparent background window to share data and have your app windows communicate.
