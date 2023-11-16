/* eslint-disable no-template-curly-in-string */
import React, { FC, useContext } from 'react';
import ThemedImage from '@theme/ThemedImage';
import { IsMobileContext } from '../contexts/is-mobile-context';

interface ImageToggleProps {
  imgSrc: string;
  alt: string;
}

// -----------------------------------------------------------------------------

// This is ugly, but it works for now
// TODO: generalize asset loading
const ImageToggle: FC<ImageToggleProps> = (props) => {
  const { imgSrc, alt } = props;

  const isMobile = useContext(IsMobileContext);

  const platformPath = imgSrc.replace(
    '${platform}',
    isMobile ? 'mobile' : 'desktop',
  );

  return (
    <ThemedImage
      alt={alt}
      sources={{
        dark: platformPath?.replace('${theme}', 'dark'),
        light: platformPath?.replace('${theme}', 'light'),
      }}
    />
  );
};

export default ImageToggle;
