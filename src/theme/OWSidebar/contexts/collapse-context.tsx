import React from 'react';

export const CollapseContext = React.createContext(false);

export function CollapseProvider(
  props: React.PropsWithChildren<{ collapsed: boolean }>,
) {
  const { collapsed, children } = props;
  return (
    // eslint-disable-next-line max-len
    <CollapseContext.Provider value={collapsed}>
      {children}
    </CollapseContext.Provider>
  );
}
