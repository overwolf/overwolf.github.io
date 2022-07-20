function reverseChangelogs(items) {
  const result = items.map((item) => {
    if (item.type === 'category') {
      return { ...item, items: reverseChangelogs(item.items) }
    }
    return item;
  });
  result.reverse();
  return result;
}


function enforceSingleSidebars(items) {
  const result = items.map((item) => {
    if (item.type === 'category') {
      if(item.label == "Changelogs"){
        const perYear = item.items.map(element => {
          if(element.type === 'category'){
            const totalItems = []
            element.items.forEach(inner => {
              inner.items.forEach(innerinner => {
                totalItems.push(innerinner)
              })
            })
            return {...element, items: totalItems }
          }
          return element
        });
        return { ...item, items: reverseChangelogs(perYear)}
      }
      if(item.label == "versions"){
        return { ...item, items: reverseChangelogs(item.items) }
      }
      if (item.label.charAt(0).toUpperCase() != item.label.charAt(0) && !item.label.startsWith("overwolf.")) {
        const name = item.label;
        const words = name.split("-").map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1)
        })
        item.label = words.join(" ");
      }
      if (item.items.length === 0)
        return item.link;
      else
        return { ...item, items: enforceSingleSidebars(item.items) }
    }
    return item;
  });
  return result;
}

async function sidebarsOverrides({ defaultSidebarItemsGenerator, ...args }) {
  const sidebarItems = await defaultSidebarItemsGenerator(args);
  return enforceSingleSidebars(sidebarItems);
}

module.exports = {
  title: "Overwolf",
  tagline: "Easily create apps for PC games on the Overwolf framework",
  url: "https://overwolf.github.io",
  baseUrl: "/",
  trailingSlash: false,
  organizationName: "overwolf",
  projectName: "overwolf.github.io",
  deploymentBranch: 'gh-pages',
  scripts: [
    // "https://content.overwolf.com/prodemo/docusaurus/games_metadata.js",
    // "js/darkMode.js",
    // "https://code.jquery.com/jquery-1.11.0.min.js",
    // "https://code.jquery.com/jquery-migrate-1.2.1.min.js",
    // "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
    // "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js",
    // "https://buttons.github.io/buttons.js",
    // "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    // "https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js",
    // "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js",
    // "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
    // "https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.8.0/js/jquery.overlayScrollbars.min.js",
    // "https://d10lpsik1i8c69.cloudfront.net/w.js",
    // "js/code-block-buttons.js",
    // "js/onload.js",
    // "js/slicker.js",
    // "js/replaceArrow.js",
    // "js/appendUpdate.js",
    // "js/overlayScrollbars.js",
    // "js/highlight.js",
    // "js/luckyorange.js"
  ],
  stylesheets: [
    // "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/atelier-cave-dark.min.css",
    "https://fonts.googleapis.com/css?family=Lato%3A400%2C400i%2C700%2C900&ver=4.5.3",
    // "https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css",
    // "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css",
    // "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
    // "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css",
    // "https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.8.0/css/OverlayScrollbars.min.css",
    // "/css/code-block-buttons.css"
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
    }], [
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
    image: "/img/ow_share_new.png",
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
      contextualSearch: false,
      algoliaOptions: {}
    }
  }
}
