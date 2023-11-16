import React, { FC, useContext, useState } from 'react';
import useIsMobile from '../hooks/is-mobile-hook';
import clsx from 'clsx';
import OWClassNames from '@site/src/theme/OverwolfClassNames';
import ImageToggle from '../image-toggle/image-toggle';
import { ComparisonTableItem } from './scheme';
import { ActiveViewContext } from './contexts/active-view-context';

type ComparisonTableHeaderProps = {
  setActive: ReturnType<typeof useState>[1];
} & ComparisonTableItem<any>;

const ComparisonTableHeading: FC<ComparisonTableHeaderProps> = (props) => {
  const { setActive, itemName, imgSrc } = props;
  const active = useContext(ActiveViewContext);

  const isMobile = useIsMobile();
  // ---------------------------------------------------------------------------

  return (
    <h2
      className={clsx(
        OWClassNames.comparisonTable.headers.item,
        OWClassNames.comparisonTable.headers.header.index,
        {
          [OWClassNames.common.active]: isMobile && active === itemName,
          [OWClassNames.common.inactive]: isMobile && active !== itemName,
        },
      )}
      onClick={() => setActive(itemName)}
      role={isMobile ? 'button' : 'heading'}
      aria-label={`show/hide ${itemName} parameters`}
    >
      <ImageToggle imgSrc={imgSrc} alt={`${itemName} logo`} />
    </h2>
  );
};

export default ComparisonTableHeading;
