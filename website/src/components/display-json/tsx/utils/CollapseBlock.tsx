import React, { useContext, useState } from 'react';
import { DisplayJSONPropsChildren } from "../../types/DisplayJSONProperties";
import Comma from "../syntactic/Comma";
import NewLine from "../syntactic/NewLine";
import Expand from "../syntactic/Expand";
import "../../scss/DisplayJSON.scss";
import Indent from './Indent';
import { ToChildArray } from './ChildValidation';
import { IndentContext, IndentProvider } from './IndentContext';
import DisplayJSONConfig from '../../config/DisplayJSONConfig';

function CollapseBlock(props: DisplayJSONPropsChildren<{ opening: string, closing: string }>) {
  const { opening, children, closing } = props;
  const [open, setOpen] = useState(true);
  const childArray = ToChildArray(children)
  const separated = (childArray).map((child, index) => {
    return (
      <>
        <Indent/>{child}{childArray.length !== index + 1 && <Comma />}<NewLine />
      </>
    )
  });
  const indentCount = (useContext(IndentContext)/DisplayJSONConfig.indent)%3;

  // ---------------------------------------------------------------------------

  return (
    <span className={["first", "second", "third"][indentCount]}>
      <span className={`opening ${open ? "open" : ""}`} onClick={() => setOpen(!open)}><Expand open={open}/>{opening}</span>
        <span style={{ display: open ? "" : "none" }}>
          <NewLine />
            <IndentProvider>
              {separated}
            </IndentProvider>
          <Indent />
        </span>
        <span className={"collapsed"} onClick={() => setOpen(true)} style={{ display: open ? "none" : "" }}>
          {separated}
        </span>
      <span className={"closing"} onClick={() => setOpen(!open)}>{closing}</span>
    </span>
  );

}

export default CollapseBlock;