---
id: video-capture
title: Video capture using Overwolf API's
sidebar_label: Video capture using Overwolf  
---

## Overview

Overwolf offers two APIs with video capture capabilities:  

1. [overwolf.media.replays](../api/overwolf-media-replays).
  * Mainly used to capture a **short** highlight video reply of the currently running game.
  * You can capture a highlight manually, or you can use the **auto-highlights detection**.
  * Offers only video capture to the local disk, **without streaming**.

2. [overwolf.streaming](../api/overwolf-streaming).
  * Mainly used to capture a **long** video capture of the currently running game. (even a full game capture)
  * Only manual capture is available, **No auto-highlights** detection.
  * In addition to local disk capture, **streaming option is available** to supported services like Twitch, YouTube, Facebook, etc.

## Required Permissions

Using any of the above APIs requires the **VideoCaptureSettings** flag in your app manifest: Only apps with this permission, will be defined as a capture apps than can be configured in the OW client "capture" tab.

Additionally, some file operations that related to videos, might require adding `allow_local_file_access : true` flag in your app manifest.
For example - if you want to play the captures videos using the absolute file path (instead of the generated Overwolf "media://" path).

See for an example the [overwolf.streaming.stop()](../api/overwolf-streaming#stopstreamid-callback) documentation.

## Comparison table

To summerizem, these are the main differentials between the **overwolf.media.replays** API to the **overwolf.streaming** API:

Feature                | overwolf.media.replays   | overwolf.streaming             | 
---------------------- | -------------------------| ------------------------------ |
Highlights detection   | +                        | -                              |     
Manual capture         | +                        | +                              |     
Custom capture length  | +                        | +                              |     
Streaming support      | -                        | +                              |     

## Using overwolf.media.replays

With this API, you can listen to game events and manually start and stop the video capture.  
But, as mentioned above, the real "power" of this API is to auto-detect and auto-capture the game highlights:  

There's no need to understand each supported game's mechanics, game flow, edge cases, timings, etc.  
Just request any supported game highlight, and OW provides you with a video file that includes this event.

Following, you can find a description of both capture methods: manual capture and auto-highlights capture.

### Manual capture

This is the basic usage flow:

1. Register to the relevant capture events for your app.  
   The [available events](../api/overwolf-media-replays#events-reference) are: onCaptureError, onCaptureStopped, onCapureWarning, onReplayServicesStarted.

2. Call [overwolf.media.replays.turnOn()](../api/overwolf-media-replays#turnonparameters-callback) with the auto-highlights feature disabled:  
   Set the `enable` field of the [overwolf.media.replays.ReplayHighlightsSetting](../api/overwolf-media-replays#replayhighlightssetting-object) Object to `false`.  
   Here you also set the capture buffer that uses for all the other functions:  
   For example, if you set a 3 min buffer, you able to capture a game highlight that is not longer than this buffer.

3. Listen to your game events and wait for the game highlight (match_Start, kill, etc.) that you want to capture.  
   Once it accrued - start to video captur the screen:

4. Call one of the [overwolf.media.replays.startCapture()](../api/overwolf-media-replays#startcapturereplaytype-pastduration-callback) methods:  
   Here you can set the pastDuration and futureDuration buffers.  
   Note that all the methods, the replay id returns in the callback which is needed to finish capturing the replay.

5. Call [overwolf.media.replays.stopCapture()](../api/overwolf-media-replays#stopcapturereplaytype-replayid-callback).  
   Finishes capturing a replay and returns a url to the created video file.

6. Call [overwolf.media.replays.turnOff()](../api/overwolf-media-replays#turnoffcallback), as soon as you’re no longer interested in capturing, in order to free up resources.

### Auto-highlights capture

This is the basic usage flow:

1. Register to the relevant capture events for your app.  
   The [available events](../api/overwolf-media-replays#events-reference) are: onCaptureError, onCaptureStopped, onCapureWarning, onReplayServicesStarted, onHighlightsCaptured.

2. Call overwolf.media.replays.turnOn() with the auto-highlights feature enabled:  
   Set the `enable` field of the ReplayHighlightsSetting Object to `true`.  
   Here you also set the capture buffer that is used for all the other functions.

3. Call [overwolf.media.replays.stopCapture()](../api/overwolf-media-replays#stopcapturereplaytype-replayid-callback).  
   Finishes capturing a replay and returns a url to the created video file.

4. Call [overwolf.media.replays.turnOff()](../api/overwolf-media-replays#turnoffcallback), as soon as you’re no longer interested in capturing, in order to free up resources.

## Using overwolf.streaming

With this API, there is no auto-detect and auto-capture of the game highlights - you should listen to game events and manually start and stop the video capture.  

It would be best if you understood each supported game's mechanics, game flow, edge cases, timings, etc., to define and capture your game highlights.  
Besides, you can capture the whole game to file/s or even stream it to  Twitch, Youtube, etc. 

This is the basic usage flow:

### 1. Register to the onStopStreaming

Register to the [onStopStreaming](#onstopstreaming) event to know when the streaming stopped:

```js
overwolf.streaming.onStopStreaming.addListener(function(result) {
  //result.stream_id
  //result.url (relevant to video only)
});
```

### 2. Register to the onStreamingError

Register to the [onStreamingError](#onstreamingerror) event, to know if a streaming error occurred which will also stop the streaming session:

```js
overwolf.streaming.onStreamingError.addListener(function(result) {
  //result.stream_id
  /*
    result.error = (one of):
      "Unknown"
      "Unauthorized"
      "Invalid_Server"
      "No_Internet"
      "Invalid_Video_Settings"
      "No_Playback_Device"
      "Not_InGame"
      "Internet_Congested"
      "Twitch_Dll_Load_Error"
      "Twitch_Init_Error"
      "MEDIA_PLAYER_DLL_ERROR"
      "No_Encoder"
      "Out_Of_Disk_Space"

      "CAPTURE_DEVICE_ERROR"
      "CAPTURE_DEVICE_NO_FRAMES"
      "GAME_UNSUPPORTED_FORMAT_ERROR"
      "KRAKEN_DEVICE"
      "PLAYBACK_DEVICE_FORMAT"
      "INPUT_DEVICE_FORMAT"
      "NVIDIA_UPDATE_DRIVER"
      "NVIDIA_ENCODER"
      "CPU_OVERLOADED"
      "FILE_OUTPUT_ERROR"
      "SWITCHABLE_GRAPHICS_SHT_UNSUPPORTED"
      "NO_CAPTURE_DEVICE"  
  */
});
```

NOTE: we only started with the UPPERCASE convention later on.

### 3. Register to the onStreamingWarning

 Register to the [onStreamingWarning](#onstreamingwarning) event to know when a warning occurred:

```js
overwolf.streaming.onStreamingWarning.addListener(function(result) {
  //result.stream_id
  //result.error = "HIGH_CPU_USAGE" // there will probably be frames lost
});
```

### 4. Register to onStreamingSourceImageChanged

 Optionally register to [onStreamingSourceImageChanged](#onstreamingsourceimagechanged), to get an event when the user switched between capturing his desktop and the game.

### 5. Call overwolf.streaming.getStreamEncoders

Call [getStreamEncoders()](#getstreamencoderscallback) and [getAudioDevices()](#getaudiodevicescallback).
This will give a list of all possible encoders and audio devices – you can then use this list to let the user select his preferred encoder/device.
In terms of encoder priorities – we recommend: NVIDIA > AMD > INTEL > x264.
As long as the "enabled" field = true, you can offer the user to use the encoder.

### 6. Call overwolf.streaming.start

Create a JSON object with all of the streaming details (See example on the top of the page) and call [start()](#startsettings-callback).

* For video recording you don’t need the `ingest_server`, `stream_info` and `auth` objects.
* For video recording we recommend using a `max_kbps` value of higher than 8000.
* For streaming we recommend using a `max_kbps` smaller than 3000.
* Once start succeeded, you’ll get a callback with `result.status == "success"` and a `stream_id` that can be used to stop the streaming session or change the volume of the stream.

### 7. Allow the user to change volume

Allow the user to change volume with [changeVolume()](#changevolumestreamid-audiooptions-callback) while streaming.

### 8. Call overwolf.streaming.stop

Call [stop()](#stopstreamid-callback) to stop the streaming session.

### Extras

* Use [setBRBImage()](#setbrbimagestreamid-image-backgroundcolor-callback) when streaming to Twitch.tv when `capture_desktop` is not enabled, this will allow you to customize the Be-Right-Back image the viewers will see.
* Use [setWindowStreamingMode](#setwindowstreamingmodewindowid-streamingmode-callback) for video recording and streaming – this method works on a per-overwolf-window basis – for each window you can decide if it is to be shown in the stream or not – regardless of whether the streamer is viewing it or not.
* Use [setWindowObsStreamingMode](#setwindowobsstreamingmodewindowid-obsstreamingmode-callback) when you aren’t streaming with Overwolf but want to leverage Overwolf’s APIs and stream with OBS.