// loads the sidebars override file

const sidebarOverrides = require("./hierarchies/sidebaroverrides.json")

/* this file currently supports the following schema:

{
  // sidebars argument manipulation
  "overrides": {
    // category manipulation
    "categories": [
      {
        // category identifier, matching on the item.unversionedId, aka the raw path link
        "id": regex,
        // when used, renames items with a certain rule, using .replace
        "rename"?: {
          // regex used to match with the item's label. can utilize capture groups to avoid erasing parts of the pattern
          "matcher": regex,
          // the replace regex used to replace the items' labels
          "replacer": regexReplace "$1",
        }
        // whether or not the sidebar label should be inferred from the page title. if implicit is marked, and the sidebar has an explicit title, this returns early
        "implicit"?: bool,
        // whether or not the sidebar's title should be automatically capitalized for every word
        "capitalize"?: bool,
        // defines the length of a sidebar title that will be inferred to be an acronym. sidebar titles with this length or less are considered acronyms, and are forcefully fully capitalized
        "acronymSize"?: number,
        // defines the default sidebar position for any item that doesn't have one defined
        "defaultOrder"?: number
        // defined whether or not items matched with this `id` should have their sidebar position reversed or not
        "reverse"?: bool
        }
    ]
  }
  // generated sidebars manipulation
  "plasters": {
    // category manipulation
    "categories": [
      {
        // category identifier, matching on the item.link.id property, aka the link this category points to
        "id": regex,
        // how many layers of categories should be skipped before flattening all children. a value of 1 corresponds to item[subItem1[children...], subItem2[children...]]
        "flattenChildren"?: number,
        // should the children of this element be reversed (recursive per category). **has weird artifacts when used with flatten children, enable `sortChildren` to fix those
        "reverseChildren"?: bool,
        // should the flattened children be sorted forcefully after all their individual code is ran. sorts alphabetically by label
        "sortChildren"?: bool,
        // when used, forcefully renames sub-items with a certain rule, using .replaceAll
        "subset"?: 
        {
          // regex used to match with the item's label. runs recursively on all items contained by this category. can utilize capture groups to avoid erasing parts of the pattern
          "subsetRegex": regex,
          // the replace regex used to replace the items' labels
          "subsetRename": regexReplace
        }
      }
    ]
  }
}

*/

// @ts-check

function applyOverrides(items) {
  return items.map((item) => {
    sidebarOverrides["overrides"]["categories"].forEach(element => {
      if (id = propExists(element, "id")) {
        if (item.unversionedId.match(new RegExp(id))) {
          if (propExists(element, "flattenChildren")) {
            childID = id + `/`
            if (item.unversionedId.match(new RegExp(childID))) {
              item.frontMatter.sidebar_label += "[FLATTEN]"
            }
          }
          if ((defaultOrder = propExists(element, "defaultOrder")) === 0) {
            if (item.frontMatter.sidebar_position === undefined) {
              item.frontMatter.sidebar_position = defaultOrder
            }
          }
          if (propExists(element, "reverse")) {
            item.frontMatter.sidebar_position = -item.frontMatter.sidebar_position;
          }
          item.sidebarPosition = item.frontMatter.sidebar_position

          if(propExists(item.frontMatter, "overwolf_platform") && !item.frontMatter.sidebar_label.match(/\[OW\]/)){
            item.frontMatter.sidebar_label += "[OW]"
          }

          if (propExists(element, "implicit")) {
            if (item.frontMatter.sidebar_label != undefined) return
            item.frontMatter.sidebar_label = item.frontMatter.title
          }
          if (rename = propExists(element, "rename") && item.frontMatter.sidebar_label) {
            var matcher = rename["matcher"]
            var replacer = rename["replacer"]
            item.frontMatter.sidebar_label = item.frontMatter.sidebar_label.replace(new RegExp(matcher), replacer)
          }
          if (size = propExists(element, "acronymSize") && item.frontMatter.sidebar_label) {
            if (item.frontMatter.sidebar_label.length <= size) {
              item.frontMatter.sidebar_label = item.frontMatter.sidebar_label.toUpperCase()
            }
          }
          if (propExists(element, "capitalize") && item.frontMatter.sidebar_label) {
            item.frontMatter.sidebar_label = item.frontMatter.sidebar_label.split(/[ .-]/gm).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
          }
        }
      }
    });
    return item;
  })
}

function classNamer(customProps){
  var result = []
  if(customProps.overwolf_platform) result.push("platform")
  if(customProps.electron_platform) result.push("electron")
  return result.join(" ");
}

function applyOverridePlasters(items, flattenCount, inverted, subsetReg, subsetRename, sort) {
  var result = []
  if (flattenCount != undefined) flattenCount--
  items.forEach(item => {
    var thisInvert = inverted
    var thisFlatten = flattenCount
    var thisSubsetReg = subsetReg
    var thisSubsetRename = subsetRename
    var thisSort = sort
    if(propExists(item, "customProps")){
      var className = classNamer(item.customProps)
      if(className != "")
      {
        if(item.className) className = `${item.className} ${className}`
        item.className = className;
      } 
    }
    if (item.type === "category") {
      sidebarOverrides["plasters"]["categories"].forEach(element => {
        if (id = propExists(element, "id")) {
          if (item.link && item.link.id && item.link.id.match(new RegExp(id))) {
            if ((layers = propExists(element, "flattenChildren")) != undefined) {
              thisFlatten = layers
            }
            if (propExists(element, "reverseChildren")) {
              thisInvert = !inverted
            }
            if (propExists(element, "sortChildren")) {
              thisSort = true
            }
            if (temp = propExists(element, "subset")) {
              thisSubsetReg = temp["subsetRegex"]
              thisSubsetRename = temp["subsetRename"]
            }
          }
        }
      });
      if (thisSubsetReg && thisSubsetRename) {
        item.label = item.label.replaceAll(new RegExp(thisSubsetReg, 'g'), thisSubsetRename)
      }
      if (item.items.length === 0) result.push(item.link)
      else if (thisFlatten < 0) {
        applyOverridePlasters(item.items, thisFlatten, thisInvert, thisSubsetReg, thisSubsetRename, thisSort).forEach((item) => result.push(item))
        if (sort) {
          result = result.sort((a, b) => a.label.localeCompare(b.label))
        }
      } else {
        result.push({ ...item, items: applyOverridePlasters(item.items, thisFlatten, thisInvert, thisSubsetReg, thisSubsetRename, thisSort) })
      }
    } else result.push(item)
  })
  return inverted ? result.reverse() : result
}

async function sidebarsOverrides({ defaultSidebarItemsGenerator, ...args }) {
  // if (item = propExists(args, "item")) {
  //   if ((dirName = propExists(item, "dirName")) && (type = propExists(item, "type")) && (type === "autogenerated")) {
  //     if (docs = propExists(args, "docs")) {
  //       args["docs"] = applyOverrides(docs, dirName);
  //     }
  //   }
  // }
  let x = await defaultSidebarItemsGenerator(args);
  return x;
  // return applyOverridePlasters(x, undefined, false, undefined, undefined, false)
}

function propExists(object, prop) {
  return object.hasOwnProperty(prop) ? object[prop] : undefined
}

const codeComponentTagger = require("./src/plugins/tagging/codeComponentTagger.js").default;

/** @type {import('@docusaurus/types').Config} */
async function config() {

  return {
    title: "Overwolf",
    tagline: "Easily create apps for PC games on the Overwolf framework",
    url: "https://overwolf.github.io",
    baseUrl: "/",
    trailingSlash: false,
    organizationName: "overwolf",
    projectName: "overwolf.github.io",
    deploymentBranch: 'gh-pages',
    scripts: [

    ],
    stylesheets: [
      "https://fonts.googleapis.com/css?family=Lato%3A400%2C400i%2C700%2C900&ver=4.5.3",
    ],
    favicon: "/img/ow-favicon.ico",
    customFields: {
      wrapPagesHTML: true,
      homepage_title: "The Developers Site",
      markdownPlugins: [
        null
      ],
      users: [
        {
          caption: "User1",
          image: "/img/overwolf-logo_300x240.svg",
          infoLink: "https://www.overwolf.com",
          pinned: true
        }
      ],
      separateCss: [
        "/html/submission-form/style.css",
        "/html/submission-form/select2.css"
      ]
    },
    onBrokenLinks: "log",
    onBrokenMarkdownLinks: "log",
    plugins: ['docusaurus-plugin-sass', 'docusaurus-plugin-clarity', ['@docusaurus/plugin-client-redirects',
      {
        redirects: require('./hierarchies/redirects.json')
      }],
      [
        require.resolve('docusaurus-gtm-plugin'),
        {
          id: 'GTM-NQD72PT',
        }
      ]],
    presets: [
      [
        "@docusaurus/preset-classic",
        {
          docs: {
            remarkPlugins: [codeComponentTagger],
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
            editUrl: "https://github.com/overwolf/overwolf.github.io/tree/source/website/",
            path: "pages/docs",
            routeBasePath: "/",
            sidebarPath: require.resolve("./hierarchies/sidebars.js"),
            sidebarItemsGenerator: sidebarsOverrides,
            sidebarCollapsible: true,
            sidebarCollapsed: true
          },
          blog: {},
          theme: {
            customCss: [require.resolve('./src/css/style.scss')],
          },
          googleAnalytics: {
            trackingID: "UA-144253676-1"
          },
        },
      ]
    ],
    themeConfig: {
      docs: {
        sidebar: {
          autoCollapseCategories: true
        }
      },
      metadata: [
        {
          name: "google-site-verification",
          content: "EWs1HNaDLCjSSyCLv5WSFYAd1H2JU-yXjFjesu5nW8g"
        }
      ],
      clarity: {
        ID: "btoodir3td",
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        style: "dark",
        title: "Overwolf",
        logo: {
          src: "img/header-icon.svg"
        },
        items: require('./hierarchies/headers.json')
      },
      image: "img/embed/dev.jpg",
      footer: {
        style: "dark",
        links: require('./hierarchies/footer.json'),
        copyright: "<div class='c-inner'><p>Copyright © 2022 Overwolf</p></div>",
        logo: {
          src: "/img/ow-footer.svg"
        }
      },
      prism: {
        additionalLanguages: ['powershell'],
      },
      algolia: {
        apiKey: 'cc7909d516aa0fbd71371ad4b3769c7e',
        indexName: 'overwolf',
        appId: '4YSGJ6Z1HG',
        contextualSearch: true,
        algoliaOptions: {}
      }
    }
  }
}

module.exports = config();