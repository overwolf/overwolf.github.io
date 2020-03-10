---
id: video-capture
title: Video capture best practices
sidebar_label: Video capture best practices
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

Additionally, some file operations that related to videos might require adding `allow_local_file_access : true` flag in your app manifest.
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

1. **Register to the relevant capture events for your app.**  
   The [available events](../api/overwolf-media-replays#events-reference) are: onCaptureError, onCaptureStopped, onCapureWarning, onReplayServicesStarted.

2. **Call [overwolf.media.replays.turnOn()](../api/overwolf-media-replays#turnonparameters-callback)** with the auto-highlights feature disabled:  
   Set the `enable` field of the [overwolf.media.replays.ReplayHighlightsSetting](../api/overwolf-media-replays#replayhighlightssetting-object) Object to `false`.  
   Here you also set the capture buffer that uses for all the other functions:  
   For example, if you set a 3 min buffer, you able to capture a game highlight that is not longer than this buffer.

3. **Listen to your game events** and wait for the game highlight (match_start, kill, etc.) that you want to capture.  
   Once it accrued - start to video captur the screen:

4. **Call one of the [overwolf.media.replays.startCapture()](../api/overwolf-media-replays#startcapturereplaytype-pastduration-callback)** methods:  
   Here you can set the pastDuration and futureDuration buffers.  
   Note that all the methods, the replay id returns in the callback, which is needed to finish capturing the replay.

5. **Call [overwolf.media.replays.stopCapture()](../api/overwolf-media-replays#stopcapturereplaytype-replayid-callback)**.  
   Finishes capturing a replay and returns a URL to the created video file.

6. **Call [overwolf.media.replays.turnOff()](../api/overwolf-media-replays#turnoffcallback)**, as soon as you’re no longer interested in capturing, in order to free up resources.

### Auto-highlights capture

This is the basic usage flow:

1. **Register to the relevant capture events for your app.**  
   The [available events](../api/overwolf-media-replays#events-reference) are: onCaptureError, onCaptureStopped, onCapureWarning, onReplayServicesStarted, onHighlightsCaptured.

2. **Call [overwolf.media.replays.turnOn()](../api/overwolf-media-replays#turnonparameters-callback)** with the auto-highlights feature enabled:  
   Set the `enable` field of the [overwolf.media.replays.ReplayHighlightsSetting](../api/overwolf-media-replays#replayhighlightssetting-object) Object to `true`.  
   Here you also set the capture buffer that is used for all the other functions.

3. **Call [overwolf.media.replays.stopCapture()](../api/overwolf-media-replays#stopcapturereplaytype-replayid-callback)**.  
   Finishes capturing a replay and returns a URL to the created video file.

4. **Call [overwolf.media.replays.turnOff()](../api/overwolf-media-replays#turnoffcallback)**, as soon as you’re no longer interested in capturing, in order to free up resources.

## Using overwolf.streaming

With this API, there is no auto-detect and auto-capture of the game highlights - you should listen to game events and manually start and stop the video capture.  

It would be best if you understood each supported game's mechanics, game flow, edge cases, timings, etc., to define and capture your game highlights.  
Besides, you can capture the whole game to file/s or even stream it to  Twitch, Youtube, etc. 

### Usage flow

This is the basic usage flow:

1. **Register to the relevant capture events** for your app.  
The [available events](../api/overwolf-streaming#events-reference) are: onStreamingSourceImageChanged, onStopStreaming, onStartStreaming, onStreamingError, onStreamingWarning, onVideoFileSplited, onRecordingEngineStateChanged.

2. **Get the available stream encoders.**  
  Call [getStreamEncoders()](../api/overwolf-streaming#getstreamencoderscallback) and [getAudioDevices()](../api/overwolf-streaming#getaudiodevicescallback).  
  This gives a list of all possible encoders and audio devices – you can then use this list to let the user select his preferred encoder/device.  
  In terms of encoder priorities – we recommend: NVIDIA > AMD > INTEL > x264.  
  As long as the "enabled" field = true, you can offer the user to use the encoder.

3. **Call overwolf.streaming.start().**  
   Create a JSON object with all of the streaming details and call [start()](../api/overwolf-streaming#startsettings-callback).  
   [Here](../api/overwolf-streaming#usage-example) you can find a complete usage example.
   * For video recording, you don’t need the `ingest_server`, `stream_info`, and `auth` objects.
   * For video recording, we recommend using a `max_kbps` value of higher than 8000.
   * For streaming, we recommend using a `max_kbps` smaller than 3000.
   * Once start succeeded, you’ll get a callback with `result.status == "success"` and a `stream_id` that can be used to stop the streaming session or change the volume of the stream.

4. **Allow the user to change the volume.**  
  Allow the user to change volume with [changeVolume()](../api/overwolf-streaming#changevolumestreamid-audiooptions-callback) while streaming.

5. **Call overwolf.streaming.stop().**  
  Call [stop()](../api/overwolf-streaming#stopstreamid-callback) to stop the streaming session.

### Extras

* Use [setBRBImage()](../api/overwolf-streaming#setbrbimagestreamid-image-backgroundcolor-callback) when streaming to Twitch.tv when `capture_desktop` is not enabled, this will allow you to customize the Be-Right-Back image the viewers will see.
* Use [setWindowStreamingMode](../api/overwolf-streaming#setwindowstreamingmodewindowid-streamingmode-callback) for video recording and streaming – this method works on a per-overwolf-window basis – for each window you can decide if it is to be shown in the stream or not – regardless of whether the streamer is viewing it or not.
* Use [setWindowObsStreamingMode](../api/overwolf-streaming#setwindowobsstreamingmodewindowid-obsstreamingmode-callback) when you aren’t streaming with Overwolf but want to leverage Overwolf’s APIs and stream with OBS.

