// @ts-ignore
import UnderlyingThemedImage from '@theme/ThemedImage';

import React from 'react';


function SkipMe(props: { imageUrl: string, alt: string }) {
 const { imageUrl, alt } = props;

// ---------------------------------------------------------------------------

  return (
    <UnderlyingThemedImage alt={alt} sources={{
        dark: imageUrl,
        light: imageUrl.replace(/(\.[a-zA-Z])/, '-light$1')
    }}/>
  );

}

export default SkipMe;