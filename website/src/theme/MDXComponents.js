import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import ImageSlider from '../components/image-slider/image-slider';
import ImageBoxModal from '../components/image-box-modal/image-box-modal';
import VideoBox from '../components/video-box/video-box';
import GameInfo from '../components/game-info/game-info';
import SkipMe from '../components/skip-me/skip-me';
import OWTabs from '../components/ow-tabs/ow-tabs';
import OWTabItem from '../components/ow-tabs/ow-tab-item';
import ImageHeading from '../components/image-heading/image-heading';
import OWTable from '../components/ow-table/ow-table';
import OWTableRow from '../components/ow-table/ow-table-row';
import OWexpandedRowGroup from '../components/ow-table/ow-expanded-row-group';
import OWdataCell from '../components/ow-table/ow-data-cell';
import Tagger from '../components/tagging/Tagger';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SimpleTab from '../components/simple-tab/simple-tab';
import DebugWrapper from '../components/debug/debug-wrapper';
import EventsData from '../components/game-events-status/EventsData';
import FancyLink from '../components/fancy/fancy-link';
import MatchOnly from '../components/content-tags/gep/match-only';
import DisplayJSON from '../components/display-json/mdx/mdx-to-react';

const devMode = process.env.NODE_ENV === "development";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "highlight" tag to our <Highlight /> component!
  // `Highlight` will receive all props that were passed to `highlight` in MDX
  
  ...WrapAll({
    ImageSlider: ImageSlider,
    ImageBoxModal: ImageBoxModal,
    VideoBox: VideoBox,
    GameInfo: GameInfo,
    SkipMe: SkipMe,
    OWTabs: OWTabs,
    OWTabItem: OWTabItem,
    ImageHeading: ImageHeading,
    OWTable: OWTable,
    OWTableRow: OWTableRow,
    OWexpandedRowGroup: OWexpandedRowGroup,
    OWdataCell: OWdataCell,
    Tagger: Tagger,
    Tabs: Tabs,
    TabItem: TabItem,
    SimpleTab: SimpleTab,
    EventsData: EventsData,
    FancyLink: FancyLink,
    MatchOnly: MatchOnly,
    DisplayJSON: DisplayJSON
  })
};

function WrapAll(elements) {
  if(!devMode) return elements;
  const result = {};
  Object.keys(elements).forEach((key) => {
    result[key] = DebugWrapper(elements[key]);
  });
  return result;
}
