import React, { useContext } from 'react';
import { IndentContext } from "./IndentContext";

function Indent() {
    // ---------------------------------------------------------------------------
    const indentLevel = useContext(IndentContext);
    return (
        <>{" ".repeat(indentLevel)}</>
    );

}

export default Indent;