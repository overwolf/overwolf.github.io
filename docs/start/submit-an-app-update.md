---
id: submit-an-app-update
title: Submitting a new version of your app
sidebar_label:  Submit an App Update
---

## Overview

Your app is available on the Overwolf Appstore but you keep working to improve it. That’s awesome! You can send us a new version of the app whenever it’s ready.

## Submit a new version

Feel free to send the new version (including a detailed change log) to [developers@overwolf.com](mailto:developers@overwolf.com). You can also contact the Overwolf team through the Overwolf Developers Slack with the required information.  

Please make sure to keep it in the same format as your first submitted app, rather than sending fragmented files.
Also make sure to update the [app version](../api/manifest-json#meta-object) in the manifest. If nothing changed in your store assets, there’s no need to submit it (the app folder will do just fine).

## The process

After we received the new version, it will be added to our approval pipeline and It can take up to 96 hours before your app will be updated.

## Approved tests

We’ll upload your app to the Appstore and let you know! It can usually take between 4 to 8 hours before your users will get updated once the version is live.

#### Forcing users to update your app

Your app will be updated for your users after a few hours or as soon as they restart Overwolf. 

If you want to "force" them to update your app earlier, you can:

* Use the [updateExtension()](../api/overwolf-extensions#updateextensioncallback) to check and perform an update.

* Check for the user's current app version by using the [getManifest()](../api/overwolf-extension-current#getmanifestcallback) method (the current app version is under the manifest’s "meta" property) and compare it to the latest one (stored on your server). If the user has an old version of your app, you can ask him to restart Overwolf.

## Rejected tests

We want to make sure that your app is running smoothly on the Overwolf platform. We’ll send you a list of issues and feedback. Once you have a fixed version, be sure to send it over once again and we’ll test and approve it.

**Note**: A detailed change log will help our team to identify the changes better and will make the testing process faster.