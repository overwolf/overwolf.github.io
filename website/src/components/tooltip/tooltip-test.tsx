import React from 'react';
import './tooltip.scss';
import { handleMegaToolTipMouseOut, handleMegaToolTipOnOver } from './tooltip';

function TooltipTest(props: {}) {
  const { } = props;

  // ---------------------------------------------------------------------------

  return (
    <div data-tooltip={"test tooltip"} tooltip-position={'top'} onMouseOver={handleMegaToolTipOnOver} onMouseOut={handleMegaToolTipMouseOut}>
      wat
      <p >
        hello hello
      </p>
      test
    </div>
  );

}

export default TooltipTest;