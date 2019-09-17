---
id: overwolf-io
title: overwolf.io API
sidebar_label: overwolf.io
---

Use the `overwolf.io` API to check whether a certain file exists, as well as when writing contnet into files. For more I/O functionalities, please use our [simple I/O plugin](../topics/simple-io-plugin).  

## Methods Reference

* [`fileExists()`](#fileexistsfilepath-callback)
* [`writeFileContents()`](#writefilecontentsfilepath-content-encoding-triggeruacifrequired-callback)
* [`readFileContents()`](#readfilecontentsfilepath-encoding-callback)
* [`copyFile()`](#copyfilesrc-dst-overridefile-reserved-callback)

## Types Reference

* [`eEncoding`](#eencoding)

## fileExists(filePath, callback)

#### Version added: 0.93

> Checks for the existance of the file in the given path.

Parameter | Type | Description |
------------ | ------------ | ------------ |
filePath | string | Path to check for |
callback | function | Returns with the result |   
   
#### Callback argument: Success

```json 
{ "status": "success", "found": true }
```

#### Callback argument: Failure
If the file doesn’t exist, an error status will be returned:

```json 
{"status":"error","reason":"File doesn't exists"}
```

## writeFileContents(filePath, content, encoding, triggerUacIfRequired, callback)

#### Version added: 0.93

#### Permissions required: FileSystem

> Writes content into the target file.

If the file doesn’t exist, it will be created, along with any needed directories along the path. Otherwise, the file’s content will be overwritten.

Parameter            | Type                    | Description                                                                             |
-------------------- | ----------------------- | --------------------------------------------------------------------------------------- |
filePath             | string                  | Path to check for                                                                   |
content              | string                  | Content to write                                                                    |
encoding             | [eEncoding](#eencoding) enum | Encoding to use                                                               |
triggerUacIfRequired | bool                    | If additional permissions are required, allows the triggering of the Windows UAC dialog |
callback             | function                | Returns with the result                                                                 |   
   
#### Callback argument: Success
```json
{ "status": "success" }
```
#### Callback argument: Failure

```json
{"status":"error"}
```   

## readFileContents(filePath,encoding, callback)

#### Version added: 0.93

#### Permissions required: FileSystem

> Returns a string with the targeted file’s content.

Parameter | Type | Description |
------------ | ------------ | ------------ |
filePath | string | Full path of the targeted file|
encoding | [eEncoding](#eencoding) enum | Encoding to use |
callback | function | Returns with the result |
   
#### Callback argument: Success

Returns a string with the targeted file’s content.

```json
{"status":"success","content":"Hello World!"}
```

#### Callback argument: Failure

If the file doesn’t exist, an error status will be returned:

```json
{"status":"error","reason":"File doesn't exists"}
```

## copyFile(src, dst, overrideFile, reserved, callback)

#### Version added: 0.93

#### Permissions required: FileSystem

> Copy a file from the local extension directory to a destination in the local machine.

Parameter | Type | Description |
------------ | ------------ | ------------ |
src | string | A relative file path from your extension's root folder, or a full overwolf-extension:// URI to the source file |
dst | string | Destination path to copy to including file name |
overrideFile | bool | "true" if you want an existing file to be overwritten, "false" otherwise |
reserved | bool | For future use |
callback | function | Returns with the result |   

#### Callback argument: Success

Returns a string with the targeted file’s content.

```json
{"status":"success""}
```

#### Callback argument: Failure

```json
{"status":"error"}
```   

## eEncoding
File encoding.

Options    | 
-----------| 
UTF8       | 
UTF8BOM    |
Unicode    |
UnicodeBOM |
ASCII      |
