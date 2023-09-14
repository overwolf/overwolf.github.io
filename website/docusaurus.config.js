const devMode = process.env.NODE_ENV === "development";



// @ts-check

// function classNamer(curName, customProps) {
//   var result = []
//   if (curName) result.push(curName);
//   if (customProps.overwolf_platform) result.push("platform")
//   if (customProps.electron_platform) result.push("electron")
//   return result.join(" ");
// }

const sidebarRootCategories = require('./hierarchies/rootSidebarCategories');
const sidebarValidator = require("./typescript/build/website/src/navigation/sidebar/sidebarValidator.js").default;
const applySidebarTransforms = require("./typescript/build/website/src/navigation/sidebar/sidebarTransformApplicator.js").default;

async function sidebarsOverrides({ defaultSidebarItemsGenerator, ...args }) {
  // if(args.length === undefined) console.log(
  //   Object.keys(args),
  //   args.item,
  //   // args.docs.find((item) => item.id === `${args.item.dirName}/${args.item.dirName}`),
  //   args.docs.find((item) => item.id.endsWith('index')));
  let items = await defaultSidebarItemsGenerator(args);
  // console.log(items.map((item) => `${item.label}|${item.id}|${item.type}|${JSON.stringify(item.customProps)}`));
  // console.log(args);
  if(sidebarRootCategories[args.item.dirName]) items = [{...sidebarRootCategories[args.item.dirName], items: items}]
  return applySidebarTransforms(items.map((item) => sidebarValidator(item)));
}

const codeComponentTagger = require("./typescript/build/website/src/plugins/tagging/codeComponentTagger.js").default;
const displayJSON = require("./typescript/build/website/src/components/display-json/mdx/displayJSON.js").default;

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
            remarkPlugins: [codeComponentTagger, displayJSON],
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
    },
    clientModules: [
      // require.resolve('./src/client-modules/test-client-module.ts')
    ]
  }
}

module.exports = config();