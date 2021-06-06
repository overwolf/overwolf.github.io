---
id: app-channels
title: App Channels
sidebar_label: App Channels
---

## Intro

Channels are no longer exclusive to the Overwolf client, and your app can now also have channels; You can set a specific channel to use a particular version.  
This way, you can super easily create and distribute beta versions for your app.

## The "Production" and "Testing" servers

Until now, you worked with a single release server: the "Production" server. This server stores your latest public version of your app (and previous versions), enabling you to quickly release updates and new versions to your users easily and even release "downgrades" of earlier versions.

In addition to the "Production" server, you have the "Testing server." This server enables you to create multiple "version channels."  Each channel is bound to a different app version and gets a separate download link and release management system.  With this setup, you can quickly release updates, fixes, and new versions for this specific channel. 

For example, if one of your testers installed the "beta" channel version of your app, using the unique link that you supplied - you can get a list of bugs from him, fix them, and quickly distribute an improved version for your "beta" channel users.

## How to create a new App Channel

As mentioned above, you can easily create multiple app channels for your app through your dev console.

Dashboard => Release Managment => Testing => Create Channel.

Shortly we will update with some screenshots and more details.

## The App Channels API

You can implement the channels feature directly in your app, using the app channels API. 

You can read the current installed channel of your app using [overwolf.settings.getExtensionSettings()](../api/overwolf-settings#getextensionsettingscallback) (and display it in your app's UI for example).

```js
overwolf.settings.getExtensionSettings() //{"settings":{"channel":"beta"},"success":true}
```

You can change the current channel using [overwolf.settings.setExtensionSettings](../api/overwolf-settings#setextensionsettingsextensionsettings-callback) (and enale your app users to change thier app version for example).

```js
overwolf.settings.setExtensionSettings({ channel: "beta" })
```

## App Channels Sample App

You can download our [App Channels sample app]() that demonstrates how to use the app channels feature and API.

* link will be available soon.
