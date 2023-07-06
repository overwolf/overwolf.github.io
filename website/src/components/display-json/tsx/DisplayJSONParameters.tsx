import React from 'react';
import "../scss/DisplayJSON.scss"
import { DisplayJSONPropsChildren } from "../types/DisplayJSONProperties";
import CollapseBlock from "./utils/CollapseBlock"

function DisplayJSONParameters(props: DisplayJSONPropsChildren) {
  const { children } = props;
  

  //  console.log(JSON.stringify(props));

  // ---------------------------------------------------------------------------

  return (
    <span className='parameters'>
      <CollapseBlock opening="(" closing=")">
        {children}
      </CollapseBlock>
    </span>
  );

}

export default DisplayJSONParameters;