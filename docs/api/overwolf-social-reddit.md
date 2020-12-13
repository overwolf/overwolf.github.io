---
id: overwolf-social-reddit
title: overwolf.social.reddit API
sidebar_label: overwolf.social.reddit
---

Provides access to the Reddit social provider.

:::tip
You can use [overwolf.social.getDisabledServices()](overwolf-social#getdisabledservicescallback) method to check if the service is available.
:::

## Methods Reference

* [overwolf.social.reddit.performUserLogin()](#performuserlogin)
* [overwolf.social.reddit.performLogout()](#performlogoutcallback)
* [overwolf.social.reddit.getUserInfo()](#getuserinfocallback)
* [overwolf.social.reddit.searchSubreddits()](#searchsubredditsquery-callback)
* [overwolf.social.reddit.share()](#shareredditshareparameters-callback)

## Events Reference

* [ooverwolf.social.reddit.onLoginStateChanged](#onloginstatechanged)
* [overwolf.social.reddit.onShareFailed](#onsharefailed)

## Types Reference

* [overwolf.social.reddit.RedditShareParameters](#redditshareparameters-object) Object
* [overwolf.social.reddit.Subreddit](#subreddit-object) Object
* [overwolf.social.reddit.RedditAllowedPostTypes](#redditallowedposttypes-object) Object
* [overwolf.social.reddit.SearchSubredditsResult](#searchsubredditsresult-object) Object
* [overwolf.social.reddit.ShareFailedEvent](#sharefailedevent-object) Object

## performUserLogin()
#### Version added: 0.128

> Opens the login dialog. 

There is no callback for this method and the only way to know if the user signed in is via [onLoginStateChanged](#onloginstatechanged) event.

## performLogout(callback)
#### Version added: 0.128

> Performs a "strong" sign out of Reddit, so that even if the user performs a login via the Overwolf Settings / Accounts page, he will be considered signed out.

Parameter | Type                       | Description                                                             |
--------- | ---------------------------| ----------------------------------------------------------------------- |
callback  | (Result) => void           | A callback function which will be called with the status of the request |

## getUserInfo(callback)
#### Version added: 0.128

> If the user is currently logged into Reddit, this will return user information, Otherwise, an error is returned.

Parameter | Type                       | Description                                                             |
--------- | ---------------------------| ----------------------------------------------------------------------- |
callback  | [(Result: GetUserInfoResult)](overwolf-social#getuserinforesult-object) => void   | A callback function which will be called with the status of the request |

## searchSubreddits(query, callback)
#### Version added: 0.128

> Search for subreddits whose names begin with a substring.

Parameter | Type                       | Description                                                             |
--------- | ---------------------------| ----------------------------------------------------------------------- |
query     | string                     | The search string                                                       |
callback  |  [(Result: SearchSubredditsResult)](#searchsubredditsresult-object) => void   | Will contain an array of subreddits that match the search string  |


## share(redditShareParameters, callback)
#### Version added: 0.128

> If the user is currently logged into reddit, this will perform the video share.

Parameter             | Type                       | Description                                                           |
--------------------- | ---------------------------| --------------------------------------------------------------------- |
redditShareParameters | [RedditShareParameters](#redditshareparameters-object) Object | The share parameters               |
callback  | (Result) => void   | A callback function which will be called with the status of the request |

Types of errors that can occur:

* Disconnected (user isn't signed in)
* MissingFile (trying to share a missing file)
* UnsupportedFile (trying to share an unsupported format)

## onLoginStateChanged
#### Version added: 0.128

> Fired when the user’s login state changes, with the following structure: [LoginStateChangedEvent](overwolf-social#loginstatechangedevent-object) Object.

## onShareFailed
#### Version added: 0.128

> Fired when an error is returned from Reddit, with the following structure: [ShareFailedEvent](#sharefailedevent-object) Object.

## RedditShareParameters Object
#### Version added: 0.128

> This object defines all parameters that can/should be passed to theReddit |share| function.

Parameter              | Type    | Description                                                                 |
---------------------- | --------| --------------------------------------------------------------------------- |
file                   | string  | The file to share                                                           |
subreddit              | string  | The subreddit to which the file will be shared                              |
title                  | string  | The shared video's title                                                    |
description            | string  | The shared video's description                                              |
trimming (Optional)    | [VideoCompositionSegment](overwolf-media-videos#videocompositionsegment-object)  | An object containing start time and end time for the desired VideoCompositionSegment                                        |
events (Optional)      | string  | An array of chronological events that occurred during the capture           |
gameClassId (Optional) | int     | The associated game's class ID                                              |
gameTitle (Optional)   | string  | The associated game's title                                                 |
metadata (Optional)    | object  | Extra information about the game session                                    |

#### Data example

```json
{
  "file": "file://D:\\Videos\\Overwolf\\Outplayed\\League of Legends/League of Legends_8-16-2020_2-6-20-576\\League of Legends 08-16-2020_2-06-22-522.mp4",
  "events": [
    "PvP Round"
  ],
  "gameClassId": 5426,
  "gameTitle": "League of Legends",
  "title": "Check out my video! #TeamfightTactics | Captured by #Outplayed",
  "subreddit": "clips",
  "trimming": {
    "startTime": 1136507,
    "endTime": 1177391
  },
  "metadata": {
    "mode": "tft"
  }
}
```

## SearchSubredditsResult Object
#### Version added: 0.128

> Container for search subreddits result.

Parameter         | Type          | Description             |
------------------| --------------| ----------------------- |
subreddits        | [Subreddit](#subreddit-object)[]   |                         | 

## Subreddit Object
#### Version added: 0.128

> Container object.

Parameter              | Type    | Description                                                                 |
---------------------- | --------| --------------------------------------------------------------------------- |
subreddit              | number  |                                                                             |
name                   | string  |                                                                             |
displayName            | string  |                                                                             |
allowedPostTypes       | [RedditAllowedPostTypes](#redditallowedposttypes-object) object  |                                                             |
communityIcon          | number  |                                                                             |

## RedditAllowedPostTypes Object
#### Version added: 0.128

> Container object.

Parameter              | Type    | Description                                                                 |
---------------------- | --------| --------------------------------------------------------------------------- |
images                 | boolean |                                                                             |
text                   | boolean |                                                                             |
videos                 | boolean |                                                                             |
links                  | boolean |                                                                             |
spoilers               | boolean |                                                                             |

## ShareFailedEvent Object
#### Version added: 0.128

> Container object.

Parameter              | Type    | Description                                                                 |
---------------------- | --------| --------------------------------------------------------------------------- |
error                  | string  |                                                                             |
details                | string  |                                                                             |

#### Event Data Example: Success

Currently, supported errors are:

```json
{ "error": "NotFound", "details": "that subreddit doesn't exist" }
{ "error": "RateLimit", "details": "you are doing that too much. try again in 7 minutes." }
```
