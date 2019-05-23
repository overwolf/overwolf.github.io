---
id: overwolf-benchmarking
title: overwolf.benchmarking API
sidebar_label: overwolf.benchmarking
---

A set of functions for querying system stats and benchmarks. These calls require administrative permissions. To achieve administrative permissions the user may be prompted with a UAC message which can interrupt him while in game. In order to not interrupt the user, it is recommended to ask him before requesting permissions.

> Note: The overwolf.benchmarking API is not regularly maintained and some of it’s methods/events might not work as they should.

## Methods Reference
* [`requestHardwareInfo(interval, callback)`](#requestHardwareInfo)
* [`requestProcessInfo(interval, callback)`](#requestProcessInfo)
* [`requestFpsInfo(interval, callback)`](#requestFpsInfo)
* [`stopRequesting()`](#stopRequesting)
* [`requestPermissions(callback)`](#requestPermissions)

## Events Reference
* [`onHardwareInfoReady`](#onHardwareInfoReady)
* [`onProcessInfoReady`](#onProcessInfoReady)
* [`onFpsInfoReady`](#onFpsInfoReady)

<a name="requestHardwareInfo">
## requestHardwareInfo(interval, callback)
> Requests hardware information within a given interval. 

Version added: 0.78

Note that this call requires Overwolf to have Administrative permissions. If it does not have it, the callback will return with 'Permissions Required'. You will then have to ask the app user for permissions and according to the user’s choice, call `requestPermissions`. It is then required to call `requestProcessInfo` again.

Parameter | Type     | Description                                                                                        |
----------| ---------| -------------------------------------------------------------------------------------------------- |
interval  | int      | The desired maximal interval (in milliseconds) in which events will be triggered. Minimum is 500ms |
callback  | function | A callback function which will be called with the status of the request.                           |   

<a name="requestProcessInfo">
## requestProcessInfo(interval, callback)
> Requests process information within a given interval. 

Version added: 0.78

See requestPermissions for administrative permissions instructions.

Parameter | Type     | Description                                                                                        |
----------| ---------| -------------------------------------------------------------------------------------------------- |
interval  | int      | The desired maximal interval (in milliseconds) in which events will be triggered. Minimum is 500ms |
callback  | function | A callback function which will be called with the status of the request.                           |   

<a name="requestFpsInfo">
## requestFpsInfo(interval, callback)
> Requests game fps information within a given interval. 

Version added: 0.78

Parameter | Type     | Description                                                                                        |
----------| ---------| -------------------------------------------------------------------------------------------------- |
interval  | int      | The desired maximal interval (in milliseconds) in which events will be triggered. Minimum is 500ms |
callback  | function | A callback function which will be called with the status of the request.                           |   

<a name="stopRequesting">
## stopRequesting()
> Stops receiving hardware/process events.

Use this when you no longer want to receive events or when you close your app.

Version added: 0.78

<a name="requestPermissions">
## requestPermissions(callback)
> In case Overwolf requires administrative permissions, and after prompting the user of the app to request more permissions, call this function and then request your desired benchmarking information.

Version added: 0.78

Parameter | Type     | Description                                                                                        |
----------| ---------| -------------------------------------------------------------------------------------------------- |
callback  | function | A callback function which will be called with the status of the request.                           |   

<a name="onHardwareInfoReady">
## onHardwareInfoReady
> Fired when hardware information is ready with a JSON containing the information.

Version added: 0.78

<h3>Response</h3>  

####  200: OK
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