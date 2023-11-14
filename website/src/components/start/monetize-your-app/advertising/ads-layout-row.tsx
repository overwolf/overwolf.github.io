import React from 'react';
import OWexpandedRowGroup from '../../../ow-table/ow-expanded-row-group';
import OWTableRow from '../../../ow-table/ow-table-row';
import OWdataCell from '../../../ow-table/ow-data-cell';
import OWTabs from '../../../ow-tabs/ow-tabs';
import OWTabItem from '../../../ow-tabs/ow-tab-item';
import ThemedImage from '../../../shorthands/themed-image/ThemedImage';
import './ads-layout-row.scss';

function join(dir: string, path: string): string {
  return `${dir}/${path}`;
}

function AdField(props: { title: string; value: string; first?: boolean }) {
  const { title, value, first } = props;
  return (
    <div style={{ minWidth: first ? '250px' : '' }}>
      <span style={{ color: 'var(--color-999)' }}>{`${title}:`}</span>
      {` ${value}`}
    </div>
  );
}

function AdsLayoutRow(props: {
  name: string;
  assetsPath: string;
  undervalued: boolean;
  revenueBenchmark: string;
  tabs: string[];
  overview: {
    description: string;
    showsVideo: boolean;
    dimensions: string;
    multipleAds: boolean;
    userFriction: string;
    designConstraints: string;
    revenue: string;
  };
}) {
  const { name, assetsPath, revenueBenchmark, undervalued, tabs, overview } =
    props;
  const fullSizePath = join(assetsPath, 'full-size');
  const tabsItems = tabs.map((item, i) => {
    let name = `${item} Variant`;
    item = item.replace(' Aligned', '');
    const id = item.toLocaleLowerCase().replace(' ', '-');
    let filePath = join(fullSizePath, 'layout.png');
    if (i === 0) name += ' (Main)';
    else filePath = filePath.replace('.png', `-${id}.png`);
    return (
      <OWTabItem key={id} tabID={id} label={name}>
        <ThemedImage imageUrl={filePath} alt={name} />
      </OWTabItem>
    );
  });

  // ---------------------------------------------------------------------------

  return (
    <OWexpandedRowGroup mobileTitle={'Layout'} mobileDescription={name}>
      <OWTableRow expandButton={true}>
        <OWdataCell thTitle={'Layout'} width={'23%'} useAsMobileTitle={true}>
          <b>{name}</b>
          <ThemedImage
            imageUrl={join(assetsPath, 'preview.svg')}
            alt={`${name} Preview`}
          />
        </OWdataCell>
        <OWdataCell thTitle={'Revenue Est. ($)'} width={'13%'}>
          {revenueBenchmark} {undervalued && '*'}
        </OWdataCell>
        <OWdataCell thTitle={'Overview'} width={'64%'}>
          <p style={{ marginBottom: '12px' }}>{overview.description}</p>
          <div>
            <div className="row">
              <AdField title="Dimensions" value={overview.dimensions} />
            </div>
            {overview.multipleAds && (
              <div className="row">
                <AdField title="Multiple Ads in Container**" value={'True'} />
              </div>
            )}
            <div className="row">
              <AdField title="Revenue" value={overview.revenue} first={true} />{' '}
              <AdField
                title="Show Video Ads"
                value={overview.showsVideo ? 'Yes' : 'No'}
              />
            </div>
            <div className="row">
              <AdField
                title="Design Constraints"
                value={overview.designConstraints}
                first={true}
              />{' '}
              <AdField title="User Friction" value={overview.userFriction} />
            </div>
          </div>
        </OWdataCell>
      </OWTableRow>
      <OWTableRow>
        <OWTabs>{tabsItems}</OWTabs>
      </OWTableRow>
    </OWexpandedRowGroup>
  );
}

export default AdsLayoutRow;
