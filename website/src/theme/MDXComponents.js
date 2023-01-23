import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import ImageSlider from '@site/src/components/image-slider/image-slider';
import ImageBoxModal from '@site/src/components/image-box-modal/image-box-modal';
import VideoBox from '@site/src/components/video-box/video-box';
import GameInfo from '@site/src/components/game-info/game-info';
import SkipMe from '@site/src/components/skip-me/skip-me';
import OWTabs from '@site/src/components/ow-tabs/ow-tabs';
import OWTabItem from '@site/src/components/ow-tabs/ow-tab-item';
import Tagger from '../components/tagging/Tagger';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SimpleTab from '../components/simple-tab/simple-tab';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "highlight" tag to our <Highlight /> component!
  // `Highlight` will receive all props that were passed to `highlight` in MDX
  ImageSlider: ImageSlider,
  ImageBoxModal: ImageBoxModal,
  VideoBox: VideoBox,
  GameInfo: GameInfo,
  SkipMe: SkipMe,
  OWTabs: OWTabs,
  OWTabItem: OWTabItem,
  Tagger: Tagger,
  Tabs: Tabs,
  TabItem: TabItem,
  SimpleTab: SimpleTab
};