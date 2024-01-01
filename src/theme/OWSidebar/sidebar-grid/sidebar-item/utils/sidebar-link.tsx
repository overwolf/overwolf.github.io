import React from 'react';
import {
  LinkableSidebarItemProps,
  SidebarItemTags,
} from '../../../types/types';
import { PlaceOnGrid } from '../../utils';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import OWClassNames from '@site/../src/theme/OverwolfClassNames';
import IconExternalLink from '@theme/Icon/ExternalLink';
import PageTag from '@site/../src/components/page-tag/PageTag';

function SidebarLink(props: {
  rowNumber: number;
  isMobile: boolean;
  label: string;
  href: string;
  tags: LinkableSidebarItemProps['customProps']['tags'];
  isActiveItem: boolean;
  isCurrentPage: boolean;
  collapsed: boolean;
  isTagCategory?: boolean;
  isExternalLink?: boolean;
  hasIndent?: boolean;
  onClickFallback?: () => void;
}) {
  const {
    rowNumber,
    isMobile,
    label,
    href,
    tags,
    isActiveItem,
    isCurrentPage,
    collapsed,
    isTagCategory = false,
    isExternalLink = false,
    hasIndent = true,
    onClickFallback,
  } = props;

  const useFallback = !href && !!onClickFallback;
  const focusable = !useFallback && !!href;
  // ---------------------------------------------------------------------------

  return (
    <li
      className={clsx(
        // Common properties
        {
          [OWClassNames.sidebar.container.items.common.selectable]:
            href || useFallback,
          [OWClassNames.sidebar.container.items.common.current]: isCurrentPage,
          [OWClassNames.sidebar.container.items.common.hidden]: collapsed,
          [OWClassNames.sidebar.container.items.common.active]: isActiveItem,
        },
        // Link properties
        OWClassNames.sidebar.container.items.link.index,
        {
          [OWClassNames.sidebar.container.items.link.link]: href,
          [OWClassNames.sidebar.container.items.link.label]: !href,
        },
        // Category properties
        {
          [OWClassNames.sidebar.container.items.category.tagCategory]:
            isTagCategory,
        },
      )}
      style={PlaceOnGrid({
        rowStart: rowNumber,
        columnStart: hasIndent ? 2 : 1,
        columnFlex: !isMobile, // If this is on desktop, stretch to fill the row
        columnEnd: 2, // Regardless of flex, fall back to end on column 2
      })}
    >
      <Link
        href={href}
        className={clsx({
          [OWClassNames.common.navigateWithKeyboard]: focusable,
          [OWClassNames.sidebar.container.items.link.fallback]: useFallback,
        })}
        onClick={useFallback ? onClickFallback : undefined}
      >
        {label}
        <PageTag {...(tags as SidebarItemTags)} />
        {isExternalLink && <IconExternalLink />}
      </Link>
    </li>
  );
}

export default SidebarLink;
