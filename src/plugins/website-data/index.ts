import type { LoadContext, Plugin } from '@docusaurus/types';
import { DataConfig, WebsiteDataConfig } from './types';
import { PluginBase, PluginBaseAlias, PluginBaseTheme } from '../_base/index';
import fs from 'fs';

/**
 * Looselesy based on @docusaurus/theme-search-algolia
 *
 * @see https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-theme-search-algolia/src/index.ts
 */

export default function themeSearchAlgolia(
  context: LoadContext,
  options: WebsiteDataConfig,
): Plugin<DataConfig[]> {
  const { data } = options;

  const name = 'website-data';
  return {
    ...PluginBase(name),
    ...PluginBaseAlias(name, context),
    ...PluginBaseTheme(),

    loadContent() {
      return data.map((entry: DataConfig, index: number) => {
        if (entry.srcPath) {
          if (entry.data)
            throw Error(`Entry cannot have data AND a path at the same time!
              Index: ${index}
              Path: ${entry.srcPath}
              Data: ${JSON.stringify(entry.data)}`);

          entry.data = (entry.dataTransformer ?? JSON.parse)(
            fs.readFileSync(entry.srcPath, 'utf-8'),
          );

          return entry;
        }

        if (entry.dataTransformer)
          entry.data = entry.dataTransformer(entry.data);
        return entry;
      });
    },

    contentLoaded({ content, actions: { createData } }) {
      content.map(async (entry) => {
        const result =
          entry.dataKey &&
          createData(
            entry.dataKey,
            typeof entry.data !== 'string'
              ? JSON.stringify(entry.data, undefined, 4)
              : entry.data,
          );
        return result;
      });
    },

    postBuild() {},
  };
}
