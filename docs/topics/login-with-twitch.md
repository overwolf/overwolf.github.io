---
id: login-with-twitch
title: App login with Twitch, Discord, Facebook or Google
sidebar_label: Login with Twitch
---

This article will explain how to implement a 3rd party login interface in your Overwolf app.  
You can also use this method to implement Facebook, Google, Discord, or other logins.

The main challenge here is figuring out how to transfer the info that the auth window gets from the external service back to the OW app.

:::important
As Google (and maybe other Providers in the future) will discontinue support for sign-in from embedded browser frameworks (e.g., OW browser) starting Jan. 2021, the best way to go is to send the user to their default browser, and not use the OW browser.
:::

You can force it using the [force_browser](https://overwolf.github.io/docs/api/manifest-json#force_browser) flag.

This is a suggested login flow into Twitch using their OAuth2:

## 1. Prerequisite

### Set a dedicated login window

Add a new window in your app's manifest, for the 3rd party authentication page:

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

### Set a Redirect URI

In our background controller, index.html, we set the **redirect_uri** to approve later the login page on Twitch's backend.  

```js
redirect_uri = "overwolf-extension://[EXTENSION-ID]/external-windows/login/login.html";
```

Replace the [EXTENSION-ID] with your extension's id.

## 2. Open the login window

When the user clicks on the "Login with Twitch" button in the app, we open the dedicated login window.

### 2.1 Check for existing auth token

When the login window starts, the first thing to do is to check if the user is already logged-in:  
in Twitch, the auth token is sent back to the app throug a [URL hash](https://www.w3schools.com/jsref/prop_loc_hash.asp).

* If there is no hash - we continue the redirection to the Twitch login URL ([step 2.2](#22-redirect-to-twitch-login-page)).

* If there is a hash - it means that the user already logged in. We redirect the user to the background page (index.html), with the hash (step [2.4](#24-redirect-to-the-extension-page)).

### 2.2 Redirect to Twitch login page

If there is no hash, we manually navigates (`window.location.replace`) to: 

```js
https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${fullRedirectUri}`
```

Where `clientId` is your Twitch clientId and `fullRedirectUri` is our login page that we set [earlier](#set-a-redirect-uri). 

### 2.3 Getting back from Twitch

After a succesful login, Twitch will auto-redirect back to the `fullRedirectUri`, with an auth token as a [URL hash](https://www.w3schools.com/jsref/prop_loc_hash.asp).

The login page will look for the hash ([step 2.1](#21-check-for-existing-auth-token)) and if it exist, it will redirect the user back to the extension's background page ([next step](#24-redirect-to-the-extension-page)).

### 2.4 Redirect to the extension page

Now, after we succefully logged in to Twitch, we can redirect the user back to the background page (index.html) with the auth token as hash:

```js
window.location.replace(`overwolf-extension://[EXTENSION-ID]/dist/login/login.html${location.hash}`);
```
   
## 3. Get the auth token.

We recommend encrypting the hash/token, before storing in the localStorage - for security reasons.

## 4.  Close the Log In window.