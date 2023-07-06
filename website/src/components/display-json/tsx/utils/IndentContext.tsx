import React, { useContext } from 'react';
import DisplayJSONConfig from '../../config/DisplayJSONConfig';
import { DisplayJSONPropsChildren } from '../../types/DisplayJSONProperties';

export const IndentContext = React.createContext(0);

export function IndentProvider(props: DisplayJSONPropsChildren) {
    const { children } = props;
    const upTo = useContext(IndentContext) ?? -DisplayJSONConfig.indent;
    return (
        <IndentContext.Provider value={upTo + DisplayJSONConfig.indent}>
            {children}
        </IndentContext.Provider>
    )
}