import React, { useState } from "react";
import useIsBrowser from '@docusaurus/useIsBrowser';

// We get the groupId's localStorage key based on this function:
// https://github.com/facebook/docusaurus/blob/bc00bda5e9d6a5a052a77cd414ddf2fb981cae14/packages/docusaurus-theme-common/src/utils/tabsUtils.tsx#L153



class SimpleTab extends React.Component {
    getStorageKey(groupId) {
        return `docusaurus.tab.${groupId}`;
    }

    constructor(props) {
        super();
        const { groupId, choices } = props;
        if (!groupId) return console.error("groupId must be set!");
        if (!choices) return console.error("choices must be set!");
        this.choices = choices;

        if (typeof window === 'undefined') {
            this.state = { current: Object.keys(choices)[0] }
        } else {
            const storageKey = this.getStorageKey(groupId);
            if (!localStorage[storageKey]) localStorage[storageKey] = Object.keys(choices)[0];

            this.state = { current: localStorage[storageKey] }

            window.addEventListener('storage', (event) => {
                if (event.key === storageKey && this.choices[event.newValue] !== undefined) {
                    this.setState({ current: event.newValue });
                }
            });
        }
    }

    render() {
        return (
            <p>
                {this.choices[this.state.current]}
            </p>
        );
    }
}

export default SimpleTab;