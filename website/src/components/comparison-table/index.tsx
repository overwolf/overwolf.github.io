import React, { FC, useContext, useRef, useState } from 'react';
import './index.scss';
import { ComparisonTableScheme } from './scheme';
import ComparisonTableHeader from './header';
import ComparisonTableRow from './row';
import { DisplayTitleProvider } from './contexts/display-title-context';
import { ActiveViewProvider } from './contexts/active-view-context';
import OWClassNames from '@site/src/theme/OverwolfClassNames';
import clsx from 'clsx';
import { IsMobileContext } from '../contexts/is-mobile-context';

export type ComparisonTableProps = {
  comparisonText: string;
  openByDefault?: boolean;
  tableScheme: ComparisonTableScheme<any>;
  large?: boolean;
};

const ComparisonTable: FC<ComparisonTableProps> = (props) => {
  const {
    comparisonText,
    tableScheme,
    openByDefault = false,
    large = false,
  } = props;

  const [activeView, setActiveView] = useState<
    keyof (typeof tableScheme)['items']
  >(tableScheme.defaultItem);
  const [isOpen, setIsOpen] = useState(openByDefault);
  const tableContainer = useRef<HTMLDivElement>(null);
  const isMobile = useContext(IsMobileContext);

  // ---------------------------------------------------------------------------

  const handleToggleTable = () => {
    setIsOpen((current) => !current);
    let ScrollOffset = -180;

    if (isMobile) {
      ScrollOffset = -160;
    }

    if (tableContainer && window) {
      // 👇 Will scroll smoothly to the table
      const y =
        tableContainer.current.getBoundingClientRect().top +
        window?.scrollY +
        ScrollOffset;
      window?.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // ---------------------------------------------------------------------------

  return (
    <div className={clsx(OWClassNames.comparisonTable.index)}>
      <DisplayTitleProvider names={tableScheme.displayNames}>
        <ActiveViewProvider active={activeView}>
          <div
            className={clsx(
              OWClassNames.comparisonTable.button.index,
              OWClassNames.comparisonTable.button.open,
              {
                [OWClassNames.common.inactive]: isOpen,
                [OWClassNames.comparisonTable.button.large]: large,
              },
            )}
          >
            <button
              className={clsx(
                OWClassNames.comparisonTable.button.button,
                OWClassNames.common.buttonSecondary,
              )}
              onClick={handleToggleTable}
            >
              Open features comparison
            </button>
          </div>

          <section className={clsx(OWClassNames.comparisonTable.section)}>
            <div
              className={clsx(OWClassNames.comparisonTable.transition, {
                [OWClassNames.common.active]: isOpen,
                [OWClassNames.common.inactive]: !isOpen,
              })}
              ref={tableContainer}
            >
              <div className={clsx(OWClassNames.comparisonTable.content)}>
                <div
                  className={clsx(OWClassNames.comparisonTable.headers.index)}
                >
                  <h2
                    className={clsx(
                      OWClassNames.comparisonTable.headers.item,
                      OWClassNames.comparisonTable.headers.title,
                    )}
                  >
                    {comparisonText}
                  </h2>

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

                {tableScheme.rows.map((row) => (
                  <ComparisonTableRow key={row.title} {...row} />
                ))}
              </div>
            </div>

            <div
              className={clsx(
                OWClassNames.comparisonTable.button.index,
                OWClassNames.comparisonTable.button.close,
                {
                  [OWClassNames.common.inactive]: !isOpen,
                },
              )}
            >
              <button
                className={clsx(
                  OWClassNames.comparisonTable.button.button,
                  OWClassNames.common.buttonSecondary,
                )}
                onClick={handleToggleTable}
              >
                Close features comparison
              </button>
            </div>
          </section>
        </ActiveViewProvider>
      </DisplayTitleProvider>
    </div>
  );
};

export default ComparisonTable;
