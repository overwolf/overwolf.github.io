import React, { FC } from 'react';
import clsx from 'clsx';
import OWClassNames from '@site/../src/theme/OverwolfClassNames';
import { ComparisonTableTitleRowProps } from './scheme';
import OWToolTipIcon from '../tooltip/ow-tooltip-icon';

const ComparisonTableTitleRow: FC<ComparisonTableTitleRowProps> = (props) => {
  const { title, tooltipData } = props;

  // ---------------------------------------------------------------------------

  return (
    <h3 className={clsx(OWClassNames.comparisonTable.rows.row.title.index)}>
      {title}
      {tooltipData && <OWToolTipIcon {...tooltipData} />}
    </h3>
  );
};

export default ComparisonTableTitleRow;
