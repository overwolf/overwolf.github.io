---
id: overwolf-streaming
title: overwolf.streaming API
sidebar_label: overwolf.streaming
---

This namespace contains all the functionality that allows the streaming of video/audio.

The term streaming might be a bit misleading – we regard saving a video to the local drive as streaming, as well as streaming the video to a streaming service such as Twitch.tv.

## The basic usage flow should be:

### 1. Register to the onStopStreaming event

<details>

know when the streaming stopped:

```js
overwolf.streaming.onStopStreaming.addListener(function(result) {
  //result.stream_id
  //result.url (relevant to video only)
});
```

</details>

### 2. Register to the onStreamingError event

<details>

know if a streaming error occurred which will also stop the streaming session:

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

</details>

### 3. Register to the onStreamingWarning event

<details>

 know when a warning occurred:

```js
overwolf.streaming.onStreamingWarning.addListener(function(result) {
  //result.stream_id
  //result.error = "HIGH_CPU_USAGE" // there will probably be frames lost
});
```

</details>