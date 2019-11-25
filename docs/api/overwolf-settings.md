---
id: overwolf-settings
title: overwolf.settings API
sidebar_label: overwolf.settings
---

Use the `overwolf.settings` API to view and modify one of the following Overwolf settings properties:

* Hotkeys – register a function for a given hotkey, or retrieve an existing hotkey key combination.
* Retrieve the current Overwolf user language.
* Video (i.e., folder location, capture settings, FPS settings, etc.).

## Special OW URL's

You can also use the following helpful URLs to open the Overwolf settings and hotkey windows:

* `overwolf://settings/`  
  A clickable link that opens the Overwolf settings window from your app.

* `overwolf://settings/hotkeys`  
   A clickable link that opens the Overwolf Hotkey settings window from your app.

* `overwolf://settings/hotkeys#<local extension hotkey name>`  
  A clickable link that opens the Overwolf Hotkey settings window from your app, and then focuses on the stated hotkey.
  This should be the same hotkey name as written in the manifest.json.  
  Note that this means you can’t focus on Overwolf’s built-in hotkeys or hotkeys of other apps.

## Methods Reference

* [overwolf.settings.getHotKey()](#gethotkeyfeatureid-callback)
* [overwolf.settings.registerHotKey()](#registerhotkeyactionid-callback)
* [overwolf.settings.getCurrentOverwolfLanguage()](#getcurrentoverwolflanguagecallback)
* [overwolf.settings.getOverwolfVideosFolder()](#getoverwolfvideosfoldercallback)
* [overwolf.settings.setOverwolfVideosFolder()](#setoverwolfvideosfolderpath-callback)
* [overwolf.settings.getOverwolfScreenshotsFolder()](#getoverwolfscreenshotsfoldercallback)
* [overwolf.settings.setOverwolfScreenshotsFolder()](#setoverwolfscreenshotsfolderpath-callback)
* [overwolf.settings.getVideoCaptureSettings()](#getvideocapturesettingscallback)
* [overwolf.settings.setVideoCaptureSettings()](#setvideocapturesettingsresolutionsettings-fps-callback)
* [overwolf.settings.getAudioCaptureSettings()](#getaudiocapturesettingscallback)
* [overwolf.settings.setAudioCaptureSettings()](#setaudiocapturesettingsenablesound-enablemicrophone-callback)
* [overwolf.settings.getFpsSettings()](#getfpssettingscallback)
* [overwolf.settings.setFpsSettings()](#setfpssettingssettings-callback)

## Events Reference

* [overwolf.settings.onFpsSettingsChanged](#onfpssettingschanged)
* [overwolf.settings.OnVideoCaptureSettingsChanged](#onvideocapturesettingschanged)
* [overwolf.settings.OnAudioCaptureSettingsChanged](#onaudiocapturesettingschanged)
* [overwolf.settings.OnHotKeyChanged](#onhotkeychanged)

## Types Reference

* [overwolf.settings.enums.ResolutionSettings](#resolutionsettings-enum) enum
* [overwolf.settings.enums.eIndicationPosition](#eindicationposition-enum) enum
* [FpsSettings](#fpssettings-object) Object

## getHotKey(featureId, callback)
#### Version added: 0.78
#### Permissions required: Hotkeys

> Returns the hotkey assigned to a given feature id by calling the callback.

Parameter | Type                  | Description                                                             |
--------- | ----------------------| ----------------------------------------------------------------------- |
featureId | string                | The feature id for which to get the set hotkey                           |
callback  | function              | A callback function which will be called with the status of the request |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{ 
    "status": "success",
    "hotkey ": "Ctrl+F2"
}
```

## registerHotKey(actionId, callback)
#### Version added: 0.78
#### Permissions required: Hotkeys

> Registers a callback for a given hotkey action.

Parameter | Type                  | Description                                                             |
--------- | ----------------------| ----------------------------------------------------------------------- |
actionId  | string                | The action id for which to register the callback                        |
callback  | function              | The function to run when the hotkey is pressed                           |

:::important
If you are using a transparnet background controller (window), you must register the hotkey in that window.
:::

#### Callback argument: Success

On successful registration, the callback function which will be called  when the hotkey is pressed.
A Note regarding hotkeys: Shift can only be combined with the F keys.

```json
{ 
    "status": "success",
    "hotkey ": "Ctrl+F2"
}
```

#### Callback argument: Failure

If the registration had failed, the callback function will be called immediately with the status "error" and another property,
“error”, indicating the reason for the failure.

```json
{ "status": "error", "error": "something went wrong..." }
```

#### Usage Example

If your manifest.json file defined these hotkeys:

```json
"data": {
    "hotkeys" : {
        "my_cool_action": {
            "title": "My Cool Action",
            "action-type": "custom",
            "default": "Ctrl+Alt+C"
        }
    }
}
```

A call to register this hotkey should be look like this:

```js
overwolf.settings.registerHotKey(
    "my_cool_action",
    function(arg) {
        if (arg.status == "success") {
            alert("This is my cool action!");
        }
    }
);
```

## getCurrentOverwolfLanguage(callback)
#### Version added: 0.85

> Returns the current language overwolf is set to in a two letter ISO name format.

Parameter | Type                  | Description                                                             |
--------- | ----------------------| ----------------------------------------------------------------------- |
callback  | function              |  A callback function which will be called with the status of the request|

#### Callback argument: Success

 A callback function which will be called with the status of the request and the current language overwolf is set to:

```json
{ 
    "status": "success",
    "language ": "en"
}
```

## getOverwolfVideosFolder(callback)
#### Version added: 0.86

> Returns the current folder overwolf uses to store videos.

Parameter | Type                  | Description                                                             |
--------- | ----------------------| ----------------------------------------------------------------------- |
callback  | function              |  A callback function which will be called with the status of the request|

#### Callback argument: Success

 A callback function which will be called with the status of the request and the current language overwolf is set to:

```json
{
    "status": "success",
    "path": {
        "Value": "E:\Video\Overwolf",
        "Type": "System.String, mscorlib, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089",
        "Name": "Folders_VideoCapturesFolder"
    }
}
```

## setOverwolfVideosFolder(path, callback)
#### Version added: 0.119

> Sets the folder Overwolf uses to store videos.

Parameter | Type                  | Description                                                              |
--------- | ----------------------| -----------------------------------------------------------------------  |
path	  | string                | The folder to use                                                        |
callback  | function              |  A callback function which will be called with the status of the request |

## getOverwolfScreenshotsFolder(callback)
#### Version added: 0.103

> Returns the current folder Overwolf uses to store screenshots and GIFs.

Parameter | Type                  | Description                                                                                              |
--------- | ----------------------| -------------------------------------------------------------------------------------------------------- |
callback  | function              |  A function called with the result of the request which contains the current Overwolf screenshots folder |

#### Callback argument: Success

 A callback function which will be called with the status of the request and the current language overwolf is set to:

```json
{  
   "status":"success",
   "path":{  
      "Value":"C:\Users\USER\Pictures\Overwolf",
      "Type":"System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089",
      "Name":"Folders_ScreenCapturesFolder"
   }
}
```

## setOverwolfScreenshotsFolder(path, callback)
#### Version added: 0.119

> Sets the folder Overwolf uses to store screenshots.

Parameter | Type                  | Description                                                                                              |
--------- | ----------------------| -------------------------------------------------------------------------------------------------------- |
path	  | string                | The folder to use                                                                                        |
callback  | function              |  A function called with the result of the request which contains the current Overwolf screenshots folder |

## getVideoCaptureSettings(callback)
#### Version added: 0.86

> Returns the current video capture settings.

Parameter | Type                  | Description                                                                                              |
--------- | ----------------------| -------------------------------------------------------------------------------------------------------- |
path	  | string                | The folder to use                                                                                        |
callback  | function              |  A function called with the result of the request which contains the current Overwolf screenshots folder |

```json
{
    "encoder": "NVIDIA_NVENC",
    "preset": "DEFAULT",
    "fps": 30,
    "resolution": 2
}
```

## setVideoCaptureSettings(resolutionSettings, fps, callback)
#### Version added: 0.117

> Sets new video capture settings.

Parameter          | Type                                                                  | Description                                              |
-------------------| ----------------------------------------------------------------------| -------------------------------------------------------- |
resolutionSettings | [overwolf.settings.ResolutionSettings](#resolutionsettings-enum) enum | The folder to use                                        |
fps                | int                                                                   |                                                          |
callback           | function                                                              |  A callback function which will be called with the status of the request|

## getAudioCaptureSettings(callback)
#### Version added: 0.117

> Returns the current audio capture settings.

Parameter          | Type        | Description                                                              |
-------------------| ------------| ------------------------------------------------------------------------ |
callback           | function    |  A callback function which will be called with the status of the request |

## setAudioCaptureSettings(enableSound, enableMicrophone, callback)
#### Version added: 0.117

> Sets new audio capture settings.

Parameter          | Type                                                                  | Description                                              |
-------------------| ----------------------------------------------------------------------| -------------------------------------------------------- |
enableSound	       | bool                                                                  | The folder to use                                        |
enableMicrophone   | bool                                                                  |                                                          |
callback           | function                                                              |  A callback function which will be called with the status of the request|

## getFpsSettings(callback)
#### Version added: 0.89

> Gets the status of the FPS control (on/off), its position, its offset (in pixels) and its scale [0, 1].

Parameter          | Type               | Description                                                              |
-------------------| -------------------| ------------------------------------------------------------------------ |
callback           | function           |  A callback function which will be called with the status of the request |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{
    "status": "success",
    "settings": {
        "offset": {
            "x": 0,
            "y": 0
        },
        "scale": 1,
        "enabled": false,
        "position": 0
    }
}
```

## setFpsSettings(settings, callback)
#### Version added: 0.89

> Sets the state (on/off), position, offset (in pixels) and scale [0, 1] of the Fps control.

Parameter          | Type               | Description                                                              |
-------------------| -------------------| ------------------------------------------------------------------------ |
settings           | [fpsSettings](#fpssettings-object) Object |  A callback function which will be called with the status of the request |
callback           | function           |  A callback function which will be called with the status of the request |


## onFpsSettingsChanged

#### Version added: 0.89

> Fired when fps settings are changed.

## OnVideoCaptureSettingsChanged

#### Version added: 0.117

> Fired when video capture settings are changed.

## OnAudioCaptureSettingsChanged

#### Version added: 0.117

> Fired when audio capture settings are changed.

## OnHotKeyChanged

#### Version added: 0.119

> Fired when a hotkey is modified. Apps will only be notified of hotkey changes that relate to them.

:::tip
Listen to this event if you want to get notified when the user changed your app hotkeys from the OW settings page.
:::

#### Event Data Example: Success

```json
{ "source": "replayhud_save", "description": "Replay HUD: Save Replay for later", "hotkey": "Ctrl+Shift+F7" }
```

## ResolutionSettings enum
#### Version added: 0.78

> Describes Resolution settings.

Option    | Description  |
--------- | -------------|
Original  |              |
R1080p    |              |
R720p     |              |
R480p     |              |

## eIndicationPosition enum
#### Version added: 0.78

> Describes position to use as anchor.

Option            | Description  |
----------------- | -------------|
None              | -1           |
TopLeftCorner     |  0           |
TopRightCorner    |  1           |
BottomLeftCorner  |  2           |
BottomRightCorner |  3           |

## FpsSettings Object
#### Version added: 0.78

> Container for the FPS settings.

Parameter | Type               | Description                          |
--------- | -------------------| ------------------------------------ |
offset    | Odkv2Point Object  | The offset from the edge (in pixels) |
scale     | double             | A scale (1.0 = original)             |
enabled   | bool               | Whether to enable or disable fps     |
position  | [eIndicationPosition](#eindicationposition-enum) enum      | The position (anchor) to use         |

#### Object Data Example

```json
{
    "settings": {
        "offset": {
            "x": 0,
            "y": 0
        },
        "scale": 1,
        "enabled": false,
        "position": 0
    }
}
```