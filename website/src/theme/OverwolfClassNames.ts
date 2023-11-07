const OWClassNames = {
  common: {
    collapsible: 'ow-theme-collapsible',
    desktopOnly: 'desktop-only',
    mobileOnly: 'mobile-only',
    navigateWithKeyboard: 'navigation-with-keyboard',
    lightTheme: 'light',
  },
  sidebar: {
    index: 'ow-theme-sidebar',
    hidden: 'hidden',
    container: {
      wrapper: 'sidebar-wrapper',
      index: 'sidebar-container',
      collapsed: 'collapsed',
      items: {
        common: {
          current: 'current',
          hidden: 'hidden',
          selectable: 'selectable',
          active: 'active',
        },
        category: {
          spacer: 'spacer',
          collapseCell: 'collapse-cell',
          showCaret: 'show-caret',
          tagCategory: 'tag-category',
        },
        link: {
          index: 'label-cell',
          fallback: 'fallback',
          link: 'link',
          label: 'label',
        },
        html: {
          index: 'html-item',
        },
      },
    },
  },
} as const;

export default OWClassNames;
