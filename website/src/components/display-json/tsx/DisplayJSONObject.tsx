import React from 'react';
import { DisplayJSONPropsChildren } from "../types/DisplayJSONProperties";
import CollapseBlock from './utils/CollapseBlock';

function DisplayJSONObject(props: DisplayJSONPropsChildren) {
 const { } = props;

//  console.log(JSON.stringify(props));

// ---------------------------------------------------------------------------

  return (
    <span className='object'>
      <CollapseBlock opening='{' closing='}'>
        {props.children}
      </CollapseBlock>
    </span>
  );

}

export default DisplayJSONObject;