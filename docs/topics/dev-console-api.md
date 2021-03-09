---
id: dev-console-api
title: Dev Console API
sidebar_label: Dev console API
---

Our API is currently in pre-release, includes limited features, and doesn't promise backwards compatibility.

## How to use it

First, you must generate an API key. To do so, navigate to the Dev Console's [Dev Setup Page](https://console.overwolf.com/#/dev-setup) and login if prompted.

In the page, click on the button labled "Revoke And Get New Key". You will be warned that this invalidates existing keys. Since this is your first time generating an API key you don't have to worry about it, but keep it in mind for the future. For security concerns, the key is available *ONCE* and once only, and *CANNOT BE RETRIEVED*, not even by us. So keep it safe.

To use it, place it in the Authorization header of your request in this format (without the square brackets, obviously):

```
Authorization: [your email here]:[your key here]
```

## What to do with it

Currently, as mentioned, our official API includes limited features. We plan on expanding our support and create a dedicated CLI tool in the future.

The first feature we support is OPK uploads. Instead of uploading your OPK using the Dev Console's Release Management page, you can upload it via POST request to `https://console-api.overwolf.com/api/applications/[your app ID here]/versions`.

Here's an example:

```
curl --request POST 'https://console-api-test.overwolf.com/api/applications/[your app ID here]/versions' --header 'Authorization: hello@world.gg:my_awesome_secret_key' --form 'file=@"path:/to/my/version.opk"'
```