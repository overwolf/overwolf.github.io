import { CustomPropsCategoryType } from '@site/../src/navigation/sidebar/types/customPropsCategory';
import { CustomPropsPageType } from '@site/../src/navigation/sidebar/types/customPropsPage';
import type { Props as BaseSidebarProps } from '@theme/DocSidebar';

type _SidebarProps = BaseSidebarProps;
type _SidebarItemProps = _SidebarProps['sidebar']['0'];
export type LinkSidebarItemProps = Omit<
  Extract<_SidebarItemProps, { type: 'link' }>,
  'customProps'
> & { customProps: CustomPropsPageType };

export type SidebarItemTags = LinkSidebarItemProps['customProps']['tags'];
type _CategorySidebarItemProps = Omit<
  Extract<_SidebarItemProps, { type: 'category' }>,
  'customProps'
> & { customProps: CustomPropsCategoryType };

export type HTMLSidebarItemProps = Omit<
  Extract<_SidebarItemProps, { type: 'html' }>,
  'customProps'
> & { customProps: CustomPropsPageType };

export type LinkableSidebarItemProps =
  | LinkSidebarItemProps
  | (Omit<_CategorySidebarItemProps, 'items'> & { items?: SidebarItemProps[] });

export type SidebarItemProps = LinkableSidebarItemProps | HTMLSidebarItemProps;

export type CategorySidebarItemProps = Extract<
  SidebarItemProps,
  { type: 'category' }
>;

export type SidebarProps = Omit<
  _SidebarProps,
  'sidebar' | 'isHidden' | 'onCollapse'
> & {
  sidebar: readonly SidebarItemProps[];
  setActiveCategory: (newPath: string) => void;
};
