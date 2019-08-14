---
id: writing-your-own-plugin
title: Writing Your Own Overwolf Plugin
sidebar_label: Writing Your Own Plugin
---

To write your own plugin, you need to follow a few basic rules:

## 1. Implement the OW interface

Create a .NET class library that implements a public constructor. When overwolf.extensions.current.getExtraObject is called from Javascript, it will create an instance of your plugin and call on it’s constructor.

Notes:

* It should be an empty constructor or a constructor that accepts an int variable (the Win32 window handle of your app’s window hosting the plugin).
* Your class library can contain multiple classes – you’ll need an “extra-object” entry for each class with a unique name.

## 2. Make your public functions accessible

Any public function/property/event of your class will be accessible to your Javascript code automatically.
Global events should be of the form: `public event Action<object, object> onMyEvent` (where you can pass any number of object parameters).

* Your app will crash if trying to load a plugin that declares a public event of a different form (i.e. that doesn’t pass objects).

## 3. Implement asynchronous functions

The best practice is to implement asynchronous only functions that accepts a callback function that is triggered when completed:

```js
public void add(int x, int y, Action<object> callback)
```
:::important
* Starting from Overwolf version 116.2 we will only support 64 bit CPUs, and therefore you’ll be needed to compile your .DLL to target the x64 platform.
* The DLL must be compiled with the .NET 4.5 framework and NOT with an earlier version.
:::

We recommend you take a look at: [overwolf-plugin-sample](https://github.com/overwolf/overwolf-plugin-sample) or [overwolf-plugins](https://github.com/overwolf/overwolf-plugins) to get a quick start on developing your own plugin.



