---
id: overwolf-media-replays
title: overwolf.media.replays API
sidebar_label: overwolf.media.replays
---

Use the overwolf.media.replays API to capture a **short** video replay of the currently running game.

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

## turnOn(parameters, callback)
#### Version added: 0.130

> Turns on background replay capturing. Without calling it first, you will not be able to create video replays.

:::note
Using this method you can quickly get the game highlights videos without the overhead of using both OW events and streaming API’s.  
:::

There’s no need to know/understand each supported game’s mechanics, game flow, edge cases, timings, etc. Just request for any supported game highlight and OW will provide you with a video file that includes this event.

Parameter   | Type                                           | Description                                                             |
----------- | ---------------------------------------------- | ----------------------------------------------------------------------- |
parameters  | [ReplaySetting](#replaysetting-object) object  |  Container for the capture configuration                                              |
callback    | function                                       | A callback function which will be called with the status of the request |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{ "status": "success" }
```

#### Few important notes

* `turnOn()` will fail if highlights are requested but not supported for the current game. (to get the list of supported highlights call [getHighlightsFeatures()](#gethighlightsfeaturesgameid-callback))
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
    }
};

overwolf.media.replays.turnOn({
    "settings": streamSetting,
    "highlights": {
        "enable" : true, //set false if you want to record the highligths manually
        "requiredHighlights" : ["death","assist","victory"] //an interesting evenst that happened in game
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

* A replay id will be returned in the callback which is needed to finish capturing the replay.
* You can only call this method if replay mode is on and no other replay is currently being captured to a file.

Parameter               | Type                  | Description                                                                                                      |
----------------------- | ----------------------| ---------------------------------------------------------------------------------------------------------------- |
replayType              | [ReplayType](#replaytype-enum) enum  | The type of replay to capture                                                                     |
pastDuration	        | int                                  | The video lengh, in milliseconds to include prior to the time of this call                        |
captureFinishedCallback	| function   |A callback function which will be called when capturing is finished, at the end of the future duration supplied to this call |
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

* ou can only call this method if replay mode is on and using a valid id of a replay being captured to a file.

Parameter               | Type                                 | Description                                                             |
----------------------- | -------------------------------------| ----------------------------------------------------------------------- |
replayId		        | string                               | The id of the replay you want to stop capturing                         |
callback                | function                             | A callback function which will be called with the status of the request |

## updateTobiiSetting(param, callback)
#### Version added: 0.110

> Update Tobii streaming layer.

* ou can only call this method if replay mode is on and using a valid id of a replay being captured to a file.

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

* You can only call this method if replay mode is on and using a valid id of a replay being captured to a file.

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

> Fired when a new Replay highlight recorded (when highlightsSetting is enabled).

## ReplayHighlightsSetting Object
#### Version added: 0.78

> Container for the Auto highlights configuration.

Parameter | Type | Description                   |
--------- | -----| ----------------------------- |
enable      | bool  | Enable auto Highlights recording |
requiredHighlights   | string  | An array of requested highlights. use ["*"] to register all features. You can get the list of the supported highlights using the method [getHighlightsFeatures()](#gethighlightsfeaturesgameid-callback))   |

## ReplaySetting Object
#### Version added: 0.133

> Container for the capture configuration.

Parameter | Type                                                               | Description                                  |
--------- | -------------------------------------------------------------------| -------------------------------------------- |
highlights| [ReplayHighlightsSetting](#replayhighlightssetting-object) Object  | **Optional**. Enable auto Highlights recording |
settings  | [StreamParams](overwolf-streaming#streamparams-object) Object      | Mandatory. the settings required to start a stream      |


## ReplayType enum
#### Version added: 0.78

> The replay type to use.

Option    | Description  |
--------- | -------------|
Video     |              |
gif       |              |
