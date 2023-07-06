import "../scss/DisplayJSON.scss";
import React from 'react';
import { ExactChildren } from "./utils/ChildValidation"
import Arrow from "./syntactic/Arrow";
import { DisplayJSONPropsChildren } from "../types/DisplayJSONProperties";

function DisplayJSONFunction(props: DisplayJSONPropsChildren) {
  const { children } = props;
  const childArray = ExactChildren(children, 2);
  const [params, returnType] = childArray;

  //  console.log(JSON.stringify(props));

  // ---------------------------------------------------------------------------

  return (
    <span className="function">
      {params}<Arrow/>{returnType}
    </span>
  );

}

export default DisplayJSONFunction;