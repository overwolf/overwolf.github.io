import React, { useEffect, useRef, useState } from 'react';
import { useWindowSize } from '@docusaurus/theme-common';
import './style.scss';
import SidebarGrid from './sidebar-grid';
import OWClassNames from '../OverwolfClassNames';
import { SidebarProps } from './types/types';
import { ActiveCategoryProvider } from './contexts/active-context';
import clsx from 'clsx';

import {
  NavbarSecondaryMenuFiller,
  type NavbarSecondaryMenuComponent,
} from '@docusaurus/theme-common';

// @ts-expect-error theme-common/internal is not properly exported
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { MobileProvider } from './contexts/mobile-context';

type RootSidebarProps = Omit<SidebarProps, 'setActiveCategory'>;
type ComponentSidebarProps = RootSidebarProps & { mobile: boolean };

export default function OWSidebar(props: RootSidebarProps): JSX.Element {
  const windowSize = useWindowSize();

  // If this is currently rendering the mobile view, render the mobile sidebar
  if (windowSize === 'mobile')
    return (
      <DocSidebarMobile
        componentProps={props}
        component={DocSidebar}
      ></DocSidebarMobile>
    );

  return <DocSidebar {...props} mobile={false} />;
}

function DocSidebar(props: ComponentSidebarProps) {
  const { path, mobile } = props;
  const [activeCagetory, setActiveCategory] = useState('/');

  const mobileSidebar = useNavbarMobileSidebar();

  const wasOpen = useRef(mobileSidebar.shown);

  // If the sidebar was + still is showing, and this runs, then the path changed
  useEffect(() => {
    if (mobile) {
      if (mobileSidebar.shown && wasOpen.current === mobileSidebar.shown) {
        mobileSidebar.toggle();
      }

      wasOpen.current = mobileSidebar.shown;
    }
  }, [path, mobileSidebar, mobile]);

  return (
    <aside>
      <MobileProvider mobile={mobile}>
        <nav
          className={clsx(OWClassNames.sidebar.index, {
            [OWClassNames.common.mobileOnly]: mobile,
            [OWClassNames.common.desktopOnly]: !mobile,
          })}
        >
          <ActiveCategoryProvider path={activeCagetory}>
            <SidebarGrid {...props} setActiveCategory={setActiveCategory} />
          </ActiveCategoryProvider>
        </nav>
      </MobileProvider>
    </aside>
  );
}

function DocSidebarMobile(props: {
  componentProps: RootSidebarProps;
  component: NavbarSecondaryMenuComponent<ComponentSidebarProps>;
}) {
  return (
    <NavbarSecondaryMenuFiller
      component={props.component}
      props={{ ...props.componentProps, mobile: true }}
    />
  );
}
