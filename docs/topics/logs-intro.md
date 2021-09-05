---
id: logs-intro
title: What are Overwolf logs
sidebar_label:  What are Overwolf logs
---

Logs are a recording of all the processes and changes made while Overwolf is running. These include details such as the users computer specs, which game and app are being played and recording details. You can use these logs to get insights about what exactly was happening on Overwolf while it was active. Moreover, you can use this information in order to troubleshoot and resolve various issues.

## Location of the log files

You can find the log files located in the local app data-folder, quickest way to get there is by entering `%localappdata%\Overwolf\Log` into your explorer window.

Files and folders you might encounter in this folder are:

* `Apps` (folder, containing log files for all installed applications in Overwolf)
* `CrashHandler.log` (file(s), created when Overwolf expierences a crash)
* `highlights.log` (file, logs info about games and sessions with highlight-support)
* `Installer` (folder, logs related to installation of Overwolf)
* `InstallerTrace_<processID>_<date>_<time>.log` (file(s), installer logs for apps)
* `OverwolfBrowserError_<processID>.log` (file(s), detailed errors when the CEF experiences errors)
* `OverwolfCEF_<processID>.log` (file(s), contains debug info if the chromium framework has problems)
* `ServerTrace_<date>_<time>_<processID>.log` (file(s), logs for server communication)

Other files found in this folder is explained below and in their on respective page.

## DxDiag

This file contains system information such as OS version & Build, information on your users Processor and Display & Sound devices.

You can use this log file (`DxDiag\OverwolfDxDiag.txt`) to investigate the following issues:

* Issues in app display
* Issues with recordings
* Issues with sound

Read more about the DxDiag log [here](logs-dxdiag).

## Trace logs

The Trace logs (example `Trace_<date>_<time>_<processID>.log`) will help you keep trace of all the actions taken by Overwolf.  

In the trace logs you will find the following information: 

* The installed Overwolf version 
* OS information
* Overwolf user information (If the user is logged in) 
* Gamelist version
* If Hardware Accelerated GPU Scheduling is enabled
* If the overlay is enabled
* If Overwolf helpers launched correctly
* Which extensions are running
* Which Overwolf processes are running & when Overwolf processes have closed
* Other processes currently running on the computer

You can use this log file to investigate the following issues: 

* Issues opening an app
* Issues with the overlay
* Indication of active app windows
* Subscription (If user is logged in)
* If there is a third party app that may interfere with the overlay

Read more about the Trace logs [here](logs-trace).

## OBS

OBS is the engine that Overwolf client use to record games. 

In the OBS logs (example you will find: `ow_obs_<date>_<time>-p<processID>.txt`)

* The system information
* Driver versions
* Display & Sound devices that are in use
* Capture configurations (Resolution, FPS, bitrate, encoder) 
* Information regarding the recordings captured

You can use this log file to investigate the following issues: 

* Game not recording
* Laggy recordings
* Sound issues while recording

Read more about the OBS log [here](logs-obs).

## OverwolfPerf

In this file (`OverwolfPerf.txt`) you can view the performance details of Overwolf and the Overwolf apps in the last run.

You can use this log file to investigate the following issues:

* High resource usage of CPU and RAM per Overwolf process
* Lags & freezes 

Read more about the OverwolfPerf log [here](logs-overwolfperf).

## Overlay game HTML

These logs will appear as an HTML file with the game title (For example `League of Legends_07-03-21_05-17-06.Game.html`), Overwolf Helper and Overwolf Help 64. 

In the Overlay game HTML you will find:

* Which processes were injected
* Which dlls were injected into the game (Including Overwolf)
* Resolutions and windows mode
* Rendered API
* Hooking system
* If the render was successful
* If the hotkeys were sent and received by Overwolf 
* If the game ended properly or crashes

Read more about the Overlay log [here](logs-html).
