import React from 'react';
import SidebarLayout from './children';
import { SidebarProps } from '../types/types';
import OWClassNames from '../../OverwolfClassNames';
import clsx from 'clsx';
import OWCollapsible from '../../OWCollapsible';

function SidebarGrid(
  props: {
    showCaret?: boolean;
    collapsed?: boolean;
  } & SidebarProps,
) {
  const { showCaret = false, collapsed = false } = props;

  // ---------------------------------------------------------------------------

  return (
    <OWCollapsible
      className={clsx(OWClassNames.sidebar.container.index, {
        [OWClassNames.sidebar.container.items.category.showCaret]: showCaret,
        [OWClassNames.sidebar.container.collapsed]: collapsed,
      })}
      as="ul"
      lazy={true}
      collapsed={collapsed}
    >
      <SidebarLayout {...props} />
    </OWCollapsible>
  );
}

export default React.memo(SidebarGrid);
