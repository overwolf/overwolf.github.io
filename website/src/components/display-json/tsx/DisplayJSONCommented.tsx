import React from 'react';
import { DisplayJSONPropsChildren } from "../types/DisplayJSONProperties";
import { ToChildArray } from './utils/ChildValidation';
import Indent from './utils/Indent';

function DisplayJSONCommented(props: DisplayJSONPropsChildren) {
  const { children } = props;
  return (
    <>
      {children}
    </>
  );

}

export default DisplayJSONCommented;