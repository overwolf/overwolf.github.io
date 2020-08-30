---
id: video-capture
title: Video capture best practices
sidebar_label: Video capture best practices
---

## Overview

Overwolf offers two APIs with video capturing capabilities:  

1. [overwolf.media.replays](../api/overwolf-media-replays).
  * Mainly used to capture **short** highlight video replays of the currently running game.
  * You can capture a highlight manually, or you can use **auto-highlights capturing**.
  * Meant only for video capture to the local hard drive, **without streaming**.

2. [overwolf.streaming](../api/overwolf-streaming).
  * Mainly used to capture **long** videos of the currently running game, up to a full game capture.
  * Only manual capture is available, **No auto-highlights capturing**.
  * In addition to local capture, **streaming option is available** to supported services like Twitch, YouTube, Facebook, etc.

## Required Permissions

Using any of the above APIs requires the **VideoCaptureSettings** permission flag in your app manifest: Only apps with this permission will be defined as capture apps which can be configured in the OW client "capture" tab (see https://overwolf.github.io/docs/api/manifest-json#permissions-array)

#### Notes

* For playing a video from the local disk (using absolute file paths instead of the generated Overwolf "media://" path), you require adding **allow_local_file_access: true** flag in your app manifest.
* There is a problem with playing a video from the local disk when your app is running from within an iframe that is on a non-local domain.

See for an example the [overwolf.streaming.stop()](../api/overwolf-streaming#stopstreamid-callback) documentation.

:::important Windows 10 Hardware-Accelerated GPU Scheduling notice
[This feature](https://devblogs.microsoft.com/directx/hardware-accelerated-gpu-scheduling/) is currently supported on Windows 10 version 2004 or Build 19041 and Nvidia latest GPU driver (451.49). When set to ON, it might cause captured videos to be laggy/choppy.  

We created a quick experimental plugin with [a simple way of detecting whether it is ON or OFF](https://github.com/overwolf/experimental-plugin) (you just need to download the plugin and add it. Don't forget to unblock the dll)
If you detect it is ON, you should display a warning to the user with a link to set this setting to OFF: 
You may open the relevant Windows Graphics settings by calling: [overwolf.utils.openUrlInDefaultBrowser('ms-settings:display-advancedgraphics')](../api/overwolf-utils#openurlindefaultbrowserurl);
:::

## Comparison table

To summarize, these are the main differences between the **overwolf.media.replays** API to the **overwolf.streaming** API:

Feature                    | overwolf.media.replays   | overwolf.streaming             | 
-------------------------- | -------------------------| ------------------------------ |
Auto-highlights capturing  | +                        | -                              |     
Manual capture             | +                        | +                              |     
Custom capture length      | +                        | +                              |     
Streaming support          | -                        | +                              |     

## Using overwolf.media.replays

With this API, you can listen to game events and manually start and stop video capture.

As mentioned above, the real "power" of this API is to auto-detect and auto-capture game highlights:  
When this feature is enabled, there's no need to understand each supported game's mechanics, game flow, edge cases, timings, etc. Just request any supported game's highlight, and OW provides you with a video file that includes this event.

Here you can find a [list of auto-highlights supported games](auto-highlights).

Below, you can find a description of both capture methods: manual capture and auto-highlights capture.

### Manual Capture

Basic usage flow:

1. **Register to relevant capture events for your app.**
   * The [available events](../api/overwolf-media-replays#events-reference) are: onCaptureError, onCaptureStopped, onCaptureWarning, onReplayServicesStarted.

2. **Call [overwolf.media.replays.turnOn()](../api/overwolf-media-replays#turnonparameters-callback)** with the auto-highlights feature disabled:
   * Set the **enable** field of the [overwolf.media.replays.ReplayHighlightsSetting](../api/overwolf-media-replays#replayhighlightssetting-object) Object to **false**.
   * You may also set the capture buffer that is used for all the other functions:  
   For example, if you set a 3 minute buffer, you will be able to capture game highlights not longer than this buffer.

3. **Listen to your game events** and wait for the game highlight (match_start, kill, etc.) that you want to capture.  
   Once it occurred - start to video capture the screen:

4. **Call [overwolf.media.replays.startCapture()](../api/overwolf-media-replays#startcapturereplaytype-pastduration-callback)** methods:  
    * Note that it won't automatically stop until you call [stopCapture()](../api/overwolf-media-replays#stopcapturereplaytype-replayid-callback).
    * It's useful if you want to stop the capturing based on a future event. If you want to automatically stop after it reaches **futureDuration**, you can use [capture()](../api/overwolf-media-replays#capturepastduration-futureduration-capturefinishedcallback-callback).
    * Note that in all methods, the replay ID returns via callback, and it is needed to finish capturing the replay.

5. **Call [overwolf.media.replays.stopCapture()](../api/overwolf-media-replays#stopcapturereplaytype-replayid-callback)**.
   * Finishes capturing a replay and returns a URL leading to the created video file. 
   * Note that you only need to call stop if you called **startCapture()** without setting the **futureDuration** parameter. Otherwise, the capture is stopped automatically.

6. **Call [overwolf.media.replays.turnOff()](../api/overwolf-media-replays#turnoffcallback)**, as soon as you’re no longer interested in capturing video in order to free up resources.

### Auto-highlights capture

Basic usage flow:

1. **Register to relevant capture events for your app.**  
   * The [available events](../api/overwolf-media-replays#events-reference) are: onCaptureError, onCaptureStopped, onCaptureWarning, onReplayServicesStarted, onHighlightsCaptured.

2. **Call [overwolf.media.replays.turnOn()](../api/overwolf-media-replays#turnonparameters-callback)** with the auto-highlights feature enabled:
   * Set the **enable** field of the [overwolf.media.replays.ReplayHighlightsSetting](../api/overwolf-media-replays#replayhighlightssetting-object) Object to **true**.  
   Here you also set the capture buffer that is used for all the other functions.
   * With this mode, you don't need to start or stop the capture. It's done automatically.
   * Once a highlight is captured, the **onHighlightsCaptured** event is triggered, and contain the URL of the created video file.

3. **Call [overwolf.media.replays.turnOff()](../api/overwolf-media-replays#turnoffcallback)**, as soon as you’re no longer interested in capturing, in order to free up resources.

Note that all the processes that use the auto-highlights mode considered to be a "single" user. So no conflicts. Few apps can work together and capture the same highlights.

## Using overwolf.streaming

With this API, there is no auto-detect and auto-capture of the game highlights, as it mainly used to capture the full-length of the game (or stream it to Twitch, Youtube, etc).

You should mainly listen to when a game/match starts and when it end, and manually start and stop the video capture.  

### Usage flow

This is the basic usage flow:

1. **Register to the relevant capture events** for your app.
   * The [available events](../api/overwolf-streaming#events-reference) are: onStreamingSourceImageChanged, onStopStreaming, onStartStreaming, onStreamingError, onStreamingWarning, onVideoFileSplited.

2. **Get the available stream encoders.**  
   * Call [getStreamEncoders()](../api/overwolf-streaming#getstreamencoderscallback) and [getAudioDevices()](../api/overwolf-streaming#getaudiodevicescallback).
   * This returns a list of all possible encoders and audio devices – you can then use this list to let users select their preferred encoder/device.
   * In terms of encoder priorities – we recommend: NVIDIA > AMD > INTEL > x264.
   * As long as the "enabled" field = true, you can offer users to use the encoder.

3. **Call overwolf.streaming.start().**
   * Create a JSON object with all streaming details and call [start()](../api/overwolf-streaming#startsettings-callback).  
   [Here](../api/overwolf-streaming#usage-examples) you can find a complete usage example.
   * For video recording, you don’t need the **ingest_server**, **stream_info**, and **auth** objects.
   * For video recording, we recommend using a **max_kbps** value of higher than 8000.
   * For streaming, we recommend using a **max_kbps** smaller than 3000.
   * Once start succeeded, you’ll get a callback with **result.status == "success"** and a **stream_id** that can be used to stop the streaming session or change the volume of the stream.

4. **Allow users to change volume.**
   * Allow the user to change volume with [changeVolume()](../api/overwolf-streaming#changevolumestreamid-audiooptions-callback) while streaming.

5. **Call overwolf.streaming.stop().**
   * Call [stop()](../api/overwolf-streaming#stopstreamid-callback) to stop the streaming session.

### Extras

* Use [setBRBImage()](../api/overwolf-streaming#setbrbimagestreamid-image-backgroundcolor-callback) when streaming to Twitch.tv when `capture_desktop` is not enabled, this will allow you to customize the Be-Right-Back image that viewers will see.
* Use [setWindowStreamingMode](../api/overwolf-streaming#setwindowstreamingmodewindowid-streamingmode-callback) for video recording and streaming – this method works on a per-overwolf-window basis – for each window you can decide if it is to be shown in the stream or not – regardless of whether the streamer is viewing it or not.
* Use [setWindowObsStreamingMode](../api/overwolf-streaming#setwindowobsstreamingmodewindowid-obsstreamingmode-callback) when you aren’t streaming with Overwolf but want to leverage Overwolf’s APIs and stream with OBS.

