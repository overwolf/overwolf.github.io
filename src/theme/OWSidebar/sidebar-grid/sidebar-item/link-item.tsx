import React from 'react';
import { LinkSidebarItemProps, SidebarProps } from '../../types/types';
import SidebarLink from './utils/sidebar-link';
import SidebarLinkHook from './utils/sidebar-link-hook';

function LinkItem(
  props: {
    rowNumber: number;
    item: LinkSidebarItemProps;
  } & SidebarProps,
) {
  const { rowNumber, item, path } = props;

  const { href, label, customProps } = item;
  const { tags } = customProps;
  const { collapsed, isActiveItem, isCurrentPage, isMobile, isExternalLink } =
    SidebarLinkHook(item, href, path);

  // ---------------------------------------------------------------------------

  return (
    <SidebarLink
      {...{
        collapsed,
        href,
        isActiveItem,
        isCurrentPage,
        label,
        isMobile,
        rowNumber,
        tags,
        isExternalLink,
      }}
    />
  );
}

export default LinkItem;
