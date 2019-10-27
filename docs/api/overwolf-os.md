---
id: overwolf-os
title: overwolf.os API
sidebar_label: overwolf.os
---

Use the `overwolf.os` API for Operating System related functionalities.

## Methods Reference

* [overwolf.os.getRegionInfo()](#getregioninfocallback)


## getRegionInfo(callback)
#### Version added: 0.132

> Returns regional information about the user.

Parameter | Type                                                    | Description             |
--------- | --------------------------------------------------------| ----------------------- |
callback  | function                                                | Returns with the result |

#### Callback argument: Success

A callback function which will be called with the status of the request and the returned object:

```json
{ 
	"status": "success",
	"info":
	{ 
		"date_format": "M/d/yyyy",
		"time_format": "h:mm:ss tt", 
		"currency_symbol": "$", 
		"is_metric": false,
		"name": "en-US"}
	}
}
```

#### Callback argument: Failure

A callback function which will be called with the status of the request

```json
{ "status": "error", "reason": "something went wrong..." }
```
