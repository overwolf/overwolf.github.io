/* eslint-disable no-unused-vars */
import OWToolTipIcon from '../tooltip/ow-tooltip-icon';

export type ComparisonTableScheme<Items extends string> = {
  defaultItem: Items;
  items: {
    [item in Items]: ComparisonTableItem<item>;
  };

  displayNames: ComparisonTableDisplayTitle<Items>;
  rows: ComparisonTableGenericRow<Items>[];
};

export type ComparisonTableDisplayTitle<Items extends string> = {
  [item in Items]: string;
};

export type ComparisonTableGenericRow<Items extends string> =
  | ComparisonTableTitleRowProps
  | ComparisonTableValuesRowProps<Items>;

export type ComparisonTableItem<name extends string> = {
  itemName: name;
  imgSrc: string;
};

export type ComparisonTableRowProps = {
  title: string;
  tooltipData?: Parameters<typeof OWToolTipIcon>[0];
};

export type ComparisonTableTitleRowProps = {
  type: 'title';
} & ComparisonTableRowProps;

export type ComparisonTableValuesRowProps<Items extends string> = {
  type: 'value';
  values: { [item in Items]: ComparisonTableCell };
} & ComparisonTableRowProps;

export type ComparisonTableCell = {
  text: string;
  tooltipData?: Parameters<typeof OWToolTipIcon>[0];
  colorOverride?: 'none' | 'green' | 'red';
};
