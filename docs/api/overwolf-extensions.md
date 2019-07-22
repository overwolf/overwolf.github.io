---
id: overwolf-extensions
title: overwolf.extensions API
sidebar_label: overwolf.extensions
---

Use the `overwolf.extensios` API to control and retrieve details of an Overwolf app (extension) or listen and respond to events in the app’s lifecycle.

## Special OW URL's

You can use the following helpful URL’s to retrieve an extension file content or icons:

* `overwolf://extension-resources/<extension uid>/icon`  
  A URL that will serve as a source for IMG tag or or a DIV background.   
  This will present the icon of the stated extension.

* `overwolf://extension-resources/<extension uid>/icon_gray`  
  A URL that will serve as a source for IMG tag or or a DIV background.   
  This will present the gray icon of the stated extension.

* `overwolf-extension://<extension uid>/<path to extension file>`  
  Returns the content of a file in an extension.

## Methods Reference

* [overwolf.extensions.launch()](#launchuid-parameter)
* [overwolf.extensions.getService()](#getserviceid-callback)
* [overwolf.extensions.setInfo()](#setinfoinfo)
* [overwolf.extensions.getInfo()](#getinfoid-callback)
* [overwolf.extensions.registerInfo()](#registerinfoid-eventscallback-callback)
* [overwolf.extensions.unregisterInfo()](#unregisterinfoid-callback)
* [overwolf.extensions.getRunningState()](#getrunningstateid-callback)
* [overwolf.extensions.getManifest()](#getrunningstateid-callback)
* [overwolf.extensions.relaunch()](#relaunch)
* [overwolf.extensions.updateExtension()](#updateextensioncallback)
* [overwolf.extensions.updateExtensions()](#updateextensionscallback)

## Events Reference

* [overwolf.extensions.onAppLaunchTriggered](#onapplaunchtriggered)
* [overwolf.extensions.onExtensionUpdateStateChanged](#onextensionupdatestatechanged)
* [overwolf.extensions.onUncaughtException](#onuncaughtexception)


## launch(uid , parameter)
#### Version added: 0.78

> Launch an extension by its unique id.

Parameter | Type                  | Description                                                                           |
--------- | ----------------------| ------------------------------------------------------------------------------------- |
uid       | string                | The extension unique id                                                               |
parameter | Object (optional)     | A parameter to pass to the extension. The extension may or may not use this parameter |

## getService(id, callback)
#### Version added: 0.78

> Retrieve a service object (which will usually provide external APIs) by an id.

Parameter | Type                  | Description                                                                              |
--------- | ----------------------| ---------------------------------------------------------------------------------------- |
id        | string                | The service id                                                                           |
callback  | function              | A function called with the service, if found, and a status indicating success or failure |

## setInfo(info)
#### Version added: 0.91

> Sets a string for other extensions to read.

Parameter | Type                  | Description                                                                              |
--------- | ----------------------| ---------------------------------------------------------------------------------------- |
info      | Object                | An object to post                                                                        |

## getInfo(id, callback)
#### Version added: 0.91

> Gets an extension’s info string.

Parameter | Type                  | Description                                                                              |
--------- | ----------------------| ---------------------------------------------------------------------------------------- |
id        | string                | The id of the extension to get info for                                                  |
callback  | function              | Called with the info                                                                     |

## registerInfo(id, eventsCallback, callback)
#### Version added: 0.91

> Requests info updates for extension. Will also be called when the extension launches/closes.

Parameter      | Type        | Description                                                                           |
-------------- | ------------| ------------------------------------------------------------------------------------- |
id             | string      | The id of the extension to get updates for                                            |
eventsCallback | function    | A callback to receive info updates                                                    |
callback	   | function    | The status of the request                                                             |

## unregisterInfo(id, callback)
#### Version added: 0.91

> Stop requesting info for extension.

Parameter | Type                  | Description                                                                              |
--------- | ----------------------| ---------------------------------------------------------------------------------------- |
id        | string                | The id of the extension to stop getting updates for                                      |
callback  | function              |The status of the request                                                                 | 

## getManifest(id, callback)
#### Version added: 0.91

> Returns the requested extension’s manifest object.

Parameter | Type                  | Description                                                                              |
--------- | ----------------------| ---------------------------------------------------------------------------------------- |
id        | string                | The id of the extension to get the manifest for                                          |
callback  | function              | A function called with the manifest data                                                 | 

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{ "status": "success", "isRunning": true }
```

## getRunningState(id, callback)
#### Version added: 0.91

> Gets the running state of an extension.

Parameter | Type                  | Description                                                                              |
--------- | ----------------------| ---------------------------------------------------------------------------------------- |
id        | string                | The id of the extension to get updates for                                               |
callback  | function              | The status of the request                                                                | 

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{
    "manifest_version": 1,
    "type": "WebApp",
    "meta": {
        "name": "App Name",
        "version": "1.0.0.0",
        "minimum-overwolf-version": "0.92.21.0",
        "author": "Author",
        "icon": "icon.png",
        "icon_gray": "icon_gray.png",
        "description": ""
    },
    "permissions": [
        "Extensions",
        "Hotkeys",
        "GameInfo",
        "GameControl",
        "FileSystem"
    ],
    "channel-id": 0,
    "dependencies": null,
    "data": {
        "externally_connectable": {
            "matches": [
                "http://*.overwolf.com",
                "http://overwolf.com"
            ]
        },
        "protocol_override_domains": null,
        "force_browser": "NotSet",
        "plugins": [
            "npSimpleIOPlugin.dll"
        ],
        "game_events": null,
        "extra-objects": null,
        "hotkeys": null,
        "content_scripts": null,
        "launch_events": [
            {
                "event": 1,
                "event_data": {
                    "game_ids": null,
                    "wait_for_stable_framerate": null
                },
                "start_minimized": true
            }
        ],
        "user_agent": null,
        "windows": {
            "index": {
                "file": "index.html",
                "show_in_taskbar": true,
                "transparent": true,
                "resizable": false,
                "show_minimize": true,
                "clickthrough": false,
                "disable_rightclick": false,
                "forcecapture": false,
                "show_only_on_stream": false,
                "ignore_keyboard_events": false,
                "in_game_only": false,
                "desktop_only": false,
                "disable_restore_animation": false,
                "grab_keyboard_focus": false,
                "size": {
                    "width": 910,
                    "height": 560
                },
                "start_position": {
                    "top": 10,
                    "left": 10
                },
                "topmost": false
            }
        },
        "start_window": "index"
    }
}
```

## relaunch()
#### Version added: 0.112

> Relaunch the current app.

## updateExtension(callback)
#### Version added: 0.133

> Tries to download an update for the calling extension.

This functions allows apps to check and perform an update without having to wait for Overwolf to do so.

Parameter | Type                  | Description                                                                           |
--------- | ----------------------| ------------------------------------------------------------------------------------- |
callback  | function              | The result of the request                                                             |

## updateExtensions(callback)
#### Version added: 0.133

> Tries to download an update for all the installed extensions.

This functions allows apps to check and perform an update without having to wait for Overwolf to do so.

Parameter | Type                  | Description                                                                           |
--------- | ----------------------| ------------------------------------------------------------------------------------- |
callback  | function              | The result of the request                                                             |

## onAppLaunchTriggered
#### Version added: 0.92

> Fires when the current app is launched while already running. This is useful in the case where the app has custom logic for clicking its dock button while it is already running.

### The origin string

The event returns an `origin` string which returns what triggered the app launch:

```json
overwolf-extension://hffhbjnafafjnehejohpkfhjdenpifhihebpkhni/index.html?source=gamelaunchevent
```

### The source param

Possible values for the `source` param:

Parameter        | Type                                                                         |
---------------- | -----------------------------------------------------------------------------|
dock             | launched from the Overwolf dock                                              |
gamelaunchevent  | auto-launched with a game                                                    |
hotkey           | launched in-game with its hotkey                                             |
storeapi         | launched from the store                                                      |
odk              | launched with the overwolf.extensions.launch API                             |
commandline      | launched from the command line using overwolf.exe -launchapp [extension id]  |
tray             | launched from the tray                                                       |
startup          | launched upon startup (like remote configurations)                           |
after-install    | auto-launched after installation                                             |

:::tip
if you want to get the origin (what triggered the app launch) before/without register the events, you can run the `window.location.href` command.
:::

## onExtensionUpdateStateChanged
#### Version added: 0.132

> Fires after the current app was updated successfully.

## onUncaughtException
#### Version added: 0.133

> Called for global uncaught exceptions in a frame.

#### Event Data example

 The callback args return with all the available exception data:

```json
{
"StartPosition": 4431,
"EndPosition": 4432,
"StartColumn": 4431,
"EndColumn": 4432,
"LineNumber": 1,
"Message": "Uncaught TypeError: Cannot read property 'length' of undefined",
"ScriptResourceName": "https://totalmedia2.ynet.co.il/gpt/gpt_script_ynet.js",
"SourceLine": "if(0!=dcLoadAds){var data_version={}"
}
```
