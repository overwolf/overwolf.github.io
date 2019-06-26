---
id: using-events
title: Using Events in Your App
sidebar_label: Using Events in Your App
---
This is a very basic overview about javaScript events, the mechanisem that we are using in the various Overwolf's API's.

If you are familiar with JS events, and you want to learn how to use the Overwolf game events, please skip directly to the [overwolf.games.events API](../api/overwolf-games-events).

## JS Events overview

An event is an object that allows you to be notified when something interesting happens.
Here’s an example of using the `onStopStreaming` event to be notified whenever a stream has been stopped:

```js
overwolf.streaming.onStopStreaming.addListener(
    function (value) {
        alert("a stream with id " + value.stream_id + " had stopped");
    }
);
```

As the example shows, you register for notification using addListener().

:::warning
We’ve seen situations where apps would register (addListener) multiple times on the same event – this caused the event to be triggered multiple times and for unexpected bugs and memory leaks, so please pay extra attention when registering to events.

You also have the option of unregistering from an event via the removeListener() function.
:::

## addListener(callback)

#### Version added: 0.78 

> Registers a listener to the event. When the event occurs, all of the registered listeners are called.

Parameter     | Type     | Description                                                                       |
--------------| -------- | --------------------------------------------------------------------------------- |
callback      | function | The callback function to call when the event occurs                               |

## removeListener(callback)

#### Version added: 0.78 

> Unregister a listener to the event.

Parameter     | Type     | Description                                                                                                                 |
--------------| -------- | --------------------------------------------------------------------------------------------------------------------------- |
callback      | function | The callback should be the same function that was passed to addListener()</br>**so this won’t work with anonymous function**  |
