import React, { FC, useState } from 'react';
import './index.scss';
import { ComparisonTableScheme } from './scheme';
import ComparisonTableHeader from './header';
import ComparisonTableRow from './row';
import { DisplayTitleProvider } from './contexts/display-title-context';
import { ActiveViewProvider } from './contexts/active-view-context';
import OWClassNames from '@site/src/theme/OverwolfClassNames';
import clsx from 'clsx';

export type ComparisonTableProps = {
  comparisonText: string;
  tableScheme: ComparisonTableScheme<any>;
};

const ComparisonTable: FC<ComparisonTableProps> = (props) => {
  const { comparisonText, tableScheme } = props;

  const [activeView, setActiveView] = useState<
    keyof (typeof tableScheme)['items']
  >(tableScheme.defaultItem);

  // ---------------------------------------------------------------------------

  return (
    <DisplayTitleProvider names={tableScheme.displayNames}>
      <ActiveViewProvider active={activeView}>
        <section className={clsx(OWClassNames.comparisonTable.index)}>
          <div className={clsx(OWClassNames.comparisonTable.headers.index)}>
            <h2
              className={clsx(
                OWClassNames.comparisonTable.headers.item,
                OWClassNames.comparisonTable.headers.comparisonTitle,
              )}
            >
              {comparisonText}
            </h2>

            <div
              className={clsx(
                OWClassNames.comparisonTable.headers.categories.index,
              )}
            >
              {Object.keys(tableScheme.items).map((key) => {
                const item = tableScheme.items[key];
                return (
                  <ComparisonTableHeader
                    {...item}
                    key={item.itemName}
                    setActive={setActiveView}
                  />
                );
              })}
            </div>
          </div>

          <div className={clsx(OWClassNames.comparisonTable.rows.index)}>
            {tableScheme.rows.map((row) => (
              <ComparisonTableRow key={row.title} {...row} />
            ))}
          </div>
        </section>
      </ActiveViewProvider>
    </DisplayTitleProvider>
  );
};

export default ComparisonTable;
