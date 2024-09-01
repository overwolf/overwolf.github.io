import { Config as ConfigType } from '@docusaurus/types';

import sidebarRootCategories from './rootSidebarCategories';
import sidebarValidator from '../navigation/sidebar/sidebarValidator';
import applySidebarTransforms from '../navigation/sidebar/sidebarTransformApplicator';
import redirects from './redirects';
import headers from './headers';
import paths from '../utils/paths';
import { WebsiteDataConfig } from 'src/plugins/website-data/types';
import metaData from './games-metadata';
import { GamesDataConfig } from 'src/plugins/games-data/types';

const devMode = process.env.NODE_ENV === 'development';

async function sidebarsOverrides({ defaultSidebarItemsGenerator, ...args }) {
  let items = await defaultSidebarItemsGenerator(args);
  if (sidebarRootCategories[args.item.dirName])
    items = [{ ...sidebarRootCategories[args.item.dirName], items }];
  return applySidebarTransforms(items.map((item) => sidebarValidator(item)));
}

const pathtoPlugins = (name: string) =>
  paths.join('../', 'lib', 'plugins', name, 'index.js');

const config = async (): Promise<Partial<ConfigType>> => ({
  title: 'Overwolf',
  tagline: 'Easily create apps for PC games on the Overwolf framework',
  noIndex: true,
  url: 'https://overwolf.github.io',
  organizationName: 'overwolf',
  projectName: 'overwolf.github.io',
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects,
      },
    ],
    [
      'docusaurus-gtm-plugin',
      {
        id: 'GTM-NQD72PT',
      },
    ],
    [
      pathtoPlugins('website-data'),
      {
        data: [
          {
            data: 'teststring',
            dataTransformer: (test) => {
              return {
                nested: test,
              };
            },
            dataKey: 'test-string',
          },
        ],
      } as WebsiteDataConfig,
    ],
    [
      pathtoPlugins('games-data'),
      {
        data: metaData,
      } as GamesDataConfig,
    ],
  ],
  scripts: devMode
    ? []
    : [
        {
          src: 'https://www.overwolf.com/system/modules/com.overwolf.store/resources/cookiebar.min.js',
          async: true,
        },
      ],
  favicon: '/img/ow-favicon.ico',
  customFields: {},
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          editUrl:
            'https://github.com/overwolf/overwolf.github.io/tree/source/pages/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarItemsGenerator: sidebarsOverrides,
        },
        theme: {
          customCss: [paths.SrcPath(paths.ProjectPath, 'css', 'style.scss')],
        },
      },
    ],
  ],
  themeConfig: {
    metadata: [
      {
        name: 'google-site-verification',
        content: 'EWs1HNaDLCjSSyCLv5WSFYAd1H2JU-yXjFjesu5nW8g',
      },
    ],
    clarity: {
      ID: 'btoodir3td',
    },
    navbar: {
      title: 'Overwolf',
      logo: {
        alt: 'Overwolf Developers',
        src: 'img/ow-logo-light.svg',
        srcDark: 'img/ow-logo-dark.svg',
      },
      items: headers,
    },
    image: 'img/embed/dev.jpg',
    algolia: {
      apiKey: 'cc7909d516aa0fbd71371ad4b3769c7e',
      indexName: 'overwolf',
      appId: '4YSGJ6Z1HG',
    },
  },
  // clientModules: [
  //   require.resolve('../src/client-modules/test-client-module.ts'),
  // ],
});

module.exports = config();
