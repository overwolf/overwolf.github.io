---
id: second-monitor
title: Second Monitor Utilization
sidebar_label: Second Monitor Utilization
---

## Second Screen Monitor Utilization 

Many of our users currently have a second screen, providing a great opportunity to extend your app value onto a second screen! Creating a second window is as simple as creating a normal window pushed into a second screen location, which communicates with GEP and has a transparent background window.

* The second screen should launch automatically but be easy to close. 

* The second screen launcher should launch in full screen but have the ability to restore down.

* If you don’t know the resolution of the second screen, it should be 1920*1080 px which is the most common screen. 


For the secondary windows that will always run on the secondary screen you should follow these rules:

1. Set the `windows-keep_window_location` flag to true -  https://overwolf.github.io/docs/api/manifest-json#windows-keep_window_location

2. Set the `desktop_only` flag to true -  https://overwolf.github.io/docs/api/manifest-json#windows-desktop_only

3. Not a must, but we recommend to - set `native_winodw` flag to true - https://overwolf.github.io/docs/api/manifest-json#native_window

4. Identify which screen is the secondary and display the secondary screen on that window -  https://overwolf.github.io/docs/api/overwolf-utils#getmonitorslistcallback
(If you know the resolution of each screen, you can do the calculation where you should display your window)
 
5. Use the transparent background window to share data and communication between your app windows.
