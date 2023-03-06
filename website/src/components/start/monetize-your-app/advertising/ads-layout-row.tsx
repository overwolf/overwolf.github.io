import React from 'react';
import OWexpandedRowGroup from '../../../ow-table/ow-expanded-row-group';
import OWTableRow from '../../../ow-table/ow-table-row';
import OWdataCell from '../../../ow-table/ow-data-cell';
import OWTabs from '../../../ow-tabs/ow-tabs';
import OWTabItem from '../../../ow-tabs/ow-tab-item';


function AdsLayoutRow(props: {
    layout: {
        image: string,
        name: string
    },
    revenueBenchmark: string; tabs?: [{ image: string, name: string }]; description: {
        description: string,
        hasVideo: boolean,
        dimensions: string,
        userFriction: string,
        designConstraints: string,
        revenue: string
    }
}) {
    const { layout, revenueBenchmark, tabs, description } = props;
    console.log(tabs);
    const tabsItems = tabs?.map(item => {
        return(
            <OWTabItem tabID={item.name} label={item.name}>
                <img src={item.image} alt={item.name} />
            </OWTabItem>
        )
    })

    // ---------------------------------------------------------------------------

    return (
        <OWexpandedRowGroup>
            <OWTableRow expandButton={!!tabs}>
                <OWdataCell thTitle={'Layout'} bold={true} width={'20%'} useAsMobileTitle={true}>
                    {layout.name}
                    <img src={layout.image} />
                </OWdataCell>
                <OWdataCell thTitle={'Value ($)'} width={'15%'}>
                    {revenueBenchmark}
                </OWdataCell>
                <OWdataCell thTitle={'Description'} width={'100%'}>
                    <p>{description.description}</p>
                    <div><b>Dimensions</b> - {description.dimensions}</div>
                    <div><b>Revenue</b> - {description.revenue}, <b>Has Video</b> - {description.hasVideo ? "Yes" : "No"}</div>
                    <div><b>Design Constraints</b> - {description.designConstraints}, <b>User Friction</b> - {description.userFriction}</div>
                </OWdataCell>
            </OWTableRow>
            {tabs && 
                <OWTableRow>
                    <OWTabs>
                        {tabsItems}
                    </OWTabs>
                </OWTableRow>
            }
        </OWexpandedRowGroup>
    );

}

export default AdsLayoutRow;