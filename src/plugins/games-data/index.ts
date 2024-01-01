import type { LoadContext, Plugin } from '@docusaurus/types';
import { PluginBase, PluginBaseAlias, PluginBaseTheme } from '../_base/index';
import { GamesDataConfig, GamesMetaData } from './types';
import fs from 'fs';
import paths from '../../utils/paths';

/**
 * Looselesy based on @docusaurus/theme-search-algolia
 *
 * @see https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-theme-search-algolia/src/index.ts
 */

export default function themeSearchAlgolia(
  context: LoadContext,
  options: GamesDataConfig,
): Plugin<GamesMetaData> {
  const {
    generatedFilesDir, // .docusaurus/
    baseUrl,
    siteConfig: { title, url, favicon, themeConfig },
    i18n: { currentLocale },
    outDir, // build/ (for adding stuff to the build output)
  } = context;
  const { data } = options;

  const name = 'games-data';
  return {
    ...PluginBase(name),
    ...PluginBaseAlias(name, context),
    ...PluginBaseTheme(),

    loadContent() {
      return data;
    },

    contentLoaded({ content, actions: { createData } }) {
      createData('game-data.json', JSON.stringify(content, undefined, 4));
    },

    postBuild({ content }) {
      const buildPath = context.outDir;
      fs.writeFileSync(
        paths.join(buildPath, 'data', 'supported-games.js'),
        `const GamesMetaData = ${JSON.stringify(
          content,
          undefined,
          2,
        )}\n\nconsole.log('GamesMetaData is loaded locally');`,
        'utf-8',
      );
    },
  };
}
