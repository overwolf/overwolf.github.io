// loads the sidebars override file

const sidebarOverrides = require("./hierarchies/sidebaroverrides.json");

const devMode = process.env.NODE_ENV === "development";

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

function applyCustomSidebarProps(items) {
  var result = []
  items.forEach(item => {
    var customProps = undefined;
    if (customProps = item["customProps"]) {
      if(devMode && customProps["debug"]) console.log(item);
    }
    if (item.type === "category") {
      // if (item.items.length === 0 && item.link) result.push(item.link)
      var mutatedItem = { ...item, items: applyCustomSidebarProps(item.items) };

      if(customProps && customProps.versioned_items) {
        // if a is a newer version than b, we want to return a negative, otherwise a positive
        mutatedItem.items.sort((a, b) => {
          const [splitA, suffixA] = versionSplitter(a.id);
          const [splitB, suffixB] = versionSplitter(b.id);
          const larger = Math.max(splitA.length, splitB.length)
          for (var i = 0; i < larger; i++) {
            if (splitA[i] === undefined) return 1;
            if (splitB[i] === undefined) return -1;
            if (splitA[i] !== splitB[i]) return splitB[i] - splitA[i];
          }
          if (isNaN(suffixA)) return 1;
          if (isNaN(suffixB)) return -1;
          if (suffixA !== suffixB) return suffixB - suffixA;
        })
        
      }

      if (customProps && customProps.reverse_items) {
        mutatedItem.items = mutatedItem.items.reverse();
      }
      if(customProps && customProps.maximum_items) {
        if(!customProps.maximum_items.count) console.error(`Category Maximum Items \`count\` cannot be ${categoryCustoms.maximum_items.count} in item: ${{...mutatedItem, items: "Ommitted"}}`)
        const newItems = mutatedItem.items.slice(0, customProps.maximum_items.count);
        const oldItems = mutatedItem.items.slice(customProps.maximum_items.count, undefined);
        const label = customProps.maximum_items.remaining_label ? customProps.maximum_items.remaining_label : `Old ${mutatedItem.label}`;
        const oldersItem = { ...mutatedItem, items: oldItems, label};
        mutatedItem.items = newItems;
        mutatedItem.items.push(oldersItem);
      }
      if (customProps && customProps.skip_layout) {
        mutatedItem.items.forEach((item) => result.push(item))
      } else {
        result.push(mutatedItem);
      }
    } else {
      result.push(item);
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