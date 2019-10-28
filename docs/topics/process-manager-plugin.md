---
id: process-manager-plugin
title: The Process Manager Plugin
sidebar_label: Process Manager Plugin
---

The Overwolf Process Manager Plugin allows your app to run executable (external program, EXE file) from an Overwolf app.
You can read the full list of functions and events available in the Process Manager Plugin in its [GitHub repository](https://github.com/overwolf/process-manager-plugin) .

## Common uses for the plugin

* Run an EXE file when your OW is launched or by demand.
* Use args and environment variables.

## Downloads

* You can download the plugin from our [GitHub rtepository](https://github.com/overwolf/process-manager-plugin).
* A sample Overwolf app using the Process Manager plugin can be found [here](https://github.com/overwolf/process-manager-plugin/tree/master/sampleapp).  
  This app runs notepad.exe once the Overwold app is launched.
* Note that the DLL file is placed inside of the app’s directory – so if you recompile it, you’ll need to replace the old DLL with the new one inside the folder. Please review the manifest.json file to view how to reference the Plugin file.
* All DLLs should be compiled for the x64 platform.

Don’t hesitate to ask us questions in our [developers Q&A site](https://discuss.developers.overwolf.com/).

## Unblock DLL's

When you download DLL files from a browser, Windows automatically marks it as unsafe. Please check the "Unblock" box in the DLL’s file properties to remedy this:

![Unblock dll](../assets/unblock_dll.jpg)
