import React from 'react';
import OWClassNames from '../OverwolfClassNames';
import Link from '@docusaurus/Link';

type Params = Parameters<typeof Link>['0'];

function OWLink(props: Params) {
  return <Link {...props} />;
}

export default OWLink;
