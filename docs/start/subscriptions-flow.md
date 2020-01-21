---
id: subscriptions-flow
title: Subscriptions User Flow
sidebar_label: Subscriptions User Flow
---

## Subscribe from the app page

To sub to an app, all a user has to do is go to that app’s page in the Appstore and click the "Subscribe" button.

![subs-flow-2](../assets/subscriptions/subs-flow-2.png)

## Subscribe from the in-app button

The developer can choose to implement an in-app subscribe button. 

![subs-flow-1](../assets/subscriptions/subs-flow-1.png)

## Plan features screen

After click "Subscribe", the user gets to the plan detail page that describes all the plan features.  
Currently, each app can have only one plan, but in the features, each app can have several plans, each plan with its own feature set.

![subs-flow-3](../assets/subscriptions/subs-flow-3.png)

## Checkout flow

After the user reviews the feature set and willing to continue, he clicks "Subscribe".  
That’ll send them to a quick checkout flow on our payment gateway, XSolla, that supports various payment methods.

![subs-flow-4](../assets/subscriptions/subs-flow-4.png)

### On-screen purchase confirmation.

Once done, the user gets an on-screen confirmation.

![subs-flow-5](../assets/subscriptions/subs-flow-5.png)

### Email purchase confirmation.

As well as an email confirmation.

![subs-flow-6](../assets/subscriptions/subs-flow-6.png)

## App page for subscribed user

Once a subscription is completed, the user returned to the app subscription page.  
Now, he can manage the subscription when clicking on the settings wheel.

![subs-flow-7](../assets/subscriptions/subs-flow-7.png)

## Manage subscription screen

Subbed apps appear in a new settings page where users can easily monitor or cancel their subscriptions as wanted. Cancellation takes place at the end of the current subscription period.

![subs-flow-8](../assets/subscriptions/subs-flow-8.png)

## Email cancel confirmation

Once a subscription is successfully canceled, the user gets a cancel confirmation by email.

![subs-flow-9](../assets/subscriptions/subs-flow-9.png)

## Uninstall notification

When a user tries to uninstall Overwolf, the user gets a notification about any active subscription that he might want to cancel as well.

![subs-flow-10](../assets/subscriptions/subs-flow-10.png)
