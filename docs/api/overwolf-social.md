---
id: overwolf-social
title: overwolf.social API
sidebar_label: overwolf.social
---

Provides information about the currently disabled services.

## Methods Reference

* [overwolf.social.getDisabledServices()](#getdisabledservicescallback)

## Types Reference

* [GetDisabledServicesResult](#getDisabledServicesResult-object) Object

## getDisabledServices(callback)
#### Version added: 0.126

> Checks which of the supported sharing services are disabled or enabled.

Note: You can’t disable or enable sharing service from your app. It’s done from the Overwolf servers.

Parameter | Type                       | Description                                                             |
--------- | ---------------------------| ----------------------------------------------------------------------- |
callback  | [(Result: GetDisabledServicesResult)](#getdisabledservicesresult-object) => void  | returns a list of disabled services     |


## GetDisabledServicesResult Object
#### Version added: 0.126

> Container for GetDisabledServices result.

Parameter         | Type                                       | Description             |
------------------| -------------------------------------------| ----------------------- |
disabled_services | string[]                                   |                         | 

#### Callback argument: Success

```json
{"success":true,"disabled_services":["youtube"]}
```

