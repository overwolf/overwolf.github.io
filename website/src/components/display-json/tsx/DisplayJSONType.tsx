import React from 'react';
import { TypeDefinition } from "../types/DisplayJSONProperties";

function DisplayJSONType(props: TypeDefinition) {
 const { } = props;

//  console.log(JSON.stringify(props));

// ---------------------------------------------------------------------------

  return (
    <span className='type-name'>
      {props.name}
    </span>
  );

}

export default DisplayJSONType;