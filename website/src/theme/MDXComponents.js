import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import ImageSlider from '@site/src/components/image-slider/image-slider';
import ImageBoxModal from '@site/src/components/image-box-modal/image-box-modal';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "highlight" tag to our <Highlight /> component!
  // `Highlight` will receive all props that were passed to `highlight` in MDX
  ImageSlider: ImageSlider,
  ImageBoxModal: ImageBoxModal,
};