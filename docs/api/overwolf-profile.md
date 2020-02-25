---
id: overwolf-profile
title: overwolf.profile API
sidebar_label: overwolf.profile
---

Use the `overwolf.profile` API to get Overwolf information for the current user of the app (e.g user name, user log-in event, etc.)

**Permissions required: profile**

## Methods Reference

* [overwolf.profile.getCurrentUser()](#getcurrentusercallback)
* [overwolf.profile.refreshUserProfile()](#refreshuserprofilecallback)
* [overwolf.profile.openLoginDialog()](#openlogindialog)

## Events Reference

* [overwolf.profile.onLoginStateChanged](#onloginstatechanged)

## Types Reference

* [overwolf.profile.GetCurrentUserResult](#getcurrentuserresult-object) Object
* [overwolf.profile.LoginStateChangedEvent](#loginstatechangedevent-object) Object
* [overwolf.profile.ConnectionState](#connectionstate-enum) Enum



## getCurrentUser(callback)
#### Version added: 0.78

> Calls the given callback with the currently logged-in Overwolf user.

Parameter | Type     | Description                                                                                        |
----------| ---------| -------------------------------------------------------------------------------------------------- |
callback  | ([Result: GetCurrentUserResult](#getcurrentuserresult-object)) => void | A function called with the current user, or an error.| 

## refreshUserProfile(callback)
#### Version added: 0.128

> Fetches user profile from server, then invokes the callback with the currently logged-in Overwolf user.

Parameter | Type     | Description                                                                                        |
----------| ---------| -------------------------------------------------------------------------------------------------- |
callback  | ([Result: GetCurrentUserResult](#getcurrentuserresult-object)) => void | A function called with the current user, or an error.|

## openLoginDialog()
#### Version added: 0.80

> Opens the login dialog.

## onLoginStateChanged
#### Version added: 0.78

> Fired when a user logged in or logged out, with the following structure: [LoginStateChangedEvent](#loginstatechangedevent-object) Object


## GetCurrentUserResult Object

Parameter          | Type     | Description                                 |
-------------------| ---------| ------------------------------------------- |
*success*          | boolean  | inherited from the "Result" Object          |
*error*            | string   | inherited from the "Result" Object          |
status             | string   | deprecated. For backward compatibility only |
Reason             | string   | deprecated. For backward compatibility only |   
username           | string   |                                             |   
userId             | string   |                                             |   
machineId          | string   |                                             |   
partnerId          | int      |                                             |   
channel            | string   |                                             |   
parameters         | string   |                                             |   
installParams      | string   |                                             |   
avatar             | string   |                                             |   
installerExtension | string   |                                             |   

 #### Example data: Success

```json
{  
   "success": true,
   "error": "",
   "status":"success",
   "username":"itaygl",
   "userId":"OW_34153336-192b-44f6-aa0f-4a9b744c689d",
   "machineId":"653000ad-001c-43e9-a5c9-e23db5ad370a",
   "partnerId":0,
   "channel":"website"
}
```
#### Example data: Failure

If the user is not logged-in, the `success` will be `false`, but you’ll still get the rest of the available data (userId, machineId, etc.)
 
```json
{  
   "success": false,
   "error": "Not signed in",
   "status":"error",
    "reason":"Not signed in",
   "username":null,
   "userId":"OW_34153336-192b-44f6-aa0f-4a9b744c689d",
   "machineId":"653000ad-001c-43e9-a5c9-e23db5ad370a",
   "partnerId":0,
   "channel":"website",
   "parameters":{"no-ftue":null},
   "installParams":null,
   "avatar":""
}
```

## LoginStateChangedEvent Object

Parameter       | Type                                           | Description     |
----------------| -----------------------------------------------|---------------- |
status          |  string                                        |                 | 
connectionState |  [ConnectionState](#connectionstate-enum) enum |                 |
username        |  string                                        |                 |

#### Event data example: Success

```json
{
    "status": "success",
    "connectionState": "Online",  // can be "Online", "Offline", "Connecting", etc.
    "username": "..."   // when the status is other than "Offline", will be the currently connected username.
}
```

## ConnectionState enum

Option         | Description                                 |
---------------| ------------------------------------------- |
Unknown        |                                             |
Offline        |                                             |
Connecting     |                                             |
Online         |                                             |
Disconnecting  |                                             |

