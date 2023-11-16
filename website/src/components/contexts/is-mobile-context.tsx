import React from 'react';
import { useWindowSize } from '@docusaurus/theme-common';

export const IsMobileContext = React.createContext(false);

export function IsMobileProvider(props: React.PropsWithChildren) {
  const { children } = props;
  const isMobile = useWindowSize();

  return (
    <IsMobileContext.Provider value={isMobile === 'mobile'}>
      {children}
    </IsMobileContext.Provider>
  );
}
