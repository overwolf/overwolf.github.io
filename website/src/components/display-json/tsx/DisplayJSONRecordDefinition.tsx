import React from 'react';
import { RecordDefinition } from "../types/DisplayJSONProperties";

function DisplayJSONRecordDefinition(props: RecordDefinition) {
 const { } = props;

//  console.log(JSON.stringify(props));

// ---------------------------------------------------------------------------

  return (
    <span className='record-definition'>
      {props.name}
    </span>
  );

}

export default DisplayJSONRecordDefinition;