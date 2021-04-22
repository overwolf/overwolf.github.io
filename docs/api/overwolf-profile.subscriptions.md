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
* [overwolf.profile.subscriptions.getDetailedActivePlans()](#getdetailedactiveplanscallback)


## Events Reference

* [overwolf.profile.subscriptions.onSubscriptionChanged](#onsubscriptionchanged)

## Types Reference

* [overwolf.profile.subscriptions.SubscriptionChangedEvent](#subscriptionchangedevent) Object
* [overwolf.profile.subscriptions.GetActivePlansResult](#getactiveplansresult-object) Object
* [overwolf.profile.subscriptions.Plan](#plan-object) Object
* [overwolf.profile.SubscriptionState](#subscriptionstate-enum) Enum


## getActivePlans(callback)
#### Version added: 0.134

> Returns active subscriptions for the calling extension via callback.

Parameter | Type                                                                   | Description                          |
----------| -----------------------------------------------------------------------| ------------------------------------ |
callback  | ([Result: GetActivePlansResult](#getactiveplansresult-object)) => void | Returns with the result              |   

#### Important Notes

* Many users can have the same planID,  while subscriptionID is an individual unique ID for a user's subscription.
* When calling getActivePlans(), make sure you use your live app and not the sample app, etc., as subscriptions are pairs to a specific app UID.
* We refresh cache every 2 hours and update it on-demand when the user does an action (cancel, subscribe, extend, etc.)

## getDetailedActivePlans(callback)
#### Version added: 0.170

> Returns more details about the active subscriptions for the calling extension via callback.

Parameter | Type                                                                   | Description                          |
----------| -----------------------------------------------------------------------| ------------------------------------ |
callback  | ([Result: GetDetailedActivePlansResult](#getdetailedactiveplansresult-object)) => void | Returns with the result              |   


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

## GetDetailedActivePlansResult Object

Parameter          | Type     | Description                                 |
-------------------| ---------| ------------------------------------------- |
*success*          | boolean  | inherited from the "Result" Object          |
*error*            | string   | inherited from the "Result" Object          |
status             | string   | deprecated. For backward compatibility only |
Reason             | string   | deprecated. For backward compatibility only |   
plans              | [Plan](#plan-object)[]   | an array of active plans                    |   

#### Example data: Success

```json
{
  "plans": [
    {"planId":23, "state":"cancelled", "expiryDate": "1684244095000", "title": "Forget Ads", "description": "Remvoe all ads from the app", "price":"", "periodMonths": "6"},
    {"planId":25, "state":"active", "expiryDate": "1684244095000", "title": "Forget Ads test", "description": "", "price":"", "periodMonths": "12"}
  ], //If there is no active plans, a null is returned.
  "success": true
}
```

## Plan Object

Parameter          | Type     | Description                                 |
-------------------| ---------| ------------------------------------------- |
planId             | number   |                                             |
state              | [SubscriptionState](#subscriptionstate-enum) Enum   |                        |
expiryDate         | number   |                                             |
title              | string   |                                             |
description        | string   |                                             |
price              | number   |                                             |
periodMonths       | number   |                                             |

## SubscriptionState enum

Option         | Value                                       |
---------------| ------------------------------------------- |
Active         | 0                                           |
Cancelled      | 1                                           |
Revoked        | 2                                           |
