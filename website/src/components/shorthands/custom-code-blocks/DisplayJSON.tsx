// @ts-ignore

import React from 'react';


function DisplayJSON(props: { content: any, children: any }) {
//  console.log(props)

// ---------------------------------------------------------------------------

  return (
    <>
        {JSON.stringify(props, undefined, 4)}
    </>);

}

export default DisplayJSON;