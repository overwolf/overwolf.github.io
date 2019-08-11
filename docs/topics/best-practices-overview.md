---
id: best-practices-overview
title: Best Practices
sidebar_label: Overview
---


This page contains our best practices for developing and implementing your Overwolf app. It is the sum of our experience as well as the accumulated knowledge of our developer community. As our development platform and Appstore mature, and as we learn more with developers’ experience, these recommendations will be updated. We would love to hear your own advice and learn from your experience, so please feel free to send us your feedback at developers@overwolf.com

## Product/Design


### FTUE
Please remember that a user that just installed your app, never used it before and probably needs assistance/guidance in order to understand the app’s features and easily starting using it properly. A successful FTUE greatly increases the chances of retaining your users.

* As a first step, you can show a guidance page which explains the main features of the app and what the user should do next (e.g sign-in to Twitch, provide LoL summoner name and region, etc.). A more advanced FTUE will guide the user through the app’s features/elements by providing a step-by-step tutorial/guidance.
* You can see examples for that by looking on the following Fortnite live stats and Game Summary FTUE:

VIDEOS HERE

### App support page
* One of the most important parts that must be available before your new app goes live, is your app’s support page. The support page should include the following sections:
  * FAQ – What Does your app do? How to use it? What games are supported? etc.
  * Troubleshooting – A list of known issues and ways to solve them
  * App’s changelog
* Don’t forget to provide a link to the support page in a prominent location in your app
* You can see an example for an app support page [here](http://support.overwolf.com/article-categories/legendary-builds/)

IMAGE HERE

### Discord server
* We recommend you to have an invite link to your app’s discord server within the app. 
* This will allow users to communicate feedback, bugs, suggestions or anything else that they might find inside the app.
  * Put the discord logo in the right side of the header (next to the minimize and X, etc)
  * Clicking on it will open the default browser when on desktop with the invite link to the server.
  * When in-game, open the overwolf browser. 
  
### Monetization
* You can easily start making money by adding video or display banners ads to your app. To learn more, check out our [Ads SDK.](../start/ads-sdk-overview)
* Forgivable ads – Think how, when and where you want your users to see the ads being served through your app, you don’t want to ruin their gaming experience. Please make sure you follow our [Ads Policy.](../start/monetization-overview#ads-policy)
* An example for a 400×300 video in the Fortnite tracker app:

IMAGE HERE

### Tooltips
* Don’t forget to add tooltips to non-trivial buttons or displayed data, as they greatly increase the cohesiveness of your app. Make sure to make your tooltips short and to the point.
* An example for a tooltip in the Legendary Builds app:
IMAGE HERE

### Talk to us
* Getting feedback from users is essential for the app’s success. Add the option for users to share feedback regarding the app. 
* Based on the Facecheck team experience with this feature, adding this will bring good reviews and bad reviews. you can use both to improve your app.
* Example for this:

IMAGE HERE

### In and Out of game behavior
* Decide how your app will be used in and out of game, most apps behave differently in those two states. Remember that most users will use your app for the first time right after they downloaded it from the Appstore (out of game), so make sure they’ll see a welcoming, simple and easy-to-understand screen.
* Example for in and out of game behavior in the Legendary Builds app:
   * Out of game mode (desktop) – the user manually selects a champion to see its builds:
   
 IMAGE HERE
   
   
   * In-game mode – The app automatically detects the player’s champion and shows its builds:
 
 
   
  
 IMAGE HERE
 
### Hotkeys
* When in game, users don’t always have the time to click on your app’s icon in the Overwolf dock, so make sure to provide them convenient hotkeys to show/hide your app during the game.
* Allow users to change the hotkeys combination from inside your app’s settings panel. More information about hotkeys can be found in the manifest.json and overwolf.settings API pages.
* An example for an app window that allows the user to change the hotkeys combination:

### Window control buttons
* Add window control buttons (close, minimize, etc.) to your app’s windows, there’s nothing more disturbing for a user than not being able to close an app window during a game.

### Your app look
* If your app is designated to be used in a specific game, try to create a UI that will be integrated with the game’s look and feel.
* Here you can see an example of [Spawning Tool](https://www.overwolf.com/app/overwolf-spawning_tool_build_advisor) – an app for Starcraft. As you can see, the app was designed to have a Starcraft-like look.
IMAGE HERE

### Listen
* Ask your users for feedback, hear what they say and try to take their insights and create a better and more successful app experience for them. One way for getting users’ feedback is by opening feedback pages on Twitter and Reddit. These pages should be accessible via links shown in the app’s main or settings windows.
* Here you can see an example for feedback section in the Legendary Builds app window:

IMAGE HERE

### Plan ahead
* Think about the long run, will your app function well under the load of many concurrent users? Will your database support your app’s future elements/features? Try to find any future bottlenecks that might impact users experience.

### Game’s intellectual property terms and conditions
* Before you start building your app, go over the game’s developer/publisher guidelines for using its IP, we won’t be able to publish an app that breaks one or more of these guidelines. [Here](https://www.riotgames.com/en/legal) is an example for Riot’s (League of Legends) guidelines for the community’s use of their IP.

### Error notifications
* Errors are a big point of frustration for users, nobody likes them, but we need to handle them in the best way possible. Think about all of the possible scenarios and places in your app where things could go wrong. List them out, and then start to assign a concise error message to each.
* Examples for common/possible Overwolf apps errors:

  * Game API is not available
  * The user’s champion/hero data couldn’t be fetched
  * Network error
  
* Example of error messages in LoLwiz and Legendary Builds:

IMAGE HERE


### Ad container placeholder
* Place your apps logo underneath the ad layer, so when there are no ads, the container will display something to the user.
* Example:

IMAGE HERE

### Analytics
* Please use an analytics service for your app, more information about app analytics can be found [here](../app-analytics)

## Technical

### Windows
* Overwolf apps are supposed to act like a native desktop applications and not as a website. Please make sure you go over our best practices for using windows before implementing your app windows structure in order to avoid basic mistakes and improve your app’s behavior and user experience.

### manifest.json
* Use our [JSON schema validator](../api/manifest-json#validate-your-manifestjson) in order to locate missing or wrong data value/type in the manifest file.

### Overwolf APIs
* Understand and identify all available API’s – Browse the API documentation, search for available functions that might assist you in the development process of your app or help you creating new features for it.
* I/O plugin – Make sure you know how to use the Overwolf simple I/O plugin, it will allow you to read files from the local disk, and, for example, get interesting information from the games log files.

### App’s size
* Your app will be downloaded by thousands of users, and will be updated (downloaded again) from time to time, that means lots of network traffic and local storage being used. Please make sure your app is as light as possible by deleting unnecessary files, compressing and resizing image or audio assets being used and even downloading really large files from the cloud instead of adding them to your app’s folder.
* We recommend using Websiteplanet Image compressor and TinyPNG to reduce images size.

## Testing
* Test your app on a regular basis. Game developers and Overwolf constantly improve, change and add new features. By regularly testing your app, you will find out whether one of these changes breaks it.
* You can use our Overwolf Developers channel to test your app on the future Overwolf version to be released, please let us know if you see anything that is not functioning as usual or breaks.
* Test your app on various screen sizes, make sure your app’s window doesn’t take over small laptop screens and blocks the user from seeing the game’s action.
* Use the community to test your new app before publishing. Beta users from the community can download and test your new app by using a unique link to the app’s page in the Appstore. Just contact us when your app is ready for beta testing and we will assist you doing that.
* Visit this page to read more information about testing your app
