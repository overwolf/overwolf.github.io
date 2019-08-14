---
id: using-dev-tools
title: Using Overwolf`s Developers Tools
sidebar_label: Using our dev tools
---

The Overwolf developer toolkit is a set of web authoring and debugging tools.  
You can use these tools for a variety of tasks, among them: Listing which assets the page has requested, how long each asset took to load, reviewing tools for currently-loaded HTML, CSS or JS, and more.

## How can I access the Overwolf developer tools?

There are two ways to unlock them:

### 1 - Using Hotkeys

1. Run the app.
2. Click on the app window that you want to debug.
3. Press Ctrl+Shift+I.

Doing this will immediately get you into the developmet tools menu for this app window.

### 2 - Through the Overwolf settings

1. Right click on the Overwolf tray icon.
2. Select Settings → Support tab → Development options.
3. Launch your app and select the relevant window's name.

After you launch the app you're debugging, each window's name will show up in the developers tools interface. You can click on any window name to bring up a full breakdown of available developer tools for that window:

![alt-text](assets/dev-tools-1.jpg)

## Explore each menu

### Elements

The Elements panel allows you to see your app window's HTML code during runtime, as well as CSS styles applied to each element.

![alt-text](assets/dev-tools-2.jpg)

### Network

The Network panel displays information about every network-related operation on a page. Use it to get insights into requests, downloaded resources and optimization opportunities when it comes to network performance.

![alt-text](assets/dev-tools-3.jpg)

### Sources

This menu enables breakpoint-based debugging for JavaScript. Breakpoints can be configured to only be triggered when specific or general conditions are met.
**Tip** – Make minified code easily readable by using the “pretty print” button ({ })

![alt-text](assets/dev-tools-4.jpg)

### Timeline

Makes it easier to spot non-permanent or situational issues, and enables you to improve the performance of your app by inspecting events that happen along an app’s usage timeline.

![alt-text](assets/dev-tools-5.jpg)

### Profiles

Learn more about memory usage and execution times of your app here. The CPU and Heap profilers help you find where resources are being spent.

![alt-text](assets/dev-tools-6.jpg)

### Resources

Review all loaded resources including databases, session storage, app cache, cookies, fonts and more.

![alt-text](assets/dev-tools-7.jpg)

### Audits

Analyzes your app and suggests ways for decreasing load time and increasing responsiveness.

![alt-text](assets/dev-tools-8.jpg)

### Console

Allows interaction with the JS and log diagnostic information during development.

![alt-text](assets/dev-tools-9.jpg)

## Enabling Time Stamps in Console

Sometimes it’s useful to see timestamps when you are debugging.  
To enable this, go to the console settings (top right wheel), and select your preferred timestamps preferences:

![alt-text](assets/dev-tools-10.png)
