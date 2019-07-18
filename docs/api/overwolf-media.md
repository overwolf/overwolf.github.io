---
id: overwolf-media
title: overwolf.media API
sidebar_label: overwolf.media
---

Use the `overwolf.media` API to capture a screenshot or create a GIF of the currently running game.

## Methods Reference

* [overwolf.media.takeScreenshot()](#takescreenshotcallback)
* [overwolf.media.takeScreenshot()](#takescreenshottargetfolder-callback)
* [overwolf.media.takeWindowsScreenshotByHandle()](#takewindowsscreenshotbyhandlewindowhandle-postmediaevent-callback)
* [overwolf.media.takeWindowsScreenshotByHandle()](#takewindowsscreenshotbyhandlewindowhandle-postmediaevent-targetfolder-callback)
* [overwolf.media.takeWindowsScreenshotByName()](#takewindowsscreenshotbynamewindowname-postmediaevent-callback)
* [overwolf.media.takeWindowsScreenshotByName()](#takewindowsscreenshotbynamewindowname-postmediaevent-targetfolder-callback)
* [overwolf.media.getScreenshotUrl()](#getscreenshoturlscreenshotparams-callback)
* [overwolf.media.shareImage()](#shareimageimage-description-callback)
* [overwolf.media.postMediaEvent()](#postmediaeventmediatype-jsoninfo-callback)
* [overwolf.media.deleteOldGifs()](#deleteoldgifskeepnewestxgbs-callback)
* [overwolf.media.getGifsSize()](#getgifssizecallback)
* [overwolf.media.getAppVideoCaptureFolderSize()](#getappvideocapturefoldersizecallback)
* [overwolf.media.getAppScreenCaptureFolderSize()](#getappscreencapturefoldersizecallback)
* overwolf.media.startGifBuffer() - Obsolete
* overwolf.media.stopGifBuffer() - Obsolete
* overwolf.media.generateGif() - Obsolete

## Events Reference

* [overwolf.media.onMediaEvent](#onmediaevent)
* [overwolf.media.onScreenshotTaken](#onscreenshottaken)
* [overwolf.media.onSconGifGenerationErrorreenshotTaken](#ongifgenerationerror)

## Types Reference

* [MemoryScreenshotParams](#memoryscreenshotparams-object) Object
* [RescaleParams](#rescaleparams-object) Object
* [CropParams](#cropparams-object) Object
* [overwolf.media.enums.eMediaType](#overwolfmediaenumsemediatype-enum) enum

## In-memory screenshot overview

Some methods in the overwold.media API allows you to take in-memory screenshot.

For example, the [`takeScreenshot(callback)`](#takescreenshotcallback) method returns in a callback argument a screenshot URL that looks like this:

```json
overwolf://media/screenshots/custom/E:/Desktop%20Capture-07-15-2018%2014-15-22-793.jpg
```

You can use the retrieved URL later in order to serve the stated screenshot: for example, to upload it to remote server, you can use [HTML canvas](https://discuss.developers.overwolf.com/t/how-can-i-send-a-screenshot-to-an-external-server-without-saving-it-to-a-file/109).

## Sample app

[Download here](https://github.com/overwolf/in-memory-screenshot) a Sample app for using the In-Memory Screenshot API.

## takeScreenshot(callback)
#### Version added: 0.78
<h3 style="display:none">overwolf.media.takeScreenshot</h3>

> Takes a screenshot and calls the callback with the success status and the screenshot URL. The screenshot is saved to the screenshots folder.

Parameter            | Type                  | Description                                      |
-------------------- | ----------------------| ------------------------------------------------ |
callback (Optional)  | function              | A function called after the screenshot was taken |

#### Callback argument: Success

A callback function which will be called with the status of the request and the screenshot URL.

```json
{
    "status": "success",
    "url": "overwolf://media/screenshots/<screenshot name>"
}
```

## takeScreenshot(targetFolder, callback)
#### Version added: 0.117

> Takes a screenshot and calls the callback with the success status and the screenshot URL. The screenshot is saved to the screenshots folder.

Parameter            | Type                  | Description                                      |
-------------------- | ----------------------| ------------------------------------------------ |
targetFolder         | string                | Target screen shot folder path                   |
callback             | function              | A function called after the screenshot was taken |

#### Callback argument: Success

A callback function which will be called with the status of the request and the screenshot URL.

```json
{  
   "status":"success",
   "url":"overwolf://media/screenshots/custom/E:/Desktop%20Capture-07-15-2018%2014-15-22-793.jpg",
   "path":"E:/Desktop Capture-07-15-2018 14-15-22-793.jpg"
}
```

## takeWindowsScreenshotByHandle(windowHandle, postMediaEvent, callback)
#### Version added: 0.115

> Takes a window screenshot and calls the callback with the success status and the screenshot URL. The screenshot is saved to the screenshots folder.

Parameter       | Type       | Description                                                                                                              |
----------------| -----------| ------------------------------------------------------------------------------------------------------------------------ |
windowHandle    | int        | The window handle number. The handle number can retrieved from [overwolf.games.launchers.getRunningLaunchersInfo()](overwolf-games-launchers#getrunninglaunchersinfocallback)        |
postMediaEvent	| bool       | set true to post [(onMediaEvent)](#onmediaevent)                                                                                     |
callback        | function   | A function called after the screenshot was taken                                                                         |

## takeWindowsScreenshotByHandle(windowHandle, postMediaEvent, targetFolder, callback)
#### Version added: 0.115

> Takes a window screenshot and calls the callback with the success status and the screenshot URL. The screenshot is saved to the screenshots folder.

Parameter       | Type       | Description                                                                                                              |
----------------| -----------| ------------------------------------------------------------------------------------------------------------------------ |
windowHandle    | int        | The window handle number. The handle number can retrieved from [overwolf.games.launchers.getRunningLaunchersInfo()](overwolf-games-launchers#getrunninglaunchersinfocallback)        |
postMediaEvent	| bool       | set true to post [(onMediaEvent)](#onmediaevent)                                                                                     |
targetFolder	| string     | Set target folder path for screenshot                                                                                    |
callback        | function   | A function called after the screenshot was taken                                                                         |

## takeWindowsScreenshotByName(windowName, postMediaEvent, callback)
#### Version added: 0.115

> Takes a window screenshot and calls the callback with the success status and the screenshot URL. The screenshot is saved to the screenshots folder.

Parameter       | Type       | Description                                                                                                              |
----------------| -----------| ------------------------------------------------------------------------------------------------------------------------ |
windowName	    | string     | The window name                                                                                                          |
postMediaEvent	| bool       | set true to post [(onMediaEvent)](#onmediaevent)                                                                         |
callback        | function   | A function called after the screenshot was taken  

## takeWindowsScreenshotByName(windowName, postMediaEvent, targetFolder, callback)
#### Version added: 0.117

> Takes a window screenshot and calls the callback with the success status and the screenshot URL. The screenshot is saved to the `targetFolder` folder.

Parameter       | Type       | Description                                                                                                              |
----------------| -----------| ------------------------------------------------------------------------------------------------------------------------ |
windowName	    | string     | The window name                                                                                                          |
postMediaEvent	| bool       | set true to post [(onMediaEvent)](#onmediaevent)                                                                         |
targetFolder	| string     | Set target folder path for screenshot                                                                                    |
callback        | function   | A function called after the screenshot was taken  

## getScreenshotUrl(screenshotParams, callback)
#### Version added: 0.85

> Takes a memory screenshot and calls the callback with the success status and the screenshot URL.

* The screenshot will only be placed in the memory and will not be saved to a file (better performance). 
* Can only be used while in a game.
* You can take a look at the in-memory screenshot [sample app](#sample-app).
* You can read more about the in-memory screenshot [here](#in-memory-screenshot-overview).

Parameter           | Type       | Description                                                                                                              |
--------------------| -----------| ------------------------------------------------------------------------------------------------------------------------ |
screenshotParams	| [MemoryScreenshotParams](#memoryscreenshotparams-object)  | A JSON containing the parameters of the screenshot                        |
callback (Optional) | function   | A function called after the screenshot was taken  

#### Callback argument: Success

A callback function which will be called with the status of the request and the screenshot URL.

```json
{
    "status": "success",
    "url": "overwolf://media/memoryscreenshots/74/Counter-Strike+Global+Offensive-05-02-2016+13-54-54"
}
```

#### Usage Example

```js
overwolf.media.getScreenshotUrl(
    {
        //Recommended for better rounding.
        roundAwayFromZero : "true",
        //Optional - Crop the screen (happens before the rescale, if both are used).
        //Positive values are absolute, negative values are relative (-1.0 - 0)
        crop: {
            x: -0.5, //Start cropping at the middle of the screen
            y: 0,
            width: 400,
            height: -0.5
        },
        //Optional - Rescale the final image to these dimensions
        rescale: {
            width: 1920,
            height: -0.4
        }
    },
    function(result) {
        if (result.status == "success")
        {
            console.log(result.url);
        }
    }
);
```

## shareImage(image, description, callback)
#### Version added: 0.78

> Opens the social network sharing console to allow the user to share a picture.

Parameter           | Type       | Description                                                                                                              |
--------------------| -----------| ------------------------------------------------------------------------------------------------------------------------ |
image		        | Object     | A URL or image object to be shared                                                                                       |
description		    | string     | The description to be used when posting to social networks                                                               |
callback (Optional) | function   | A function called after the screenshot was taken                                                                         |

## postMediaEvent(mediaType, jsonInfo, callback)
#### Version added: 0.91

> Posts a media event for other apps to receive.

Parameter           | Type                                                   | Description                                                |
--------------------| -------------------------------------------------------| ---------------------------------------------------------- |
mediaType		    | [eMediaType](#overwolfmediaenumsemediatype-enum) enum  | The type of the event                                      |
jsonInfo		    | JObject                                                | A json with additional info about the events               |
callback            | function                                               | A callback with the status if the call                     |

## deleteOldGifs(keepNewestXGbs, callback)
#### Version added: 0.91

> Deletes all gifs created by this app with an option to keep the newest X GBs (use with care).

Parameter         | Type                  | Description                                                             |
------------------| ----------------------| ----------------------------------------------------------------------- |
keepNewestXGbs	  | int                   | Keep the newest X GBs of gifs. Pass 0 to delete all gifs                |
callback          | function              | A callback function which will be called with the status of the request |

## getGifsSize(callback)
#### Version added: 0.91

> Returns the total size of the gif files created by this app in gigabytes.

Parameter         | Type                  | Description                                                             |
------------------| ----------------------| ----------------------------------------------------------------------- |
keepNewestXGbs	  | int                   | Keep the newest X GBs of gifs. Pass 0 to delete all gifs                |
callback          | function              | A callback with the gifs size                                           |

## getAppVideoCaptureFolderSize(callback)
#### Version added: 0.106

> Returns the total size of the video capture folder created by the app. This includes all video/thumbnail and other files that are under the apps video folder.

* The apps video folder is located inside the configured Overwolf video capture folder.
* This function can take a long time to return if the folder contains a large amount of files (on some computers) – therefore, try to reduce the amount of times you call it.

Parameter         | Type                  | Description                                                             |
------------------| ----------------------| ----------------------------------------------------------------------- |
callback          | function              | A callback with the size in MB                                          |

## getAppScreenCaptureFolderSize(callback)
#### Version added: 0.106

> Returns the total size of the screen capture folder created by the app.  This includes all images/thumbnail and other files that are under the apps images folder.

* The apps imagee folder is located inside the configured Overwolf image capture folder.
* This function can take a long time to return if the folder contains a large amount of files (on some computers) – therefore, try to reduce the amount of times you call it.

Parameter         | Type                  | Description                                                             |
------------------| ----------------------| ----------------------------------------------------------------------- |
callback          | function              | A callback with the size in MB                                          |

## onMediaEvent

#### Version added: 0.78

> Fired when a media event has been posted.

#### Event Data Example: Success

```json
 {
  "origin": "nafihghfcpikebhfhdhljejkcifgbdahdhngepfb",
  "triggerTime": "2018-10-22T16:56:39.000Z",
  "events": [
    "death"
  ],
  "rawEvents": [
    {
      "type": "death",
      "time": 15000
    }
  ],
  "mediaUrl": "overwolf://media/replays/Game+Summary/Fortnite/Fortnite_22-10-2018_19-53-40-1/Fortnite+10-22-2018+19-56-39-385.mp4",
  "thumbnailUrl": "overwolf://media/thumbnails/Game+Summary/Fortnite/Fortnite_22-10-2018_19-53-40-1/Fortnite+10-22-2018+19-56-39-385.mp4",
  "fullDuration": 20015,
  "eventsDuration": 5015
} 
```

## onScreenshotTaken

#### Version added: 0.78

> Fired when a screenshot was taken.

## onGifGenerationError

#### Version added: 0.91

> Fired when there’s an error with the gif generation buffer.

## MemoryScreenshotParams Object
#### Version added: 0.78

> Container for memory screenshot settings.

Parameter         | Type                 | Description                                                                                                                     |
----------------- | ---------------------| ------------------------------------------------------------------------------------------------------------------------------- |
roundAwayFromZero | bool  | When a number is halfway between two others, it is rounded toward the nearest number that is away from zero. Recommended for better precision  |
rescale           | [RescaleParams](#rescaleparams-object) Object | The rescale settings                                                                                   |
crop              | [CropParams](#cropparams-object) Object       | The crop settings                                                                                      |

## RescaleParams Object
#### Version added: 0.78

> Describes rescale parameters for memory screenshot.

Parameter | Type     | Description        |
--------- | ---------| ------------------ |
width     | double   | The target width   |
height    | double   | The target height  |

## CropParams Object
#### Version added: 0.78

> Describes rescale parameters for memory screenshot.

Parameter | Type     | Description                                                                                                      |
--------- | ---------| ---------------------------------------------------------------------------------------------------------------- |
x         | double   | The x offset. Positive value is considered absolute (0 – WIDTH) and negative is considered relative (-1.0 – 0)   |
y         | double   | The y offset. Positive value is considered absolute (0 – HEIGHT) and negative is considered relative (-1.0 – 0)  |
width     | double   | The target width                                                                                                 |
width     | double   | The target width                                                                                                 |

## eMediaType enum
#### Version added: 0.78

> Media type for the Media Event.

Option    | Description  |
--------- | -------------|
Video     |              |
Image     |              |
