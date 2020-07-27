---
id: overwolf-utils
title: overwolf.utils API
sidebar_label: overwolf.utils
---

Use this API to get the user’s system information, send keystrokes to the game, open URL in default browser and more.

Common use cases:

* Getting a string that is currently placed on the clipboard.
* Getting the user’s system information (OS, monitors, CPU, GPU, input devices and more).
* Opening a URL in a browser.
* Send keystrokes to the running game.

## Methods Reference

* [overwolf.utils.placeOnClipboard()](#placeonclipboarddata)
* [overwolf.utils.getFromClipboard()](#getfromclipboardcallback)
* [overwolf.utils.getMonitorsList()](#getmonitorslistcallback)
* [overwolf.utils.getWindowDPI()](#getwindowdpicallback)
* [overwolf.utils.sendKeyStroke()](#sendkeystrokekeystring)
* [overwolf.utils.openFilePicker()](#openfilepickerfilter-callback)
* [overwolf.utils.openFilePicker()](#openfilepickerfilter-initialpath-callback)
* [overwolf.utils.openFolderPicker()](#openfolderpickerinitialpath-callback)
* [overwolf.utils.openWindowsExplorer()](#openwindowsexplorerurl-callback)
* [overwolf.utils.isTouchDevice()](#istouchdevicecallback)
* [overwolf.utils.openUrlInDefaultBrowser()](#openurlindefaultbrowserurl)
* [overwolf.utils.openUrlInOverwolfBrowser()](#openurlinoverwolfbrowserurl)
* [overwolf.utils.openUrlInOverwolfBrowser()](#openurlindefaultbrowserurl-openurloptions)
* [overwolf.utils.getSystemInformation()](#getsysteminformationcallback)
* [overwolf.utils.getPeripherals()](#getperipheralscallback)
* [overwolf.utils.openStoreOneAppPage()](#openstoreoneapppageappid)
* [overwolf.utils.openStore()](#openstoreparam)
* [overwolf.utils.isMouseLeftButtonPressed()](#ismouseleftbuttonpressedcallback)
* [overwolf.utils.uploadClientLogs()](#uploadclientlogscallback)

## Types Reference

* [overwolf.utils.enums.eStorePage](#estorepage-enum) enum
* [overwolf.utils.OpenStoreParams](#openstoreparams-object) Object
* [overwolf.utils.GetSystemInformationResult](#getsysteminformationresult-object) Object
* [overwolf.utils.GetMonitorsListResult](#getmonitorslistresult-object) Object
* [overwolf.utils.GPUInfo](#gpuinfo-object) Object
* [overwolf.utils.HardDiskInfo](#harddiskinfo-object) Object
* [overwolf.utils.InputDeviceInfo](#inputdeviceinfo-object) Object
* [overwolf.utils.MonitorInfo](#monitorinfo-object) Object
* [overwolf.utils.Display](#display-object) Object
* [overwolf.utils.OpenFilePickerResult](#openfilepickerresult-object) Object
* [overwolf.utils.OpenUrlOptions](#openurloptions-object) Object


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
callback  | ([Result: GetMonitorsListResult](#getmonitorslistresult-object)) => void | Called with the monitors array               |

## getWindowDPI(callback)
#### Version added: 0.83
#### Permissions required: DesktopStreaming

> Returns the DPI and sclae of the current window.

Parameter | Type     | Description                                  |
--------- | ---------| -------------------------------------------- |
callback  | function | Called with the DPI info                     |

Note that you can use [Window.devicePixelRatio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio) to get the DPI of the current window. It's pure JS and even more efficient.

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{
    "status": "success",
    "dpi": 120,
    "scale": 1.25
}
```

## sendKeyStroke(keyString)
#### Version added: 0.83
#### Permissions required: GameControl

> Sends a string representing a key stroke to the game, causing a simulated key stroke.

Parameter  | Type   | Description                                                    |
---------- | -------| -------------------------------------------------------------- |
keyString  | string | The key or key combination to send, as a string. e.g. “Alt+I”  |

The accepted input for the `keyString` param is identical to Microsoft's [Key enum](https://docs.microsoft.com/en-us/dotnet/api/system.windows.input.key).

## openFilePicker(filter, callback)
#### Version added: 0.91
#### Permissions required: FileSystem

> Opens a file picker dialog to browse for a file. A url to the selected file will be returned.

Parameter | Type                                                                   | Description                                                                                                  |
--------- | -----------------------------------------------------------------------| ------------------------------------------------------------------------------------------------------------ |
filter    | string                                                                 | A file filter. See [notes](#filter-notes)   |
callback  | ([Result: OpenFilePickerResult](#openfilepickerresult-object)) => void | Called with a url to the selected file                                                                       |
#### *filter* notes

Provide an empty string for wild cards or separate value by commas (,). Ex. myFile*.*,*.txt.

## openFilePicker(filter, initialPath, callback)
#### Version added: 0.141
#### Permissions required: FileSystem

> Opens a file picker dialog to browse for a file. A url to the selected file will be returned.  In addition, this function also allows you to set the initial path/folder to start browsing from.

Parameter   | Type                                                                   | Description                                                                                                  |
----------- | -----------------------------------------------------------------------| ------------------------------------------------------------------------------------------------------------ |
filter      | string                                                                 | A file filter.  A file filter. See [notes](#filter-notes)   |
initialPath | string                                                                 | An optional path to start browsing from                                                                      |
callback    | ([Result: OpenFilePickerResult](#openfilepickerresult-object)) => void | Called with a url to the selected file              |


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

## openUrlInDefaultBrowser(url,openUrlOptions)
#### Version added: 0.153

> Opens the url in the user’s default browser.

Parameter   | Type     | Description                                 |
----------- | ---------| --------------------------------------------|
url         | string   | A url to open                               |
openUrlOptions | [OpenUrlOptions](#openurloptions-object) Object   | allows extra behaviour |

## getSystemInformation(callback)
#### Version added: 0.92

> Returns system information which includes information about CPU, Monitors, GPU, HDD, RAM and more.

Parameter | Type                                               | Description                         |
--------- | ---------------------------------------------------| ----------------------------------- |
callback  |  ([Result: GetSystemInformationResult](#getsysteminformationresult-object)) => void | Called with the system information  |


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
| ReviewsPage      |                                                                                                      |

## OpenStoreParams Object
#### Version added: 0.137

> Container that represent a store page.

Parameter   | Type                                | Description                   |
----------- | ------------------------------------| ----------------------------- |
uid         | string                              | the target app id             |
page        | [eStorePage](#estorepage-enum) enum | Store page to open            |


## GetSystemInformationResult Object

Parameter          | Type     | Description                                 |
-------------------| ---------| ------------------------------------------- |
*success*          | boolean  | inherited from the "Result" Object          |
*error*            | string   | inherited from the "Result" Object          |
status             | string   | deprecated. For backward compatibility only |
Reason             | string   | deprecated. For backward compatibility only |   
systemInfo         | object   |                                             |   
AudioDevices       | string[] |                                             |   
CPU                | string   |                                             |   
GPUs               | [GPUInfo[]](#gpuinfo-object)         |                                    |   
HardDisks          | [HardDiskInfo[]](#harddiskinfo-object)    |                                    |   
InputDevices       | [InputDeviceInfo[]](#inputdeviceinfo-object) |                                    |   
IsLaptop           | boolean  |                                             |   
LogicalCPUCount    | number   |                                             |   
Manufacturer       | string   |                                             |   
MemorySize         | string   |                                             |   
Model              | string   |                                             |   
Monitors           | [MonitorInfo[]](#monitorinfo-object)     |                                    |   
Motherboard        | string   |                                             |   
NetFramework       | string   |                                             |   
NumberOfScreens    | number   |                                             |   
OS                 | string   |                                             |   
OSBuild            | string   |                                             |   
OSReleaseId        | string   |                                             |   
PhysicalCPUCount   | number   |                                             |   
VidEncSupport      | boolean  |                                             |   

#### Example data: Success

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
      "VidEncSupport ":true,
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

## GetMonitorsListResult Object

Parameter          | Type     | Description                                 |
-------------------| ---------| ------------------------------------------- |
*success*          | boolean  | inherited from the "Result" Object          |
*error*            | string   | inherited from the "Result" Object          |
status             | string   | deprecated. For backward compatibility only |
Reason             | string   | deprecated. For backward compatibility only |   
display            | [Display[]](#display-object) | the monitors array      |   


#### Example data: Success

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

## GPUInfo Object

Parameter          | Type     | Description                                 |
-------------------| ---------| ------------------------------------------- |
ChipType           | string   |                                             |
Manufacturer       | string   |                                             |
Name               | string   |                                             |

## HardDiskInfo Object

Parameter          | Type     | Description                                 |
-------------------| ---------| ------------------------------------------- |
Caption            | string   |                                             |
IsSsd              | boolean  |                                             |
Size               | number   |                                             |

## InputDeviceInfo Object

Parameter          | Type     | Description                                 |
-------------------| ---------| ------------------------------------------- |
id                 | number   |                                             |
type               | string   |                                             |
vendor             | number   |                                             |

## MonitorInfo Object

Parameter          | Type     | Description                                 |
-------------------| ---------| ------------------------------------------- |
Dpix               | number   |                                             |
Dpiy               | number   |                                             |
IsMain             | boolean  |                                             |
Location           | string   |                                             |
Name               | string   |                                             |
Resolution         | string   |                                             |

## Display Object

Parameter          | Type     | Description                                 |
-------------------| ---------| ------------------------------------------- |
name               | string   |                                             |
id                 | string   |                                             |
x                  | number   | See [note](#x-note)                         |
y                  | number   | See [note](#y-note)                         |
width              | number   |                                             |
height             | number   |                                             |
is_primary         | boolean  |                                             |

#### X note

X returns the pixel distance of your currently active monitor from your primary monitor.  
For example, if your primary monitor is 1920px wide, and the currently active window is on another monitor located to the left of your primary, X will return 1920 or -1920 based on their relative positions.

#### Y note

Y returns the pixel distnace of your currently active monitor from your primary monitor.  
For Example, if your primary monitor and secondary monitor are side by side, Y will return 0, if your displays are one on top of the other and the primary monitor is 1200px tall, Y will return 1200 or -1200 based on their relative positions.

## OpenFilePickerResult Object

Parameter          | Type     | Description                                 |
-------------------| ---------| ------------------------------------------- |
*success*          | boolean  | inherited from the "Result" Object          |
*error*            | string   | inherited from the "Result" Object          |
url                | string   | a url to the selected file                  |

#### Example data: Success


```json
{
    "success": true,
    "url": "overwolf-fs://C/Users/Hal9000/AppData/Local/O…mjiecdnnjmgfifjgkfegkljnjjbzap/1.0.14/logo.png"
}
```

You can use the retrieved URL later to serve the stated file: for example, to upload it to a remote server, you can use XMLHttpRequest. Using a file URL (file://) and not OW URL (overwolf-fs://), will trigger a cross-origin error.

## OpenUrlOptions Object
#### Version added: 0.153

> Container for extra browser behaviour.

Right now "skip_in_game_notification" is the only option.  

Parameter                 | Type  | Description                   |
------------------------- | ------| ----------------------------- |
skip_in_game_notification | bool  | When set to true, the alert notifying in-game users that their browser is about to open will not display.   |
