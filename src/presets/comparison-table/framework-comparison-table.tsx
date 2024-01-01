/* eslint-disable no-template-curly-in-string */
import React from 'react';
import ComparisonTable, {
  ComparisonTableProps,
} from '@site/../src/components/comparison-table';
import { ComparisonTableScheme } from '@site/../src/components/comparison-table/scheme';

type FrameworkComparisonTableProps = Omit<
  ComparisonTableProps,
  'tableScheme' | 'comparisonText'
>;

const FrameworkComparisonTable = (props: FrameworkComparisonTableProps) => {
  const scheme: ComparisonTableScheme<'ow-platform' | 'ow-electron'> = {
    defaultItem: 'ow-platform',
    displayNames: {
      'ow-platform': 'Overwolf Platform',
      'ow-electron': 'Electron Platform',
    },
    items: {
      'ow-platform': {
        itemName: 'ow-platform',
        imgSrc:
          // eslint-disable-next-line max-len
          '/img/presets/comparison-table/framework-comparison-table/ow-platform-logo-${platform}.svg',
      },
      'ow-electron': {
        itemName: 'ow-electron',
        imgSrc:
          // eslint-disable-next-line max-len
          '/img/presets/comparison-table/framework-comparison-table/ow-electron-logo-${platform}.svg',
      },
    },
    rows: [
      // Performance
      {
        type: 'title',
        title: 'Performance',
        tooltipData: {
          // eslint-disable-next-line max-len
          text: 'All performance benchmarks were measured using an `AMD Ryzen 5 5600X 6-Core Processor`, and include the total overhead for running a simple App displaying a simple window.',
        },
      },
      {
        type: 'value',
        title: 'CPU Impact (Idle)',
        values: {
          'ow-platform': { text: '0.2%' },
          'ow-electron': { text: '0.1%' },
        },
      },
      {
        type: 'value',
        title: 'CPU Impact (Avg Window Interaction)',
        values: {
          'ow-platform': { text: '3%' },
          'ow-electron': { text: '0.5%' },
        },
      },
      {
        type: 'value',
        title: 'RAM Consumption (Peak)',
        values: {
          'ow-platform': { text: '420 MB' },
          'ow-electron': { text: '380 MB' },
        },
      },
      {
        type: 'value',
        title: 'Total Running Processes',
        values: {
          'ow-platform': { text: '9' },
          'ow-electron': { text: '7' },
        },
      },

      // Growth and Support
      {
        type: 'title',
        title: 'Growth and Support',
      },
      {
        type: 'value',
        title: 'Analytics',
        values: {
          'ow-platform': { text: 'Yes', colorOverride: 'green' },
          'ow-electron': { text: 'Yes', colorOverride: 'green' },
        },
      },
      {
        type: 'value',
        title: 'Marketing Support',
        values: {
          'ow-platform': { text: 'Yes', colorOverride: 'green' },
          'ow-electron': { text: 'Yes', colorOverride: 'green' },
        },
      },
      {
        type: 'value',
        title: 'Funding Support',
        values: {
          'ow-platform': { text: 'Yes', colorOverride: 'green' },
          'ow-electron': { text: 'Yes', colorOverride: 'green' },
        },
      },
      {
        type: 'value',
        title: 'Product Design and Development',
        tooltipData: {
          text: 'Branding, UI/UX, Development, Commercial design.',
        },
        values: {
          'ow-platform': { text: 'Yes', colorOverride: 'green' },
          'ow-electron': { text: 'Yes', colorOverride: 'green' },
        },
      },
      {
        type: 'value',
        title: 'Developer Support',
        values: {
          'ow-platform': { text: 'Yes', colorOverride: 'green' },
          'ow-electron': { text: 'Yes', colorOverride: 'green' },
        },
      },
      {
        type: 'value',
        title: 'Appstore Presence + Discoverability',
        values: {
          'ow-platform': { text: 'Yes', colorOverride: 'green' },
          'ow-electron': { text: 'Yes', colorOverride: 'green' },
        },
      },
      {
        type: 'value',
        title: 'Own Branding',
        values: {
          'ow-platform': {
            text: 'Yes',
            colorOverride: 'green',
            tooltipData: {
              // eslint-disable-next-line max-len
              text: 'OW-Native offers mixed branding (Overwolf + app) during installation, while OW-Electron offers 100% app branding.',
            },
          },
          'ow-electron': { text: 'Yes', colorOverride: 'green' },
        },
      },

      // Tech
      {
        type: 'title',
        title: 'Tech',
      },
      {
        type: 'value',
        title: 'Overlay SDK (1500+ Games)',
        values: {
          'ow-platform': { text: 'Yes', colorOverride: 'green' },
          'ow-electron': { text: 'Yes', colorOverride: 'green' },
        },
      },
      {
        type: 'value',
        title: 'Realtime Game Events API',
        values: {
          'ow-platform': { text: 'Yes', colorOverride: 'green' },
          'ow-electron': { text: 'Yes', colorOverride: 'green' },
        },
      },
      {
        type: 'value',
        title: 'Ad Fraud Protection',
        values: {
          'ow-platform': { text: 'Yes', colorOverride: 'green' },
          'ow-electron': { text: 'Yes', colorOverride: 'green' },
        },
      },
      {
        type: 'value',
        title: 'Dev Console',
        values: {
          'ow-platform': { text: 'Yes', colorOverride: 'green' },
          'ow-electron': { text: 'Yes', colorOverride: 'green' },
        },
      },
      {
        type: 'value',
        title: 'Installer',
        values: {
          'ow-platform': { text: 'Yes', colorOverride: 'green' },
          'ow-electron': { text: 'Optional' },
        },
      },
      {
        type: 'value',
        title: 'Coupled with Overwolf Client',
        tooltipData: {
          // eslint-disable-next-line max-len, prettier/prettier
          text: 'OW-Native requires Overwolf client installation to run the app, while OW-Electron doesn\'t require the client at all - the flow is entirely up to the app.',
        },
        values: {
          'ow-platform': { text: 'Yes', colorOverride: 'green' },
          'ow-electron': { text: 'No' },
        },
      },

      // Terms and Conditions
      {
        type: 'title',
        title: 'Terms and Conditions',
      },
      {
        type: 'value',
        title: 'Ads Revshare',
        values: {
          'ow-platform': { text: '70/30' },
          'ow-electron': { text: '70/30' },
        },
      },
      {
        type: 'value',
        title: 'Subscriptions Revshare',
        values: {
          'ow-platform': { text: '85/15' },
          'ow-electron': { text: '85/15' },
        },
      },
    ],
  };

  return (
    <ComparisonTable
      comparisonText="Feature Comparison"
      {...props}
      tableScheme={scheme}
    />
  );
};

export default FrameworkComparisonTable;
