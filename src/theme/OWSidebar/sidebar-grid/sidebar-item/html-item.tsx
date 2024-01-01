import React from 'react';
import { HTMLSidebarItemProps, SidebarProps } from '../../types/types';
import clsx from 'clsx';
import OWClassNames from '@site/../src/theme/OverwolfClassNames';
import { PlaceOnGrid } from '../utils';

function HTMLItem(
  props: { rowNumber: number; item: HTMLSidebarItemProps } & SidebarProps,
) {
  const { rowNumber, item } = props;

  // ---------------------------------------------------------------------------

  return (
    <li
      className={clsx(OWClassNames.sidebar.container.items.html.index)}
      style={PlaceOnGrid({
        rowStart: rowNumber,
        columnStart: 2,
        columnFlex: true,
      })}
    >
      <div dangerouslySetInnerHTML={{ __html: item.value }}></div>
    </li>
  );
}

export default HTMLItem;
