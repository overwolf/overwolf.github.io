---
id: overwolf-social-youtube
title: overwolf.social.youtube API
sidebar_label: overwolf.social.youtube
---

Provides access to the YouTube social provider.

:::tip
You can use [overwolf.social.getDisabledServices()](overwolf-social#getdisabledservicescallback) method to check if the service is available.
:::

## Methods Reference

* [overwolf.social.youtube.performUserLogin()](#performuserlogin)
* [overwolf.social.youtube.performLogout()](#performlogoutcallback)
* [overwolf.social.youtube.getUserInfo()](#getuserinfocallback)
* [overwolf.social.youtube.share()](#shareyoutubeshareparameters-callback)

## Events Reference

* [ooverwolf.social.youtube.onLoginStateChanged](#onloginstatechanged)

## Types Reference

* [overwolf.social.youtube.YouTubeShareParameters](#youtubeshareparameters-object) Object

## performUserLogin()
#### Version added: 0.128

> Opens the login dialog.

There is no callback for this method and the only way to know if the user signed in is via [onLoginStateChanged](#onloginstatechanged) event.

## performLogout(callback)
#### Version added: 0.125

> Performs a "strong" sign out of YouTube, so that even if the user performs a login via the Overwolf Settings / Accounts page, he will be considered signed out.

Parameter | Type                       | Description                                                             |
--------- | ---------------------------| ----------------------------------------------------------------------- |
callback  | (Result) => void           | A callback function which will be called with the status of the request |

## getUserInfo(callback)
#### Version added: 0.125

> If the user is currently logged into YouTube, this will return user information, Otherwise, an error is returned.

Parameter | Type                       | Description                                                             |
--------- | ---------------------------| ----------------------------------------------------------------------- |
callback  | [(Result: GetUserInfoResult)](overwolf-social#getuserinforesult-object) => void   | A callback function which will be called with the status of the request |

## share(YouTubeShareParameters, callback)
#### Version added: 0.125

> If the user is currently logged into YouTube, this will perform the video share.

|youTubeShareParams| is of type  errors that can occur:- Disconnected (user isn’t signed in)- MissingFile (trying to share a missing file)- UnsupportedFile (trying to share an unsupported format)

Parameter             | Type                       | Description                                                           |
--------------------- | ---------------------------| --------------------------------------------------------------------- |
youTubeShareParams    | [YouTubeShareParameters](#youtubeshareparameters-object) Object        | The share parameters       |
callback  | (Result) => void   | A callback function which will be called with the status of the request |

Types of errors that can occur:
* Disconnected (user isn't signed in)
* MissingFile (trying to share a missing file)
* UnsupportedFile (trying to share an unsupported format)

## onLoginStateChanged
#### Version added: 0.125

> Fired when the user’s login state changes, with the following structure: [LoginStateChangedEvent](overwolf-social#loginstatechangedevent-object) Object.

## YouTubeShareParameters Object
#### Version added: 0.125

> This object defines all parameters that can/should be passed to YouTube |share| function.

Parameter              | Type    | Description                                                                 |
---------------------- | --------| --------------------------------------------------------------------------- |
file                   | string  | The file to share                                                           |
title                  | string  | The shared video's title                                                    |
description            | string  | The shared video's description                                              |
trimming (Optional)    | [VideoCompositionSegment](overwolf-media-videos#videocompositionsegment-object)  | An object containing start time and end time for the desired VideoCompositionSegment                                        |
tags (Optional)        | string  | An array of chronological events that occurred during the capture           |
gameClassId (Optional) | int     | The associated game's class ID                                              |
gameTitle (Optional)   | string  | The associated game's title                                                 |
