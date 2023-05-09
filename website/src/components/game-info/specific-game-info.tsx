import React from 'react';
import FancyLink from '../fancy/fancy-link';

export type DisabledLinks = {
    docs: boolean,
    status: boolean,
    compliance: boolean
}

export function AllLinksOn(): DisabledLinks { 
    return {
        docs: false,
        status: false,
        compliance: false
    }
}

function SpecificGameInfo(props: {
    metaData: GameMetaData;
    type?: string;
    disabledLinks: DisabledLinks
}) {
    const { metaData, type, disabledLinks } = props;
    const { id, displayId, path, docs, compliance, variant } = metaData;
    
    if (!type && !variant) console.error("No variant was defined for this game!", metaData);

    const prefix = variant ?? type;
    const mainName = variant ? `${type} (${prefix})` : type;

    return (
        <>
            <p>
                <span>{mainName} ID: </span>
                {displayId || id}
            </p>

            {displayId &&
                <p>
                    <span>Tracking ID: </span>
                    {id}
                </p>
            }

            {!disabledLinks.docs && docs &&
                <FancyLink
                    name={`${prefix} API docs`}
                    pathUrl={docs}
                />
            }

            {!disabledLinks.status && path &&
                <FancyLink
                    name={`${prefix} events status`}
                    pathUrl={path}
                />
            }

            {!disabledLinks.compliance && compliance &&
                <FancyLink
                    name={`${prefix} compliance page`}
                    pathUrl={compliance}
                />
            }
        </>
    )
}

export default SpecificGameInfo;