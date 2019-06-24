---
id: overwolf-profile
title: overwolf.profile API
sidebar_label: overwolf.profile
---

Use the `overwolf.profile` API to get Overwolf information for the current user of the app (e.g user name, user log-in event, etc.)

## getCurrentUser(callback)
#### Version added: 0.93
#### Permissions required: FileSystem

> Calls the given callback with the currently logged-in Overwolf user.

Parameter | Type     | Description                                                                                        |
----------| ---------| -------------------------------------------------------------------------------------------------- |
callback  | function | Returns with the result                                                                            |   
 
#### Callback argument: Success

```json
{  
   "status":"success",
   "username":"itaygl",
   "userId":"OW_34153336-192b-44f6-aa0f-4a9b744c689d",
   "machineId":"653000ad-001c-43e9-a5c9-e23db5ad370a",
   "partnerId":0,
   "channel":"website"
}
```
#### Callback argument: Failure

If the user is not logged-in, the `status` will be `error`, but you’ll still get the rest of the available data (userId, machineId, etc.)

```json
{  
   "status":"error",
   "username":null,
   "userId":"OW_34153336-192b-44f6-aa0f-4a9b744c689d",
   "machineId":"653000ad-001c-43e9-a5c9-e23db5ad370a",
   "partnerId":0,
   "channel":"website",
   "reason":"Not signed in",
   "parameters":{"no-ftue":null},
   "installParams":null,
   "avatar":""
}
```
