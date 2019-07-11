## Read Me
This is the repo of the Overwolf Developers website - API Documentation, guides, etc.

### Add code block:
To add code blocks that contain links, please put this line one the top of the page, right after the sidebar_label section:  

`<script>hljs.initHighlightingOnLoad();</script>`

And define your code block using this tags:  

`<pre><code class="js">`

### Add an image

Using a markdown:
<pre>
![alt-text](assets/app-creation-process.svg)
</pre>

Or using HTML if you want to customize the sizes:

\<img src="../assets/app-creation-process.svg" alt="process" width="800"/>


### Search configuration:

* To customize the look and feel by following the DocSearch documentation see https://community.algolia.com/docsearch/styling.html) 
* To check your configuration in our GitHub repository see https://github.com/algolia/docsearch-configs/blob/master/configs/overwolf.json). Please open a pull request if want to leverage your configuration.

### Supported admonition types:

Supported admonition types are: caution, note, important, tip, warning.

:::note This is my custom title  
A note.  
:::

:::caution This is my custom title  
A caution.  
:::

:::important te This is my custom title  
An important.  
:::

:::tip This is my custom title  
A tip.  
:::

:::warning This is my custom title  
A warning.  
:::
