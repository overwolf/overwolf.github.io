---
id: twitch-events-sdk-for-game-developers
title: Twitch Extensions for Game Events
sidebar_label: Twitch Extensions
---

**[Sample code](https://github.com/overwolf/twitch-game-events-ebs-sample)**

### Overview

Twitch lets developers develop Twitch extensions which are interactive web apps that runs in the broadcaster’s channel.
The extension’s front end runs in an iframe and can communicate with an Extension Backend Service (EBS).
For more details about Twitch extensions visit: https://dev.twitch.tv/docs/extensions/

Overwolf’s Twitch Game Events lets a Twitch extension developer to receive game events that occur to a specific broadcaster in-game (for supported games).

The broadcaster must run Overwolf’s Twitch game events app while in-game and log in to Twitch from the app.
Twitch game events app will relay the events to Overwolf’s PubSub server to a “room” identified by the broadcaster’s twitch id. These are the same events and info-updates that are received from Overwolf’s Game Events Provider (overwolf.games.events)
For more information about Game Events visit: http://developers.overwolf.com/documentation/sdk/overwolf/games/events/

The Twitch extension EBS should connect to the PubSub server and subscribe to the same “room” in order to receive the events and info-updates of the broadcaster.

### Preconditions

* The streamer (broadcaster) must run the Twitch game events app while in game and be logged in to Twitch from the app.
* In order to connect to Overwolf’s events PubSub, the developer of the extension must obtain a client id and secret that will be used for authentication in front of the PubSub.

### Connecting to the events PubSub

The PubSub address is https://twitchge.overwolf.com

#### Authenticating

` POST /auth/backend `

Providing in the body the credentials obtained from Overwolf :

`
{
 broadcaster: OUR_STREAMER_ID,
 client_key: CLEINT_KEY,
 client_secret: CLIENT_SECRET
}
`
If the authentication is successful the response will contain a JSON with token property.
This token should be used to connect to the PubSub socket and as a bearer token for authorization for other endpoints of the Game Events PubSub server.

### Special Endpoints

The PubSub server has 2 special endpoints that can be used to retrieve info about the state of the game of the broadcaster.
These endpoints must be called with Authorization: Bearer <token> header providing the token obtained from the /auth/backend call.

##### Get Streamer Game

 ` GET /info/:streamer_id/game `
 
 Response: the game id that is being played by the streamer

#### Get Game Info

` GET /info/:streamer_id `

Response: the summary of the info updates happened in the streamer’s game.
This corresponds to the getInfo() method of Game Events Provider:
https://overwolf.github.io/docs/api/overwolf-games-events#getinfocallback

#### Get Streamer Connected

` GET /info/:streamer_id/connected `

Response: whether the streamer is logged in and connected to TGE:

` { "connected": true/false } `

### Notes
* Call `GET /info/{streamerId}` when the EBS connects to Ovewolf’s Pubsub and when a `publish` event with `["sessionStart"]` data is received. There are two general scenarios where your EBS connects to the Overwolf’s Twitch Extensions PubSub server: Before the streamer starts playing, or after. If your EBS connected after the streamer started playing, there is probably already information about the game currently being played. You should call the streamer info endpoint to retrieve the current information and listen to the PubSub socket events for new game events and info updates. If your EBS connected before the streamer started playing, the events and info updates will be sent via the PubSub socket events. However, the streamer’s Game Events App may start when there is already some information accumulated by Overwolf’s Game Events Provider. In that case the streamer’s app will post the available information and it will be available for the EBS via the streamer info endpoint. This information will not be sent over the PubSub socket and instead a “publish” event with [“sessionStart”] payload will be sent. This will mark the EBS that a new information set is available for retrieval.

* When the information includes `{ UPDATING: true }`, it means that the info for the broadcaster is being written with new data and and you should retry the call. You should retry until you have a non-UPDATING state, but avoid “flooding” (e.g use exponential time retries or limit the number of calls per second).

