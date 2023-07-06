import React from 'react';
import { DoubleQuote } from "../types/DisplayJSONProperties";

function DisplayJSONDoubleQuote(props: DoubleQuote) {
  const { } = props;

  //  console.log(JSON.stringify(props));

  // ---------------------------------------------------------------------------

  return (
    <span className='string double'>
      {props.value}
    </span>
  );

}

export default DisplayJSONDoubleQuote;