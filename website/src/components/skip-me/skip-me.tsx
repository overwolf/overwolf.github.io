import React from 'react';
import * as ReactDOMServer from 'react-dom/server';


function SkipMe(props: { children: any; }) {
 const { children } = props;
 const devMode = process.env.NODE_ENV === "development";
 const markup = ReactDOMServer.renderToStaticMarkup(children);

// ---------------------------------------------------------------------------

  return (
    devMode
    ? <div dangerouslySetInnerHTML={{ __html: 
      `<!-- hidden by Skippy
        ${markup} 
      -->` }} />
    : <div/>
  );

}

export default SkipMe;