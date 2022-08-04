This file is intended to serve as a quick reference for markdown and markdown conventions in this website.

**This file is intended to be viewed as a parsed markdown file. As such, if you can see more than one *\** here, the file will look wrong.** 

### Table of Contents
- [Backslash Escape](#backslash-escape)
  - [Code Blocks](#code-blocks)
  - [Tables](#tables)
  - [Inline HTML](#inline-html)
  - [Line Breaks](#line-breaks)

### Headings

- \# H1 //Automatically generated from page title, do not use
- \## H2 //Main page Heading
- \### H3 //Sub page Heading
- \#### H4 //...
- \##### H5 //...
- \###### H6 //...

### Emphasis

- \*This text will be\* *italic*
- \_This will also be\_ _italic_
- \*\*This text will be\*\* **bold**
- \_\_This will also be\_\_ __bold__
- \**You \*\***can**\*\* combine them\**
- \~\~This will be in\~\~ ~~strikethrough~~.


### Lists

#### Unordered
```
* Item 1
* Item 2
* Item 2a
* Item 2b
```
#### Ordered
```
1. Item 1
2. Item 2
3. Item 3
  1. Item 3.i
  2. Item 3.ii
```

### Links

Plaintext links and URLs in angle brackets will automatically get turned into links.

There are several different types of links:

1. External links. Use absolute URL: `[external](http://google.com)`.
2. Anchor in the same page: `[anchor](#images)`
3. Different page in the section: `[neighbor](../common-ancestor/[...]/new-page)`. Note that each `../` climbs one layer up the hierarchy from this page's url.
4. Different page in another section: `[stranger](/section/[...]/new-page)`
 
For links between website pages, refer to the file hierarchy, as well as to other references in the section to different pages.

#### Link Reusability

For links that will be used often inside the page, consider using named links.

- First link to `[page][pagelink]`
- Second link to `[page][pagelink]`
- ...
- `[pagelink]: https://google.com "alt text"`

### Images

If you want to display images in the site you can do it in one of two ways:

1. Upload files directly to the repo. 
   1. If the image is intended for a specific page, upload it `website/static/assets`, in a folder for that page.
   2. If the image is intended to be used throughout the website, make sure to upload it to `website/static/img`, under a relevant category.
2. Upload files to online services like https://imgur.com.

Add an image inline: (hover to see the alt text):

```
![alt-text](assets/app-creation-process.svg)
```

Or use HTML if you want to customize the size or other styles:

`<img src="../assets/app-creation-process.svg" alt="process" width="800"/>`

If the image has both a dark and light variant, and or also has a mobile vs desktop variant, use the following pre-fixes in its name:
- dark `dark`
- light `light`
- desktop `desktop`
- mobile `mobile`

For example: `desktop-dark-my-image`

### Fancy Images

In case you want to add a picture that can be zoomed into, simply use the `ImageBoxModal` react component implemented in this site.

```html
<ImageBoxModal>
  <img src={require('/assets/subs-user-flow/outplayed.jpg').default} alt="outplayed" />
</ImageBoxModal>
```

If you want to create a gallery of zoomable images, that can be switched between, use the `ImageSlider` react component implemented in this site.

```html
<ImageSlider>
  <img src={require('/assets/subs-user-flow/features.jpg').default} alt="Subscription features page" />
  <img src={require('/assets/subs-user-flow/payments.jpg').default} alt="Checkout flow" />
  <img src={require('/assets/subs-user-flow/receipt.jpg').default} alt="On-screen purchase confirmation" />
  <img src={require('/assets/subs-user-flow/one-app-subscribed.jpg').default} alt="One App page - Subscribed" />
  <img src={require('/assets/subs-user-flow/subscription-mail.jpg').default} alt="Email purchase confirmation" />
</ImageSlider>
```

### Blockquotes

Regular blockquote:
> \> text

Supported admonition types are: caution, note, important, tip, warning.

```
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
```

## Backslash Escape

Markdown allows you to use backslash escapes to generate literal characters which would otherwise have special meaning in Markdown’s formatting syntax.

\*literal asteriks\*

Markdown provides backslash escapes for the following characters:

```
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
```

### Code Blocks

Inline code has back-ticks around it. Example:

`` `getAround()` ``

And code blocks like that:

````
```js
var s = "JavaScript syntax highlighting";
alert(s);
```
````
Or:

````
```json
 { "icon": "IconMouseOver.png" }
```
````

### Tables

You can create tables by assembling a list of words and dividing them with hyphens - (for the first row), and then separating each column with a pipe | :

```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

### Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well.

However, these can introduce quite a lot of complications over time, so it is recommended to stick to markdown, if that won't work, existing react components, and only if all else fails, should you try to use raw html.

**Regardless, always close your html tags properly! Even `<br/>` tags!**

### Line Breaks

Line breaks mostly follow a simple rule: A single line break will be ignored.`\n\n`

Two or more line breaks in succession will be treated as one singular line break.`\n`
This allows you to space your original text in a way where it can easily be read by maintainers,`\n` without changing the page layout.

