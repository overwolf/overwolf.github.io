This is intended as a quick reference and showcase.

### Table of Contents
* [Headers](#headers)
* [Emphasis](#emphasis)
* [Lists](#lists)
* [Links](#links)
* [Images](#images)
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

URLs and URLs in angle brackets will automatically get turned into links: http://www.example.com or <http://www.example.com>.

<pre lang="no-highlight">
<code>

[I'm an inline-style link](https://www.google.com)

[I'm a relative reference to a repository file](../docs/topics/legal-developers-terms)

[I'm a relative reference to a repository file in the same folder](overwolf-io#types-reference)

</code>
</pre>

### Images

Inline-style: (hover to see the title text):

<pre lang="no-highlight">
<code>
![alt-text](assets/app-creation-process.svg)

Or use HTML if you want to customize the size or other styles:

<img src="../assets/app-creation-process.svg" alt="process" width="800"/>

</code>
</pre>

### Blockquotes

<pre lang="no-highlight">
<code>

Regular blockquotew:

>

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

<pre lang="no-highlight">
<code>

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
</code>
</pre>

### Line Breaks

My basic recommendation for learning how line breaks work is to experiment and discover -- hit <Enter> once (i.e., insert one newline), then hit it twice (i.e., insert two newlines), see what happens.

