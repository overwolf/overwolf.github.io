---
id: manage-subscriptions
title: Manage your subscriptions
sidebar_label: Manage your subscriptions
---

## Overview

In this article, we'll go over the process of updating the different aspects of your app’s subscription plan.

If you don’t yet have a subscription plan enabled, follow this guide first:

https://overwolf.github.io/docs/start/subscriptions-overview

### Log in to the developers console

After logging in to the Overwolf developers console, navigate to the subscriptions tab.

2 new tabs will then be shown in the dropdown menu:

- Plans
- Subscribers

(insert image here: subslisting/subs_tab.png)

### Plans Tab

In this tab you can edit the subscription plans you already own: title, price, description, period, status and assets (that will be shown in the Overwolf app store).

(Insert image here: subslisting/plans_tab.png

To edit your plan, simply press the “EDIT” button for your plan.

### Title, ID, Price, Period, Status

- Title: How your subscriptions plan will be called on the dev console - this is not visible to users on the app store
- ID: Your plan’s ID number. This is a read-only item and cannot be changed.
- Price: in USD, can be edited.
- Period (Months): The recurrence of the subscription plan. Can be edited.
- Status: Configure whether your app subscription plan is Disabled, in Test mode, or Active on the app store.

(insert image here: subslisting/plan_details.png)

### Customize the app’s subscription listing in the app store

Control the assets you’d like to be shown on the app’s subscription listing in the app store.

*Note: The minimum requirement is to have 1 plan title, 1 plan description and 1 plan image.

- Title: Short and concise, up to 50 characters.
- Description: What will this subscription offer the app’s users. Up to 200 characters.
- Image: 
   - Size must be 2250x96 pixels
   - Must include 15 frames
   - Frame size should be 150x96 (no padding)

(insert image here: subslisting/plan_details2.png)

*Example for an image:

(insert image here: subslisting/plan_ad.png)

### Subscribers tab

Control and monitor you app's subscribers through this tab.

(insert image here: subslisting/subscriber_tab.png)

For each subscriber, you’ll be able to see their user name, which plan is activated for this user, what is the status of their subscription and the expiration date for this subscriber.

You will also be able to edit the users subscription and monitor their activity through the “EDIT” button: 

(insert image here: subslisting/subscriber_details.png)

In the EDIT section you’ll be able to change the user’s subscription expiration date and the status of the user’s subscription: 

- Active: The subscription is currently enabled.
- Cancelled: The subscription is either cancelled by the user or expired.
- Revoked: The subscription is cancelled by the dev (e.g in order to refund the account).
- Invalid: The Subscription is cancelled due to a transaction error (failed to recharge).

