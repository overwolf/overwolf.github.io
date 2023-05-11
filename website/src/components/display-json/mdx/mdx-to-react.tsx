// @ts-ignore

import React from 'react';


function DisplayJSON(props: { content: any, children: any }) {
//  console.log(props)

// ---------------------------------------------------------------------------

  return (
    <>
      <div style={{whiteSpace: 'pre-wrap'}} dangerouslySetInnerHTML={{__html: `${JSON.stringify(props, undefined, 4)}`}} />
    </>);

}

export default DisplayJSON;