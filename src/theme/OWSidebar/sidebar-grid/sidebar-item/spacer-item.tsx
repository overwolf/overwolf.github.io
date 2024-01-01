import React from 'react';
import { PlaceOnGrid } from '../utils';
import OWClassNames from '@site/../src/theme/OverwolfClassNames';
import clsx from 'clsx';

function SpacerItem(props: { rowNumber: number }) {
  const { rowNumber } = props;

  // ---------------------------------------------------------------------------

  return (
    <li
      tabIndex={-1}
      className={clsx(OWClassNames.sidebar.container.items.category.spacer)}
      style={PlaceOnGrid({
        columnStart: 1,
        columnFlex: true,
        rowStart: rowNumber,
        rowEnd: rowNumber,
      })}
    />
  );
}

export default SpacerItem;
