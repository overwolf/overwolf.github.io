---
id: auto-highlights
title: Auto-highlights supported games
sidebar_label: Highlights supported games
---

## Game highlights overview

With the [overwolf.media.replays](../api/overwolf-media-replays) API, you can auto-detect and auto-capture game highlights.

When this feature is enabled, there's no need to understand each supported game's mechanics, game flow, edge cases, timings, etc. Just request any supported game's highlight, and OW provides you with a video file that includes this event.

Here you can find our guide on [how to use and capture auto-highlights](video-capture#using-overwolfmediareplays).

## List of supported games

Below, you can find a list of games that support highlights.  

* LoL
* Dota 2
* Fortnite
* CS:GO
* PUBG
* PUBG Lite
* R6
* Apex
* WoT
* RL
* WoWs
* Splitgate
* HotS
* Valorant
* Overwatch

## How it works

The highlights settings for all the games are saved in a file called `highlights.json`, located under the OW installation folder. 

Note that every change of this file on your local OW client installation will be overwritten once the client is updated.

the gameID's defines each game, and for each game, there is an events array, that contains a list of features that support highlights.

An example highlights settings for "League of Legends":


```json
"5426": { 
		"events": {
			"death": {
				"timing": {
					"past": 12000,
					"future": 3000,
					"pending": 12000
				}
			},
			"assist": {
				"timing": {
					"past": 12000,
					"future": 8000,
					"pending": 12000
			 	}
			}
		}
}
```

As you can see, for each feature there is a timing object with three fields: past, future, pending.

* Past - Time before the event to record.
* Future - Time after the event to record.
* Pending -Time that we wait for another event to trigger to merge several events into one highlight.  
  For example, if there is a Kill and immediately after, there is a Death. According to the pending value of the Kill, the two highlights might merge into one highlight video, instead of two overlapping videos.

#### Note 

These settings are shared between ALL the OW apps, and each change in the capture timing affects all the other apps. Besides, only the OW team can edit this file as it's part of the client code (every local change will be overwritten on an OW client update).

If you have any request for timing changes or adding new games/features to this list, please create a feature request on [our Q&A site](https://discuss.developers.overwolf.com/).