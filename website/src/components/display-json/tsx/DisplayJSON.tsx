import React from 'react';
import { DisplayJSONPropsChildren, Root } from "../types/DisplayJSONProperties";
import "../scss/DisplayJSON.scss";

function DisplayJSON(props: DisplayJSONPropsChildren<Root>) {
  const { children, name } = props;
  const title = name.replaceAll("-", " ");
  const id = name.toLowerCase();
  // ---------------------------------------------------------------------------

  return (
    <pre className='display-json'>
      <div className='title'>
        {title}
      </div>
      <code>
        {children}
      </code>
    </pre>
  );

}

export default DisplayJSON;