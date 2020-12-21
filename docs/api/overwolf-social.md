---
id: overwolf-social
title: overwolf.social API
sidebar_label: overwolf.social
---

Provides sharing services to different social networks like Reddit, Twitter, etc. and also information about the currently disabled services.

## Methods Reference

* [overwolf.social.getDisabledServices()](#getdisabledservicescallback)

## Types Reference

* [GetDisabledServicesResult](#getDisabledServicesResult-object) Object
* [GetUserInfoResult](#getuserinforesult-object) Object
* [overwolf.social.LoginState](#loginstate-enum) enum
* [overwolf.social.LoginStateChangedEvent](#loginstatechangedevent-object) Object		

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

## GetUserInfoResult Object	
#### Version added: 0.128	

> Container for get user info result.	
Parameter         | Type          | Description             |	
------------------| --------------| ----------------------- |	
userInfo          | object        |                         | 	

#### Example data: Reddit / Youtube / Twitter / Gfycat	

```json	
{	
  "status": "success",	
  "userInfo": {	
     "avatar": "http://abs.twimg.com/sticky/...", 	
     "id": "111111111112222222", 	
     "name": "full name", 	
     "screenName": "screenname123"	
  }	
}	
```	

#### Example data: Discord user	

```json	
{	
  "status": "success",	
  "userInfo": {	
    "id": "1111111111111",	
    "discriminator": 9999,	
    "username": "itay",	
    "email": "itay@overwolf.com",	
    "avatar": null,	
    "verified": true	
  }	
}	
```

## LoginStateChangedEvent Object
#### Version added: 0.128

> Container object.

Parameter              | Type                                 | Description                                                                 |
---------------------- | -------------------------------------| --------------------------------------------------------------------------- |
status                 | [LoginState](#loginstate-enum) enum  |                                                                             |

#### Event Data Example: Success

```json
{ "state": "connected"/"disconnected" }
```

## LoginState enum	
#### Version added: 0.128	

| Options      | Description                                                            |	
|--------------| -----------------------------------------------------------------------|	
| Connected    | "connected"                                                            |	
| Disconnected | "disconnected"                                                         |
