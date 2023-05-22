import React, { useEffect } from 'react';
import useDebugInfoHook from '../debug/debug-info-hook';
import useDevelopmentModeHook from '../hooks/development-mode-hook';


function SkipMe(props: { children: any; type: any; }) {
  var { type, children } = props;

  const devMode = useDevelopmentModeHook();
  //  if(!type) console.error("Missing skipMe type!");
  if (!devMode) return (<></>);
  const [debug, setDebug] = useDebugInfoHook();

  return (
    <div style={{ color: "grey", paddingLeft: "10px" }}>
      {
        debug.name && [
          type || "debugType",
          <br />,
          <i style={{ paddingLeft: "20px" }}>
            {children}
          </i>
        ]
      }
    </div>
  );

}

export default SkipMe;