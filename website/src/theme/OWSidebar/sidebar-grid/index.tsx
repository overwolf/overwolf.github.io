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

function SidebarGrid(
  props: {
    showCaret?: boolean;
    collapsed?: boolean;
  } & SidebarProps,
) {
  const { showCaret = false, collapsed = false } = props;

  const parentCollapsed = useContext(CollapseContext);
  const [animatedCollapse, setAnimatedCollapse] = useState(parentCollapsed);
  // ---------------------------------------------------------------------------

  return (
    <OWCollapsible
      className={clsx(OWClassNames.sidebar.container.index, {
        [OWClassNames.sidebar.container.items.category.showCaret]: showCaret,
        [OWClassNames.sidebar.container.collapsed]:
          parentCollapsed || (collapsed && animatedCollapse),
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
