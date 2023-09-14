import React from 'react';

export const MobileContext = React.createContext(false);

export function MobileProvider(
  props: React.PropsWithChildren<{ mobile: boolean }>,
) {
  const { mobile, children } = props;
  return (
    <MobileContext.Provider value={mobile}>{children}</MobileContext.Provider>
  );
}
