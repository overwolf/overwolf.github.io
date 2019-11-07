---
id: login-with-discord
title: App Login with Discord, Facebook or Google
sidebar_label: Login with Discord
---



In this example, we will explain how to implement Discord login in your Overwolf app. **You can use this method to implement Facebook, Google, or other logins**, in the same way. The main challenge is thinking about how to transfer the info that the auth window gets from Discord, back to the OW app.

One possible flow should be as follow:
 
1. Open Discord login window from your app/extension. This window will load a remote server-side script.  

2. Do the login.  

3. Redirect to the extension page. (More info [bellow](#redirect-back-to-your-ow-extension))

4. Set the localStorage.  

5. Close the window.

## Redirect back to your OW extension

In our Twitch streaming app, for example, it logs into twitch with their OAuth2.  We redirect the login to a local app page:

```js
redirect_uri = "overwolf-extension://oepmnephgakhodlemnladfmcnhfhbfdnbgolmcok/external-windows/login/login.html";
```

