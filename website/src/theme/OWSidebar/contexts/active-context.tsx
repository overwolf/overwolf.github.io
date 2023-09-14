import React from 'react';

export const ActiveCategoryContext = React.createContext('/');

export function ActiveCategoryProvider(
  props: React.PropsWithChildren<{ path: string }>,
) {
  const { path, children } = props;
  return (
    <ActiveCategoryContext.Provider value={path}>
      {children}
    </ActiveCategoryContext.Provider>
  );
}
