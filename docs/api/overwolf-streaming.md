---
id: overwolf-streaming
title: overwolf.streaming API
sidebar_label: overwolf.streaming
---

This namespace contains all the functionality that allows the streaming of video/audio.

The term streaming might be a bit misleading – we regard saving a video to the local drive as streaming, as well as streaming the video to a streaming service such as Twitch.tv.

**Permissions required: Streaming**

:::important
Please read all the info about streaming usage and options on our [video capture best practices](../topics/video-capture) guide.
:::

## Methods Reference

* [overwolf.streaming.start()](#startsettings-callback)
* [overwolf.streaming.stop()](#stopstreamid-callback)
* [overwolf.streaming.split()](#splitstreamid-callback)
* [overwolf.streaming.changeVolume()](#changevolumestreamid-audiooptions-callback)
* [overwolf.streaming.setWatermarkSettings()](#setwatermarksettingssettings-callback)
* [overwolf.streaming.getWatermarkSettings()](#getwatermarksettingscallback)
* [overwolf.streaming.getWindowStreamingMode()](#getwindowstreamingmodewindowid-callback)
* [overwolf.streaming.setWindowStreamingMode()](#setwindowstreamingmodewindowid-streamingmode-callback)
* [overwolf.streaming.setWindowObsStreamingMode()](#setwindowobsstreamingmodewindowid-obsstreamingmode-callback)
* [overwolf.streaming.setBRBImage()](#setbrbimagestreamid-image-backgroundcolor-callback)
* [overwolf.streaming.getStreamEncoders()](#getstreamencoderscallback)
* [overwolf.streaming.getAudioDevices()](#getaudiodevicescallback)
* [overwolf.streaming.updateStreamingDesktopOptions()](#updatestreamingdesktopoptionsstreamid-newoptions-mousecursorstreamingmethod-callback)
* [overwolf.streaming.updateTobiiSetting()](#updatetobiisettingstreamid-param-callback)

## Events Reference

* [overwolf.streaming.onStreamingSourceImageChanged](#onstreamingsourceimagechanged)
* [overwolf.streaming.onStopStreaming](#onstopstreaming)
* [overwolf.streaming.onStartStreaming](#onstartstreaming)
* [overwolf.streaming.onStreamingError](#onstreamingerror)
* [overwolf.streaming.onStreamingWarning](#onstreamingwarning)
* [overwolf.streaming.onVideoFileSplited](#onvideofilesplited)

## Types Reference

* [overwolf.streaming.StreamSettings](#streamsettings-object) Object
* [overwolf.streaming.enums.StreamingProvider](#overwolfstreamingenumsstreamingprovider-enum) Enum
* [overwolf.streaming.StreamParams](#streamparams-object) Object
* [overwolf.streaming.StreamInfo](#streaminfo-object) Object
* [overwolf.streaming.StreamAuthParams](#streamauthparams-object) Object
* [overwolf.streaming.StreamVideoOptions](#streamvideooptions-object) Object
* [overwolf.streaming.StreamingVideoEncoderSettings](#streamingvideoencodersettings-object) Object
* [overwolf.streaming.enums.StreamEncoder](#overwolfstreamingenumsstreamencoder-enum) Enum
* [overwolf.streaming.StreamingVideoEncoderNVIDIA_NVENCSettings](#streamingvideoencodernvidia_nvencsettings-object) Object
* [overwolf.streaming.enums.StreamEncoderPreset_NVIDIA](#overwolfstreamingenumsstreamencoderpreset_nvidia-enum)
* [overwolf.streaming.enums.StreamEncoderRateControl_NVIDIA](#overwolfstreamingenumsstreamencoderratecontrol-nvidia-enum)
* [overwolf.streaming.StreamingVideoEncoderIntelSettings](#streamingvideoencoderintelsettings-object) Object
* [overwolf.streaming.StreamingVideoEncoderx264Setting](#streamingvideoencoderx264settings-object) Object
* [overwolf.streaming.enums.StreamEncoderPreset_x264](#overwolfstreamingenumsstreamencoderpreset_x264-enum) Enum
* [overwolf.streaming.enums.StreamEncoderRateControl_x264](#overwolfstreamingenumsstreamencoderratecontrol_x264-enum) Enum
* [overwolf.streaming.StreamingVideoEncoderAMD_AMFSettings](#streamingvideoencoderamd_amfsettings-object) Object
* [overwolf.streaming.enums.StreamEncoderPreset_AMD_AMF](#overwolfstreamingenumsstreamencoderpreset_amd_amf-enum) Enum
* [overwolf.streaming.enums.StreamEncoderRateControl_AMD_AMF](#overwolfstreamingenumsstreamencoderratecontrol_amd_amf-enum) Enum
* [overwolf.streaming.StreamDesktopCaptureOptions](#streamdesktopcaptureoptions-object) Object
* [overwolf.streaming.StreamAudioOptions](#streamaudiooptions-object) Object
* [overwolf.streaming.StreamDeviceVolume](#streamdevicevolume-object) Object
* [overwolf.streaming.StreamPeripheralsCaptureOptions](#streamperipheralscaptureoptions-object) Object
* [overwolf.streaming.StreamPeripheralsCaptureOptions](#streamperipheralscaptureoptions-object) Object
* [overwolf.streaming.enums.StreamMouseCursor](#streammousecursor-enum) Enum
* [overwolf.streaming.StreamIngestServer](#streamingestserver-object) Object
* [overwolf.streaming.WatermarkSettings](#watermarksettings-object) Object
* [overwolf.streaming.WatermarkSettings](#watermarksettings-object) Object
* [overwolf.streaming.enums.StreamingMode](#streamingmode-enum) Enum
* [overwolf.streaming.enums.ObsStreamingMode](#streamingmode-enum) Enum
* [overwolf.streaming.SplitResult](#splitresult-object) Object
* [overwolf.streaming.enums.indication_position](#indication_position-enum) Enum
* [overwolf.streaming.enums.indication_type](#indication_type-enum) Enum
* [StreamQuotaParams](#streamquotaparams-object) Object

## start(settings, callback)

#### Version added: 0.78

> Start a new stream.

Note that this feature will work only when your target game is running.  

Parameter | Type                                            | Description             |
--------- | ------------------------------------------------| ----------------------- |
settings  | [StreamSettings](#streamsettings-object) object | The stream settings     |
callback  | function                                        | Returns with the result |

For more info read our [Basic streaming usage flow](../topics/video-capture#usage-example).

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{ "status": "success", "stream_id": 3 }
```

#### Callback argument: Failure

A callback function which will be called with the status of the request

```json
{ "status": "error", "error": "something went wrong..." }
```

:::tip
Note that the stream will be recorded in chunks in a size of `max_file_size_bytes`. If you would like in addition, a full length single file copy, you can set `include_full_size_video` to true. 
:::

#### Usage Examples

<details open>
<summary>Minimal required settings:</summary>

Here you can find example with the minimal required setting.  
Note that when a setting value is not defined, a default value is set.

```javascript

overwolf.streaming.onStopStreaming.addListener(console.log); //register to the onStopStreaming
overwolf.streaming.onStreamingError.addListener(console.log); //register to the onStreamingError
overwolf.streaming.onStreamingWarning.addListener(console.log); //register to the onStreamingWarning

var streamId; //we will use this variable to save the stream id

var stream_settings = {
  "provider": overwolf.streaming.enums.StreamingProvider.VideoRecorder,
  "settings": {
    "audio": {"mic": {},"game": {} },
    "video": {}
  }
};

//start the stream
overwolf.streaming.start(stream_settings,
    function(result) {
      if (result.status == "success")
      {
        streamId = result.stream_id; //we need it for stopping the stream and manipulating stream settings later 
        console.debug(result.stream_id); 
        }
        else {
          console.debug("something went wrong...");
        }
    }
);

//stop the stream
overwolf.streaming.stop(streamId);
```
</details>

<details>
<summary>Example with customized Audio and Video settings:</summary>

```javascript

overwolf.streaming.onStopStreaming.addListener(console.log); //register to the onStopStreaming
overwolf.streaming.onStreamingError.addListener(console.log); //register to the onStreamingError
overwolf.streaming.onStreamingWarning.addListener(console.log); //register to the onStreamingWarning

var streamId; //we will use this variable to save the stream id

var stream_settings = {
  "provider": overwolf.streaming.enums.StreamingProvider.VideoRecorder,
  "settings": {
    "audio": {
      "mic": {
        "volume": 75,
        "enable": true
      },
      "game": {
        "volume": 75,
        "enable": true
      }
    },
    "video": {
      "auto_calc_kbps": false,
      "fps": 30,
      "width": 1920,
      "height": 1080,
      "max_kbps": 1500,
      "buffer_length": 20000,
      "max_file_size_bytes": 50000000,
      "include_full_size_video": true,
      "notify_dropped_frames_ratio": 0.5,
      "test_drop_frames_interval": 5000,
      "indication_position": 'TopRightCorner',
      "indication_type": 'dot',
      "encoder": {
        "name": overwolf.streaming.enums.StreamEncoder.X264,
        "config": {
          "preset": overwolf.streaming.enums.StreamEncoderPreset_x264,
          "rate_control": overwolf.streaming.enums.StreamEncoderRateControl_x264,
          "keyframe_interval": 2
        }
      }
    }
  }
};

//start the stream
overwolf.streaming.start(stream_settings,
    function(result) {
      if (result.status == "success")
      {
        streamId = result.stream_id; //we need it for stopping the stream and manipulating stream settings later 
        console.debug(result.stream_id); 
        }
        else {
          console.debug("something went wrong...");
        }
    }
);

//stop the stream
overwolf.streaming.stop(streamId);
```
</details>

<details>
<summary>Example with customized Quota settings:</summary>

You can customize the stream quota settings and enable individual folders that are not part of the quota (to save favorite videos, for example).  Read more about quota options [here](#quota-note).

```javascript

overwolf.streaming.onStopStreaming.addListener(console.log); //register to the onStopStreaming
overwolf.streaming.onStreamingError.addListener(console.log); //register to the onStreamingError
overwolf.streaming.onStreamingWarning.addListener(console.log); //register to the onStreamingWarning

var streamId; //we will use this variable to save the stream id

var stream_settings = {
  "provider": overwolf.streaming.enums.StreamingProvider.VideoRecorder,
  "settings": {
    "audio": {"mic": {},"game": {} },
    "video": {},
    "quota": {
      "max_quota_gb": 2,
      "excluded_directories": [ "cool_session" ] //set directories that are not part of the quota
    }
  }
};

//start the stream
overwolf.streaming.start(stream_settings,
    function(result) {
      if (result.status == "success")
      {
        streamId = result.stream_id; //we need it for stopping the stream and manipulating stream settings later 
        console.debug(result.stream_id); 
        }
        else {
          console.debug("something went wrong...");
        }
    }
);

//stop the stream
overwolf.streaming.stop(streamId);
```
</details>

## stop(streamId, callback)

#### Version added: 0.78

> Stops the given stream.

Parameter | Type        | Description                    |
--------- | ------------| ------------------------------ |
streamId  | int         | The id of the stream to stop   |
callback  | function    | Returns with the result        |

#### Callback argument: Success

A callback function which will be called with the status of the request, and the stream id and media URL if successful

```json
{
   "success":true,
   "stream_id":3,
   "url":"overwolf://media/recordings/Game+Events+Simulator/Desktop+02-27-2020+14-37-13-913.mp4",
   "file_path":"C:\\Users\\Hal9000\\Videos\\Overwolf\\Game Events Simulator\\Desktop 02-27-2020 14-37-13-913.mp4",
   "duration":61045,
   "last_file_path":"C:\\Users\\Hal9000\\Videos\\Overwolf\\Game Events Simulator\\Desktop 02-27-2020 14-37-13-913",
   "split": true,
   "extra":"{"drawn": 856,"dropped": 0,"lagged": 0,"percentage_dropped": 0,"percentage_lagged": 0,"system_info": {"game_dvr_enabled": true,"game_mode_enabled": true}",
  "total_frames": 1835
}",
   "osVersion": "10.0.18362.650",
   "osBuild":"1903"
}
```

:::tip
To use the `file_path` and not the `url` (as a source for a video player, for example) - you should add the `allow_local_file_access : true` flag to your app manifest, under the relevant window section.
:::

#### Callback argument: Failure

A callback function which will be called with the status of the request

```json
{ "status": "error", "error": "something went wrong..." }
```

## split(streamId, callback)

#### Version added: 0.141

> Request to split video now.

This method is available when recording with the [enable_on_demand_split](#streamvideooptions-object) setting.  
[onVideoFileSplited](#onvideofilesplited) event will be fired when the video splits.

Parameter | Type                                            | Description                   |
--------- | ------------------------------------------------| ----------------------------- |
streamId  | int                                             | The id of the stream to split |
callback  | ([Result: SplitResult](#splitresult-object)) => void       | Returns with the result       |

## changeVolume(streamId, audioOptions, callback)

#### Version added: 0.78

> Changes the volume of the stream.

Parameter     | Type                                                    | Description                                           |
------------- | --------------------------------------------------------| ----------------------------------------------------- |
streamId      | int                                                     | The id of the stream on which the volume is changed   |
audioOptions  | [StreamAudioOptions](#streamaudiooptions-object) Object | The new volumes encapsulated in an object             |
audioOptions  | function                                                | Returns with the result                               |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{ "status": "success" }
```

#### Callback argument: Failure

A callback function which will be called with the status of the request

```json
{ "status": "error" }
```

## setWatermarkSettings(settings, callback)

#### Version added: 0.78

> Sets the watermark settings.

Parameter | Type                                                    | Description                                           |
----------| --------------------------------------------------------| ----------------------------------------------------- |
settings  | [WatermarkSettings](#watermarksettings-object) Object   | The new watermark settings                            |
callback  | function                                                | Returns with the result                               |

#### Callback argument: Success

A callback function which will be called with the status of the request when done setting the new watermark settings.

```json
{ "status": "success" }
```

#### Callback argument: Failure

A callback function which will be called with the status of the request

```json
{ "status": "error" }
```

#### Usage Example

```javascript
overwolf.streaming.setWatermarkSettings(
    { showWatermark : true },
    function (result) {
        console.log ("watermark settings changed.");
    }
);
```

## getWatermarkSettings(callback)

#### Version added: 0.78

> Gets the watermark settings.

Parameter | Type                                                    | Description                                           |
----------| --------------------------------------------------------| ----------------------------------------------------- |
settings  | [WatermarkSettings](#watermarksettings-object) Object   | The new watermark settings                            |
callback  | function                                                | Returns with the result                               |

#### Callback argument: Success

A function that will be called with a JSON containing the status and the watermark settings if successful

```json
{ "status": "success" , showWatermark: true }
```

#### Callback argument: Failure

A callback function which will be called with the status of the request

```json
{ "status": "error" }
```

## getWindowStreamingMode(windowId, callback)

#### Version added: 0.78

> Call the given callback function with the window’s streaming mode as a parameter.

Parameter | Type     | Description                                              |
----------| ---------| -------------------------------------------------------- |
windowId  | string   | The id of the window for which to get the streaming mode |
callback  | function | Returns with the result                                  |

#### Callback argument: Success

A callback function which will be called with the status of the request and the window’s streaming mode as a parameter

```json
{ "status": "success", streaming_mode: "WhenVisible" }
```

#### Callback argument: Failure

A callback function which will be called with the status of the request

```json
{ "status": "error" }
```

## setWindowStreamingMode(windowId, streamingMode, callback)

#### Version added: 0.78

> Call the given callback function with the window’s streaming mode as a parameter.

Parameter     | Type                                                                                     | Description                                              |
--------------| -----------------------------------------------------------------------------------------| ---------------------------------------------------------|
windowId      | string                                                                                   | The id of the window for which to set the streaming mode |
streamingMode | [overwolf.streaming.enums.StreamingMode](#streamingmode-enum) enum | The desired streaming mode                               |
callback      | function                                                                                 | Returns with the result  (Optional)                      |

#### Callback argument: Success

A callback function which will be called with the status of the request, after streaming mode was set

```json
{ "status": "success" }
```

#### Callback argument: Failure

A callback function which will be called with the status of the request

```json
{ "status": "error" }
```

## setWindowObsStreamingMode(windowId, obsStreamingMode, callback)

#### Version added: 0.78

> Sets the streaming mode for the window when using OBS.

Parameter     | Type                                                                                            | Description                                              |
--------------| ------------------------------------------------------------------------------------------------| ---------------------------------------------------------|
windowId      | string                                                                                          | The id of the window for which to set the streaming mode |
streamingMode | [ObsStreamingMode](#streamingmode-enum) enum | The desired OBS streaming mode                           |
callback      | function                                                                                        | Returns with the result  (Optional)                      |

#### Callback argument: Success

A callback function which will be called with the status of the request, after streaming mode was set

```json
{ "status": "success" }
```

#### Callback argument: Failure

A callback function which will be called with the status of the request

```json
{ "status": "error" }
```

## setBRBImage(streamId, image, backgroundColor, callback)

#### Version added: 0.78

> Set a stream’s Be Right Back image.

Parameter       | Type      | Description                                                              |
----------------| ----------| -------------------------------------------------------------------------|
streamId        | int       | The id of the stream for which to set the Be Right Back image            |
image           | Object    | The image to set, as an IMG object or a URL                              |
backgroundColor | string    | The color to paint the last game frame with before overlaying the image  |
callback        | function  | Returns with the result  (Optional)                                      |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{ "status": "success" }
```

#### Callback argument: Failure

A callback function which will be called with the status of the request

```json
{ "status": "error" }
```

## getStreamEncoders(callback)

#### Version added: 0.83

> Returns an array of supported streaming encoders, with extra metadata for each one.

Parameter       | Type      | Description                                                               |
----------------| ----------| --------------------------------------------------------------------------|
callback        | function  | A callback function to call with the array of encoders and their metadata |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{
    "status": "success",
    "encoders": [
        {
            "name" : "INTEL",
            "display_name" : "Intel® Quick Sync (uses iGPU)",
            "enabled" : true,
            "presets" : ["LOW", "MEDIUM", "HIGH"]
        },
        ...
    ]
}
```

#### Endoder Preset note

For each encoder in the list, a preset enum returns. For example:

1. The NVIDIA encoder returns [StreamEncoderPreset_NVIDIA](#overwolfstreamingenumsstreamencoderpreset_nvidia-enum) enum.
2. The X264 encoder returns [StreamEncoderPreset_x264](#overwolfstreamingenumsstreamencoderpreset_x264-enum) enum.
3. The AMD encoder returns [StreamEncoderPreset_AMD_AMF](#overwolfstreamingenumsstreamencoderpreset_amd_amf-enum) enum.

#### Callback argument: Failure

A callback function which will be called with the status of the request

```json
{ "status": "error" }
```



## getAudioDevices(callback)

#### Version added: 0.78

> Returns an array of all audio devices that can be used.

Parameter       | Type      | Description                                                                    |
----------------| ----------| -------------------------------------------------------------------------------|
callback        | function  | A callback function to call with the array of audio devices and their metadata |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{
    "status": "success",
    "devices": [
        {
            "display_name" : "Speakers (USB Ear-Microphone)",
            "display_id" : "{0.0.0.00000000}.{ec2a6c4b-f750-4045-bb93-d745ecc76937}",
            "device_state" : "Active",
            "can_record" : false,
            "can_playback" : true
        },
        ...
    ],
    "default_recording_device_id": "{0.0.0.00000000}.{ec2a6c4b-f750-4045-bb93-d745ecc76937}",
    "default_playback_device_id": "{0.0.1.00000000}.{39da502b-2b96-4b76-83ae-9841f0b46570}"
}
```

#### Callback argument: Failure

A callback function which will be called with the status of the request

```json
{ "status": "error" }
```

## updateStreamingDesktopOptions(streamId, newOptions, mouseCursorStreamingMethod, callback)

#### Version added: 0.78

> Update stream desktop capture options.

:::warning OBSOLETE
This function is obsolete.
:::

Parameter                  | Type                                                                                              | Description                   |
---------------------------| --------------------------------------------------------------------------------------------------| ------------------------------|
streamId	                 | int                                                                                               | The id of the stream                   |
newOptions	               | [StreamDesktopCaptureOptions](#streamdesktopcaptureoptions-object) Object                         | The updated desktop capture streaming options                    |
mouseCursorStreamingMethod | [overwolf.streaming.enums.StreamMouseCursor](#streammousecursor-enum) enum  | The updated value of the mouse cursor streaming method           |
callback                   | function                                                                                          | A callback function to call with success or failure indicationa     |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{ "status": "success" }
```

#### Callback argument: Failure

A callback function which will be called with the status of the request

```json
{ "status": "error" }
```

## updateTobiiSetting(streamId, param, callback)

#### Version added: 0.97

> Update Tobii streaming layer.

Parameter | Type             | Description                                                     |
----------| -----------------| ----------------------------------------------------------------|
streamId  | int              | The id of the stream                                            |
param     | TobiiLayerParams | The Tobii layer visibility param                                |
callback  | function         | A callback function to call with success or failure indicationa |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{ "status": "success" }
```

#### Callback argument: Failure

A callback function which will be called with the status of the request

```json
{ "status": "error" }
```

## onStreamingSourceImageChanged

#### Version added: 0.78

> Fired when the stream started streaming a new image source (desktop, game).

## onStopStreaming

#### Version added: 0.78

> Fired when the stream has stopped.

#### Event data example

```json
{
  "stream_id": 5,
  "url": "overwolf://media/recordings/WolftrainerPro/League+of+Legends+11-05-2019+11-32-36-075.mp4",
  "file_path": "C:\\Users\\Admin\\Videos\\Overwolf\\WolftrainerPro\\League of Legends 11-05-2019 11-32-36-075.mp4",
  "duration": 77090,
  "last_file_path": "C:\\Users\\Admin\\Videos\\Overwolf\\WolftrainerPro\\League of Legends 11-05-2019 11-32-36-075",
  "split": true,
  "extra": "{\r\n  \"drawn\": 0,\r\n  \"dropped\": 0,\r\n  \"lagged\": 0,\r\n  \"percentage_dropped\": 0,\r\n  \"percentage_lagged\": 0,\r\n  \"system_info\": {\r\n    \"game_dvr_enabled\": true,\r\n    \"game_mode_enabled\": true\r\n  },\r\n  \"total_frames\": 773\r\n}",
  "osVersion": "10.0.18362.356",
  "osBuild": "1903"
}
```

Note that 

## onStartStreaming

#### Version added: 0.106

> Fired when the stream has started.

## onStreamingError

#### Version added: 0.78

> Fired upon an error with the stream.

#### Possible Error Codes

* Unknown
* Unauthorized
* Invalid_Server
* No_Internet
* Invalid_Video_Settings
* No_Playback_Device
* Not_InGame
* Internet_Congested
* Game_Quit_Mid_Stream
* Twitch_Dll_Load_Error
* Twitch_Init_Error
* No_Encoder
* Out_Of_Disk_Space
* Update_Driver

#### Event Data Example

```json
{
    "status": "error",
    "stream_id": 1,
    "error": "Internet_Congested"
}
```

## onStreamingWarning

#### Version added: 0.78

> Fired upon a warning with the stream.

#### Usage example

```js
overwolf.streaming.onStreamingWarning.addListener(function(result) {
  //result.stream_id
  //result.error = "HIGH_CPU_USAGE" // there will probably be frames lost
});
```

## onVideoFileSplited

#### Version added: 0.103

> Fired upon video file splited.

## StreamSettings Object

#### Version added: 0.78

Stream settings container.

| Name      | Type                                                                                             | Description                              | Since |
|-----------| -------------------------------------------------------------------------------------------------|------------------------------------------|------ |
| provider  | [overwolf.streaming.enums.StreamingProvider](#overwolfstreamingenumsstreamingprovider-enum) enum | The stream provider name                 | 0.78  |
| settings  | [StreamParams](#streamparams-object) object                                                      | The stream provider settings             | 0.78  |

#### Object data example

```json
"settings": {
    "video": { "buffer_length": 20000 },
    "audio": {
	  "mic": {
	    "volume": 100,
		  "enable": true
	  },
	  "game": {
	    "volume": 75,
		  "enable": true
	  }
    },
    "peripherals": { 
    "capture_mouse_cursor": "both" 
    },
    "quota": {
      "max_quota_gb": 2,
      "excluded_directories": [ "cool_session" ] //set directories that are not part of the quota
    }
} 
```

## overwolf.streaming.enums.StreamingProvider enum

#### Version added: 0.78

| Options       | Description                                     |
|---------------| ------------------------------------------------|
| Unknown       | The stream provider name                        |
| Twitch        | Stream to Twitch                                |
| VideoRecorder |                                                 |
| RTMP          | Stream to YouTube, Facebook, smashcast.tv, etc. |

## StreamParams Object

#### Version added: 0.78

Represents the settings required to start a stream.

| Name         | Type                                                                              | Description                              | Since |
|--------------| ----------------------------------------------------------------------------------|------------------------------------------|------ |
| audio        | [StreamAudioOptions](#streamaudiooptions-object) Object                           | Stream audio options                     | 0.78  |
| peripherals  | [StreamPeripheralsCaptureOptions](#streamperipheralscaptureoptions-object) Object | Defines how peripherals (i.e. mouse cursor) are streamed.</br>**Permissions required: DesktopStreaming**                                                                                                 | 0.78  |
| max_quota_gb | double                                                                            | Max media folder size in GB. </br>  **deprecated**  | 0.78  |
| quota        | [StreamQuotaParams](#streamquotaparams-object) object                             | Parameters for limiting disk space allocation. | 0.147  |
| stream_info  | [StreamInfo](#streaminfo-object) object                                           | The basic stream information             | 0.78  |
| auth         | [StreamAuthParams](#streamauthparams-object) object                               | Stream authorization data                | 0.78  |
| video        | [StreamVideoOptions](#streamvideooptions-object) Object                           | Stream video options                     | 0.78  |
| ingest_server| [StreamIngestServer](##streamingestserver-object) Object                          | Information on the server that is being streamed to | 0.78  |
| replay_type  | [ReplayType](overwolf-media-replays#replaytype-enum) enum                         | The replay type to use                   | 0.78  |
| gif_as_video | bool                                                                              | Create gif as video (Gif Replay Type only) | 0.78  |

## StreamQuotaParams Object

#### Version added: 0.147

The basic quota information.

You can allocate limited disk space for your captured video and even set an array of directories that are excluded from max quota calculations.  
You can use it, for example, to implement "favorites captures" feature: allow your app's users to mark some captured videos as "favorites," move them to one of the excluded directories, and make sure that they not deleted when the quota has reached the limit. Of course, this is just a suggested usage example.

| Name                 | Type     | Description                                                        | Since  |
|----------------------| ---------|--------------------------------------------------------------------|------- |
| max_quota_gb         | double   | Max media folder size in GB                                        | 0.147  |
| excluded_directories | string[] | Array of directories that are excluded from max quota calculations | 0.147  |

## StreamInfo Object

#### Version added: 0.78

The basic stream information.

| Name  | Type   | Description                             | Since |
|-------| -------|-----------------------------------------|------ |
| url   | string | The URL where the stream can be watched | 0.78  |
| title | string | The stream title                        | 0.78  |

## StreamAuthParams Object

#### Version added: 0.78

Stream authorization data.

| Name      | Type   | Description                                                                                             | Since |
|-----------| -------|---------------------------------------------------------------------------------------------------------|------ |
| client_id | string | The client id part of the authorization data. This part is usually constant for each application.       | 0.78  |
| token     | string | The token part of the authorization data. This part if usually user-specific, and received after login. | 0.78  |

## StreamVideoOptions Object

#### Version added: 0.78

Stream video options.

| Name      | Type   | Description                                                                                             | Since |
|-----------| -------|---------------------------------------------------------------------------------------------------------|------ |
| auto_detect | bool | Defines if to try to automatically detect the best settings for streaming       | 0.83  |
| auto_calc_kbps | bool | Defines if to try to automatically calculate the kbps. If set to true, then the max_kbps field is ignored | 0.83  |
| fps   | int | Defines the Frames Per Second for the stream | 0.78  |
| width | int | Defines the stream width in pixels  | 0.78  |
| height| int | Defines the stream height in pixels | 0.78  |
| max_kbps| int | Defines the maximum KB per second of the stream. See [notes](#max_kbps-notes). | 0.78  |
| buffer_length| int | Defines the length of the buffer to be recorded in millisenconds (max 40 seconds) | 0.83  |
| encoder|  [StreamingVideoEncoderSettings](#streamingvideoencodersettings-object) Object |Defines the video encoder settings to use | 0.83  |
| capture_desktop|  [StreamDesktopCaptureOptions](#streamdesktopcaptureoptions-object) Object |Defines the desktop streaming options.</br>Permissions required: DesktopStreaming | 0.83  |
| frame_interval| int | Interval between frames when creating gifs | 0.83  |
| test_drop_frames_interval | uint | The interval, in milliseconds, in which to test for dropped frames | 0.92  |
| notify_dropped_frames_ratio| double | The ratio of dropped to non-dropped frames for which to issue a notification | 0.92  |
| sub_folder_name| string | Defines Sub folder for video file path destination (See note below this table) | 0.103  |
| override_overwolf_setting| bool | Do not use Overwolf capture setting. In case True you must provider all video setting (encoder..) | 0.103  |
| tobii| [TobiiLayerParams](overwolf-tobii) Object | Tobii Replay layer setting | 0.97  |
| max_file_size_bytes| uint | Defines file maximum size. when video reach {max_file_size_bytes}, the recorder will flush the video file and stat a new video file. [onVideoFileSplited](#onvideofilesplited) event will be fired | 0.103  |
| enable_on_demand_split| bool | Enable video file splitting on demand. See [notes](#enable_on_demand_split-notes). | 0.141  |
| include_full_size_video| bool | in case max_file_size_bytes is onfull video will be recorded to disk parallel to splits videos.  | 0.105  |
| disable_when_sht_not_supported| bool | Do not start video replay service in case shared texture is not supported.  | 0.105  |
| indication_position | [indication_position](#indication_position-enum) Enum | Position of the recorder indicator. Available for video capture only.  | 0.143  |
| indication_type     | [indication_type](#indication_type-enum) Enum | Type of the recorder indicator. Available for video capture only.  | 0.143  |
| use_app_display_name | bool | Use the app display (if has any e.g [dock_button_title](manifest-json#meta-dock) name when creating video folder. See [note](#use_app_display_name-notes)  | 0.154  |

#### use_app_display_name notes

If this flag in on, when creating a video capture folder, it will use the app "short name" as the folder name, instead of using the app name from the manifest.  
The app "short name" is defined in the [dock_button_title](manifest-json#meta-dock) manifest flag.

#### sub_folder_name notes 

* Defines Sub folder for video file path destination (Optional):  
`OverwolfVideoFolder\\AppName\\|sub_folder_name\\|file_name|`
* In case [folder_name] is empty:  
`OverwolfVideoFolder\\AppName\\|sub_folder_name|`

#### enable_on_demand_split notes

* When calling [split()](#splitstreamid-callback), the recorder will flush the video file to the local disk.
* When the recorder encoded the key frame with presentation time stamp thats is equal to grater than split() timestamps.
* When |max_file_size_bytes| is set, this flag is ignored.  
* [onVideoFileSplited](#onvideofilesplited) event will be fired.

#### max_kbps notes

increase the **max_kbps** of the encoder configuration may help the performance, but increase the video file size.

* For video recording, we recommend using a value of higher than 8000.
* For streaming, we recommend using a value smaller than 3000.

## StreamingVideoEncoderSettings Object

#### Version added: 0.78

Stream video options.

| Name   | Type                                                                                     | Description                                        | Since |
|--------| -----------------------------------------------------------------------------------------|----------------------------------------------------|------ |
| name   | [overwolf.streaming.enums.StreamEncoder](#overwolfstreamingenumsstreamencoder-enum) enum |  Defines which video encoder to use. Default: X264 | 0.83  |
| config | one of the [settings objects below](#see-also)                                                        |  Defines the settings of the specific encoder      | 0.83  |

#### See also:

* [StreamingVideoEncoderNVIDIA_NVENCSettings](#streamingvideoencodernvidia_nvencsettings-object)
* [StreamingVideoEncoderIntelSettings](#streamingvideoencoderintelsettings-object)
* [StreamingVideoEncoderx264Settings](#streamingvideoencoderx264settings-object)
* [StreamingVideoEncoderAMD_AMFSettings](#streamingvideoencodernvidia_nvencsettings-object)

## overwolf.streaming.enums.StreamEncoder enum

#### Version added: 0.78

| Options      | Description                                                            |
|--------------| -----------------------------------------------------------------------|
| INTEL        | Use the Intel Quick Sync encoder. Only available on supporting devices |
| X264         | Use the x264 encoder. This is the default encoder                      |
| NVIDIA_NVENC |    Uses the nVidia encoder                                             |
| AMD_AMF      | Uses the AMD AMF encoder                                               |
| NVIDIA_NVENC_NEW  | Uses the New nVidia encoder                                       |


## StreamingVideoEncoderNVIDIA_NVENCSettings Object

#### Version added: 0.83

Defines the configuration for the NVIDIA NVENC encoder.

| Name              | Type                                                       | Description                                                   | Since |
|-------------------| -----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------| ----- |
| preset            |  [overwolf.streaming.enums.StreamEncoderPreset_NVIDIA](#overwolfstreamingenumsstreamencoderpreset_nvidia-enum) enum  |  Defines which preset the encoder should use                    | 0.83  |
| rate_control      |  [overwolf.streaming.enums.StreamEncoderRateControl_NVIDIA](#overwolfstreamingenumsstreamencoderratecontrol_nvidia-enum) enum  |  Defines the rate control mode the encoder should use | 0.83  |
| keyframe_interval |  int                                                                                                |  Defines the time, in seconds, after which to send a keyframe. See [notes](#keyframe_interval-notes). | 0.83  |

#### keyframe_interval notes

Keyframes are points in the video where the entire frame is sent instead of just the differences from the previous frame.  

* Having a keyframe interval of 2 means that it takes at most 2 seconds for the viewers to catch up to a point where they can properly display the feed. 
* Streaming services would allow it to be 1, but setting it to 0 usually ends up making it somewhere around 8.5s between keyframes.
* 2 offers a better balance between picture quality and viewer join speed.

Increasing the keyframe_interval of the encoder configuration may help the performance but decrease in quality or inability to seek a specific resolution (if you want to slice the video, for example).

## overwolf.streaming.enums.StreamEncoderPreset_NVIDIA enum

#### Version added: 0.83

| Options                      | Description    |
|------------------------------| ---------------|
| AUTOMATIC                    |                |
| DEFAULT                      |                |
| HIGH_QUALITY                 |                |
| HIGH_PERFORMANCE             |                |
| BLURAY_DISK                  |                |
| LOW_LATENCY                  |                |
| HIGH_PERFORMANCE_LOW_LATENCY |                |
| HIGH_QUALITY_LOW_LATENCY     |                |
| LOSSLESS                     |                |
| HIGH_PERFORMANCE_LOSSLESS    |                |

## overwolf.streaming.enums.StreamEncoderRateControl_NVIDIA enum

#### Version added: 0.83

| Options            | Description    |
|--------------------| ---------------|
| RC_CBR             |                |
| RC_CQP             |                |
| RC_VBR             |                |
| RC_VBR_MINQP       |                |
| RC_2_PASS_QUALITY  |                |

## StreamingVideoEncoderIntelSettings Object

#### Version added: 0.83

TBA

## StreamingVideoEncoderx264Settings Object

#### Version added: 0.83

Defines the configuration for an x264 encoder.

| Name              | Type                                                       | Description                                                   | Since |
|-------------------| -----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------| ----- |
| preset            |  [overwolf.streaming.enums.StreamEncoderPreset_x264](#overwolfstreamingenumsstreamencoderratecontrol_x264-enum-enum) enum  |  Defines which preset the encoder should use                    | 0.83  |
| rate_control      |  [overwolf.streaming.enums.StreamEncoderRateControl_x264](#overwolfstreamingenumsstreamencoderratecontrol_x264-enum) enum  |  Defines the rate control mode the encoder should use | 0.83  |
| keyframe_interval |  int                                                                                                |  Defines the time, in seconds, after which to send a keyframe. See [notes](#keyframe_interval-notes). | 0.83  |

## overwolf.streaming.enums.StreamEncoderPreset_x264 enum

#### Version added: 0.83

| Options    | Description    |
|------------| ---------------|
| ULTRAFAST  |                |
| SUPERFAST  |                |
| VERYFAST   |                |
| FASTER     |                |
| FAST       |                |
| MEDIUM     |                |
| SLOW       |                |
| SLOWER     |                |
| VERYSLOW   |                |
| PLACEBO    |                |

## overwolf.streaming.enums.StreamEncoderRateControl_x264 enum

#### Version added: 0.83

| Options            | Description    |
|--------------------| ---------------|
| RC_CBR             |                |
| RC_CQP             |                |
| RC_VBR             |                |
| RC_VBR_MINQP       |                |
| RC_2_PASS_QUALITY  |                |

## StreamingVideoEncoderAMD_AMFSettings Object

#### Version added: 0.84

Defines the configuration for an x264 encoder.

| Name              | Type                                                       | Description                                                   | Since |
|-------------------| -----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------| ----- |
| preset            |  [overwolf.streaming.enums.StreamEncoderPreset_AMD_AMF](#overwolfstreamingenumsstreamencoderpreset_amd_amf-enum) enum  |  Defines which preset the encoder should use                    | 0.84  |
| rate_control      |  [overwolf.streaming.enums.StreamEncoderRateControl_AMD_AMF](#overwolfstreamingenumsstreamencoderratecontrol_amd_amf-enum) enum  |  Defines the rate control mode the encoder should use | 0.84  |
| keyframe_interval |  int                                                                                                |  Defines the time, in seconds, after which to send a keyframe. See [notes](#keyframe_interval-notes). | 0.83  |

## overwolf.streaming.enums.StreamEncoderPreset_AMD_AMF enum

#### Version added: 0.84

| Options    | Description    |
|------------| ---------------|
| AUTOMATIC  |                |
| BALANCED  |                |
| SPEED   |                |
| QUALITY     |                |
| ULTRA_LOW_LATENCY       |                |
| LOW_LATENCY     |                |

## overwolf.streaming.enums.StreamEncoderRateControl_AMD_AMF enum

#### Version added: 0.84

| Options            | Description    |
|--------------------| ---------------|
| RC_CBR             |                |
| RC_CQP             |                |
| RC_VBR             |                |
| RC_VBR_MINQP       |                |

## StreamDesktopCaptureOptions Object

#### Version added: 0.78

Defines the configuration for an x264 encoder.

| Name          | Type  | Description                                                                    | Since |
|---------------| ------|--------------------------------------------------------------------------------| ----- |
| enable        | bool  |  Defines if to capture the desktop while game is not running or not in focus   | 0.78  |
| monitor_id    | uint  |  Defines which monitor to stream when streaming desktop                        | 0.78  |
| force_capture | bool  | Defines if to force desktop streaming even when a game is in foreground        | 0.78  |

## StreamAudioOptions Object

#### Version added: 0.83

Defines the configuration for an x264 encoder.

| Name        | Type                                              | Description                                                                    | Since |
|-------------| --------------------------------------------------|--------------------------------------------------------------------------------| ----- |
| mic         | [StreamDeviceVolume](#streamdevicevolume-object)  |  Defines the microphone volume as applied to the stream                        | 0.83  |
| mic_volume  | int                                               |  Defines the microphone volume as applied to the stream in a range of 0 to 100 | 0.83  |
| game        | [StreamDeviceVolume](#streamdevicevolume-object)  | Defines the game volume as applied to the stream                               | 0.83  |
| game_volume | int                                               | Defines the game volume as applied to the stream in a range of 0 to 100        | 0.83  |

## StreamDeviceVolume Object

#### Version added: 0.78

Defines a device volume and enablement settings.

| Name      | Type   | Description                                          | Since |
|-----------| ------ |------------------------------------------------------| ----- |
| enable    | bool   |  Defines if the device is enabled                    | 0.78  |
| volume    | int    |  Defines the device volume in the range of 0 to 100  | 0.78  |
| device_id | string | Defines the device ID to use                         | 0.78  |

## StreamPeripheralsCaptureOptions Object

#### Version added: 0.83

Stream capture options for peripheral devices.

| Name                 | Type                                                                                               | Description                                                     | Since |
|----------------------| -------------------------------------------------------------------------------------------------- |-----------------------------------------------------------------| ----- |
| capture_mouse_cursor | [overwolf.streaming.enums.StreamMouseCursor](#streammousecursor-enum) enum   |  Defines when to capture the mouse cursor while streaming is on | 0.83  |

## StreamMouseCursor enum

#### Version added: 0.83

| Options     | Description                                         |
|-------------| ----------------------------------------------------|
| both        | Always capture the mouse cursor                     |
| gameOnly    | Capture the mouse cursor only when a game is focued |
| desktopOnly | Capture the mouse cursor only when on the desktop   |

## StreamIngestServer Object

#### Version added: 0.78

Information on the server that is being streamed to.

| Name         | Type   | Description                                                                                | Since |
|--------------| ------ |--------------------------------------------------------------------------------------------| ----- |
| name         | string | The server name that is being streamed to                                                  | 0.78  |
| template_url | string | The server’s url template. Use the token {stream_key} to specify the stream key in the url | 0.78  |


## WatermarkSettings Object

#### Version added: 0.78

The basic stream information.

| Name           | Type   | Description                                                               | Since |
|----------------| -------|---------------------------------------------------------------------------|------ |
| showWatermark  | bool   | Determines whether or not to display the Overwolf watermark on the stream | 0.78  |

## StreamingMode enum

#### Version added: 0.78

| Options      | Description                                                                                                         |
|--------------| --------------------------------------------------------------------------------------------------------------------|
| WhenVisible  | Stream the window when it is visible. This is the default behavior. The viewers will see what you see               |
| Always       | Always stream the window, even when it is hidden or minimized. The viewers will continue to see it while you don’t  |
| Never        | Never stream the window. The viewers will not see the window even if you do see it.                                 |

## ObsStreamingMode enum

#### Version added: 0.78

| Options                     | Description                                                                                                                                             |
|-----------------------------| --------------------------------------------------------------------------------------------------------------------------------------------------------|
| OBSNoAwareness              | The default Overwolf window style                                                                                                                       |
| OBSAwareness                | Allows to capture the window using Overwolf OBS plugin and will not be visible ingame or by Overwolf capturing apps (will still be visible in desktop)  |
| OBSAwarenessHideFromDeskTop | Same as OBSAwareness but also not visible in desktop (hidden)                                                                                           |
## SplitResult Object

#### Version added: 0.141

Returns with the result.

Parameter          | Type     | Description                                 |
-------------------| ---------| ------------------------------------------- |
*success*          | boolean  | inherited from the "Result" Object          |
*error*            | string   | inherited from the "Result" Object          |

## indication_position enum

#### Version added: 0.143

| Options           | Description                                                     |
|-------------------| ----------------------------------------------------------------|
| None              |                                                                 |
| TopLeftCorner     |                                                                 |
| TopRightCorner    |                                                                 |
| BottomLeftCorner  |                                                                 |
| BottomRightCorner |                                                                 |

## indication_type enum

#### Version added: 0.143

| Options      | Description                                                            |
|--------------| -----------------------------------------------------------------------|
| NoIndication |                                                                        |
| Dot          |                                                                        |
| DotAndTimer  |                                                                        |
