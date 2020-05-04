---
id: overwolf-media-replays
title: overwolf.media.replays API
sidebar_label: overwolf.media.replays
---

Use this API to capture a **short** video replay of the currently running game.

:::important
Please read all the info about video capture usage and options on our [video capture best practices](../topics/video-capture) guide.
:::

## Methods Reference

* [overwolf.media.replays.turnOn()](#turnonparameters-callback)
* [overwolf.media.replays.turnOff()](#turnoffcallback)
* [overwolf.media.replays.getState()](#getstatereplaytype-callback)
* [overwolf.media.replays.getState()](#getstatecallback)
* [overwolf.media.replays.capture()](#capturereplaytype-pastduration-futureduration-capturefinishedcallback-callback)
* [overwolf.media.replays.capture()](#capturepastduration-futureduration-capturefinishedcallback-callback)
* [overwolf.media.replays.startCapture()](#startcapturereplaytype-pastduration-callback)
* [overwolf.media.replays.startCapture()](#startcapturepastduration-callback)
* [overwolf.media.replays.stopCapture()](#stopcapturereplaytype-replayid-callback)
* [overwolf.media.replays.stopCapture()](#stopcapturereplayid-callback)
* [overwolf.media.replays.updateTobiiSetting()](#updatetobiisettingparam-callback)
* [overwolf.media.replays.getHighlightsFeatures()](#gethighlightsfeaturesgameid-callback)
* overwolf.media.replays.turnOff() - Obsolete.

## Events Reference

* [overwolf.media.replays.onCaptureError](#oncaptureerror)
* [overwolf.media.replays.onCaptureStopped](#oncapturestopped)
* [overwolf.media.replays.onCapureWarning](#oncapurewarning)
* [overwolf.media.replays.onReplayServicesStarted](#onreplayservicesstarted)
* [overwolf.media.replays.onHighlightsCaptured](#onhighlightscaptured)

## Types Reference

* [overwolf.media.replays.ReplayHighlightsSetting](#replayhighlightssetting-object) Object
* [overwolf.media.replays.enums.ReplayType](#replaytype-enum) enum
* [overwolf.media.replays.onHighlightsCapturedEvent](#onhighlightscapturedevent-object) Object
* [overwolf.media.replays.raw_events](#raw_events-object) Object
* [overwolf.media.replays.ReplayVideoOptions](#replayvideooptions-object) Object
* [overwolf.media.replays.ReplayStreamParams](#replaystreamparams-object) Object


## turnOn(parameters, callback)
#### Version added: 0.130

> Turns on background replay capturing. Without calling it first, you will not be able to create video replays.

Only apps that have the **VideoCaptureSettings** permission in the manifest are considered as a capture app and displayed in the OW client capture tab.

:::tip
Using this method you can quickly get the game highlights videos without the overhead of using both OW events and streaming API’s.  
:::

There’s no need to know/understand each supported game’s mechanics, game flow, edge cases, timings, etc.  
Just request for any supported game highlight and OW will provide you with a video file that includes this event.

Parameter   | Type                                           | Description                                                             |
----------- | ---------------------------------------------- | ----------------------------------------------------------------------- |
parameters  | [ReplaySetting](#replaysetting-object) object  |  Container for the capture configuration                                              |
callback    | function                                       | A callback function which will be called with the status of the request |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{ "status": "success" }
```

#### Important notes

* `turnOn()` will fail if highlights are requested but not supported for the current game.  
  To get the list of supported highlights call [getHighlightsFeatures()](#gethighlightsfeaturesgameid-callback).
* The below call will override your current OW client settings only if video setting is not null or values are different than zero.
* For each OW app that uses this feature, a new video folder will be created. So in theory, a few OW installed apps can capture the same highlight, from the same game (if all these apps set to capture this highlight from this game of course). 

#### Usage Example

```javascript
 let streamSetting = {
    "video": {
        "sub_folder_name": folderName,
        "buffer_length": bufferLength,
        "tobii": {
        "visible": tobiiService.getTobiiIsOn(), //false
        "effect": tobiiService.getEffectSetting() //inverted,
        },
        "override_overwolf_setting" : false, 
        "fps" :30,
        "width" :1920,
        "height" : 1080
    },
    "quota": {
      "max_quota_gb": 2,
      "excluded_directories": [ "cool_session" ] //set directories that are not part of the quota
    }
};

overwolf.media.replays.turnOn({
    "settings": streamSetting,
    "highlights": {
        "enable" : true, //set false if you want to record the highligths manually
        "requiredHighlights" : ["death","assist","victory"] // events to capture
    }
}, callback);
```

## turnOff(callback)
#### Version added: 0.117

> Turns off background replay capturing. Call this as soon as you’re no longer interested in capturing, in order to free up resources.

Parameter | Type                  | Description                                                             |
--------- | ----------------------| ----------------------------------------------------------------------- |
callback  | function              | A callback function which will be called with the status of the request |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{ "status": "success" }
```

## getState(replayType, callback)
#### Version added: 0.78

> Returns whether replay capturing is turned on or off.

Parameter | Type                  | Description                                                             |
--------- | ----------------------| ----------------------------------------------------------------------- |
replayType| [ReplayType](#replaytype-enum) enum       | The type of replay to get state for                 |
callback  | function              | A callback function which will be called with the status of the request |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{
    "status": "success",
    "isOn": true
}
```

## getState(callback)
#### Version added: 0.117

> Returns whether replay capturing is turned on or off.

Parameter | Type                  | Description                                                             |
--------- | ----------------------| ----------------------------------------------------------------------- |
callback  | function              | A callback function which will be called with the status of the request |


## capture(replayType, pastDuration, futureDuration, captureFinishedCallback, callback)
#### Version added: 0.78

> Starts capturing a replay to a file. 

:::note
**Capture()** will automatically stop after it reaches the **futureDuration**. No need to call **stopCapture()**. 
If you want to stop the capture manually, you can use [startCapture()](#startcapturereplaytype-pastduration-callback). 
:::

* A replay id will be returned in the callback which is needed to finish capturing the replay.
* You can only call this method if replay mode is on and no other replay is currently being captured to a file.

Parameter               | Type                  | Description                                                                                                      |
----------------------- | ----------------------| ---------------------------------------------------------------------------------------------------------------- |
replayType              | [ReplayType](#replaytype-enum) enum  | The type of replay to capture                                                                     |
pastDuration	        | int                                  | The video lengh, in milliseconds to include prior to the time of this call                        |
futureDuration          | int        | The video lengh, in milliseconds to include after the time of this call. To ignore it, simply give it a non-positive value  |
captureFinishedCallback	| function   |A callback function which will be called when capturing is finished, at the end of the future duration supplied to this call |
callback                | function                             | A callback function which will be called with the status of the request                           |


#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{
    "status": "success",
    "url": "overwolf://media/replays/App+Name/Dota+2+06-28-2016+17-55-59-435.mp4",
    "path": "E:/Video/Overwolf/App Name/Dota 2 06-28-2016 17-55-59-435.mp4",
    "duration": 10512,
    "start_time": 1467125753892,
    "thumbnail_url": "overwolf://media/thumbnails/App+Name/Dota+2+06-28-2016+17-55-59-435.mp4"
}
```

## capture(pastDuration, futureDuration, captureFinishedCallback, callback)
#### Version added: 0.78

> Starts capturing a replay to a file.

:::note
**Capture()** will automatically stop after it reaches the **futureDuration**. No need to call **stopCapture()**. 
If you want to stop the capture manually, you can use [startCapture()](#startcapturereplaytype-pastduration-callback). 
:::

* A replay id will be returned in the callback which is needed to finish capturing the replay.
* You can only call this method if replay mode is on and no other replay is currently being captured to a file.

Parameter               | Type                  | Description                                                                                                      |
----------------------- | ----------------------| ---------------------------------------------------------------------------------------------------------------- |
pastDuration	        | int                                  | The video lengh, in milliseconds to include prior to the time of this call                        |
futureDuration          | int        | The video lengh, in milliseconds to include after the time of this call. To ignore it, simply give it a non-positive value  |
captureFinishedCallback	| function   |A callback function which will be called when capturing is finished, at the end of the future duration supplied to this call |
callback                | function                             | A callback function which will be called with the status of the request                           |

## startCapture(replayType, pastDuration, callback)
#### Version added: 0.78

> Starts capturing a replay to a file.

:::note
**startCapture()** won't automatically stop until you call [stopCapture()](#stopcapturereplaytype-replayid-callback).

It's useful if you want to stop the capturing based on a future event, like video combos: kill, doublekill, triple kill - where you can't predict what will happen after the first kill.
If you want to automatically stop after it reaches **futureDuration**, you can use [capture()](#capturepastduration-futureduration-capturefinishedcallback-callback). 
:::

* A replay id will be returned in the callback which is needed to finish capturing the replay.
* You can only call this method if replay mode is on and no other replay is currently being captured to a file.

Parameter               | Type                  | Description                                                                                                      |
----------------------- | ----------------------| ---------------------------------------------------------------------------------------------------------------- |
replayType              | [ReplayType](#replaytype-enum) enum  | The type of replay to capture                                                                     |
pastDuration	        | int                                  | The video lengh, in milliseconds to include prior to the time of this call                        |
callback                | function                             | A callback function which will be called with the status of the request                           |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{
    "status": "success",
    "url": "overwolf://media/replays/App+Name/Dota+2+06-28-2016+17-59-37-620.mp4",
    "path": "E://Video/Overwolf/App Name/Dota 2 06-28-2016 17-59-37-620.mp4"
}
```

## startCapture(pastDuration, callback)
#### Version added: 0.78

> Starts capturing a replay to a file.

:::note
**startCapture()** won't automatically stop until you call [stopCapture()](#stopcapturereplaytype-replayid-callback).

It's useful if you want to stop the capturing based on a future event, like video combos: kill, doublekill, triple kill - where you can't predict what will happen after the first kill.
If you want to automatically stop after it reaches **futureDuration**, you can use [capture()](#capturepastduration-futureduration-capturefinishedcallback-callback). 
:::

* A replay id will be returned in the callback which is needed to finish capturing the replay.
* You can only call this method if replay mode is on and no other replay is currently being captured to a file.

Parameter               | Type                  | Description                                                                                                      |
----------------------- | ----------------------| ---------------------------------------------------------------------------------------------------------------- |
replayType              | [ReplayType](#replaytype-enum) enum  | The type of replay to capture                                                                     |
captureFinishedCallback	| function   |A callback function which will be called when capturing is finished, at the end of the future duration supplied to this call |
callback                | function                             | A callback function which will be called with the status of the request       

## stopCapture(ReplayType, replayId, callback)
#### Version added: 0.78

> Finishes capturing a replay and returns a url to the created video file.

* You can only call this method if replay mode is on and using a valid id of a replay being captured to a file (“url” property).

Parameter               | Type                                 | Description                                                             |
----------------------- | -------------------------------------| ----------------------------------------------------------------------- |
replayType              | [ReplayType](#replaytype-enum) enum  | The type of replay to capture                                           |
replayId		        | string                               | The id of the replay you want to stop capturing                         |
callback                | function                             | A callback function which will be called with the status of the request |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{
    "status": "success",
    "url": "overwolf://media/replays/App+Name/Dota+2+06-28-2016+17-59-37-620.mp4",
    "path": "E://Video/Overwolf/App Name/Dota 2 06-28-2016 17-59-37-620.mp4",
    "duration": 84556,
    "start_time": 1467125971875,
    "thumbnail_url": "overwolf://media/thumbnails/App+Name/Dota+2+06-28-2016+17-59-37-620.mp4"
}
```

## stopCapture(replayId, callback)
#### Version added: 0.117

> Finishes capturing a replay and returns a url to the created video file.

* You can only call this method if replay mode is on and using a valid id of a replay being captured to a file.

Parameter               | Type                                 | Description                                                             |
----------------------- | -------------------------------------| ----------------------------------------------------------------------- |
replayId		        | string                               | The id of the replay you want to stop capturing                         |
callback                | function                             | A callback function which will be called with the status of the request |

## updateTobiiSetting(param, callback)
#### Version added: 0.110

> Update Tobii streaming layer.

* You can only call this method if replay mode is on and using a valid id of a replay being captured to a file.

Parameter               | Type                                 | Description                                                                                      |
----------------------- | -------------------------------------| ------------------------------------------------------------------------------------------------ |
param			        | [TobiiLayerParams](overwolf-tobii#tobiilayerparams-object) | The Tobii layer visibility param                                           |
callback                | function                             | A callback function which will be called with the status of the request                          |

#### Callback argument: Success

A function that will be called with a JSON containing the status and the stream id if successful:

```json
{"status": "success","stream_id": 1}
```

#### Callback argument: Failure

A callback function which  an error message:

```json
{"status": "error", "something went wrong..."}
```

#### Usage Example

```javascript
overwolf.media.replays.updateTobiiSetting({
    visible: true,
    effect: overwolf.streaming.enums.eTobiiEffectType.Bubble},
    function(res) {
       if (res.status == 'success') { }
    });
```

## getHighlightsFeatures(gameId, callback)
#### Version added: 0.130

> Get supported auto highlights features for a game.


Parameter   | Type     | Description                                                                                                                                |
------------| ---------| ------------------------------------------------------------------------------------------------------------------------------------------ |
gameId		| int      | The id of the game you want to capture it highlights                                                                                       |
callback    | function |A callback function which provides a list of the generated video highlights URL’s for this session and relevant metadata for each highlight |

#### Usage example

```js
//get available Fortnite highlights

overwolf.media.replays.getHighlightsFeatures(21216, JSON.stringify(console.log))
```

#### Callback argument: Success


```json
{"status":"success","features":["kill","knockout","death","knockedout","victoryRoyale"]}
```

## onCaptureError

#### Version added: 0.78

> Fired when an errror has occured with the capturing.

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


## onCaptureStopped

#### Version added: 0.117

> Fired when replay service is stopped.

## onCapureWarning

#### Version added: 0.117

>Fired on capture service warning.

## onReplayServicesStarted

#### Version added: 0.117

> Fired when an replay service was started (on any app)

## onHighlightsCaptured

#### Version added: 0.130

> Fired when a new Replay highlight recorded (when highlightsSetting is enabled), with the following structure: [onHighlightsCapturedEvent](#onhighlightscapturedevent-object) Object

#### Usage

```js
overwolf.media.replays.onHighlightsCaptured.addListener(function(info) {
      console.log("a stream had captured: " + JSON.stringify(info));
});
```

## onHighlightsCapturedEvent Object

Parameter               | Type                              | Description           |
------------------------| ----------------------------------|---------------------- |
game_id                 |  number                           |                       | 
match_id                |  string                           |                       | 
match_internal_id       |  string                           |                       | 
session_id              |  string                           |                       | 
session_start_time      |  string                           |                       | 
match_start_time        |  string                           |                       | 
start_time              |  string                           |                       | 
duration                |  string                           |                       | 
events                  |  string[]                         |                       | 
raw_events              |  [raw_events](#raw_events-object)[] |      | 
media_url               |  string                           |                       | 
media_path_encoded      |  string                           |                       | 
thumbnail_url           |  string                           |                       | 
thumbnail_encoded_path  |  string                           |                       | 
replay_video_start_time |  number                           |                       | 

#### Event data example

```json
{
    "game_id":5426,
    "match_id":"2334906612",
    "match_internal_id":"",
    "session_id":"f05099982b6c452dbf0ba8250d766dc8",
    "session_start_time":1576572688739,
    "match_start_time":1576572691238,
    "start_time":1576572986453,
    "duration":19333,
    "events":["victory"],
    "raw_events":[{"type":"victory","time":10000}],
    "media_url":"overwolf://media/replays/Game+Summary/League+of+Legends/League+of+Legends_17-12-2019_10-51-31-222/League+of+Legends+12-17-2019+10-56-36-455.mp4","media_path":"C:\\Users\\Er\\Videos\\Overwolf\\Game Summary\\League of Legends\\League of Legends_17-12-2019_10-51-31-222\\League of Legends 12-17-2019 10-56-36-455.mp4",
    "media_path_encoded":"file:///C:/Users/Er/Videos/Overwolf/Game Summary/League of Legends/League of Legends_17-12-2019_10-51-31-222/League of Legends 12-17-2019 10-56-36-455.mp4",
    "thumbnail_url":"overwolf://media/thumbnails/Game+Summary/League+of+Legends/League+of+Legends_17-12-2019_10-51-31-222/League+of+Legends+12-17-2019+10-56-36-455.mp4","thumbnail_path":"C:\\Users\\Er\\Videos\\Overwolf\\Game Summary\\League of Legends\\League of Legends_17-12-2019_10-51-31-222\\Thumbnails\\League of Legends 12-17-2019 10-56-36-455.jpg",
    "thumbnail_encoded_path":"file:///C:/Users/Er/Videos/Overwolf/Game Summary/League of Legends/League of Legends_17-12-2019_10-51-31-222/Thumbnails/League of Legends 12-17-2019 10-56-36-455.jpg",
    "replay_video_start_time":1576572986699
}
```

#### Find all the highlights of a specific match

The `match_id` field from this event is equal to the `pseudo_match_id` from [match_info](overwolf-games-events-lol#match_info).
You can cross-reference these two id's in order to find all the highlights of a certain match. (you should NOT use the `match_internal_id` as it's an OW internal ID)

That works for all the supported games, except [LOL](overwolf-games-events-lol): in LOL the `match_id` from [onHighlightsCaptured](#onhighlightscaptured) is not equal to `pseudo_match_id` - it's the real RIOT match ID. So if you wanty to find the highlights of a specific LOL match, you should cross-reference this `match_id` with the `matchId` from the [matchState](overwolf-games-events-lol#matchstate).


## raw_events Object

Parameter           | Type                              | Description           |
--------------------| ----------------------------------|---------------------- |
type                |  string                           |                       | 
time                |  number                           |                       | 



## ReplayHighlightsSetting Object
#### Version added: 0.78

> Container for the Auto highlights configuration.

Parameter | Type | Description                   |
--------- | -----| ----------------------------- |
enable      | bool  | Enable auto Highlights recording |
requiredHighlights   | string  | An array of requested highlights. use ["*"] to register all features. You can get the list of the supported highlights using the method [getHighlightsFeatures()](#gethighlightsfeaturesgameid-callback))   |

## ReplaySetting Object
#### Version added: 0.133

> Capture settings container.

Parameter | Type                                                               | Description                                    |
--------- | -------------------------------------------------------------------| ---------------------------------------------- |
highlights| [ReplayHighlightsSetting](#replayhighlightssetting-object) Object  | **Optional**. Enable auto Highlights recording |
settings  | [ReplayStreamParams](#replaystreamparams-object) Object            | The stream provider settings                   |

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

## ReplayStreamParams Object

#### Version added: 0.147

Represents the settings required to start a replay video.

| Name         | Type                                                                              | Description                              | Since |
|--------------| ----------------------------------------------------------------------------------|------------------------------------------|------ |
| audio        | [StreamAudioOptions](overwolf-streaming#streamaudiooptions-object) Object                           | Stream audio options                     | 0.78  |
| peripherals  | [StreamPeripheralsCaptureOptions](overwolf-streaming#streamperipheralscaptureoptions-object) Object | Defines how peripherals (i.e. mouse cursor) are streamed.</br>**Permissions required: DesktopStreaming**                                                                                                 | 0.78  |
| max_quota_gb | double                                                                            | Max media folder size in GB. </br>  **deprecated**  | 0.78  |
| quota        | [StreamQuotaParams](overwolf-streaming#streamquotaparams-object) object           | Parameters for limiting disk space allocation. See [note](#quota-note)  | 0.147  |
| video        | [ReplayVideoOptions](#replayvideooptions-object) Object                           | Replay video options                     | 0.147  |

#### `quota` note

You can allocate limited disk space for your captured video and even set an array of directories that are excluded from max quota calculations.  
You can use it, for example, to implement "favorites captures" feature: allow your app's users to mark some captured videos as "favorites," move them to one of the excluded directories, and make sure that they not deleted when the quota has reached the limit. Of course, this is just a suggested usage example.

## ReplayVideoOptions Object

#### Version added: 0.147

Replay video options.

| Name                           | Type   | Description                                                                       | Since  |
|--------------------------------| -------|-----------------------------------------------------------------------------------|------- |
| disable_when_sht_not_supported | bool   | Do not start video replay service in case shared texture is not supported         | 0.147  |
| buffer_length                  | int    | Defines the length of the buffer to be recorded in millisenconds (max 40 seconds) | 0.147  |

## ReplayType enum
#### Version added: 0.78

> The replay type to use.

Option    | Description  |
--------- | -------------|
Video     |              |
gif       |              |
