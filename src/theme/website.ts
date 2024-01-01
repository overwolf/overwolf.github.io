import type { LoadContext, Plugin } from '@docusaurus/types';
import paths from '../utils/paths';

/**
 * Looselesy based on @docusaurus/theme-search-algolia
 *
 * @see https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-theme-search-algolia/src/index.ts
 */

export default function themeSearchAlgolia(context: LoadContext): Plugin<void> {
  const {
    baseUrl,
    siteConfig: { title, url, favicon, themeConfig },
    i18n: { currentLocale },
  } = context;

  return {
    name: 'overwolf-theme-documentation-website',

    getThemePath() {
      return paths.SrcPath(paths.ProjectPath, 'theme');
    },
    getTypeScriptThemePath() {
      return paths.SrcPath(paths.ProjectPath, 'theme');
    },

    contentLoaded({ actions: { addRoute } }) {
      addRoute({
        path: '/',
        component: paths.SrcPath(paths.ProjectPath, 'pages', 'index.tsx'),
        exact: true,
      });
    },

    // async postBuild({ outDir }) {
    //   if (searchPagePath) {
    //     const siteUrl = normalizeUrl([url, baseUrl]);

    //     try {
    //       await fs.writeFile(
    //         path.join(outDir, OPEN_SEARCH_FILENAME),
    //         renderOpenSearchTemplate({
    //           title,
    //           siteUrl,
    //           searchUrl: normalizeUrl([siteUrl, searchPagePath]),
    //           faviconUrl: favicon ? normalizeUrl([siteUrl, favicon]) : null,
    //         }),
    //       );
    //     } catch (err) {
    //       logger.error('Generating OpenSearch file failed.');
    //       throw err;
    //     }
    //   }
    // },

    // injectHtmlTags() {
    //   if (!searchPagePath) {
    //     return {};
    //   }

    //   return {
    //     headTags: [
    //       {
    //         tagName: 'link',
    //         attributes: {
    //           rel: 'search',
    //           type: 'application/opensearchdescription+xml',
    //           title,
    //           href: normalizeUrl([baseUrl, OPEN_SEARCH_FILENAME]),
    //         },
    //       },
    //     ],
    //   };
    // },
  };
}
