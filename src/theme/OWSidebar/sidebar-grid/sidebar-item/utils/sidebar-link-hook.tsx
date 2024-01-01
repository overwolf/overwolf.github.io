import { useContext } from 'react';
import {
  isActiveSidebarItem,
  isSamePath,
  // @ts-expect-error theme-common/internal is not properly typed
} from '@docusaurus/theme-common/internal';
import isInternalUrl from '@docusaurus/isInternalUrl';
import { CollapseContext } from '../../../contexts/collapse-context';
import { LinkableSidebarItemProps } from '../../../types/types';
import { IsMobileContext } from '@site/../src/components/contexts/is-mobile-context';

export default function SidebarLinkHook(
  item: LinkableSidebarItemProps,
  initialHref: string,
  path: string,
): {
  /** Is this running within a mobile sidebar context */
  isMobile: boolean;
  /** Is this currently contained within a collapsed context */
  collapsed: boolean;
  /** Is this a parent of the current page */
  isActiveItem: boolean;
  /** Is this the current page */
  isCurrentPage: boolean;
  /** Is this a link that leads outside the local website? */
  isExternalLink: boolean;
} {
  return {
    /** Is this running within a mobile sidebar context */
    isMobile: useContext(IsMobileContext),
    /** Is this currently contained within a collapsed context */
    collapsed: useContext(CollapseContext),
    /** Is this a parent of the current page */
    isActiveItem: isActiveSidebarItem(item, path),
    /** Is this the current page */
    isCurrentPage: isSamePath(initialHref, path),
    /** Is this a link that leads outside the local website? */
    isExternalLink: !(initialHref ? isInternalUrl(initialHref) : true),
  };
}
