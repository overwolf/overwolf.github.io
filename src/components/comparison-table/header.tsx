import React, { FC, useContext, useState } from 'react';
import clsx from 'clsx';
import OWClassNames from '@site/../src/theme/OverwolfClassNames';
import ImageToggle from '../image-toggle/image-toggle';
import { ComparisonTableItem } from './scheme';
import { ActiveViewContext } from './contexts/active-view-context';
import { IsMobileContext } from '../contexts/is-mobile-context';

type ComparisonTableHeaderProps = {
  setActive: ReturnType<typeof useState>[1];
  baseWidth: number;
  createIcon?: (itemKey: string) => React.ReactNode;
} & ComparisonTableItem<any>;

const ComparisonTableHeader: FC<ComparisonTableHeaderProps> = (props) => {
  const { setActive, itemName, imgSrc, baseWidth, createIcon } = props;
  const active = useContext(ActiveViewContext);

  const isMobile = useContext(IsMobileContext);
  // ---------------------------------------------------------------------------

  return (
    <h2
      className={clsx(
        OWClassNames.comparisonTable.headers.item,
        OWClassNames.comparisonTable.headers.categories.category,
        {
          [OWClassNames.common.active]: active === itemName,
          [OWClassNames.common.inactive]: active !== itemName,
        },
      )}
      onClick={() => setActive(itemName)}
      role={isMobile ? 'button' : 'heading'}
      aria-label={`show/hide ${itemName} parameters`}
      style={{
        flexBasis: `${baseWidth}%`,
      }}
    >
      {createIcon?.(itemName) ?? (
        <ImageToggle imgSrc={imgSrc} alt={`${itemName} logo`} />
      )}
    </h2>
  );
};

export default ComparisonTableHeader;
