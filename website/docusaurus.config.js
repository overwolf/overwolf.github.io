// loads the sidebars override file

const sidebarOverrides = require("./hierarchies/sidebaroverrides.json");

// @ts-check

function classNamer(curName, customProps){
  var result = []
  if(curName) result.push(curName);
  if(customProps.overwolf_platform) result.push("platform")
  if(customProps.electron_platform) result.push("electron")
  return result.join(" ");
}

function applyCustomSidebarProps(items) {
  var result = []
  items.forEach(item => {
    var hideLayout = false;
    var reverse = false;
    var customProps = undefined;
    if(customProps = propExists(item, "customProps")){
      hideLayout = propExists(customProps, "skip_layout");
      reverse = propExists(customProps, "reverse_items");
      // var className = classNamer(item.customProps)
      // if(className != "")
      // {
      //   if(item.className) className = `${item.className} ${className}`
      //   item.className = className;
      // } 
    }
    if (item.type === "category") {
      // if (item.items.length === 0 && item.link) result.push(item.link)
      if (hideLayout) {
        applyCustomSidebarProps(item.items).forEach((item) => result.push(item))
      } else {
        var mutatedItem = { ...item, items: applyCustomSidebarProps(item.items) };
        if(reverse) mutatedItem.items = mutatedItem.items.reverse();
        result.push(mutatedItem)
      }
    } else result.push(item)
  })
  return result;
}

async function sidebarsOverrides({ defaultSidebarItemsGenerator, ...args }) {
  let items = await defaultSidebarItemsGenerator(args);
  return applyCustomSidebarProps(items);
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