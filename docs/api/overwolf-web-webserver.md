---
id: overwolf-web-webserver
title: overwolf.web.webserver API
sidebar_label: overwolf.web.webserver
---

An instance of a web server.

## Methods Reference

* [`overwolf.web.webserver.listen()`](#listencallback)
* [`overwolf.web.webserver.close()`](#close)

## Events Reference

* [`overwolf.web.webserver.onRequest`](#onrequest)

## listen(callback)
#### Version added: 0.93

> Listens for requests on the given port. 

If the port is already in use, or this instance is already listening, an error will be returned.

Parameter | Type                       | Description                                                             |
--------- | ---------------------------| ----------------------------------------------------------------------- |
callback  | function                   | A callback function which will be called with the status of the request |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{
    "status": "success",
    "url": "http://localhost:7707/"
}
```

## close()
#### Version added: 0.93

> Closes the web server. It can be re-opened again.

## onRequest
#### Version added: 0.93

> Fired when the web server receives an incoming request. 

The event contains three strings: ‘url’, ‘content’ and ‘contentType’.