---
id: app-channels
title: App Channels
sidebar_label: App Channels
---

This article will explain what App Channels are and how to create a new app channel using the Overwolf developer's console.

## What are App Channels

Channels are no longer exclusive to the Overwolf client, and your app can now also have channels; You can set a specific channel to use a particular version. This way, you can super easily create and distribute beta versions for your app.

## The "Production" and "Testing" servers

Until now, you worked with a single release server: the "Production" server. This server stores your latest public version of your app (and previous versions), enabling you to release easily and quickly updates and new versions to your users and even release "downgrades" for previous versions.

In addition to the "Production" server, you have the "Testing server." This server enables you to create multiple "version channels."  Each channel is bound to a different app version and gets a separate download link and release management system.  With this setup, you can quickly release updates, fixes, and new versions for this specific channel. 

For example, if one of your testers installed the "beta" channel version of your app, using the unique link that you supplied - you can get a list of bugs from him, fix them, and quickly distribute an improved version for your "beta" channel users.

When your app is ready to deploy - you can release the version to the production release server and phase it to your entire public user base.

## How to create a new App Channel

As mentioned above, you can easily create multiple app channels for your app through your dev console.

### 1. Create a new app channel

You can see the default `Production` release server in the screenshot, where you can [deploy public version](submit-a-new-version#upload-new-app-version). Under it, you can see the `Testing` server where you can deploy custom and beta versions of your app:

![production-and-testing](../assets/dev-console/app-channels/production-and-testing.png)

Currently, there are no custom app channels for this app. Let's create one. Click on the "Create Channel" button.

The app channel creation modal will popup, and we will create an app channel named "Beta", for our testers team:

![production-and-testing](../assets/dev-console/app-channels/create-channel-modal.png)

Now you can see that a new app channel is created, still, without any app that uploaded and released to this new channel:

![production-and-testing](../assets/dev-console/app-channels/channels-list.png)

### 2. Upload an OPK to the channel

Precisely like you [submit a new version of your app](submit-a-new-version#3-upload-the-new-opk), you need to upload an OPk to the new channel (on our case, a beta version of your app with unreleased features that need to be tested). And distribute/phase it to the app channel subscribers.

Click the "Manage" button of the new channel (in our example, the "Beta" channel):

![production-and-testing](../assets/dev-console/app-channels/manage-button.png)

Now you can see the good old OPK release page, where you can phase and release different app versions for this particular channel. Remember - that only the latest version is the "public" version distributed to the app channel subscribers whenever the app will get updated.

![production-and-testing](../assets/dev-console/app-channels/drop-opk.png)

### 3. Get the download link

After uploading the OPK to the custom channel, you get get a custom link for downloading this specific app channel "flavor":

![production-and-testing](../assets/dev-console/app-channels/copy-link.png)

After releasing a version to your new channel, you can go back to the channels list page and see which version is the "public" version of each channel. In our case, v3.0.9 is the released/public version of the "Beta" channel:

![channels-list-with-version](../assets/dev-console/app-channels/channels-list-with-version.png)

## Subscribe to an App Channel

There are two ways that your testers/users can get the custom app version from a speicif channel:

1. Use the custom download link - as [explained above](#3-get-the-download-link), after creating a new channel and upload an app version into it, a custom download link is generated automatically (an app that bound with the client, behave exactly like the download links from the store).

2. Use the API - as [explained below](#the-app-channels-api), you can use the API to change the current app channel, enabling you to integrate this feature in your app. For example, a combo box that enables your app users to change the channel from the app's UI.

## The App Channels API

You can implement the channels feature directly in your app using the app channels API. 

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
