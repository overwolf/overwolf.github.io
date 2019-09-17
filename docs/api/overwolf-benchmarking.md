---
id: overwolf-benchmarking
title: overwolf.benchmarking API
sidebar_label: overwolf.benchmarking
---

This is a set of functions for querying system stats and benchmarks. These calls require administrative permissions, which the user may be prompted to grant with a UAC message which may interrupt him while playing. In order to avoid interruptions, it is recommended to ask before requesting permissions.

:::warning Warning
The overwolf.benchmarking API is not regularly maintained and some of it’s methods and events might not work as intended.
:::

## Methods Reference

* [overwolf.benchmarking.requestHardwareInfo()](#requesthardwareinfointerval-callback)
* [overwolf.benchmarking.requestProcessInfo()](#requestprocessinfointerval-callback)
* [overwolf.benchmarking.requestFpsInfo()](#requestfpsinfointerval-callback)
* [overwolf.benchmarking.stopRequesting()](#stoprequesting)
* [overwolf.benchmarking.requestPermissions()](#requestpermissionscallback)

## Events Reference

* [overwolf.benchmarking.onHardwareInfoReady](#onhardwareinfoready)
* [overwolf.benchmarking.onProcessInfoReady](#onprocessinfoready)
* [overwolf.benchmarking.onFpsInfoReady](#onfpsinfoready)

## requestHardwareInfo(interval, callback)

#### Version added: 0.78

> Requests hardware information within a given interval.

Note that this call requires Overwolf to have Administrative permissions, and should they be missing, the callback will return 'Permissions Required'. You will then have to ask the app user for permissions and according to the user’s choice, call `requestPermissions`. It is then necessary to call `requestProcessInfo` again.

Parameter | Type     | Description                                                                                        |
----------| ---------| -------------------------------------------------------------------------------------------------- |
interval  | int      | The desired maximal interval (in milliseconds) in which events will be triggered. Minimum is 500ms |
callback  | function | Returns with the result                           |   

## requestProcessInfo(interval, callback)

#### Version added: 0.78

> Requests process information within a given interval. 

See requestPermissions for administrative permissions instructions.

Parameter | Type     | Description                                                                                        |
----------| ---------| -------------------------------------------------------------------------------------------------- |
interval  | int      | The desired maximal interval (in milliseconds) in which events will be triggered. Minimum is 500ms |
callback  | function | Returns with the result                           |   

## requestFpsInfo(interval, callback)

#### Version added: 0.78

> Requests game FPS information within a given interval. 

Parameter | Type     | Description                                                                                        |
----------| ---------| -------------------------------------------------------------------------------------------------- |
interval  | int      | The desired maximal interval (in milliseconds) in which events will be triggered. Minimum is 500ms |
callback  | function | Returns with the result                          |   

## stopRequesting()

#### Version added: 0.78

> Stop receiving hardware/process events.

Use this when you no longer want to receive events or when you close your app.

## requestPermissions(callback)

#### Version added: 0.78

> In case Overwolf requires administrative permissions, and after prompting the user to grant more permissions, call this function and then request your desired benchmarking information.


Parameter | Type     | Description                                                                                        |
----------| ---------| -------------------------------------------------------------------------------------------------- |
callback  | function | Returns with the result                                                                            |  

## onHardwareInfoReady

#### Version added: 0.78

> Fired when hardware information is ready with a JSON containing the information.

#### Event data example: Success

```json
"General": {
    "PowerPlan": "Balanced"
},
"Mainboard": {
    "Name": "ASUS P8H61-M",
    "Voltages": [{
                "Name": "CPU VCore",
                "Value": 0.968,
...
```

## onProcessInfoReady

#### Version added: 0.78

> Fired when process information is ready with a JSON containing the information.

#### Event data example: Success

```json
{
    "TopCpuUsage": [
        {
            "PrivateWorkingSet": 17674240,
            "PrecentProcessorTime": 5.703688196431727,
            "Id": 6988,
            "Name": "OverwolfBrowser#3"
        },
        {
            "PrivateWorkingSet": 16150528,
            "PrecentProcessorTime": 5.703688196431727,
            "Id": 8216,
            "Name": "OverwolfBenchmarking"
        },
        ...
    ],
    "TopMemoryUsage": [
        {
            "PrivateWorkingSet": 611196928,
            "PrecentProcessorTime": 2.851844098215878,
            "Id": 5484,
            "Name": "firefox"
        },
        {
            "PrivateWorkingSet": 141586432,
            "PrecentProcessorTime": 2.851844098215878,
            "Id": 596,
            "Name": "Overwolf"
        },
        ...
    ]
}
```

## onFpsInfoReady

#### Version added: 0.78

> Fired when FPS information is ready with a JSON containing the information.

#### Event data example: Success

```json
{ "Fps": 61 }
```
