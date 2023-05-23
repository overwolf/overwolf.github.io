import React from "react";
import useLocalStorageHook from "../hooks/local-storage-hook";

// We get the groupId's localStorage key based on this function:
// https://github.com/facebook/docusaurus/blob/bc00bda5e9d6a5a052a77cd414ddf2fb981cae14/packages/docusaurus-theme-common/src/utils/tabsUtils.tsx#L153


function SimpleTab(props: { groupId: string; choices: {[x: string]: string}; }) {
    const { groupId, choices } = props;

    if (!groupId) return console.error("groupId must be set!");
    if (!choices) return console.error("choices must be set!");

    const storageKey = `docusaurus.tab.${groupId}`;
    
    const [group] = typeof window === 'undefined' ? [choices[0]] : useLocalStorageHook<string> (storageKey, Object.keys(choices)[0]);

    return (
        <p>
            {choices[group]}
        </p>
    );

}
  
  export default SimpleTab;