import React from 'react';
import { SingleQuote } from "../types/DisplayJSONProperties";

function DisplayJSONSingleQuote(props: SingleQuote) {
 const { } = props;

//  console.log(JSON.stringify(props));

// ---------------------------------------------------------------------------

return (
  <span className='string single'>
    {props.value}
  </span>
);

}

export default DisplayJSONSingleQuote;