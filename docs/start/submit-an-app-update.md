---
id: submit-an-app-update
title: Submitting a new version of your app
sidebar_label:  Submit an app update
---

Your app is available on the Overwolf Appstore and it's time to release new features you've been working on. That’s awesome! In this article we'll go over the process of submitting updates for your app in a few simple steps.

## Submitting a new version

To get the update cycle started, you need access to the developers console. If you don't have access yet, contact your Developer Success Manager through our Slack.  

The details for how to submit a new version, [can be found here](../topics/submit-a-new-version).

## Going Live

#### Forced user updates

In general, apps are updated automatically every few hours, or when Overwolf is restarted. 
If there's a good reason to "force" an early or immediate update, you can:

#### Use updateExtension() to check the app and perform an update:

  1. Call [checkForExtensionUpdate()](../api/overwolf-extensions#checkforextensionupdatecallback). If there is an available update - register for the [onExtensionUpdated]() event and call [updateExtention()](../api/overwolf-extensions#updateextensioncallback)).

  2. Once the update has completed succesfully, the onExtensionUpdated event is triggered, and you can call [relaunch()](../api/overwolf-extensions#relaunch). In case of fail, the callback of updateExtention() returns "success:false"

**No app should ever update while it’s being used in-game** unless the user explicitly requests it. In fact, there is a failsafe mechanism where this API will only work if a relevant user action is detected, such as clicking a button or otherwise choosing to update.

*Note:* Another method is checking the app's current version by using the [getManifest()](../api/overwolf-extension-current#getmanifestcallback) method.  
You can find the current app version under the manifest’s "meta" property. If the current version and your server stored version are not identical, you can prompt them to restart Overwolf to update the app.

## Rejected tests

We want to make sure that your app is running smoothly and that your update works just as well as your original app. If we spot any issues, we’ll send you a list of them along with feedback. Once you have fixed the issues we spot, you can send the update again as a new process to be reviewed.

**Note**: A detailed change log will help our team to identify the changes better and will make the testing process faster.
