---
id: overwolf-profile-subscriptions
title: overwolf.profile.subscriptions API
sidebar_label: overwolf.profile.subscriptions
---

Provides functions and events to help with user profile subscription management.

* **Permissions required: profile**

:::important
Please read all the info about app subscriptions [here](../start/subscriptions-overview).
:::

## Methods Reference

* [overwolf.profile.subscriptions.getActivePlans()](#getactiveplanscallback)

## Events Reference

* [overwolf.profile.subscriptions.onSubscriptionChanged](#onsubscriptionchanged)

## Types Reference

* [overwolf.profile.subscriptions.SubscriptionChangedEvent](#subscriptionchangedevent) Object
* [overwolf.profile.subscriptions.GetActivePlansResult](#getactiveplansresult-object) Object


## getActivePlans(callback)
#### Version added: 0.134

> Returns active subscriptions for the calling extension via callback.

Parameter | Type                                                                   | Description                          |
----------| -----------------------------------------------------------------------| ------------------------------------ |
callback  | ([Result: GetActivePlansResult](#getactiveplansresult-object)) => void | Returns with the result              |   

Note that many users can have the same planID,  while subscriptionID is an individual unique ID for a user's subscription.


## onSubscriptionChanged
#### Version added: 0.134

> Fired when current extension subscription has changed, with the following structure: [SubscriptionChangedEvent](#subscriptionchangedevent-object) Object

## SubscriptionChangedEvent Object

Parameter   | Type                              | Description           |
------------| ----------------------------------|---------------------- |
plans       |  int[]                            | an array of plan IDs  | 


## GetActivePlansResult Object

Parameter          | Type     | Description                                 |
-------------------| ---------| ------------------------------------------- |
*success*          | boolean  | inherited from the "Result" Object          |
*error*            | string   | inherited from the "Result" Object          |
status             | string   | deprecated. For backward compatibility only |
Reason             | string   | deprecated. For backward compatibility only |   
plans              | int[]    | an array of plan IDs                        |   

#### Example data: Success

```json
{
  "plans": [ 4564, 23455 ], //If there is no active plans, a null is returned.
  "success": true
}
```