---
id: ads-sdk-interaction
title: Managing Ads
sidebar_label: Managing Ads
---

## Functions
Calling a new `OwAd()` will return a javascript object which you can use to control the displayed ad. This object has the following functions you can call on demand:

| Function        | Description                                                                                                            |
| :-------------: |------------------------------------------------------------------------------------------------------------------------|
| refreshAd       | Refreshes ad and loads a new one <br> Note that this will cause the ad to scroll into view if not already visible       |
| removeAd        | Removes current ad from the DOM                                                                                    |

::: important
removeAd() will be called on minimizing and refreshAd() will be called on restoring.
:::

In order to prevent ads being called but not shown, please make sure you use the `removeAd()` function where necessary. Also note:

* When the window is minimized, do not delete or destroy the `owAd` instance object, instead call the `removeAd()` method.
* When the window is restored, call the same `owAd` instance’s `refreshAd()` method.

## Type Definitions
Type definitions for the `OwAd` class and the various interfaces it uses can be found at our [types](https://github.com/overwolf/types/blob/master/owads.d.ts) github.
Import this file to your app to get autocompletion and type inference with the `OwAd`.


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

You can use Overwolf ad objects created by calling `new OwAd()`) to listen to events related to the displayed ad. Registering an event can be done by calling the function `addEventListener` on the ad object. Like other libraries, the first parameter sent to `addEventListener` is the name of the event, and the second is a handler function for the event.

The following events are supported:

| **Event Name**      | **Fired When**           
| -------------       | -------------
| player_loaded	      | Ad video player successfully loaded on page*
| display_ad_loaded   | Display ad was served instead of a video ad    
| play                | Ad started playing
|impression	          | Video “impression” – Depends on the advertiser, the impression event gets triggered after 0-6 seconds *
|complete             | Video ad played fully until completed *
|error                | Error occurred while trying to load ad *

\* Only relevant for video ads

## Showing multiple ads 
If you wish to show more than one ad on your app, you can easily do so by creating multiple instances of `OwAd`. Just make sure you pass a different container element for each instance.
