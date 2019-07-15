---
id: overwolf-social-twitter
title: overwolf.social.twitter API
sidebar_label: overwolf.social.twitter
---

Provides access to the Twitter social provider.

:::tip
You can use [overwolf.social.getDisabledServices()](overwolf-social#getdisabledservicescallback) method to check if the service is available.
:::

## Methods Reference

* [overwolf.social.twitter.performUserLogin()](#performuserlogin)
* [overwolf.social.twitter.performLogout()](#performlogoutcallback)
* [overwolf.social.twitter.getUserInfo()](#getuserinfocallback)
* [overwolf.social.twitter.share()](#sharetwittershareparams-callback)

## Events Reference

* [ooverwolf.social.twitter.onLoginStateChanged](#onloginstatechanged)

## Types Reference

* [overwolf.social.twitter.TwitterShareParameters](#twittershareparameters-object) Object

## performUserLogin()
#### Version added: 0.128

> Opens the login dialog.

There is no callback for this method and the only way to know if the user signed in is via [onLoginStateChanged](#onloginstatechanged) event.

## performLogout(callback)
#### Version added: 0.125

    > Performs a "strong" sign out of Twitter, so that even if the user performs a login via the Overwolf Settings / Accounts page, he will be considered signed out.

    Parameter | Type                       | Description                                                             |
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

> If the user is currently logged into Twitter, this will return user information, Otherwise, an error is returned.

Parameter | Type                       | Description                                                             |
--------- | ---------------------------| ----------------------------------------------------------------------- |
callback  | function                   | Will contain the status of the request                                  |

#### Callback argument: Success

A callback function which will be called with the status of the request.

```json
{ 
   "avatar": "\http://abs.twimg.com/sticky/...\", 
   "id": \"111111111112222222\",
   "name": "full name",
   "screenName": screenname123
}
 ```

 #### Callback argument: Failure

A callback function which will be called with the status of the request.

```json
{ "status": "error", "reason": [description] } 
```

## share(twitterShareParams	, callback)
#### Version added: 0.125

> If the user is currently logged into YouTube, this will perform the video share.

|twitterShareParams| is of type  errors that can occur:- Disconnected (user isn’t signed in)- MissingFile (trying to share a missing file)- UnsupportedFile (trying to share an unsupported format)

Parameter             | Type                       | Description                                                           |
--------------------- | ---------------------------| --------------------------------------------------------------------- |
twitterShareParams    | [TwitterShareParameters](#twittershareparameters-object) Object        | The share parameters       |
callback              | function                   | Will contain the status of the request                                |

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

## onLoginStateChanged
#### Version added: 0.125

> Fired when the user’s login state changes.

#### Event Data Example: Success

```json
{ "state": "connected"/"disconnected" }
```

## TwitterShareParameters Object
#### Version added: 0.125

> This object defines all parameters that can/should be passed to Twitter |share| function.

Parameter              | Type    | Description                                                                 |
---------------------- | --------| --------------------------------------------------------------------------- |
file                   | string  | The file to share                                                           |
message                | string  | The message to include with the shared file                                 |
trimming (Optional)    | [VideoCompositionSegment](overwolf-media-videos#videocompositionsegment-object)[]  | An array of objects containing start time and end time for the desired VideoCompositionSegment[]                                        |
tags (Optional)        | string  | An array of chronological events that occurred during the capture           |
gameClassId (Optional) | int     | The associated game's class ID                                              |
gameTitle (Optional)   | string  | The associated game's title                                                 |
metadata (Optional)    | Object  | Extra information about the game session                                    |