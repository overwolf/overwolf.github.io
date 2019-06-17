---
id: overwolf-io
title: overwolf.io API
sidebar_label: overwolf.io
---

Use the `overwolf.io` API to check if  a certain file exists or to write content to a file.  
For more I/O functionalities, please use our simple I/O plugin.  

## Methods Reference

* [`fileExists()`](#fileExists)
* [`writeFileContents()`](#writeFileContents)
* [`readFileContents()`](#readFileContents)
* [`copyFile()`](#copyFile)

<a name='fileExists'>
## fileExists(filePath, callback)

> Checks for the existance of the file in the given path.

Parameter | Type | Description |
------------ | ------------ | ------------ |
filePath | string | The path to check for |
callback | function | Returns with the result |   
   
<h3>Response</h3>  

####  200: OK
```js 
{"status":"success","content":"Hello World!"}
```

#### 404: Not Found
If the file doesn’t exist, an error status will be returned:

```js 
{"status":"error","reason":"File doesn't exists"}
```

<h3> Usage Example </h3>
<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->

```js
console.log('Hello, world!');
```

<!--END_DOCUSAURUS_CODE_TABS-->

<a name='writeFileContents'>
## writeFileContents(filePath, content, encoding, triggerUacIfRequired, callback)

> Checks for the existance of the file in the given path.

Parameter | Type | Description |
------------ | ------------ | ------------ |
filePath | string | The path to check for |
content | string | The content to write |
encoding | [eEncoding](#eEncoding) | The encoding to use |
triggerUacIfRequired | bool | If additional permissions are required, allows the triggering of the Windows UAC dialog |
callback | function | Returns with the result |   
   
<h3> Response </h3>

<details>

####  200: OK
```js 
{"status":"success","content":"Hello World!"}
```

#### 404: Not Found
If the file doesn’t exist, an error status will be returned:

```js 
{"status":"error","reason":"File doesn't exists"}
```
</details>

<h3>  Usage Example  </h3>
<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->

```js
console.log('Hello, world!');
```

<!--END_DOCUSAURUS_CODE_TABS-->

<a name='readFileContents'>
## readFileContents(filePath,encoding, callback)

> Returns a string with the targeted file’s content.

Parameter | Type | Description |
------------ | ------------ | ------------ |
filePath | string | The path to check for |
encoding | [eEncoding](#eEncoding) | The encoding to use |
callback | function | Returns with the result |   
   
<h3>Response</h3>

<details>

####  200: OK
```js 
{"status":"success","content":"Hello World!"}
```

#### 404: Not Found
If the file doesn’t exist, an error status will be returned:

```js 
{"status":"error","reason":"File doesn't exists"}
```
</details>

<h3>Usage Example  </h3>
<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->

```js
console.log('Hello, world!');
```

<!--END_DOCUSAURUS_CODE_TABS-->

<a name='copyFile'>
## copyFile(src, dst, overrideFile, reserved, callback)

> Copy a file from the local extension directory to a destination in the local machine.
> Permissions required: FileSystem

Parameter | Type | Description |
------------ | ------------ | ------------ |
src | string | A relative (to the root of your extension's folder) file path or a full overwolf-extension:// URI to the source file to be copied |
dst | string | The destination path (including filename) to copy to |
overrideFile | bool | "true" if you want an existing file to be overriden, "false" otherwise |
reserved | bool | For future use |
callback | function | Returns with the result |   
   
<h3>Response  </h3>

<details>

####  200: OK
```js 
{"status":"success","content":"Hello World!"}
```

#### 404: Not Found
If the file doesn’t exist, an error status will be returned:

```js 
{"status":"error","reason":"File doesn't exists"}
```
</details>

<h3> Usage Example  </h3>
<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->

```js
console.log('Hello, world!');
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Types

#### eEncoding
File encoding.

Options | 
------------ | 
UTF8 | 
UTF8BOM |
Unicode |
UnicodeBOM |
ASCII |

## Events

## Properties