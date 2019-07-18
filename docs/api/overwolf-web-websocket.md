---
id: overwolf-web-websocket
title: overwolf.web.websocket API
sidebar_label: overwolf.web.websocket
---

An instance of websocket.

:::tip
Note that it is best to use the [native js WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/Websockets_API) when u can.  
Our web sockets by-pass cert checks for localhost WSS servers like LCU (league of legends).
:::

## Methods Reference

* [overwolf.web.websocket.connect()](#connectcallback)
* [overwolf.web.websocket.send()](#sendmessage-callback)
* [overwolf.web.websocket.close()](#close)

## Events Reference

* [overwolf.web.websocket.onMessage](#onmessage)
* [overwolf.web.websocket.onError](#onerror)
* [overwolf.web.websocket.onOpen](#onopen)
* [overwolf.web.websocket.onClosed](#onclosed)

## connect(callback)
#### Version added: 0.129

> Listens for requests on the given port.

If the port is already in use, or this instance is already listening, an error will be returned.

Parameter | Type                       | Description                                                                |
--------- | ---------------------------| -------------------------------------------------------------------------- |
callback  | function                   | A callback function which will be called with the status of the connection |

## send(message, callback)
#### Version added: 0.129

> send message.

If the port is already in use, or this instance is already listening, an error will be returned.

Parameter | Type                       | Description                                                                |
--------- | ---------------------------| -------------------------------------------------------------------------- |
message	  | string                     | Message to send                                                            |
callback  | function                   | A callback function which will be called with the status of the request    |

## close()
#### Version added: 0.129

> Closes the websocket. It can be re-opened again.

## onMessage()
#### Version added: 0.129

> Fired when the websocket receives an incoming message.

## onError()
#### Version added: 0.129

> Fired on error.

## onOpen()
#### Version added: 0.129

> Fired on websocket connection Opened.

## onClosed()
#### Version added: 0.129

> Fired when connection closed.