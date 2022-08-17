import React, { Children } from 'react';


function Tagger(props) {
 

// ---------------------------------------------------------------------------

  return (
    <div className={props.type}>
      {/* <p>{props.type}</p> */}
        {props.children}
    </div>
  );

}

export default Tagger;