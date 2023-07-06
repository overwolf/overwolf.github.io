import React from 'react';

function Expand(props: { open: boolean }) {
  const { open } = props;

  // ---------------------------------------------------------------------------

  return (
    <span className={`expand`}>
      {open ? "⯆" : "⯈"}
    </span>
  );

}

export default Expand;