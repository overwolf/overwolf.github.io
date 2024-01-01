/* eslint-disable no-template-curly-in-string */
import React from 'react';
import ComparisonTable, {
  ComparisonTableProps,
} from '@site/../src/components/comparison-table';
import { ComparisonTableScheme } from '@site/../src/components/comparison-table/scheme';
import SubscriptionsIconFormatter from './utils/subscriptions-icon-formatter';

type SubscriptionsComparisonTableProps = Omit<
  ComparisonTableProps,
  'tableScheme' | 'comparisonText'
>;

const SubscriptionsComparisonTAble = (
  props: SubscriptionsComparisonTableProps,
) => {
  const generateItemIcon = (itemId: 'checkout' | 'headless' | 'overwolf') => {
    switch (itemId) {
      case 'checkout':
        return (
          <SubscriptionsIconFormatter
            companyName="tebex"
            apiName="checkout"
            color="#41C4C3"
          />
        );
      case 'headless':
        return (
          <SubscriptionsIconFormatter
            companyName="tebex"
            apiName="headless"
            color="#41C4C3"
          />
        );
      case 'overwolf':
        return (
          <SubscriptionsIconFormatter
            companyName="overwolf"
            apiName="subscriptions"
            color="#D34037"
          />
        );
    }
  };

  const scheme: ComparisonTableScheme<'checkout' | 'headless' | 'overwolf'> = {
    defaultItem: 'overwolf',
    displayNames: {
      checkout: 'Tebex Checkout',
      headless: 'Tebex Headless',
      overwolf: 'Overwolf Subscriptions',
    },
    items: {
      checkout: {
        itemName: 'checkout',
        imgSrc:
          // eslint-disable-next-line max-len
          '/img/presets/comparison-table/subscriptions-comparison-table/checkout-logo-${platform}.svg',
      },
      headless: {
        itemName: 'headless',
        imgSrc:
          // eslint-disable-next-line max-len
          '/img/presets/comparison-table/subscriptions-comparison-table/headless-logo-${platform}.svg',
      },
      overwolf: {
        itemName: 'overwolf',
        imgSrc:
          // eslint-disable-next-line max-len
          '/img/presets/comparison-table/subscriptions-comparison-table/overwolf-logo-${platform}.svg',
      },
    },
    rows: [
      // Implementation Overhead
      {
        type: 'title',
        title: 'Implementation Overhead',
        tooltipData: {
          // eslint-disable-next-line max-len
          text: 'The genral Overhead required to implement different flows with the different Subscriptions Solutions',
        },
      },
      {
        type: 'value',
        title: 'Plan Management',
        tooltipData: {
          text: 'Whether or not Plans (Packages) can be managed directly from the Tebex Control Panel',
        },
        values: {
          checkout: { text: 'No', colorOverride: 'red' },
          headless: { text: 'Yes', colorOverride: 'green' },
          overwolf: { text: 'Yes', colorOverride: 'green' },
        },
      },
      {
        type: 'value',
        title: 'Requires Baskets',
        tooltipData: {
          text: 'Whether or not a Basket must be created and managed by the App for each purchase',
        },
        values: {
          checkout: { text: 'Yes', colorOverride: 'red' },
          headless: { text: 'Yes', colorOverride: 'red' },
          overwolf: { text: 'No', colorOverride: 'green' },
        },
      },
      {
        type: 'value',
        title: 'Requires a Server',
        tooltipData: {
          text: 'Whether or not a the App requires a backend server in order to allow subscriptions',
        },
        values: {
          checkout: { text: 'Yes', colorOverride: 'red' },
          headless: { text: 'Yes', colorOverride: 'red' },
          overwolf: { text: 'No', colorOverride: 'green' },
        },
      },

      // Implementation Details
      {
        type: 'title',
        title: 'Implementation Details',
        tooltipData: {
          // eslint-disable-next-line max-len
          text: 'General implementation details/limitations',
        },
      },
      {
        type: 'value',
        title: 'Framework Independent',
        values: {
          checkout: { text: 'Yes', colorOverride: 'green' },
          headless: { text: 'Yes', colorOverride: 'green' },
          overwolf: { text: 'Yes', colorOverride: 'green' },
        },
      },
      {
        type: 'value',
        title: 'Can be Combined',
        tooltipData: {
          text: 'Whether or not this Subscription Solution can be combined with the other solutions seamlessly',
        },
        values: {
          checkout: { text: 'Yes', colorOverride: 'green' },
          headless: { text: 'Yes', colorOverride: 'green' },
          overwolf: { text: 'Yes', colorOverride: 'green' },
        },
      },
      {
        type: 'value',
        title: 'Authentication',
        tooltipData: {
          text: 'The method for authenticating users',
        },
        values: {
          checkout: { text: 'Any' },
          headless: { text: 'Any' },
          overwolf: { text: 'Any' },
        },
      },
      {
        type: 'value',
        title: 'Supported Plans',
        tooltipData: {
          text: 'The types of Plans (Packages) that can be sold using this approach',
        },
        values: {
          checkout: { text: 'Any' },
          headless: { text: 'Any' },
          overwolf: {
            text: 'Subscriptions',
            tooltipData: {
              text: 'Only repeating subscriptions, limited to 1 active subscription per type per user',
            },
          },
        },
      },
    ],
  };

  return (
    <ComparisonTable
      createIcon={generateItemIcon}
      comparisonText="Subscription API"
      {...props}
      tableScheme={scheme}
    />
  );
};

export default SubscriptionsComparisonTAble;
