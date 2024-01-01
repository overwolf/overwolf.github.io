import React from 'react';
import OWClassNames from '../OverwolfClassNames';
import { Link, LinkProps } from 'react-scroll';

type Params = LinkProps;

function OWInternalLink(props: Params) {
  // @ts-expect-error weird bindings from the package
  return <Link {...props} />;
}

export default OWInternalLink;
