---
id: overwolf-profile.subscriptions
title: overwolf.profile.subscriptions API
sidebar_label: overwolf.profile.subscriptions
---

The `overwolf.profile.subscriptions` API provides functions and events to help with user profile subscription management.

* **Permissions required: profile**

* **Read all the info about app subscriptions [here](../start/app-subscriptions).**

## Methods Reference

* [overwolf.profile.subscriptions.getActivePlans()](#getactiveplanscallback)

## Events Reference

* [overwolf.profile.subscriptions.onSubscriptionChanged](#onsubscriptionchanged)

## getActivePlans(callback)
#### Version added: 0.134

> Returns active subscriptions for the calling extension via callback.

Parameter | Type     | Description                                                                                        |
----------| ---------| -------------------------------------------------------------------------------------------------- |
callback  | function | Returns with the result                                                                            |   
 
#### Callback argument: Success

Returns an array of plan IDs, or an error.

```json
{
  "plans": [ 4564, 23455 ],
  "success": true
}
```

## onSubscriptionChanged
#### Version added: 0.134

> Fired when current extension subscription has changed.

Parameter | Type     | Description                                                                                        |
----------| ---------| -------------------------------------------------------------------------------------------------- |
id  | int | SubscriptionID                                                                             |   