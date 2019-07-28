---
id: update-your-app-status
title: Update your app status
sidebar_label:  Update your app status
---

This page describes how to update your app status info through the Overwolf developers console, and later how to consume the app status from your app.

## Set your app status

The first step is to update your app status info in the dev console:

1. [Login](https://devconsole.overwolf.com) to the dev console, click `applications` from the left bar, and choose your app from the apps list.  
The list displays only apps that own by you.

2. After you choose your app, browse to the `App status` tab and choose the right status:

![alt-text](assets/dev-console-app-status-1.png)

### Possible app statuses

There are three pre-defines statuses: Green, Yellow, Red.  
When you fetch the status later from the API call, each on of the state will get a numeric value:

* Green - Good to go. `{"state":1}`
* Yellow - Some features may be unavailable. `{"state":2}`
* Red - The main functionality of the app is currently unavailable (unusable). `{"state":3}`

For each status you can also set a description text that will be available from the API as well.

## Get your app status

The second step is to fetch your app status from the dev console:

To query the Overwolf dev console and fetch the app status, you should call the dev console API URL with your extension (app) ID:

`https://console-api.overwolf.com/v1/apps/[extensionId]/status`

### Usage example

In this example we fetch the status of the "Game Summary" app: 

```js
fetch('https://console-api.overwolf.com/v1/apps/nafihghfcpikebhfhdhljejkcifgbdahdhngepfb/status')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
```

### Response example

In case of succesful request:

```json
{"state":2,"updates_popup_active":false,"yellow_text":"hi there"}
```
As you can see, the `state` field returns one of three values: (1=Green, 2=Yellow, 3=Red).
