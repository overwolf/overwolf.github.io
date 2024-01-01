import { Collapsible } from '@docusaurus/theme-common';
import React from 'react';
import OWClassNames from '../OverwolfClassNames';
import './style.scss';

type Params = Parameters<typeof Collapsible>['0'];

function OWCollapsible(props: Params) {
  return <Collapsible className={OWClassNames.common.collapsible} {...props} />;
}

export default OWCollapsible;
