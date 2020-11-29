---
id: login-with-twitch
title: App login with Twitch, Discord, Facebook or Google
sidebar_label: Login with Twitch
---

This article will explain how to implement a 3rd party login interface in your Overwolf app.  

The main challenge here is figuring out how to transfer the info that the auth window gets from the external service back to the OW app.

:::important
As Google (and possibly other providers in the future) will discontinue support for sign-in from embedded browser frameworks (e.g., OW browser) starting Jan. 2021, the best way to go is to send the user their default browser, and not use the OW browser.  
In the future, we will add some instructions on how to do that. Meanwhile, you can use the suggested workaround explained in this article.
:::

This is a suggested login flow into Twitch using their OAuth2:

## Prerequisite

### Register your app on Twitch

To make an app that uses the Twitch API, you first need to register your app on the [Twitch developer site](https://dev.twitch.tv/dashboard/apps/create).  

When creating this app, enter your `redirect URI`, where your users are redirected after being authorized.  
As Twitch doesn't accept URIs where the top domain is not HTTP, **you can't use the OW URI scheme** (overwolf-extension://..).  

As a workaround, we set a static login page on our server as the redirect URI. Within this page, we can easily use an OW URI to redirect back to our OW app. Jump to the [next chapter](#create-a-static-logic-page), create the static page, and get back. 

Once you create a developer app, you'll be assigned a unique `client ID` for your app.

### Create a static logic page

On your server, Create a static login page. Let's call it index.html.

Redirect back to your app login page:

```js
window.location.replace(`overwolf-extension://[EXTENSION-ID]/dist/login/login.html${location.hash}`);
```

Replace the [EXTENSION-ID] with your extension's id.  

The [URL hash](https://www.w3schools.com/jsref/prop_loc_hash.asp) is the Twitch auth token sent back to the app.

Now that you have a live static login page on your server, [go back](#register-your-app-on-twitch) and set the Twitch redirect URI.

### Create a dedicated login window

Add a new window in your app's manifest, for the authentication process:

```json
"login": {
    "file": "dist/login/login.html",
    "transparent": false,
    "resizable": true,
    "show_in_taskbar": true,
    "desktop_only": true,
        "size": {
            "width": 600,
            "height": 600
        }
}
```

### Set externally_connectable

Add to your app manifest the [externally_connectable](../api/manifest-json#externally_connectable) flag with the Twitch URL:

```json
"externally_connectable": {
    "matches": [
    "http://*.twitch.tv", //make sure that the end of URL is WITHOUT any slash/backslash
    "https://*.twitch.tv"
    ]
}
```

## 1. Open the login window

When the user clicks on the "Login with Twitch" button in the app, open the dedicated login window.

## 2. Check for existing auth token

When the login window starts, the first thing to do is to check if the user is already logged in:  

As mentioned earlier, the Twitch auth token is sent back to the app through a [URL hash](https://www.w3schools.com/jsref/prop_loc_hash.asp).

So we can check the location.hash: 

* If location.hash is not set - the user is not logged yet. We continue the redirection to the Twitch login URL ([step 3](#3-redirect-to-twitch-login-page)).

* If location.hash is set - the user successfully passes the Twitch login and redirects back to here (app's login window) with the auth token.  
  We save the auth token and close this window ([step 4](#4-return-back-to-the-app))

*Note that at this point, you may also want to add also an error handling mechanism.*

## 3. Redirect to Twitch login page

Manually navigates (`window.location.replace`) to: 

```js
https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${fullRedirectUri}`
```

Where `clientId` is your Twitch clientId and `fullRedirectUri` is your static login page that we set earlier. 
 
## 4. Return back to the app

After we successfully logged in to Twitch, we can save the auth token and close the app's login window.

You can save the auth token in a localStorage variable. We recommend encrypting the hash/token before storing it - for security reasons.

## 5.  Close the Log In window.

Now, we can safely close the login window. 

The login process is complete.
