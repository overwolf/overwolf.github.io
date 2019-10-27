---
id: submit-an-app-update
title: Submitting a new version of your app
sidebar_label:  Submit an App Update
---

Your app is available on the Overwolf Appstore and it's time to release new features you've been working on. That’s awesome! In this article we'll go over the process of submitting updates for your app in a few simple steps.

## Submitting a new version

To get the update cycle started, send the new version, including a detailed change log, to [developers@overwolf.com](mailto:developers@overwolf.com). You can also contact the Overwolf team directly through our Slack with the required information.  

Please keep your update documentation and files in the same format as your original submission, rather than sending fragmented files.
Once the version has been changed, update the [build version](../api/manifest-json#meta-object) in the manifest. If nothing has been changed in your app's store assets, the app folder will do just fine.

## Going Live

After receiving the new version, it will be added to our approval pipeline and we'll get to reviewing it in up to 96 hours. Assuming the review process goes well and no issues were spotted, you can expect your approved update to go live 4-8 hours after completing our review. 

#### Forced user updates

Apps are automatically updated by users every few hours, or when they restart Overwolf. 
If there's a good reason to "force" an early or immediate update, you can:

#### Use updateExtension() to check the app and perform an update:

  1. Call [checkForExtensionUpdate()](../api/overwolf-extensions#checkforextensionupdatecallback).

  2. If there is an update - register for the [onExtensionUpdateStateChanged](../api/overwolf-extensions#onextensionupdatestatechanged) event, and call [updateExtention()](../api/overwolf-extensions#updateextensioncallback)).

  3. Once the the event is triggered and the update is completed succesfully, you can call [relaunch()](../api/overwolf-extensions#relaunch).

**No app should ever update while it’s being used in-game**, unless the user explicitly wanted it. In fact, there is a failsafe mechanism where this API will only work if a user action that active it is detected.

*Note:* Another method is to check the user's current version by using the [getManifest()](../api/overwolf-extension-current#getmanifestcallback) method.  
You can find the current app version under the manifest’s "meta" property. If their current version and your server stored version are not identical, you can prompt them to restart Overwolf.

## Rejected tests

We want to make sure that your app is running smoothly and that your update works just as well as your original app. If we spot any issues, we’ll send you a list of them along with feedback. Once you have fixed the issues we spot, you can send the update again as a new process to be reviewed.

**Note**: A detailed change log will help our team to identify the changes better and will make the testing process faster.
