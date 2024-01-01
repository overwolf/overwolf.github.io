import type { LoadContext, Plugin } from '@docusaurus/types';
import path from 'path';

export const pluginName = (name: string) => `overwolf-${name}`;
export const pluginAlias = (name: string) => `~${name}`;

export function PluginBase<Data>(name: string): Plugin<Data> {
  return {
    name: pluginName(name),
  };
}

export function PluginBaseAlias<Data>(
  name: string,
  { generatedFilesDir }: LoadContext,
): Partial<Plugin<Data>> {
  return {
    configureWebpack() {
      return {
        resolve: {
          alias: {
            [pluginAlias(name)]: path.join(
              generatedFilesDir,
              pluginName(name),
              'default',
            ),
          },
        },
      };
    },
  };
}

export function PluginBaseTheme<Data>(): Partial<Plugin<Data>> {
  return {
    getThemePath() {
      return './theme';
    },
    getTypeScriptThemePath() {
      return './theme';
    },
  };
}
