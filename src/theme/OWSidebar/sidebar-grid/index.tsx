import React, { useContext, useState } from 'react';
import SidebarLayout from './children';
import { SidebarProps } from '../types/types';
import OWClassNames from '../../OverwolfClassNames';
import clsx from 'clsx';
import OWCollapsible from '../../OWCollapsible';
import {
  CollapseContext,
  CollapseProvider,
} from '../contexts/collapse-context';
import useThemeState from '@site/../src/components/hooks/theme-state';

function SidebarGrid(
  props: {
    showCaret?: boolean;
    collapsed?: boolean;
  } & SidebarProps,
) {
  const { showCaret = false, collapsed = false } = props;

  const parentCollapsed = useContext(CollapseContext);
  const [animatedCollapse, setAnimatedCollapse] = useState(parentCollapsed);
  const isLight = useThemeState();
  // ---------------------------------------------------------------------------

  return (
    <OWCollapsible
      className={clsx(OWClassNames.sidebar.container.index, {
        [OWClassNames.sidebar.container.items.category.showCaret]: showCaret,
        [OWClassNames.sidebar.container.collapsed]:
          parentCollapsed || (collapsed && animatedCollapse),
        [OWClassNames.common.lightTheme]: isLight === 'light'
      })}
      as="ul"
      lazy={true}
      collapsed={collapsed}
      onCollapseTransitionEnd={(newState) => {
        setAnimatedCollapse(newState);
      }}
    >
      <CollapseProvider collapsed={animatedCollapse}>
        <SidebarLayout {...props} />
      </CollapseProvider>
    </OWCollapsible>
  );
}

export default React.memo(SidebarGrid);
