---
id: subscriptions
title: Integrate a subscription in your app
sidebar_label: Integrate a subscription
---


## 1. Create a demo subscription plan

The first step is to create a new subscription plan and set it in a "test" state.    
For now, we will do that for you (after you fill [this form](../start/app-subscriptions)). In the future, you will be able to do that from our dev console.

:::note Notes
* Only whitelisted developers with a live app on our store, can create a subscription plan.  
* Currently, you are allowed to create only one plan for each app. This might change in the future. 
:::

Once created, we will send you the new **subscription plan id**.

## 2. Define your app's premium features 

At this point, you should already know what your premium users will get in return - exclusive perks or services.  
To simplify this guide, we assume that your premium users will get an "ad-free" version of your app.

## 3. Add an easy way to subscribe

As a call to action, you can add in the relevant place in your app, a link to your app page in the Overwolf store, where they can purchase a subscription.

In our example, our plan offers an "ad-free" version of the app. So the best place will be right under the ad:

![remove an ad](../assets/subscriptions/remove-an-ad.png)

When the users click the link, you should call to [overwolf.utils.openStore()](../api/overwolf-utils#openstoreparam).  

This will opens the current app’s subscriptions page in the Overwolf Appstore:

```js
overwolf.utils.openStore({
   page:overwolf.utils.enums.eStorePage.SubscriptionPage
  })
```
And the app's subscription page will be opened in a new window:

![subscriptions page](../assets/subscriptions/subscription-page.png)

Once the user succesfully finishes the subscription process, a [SubscriptionChangedEvent](#4-monitor-subscription-changes) is triggered.  

## 3. Check if the user is subscribed

To limit the premium features for subscribed users (in this case, ads will be removed for premium users), you should check if the plan id that you created before is active for the current user. We will do that using the [overwolf.profile.subscriptions.getActivePlans()](../api/overwolf-profile.subscriptions#getactiveplanscallback) function:

```js

var myPlanID = 4564; //my app's subscription plan id
var isSubscribed = false; //flag that tells if the current user got an active subscription

overwolf.profile.subscriptions.getActivePlans(function(info) { 
    
    if (info.status == "success" && info.plans != null) {    
    
        if(info.plans[0] == myPlanID)  {//this is a premium user            
        
            isSubscribed = true; //mark this user as a subscribed user
            removeAds();    
        
        }
    }
);
```

That's it! Whatever you are doing with the subscription is up to you. You can enable special features for subscribed users, remove ads, and so on.

## 4. Monitor subscription changes

You can register to the [overwolf.profile.subscriptions.onSubscriptionChanged](../api/overwolf-profile.subscriptions#onsubscriptionchanged) event, that fired when current extension subscription has changed.  

This way, if the user canceled the subscription or the subscription expired while the app is running, you can catch it on time and sync your app behavior accordingly.




