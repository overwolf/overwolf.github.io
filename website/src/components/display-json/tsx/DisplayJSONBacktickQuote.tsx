import React from 'react';
import { BacktickQuote } from "../types/DisplayJSONProperties";

function DisplayJSONBacktickQuote(props: BacktickQuote) {
 const { } = props;

//  console.log(JSON.stringify(props));

// ---------------------------------------------------------------------------

  return (
    <span className='string backtick'>
      {props.value}
    </span>
  );

}

export default DisplayJSONBacktickQuote;