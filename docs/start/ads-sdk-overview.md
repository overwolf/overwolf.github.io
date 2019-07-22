---
id: ads-sdk-overview
title: Overwolf Ads SDK
sidebar_label:  Overwolf Ads SDK
---


The Overwolf ads SDK is a small JavaScript library that allows developers to integrate ads into their Overwolf applications. These ads are managed and hosted by Overwolf.

The Ads SDK is intended to be used by developers who wish to show ads in their apps and have discussed doing so with Overwolf. Please do not use this library without prior consent from Overwolf. 
If you are an app developer who wishes to show ads in your app, please contact Overwolf at developers@overwolf.com

### Getting help and reporting bugs
If you have encountered problems with this library, please let us know by contacting developers@overwolf.com, or talk directly to us through the Developers Slack.

## Getting Started

The most simple and basic usage of this library can be done by adding a few lines of code into your app window’s HTML file:
``` <div id="ad-div"></div>
<script src="http://content.overwolf.com/libs/ads/latest/owads.min.js" async onload="onOwAdReady()"></script>
<script>function onOwAdReady(){new OwAd(document.getElementById("ad-div"))}</script>
```

#### This code snippet does the following

1. Adds a div to your page with the id `ad-div`
2. Loads the Overwolf ads SDK library from Overwolf’s CDN
3. When the script is loaded properly, creating a new OwAd instance that will tell the script to fetch an ad. The HTML element passed on to this constructor will then be used to display the ad itself

#### Notes regarding the snippet above

* As you can see, the script tag is added with an `async` attribute. This means that the script is loaded asynchronously and will not interfere with your app or slow down it’s loading time. The downside for this is that the script may take time to load and be ready, and may not be immediately available after being included. To overcome this, we are using the `onload` attribute and providing it with the name of a function to be called when the script has finished loading. In the above example it is called `onOwAdReady`.

*   When calling a new `OwAd()` we provide it with a DOM element. In this example we are getting the instance of the element by calling `document.getElementById`. However, you may use any other way to get the DOM element. You may use `document.querySelector`,  jQuery or any other framework you wish. It will work as long as the provided element is an HTML element, and is available at the DOM. If the element does not have an ID, it will automatically be assigned with one.

## Changes to your app’s manifest.json

* The Overwolf Ads Libs uses some Overwolf APIs to improve ad targeting for users. Therefore you should add the following permissions to your app’s manifest.json file:
```
"permissions": [
         "Extensions",
         "Streaming",
         "Profile",
         "GameInfo"
     ]
 ```
 * In order to get impression tracking to work well, you would also need to enable a work-around that allows requests to Google’s syndication servers. This is done by setting `"protocol_override_domains" : {"googlesyndication" : "http"}`, under the manifest.json "data" property:
 
 ```
 "data": {    
    "protocol_override_domains" : {"googlesyndication" : "http"}
    }
 ```
 
*   The following App Window Data flags should be set to `true`:
* [`"block_top_window_navigation":true`](http://developers.overwolf.com/documentation/sdk/overwolf/manifest-json/#windows-block_top_window_navigation) -  refrain from non `_blank <a>` ads from “taking-over” the entire app’s window.
* [`"popup_blocker":true`](http://developers.overwolf.com/documentation/sdk/overwolf/manifest-json/#popup_blocker) – Prevents new browser windows from being opened automatically using script.
* [`"mute":true`](http://developers.overwolf.com/documentation/sdk/overwolf/manifest-json/#windows-mute) - Mute sounds in window.

:::important General Note
Ads will be served to your app only after Overwolf enables it, so please contact us at developers@overwolf.com when your app is ready to show ads.
:::

## Important guidelines for ad integration

Unfortunately the advertising industry is still mostly designed to work with normal web pages, and not single page apps like Overwolf apps. This means that we are often very limited with how we can interact or display ads. 

More importantly, most advertisers will have code that is designed to prevent frauds and make sure the ads are truly visible to the users. That is why it is very important that your ad container will ALWAYS be visible on the page. 

Once you have instantiated a new OwAd object on a container, do not modify the container’s dimensions, z-index, visibility, opacity or display style properties. Doing so may result in ads not being displayed at all for your users, or being flagged as fraudulent by some advertisers.
