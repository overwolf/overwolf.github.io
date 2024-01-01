import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Footer from '../components/footer/footer';
import { IsMobileProvider } from '../components/contexts/is-mobile-context';

// Default implementation, that you can customize
export default function Root({ children }) {
  const location = useLocation();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/js/ui-logic.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [location]);

  return (
    <>
      <IsMobileProvider>
        {children}
        <Footer />
      </IsMobileProvider>
    </>
  );
}
