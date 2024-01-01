/* eslint-disable prettier/prettier */
import React, { type ReactNode, useState, useCallback } from 'react';
import clsx from 'clsx';
// @ts-ignore
// import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import { useLocation } from '@docusaurus/router';
// import ExpandButton from '@theme/DocPage/Layout/Sidebar/ExpandButton';
import type { Props } from '@theme/DocPage/Layout/Sidebar';

import styles from './styles.module.css';
// import OWClassNames from '@site/../src/theme/OverwolfClassNames';
import OWSidebar from '@site/../src/theme/OWSidebar';

// TODO: Convert to OW theme

// Reset sidebar state when sidebar changes
// Use React key to unmount/remount the children
// See https://github.com/facebook/docusaurus/issues/3414
function SidebarKey({ children }: { children: ReactNode }) {
  const sidebar = useDocsSidebar();
  return (
    <React.Fragment key={sidebar?.name ?? 'noSidebar'}>
      {children}
    </React.Fragment>
  );
}

export default function DocPageLayoutSidebar({
  sidebar,
  hiddenSidebarContainer,
  setHiddenSidebarContainer,
}: Props): JSX.Element {
  const { pathname } = useLocation();

  const [hiddenSidebar, setHiddenSidebar] = useState(false);
  const toggleSidebar = useCallback(() => {
    if (hiddenSidebar) {
      setHiddenSidebar(false);
    }

    setHiddenSidebarContainer((value) => !value);
  }, [setHiddenSidebarContainer, hiddenSidebar]);

  return (
    <OWSidebar
      // @ts-expect-error Docusaurus type doesn't match our sidebar manipulation
      sidebar={sidebar}
      path={pathname}
    />);
  // return (
  //   <aside
  //     className={clsx(
  //       // OWClassNames.Sidebar.Root,
  //       styles.docSidebarContainer, // Class from ./styles.module.css
  //       hiddenSidebarContainer && styles.docSidebarContainerHidden, // Class from ./styles.module.css
  //     )}
  //     onTransitionEnd={(e) => {
  //       if (!e.currentTarget.classList.contains(styles.docSidebarContainer!)) {
  //         return;
  //       }

  //       if (hiddenSidebarContainer) {
  //         setHiddenSidebar(true);
  //       }
  //     }}>
  //     <SidebarKey>
  //       <DocSidebar
  //         sidebar={sidebar}
  //         path={pathname}
  //         onCollapse={toggleSidebar}
  //         isHidden={hiddenSidebar}
  //       />
  //     </SidebarKey>

  //     {hiddenSidebar && <ExpandButton toggleSidebar={toggleSidebar} />}
  //   </aside>
  // );
}
