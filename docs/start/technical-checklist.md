---
id: technical-checklist
title: Technical Checklist
sidebar_label: Technical Checklist
---

:::note
Following this technical checklist improves user experience for your app.  
Seeing as gamer experience is our top priority, making your app the best it can be will be rewarded! Completing the full list of technical recommendations can increase your share of your apps revenues by up to 7%.
:::

## Pup (+ 1% to rev-share)

* Your Main (index) window is used as a hidden controller that opens other windows.

* Window management is done according to our best practices ([Read more here](../topics/using-overwolf-windows)).

* No full screen windows are used.

* All windows launch in up to 30ms ([Read more here](../topics/launch-time-performance)).

* App assets are as small as possible (Use [TinyJPG](https://tinyjpg.com/) & [TinyPNG](https://tinypng.com/)).

* Your app should have error notifications for network downtime, API issues and server errors. ([Read more here](../topics/user-flow-and-error-handling)).

* Create and maintain a changelog.

* Create a dedicated page which explains to gamers why your app is bundled with Overwolf. Make sure you mention:  

  * Overlay capabilities.
  * Real-time game events.
  * A fast and simple development framework – allows you to write an in-game app with just HTML and JS without the need to master C++.
  * Helps you in monetization, which allows you to focus on the app more and thus drives a better product for your users.

## Hunter (+ 1% to rev-share)

* Create a desktop mode for your app ([Read more here](../topics/app-specific-experience)).

* Avoid the use of non-100% transparency in your window design, calculating pixel values may cause a performance drop.

* Write Knowledgebase articles ([Read more here](add-a-knowledge-base-to-app)).

* Add a contact form ([Read more here](../topics/best-practices-overview)).

## Alpha (+ 1% to rev-share)

* Develop and implement a First Time User Experience (FTUE), ([Read more here](../topics/first-time-user-experience)).

* Your App will detect and notify users if it needs to be updated. ([Read more here](submit-an-app-update)).

* Follow local/server assets best practices. ([Read more here](../topics/launch-time-performance)).

* Use your Reddit/Facebook/Twitter for technical updates such as a new version announcement, servers down/up notification, etc.

* Develop an in-game "Mini mode", a condensed, compact view for key features of your app.  

## Supreme (+ 4%)

* Develop a Game Summary Tab with high user value around your collected stats. Doing so will make game summary an integral part of your app, and will be used as a promotional tool for users who don’t have your app installed yet. ([Learn more about Game Summary Tabs here](../api/overwolf-egs)).
