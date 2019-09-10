---
id: validate-your-manifest
title: Validate your manifest.json
sidebar_label: Validate your manifest
---

To help you make sure that your manifest file is correct and complete, validate it against oue schema file.

You can find the most updated schema in our <a href="https://github.com/overwolf/community-gists/blob/master/overwolf-manifest-schema.json" target="_blank">GitHub repository</a> (and you are welcome to suggest changes/updates).

## Online validation

1. Go to <a href="http://www.jsonschemavalidator.net" target="_blank">jsonschemavalidator.net</a> or similar service.
2. Copy-paste the [schema's](https://raw.githubusercontent.com/overwolf/community-gists/master/overwolf-manifest-schema.json) and your manifest.json code into the "Schema" and "Input JSON" windows, respectively.
3. Check for any errors or missing data.

## Automated schema validation

To better follow a modern practices of CI and CD, we strongly recommend you to automate the validation process using your prefered tools.

We demonstrate here how to do that using one of the popular npm schema validation packages, called <a href="https://www.npmjs.com/package/ajv-cli" target="_blank">ajv-cli</a>.  In addition, **the exmaples here are tested in the terminal of Visual Studio Code**.

the steps which developers should take in order to validate their manifest.json automatically:
 
  
### 1. Install the npm package

<pre><code>
> npm install -g ajv-cli
</code></pre>

*g- install this package globally and make it available for all your projects.*

### 2. Pull the latest manifest

Download the schema from GitHub and save it as overwolf-manifest-schema.json: 

<pre><code>
> curl -o overwolf-manifest-schema.json "https://raw.githubusercontent.com/overwolf/community-gists/master/overwolf-manifest-schema.json"
</code></pre>

*o - output name.*

### 3. Validate the data

Validate your manifest.json against the local schema file that you just downloaded (overwolf-manifest-schema.json):

<pre><code>
>  ajv validate -s overwolf-manifest-schema.json -d manifest.json
</code></pre>

