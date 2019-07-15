---
id: overwolf-social-discord
title: overwolf.social.discord API
sidebar_label: overwolf.social.discord
---

Provides access to the Discord social provider.

:::tip
You can use [overwolf.social.getDisabledServices()](overwolf-social#getdisabledservicescallback) method to check if the service is available.
:::

## Methods Reference

* [overwolf.social.discord.performUserLogin()](#performuserlogin)
* [overwolf.social.discord.performLogout()](#performlogoutcallback)
* [overwolf.social.discord.getUserInfo()](#getuserinfocallback)
* [overwolf.social.discord.getGuilds()](#getguildscallback)
* [overwolf.social.discord.getChannels()](#getchannelsguildid-callback)
* [overwolf.social.discord.share()](#sharediscordshareparameters-callback)

## Events Reference

* [ooverwolf.social.discord.onLoginStateChanged](#onloginstatechanged)

## Types Reference

* [overwolf.social.discord.DiscordShareParameters](#discordshareparameters-object) Object

## performUserLogin()
#### Version added: 0.115

> Opens the login dialog.

There is no callback for this method and the only way to know if the user signed in is via [onLoginStateChanged](#onloginstatechanged) event.

## performLogout(callback)
#### Version added: 0.115

> Performs a "strong" sign out of Discord, so that even if the user performs a login via the Overwolf Settings / Accounts page, he will be considered signed out.

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
#### Version added: 0.115

> If the user is currently logged into Discord, this will return user information, Otherwise, an error is returned.

Parameter | Type                       | Description                                                             |
--------- | ---------------------------| ----------------------------------------------------------------------- |
callback  | function                   | Will contain the status of the request                                  |

#### Callback argument: Success

A callback function which will be called with the status of the request.

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

 #### Callback argument: Failure

A callback function which will be called with the status of the request.

```json
{ "status": "error", "reason": [description] } 
```

## getGuilds(callback)
#### Version added: 0.115

> If the user is currently logged into Discord, this will return the guilds that the user is registered to. Otherwise, an error is returned


Parameter             | Type                       | Description                                                           |
--------------------- | ---------------------------| --------------------------------------------------------------------- |
discordShareParams    | [DiscordShareParameters](#discordshareparameters-object) Object        | The share parameters       |
callback              | function                   | Will contain the status of the request                                |

#### Callback argument: Success

A callback function which will be called with the status of the request and the guilds that the user is registered to.

```json
{
  "status": "success",
  "guilds": [
    {
      "id": "310742576380772355",
      "name": "Overwolf",
      "icon": "https://cdn.discordapp.com/icons/310742576380772355/ff2c69e1b4b4d3563fdfbeb6e8a96d37.png",
      "owner": false,
      "roles": null
    },
    {
      "id": "407312977017045002",
      "name": "PUBGG",
      "icon": "https://cdn.discordapp.com/icons/407312977017045002/032b6941ca08ffcd89bbcb7fb16b2217.png",
      "owner": false,
      "roles": null
    },
    {
      "id": "407984551600717834",
      "name": "Legendary Builds",
      "icon": "https://cdn.discordapp.com/icons/407984551600717834/2fec1c02b5095bd7bce6208c2348e70c.png",
      "owner": false,
      "roles": null
    },
    {
      "id": "418527834936573954",
      "name": "Official PUBG API HQ",
      "icon": "https://cdn.discordapp.com/icons/418527834936573954/372e39d981644b6345dc6d0c9b957f52.png",
      "owner": false,
      "roles": null
    }
  ]
}
```

 #### Callback argument: Failure

A callback function which will be called with the status of the request.

```json
{ "status": "error", "reason": [description] } 
```

## getChannels(guildId, callback)
#### Version added: 0.115

> If the user is currently logged into Discord, this will return the channels of the given guild Id, for which the user has privileges to share images/videos to.
Otherwise, an error is returned.

Parameter | Type                       | Description                                                             |
--------- | ---------------------------| ----------------------------------------------------------------------- |
callback  | function                   | Returns the channels of the given guild                                 |

## share(DiscordShareParameters, callback)
#### Version added: 0.115

> If the user is currently logged into Discord, this will perform the video share.

|discordShareParams| is of type  errors that can occur:- Disconnected (user isn’t signed in)- MissingFile (trying to share a missing file)- UnsupportedFile (trying to share an unsupported format)

Parameter             | Type                       | Description                                                           |
--------------------- | ---------------------------| --------------------------------------------------------------------- |
discordShareParams    | [DiscordShareParameters](#discordshareparameters-object) Object        | The share parameters       |
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
* ExceedsMaxSize (the file is too large: > 8 MB for images, > 100 MBfor videos)

## onLoginStateChanged
#### Version added: 0.115

> Fired when the user’s login state changes.

#### Event Data Example: Success

```json
{ "state": "connected"/"disconnected" }
```

## DiscordShareParameters Object
#### Version added: 0.115

> This object defines all parameters that can/should be passed to Discord |share| function.

Parameter              | Type    | Description                                                                 |
---------------------- | --------| --------------------------------------------------------------------------- |
file                   | string  | The file to share                                                           |
channelId              | string  | The channel ID that the file will be shared to                              |
message                | string  | The message to include with the shared file                                 |
trimming (Optional)    | [VideoCompositionSegment](overwolf-media-videos#videocompositionsegment-object)[]  | An array of objects containing start time and end time for the desired VideoCompositionSegment[]                                        |
events (optional)      | string  | An array of chronological events that occurred during the capture           |
gameClassId (Optional) | int     | The associated game's class ID                                              |
gameTitle (Optional)   | string  | The associated game's title                                                 |
metadata (Optional)    | Object  | Extra information about the game session                                    |