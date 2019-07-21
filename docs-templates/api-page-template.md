## Methods Reference

* [overwolf.settings.start()](#)
* [overwolf.settings.stop()](#)

## Events Reference

* [overwolf.settings.onStreamingSourceImageChanged](#)
* [overwolf.settings.onStopStreaming](#)

## Types Reference

* [StreamSettings](#) Object
* [overwolf.settings.enums.eMediaType enum](#) enum


## start(settings, callback)
#### Version added: 0.78
#### Permissions required: FileSystem

> Start a new stream.

Parameter | Type                       | Description                                                             |
--------- | ---------------------------| ----------------------------------------------------------------------- |
settings  | [StreamSettings](#) object | The stream settings. See [notes](#) below                               |
callback  | function                   | A callback function which will be called with the status of the request |

#### `settings` notes

an array of http headers (key,value) pairs, for example: [{ key: "Content-Type", value: "application/json" }].


#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{ "status": "success", "stream_id": 1 }
```

#### Callback argument: Failure

A callback function which will be called with the status of the request

```json
{ "status": "error", "error": "something went wrong..." }
```

#### Usage Example

```javascript
function(result) {
	if (result.status == "success")
    {
		console.debug(result.stream_id);
    }
}
```

## onStreamingSourceImageChanged
#### Version added: 0.78

> Fired when the stream started streaming a new image source (desktop, game).

#### Usage Example

```javascript

```

#### Event Data Example: Success

```json

```

## StreamSettings Object
#### Version added: 0.78


> Container for the stream settings.


Parameter | Type | Description                   |
--------- | -----| ----------------------------- |
rate      | int  | The frame rate of this stream |
quality   | int  | The quality of this stream    |

#### Object Data Example

```json

```


## overwolf.media.enums.eMediaType enum
#### Version added: 0.78

> Media type for the Media Event.

Option    | Description  |
--------- | -------------|
Video     |              |
Image     |              |
