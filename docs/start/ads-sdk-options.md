---
id: ads-sdk-options
title: Setting Options For The Ad
sidebar_label:  Setting Options For The Ad
---


It is possible to provide extra configuration parameters, by providing a JSON object as the second parameter when calling the `OwAd` constructor:

```js
new OwAd(document.getElementById("ad-div"), {size: {width: 400, height:300})
```

### configuration options

The following configuration options are supported:

| Option                    | Type                                | Default                     | 
| ------------------------- |:-----------------------------------:| :---------------------------|           
| [Size](#size-description) | JSON Object / Array of JSON Objects | `{width: 400, height:300}`  |

### *Size* description

* Sets the dimensions of the ad that would be displayed. This should be a JSON object with two properties: **width** & **height**.  
Example: `{width: 400, height:300}`
* Alternatively, you can pass an array of such objects. In such cases, you will get an advertisement that can be one of any of the sizes provided. Example: `[{width:400, height:300}, {width:300, height:250}]`

* Supported values:
  1. 728×90
  2. 300×250
  3. 400×300

:::warning
Please make sure to only enter values that are supported by Overwolf. Entering an unsupported value will result in no ad showing.
:::

