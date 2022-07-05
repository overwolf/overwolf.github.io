import React, { Children } from 'react';
import * as ReactDOMServer from 'react-dom/server';


function HideMeSkippy(props) {
 const { children } = props;

 const markup = ReactDOMServer.renderToStaticMarkup(children);

// ---------------------------------------------------------------------------

  return (
    <div dangerouslySetInnerHTML={{ __html: 
      `<!-- hidden by Skippy
        ${markup} 
      -->` }} />
  );

}

export default HideMeSkippy;