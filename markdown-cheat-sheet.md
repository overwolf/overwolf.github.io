This is intended as a quick reference and showcase.

### Table of Contents
* [Headers](#headers)
* [Emphasis](#emphasis)
* [Lists](#lists)
* [Links](#links)
* [Images](#images)
* [Image Gallery](#image-gallery)
* [Blockquotes](#blockquotes)
* [Backslash Escape](#backslash-escape)
* [Code Blocks](#code-blocks)
* [Tables](#tables)
* [Inline HTML](#inline-html)
* [Line Breaks](#line-breaks)

### Headers

<pre lang="no-highlight">
<code>
# H1
## H2
### H3
#### H4
##### H5
###### H6
</code>
</pre>

### Emphasis

<pre lang="no-highlight">
<code>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__
*You **can** combine them*

Strikethrough uses two tildes. ~~Scratch this.~~
</code>
</pre>

### Lists

<pre lang="no-highlight">
<code>

#### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b

#### Ordered

1. Item 1
2. Item 2
3. Item 3
* Item 3a
* Item 3b
</code>
</pre>

### Links

URLs and URLs in angle brackets will automatically get turned into links: http://www.example.com. 

<pre lang="no-highlight">
<code>

[I'm an inline-style link](https://www.google.com)

[I'm a relative reference to a repository file](../docs/topics/legal-developers-terms)

[I'm a relative reference to a repository file in the same folder](overwolf-io#types-reference)

</code>
</pre>

### Images

If you want to display images in the site you can do it in two ways:

1. upload files directly to the repo using the "upload files" button.
   make sure to upload it to the `overwolf.github.io/docs/assets` folder.
   
2. Upload files to online services like https://imgur.com.

add images Inline-style: (hover to see the title text):

<pre lang="no-highlight"><code>

![alt-text](assets/app-creation-process.svg)
</code></pre>

Or use HTML if you want to customize the size or other styles:

`<img src="../assets/app-creation-process.svg" alt="process" width="800"/>`

### Image Gallery

You can create an image gallery. When you click on an image it will popup in a light box.
Each image can be linked to YouTube video or larger image.

```html
<div class="box" data-slick='{"slidesToShow": 2}'>
  <a data-fancybox="gallery" data-caption="LoLwiz" href="../assets/transparent-window.png">
    LoLwiz
    <span class="thumb">
      <img src="../assets/transparent-window.png" alt="DotaPlus">
    </span>
  </a>
  <a data-fancybox="gallery" data-caption="PUBG Tracker" href="https://www.youtube.com/watch?v=xiG_cCI9s-E">
    PUBG Tracker
    <span class="thumb">
      <img src="http://img.youtube.com/vi/xiG_cCI9s-E/maxresdefault.jpg" alt="DotaPlus">
    </span>
  </a>
</div>
```


### Blockquotes

<pre lang="no-highlight">
<code>

Regular blockquotew:

>

Supported admonition types are: caution, note, important, tip, warning.

:::note This is my custom title
A note.
:::

:::caution
A caution.
:::

:::important
An important.
:::

:::tip
A tip.
:::

:::warning
A warning.
:::

</code>
</pre>

## Backslash Escape

Markdown allows you to use backslash escapes to generate literal characters which would otherwise have special meaning in Markdown’s formating syntax.

<pre lang="no-highlight">
<code>
\*literal asteriks\*

Markdown provides backslash escapes for the following characters:

\ backslash
` backtick
* asterisk
_ underscore
{} [] braces
() parentheses
# hash mark
+ plus sign
- minus sign (hyphen)
. dot
! exclamation mark
</code>
</pre>

### Code Blocks

Inline code has back-ticks around it. Example:

<pre lang="no-highlight"><code>
`getAround()`
</code></pre>

And code blocks like that:

<pre lang="no-highlight"><code>
```js
var s = "JavaScript syntax highlighting";
alert(s);
```
Or:

```json
 { "icon": "IconMouseOver.png" }
```
</code></pre>

To add code blocks that contain links, please put this line one the top of the page, right after the sidebar_label section:

`<script>hljs.initHighlightingOnLoad();</script>`

And define your code block using this tags:

`<pre lang="no-highlight"><code>`

### Tables

You can create tables by assembling a list of words and dividing them with hyphens - (for the first row), and then separating each column with a pipe | :

<pre lang="no-highlight">
<code>

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

</code>
</pre>

### Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well.

### Line Breaks

My basic recommendation for learning how line breaks work is to experiment and discover -- hit <Enter> once (i.e., insert one newline), then hit it twice (i.e., insert two newlines), see what happens.

