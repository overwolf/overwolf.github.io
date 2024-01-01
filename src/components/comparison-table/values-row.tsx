import React, { FC, useContext } from 'react';
import clsx from 'clsx';
import OWClassNames from '@site/../src/theme/OverwolfClassNames';
import { ComparisonTableValuesRowProps } from './scheme';
import OWToolTipIcon from '../tooltip/ow-tooltip-icon';
import { DisplayTitleContext } from './contexts/display-title-context';
import { ActiveViewContext } from './contexts/active-view-context';

const ComparisonTableValuesRow: FC<ComparisonTableValuesRowProps<any>> = (
  props,
) => {
  const { title, tooltipData, values } = props;
  const displayTitles = useContext(DisplayTitleContext);

  // also make isactive a context
  const activeView = useContext(ActiveViewContext);

  // ---------------------------------------------------------------------------

  return (
    <div className={clsx(OWClassNames.comparisonTable.rows.row.values.index)}>
      <h4 className={clsx(OWClassNames.comparisonTable.rows.row.values.title)}>
        {title}
        {tooltipData && <OWToolTipIcon {...tooltipData} />}
      </h4>

      {Object.keys(values).map((key) => {
        const value = values[key];
        return (
          <div
            className={clsx(OWClassNames.comparisonTable.rows.row.values.text, {
              [OWClassNames.common.inactive]: activeView !== key,
              [OWClassNames.comparisonTable.rows.row.values.green]:
                value.colorOverride === 'green',
              [OWClassNames.comparisonTable.rows.row.values.red]:
                value.colorOverride === 'red',
            })}
            key={key}
            title={`${displayTitles[key]} ${title}`}
          >
            {value.text}
            {value.tooltipData && (
              <div
                className={clsx(
                  OWClassNames.comparisonTable.rows.row.values.toolTipContainer,
                )}
              >
                <OWToolTipIcon {...value.tooltipData} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ComparisonTableValuesRow;
