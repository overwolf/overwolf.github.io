---
id: ads-sdk-options
title: Configuring Your Ads
sidebar_label:  Configuring Your Ads
---


There are ways to further configure ads after setting up a container. For one, providing a JSON object as the second parameter when calling the `OwAd` constructor works:

```js
new OwAd(document.getElementById("ad-div"), {size: {width: 400, height:300})
```

### configuration options

The following configuration options are supported:

| Option                    | Type                                | Default                     | 
| ------------------------- |:-----------------------------------:| :---------------------------|           
| [Size](#size-description) | JSON Object / Array of JSON Objects | `{width: 400, height:300}`  |

### *Size* description

* Sets the dimensions of the ad displayed. This should be a JSON object with two properties: **width** & **height**.  
Example: `{width: 400, height:300}`
* Alternatively, you can input an array of JSON objects to allow for multiple formats of ads. Example: `[{width:400, height:300}, {width:300, height:250}]` will enable ads in both size formats for that container.

* Currently supported formats:
  1. 728×90
  2. 300×250
  3. 400×300

:::warning
Make sure to only enter values that are supported by Overwolf. Entering an unsupported value will result in no ads showing.
:::

