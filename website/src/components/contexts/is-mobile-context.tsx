import React, { useContext } from 'react';
import useIsMobile from '../hooks/is-mobile-hook';

export const IsMobileContext = React.createContext(false);

export function IsMobileProvider(props: React.PropsWithChildren) {
  const { children } = props;
  const isMobile = useIsMobile();

  return (
    <IsMobileContext.Provider value={isMobile}>
      {children}
    </IsMobileContext.Provider>
  );
}

export const useIsMobileContext = () => useContext(IsMobileContext);
