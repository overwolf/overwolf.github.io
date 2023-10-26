import React, {FC} from 'react';
import { useWindowSize } from '@docusaurus/theme-common';
import ThemedImage from '@theme/ThemedImage';

interface ImageToggleProps {
  imgSrc: string;
  alt: string;
}

// -----------------------------------------------------------------------------

// This is ugly, but it works for now
// TODO: generalize asset loading
const ImageToggle: FC<ImageToggleProps> = props => {
  const { imgSrc, alt } = props;

  const platform = useWindowSize();

  return (
    <>
    { platform === 'mobile' && <ThemedImage alt={alt} sources={{
      dark: imgSrc?.replace('${platform}', 'mobile')?.replace('${theme}', 'dark'),
      light: imgSrc?.replace('${platform}', 'mobile')?.replace('${theme}', 'light'),
    }}/>
    }
    { platform !== 'mobile' && <ThemedImage alt={alt} sources={{
      dark: imgSrc?.replace('${platform}', 'desktop')?.replace('${theme}', 'dark'),
      light: imgSrc?.replace('${platform}', 'desktop')?.replace('${theme}', 'light'),
    }}/>
    }
    </>
  );
};

export default ImageToggle;