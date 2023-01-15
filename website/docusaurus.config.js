// loads the sidebars override file

const sidebarOverrides = require("./hierarchies/sidebaroverrides.json");

const devMode = process.env.NODE_ENV === "development";
const mandatorySidebarKeys = [
  "overwolf_platform",
  "electron_platform"
]

const defaultMandatorySidebarValues = {
  overwolf_platform: false,
  electron_platform: false
}

// @ts-check

function classNamer(curName, customProps) {
  var result = []
  if (curName) result.push(curName);
  if (customProps.overwolf_platform) result.push("platform")
  if (customProps.electron_platform) result.push("electron")
  return result.join(" ");
}

function versionSplitter(version) {
  var suffix;
  version = version.split("/").pop()
  if (version.startsWith('v')) version = version.substring(1, undefined);
  [version, suffix] = version.split("-");
  return [version.split('.').map((number) => parseInt(number)), parseInt(suffix)];
}

function sumOnAllChildren(value, items, callback) {
  items.forEach(element => {
    value = callback(value, element);
  });
  return value;
}

function applyCustomSidebarProps(items) {
  var result = []
  items.forEach(mainItem => {
    // ensure we have custom props
    if (!mainItem["customProps"]) mainItem["customProps"] = {}
    // run general cleanup logic assuming we already had it (if we just populated it then these would be irrelevant)
    else {
      if (mainItem.customProps["debug"]) {
        if (devMode) console.log(mainItem);
        else {
          console.error(`Tried building item with sidebar debug enabled: ${mainItem}`);
          delete mainItem.customProps["debug"];
        }
      }
      delete mainItem.customProps["placeholder"];
    }

    // is this a category?
    if (mainItem.type === "category") {
      // this is a relic for taking a sidebar item OUT of a 2 (or more) deep category with just that one item (aka {{item}}), since docusaurus will not render it by default
      // it's kept here in case this behavior is needed again
      // if (item.items.length === 0 && item.link) result.push(item.link)

      // apply custom props on all child elements before we continue
      mainItem = { ...mainItem, items: applyCustomSidebarProps(mainItem.items) };

      // ensure all mandatory sidebar flags are summed from the children (ie. relevant platforms)
      mandatorySidebarKeys.forEach(
        (field) => mainItem.customProps[field] = sumOnAllChildren(
          defaultMandatorySidebarValues[field],
          mainItem.items,
          (value, item) => value || item.customProps[field]
        )
      )

      /**
       * apply version-based item sorting on the page ids. it works based on the following:
       * (v)?a.b.c.[...]-z
       * in more words - first it removes the leading v (if it exists) from the version id
       * then, it splits all items between the dots (major.minor.patch.etc), and sorts from major down
       * if all of those match, then the version is checked based on a suffix (added as -suffix to the end of the version)
       */
      if(mainItem.customProps?.versioned_items) {
        // if `a` is a newer version than `b`, we want to return a negative, otherwise a positive
        mainItem.items.sort((a, b) => {
          const [splitA, suffixA] = versionSplitter(a.id);
          const [splitB, suffixB] = versionSplitter(b.id);
          const larger = Math.max(splitA.length, splitB.length)
          for (var i = 0; i < larger; i++) {
            if (splitA[i] === undefined || isNaN(splitA[i])) return 1;
            if (splitB[i] === undefined || isNaN(splitB[i])) return -1;
            if (splitA[i] !== splitB[i]) return splitB[i] - splitA[i];
          }
          if (isNaN(suffixA)) return 1;
          if (isNaN(suffixB)) return -1;
          if (suffixA !== suffixB) return suffixB - suffixA;
        })
      }

      // apply reversing-based item sorting
      if (mainItem.customProps?.reverse_items) {
        mainItem.items = mainItem.items.reverse();
      }

      // apply a "maximum items" filter, creating a "fake" sidebar item for "viewing more" items (aka "only show the first 20 items in the main sidebar, and show the rest under 'see more'")
      if(mainItem.customProps?.maximum_items) {
        if(!mainItem.customProps.maximum_items.count) console.error(`Category Maximum Items \`count\` cannot be ${categoryCustoms.maximum_items.count} in item: ${{...mainItem, items: `Ommitted ${mainItem.items.length} items`}}`)
        const newItems = mainItem.items.slice(0, mainItem.customProps.maximum_items.count);
        const oldItems = mainItem.items.slice(mainItem.customProps.maximum_items.count, undefined);
        const label = mainItem.customProps.maximum_items.remaining_label ? mainItem.customProps.maximum_items.remaining_label : `Old ${mainItem.label}`;
        const oldersItem = { ...mainItem, items: oldItems, label};
        mainItem.items = newItems;
        mainItem.items.push(oldersItem);
      }

      // apply layout skipping (aka flattening the item's items into its parent)
      if (mainItem.customProps?.skip_layout) {
        mainItem.items.forEach((childItem) => result.push(childItem))
      }
      // if flattening wasn't applied, apply the item itself into its parent
      else {
        result.push(mainItem);
      }
    }
    // is this not a category?
    else {
      // apply the item as is
      result.push(mainItem);
    }

    // run final custom props validation
    if((!mainItem.customProps && mandatorySidebarKeys.length > 0) || (mainItem.customProps && mandatorySidebarKeys.filter((value) => mainItem.customProps[value] === undefined).length > 0)) {
      console.log(`The following sidebar item is missing one of the ${mandatorySidebarKeys} keys:`);
      console.error(mainItem);
    }
  })
  return result;
}

async function sidebarsOverrides({ defaultSidebarItemsGenerator, ...args }) {
  let items = await defaultSidebarItemsGenerator(args);
  return applyCustomSidebarProps(items);
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
    scripts: devMode ? [] : [
      {
        src: 'https://www.overwolf.com/system/modules/com.overwolf.store/resources/cookiebar.min.js',
        async: true,
      },
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
      ],
    ],
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
          alt: "Overwolf Developers",
          src: "img/ow-logo-light.svg",
          srcDark: 'img/ow-logo-dark.svg',
        },
        items: require('./hierarchies/headers.json')
      },
      image: "img/embed/dev.jpg",
      // footer: {
      //   style: "dark",
      //   links: require('./hierarchies/footer.json'),
      //   copyright: "<div class='c-inner'><p>Copyright © 2022 Overwolf</p></div>",
      //   logo: {
      //     src: "/img/ow-footer.svg"
      //   }
      // },
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