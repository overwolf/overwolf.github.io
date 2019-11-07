---
id: login-with-discord
title: App Login with Discord, Facebook or Google
sidebar_label: Login with Discord
---


In this article, we will explain how to implement a Discord login interface in your Overwolf app. **You can also use this method to implement Facebook, Google, or other logins**. The main challenge here is figuring out how to transfer the info that the auth window gets from Discord back to the OW app.

One possible flow can be as follow:
 
1. Open a Discord login window from your app/extension. This window will load a remote server-side script.  

2. Log In.  

3. Redirect to the extension page. (More info [bellow](#redirect-back-to-your-ow-extension))

4. Set localStorage.  

5. Close the window.

## Redirect back to your OW extension

In our Twitch streaming app, for example, it logs into twitch with their OAuth2.  Then we redirect the login to a local app page:

```js
redirect_uri = "overwolf-extension://oepmnephgakhodlemnladfmcnhfhbfdnbgolmcok/external-windows/login/login.html";
```

If you have more ideas on how to reduce OPK size, please click on the EDIT button on the right, and add it in for everyone's benefit.