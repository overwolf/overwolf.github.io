---
id: launch-time-performance
title: Launch Time Performance
sidebar_label: Launch Time Performance
---


Overwolf users expect your app to be responsive and fast to load. An app with a slow startup time doesn't meet this expectation, and can be disappointing to them. All apps are built differently, so it makes sense that some apps take a bit more time to open their main window; nevertheless, you should try to optimize the startup times as much as you can.

#### Things to pay attention to

* App assets (images, fonts, etc.) that are needed for the app’s “home” or “notification” windows (windows that the user sees when the app is launched for the first time) should be stored locally (in the .opk file) for faster loading times.

* Use long-term caching to avoid having to re-fetch resources that haven’t changed (e.g. LoL Champions and items images).

* Compress your app’s JavaScript. Comments and whitespace are not needed for JavaScript execution, removing them will reduce file size and speed up script execution times.

* Compress images with [JPEGMini](http://www.jpegmini.com/) or [TinyPNG](https://tinypng.com/).

* Removing non-critical JavaScript from your app can reduce transmission times, CPU-intensive parsing and compiling and potential memory overhead.

* During runtime, long-running JavaScript can block the main-thread causing pages that are unresponsive. Chunking up work into smaller pieces can minimize responsiveness issues.

The best practice is to load any window under 30ms once the user clicked to open the app from the Overwolf dock or used to hotkey in-game. A loader can be used once the app has been launched.


<div class="box" data-slick='{"slidesToShow": 2}'>
  <a data-fancybox="gallery" data-caption="CSGO" href="../assets/launch-time-performance/THLoader.jpg">
    Trophy Hunter loader
    <span class="thumb">
      <img src="../assets/launch-time-performance/THLoader.jpg" alt="CSGO">
    </span>
  </a>
  <a data-fancybox="gallery" data-caption="CSGO" href="../assets/launch-time-performance/csgoScoutLoader.jpg">
    CSGO Scout loader
    <span class="thumb">
      <img src="../assets/launch-time-performance/csgoScoutLoader.jpg" alt="CSGO">
    </span>
  </a>
</div>