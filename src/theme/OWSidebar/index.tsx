import React, { useContext, useEffect, useRef, useState } from 'react';
import './style.scss';
import SidebarGrid from './sidebar-grid';
import OWClassNames from '../OverwolfClassNames';
import { SidebarProps } from './types/types';
import { ActiveCategoryProvider } from './contexts/active-context';
import clsx from 'clsx';

import { NavbarSecondaryMenuFiller } from '@docusaurus/theme-common';

// @ts-expect-error theme-common/internal is not properly exported
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { IsMobileContext } from '@site/../src/components/contexts/is-mobile-context';

type RootSidebarProps = Omit<SidebarProps, 'setActiveCategory'>;
type ComponentSidebarProps = RootSidebarProps;

export default function OWSidebar(props: RootSidebarProps): JSX.Element {
  return <OWSidebarRoot {...props} />;
}

function OWSidebarRoot(props: RootSidebarProps): JSX.Element {
  const isMobile = useContext(IsMobileContext);

  return isMobile ? (
    <NavbarSecondaryMenuFiller component={DocSidebar} props={{ ...props }} />
  ) : (
    <DocSidebar {...props} />
  );
}

function DocSidebar(props: ComponentSidebarProps) {
  const { path } = props;
  const [activeCagetory, setActiveCategory] = useState('/');

  const isMobile = useContext(IsMobileContext);
  const mobileSidebar = useNavbarMobileSidebar();

  const wasOpen = useRef(mobileSidebar.shown);

  // If the sidebar was + still is showing, and this runs, then the path changed
  useEffect(() => {
    if (isMobile) {
      if (mobileSidebar.shown && wasOpen.current === mobileSidebar.shown) {
        mobileSidebar.toggle();
      }

      wasOpen.current = mobileSidebar.shown;
    }
  }, [path, mobileSidebar, isMobile]);

  return (
    <aside>
      <nav
        className={clsx(OWClassNames.sidebar.index, {
          [OWClassNames.common.mobileOnly]: isMobile,
          [OWClassNames.common.desktopOnly]: !isMobile,
        })}
      >
        <ActiveCategoryProvider path={activeCagetory}>
          <SidebarGrid {...props} setActiveCategory={setActiveCategory} />
        </ActiveCategoryProvider>
      </nav>
    </aside>
  );
}
