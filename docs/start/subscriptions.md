---
id: subscriptions
title: Integrate Subscriptions in your app
sidebar_label: Integrate Subscriptions
---

This article will provide a step by step explanation for how to set up and manage your app's subscription features. If you need assistance or encounter issues, talk to us!

## 1. Create a Demo Subscription Plan

The first step to take is creating a new subscription plan and setting it in a "test" state.    
Right now we have to do that for you (after you fill up [this form](../start/app-subscriptions)), but in the future you'll be able to do it independently from our dev console.

:::note Notes
* Only whitelisted developers with a live app on our store can create a subscription plan.  
* For now, you may only create a single plan for each app. This might change in the future. 
:::

Once created, we will send you a new **subscription plan id**.

## 2. Define your App's Premium Features 

At this point, you should already know what your premium users will get for subscribing, usually exclusive perks or services.  
To simplify this guide, we assume that your core offering for premium users will be an "ad-free" version of your app.

## 3. Add an Easy Way to Subscribe

You can add a link to your app's page in the Overwolf store as an in-app Call to Action to subscribe. In our example, our plan offers an "ad-free" version of the app. So the best location will be right under the ad which will be removed:

![remove an ad](../assets/subscriptions/remove-an-ad.png)

When users click the link, you should call to [overwolf.utils.openStore()](../api/overwolf-utils#openstoreparam).  

This will opens the current app’s subscriptions page in the Overwolf Appstore:

```js
overwolf.utils.openStore({
   page:overwolf.utils.enums.eStorePage.SubscriptionPage
  })
```
The app's subscription page will open in a new window:

![subscriptions page](../assets/subscriptions/subscription-page.png)

Once the user successfully finishes the subscription process, a [SubscriptionChangedEvent](#4-monitor-subscription-changes) is triggered.  

## 3. Check Whether the User is Subscribed

To properly reward subscribed users with premium features (in this case, removing ads), you should check whether your current subscription plan is active for the current user. We will do that using the [overwolf.profile.subscriptions.getActivePlans()](../api/overwolf-profile.subscriptions#getactiveplanscallback) function:

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

## 4. Monitor Subscription Changes

You can register to the [overwolf.profile.subscriptions.onSubscriptionChanged](../api/overwolf-profile.subscriptions#onsubscriptionchanged) event which fires when the current extension subscription status has changed.  

If a user canceled their subscription or the subscription expired while the app is running, you can spot it on time and sync your app behavior accordingly.

And there you have it! These are the basics of subscribing users to your app. We encourage you to figure out valuable premium plans and subscription features that will motivate your users to go premium. 


