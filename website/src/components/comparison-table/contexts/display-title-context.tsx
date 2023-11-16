import React from 'react';
import { ComparisonTableDisplayTitle } from '../scheme';

export const DisplayTitleContext = React.createContext({});

export function DisplayTitleProvider(
  props: React.PropsWithChildren<{ names: ComparisonTableDisplayTitle<any> }>,
) {
  const { children, names } = props;

  return (
    <DisplayTitleContext.Provider value={names}>
      {children}
    </DisplayTitleContext.Provider>
  );
}