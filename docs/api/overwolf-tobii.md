---
id: overwolf-tobii
title: overwolf.tobii API
sidebar_label: overwolf.tobii
---

## Types Reference

* [overwolf.tobii.TobiiLayerParams](#tobiilayerparams-object) Object
* [overwolf.tobii.eTobiiEffectType](#etobiieffecttype-enum) enum

## TobiiLayerParams object

#### Version added: 0.78 

Tobii Replay layer setting.

| Name     | Type                                             | Description                  | Since |
|----------| -------------------------------------------------|------------------------------|------ |
| visible  | bool                                             | TTobii Replay layer on\off   | 0.78  |
| effect   | [eTobiiEffectType](#etobiieffecttype-enum) enum  | Tobii Replay layer effect    | 0.78  |
| color    | int                                              | RBGA color                   | 0.78  |

## eTobiiEffectType enum

#### Version added: 0.78 

Media type for the Media Event.

| Options     | Description                   |
|-------------| ------------------------------|
| Default     | Keep the current effect as is |
| Bubble      |                               |
| Solid       |                               |
| Inverted    |                               |

