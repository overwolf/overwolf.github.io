---
id: plugins-overview
title: Overwolf Plugins Overview
sidebar_label: Plugins Overview
---

A plugin is a .NET class library (DLL) that can contain functions/events/properties written in a .NET language.
Your app can call on the plugin’s functions/events/properties from within the context of the Javascript.

The Overwolf plugin system allows your app to:

1. Implement any functionality that is missing from the basic Overwolf API (local file access, networking, playing audio, integration with 3rd party libraries, etc.
2. Leverage your existing C#/C/C++ code and expose it to your app.
This is, somewhat, similar to [Native Node.js Modules](https://blog.risingstack.com/writing-native-node-js-modules/). (We currently do not support Node.js modules – however, in the future we might support it)

We have created a few simple plugins that might answer your extra needs as an app developer or give you a good starting point for developing your own plugin, you can find them in the [Overwolf GitHub repository](#https://github.com/overwolf/overwolf-plugins).
