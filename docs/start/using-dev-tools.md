---
id: using-dev-tools
title: Using Overwolf`s Developers Tools
sidebar_label: Using OW Developers Tools
---

The Overwolf developer tools are a set of web authoring and debugging tools.  
They can do a variety of things such as: showing which assets the page has requested, how long they took to load, inspecting currently-loaded HTML, CSS JS and more.

## How to pull it up

Two ways to pull it up:

### From the keyboard

1. Run the app.
2. Click on the relevant app window that you would like to debug.
3. Hit Ctrl+Shift+I

That will open the developmet tools for this window.

### From the Overwold settings

1. Right click on the Overwolf tray icon.
2. Select Settings → Support tab → Development options.
3. Launch your app and select the relevant window name.

After you launce the app, you can click on one of the open app winodws, and it will open the developer tools for this window:

![alt-text](assets/dev-tools-1.jpg)

## Explore the pannels

### Elements

The Elements panel allows you to see what the HTML on your app’s window looks like at runtime, as well as what CSS is applied to each element.

![alt-text](assets/dev-tools-2.jpg)

### Network

The Network panel records information about each network operation on a page. Use it to get insights into requested and downloaded resources and optimize your page load performance.

![alt-text](assets/dev-tools-3.jpg)

### Sources

Lets you debug your JavaScript using breakpoints. Breakpoints can be configured to only be triggered when certain or general conditions are met.
**Tip** – Make a minified code readable by pressing the “pretty print” button ({ })

![alt-text](assets/dev-tools-4.jpg)

### Timeline

Allows you to improve the runtime performance of your app by recording and inspecting events that happen during the app’s lifecycle.

![alt-text](assets/dev-tools-5.jpg)

### Profiles

Know more about memory usage and execution time of your app. The CPU and Heap profilers help you find where resources are being spent.

![alt-text](assets/dev-tools-6.jpg)

### Resources

Inspect all loaded resources including databases, session storage, app cache, cookies, fonts and more.

![alt-text](assets/dev-tools-7.jpg)

### Audits

Analyzes and suggests ways for decreasing load time and increasing responsiveness.

![alt-text](assets/dev-tools-8.jpg)

### Console

Allows interaction with the JS and log diagnostic information during development.

![alt-text](assets/dev-tools-9.jpg)

## Enable Time Stamps in Console

Sometimes it’ is useful to see the timestamps when you are debugging.  
To enable it, go to the console settings (top right wheel),  and check the timestamps option:

![alt-text](assets/dev-tools-10.png)
