---
id: using-dev-tools
title: Using Overwolf`s developers tools
sidebar_label: Using our dev tools
---

The Overwolf developer toolkit is a set of web authoring and debugging tools.  
You can use these tools for a variety of tasks, among them: Listing which assets the page has requested, how long each asset took to load, reviewing tools for currently-loaded HTML, CSS or JS, and more.

:::important
Chrome Developer Tools disabled as default. The only way to enable it, is by [adding a registry key](../topics/enable-dev-tools#download-registry-key).
:::

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

## Use the remote debugger

In addition to the developer tools debugger, you can use the regular chrome debugger.  

The remote debugger has two advantages:

1. Easier to use in a secondary monitor.  
   In some cases, like debug in-game windows, it's more convenient to open the debugger on a different screen, and not on as an in-game Overlay that can hide the UI.
2. Eliminate overwolf-debugger related issues.  
  In some hard to crack cases, it might help to open another debugger that might display the data differently.

  #### How to use the remote debugger

  1. Make sure your OW app is running.
  2. Open a new chrome browser tab.
  3. Browse to this URL: http://localhost:54284
  
You can see all the list of open OW apps and windows.  In this example, you can see a couple of Facecheck app's windows, along with our rocket league sample app, ads window, and more:

![alt-text](assets/dev-tools-11.png)

Clicking on a link will open a remote debugger tab.

## Use local debugger with debug_url flag

For local-server debugging (like react apps) you can use the [debug_url](../api/manifest-json#debug_url) flag.

### Run your React app locally

Runs on a node.js server.

1. download some react project. [This one for example](https://github.com/aditya-sridhar/simple-reactjs-app).
2. extract it to some folder and open it in VS Code.
3. Run in the terminal command *npm -i*

For this example, we assume that your react app is running on localhost:3000.

### Debug your OW app window locally

For this example, we assume that your app has two windows: a background controller called "main" and an app window called "popup".

1. In your app's manifest, add the [debug_url](../api/manifest-json#debug_url) flag on the same port as your react app (3000):
   
   "popup": { "file": "popup.html","debug_url": "http://localhost:3000" }
2. load your OW app as an unpacked extension.
3. Open the CEF remote debugging URL in chrome (http://localhost:54284).
4. Find the "main" app window on the list, and open it. The dev console will open for this window.
5. Open the "popup" window:*
   * *overwolf.windows.obtainDeclaredWindow('popup', console.log)*
   * *overwolf.windows.restore('popup', console.log)*
  
  The popup window will open, and your react app will load in it.  
   Now every change that you'll do in the react code will reflect in the OW window.

### Notes
* You must have a local web server installed on your machine.
* Valid only when loading unpacked extensions.
* Valid only with "localhost" / "127.0.0.1".