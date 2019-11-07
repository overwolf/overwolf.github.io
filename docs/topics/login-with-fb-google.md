---
id: login-with-fb-google
title: App Login with Facebook or Google
sidebar_label: Login with Facebook or Google
---


On this guide we will explain on how to implement Facebook / Google / Discord login in your apps will be added soon.  
for the sake of simplicity, we will Discord as an example.

If you want to let users log in with Discord and thinking about how to transfer to the main window the info that the auth window gets from discord, one possible flow can be something like this:

1. Open Discord login window from your app/extension. This window will load a remote server-side script.  
2. Do the login.  
3. Redirect to the extension page.
4. Set the localStorage.  
5. Close the window.




