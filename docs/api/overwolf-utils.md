---
id: overwolf-utils
title: overwolf.utils API
sidebar_label: overwolf.utils
---

Use the overwolf.utils API to get the user’s system information, send keystrokes to the game, open URL in default browser and more.

Common use cases:

* Getting a string that is currently placed on the clipboard.
* Getting the user’s system information (OS, monitors, CPU, GPU, input devices and more).
* Opening a URL in a browser.
* Send keystrokes to the running game.

## Methods Reference

* [overwolf.utils.placeOnClipboard()](#placeonclipboarddata)
* [overwolf.utils.getFromClipboard()](#getfromclipboardcallback)
* [overwolf.utils.getMonitorsList()](#getmonitorslistcallback)
* [overwolf.utils.sendKeyStroke()](#sendkeystrokekeystring)
* [overwolf.utils.openFilePicker()](#openfilepickerfilter-callback)
* [overwolf.utils.openFolderPicker()](#openfolderpickerinitialpath-callback)
* [overwolf.utils.openWindowsExplorer()](#openwindowsexplorerurl-callback)
* [overwolf.utils.isTouchDevice()](#istouchdevicecallback)
* [overwolf.utils.openUrlInDefaultBrowser()](#openurlindefaultbrowserurl)
* [overwolf.utils.openUrlInOverwolfBrowser()](#openurlinoverwolfbrowserurl)
* [overwolf.utils.getSystemInformation()](#getsysteminformationcallback)
* [overwolf.utils.getPeripherals()](#getperipheralscallback)
* [overwolf.utils.openStoreOneAppPage()](#openstoreoneapppageappid)
* [overwolf.utils.openStore()](#openstoreparam)
* [overwolf.utils.isMouseLeftButtonPressed()](#ismouseleftbuttonpressedcallback)
* [overwolf.utils.uploadClientLogs()](#uploadclientlogscallback)

## Types Reference

* [overwolf.utils.enums.eStorePage](#estorepage-enum) enum
* [overwolf.utils.OpenStoreParams](#openstoreparams-object) Object

## placeOnClipboard(data)
#### Version added: 0.80
#### Permissions required: Clipboard

> Copies the given string to the clipboard.

Parameter | Type   | Description                                  |
--------- | -------| -------------------------------------------- |
data      | string | The string to be copied to the clipboard     |

## getFromClipboard(callback)
#### Version added: 0.83
#### Permissions required: Clipboard

> Gets the string currently placed on the clipboard. If no string is placed on the clipboard, returns null.

Parameter | Type     | Description                                  |
--------- | ---------| -------------------------------------------- |
callback  | function | Called with the string from the clipboard    |

## getMonitorsList(callback)
#### Version added: 0.83
#### Permissions required: DesktopStreaming

> Returns an array with all monitors data including their display resolution, bounds, and names.

Parameter | Type     | Description                                  |
--------- | ---------| -------------------------------------------- |
callback  | function | Called with the monitors array               |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{
    "displays": [
        {
            "name": "Display 2",
            "id": "\\.\DISPLAY2",
            "x": -1280,
            "y": 0,
            "width": 1280,
            "height": 1024,
            "is_primary": false,
            "handle": {
                "value": 65579
            }
        },
        {
            "name": "Display 1",
            "id": "\\.\DISPLAY1",
            "x": 0,
            "y": 0,
            "width": 1920,
            "height": 1080,
            "is_primary": true,
            "handle": {
                "value": 65547
            }
        }
    ]
}
```

## sendKeyStroke(keyString)
#### Version added: 0.83
#### Permissions required: GameControl

> Sends a string representing a key stroke to the game, causing a simulated key stroke.

Parameter  | Type   | Description                                                    |
---------- | -------| -------------------------------------------------------------- |
keyString  | string | The key or key combination to send, as a string. e.g. “Alt+I”  |

## openFilePicker(filter, callback)
#### Version added: 0.91
#### Permissions required: FileSystem

> Opens a file picker dialog to browse for a file. A url to the selected file will be returned.

Parameter | Type     | Description                                                                                  |
--------- | ---------| -------------------------------------------------------------------------------------------- |
filter    | string   | A file filter. Supports wild cards (*) and seperated by commas (,). Ex. myFile*.*,*.txt      |
callback  | function | Called with a url to the selected file                                                       |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{
    "status": "success",
    "url": "overwolf-fs://E/Video"
}
```

## openFolderPicker(initialPath, callback)
#### Version added: 0.91

> Opens a Folder picker dialog to browse for a folder. A full path to the selected folder will be returned.

Parameter   | Type     | Description                     |
----------- | ---------| --------------------------------|
initialPath | string   | The starting folder's path      |
callback    | function | Called with the selected folder |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{
    "status": "success",
    "path": "E:/Downloads"
}
```

## openWindowsExplorer(url, callback)
#### Version added: 0.91

> Opens Windows Explorer and selects a file received as an Overwolf media url.

Parameter   | Type     | Description                                 |
----------- | ---------| --------------------------------------------|
url         | string   | An overwolf media url (overwolf://media/*)  |
callback    | function | Called with the result of the request       |

## isTouchDevice(callback)
#### Version added: 0.91

> Returns whether the current device has touch capabilities.

Parameter   | Type     | Description                                 |
----------- | ---------| --------------------------------------------|
callback    | function | Called with the result of the request       |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{
    "result": "success",
    "isTouch": false
}
```

## openUrlInDefaultBrowser(url)
#### Version added: 0.91

> Opens the url in the user’s default browser.

Parameter   | Type     | Description                                 |
----------- | ---------| --------------------------------------------|
url         | string   | A url to open                               |

## openUrlInOverwolfBrowser(url)
#### Version added: 0.91

> Opens the url in Overwolf's browser.

Parameter                | Type     | Description                                                                  |
------------------------ | ---------| -----------------------------------------------------------------------------|
url                      | string   | A url to open                                                                |
targetTabName [optional] | string   | A target tab - so that multiple calls will end up in the same tab |

## getSystemInformation(callback)
#### Version added: 0.92

> Returns system information which includes information about CPU, Monitors, GPU, HDD, RAM and more.

Parameter | Type     | Description                                                                                  |
--------- | ---------| -------------------------------------------------------------------------------------------- |
callback  | function | Called with the system information                                                           |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{  
   "status":"success",
   "systemInfo":{  
      "OS":"10.0 64Bit",
      "NetFramework":"4.6.1 or later (394802), v2.0.50727 SP2, v3.0 SP2, v3.5 SP1, v4 Client, v4 Full",
      "Monitors":[  
         {  
            "IsMain":true,
            "Name":"DELL U2412M",
            "Resolution":"1920, 1200",
            "Location":"0, 0",
            "Dpix":96,
            "Dpiy":96
         },
         {  
            "IsMain":false,
            "Name":"DELL U2412M",
            "Resolution":"1920, 1200",
            "Location":"1920, 0",
            "Dpix":96,
            "Dpiy":96
         }
      ],
      "CPU":"Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz",
      "LogicalCPUCount":4,
      "PhysicalCPUCount":4,
      "GPUs":[  
         {  
            "Name":"AMD Radeon HD 7900 Series",
            "Manufacturer":"Advanced Micro Devices, Inc.",
            "ChipType":"AMD Radeon Graphics Processor (0x679A)"
         }
      ],
      "MemorySize":"8531234816",
      "NumberOfScreens":2,
      "HardDisks":[  
         {  
            "Caption":"Samsung SSD 840 EVO 120GB",
            "Size":120031511040,
            "IsSsd":true
         },
         {  
            "Caption":"ST1000DM003-1ER162",
            "Size":1000202273280,
            "IsSsd":false
         }
      ],
      "Manufacturer":"MSI",
      "Model":"MS-7817",
      "IsLaptop":false,
      "Motherboard":"MSI H81M-P33 (MS-7817)",
      "AudioDevices":[  
         "AMD High Definition Audio Device",
         "Realtek High Definition Audio",
         "Logitech G933 Gaming Headset"
      ],
      "InputDevices":[  
         {  
            "vendor":1133,
            "id":49970,
            "type":"MOUSE"
         },
         {  
            "vendor":1133,
            "id":49714,
            "type":"KEYBOARD"
         },
         {  
            "vendor":1133,
            "id":49963,
            "type":"KEYBOARD"
         },
         {  
            "vendor":1133,
            "id":49713,
            "type":"MOUSE"
         }
      ]
   }
}
```

## getPeripherals(callback)
#### Version added: 0.98

> Returns system peripherals information.

Parameter | Type     | Description                                                                                  |
--------- | ---------| -------------------------------------------------------------------------------------------- |
callback  | function | Called with the system information                                                           |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{  
   "status":"success",
   "peripherals":{  
      "inputDevices":[  
         {  
            "vendor":1133,
            "id":49970,
            "type":"MOUSE"
         },
         {  
            "vendor":1133,
            "id":49714,
            "type":"KEYBOARD"
         },
         {  
            "vendor":1133,
            "id":49963,
            "type":"KEYBOARD"
         },
         {  
            "vendor":1133,
            "id":49713,
            "type":"MOUSE"
         }
      ],
      "audioDevices":[  
         "AMD High Definition Audio Device",
         "Realtek High Definition Audio",
         "Logitech G933 Gaming Headset"
      ]
   }
}

```

## openStoreOneAppPage(appId)
#### Version added: 0.137

> Opens the requested app’s profile page in the Overwolf Appstore.

Parameter   | Type     | Description                                 |
----------- | ---------| --------------------------------------------|
appId	      | string   | The requested app id                        |

## openStore(param)
#### Version added: 0.137

> Opens the requested app’s profile/login/subscription page in the Overwolf Appstore.

Parameter   | Type                                                | Description              |
----------- | ----------------------------------------------------| -------------------------|
param	      | [OpenStoreParams](#openstoreparams-object) Object   | The requested store page |

#### Usage example

open current app subscription page:

```js
overwolf.utils.openStore({
   page:overwolf.utils.enums.eStorePage.SubscriptionPage
  })
```
or specify app uid

```js
overwolf.utils.openStore({
    page:overwolf.utils.enums.eStorePage.SubscriptionPage,
    uid:"fiekjlgoffmlmgfmggnoeoljkmfkcapcdmcgcfgm"
  })

```

## isMouseLeftButtonPressed(callback)
#### Version added: 0.104

> Returns whether the mouse’s left button was pressed

Parameter   | Type     | Description                                 |
----------- | ---------| --------------------------------------------|
callback	   | function | A callback with the result                  |

## uploadClientLogs(callback)
#### Version added: 0.111

> Upload Overwolf client logs to Overwolf servers for the current calling app

:::warning
This is an experimental function and shouldn’t be used without Overwolf’s permission
:::

Parameter   | Type     | Description                                 |
----------- | ---------| --------------------------------------------|
callback	   | function | A callback with the result                  |

## eStorePage enum

#### Version added: 0.137

> Available types of an app's store pages.

| Options          | Description                                                                                          |
|------------------| -----------------------------------------------------------------------------------------------------|
| LoginPage        |                                                                                                      |
| OneAppPage       | app's profile page that popup when you click on an app tile in the store                             |
| SubscriptionPage |                                                                                                      |

## OpenStoreParams Object
#### Version added: 0.137

> Container that represent a store page.

Parameter   | Type                                | Description                   |
----------- | ------------------------------------| ----------------------------- |
uid         | string                              | the target app id             |
page        | [eStorePage](#estorepage-enum) enum | Store page to open            |
