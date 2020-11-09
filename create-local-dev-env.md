### Prerequisite  

All the programs are free to use:

1. Install [Git](https://git-scm.com/downloads)
2. Install [node.js](https://nodejs.org/en/)
3. Install [yarn](https://yarnpkg.com/lang/en/docs/install/)
4. Install [VS Code](https://code.visualstudio.com/)

### Create a local copy of the site on your machine

1. Open VS Code ==> Ctrl+Shift+P, choose => Clone remote GitHub repo.
2. Set the github repo to clone: https://github.com/overwolf/overwolf.github.io.git
3. Choose local folder to clone to. For example: "d:\dev-site".

### Install Docusaurus locally

1. open the terminal in VS Code.
2. `cd .\website` - change directory to the website directory.
3. `yarn install` - install all the required packages. (in case of an error read the note below). 
4. `yarn start` - start the docusaurus app locally. That will automatically open your default browser with the local copy of the site.

**Note: if your VS Code terminal not recognize yarn or npm**, open a CMD and run these commands, that make sure that these programs installed globally and will be recognized by VS Code: 

```
> npm install -g yarn
> npm install -g npm
```

When done, restart VS Code and try again.

### Day to day workflow

#### Community members:

1. Open VS Code.
2. get the latest version from remote.
3. Work on your files. Do changes.
4. At EOD, `commit` changes (to local repo), and create Pull Request to the `source` branch.

#### If you have write permissions to the repo: (OW employees)

1. Open VS Code.
2. Click on the `sync` button. That will sync the local repo with the remote. (push and pull).
3. Work on your files. Do changes.
4. At EOD, `commit` changes (to local repo), and that hit `sync` button again.
