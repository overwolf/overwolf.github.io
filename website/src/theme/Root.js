import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';

// Default implementation, that you can customize
export default function Root({children}) {

  let location = useLocation();

  useEffect(() => {
    const script = document.createElement('script');
    
    script.src = '/js/ui-logic.js';

    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, [location]);

  return (
    <>
      {children}
    </>
  );
}