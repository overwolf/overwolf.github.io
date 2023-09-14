import React from 'react';
import LinkItem from './sidebar-item/link-item';
import CategoryItem from './sidebar-item/category-item';
import HTMLItem from './sidebar-item/html-item';
import { SidebarProps } from '../types/types';
import { SIDEBAR_MAX_ROWS } from '../config/config';

function SidebarLayout(props: SidebarProps & { collapsed?: boolean }) {
  const { sidebar } = props;

  return (
    <>
      {sidebar.map((item, rawIndex) => {
        /**
         * First - Row count must start at 1, 0 is treated as "no row specified"
         * Second - We multiply the index by the maximum amount of rows a single
         * child can have, to ensure that the rows never overlap
         */
        const index = 1 + rawIndex * SIDEBAR_MAX_ROWS;
        switch (item.type) {
          case 'link':
            return (
              <LinkItem
                // This MUST be placed first, so that rowNumber is overriden
                {...props}
                key={`${index} Link Item ${item.label}`}
                rowNumber={index}
                item={item}
              />
            );
          case 'category':
            return (
              <CategoryItem
                // This MUST be placed first, so that rowNumber is overriden
                {...props}
                key={`${index} Category Item ${item.label}`}
                item={item}
                rowNumber={index}
              />
            );
          case 'html':
            return (
              <HTMLItem
                // This MUST be placed first, so that rowNumber is overriden
                {...props}
                key={`${index} HTML Item ${item.value.slice(0, 10)}`}
                item={item}
                rowNumber={index}
              />
            );
          default:
            // @ts-expect-error In case another sidebar item type is added
            throw new Error(`Unknown sidebar type ${item.type}!`);
        }
      })}
    </>
  );
}

export default React.memo(SidebarLayout);
