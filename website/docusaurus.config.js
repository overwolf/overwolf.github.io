module.exports={
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
  favicon: "img/ow-favicon.ico",
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
  plugins: ['docusaurus-plugin-sass', 'docusaurus-plugin-clarity'],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: "https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/",
          path: "pages/docs",
          sidebarPath: "sidebars.json",
        },
        blog: {},
        theme: {
          customCss: [require.resolve('./src/css/style.scss')],
        },
        googleAnalytics: {
          trackingID: "UA-144253676-1"
        }
      }
    ]
  ],
  themeConfig: {
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
        src: "img/headerIcon.svg"
      },
      items: [
        {
          to: "docs/start/getting-started",
          label: "Getting Started",
          position: "left"
        },
        {
          to: "docs/topics/best-practices-overview",
          label: "Docs",
          position: "left"
        },
        {
          to: "docs/api/overwolf-api-overview",
          label: "API",
          position: "left"
        },
        {
          to: "docs/status/all",
          label: "Events Status",
          position: "left"
        },
        {
          href: "https://medium.com/overwolf",
          label: "Blog",
          position: "left"
        },
        {
          href: "https://discuss.overwolf.com/",
          label: "Q&A",
          position: "left"
        },
        {
          to: "docs/support/contact-us",
          label: "Support",
          position: "left"
        }
      ]
    },
    image: "img/ow_share_new.png",
    footer: {
      style: "dark",
      links: [
        {
          title: "Legal",
          items: [
            {
              label: 'Terms Overview',
              to: '/docs/topics/legal-overview'
            },
            {
              label: 'Developer\'s Terms',
              to: '/docs/topics/legal-developers-terms'
            },
            {
              label: 'App Terms',
              to: '/docs/topics/legal-app-terms'
            },
            {
              label: 'Overwolf Terms',
              to: 'http://www.overwolf.com/legal/'
            },
            {
              label: 'Overwolf Privacy Policy',
              to: 'http://www.overwolf.com/legal/#Privacy-policy'
            },
          ]
        },
        {
          title: "Support",
          items: [
            {
              label: 'Questions and Answers',
              to: 'https://discuss.overwolf.com/'
            },
            {
              label: 'Discord',
              to: 'https://discord.gg/overwolf-developers'
            },
            {
              label: 'Slack',
              to: '/docs/support/contact-us#join-our-slack'
            },
            {
              label: 'Facebook',
              to: 'https://www.facebook.com/OverwolfDevs'
            },
            {
              label: 'Twitter',
              to: 'https://twitter.com/OverwolfDevs'
            },
          ]
        },
        {
          title: "Documentation",
          items: [
            {
              label: 'Changelog',
              to: '/docs/api/changelog'
            },
            {
              label: 'API',
              to: '/docs/api/overwolf-api-overview'
            },
            {
              label: 'App Creation Process',
              to: '/docs/start/app-creation-process'
            },
            {
              label: 'Best Practices',
              to: '/docs/topics/best-practices-overview'
            },
            {
              label: 'Game Events Status',
              to: '/docs/topics/best-practices-overview'
            },
          ]
        },
        {
          title: "Information",
          items: [
            {
              label: 'Careers',
              to: 'http://www.overwolf.com/careers/'
            },
            {
              label: 'Fund',
              to: 'https://overwolf.com/fund'
            },
            {
              label: 'Developers Blog',
              to: 'https://medium.com/overwolf'
            },
            {
              label: 'Overwolf Appstore',
              to: 'https://www.overwolf.com/appstore'
            },
            {
              label: 'Advertise on Overwolf',
              to: 'https://brands.overwolf.com/'
            },
          ]
        },
      ],
      copyright: "<div class='c-inner'><p>Copyright © 2022 Overwolf</p></div>",
      logo: {
        src: "img/ow-footer.svg"
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
