---
id: ads-sdk-interaction
title: Interacting with an ad
sidebar_label: Interacting with an ad
---

## Functions
Calling new `OwAd()` will return a javascript object which you can later use to control and interact with the displayed ad. The object has the following functions you can call to achieve the interaction:

| Function        | Description                                                                                                            |
| :-------------: |------------------------------------------------------------------------------------------------------------------------|
| refreshAd       | Refresh ad and load a new one <br> Please note that this will cause the ad to scroll into view (if not visible)       |
| removeAd        | Removes the current ad from the DOM                                                                                    |
     
#### Important note

In order to prevent cases in which ads are called but not shown, please make sure you use the `removeAd()` function where applicable. Please also note:

* When the window is minimized, don’t delete or destroy the `owAd` instance object, instead call the `removeAd()` method.
* When the window is restored, call the same `owAd` instance’s `refreshAd()` method.

#### Sample code for handling ads with minimized/restored window

```
// define the event handler
function onWindowStateChanged(state) {
  console.log(`Window state changed: ${JSON.stringify(state)}`);

  if(state) {
    // when state changes to minimized, call removeAd()
    if (state.window_state === "minimized") {
      owAdInstance.removeAd();
    }
    // when state changes from minimized to normal, call refreshAd()
    else if(state.window_previous_state === "minimized" && state.window_state === "normal"){
      owAdInstance.refreshAd();
    }
  }
}

// call the overwolf api
overwolf.windows.onStateChanged.removeListener(onWindowStateChanged);
overwolf.windows.onStateChanged.addListener(onWindowStateChanged);
```

## Events

You can use the Overwolf ad object (the one created by calling `new OwAd()`) to listen to events related to the displayed ad. Registering for an event can be done by calling the function `addEventListener` on the ad object. Like many other libs, the first param sent to `addEventListener` is the name of the event, and the second is a handler function for the event.

The following events are supported:

| **Event Name**      | **Fired When**           
| -------------       | -------------
| player_loaded	      | Ad video player was successfully loaded on the page*
| display_ad_loaded   | Display ad was served instead of a video ad    
| play                | Ad started playing *
|impression	          | Video “impression” – Depends on the advertiser, the impression event gets triggered after 0-6 seconds *
|complete             | Video ad was played until its end *
|error                | Error occurred while trying to load ad *

\* Only relevant for video ads

## Showing multiple ads 
If for some reason you wish to show more than one ad on your app, you can easily do so by creating multiple instances of `OwAd`. Just make sure you pass a different container element for each instance
