import React, { Children } from 'react';


function Var(props) {

// ---------------------------------------------------------------------------

  return (
    <div varName={props.name}>
      {/* <p>{props.type}</p> */}
        {props.children}
    </div>
  );

}

export default Var;