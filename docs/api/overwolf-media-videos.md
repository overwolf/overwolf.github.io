---
id: overwolf-media-videos
title: overwolf.media.videos API
sidebar_label: overwolf.media.videos
---

Use the `overwolf.media.videos` API to create video composition, delete video files, and get details of video files that were created by the app.

## Methods Reference

* [`overwolf.media.videos.createVideoComposition()`](#createvideocompositionsourcevideourl-segments-callback)
* [`overwolf.media.videos.createVideoCompositionFiles()`](#createvideocompositionfiles-outputfile-callback)
* [`overwolf.media.videos.getVideos()`](#getvideoscallback)
* [`overwolf.media.videos.getVideosSize()`](#getvideossizecallback)
* [`overwolf.media.videos.deleteOldVideos()`](#deleteoldvideoskeepnewestxgbs-callback)
* [`overwolf.media.videos.deleteVideo()`](#deletevideovideourl-callback)

## Types Reference

* [`VideoCompositionSegment`](#videocompositionsegment-object) Object

## createVideoComposition(sourceVideoUrl, segments, callback)
#### Version added: 0.78

> Creates a compilation video out of a source video and a list of segments. Listen to the event to determine when the compilation video is ready.


Parameter      | Type                                                              | Description                                                                                             |
-------------- | ------------------------------------------------------------------| ------------------------------------------------------------------------------------------------------- |
sourceVideoUrl | string                                                            | The url of the source video in an `overwolf://media` form                                               |
segments	   | [VideoCompositionSegment[]](#videocompositionsegment-object)      | A JSON containing a list of segments. See [notes below](#segments-notes)                                |
callback	   | function                                                          | A callback function which will be called with the status of the request and the url to the target video |

#### `segments` notes

The JSON containing a list of segments, each segment has a start time and an end time in milliseconds. The segments must be sorted in acsending order. Example:

```json
{
	"segments": [
		{ "startTime": 2000, "endTime": 4000 },
		{ "startTime": 8000, "endTime": 10000 },
		{ "startTime": 14000, "endTime": 18000 }
	]
}
```

## createVideoComposition(files, outputFile, callback)
#### Version added: 0.112

> Creates a compilation video out of a list of video files.

Parameter      | Type                                | Description                                                                                             |
-------------- | ------------------------------------| ------------------------------------------------------------------------------------------------------- |
files	       | string[]                            | List of video files (the url of each video is  in the form of `overwolf://media or file://`)            |
outputFile	   | string                              | The name of the output video file                                                                       |
callback	   | function                            | A callback function which will be called with the status of the request and the url of the output video |

## getVideos(callback)
#### Version added: 0.89

> Gets a list of all of the videos created by this app.

Parameter      | Type                                | Description                                                                                             |
-------------- | ------------------------------------| ------------------------------------------------------------------------------------------------------- |
callback	   | function                            | A callback function which will be called with the status of the request                                 |

## getVideosSize(callback)
#### Version added: 0.91

> Returns the total size of the video files created by this app in gigabytes.

Parameter      | Type                                | Description                                                                                             |
-------------- | ------------------------------------| ------------------------------------------------------------------------------------------------------- |
callback	   | function                            | A callback with the videos size                                                                         |

## deleteOldVideos(keepNewestXGbs, callback)
#### Version added: 0.89

> Deletes all videos created by this app with an option to keep the newest X GBs (use with care).

Parameter      | Type                                | Description                                                                                             |
-------------- | ------------------------------------| ------------------------------------------------------------------------------------------------------- |
keepNewestXGbs | int                                 | Keep the newest X GBs of videos. Pass 0 to delete all videos                                            |
callback	   | function                            | A callback function which will be called with the status of the request                                 |

## deleteVideo(videoUrl, callback)
#### Version added: 0.89

> Deletes a specific video created by this app.

Parameter      | Type                                | Description                                                                                             |
-------------- | ------------------------------------| ------------------------------------------------------------------------------------------------------- |
videoUrl	   | string                              | The Overwolf URL of the video to delete                                                                 |
callback	   | function                            |A callback function which will be called with the status of the request                                  |

## VideoCompositionSegment Object
#### Version added: 0.78

> A helper structure to describe video segments.

Parameter | Type | Description                          |
--------- | -----| ------------------------------------ |
startTime | int  | Segment start time (in milliseconds) |
endTime   | int  | Segment end time (in milliseconds)   |

