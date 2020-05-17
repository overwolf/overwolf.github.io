---
id: communicating-between-windows
title: Communicating between windows
sidebar_label: Windows Communication
---

Over the years we had multiple methods used to communicate between Overwolf windows: localStorage events, cookies and more.
But due the fact that windows of the same app share the same process, the communications between windows can be done with direct pointers to the window/DOM, without any overhead. Naturally, this also means that the calls are synchronous.

Recommended ways to communicate between app windows:

## Using a background controller

In our experience the best method for communicating between windows of the same app is using [`overwolf.windows.getMainWindow()`](../api/overwolf-windows#getmainwindow). This function allows you to get direct access to your main index page and it’s HTML Window object - including any JS function or DOM element.   

Using this method, you can use a shared “communication-bus” variable that allows different windows to communicate.  

We strongly recommend not to use [overwolf.windows.getOpenWindows()](../api/overwolf-windows#getopenwindowscallback) for windows communication.

* Read more about [background controllers](windows-tips#use-a-background-controller). 
* Download [our sample app](../start/sample-app-overview) which demonstrates all basic design principals.

## Using direct messages

Another option for communication between windows is the method [`overwolf.windows.sendMessage()`](../api/overwolf-windows#sendmessagewindowid-messageid-messagecontent-callback). This method allows to send messages directly to a window. The window receiving the message needs to listen on the [`overwolf.windows.onMessageReceived event`](../api/overwolf-windows#onmessagereceived).

:::warning
Using sendMessage is not our best practice since it might not work on some occasions, for example, when sending extremely long messages .
:::

## Communication channels using an iframe inside an Overwolf window

The recommended way to access the overwolf object from an online web page loaded inside an iframe is to set up a communication channel using the [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) method.  

To do so, allow your app to load and communicate with your domain via [externally_connectable](../api/manifest-json#externally_connectable) configuration in the manifest.  

Your web page should post a message to the parent window (the Overwolf app) containing the page.  

In the Overwolf app add an event listener for “message” event and validate the origin of the message:

```js
window.addEventListener("message", message => {
	if (message.origin !== "https://yourdomain.gg") {
	return;
	}

	let data = message.data;
	if (!data) {
	return;
	}

	// do something interesting with the data
});
```

Make sure to handle cases where the iframe may not load or when an error may prevent setting the communication channel (a fallback or retry mechanism).