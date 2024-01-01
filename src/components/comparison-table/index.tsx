import React, { FC, useState } from 'react';
import './index.scss';
import { ComparisonTableScheme } from './scheme';
import ComparisonTableHeader from './header';
import ComparisonTableRow from './row';
import { DisplayTitleProvider } from './contexts/display-title-context';
import { ActiveViewProvider } from './contexts/active-view-context';
import OWClassNames from '@site/../src/theme/OverwolfClassNames';
import clsx from 'clsx';

export type ComparisonTableProps = {
  comparisonText: string;
  tableScheme: ComparisonTableScheme<any>;
  id?: string;
  createIcon?: (itemKey: string) => React.ReactNode;
};

const ComparisonTable: FC<ComparisonTableProps> = (props) => {
  const { comparisonText, tableScheme, id, createIcon } = props;

  const [activeView, setActiveView] = useState<
    keyof (typeof tableScheme)['items']
  >(tableScheme.defaultItem);

  const items = Object.keys(tableScheme.items);
  const flexBasis = 100 / (items.length + 1);

  // ---------------------------------------------------------------------------

  return (
    <DisplayTitleProvider names={tableScheme.displayNames}>
      <ActiveViewProvider active={activeView}>
        <section id={id} className={clsx(OWClassNames.comparisonTable.index)}>
          <div className={clsx(OWClassNames.comparisonTable.headers.index)}>
            <h2
              className={clsx(
                OWClassNames.comparisonTable.headers.item,
                OWClassNames.comparisonTable.headers.comparisonTitle,
              )}
              style={{
                flexBasis: `${flexBasis}%`,
              }}
            >
              {comparisonText}
            </h2>

            <div
              className={clsx(
                OWClassNames.comparisonTable.headers.categories.index,
              )}
              style={{
                flexBasis: `${flexBasis * items.length}%`,
              }}
            >
              {items.map((key) => {
                const item = tableScheme.items[key];
                return (
                  <ComparisonTableHeader
                    {...item}
                    key={item.itemName}
                    createIcon={createIcon}
                    setActive={setActiveView}
                    baseWidth={100 / items.length}
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
