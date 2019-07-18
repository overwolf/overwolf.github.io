---
id: overwolf-web
title: overwolf.web API
sidebar_label: overwolf.web
---

Use the `overwolf.web` API to open a local HTTP web-server and a WebSocket.

## Methods Reference

* [overwolf.web.createServer()](#createserverport-callback)
* [overwolf.web.sendHttpRequest()](#sendhttprequesturl-method-headers-data-callback)
* [overwolf.web.createWebSocket()](#createwebsocketconnectionparams-callback)

## Types Reference

* [overwolf.web.WebSockcetConnectionParams](#websockcetconnectionparams-object) Object
* [overwolf.web.enums.HttpRequestMethods](#httprequestmethods-enum) enum
* [overwolf.web.FetchHeader](#fetchheader-object) Object

## createServer(port, callback)
#### Version added: 0.93
#### Permissions required: Web

> Creates a web server.

Parameter | Type                  | Description                                                             |
--------- | ----------------------| ----------------------------------------------------------------------- |
port	  | int                   | The port to use                                                         |
callback  | function              | A callback function which will be called with the status of the request |

#### Callback argument: Success

A callback function which returns the status of the request and an object with two fields: A status string and a server object.

```json
{
    "status": "success",
    "server": {
        "onRequest": {}
    }
}
```
The server object is of type [overwolf.web.webserver](#).

#### Callback argument: Failure

A callback function which will be called with the status of the request

```json
{ "status": "error", "error": "something went wrong..." }
```

#### Usage Example

Here you can see a sample code for using the overwolf.web and overwolf.web.webserver APIs:

```javascript
let _port = 61234;

overwolf.web.createServer(_port, serverInfo => {
    if (serverInfo.status == "error") {
        console.log("Failed to create server");
        return;
    } else {
        _server = serverInfo.server;
        // it is always good practice to removeListener before adding it
        _server.onRequest.removeListener(onRequest);
        _server.onRequest.addListener(onRequest);

        _server.listen(info => {
            console.log("Server listening status on port " + _port + " : " + info);
            //info = { "status": "success", "url": "http://localhost:61234/"}
        });
    }
});

function onRequest(info) {
    console.log(info.content);
    // info = { "content": "{'hello': 'world'}", "contentType": "application/json", "url": "http://localhost:59873/"}
}

...

_server.close();
```

## sendHttpRequest(url, method, headers, data, callback)
#### Version added: 0.126
#### Permissions required: Web

> Send an https request (of different methods) to localhost/127.0.0.1 while by-passing a valid certificate verification.

Parameter | Type                                                   | Description                                                             |
--------- | -------------------------------------------------------| ----------------------------------------------------------------------- |
url		  | string                                                 |                                                                         |
method	  | [HttpRequestMethods](#httprequestmethods-enum) enum    |                                                                         |
headers	  | [FetchHeader](#fetchheader-object)[]                   | an array of http headers (key,value) pairs. See [notes](#headers-notes) below |
data	  | string (Optional)                                      | The data being sent to the server (relevant for POST/PUT requests)      |
callback  | function                                               | A callback function which will be called with the status of the request |

#### `headers` notes

An example of [FetchHeader](#fetchheader-object) objects array:  `[{ key: "Content-Type", value: "application/json" }]`.

#### Callback argument: Success

```json
{ "status": "success" }
```

The server object is of type [overwolf.web.webserver](#).

#### Callback argument: Failure

```json
{ "status": "error", "error": "something went wrong..." }
```

## createWebSocket(connectionParams, callback)
#### Version added: 0.129
#### Permissions required: Web

> Creates a WebSocket client to localhost/127.0.0.1.

Parameter        | Type                                                   | Description                                                             |
---------------- | -------------------------------------------------------| ----------------------------------------------------------------------- |
connectionParams | [WebSockcetConnectionParams](#websockcetconnectionparams-object) Object  |  connection params. See [notes](#connectionparams-notes) below   |
callback         | function                                               | A callback function which will be called with the status of the request |

#### Callback argument: Success

This call returns a status and a WebSocket object.

```json
{
     "status": "success",
     "client": "IOverwolfWebSocket"
}
```

The server object is of type [overwolf.web.webserver](#).

#### Callback argument: Failure

```json
{
     "status": "error",
     "error": "something went wrong...",
     "client": ""
}
```

#### `connectionParams` notes

An example:

```json
{
    "secured":true,
    "port": int,
    "credentials": {
        "username": "riot",
        "password":  "string" (e.g lcuCredentialsoverw.native_token)
      },
      "protocols":["wamp"]
}
```

## WebSockcetConnectionParams Object
#### Version added: 0.129

> Container for the connection params.

Parameter   | Type             | Description                   |
----------- | -----------------| ----------------------------- |
secured     | bool             |                               |
port        | int              |  The port to use              |
credentials | LoginCredentials |                               |
protocols   | string[]         |                               |

## HttpRequestMethods enum
#### Version added: 0.129

> HTTP requests methods.

Option  | Description  |
--------| -------------|
GET     |              |
HEAD    |              |
POST    |              |
PUT     |              |
DELETE  |              |
PATCH   |              |

## FetchHeader Object
#### Version added: 0.126

> Container for a key value pair that represent an HTTP header.

Read more about http headers [here](https://flaviocopes.com/http-request-headers/).

Parameter   | Type             | Description                   |
----------- | -----------------| ----------------------------- |
key         | string           |                               |
value       | string           |                               |

#### Object Data Example

```json
{ "key": "Content-Type", "value": "application/json" }
```
