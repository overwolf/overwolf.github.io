---
id: overwolf-extensions
title: overwolf.extensions API
sidebar_label: overwolf.extensions
---

Use the `overwolf.extensions` API to change or retrieve the information of an Overwolf app or respond to events in the app’s lifecycle.

## Special Overwolf URLs

You can use the following helpful URLs to retrieve an extension file content or icons:

* `overwolf://extension-resources/<extension uid>/icon`  
  A URL that can be used as a source for an IMG tag or a DIV background. This path will display the icon of the stated extension.

* `overwolf://extension-resources/<extension uid>/icon_gray`  
  A URL that can be used as a source for an IMG tag or a DIV background. This will present the gray icon of the stated extension.

* `overwolf-extension://<extension uid>/<path to extension file>`  
  Returns the content of a file in an app's library.

## Methods Reference

* [overwolf.extensions.launch()](#launchuid-parameter)
* [overwolf.extensions.setInfo()](#setinfoinfo)
* [overwolf.extensions.getInfo()](#getinfoid-callback)
* [overwolf.extensions.registerInfo()](#registerinfoid-eventscallback-callback)
* [overwolf.extensions.unregisterInfo()](#unregisterinfoid-callback)
* [overwolf.extensions.getRunningState()](#getrunningstateid-callback)
* [overwolf.extensions.getManifest()](#getrunningstateid-callback)
* [overwolf.extensions.relaunch()](#relaunch)
* [overwolf.extensions.updateExtension()](#updateextensioncallback)
* [overwolf.extensions.updateExtensions()](#updateextensionscallback)
* [overwolf.extensions.checkForExtensionUpdate()](#checkforextensionupdatecallback)
* [overwolf.extensions.getServiceConsumers()](#getserviceconsumerscallback)


## Events Reference

* [overwolf.extensions.onAppLaunchTriggered](#onapplaunchtriggered)
* [overwolf.extensions.onExtensionUpdateStateChanged](#onextensionupdatestatechanged)
* [overwolf.extensions.onUncaughtException](#onuncaughtexception)


## launch(uid , parameter)
#### Version added: 0.78

> Launch an extension by unique ID.

Parameter | Type                  | Description                                                                           |
--------- | ----------------------| ------------------------------------------------------------------------------------- |
uid       | string                | Extension unique ID                                                               |
parameter | Object (optional)     | A parameter passed to the extension. The extension may or may not use this parameter |


Retrieve a service object by ID, which will usually provide external APIs.

Parameter | Type                  | Description                                                                              |
--------- | ----------------------| ---------------------------------------------------------------------------------------- |
id        | string                | Service ID                                                                           |
callback  | function              | A function called with the service, if found, and a flag indicating success or failure |

## setInfo(info)
#### Version added: 0.91

> Sets a string for other extensions to read.

Parameter | Type                  | Description                                                                              |
--------- | ----------------------| ---------------------------------------------------------------------------------------- |
info      | Object                | An object to post                                                                        |

## getInfo(id, callback)
#### Version added: 0.91

> Returns an extension’s info string.

Parameter | Type                  | Description                                                                              |
--------- | ----------------------| ---------------------------------------------------------------------------------------- |
id        | string                | ID of the extension to get info for                                                  |
callback  | function              | Called with the info                                                                     |

## registerInfo(id, eventsCallback, callback)
#### Version added: 0.91

> Requests info updates for an extension. Will also be called when the extension launches or closes.

Parameter      | Type        | Description                                                                           |
-------------- | ------------| ------------------------------------------------------------------------------------- |
id             | string      | ID of the extension to get updates for                                            |
eventsCallback | function    | A callback to receive info updates                                                    |
callback	   | function    | Status of the request                                                             |

## unregisterInfo(id, callback)
#### Version added: 0.91

> Stop requesting info for an extension.

Parameter | Type                  | Description                                                                              |
--------- | ----------------------| ---------------------------------------------------------------------------------------- |
id        | string                | ID of the extension to stop getting updates for                                      |
callback  | function              | Status of the request                                                                 | 

## getManifest(id, callback)
#### Version added: 0.91

> Returns the requested extension’s manifest object.

Parameter | Type                  | Description                                                                              |
--------- | ----------------------| ---------------------------------------------------------------------------------------- |
id        | string                | ID of the extension to get the manifest for                                          |
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
id        | string                | ID of the extension to get updates for                                               |
callback  | function              | Status of the request                                                                | 

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

> Attempts to download an update for the calling extension.

This function allows apps to check and perform an update without having to wait for Overwolf to do so automatically.

Parameter | Type                  | Description                                                                           |
--------- | ----------------------| ------------------------------------------------------------------------------------- |
callback  | function              | Result of the request                                                                 |

Note: there is a failsafe mechanism where this API will only work if a user action that active it is detected. This means no app should ever update while it’s being used in-game unless the user explicitly wanted it.

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{
 "success": true,
 "info": "new version 25.0.12 installed, restart app to apply."
}
```

#### Callback argument: Failure

A callback function which will be called with the status of the request

```json
{
 "success": false,
 "error": "MinOverwolfVersionRequirementUnmet",
 "info": "Overwolf version 0.125.0.2 needs to be updated to 0.126.0.11"
}
```

#### Possible error messages:

Error Code                             | Description                                     |
-------------------------------------- | ------------------------------------------------|
UnknownError                           |  error before download starts                   |
ExtensionNotFound                      |  error before download starts                   |
ExtensionDisabled                      |  error before download starts                   |
GameRunning                            |  error before download starts                   |
PackageUpdaterUnavailable              |  error before download starts                   |
MinOverwolfVersionRequirementUnmet     |  error before download starts                   |
MinGepVersionRequirementUnmet          |  error before download starts                   |
MinGameSummaryVersionRequirementUnmet  |  error before download starts                   |
PackageInfoMissing                     |  error before download starts                   |
AlreadyUpToDate                        |  error before download starts                   |
AlreadyInstalled                       |  error after download starts                    |
NoConnectivity                         |  error after download starts                    |
MissingExtensionId                     |  error after download starts                    |
InvalidInstallState                    |  error after download starts                    |
InstallationError                      |  error after download starts                    |
AppNotInstalled                        |  error after download starts                    |
DownloadError                          |  error after download starts                    |


## updateExtensions(callback)
#### Version added: 0.133

> Attempts to download an update for all installed extensions.

This function allow the app to check and perform an update without having to wait for Overwolf to do so.

Parameter | Type                  | Description                                                                           |
--------- | ----------------------| ------------------------------------------------------------------------------------- |
callback  | function              | Result of the request                                                             |

Note: there is a failsafe mechanism where this API will only work if a user action that active it is detected. This means no app should ever update while it’s being used in-game unless the user explicitly wanted it.

## checkForExtensionUpdate(callback)
#### Version added: 0.135

> Checks if an update is available for the calling extension.

This function allows the current app to check if there is an extension update, without having to wait for Overwolf to do so.
Calling this function will not automatically update the extension, just checks if an update exists.

Parameter | Type                  | Description                                                                           |
--------- | ----------------------| ------------------------------------------------------------------------------------- |
callback  | function              | Result of the request                                                                 |

#### Data example

Possible values for the stats are "UpdateAvailable" or "UpToDate". 

Examples:

```json
{state: "UpdateAvailable", updateVersion: "4.11.2", success: true, error: null}
```

```json
{state: "UpToDate", updateVersion: null, success: true, error: null}
```

## getServiceConsumers(callback)
#### Version added: 0.135

> return service providers manifest data.

Parameter | Type                  | Description                                                                           |
--------- | ----------------------| ------------------------------------------------------------------------------------- |
callback  | function              | Result of the request                                                                 |

#### Data example

Assuming the manifesr flag [service_providers](manifest-json#service_providers) is this:

```json
 "service_providers": {
     "nafihghfcpikebhfhdhljejkcifgbdahdhngepfb": {
       "whatever": "value"
     }
   },
```

The result of the call will be:

```json
overwolf.extensions.getServiceConsumers(console.info) {
    data:  {hffhbjnafafjnehejohpkfhjdenpifhihebpkhni: "{"whatever":"value"}" },
    success: true,
    error : null
}
```


## onAppLaunchTriggered
#### Version added: 0.92

> Fires when the current app is launched while already running. This is useful in the case where the app has custom logic for clicking its dock button while it is already running.

### The origin string

The event returns an `origin` string which returns what triggered the app launch:

```json
overwolf-extension://hffhbjnafafjnehejohpkfhjdenpifhihebpkhni/index.html?source=gamelaunchevent
```

### The source param

Possible values for the `source` parameter:

Parameter        | Type                                                                         |
---------------- | -----------------------------------------------------------------------------|
dock             | Launched from the Overwolf dock                                              |
gamelaunchevent  | Auto-launched along with a game                                                    |
hotkey           | Launched in-game with a hotkey                                             |
storeapi         | Launched from the store                                                      |
odk              | Launched with the overwolf.extensions.launch API                             |
commandline      | Launched from the command line using overwolf.exe -launchapp [extension id]  |
tray             | Launched from the tray                                                       |
startup          | Launched upon startup (like remote configurations)                           |
after-install    | Auto-launched after installation                                             |

:::tip
if you want to get origin information without registering events, you can run the `window.location.href` command.
:::

## onExtensionUpdateStateChanged
#### Version added: 0.132

> Fires after the current app was successfully updated.

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
