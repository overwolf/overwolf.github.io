import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  isActiveSidebarItem,
  findFirstCategoryLink,
  // @ts-expect-error theme-common/internal is not properly typed
} from '@docusaurus/theme-common/internal';
import Collapse from '../../Assets/collapse.svg';
import Expand from '../../Assets/expand.svg';
import { CategorySidebarItemProps, SidebarProps } from '../../types/types';
import SidebarGrid from '..';
import { PlaceOnGrid } from '../utils';
import { useThemeConfig } from '@docusaurus/theme-common';
import OWClassNames from '@site/src/theme/OverwolfClassNames';
import SpacerItem from './spacer-item';
import clsx from 'clsx';

import useIsBrowser from '@docusaurus/useIsBrowser';
import { ActiveCategoryContext } from '../../contexts/active-context';
import SidebarLink from './utils/sidebar-link';
import SidebarLinkHook from './utils/sidebar-link-hook';
import { CollapseProvider } from '../../contexts/collapse-context';

function CategoryItem(
  props: {
    lastItem?: boolean;
    rowNumber: number;
    item: CategorySidebarItemProps;
  } & SidebarProps,
) {
  const {
    docs: {
      sidebar: { autoCollapseCategories },
    },
  } = useThemeConfig();

  const { rowNumber, item, lastItem, path, setActiveCategory } = props;
  const {
    label,
    customProps,
    collapsed: initiallyCollapsed,
    href: initialHref,
    collapsible,
    items,
  } = item;
  const { tags } = customProps;

  const isTagCategory = item.customProps.tag_category;
  const isCollapsible = !isTagCategory && collapsible;

  const categoryPath = useCategoryPath(item);
  const hrefWithFallback = useCategoryHrefWithSSRFallback(
    item,
    isCollapsible,
    categoryPath,
  );

  const itemWithFallback = useMemo(() => {
    return { ...item, href: hrefWithFallback };
  }, [item, hrefWithFallback]);

  const { collapsed, isActiveItem, isCurrentPage, isMobile, isExternalLink } =
    SidebarLinkHook(itemWithFallback, initialHref, path);

  const [explicitlyCollapsed, setExplicitlyCollapsed] = useState(
    !isCurrentPage && initiallyCollapsed,
  );

  const activeCategory = useContext(ActiveCategoryContext);

  const expanded = useMemo(
    () =>
      // If it's not collapsible, it's always expanded
      !isCollapsible ||
      // If it IS collapsible, but NOT explicitly collapsed
      (!explicitlyCollapsed &&
        // And it is the current active page, it's expanded
        (isCurrentPage ||
          // OR auto-collapse is enabled
          (autoCollapseCategories &&
            // And part the item is part of:
            // - The active item's path
            // It is expanded
            (isActiveItem ||
              // - OR the active category's path
              // It is expanded
              (isActiveSidebarItem(
                itemWithFallback,
                activeCategory,
              ) as boolean))))),
    [
      /**
       * This value only updates if one of the following is updated
       * - ActiveCategory
       * - ExplicitlyCollapsed
       * - IsCurrentPage
       * - IsActiveItem
       */
      activeCategory,
      explicitlyCollapsed,
      isCurrentPage,
      isActiveItem,
      /**
       * It DOES also check for these values (that should never change)
       * - AutoCollapseCategories (theme config)
       * - Collapsible (sidebar config)
       * - ItemWithFallback (the item being rendered)
       */
      autoCollapseCategories,
      isCollapsible,
      itemWithFallback,
    ],
  );

  // How to treat a collapse/expand interaction
  const setExpand = useCallback(
    (expand?: boolean) => {
      // If this was closed, expand it and mark it as active
      if (expand) {
        // Set the active category to the current item
        setActiveCategory(categoryPath);
      }

      /**
       * Set the explicit collapse like so:
       * - If it is already expanded, it must now be explicitly collapsed
       * - If it is currently collapsed, it must now be explicitly expanded
       */
      setExplicitlyCollapsed(!expand);
    },
    [categoryPath, setActiveCategory],
  );

  const onInteraction = () => setExpand(!expanded);

  useEffect(() => {
    if (isCurrentPage) setExpand(true);
  }, [isCurrentPage, setExpand]);

  // ---------------------------------------------------------------------------

  return (
    <>
      {isCollapsible && (
        <li
          style={PlaceOnGrid({
            rowStart: rowNumber,
            columnStart: isMobile ? 3 : 1,
          })}
        >
          <button
            title={`${expanded ? 'Collapse' : 'Expand'} ${label}`}
            // tabIndex={TabIndex(collapsed)}
            className={clsx(
              // Common Properties
              OWClassNames.common.navigateWithKeyboard,
              OWClassNames.sidebar.container.items.common.selectable,
              {
                [OWClassNames.sidebar.container.items.common.current]:
                  isCurrentPage,
                [OWClassNames.sidebar.container.items.common.hidden]: collapsed,
              },
              // Category Properties
              OWClassNames.sidebar.container.items.category.collapseCell,
            )}
            onClick={onInteraction}
          >
            {!expanded ? <Collapse /> : <Expand />}
          </button>
        </li>
      )}

      <SidebarLink
        {...{
          href: hrefWithFallback,
          collapsed,
          isActiveItem,
          isCurrentPage,
          isMobile,
          label,
          rowNumber,
          tags,
          hasIndent: !isTagCategory,
          isExternalLink,
          isTagCategory,
          onClickFallback: isCollapsible ? onInteraction : undefined,
        }}
      />

      {items && (
        <li
          style={PlaceOnGrid({
            rowStart: rowNumber + 1,
            columnStart: isTagCategory ? 1 : 2,
            columnFlex: true,
          })}
          className={OWClassNames.sidebar.container.wrapper}
        >
          <CollapseProvider collapsed={!expanded}>
            <SidebarGrid
              {...props}
              collapsed={!expanded}
              sidebar={items}
              showCaret={!isTagCategory}
            />
          </CollapseProvider>
        </li>
      )}
      {!lastItem && isTagCategory && <SpacerItem rowNumber={rowNumber + 2} />}
    </>
  );
}

export default CategoryItem;

// @docusaurus/theme-classic behavior
// ---------------------------------------------------------------------------

/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 *
 * @param {CategorySidebarItemProps} item - The referenced category item
 * @param {boolean} collapsible - Whether or not this category item can collapse
 * @param {string} ssrFallback - The SSR-complaint href fallback
 * @returns {string | undefined} Item href with fallback for SSR
 */
function useCategoryHrefWithSSRFallback(
  item: CategorySidebarItemProps,
  collapsible: boolean,
  ssrFallback: string,
): string | undefined {
  const isBrowser = useIsBrowser();
  // We only need to calculate this if the item/environment changes
  return useMemo(() => {
    // We don't need to return a fake link if the environment isn't SSR
    if (!item.href && (isBrowser || !collapsible)) {
      return undefined;
    }

    // Return the ssrfallback, which guarantees that there is a link,
    // Either href or child link
    return ssrFallback;
  }, [item, isBrowser, ssrFallback, collapsible]);
}

function useCategoryPath(item: CategorySidebarItemProps) {
  return useMemo(() => item.href ?? findFirstCategoryLink(item) ?? '#', [item]);
}
