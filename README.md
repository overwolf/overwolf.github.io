## Read Me
This is the repo of the Overwolf Developers website - API Documentation, guides, etc.
This is intended as a quick reference and showcase.

**NOTE that  It will be about 2 minutes before a content change takes effect**

## Reference

* [Search box configuration](search-configuration)
* [Markdown cheet-sheet](markdown-cheet-sheet)
* [Create local dev environmen](ceate-local-dev-environment)
* [Edit an existing page](edit-an-existing-page)
* [Add a new page](add-a-new-page)
* [Add a new game events status page](add-a-new-game-events-status-page)

### Search configuration

* Your search onfiguration can be configured through the [DocSearch file](https://github.com/algolia/docsearch-configs/blob/master/configs/overwolf.json) in the Algolia GitHub repository.  
  Please open a pull request if you want to leverage our Docusaurus search configuration.
* To customize the look and feel of the search box follow the [DocSearch documentation](https://community.algolia.com/docsearch/styling.html).

### Markdown cheet-sheet

You can find our markdown cheet-sheet [here](markdown-cheat-sheet.md).

### Create local dev environment

Basically you can do all the Docusaurus content edits directly from the GitHub web interface.
But if you want to install a local version of the site, you can find all the details [here](create-local-dev-env.md).

### Edit an existing page

On every page there is an "Edit" button on the right side of the page.

You can click on it, edit the page, and suggest the change as a pull request. The Overwolf team will review it, and merge it after confirmation.

### Add a new page

In order to add a new page, you should:

1. Create a new file with a `md` (markdown) extension.  
  Make sure to add it in the right section/folder (api, support, getting-started etc).
  
2. Add a page ID block on the top of your page.
  An example:
  
  ```
  ---
  id: dev-console-update //unique identifier, the page URL. no spaces
  title: this is the main page header
  sidebar_label:  this is the menu title
  ---
  ```
3. Add the new page ID as a new entry in the [website\sidebars.json](website/sidebars.json) file.  
  make sure to add it in the right location.
  You can use these docs template as a baseline for new pages:
  * [API page tempalte](/docs-templates/api-page-template.md)
  * [Game Events page template](/docs-templates/game-events-page-template.md)

### Add a new game events status page

In order to list a game in the [game events status page](/docs/status/all), you should follow these steps:

1. Create new MD file in this folder. For example: `\docs\status\teamfight-tactics.md`.  
   The template should be like the other files in that folder. Don't forget to change the GameID.
   
2. Add the new page to the site menu: `website\sidebars.json`.  
   You should place it under `Service\Games Events Status` section. 
   
3. Open the file `website\static\js\games_metadata.js` and add a record for the new file that you just created.
