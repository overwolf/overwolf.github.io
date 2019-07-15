---
id: overwolf-social-gfycat
title: overwolf.social.gfycat API
sidebar_label: overwolf.social.gfycat
---

Provides access to the Gfycat social provider.

:::tip
You can use [overwolf.social.getDisabledServices()](overwolf-social#getdisabledservicescallback) method to check if the service is available.
:::

## Methods Reference

* [overwolf.social.gfycat.performUserLogin()](#performuserlogin)
* [overwolf.social.gfycat.performLogout()](#performlogoutcallback)
* [overwolf.social.gfycat.getUserInfo()](#getuserinfocallback)
* [overwolf.social.gfycat.share()](#sharegfycatshareparams-callback)

## Events Reference

* [ooverwolf.social.gfycat.onLoginStateChanged](#onloginstatechanged)

## Types Reference

* [overwolf.social.gfycat.gfycatShareParameters](#gfycatshareparameters-object) Object

## performUserLogin()
#### Version added: 0.128

> Opens the login dialog.

There is no callback for this method and the only way to know if the user signed in is via [onLoginStateChanged](#onloginstatechanged) event.

## performLogout(callback)
#### Version added: 0.125

    > Performs a "strong" sign out of Gfycat, so that even if the user performs a login via the Overwolf Settings / Accounts page, he will be considered signed out.

    Parameter | Type                   | Description                                                             |
--------- | ---------------------------| ----------------------------------------------------------------------- |
callback  | function                   | Will contain the status of the request                                  |

#### Callback argument: Success

A callback function which will be called with the status of the request.

```json
{ "status": "success" }
 ```

 #### Callback argument: Failure

A callback function which will be called with the status of the request.

```json
{ "status": "error", "reason": [description] } 
```

## getUserInfo(callback)
#### Version added: 0.125

> If the user is currently logged into Gfycat, this will return user information, Otherwise, an error is returned.

Parameter | Type                       | Description                                                             |
--------- | ---------------------------| ----------------------------------------------------------------------- |
callback  | function                   | Will contain the status of the request                                  |


## share(gfycatShareParams	, callback)
#### Version added: 0.125

> If the user is currently logged into YouTube, this will perform the video share.

|gfycatShareParams| is of type  errors that can occur:- Disconnected (user isn’t signed in)- MissingFile (trying to share a missing file)- UnsupportedFile (trying to share an unsupported format)

Parameter             | Type                       | Description                                                           |
--------------------- | ---------------------------| --------------------------------------------------------------------- |
gfycatShareParams    | [GfycatShareParameters](#gfycatshareparameters-object) Object          | The share parameters       |
callback              | function                   |                            Will contain the status of the request     |

#### Callback argument: Success

A callback function which will be called with the status of the request.

```json
{ "status": "success" }
```

 #### Callback argument: Failure

A callback function which will be called with the status of the request.

```json
{ "status": "error", "reason": [description] } 
```

Types of errors that can occur:
* Disconnected (user isn't signed in)
* MissingFile (trying to share a missing file)
* UnsupportedFile (trying to share an unsupported format)
* ExceedsMaxSize (the file is too large: > 8 MB for images, > 100 MBfor videos)

## onLoginStateChanged
#### Version added: 0.125

> Fired when the user’s login state changes.

#### Event Data Example: Success

```json
    { "state": "connected"/"disconnected" }
```

## GfycatShareParameters Object
#### Version added: 0.125

> This object defines all parameters that can/should be passed to Gfycat |share| function.

Parameter              | Type    | Description                                                                 |
---------------------- | --------| --------------------------------------------------------------------------- |
file                   | string  | The file to share                                                           |
trimming (Optional)    | [VideoCompositionSegment](overwolf-media-videos#videocompositionsegment-object)[]  | An array of objects containing start time and end time for the desired VideoCompositionSegment[]                                        |
title                  | string  | The message to include with the shared file                                 |
privateMode            | bool    | Only relevant for when the user is logged in, we then allow him toupload the file to his Gfycat account with private set to true. </br> Default value: false                                 |
tags (Optional)        | string  | An array of chronological events that occurred during the capture           |
gameClassId (Optional) | int     | The associated game's class ID                                              |
metadata (Optional)    | Object  | Extra information about the game session                                    |
