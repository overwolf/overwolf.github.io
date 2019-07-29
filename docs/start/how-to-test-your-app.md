---
id: how-to-test-your-app
title: How to Test Your App
sidebar_label:  How to Test Your App
---


## Overview
The Overwolf team will test your app when you submit it for the first time, and every time you 
would like to update it.  
Some tests may change depends on the app, as it is our goal to create specific tests per app in order increase productivity.

In this page we share what are the tests we run for your app so you will be able to improve your app according to it. Please don’t hesitate asking us question over Slack or by email: developers@overwolf.com

### Manifest
* Consistent [Author and App names](https://overwolf.github.io/docs/api/manifest-json#meta-name) between updates 
  1. Make sure that the author and app name are the same in every version (Changes in those parameters will change the UID of your app)
  
* Validate manifest.json syntax
  1. Copy all of the content of the app’s manifest.json and paste it in [jsonlint.com](https://jsonlint.com/)
  2. Press the “validate” button in the jsonlint.com website (Result is “valid json”)
  3. Make sure you have no errors 

* [Overwolf Minimal Version](https://overwolf.github.io/docs/api/manifest-json#meta-minimum)
  1. Examine Overwolf Minimal Version and compare it to the previous Overwolf Minimal version (Overwolf minimal version shouldn’t change between app versions, unless your app needs to use a new Overwolf property, API, etc.)

* Verify correct Advertisement flags
    1. `"block_top_window_navigation":true` – Means that when user clicks on an ad, it will always open in a new window
    2. `"popup_blocker":true` – This flag prevents ads that will try to create a popup for the user without the user’s consent
    3. `"mute":true – Mute` sounds in window


* Verify `launcher_icon` property existence
  1. Make sure `"launcher_icon": "icon.ico"` appears in the “meta” object, (`icon.ico` can have any name as long as the icon exists in the app opk file)
  2. Check that the `icon.ico` file exists in your app folder/opk and its size is smaller than 150KB
  3. Make sure that you have the following resolutions: `16x16,32x32,48x48,256x256` 
  
* Verify game_targeting flag existecne

* Verify correct_launch events

### Windows

* Resolutions
  1. Before testing, DPI should be 100%, window resolution should be 1920 x 1080
  2. Now change your screen resolution to the following and make sure that the app window stays within the borders of the screen:
  * 1366 x 720 – 100 DPI
  * 1366 x 768 – 100 DPI
  * 1920 X 1080 – 125 DPI
  * 3840 X 2160 – 150 DPI
  
* Window states
 * The following test should show you how your app behaves in-game in different window states:
  * Launch the game your app supports and test the app in full-screen (game window), make sure everything is in place
  * Then change to windowed mode and make sure that everything is still in place
  
* Window behavior when “losing focus”
 * Overwolf only draws the overlay on a game (showing the app windows) when the game is in focus, this means that we want to make sure that once the game loses focus no Overwolf app windows pop up. In the following test, you should launch the game your app supports and make sure that the app launches correctly. Then, you should Alt + Tab out of the game and make sure that your app window will not show on desktop. When you go back to the game, the app should work as it should
 
 
### Overlay
* In-Game Behavior
 1. Preconditions: The user is now running the game your app supports
  * Open the app window with hotkey (App is displayed in Overlay)
  * Test general app functionality in-game (App will properly function)
  * Click on locations in the app that will affect the game if also pressed on in the same location. (Mouse clicks should not go through)
  
### Hotkeys
* General Hotkeys functionality
  1. Use Hotkey to launch App (App will launch)
  2. Use Hotkey again to close / minimize App (App closes / minimizes)
  3. Change hotkey and use it again (Hotkey will change in Overwolf settings)
  4. Use changed Hotkey to launch App (App will launch)
  5. Use changed Hotkey again to close / minimize the app (app closes / minimizes)
  6. Allow users to change the hotkeys combination from inside your app’s settings panel by automatically directing the user the the Overwolf settings page as suggested in our best practices (Hotkeys part). More information about hotkeys can be found in the manifest.json and overwolf.settings API pages – Make sure that when it’s done, the new hotkey is updated automatically in your app without the need to re-open the app.
  7. Launch the app using the dock icon.

* App was installed mid-game
  1.Preconditions: Uninstall your app to verify the following test
  * While in-game, open the Overwolf Appstore and install app or install via opk (App installs)
  * Use hotkey launch app (App launches)
  * Use hotkey again to close / minimize the app (App closes / minimizes)
  * Change hotkey and use it again (App launches)
  * Used changed hotkey again (App closes)

* Whenever a user changes the apps hotkey – make sure that the app changes both functionality and UI

### Desktop

* Desktop app Behaviour
 1. Launch App while in desktop (App launches within 30 milliseconds or less – It’s okay to immediately show the app’s window and then a loader)
 2. Test general app desktop functionality
 3. Launching from desktop icon when Overwolf is closed
 4. Verify all windows are close upon exit

### Game specific apps
* If your app should run on a specific game only, make sure it runs on that game

### Performance
* Memory & CPU Usage
  1. Preconditions: Open Overwolf task manager & Windows task manager
  * Use the apps basic functionality (App does not lag or become unresponsive)
  * Examine the Overwolf task manager (App memory does not increase without decreasing – no memory leaks)
  * Enter Windows Task manager and enter the performance tab (CPU / Memory / Network usage will not spike when using the app)

* Dock icon size
 1. Dock icons (colored & grayed) should be .png, 256×256 and each smaller than 30KB.

* Internet access
 1. Make sure that when you are disconnected from the internet, the app still launches normally.
 2. Make sure that the app presents “check your internet connection” or a similar window, when internet access is not available.
 3. If the app requires internet to function then it would be presented in a window with the app
 4. Regarding how to detect whether your app is offline or not: you can applicatively check it from your JS code in various ways.  
 The most straightforward way is to use the [navigator.onLine property](https://stackoverflow.com/questions/16035577/check-if-there-is-an-internet-connection) ,but we recommend to implement more reliable approaches, [like this](https://zen-and-art-of-programming.blogspot.com/2014/04/html-5-offline-application-development.html) for example.

### Ads

* Ads visibility
  1. Launch app
  2. Search for app windows with ads (App windows with ads have their ads appear)
  3. Click the ad (Ad opens in a new Overwolf browser window and NOT in the same window the ad was in)
  4 .Click on the ad 5 times (Ad opens in a new Overwolf browser 5 times, without crashing Overwolf or hurting performance)
  
* Ads click functionality
  1. Open app (App opens)
  2. Click on any app element that is hiding ads (Ads will not open, app element will function as expected.)
  
* Ads are not hidden
  1. Open the developer tools by clicking crtl + i, and look at the console. No ad process should be visible if no ads are sown on screen

* Ads windows closed between app windows
  1. Open `http://localhost:54284/` in browser
  2. Launch your app, where ads are presented
  3. Close the app (hotkey and minimize, when possible)
  4. No ads process should be shown in the localhost
