---
id: technical-checklist
title: Technical Checklist
sidebar_label: Technical Checklist
---

:::note
By following this technical checklist, you will ensure a solid user experience in your app.  
As a bonus, once you complete the full list of recommendations, you could get up to a 7% improvement in your rev-share.
:::

## Pup (+ 1% to rev-share)

* Use your Main (index) window as a hidden controller that opens other windows.

* Window management is done according to best practices ([Read more here](../topics/using-overwolf-windows)).

* Avoid the use of full screen windows.

* 30ms to open every window ([Read more here](../topics/launch-time-performance)).

* App assets sizes are smallest as possible (Use [TinyJPG](https://tinyjpg.com/) & [TinyPNG](https://tinypng.com/)).

* Develop error notification for network downtime, API issues, servers errors ([Read more here](../topics/user-flow-and-error-handling)).

* Add and maintain changelog.

* Add a dedicated page which explains to the user why your app is bundled with Overwolf. Make sure you mention:  

  * Overlay capabilities.
  * Real-time game events.
  * A fast and simple development framework – allows you to write an in-game app with just HTML and JS without the need to master C++.
  * Helps you in monetization, which allows you to focus on the app more and thus drives a better product for your users.

## Hunter (+ 1% to rev-share)

* Add desktop mode to your app ([Read more here](../topics/app-specific-experience)).

* Avoid the use of transparency in your window design that is not 100% (the need to calculate pixel values may cause a performance hit).

* Add Knowledgebase articles ([Read more here](add-a-knowledge-base-to-app)).

* Add "Contact us" form ([Read more here](../topics/best-practices-overview)).

## Alpha (+ 1% to rev-share)

* Develop a FTUE ([Read more here](../topics/first-time-user-experience)).

* App detects and notifies the user if it needs to be updated ([Read more here](submit-an-app-update)).

* Follow local/server assets best practices ([Read more here](../topics/launch-time-performance)).

* Use your Reddit/Facebook/Twitter pages for technical updates (new version is available, Servers are down, servers are up, etc.).

* Develop in-game "Mini mode" (where applicable).

## Supreme (+ 4%)

* Develop a Game Summary Shelf with high user value around stats. The game summary will become an integral part of your app, and will be used as a promotion tool for your app for users who don’t have it installed. Your Game Summary Shelf needs to support being a part of your app and being an independent unit. ([Read more here](../api/overwolf-egs)).