---
id: overwolf-social
title: overwolf.social API
sidebar_label: overwolf.social
---

Provides information about the currently disabled services.

## Methods Reference

* [`overwolf.social.getDisabledServices()`](#getdisabledservicescallback)

## getDisabledServices(callback)
#### Version added: 0.126

> Checks which of the supported sharing services are disabled or enabled.

Note: You can’t disable or enable sharing service from your app. It’s done from the Overwolf servers.

Parameter | Type                       | Description                                                             |
--------- | ---------------------------| ----------------------------------------------------------------------- |
callback  | function                   | returns a list of disabled services                                     |

#### Callback argument: Success

A callback function which will be called with the status of the request and a list of disabled services.

```json
{"status":"success","disabled_services":["youtube"]}
 ```