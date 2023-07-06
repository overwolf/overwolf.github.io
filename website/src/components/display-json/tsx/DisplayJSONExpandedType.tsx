import React from 'react';
import { DisplayJSONPropsChildren } from "../types/DisplayJSONProperties";
import { MinChildren } from './utils/ChildValidation';

function DisplayJSONExpandedType(props: DisplayJSONPropsChildren) {
  const { children } = props;

  const [typeName, expandedType] = MinChildren(children, 1);
  //  console.log(JSON.stringify(props));

  // ---------------------------------------------------------------------------

  return (
    <>
      <span className='type'>{typeName}</span>
      {expandedType &&
        <span className='expanded-type'>{expandedType}</span>
      }
    </>
  );

}

export default DisplayJSONExpandedType;