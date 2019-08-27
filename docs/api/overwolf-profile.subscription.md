---
id: overwolf-profile.subscription
title: overwolf.profile.subscription API
sidebar_label: overwolf.profile.subscription
---

The `overwolf.profile.subscription` API provides functions and events to help with user profile subscription management.

**Read all the info about app subscriptions [here](../start/app-subscriptions).**

## Methods Reference

* [overwolf.profile.subscription.getActivePlans()](#getactiveplanscallback)

## Events Reference

* [overwolf.profile.subscription.onSubscriptionChanged](#onsubscriptionchanged)

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

