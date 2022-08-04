## Read Me
This is the repo of the Overwolf Developers website - API Documentation, guides, etc.
This website is intended to serve as a quick reference and showcase.

**NOTE that It will be about 5 minutes before a content change takes effect**


## Reference

- [Read Me](#read-me)
- [Reference](#reference)
  - [Create a local dev environment](#create-a-local-dev-environment)
  - [Markdown cheat-sheet](#markdown-cheat-sheet)
  - [Edit an existing page](#edit-an-existing-page)
  - [Add a new page](#add-a-new-page)

### Create a local dev environment

For as long as you simply wish to edit raw page content text, you can do all of your content edits directly from the GitHub web interface.
Do mind the fact that markdown can be finnicky at times, so make sure your edits look exactly the way you want them to.

If you want to edit things more intricately, or to preview the website locally, you can follow the steps listed in [here](create-local-dev-env.md).

### Markdown cheat-sheet

You can find our markdown convention best practices cheat-sheet [here](markdown-cheat-sheet.md).

### Edit an existing page

On every page there is an "Edit this page" button on the right side of the page, as well as at the bottom of the page.

You can click on it, edit the page, and suggest the change as a pull request. The Overwolf team will then review it, and merge it if the change is deemed to be of value to readers.

### Add a new page

In order to add a new page, you should:

1. Choose where the page should fit within the website. The sidebar structure of the website directly corresponds to the file hierarchy.
2. Create a new file with the [`.mdx`](https://mdxjs.com/) file extension in the right place.  
3. Add a page ID block on the top of your page.
  An example:
  ```
  ---
  id: readme // unique identifier, the page URL. no spaces
  title: README.TXT
  sidebar_label: READ ME // try to avoid using sidebar_label, unless otherwise specified by the closest readme to your target location in the file hierarchy.
  ---
  ```
4. You can use these docs templates as a baseline for new pages:
  * [API page template](/docs-templates/api-page-template.md)
  * [Game Events page template](/docs-templates/game-events-page-template.md)