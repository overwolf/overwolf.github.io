import React, { FC } from 'react';
import {
  ComparisonTableGenericRow,
  ComparisonTableTitleRowProps,
  ComparisonTableValuesRowProps,
} from './scheme';
import ComparisonTableValuesRow from './values-row';
import ComparisonTableTitleRow from './title-row';
import OWClassNames from '@site/../src/theme/OverwolfClassNames';
import clsx from 'clsx';

const ComparisonTableRow: FC<ComparisonTableGenericRow<any>> = (props) => {
  const { type } = props;

  return (
    <div className={clsx(OWClassNames.comparisonTable.rows.row.index)}>
      {type === 'value' ? (
        <ComparisonTableValuesRow
          {...(props as ComparisonTableValuesRowProps<any>)}
        />
      ) : (
        <ComparisonTableTitleRow {...(props as ComparisonTableTitleRowProps)} />
      )}
    </div>
  );
};

export default ComparisonTableRow;
