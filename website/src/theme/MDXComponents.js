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
import ImageHeading from '@site/src/components/image-heading/image-heading';
import OWTable from '@site/src/components/ow-table/ow-table';
import OWTableRow from '@site/src/components/ow-table/ow-table-row';
import OWexpandedRowGroup from '@site/src/components/ow-table/ow-expanded-row-group';
import OWdataCell from '@site/src/components/ow-table/ow-data-cell';
import CodeBlock from '@site/src/components/code-block/code-block';
import CodeBlocMainGroup from '@site/src/components/code-block/code-block-main-group';
import CodeBlockSubGroup from '@site/src/components/code-block/code-block-sub-group';
import CodeBlockSingleItem from '@site/src/components/code-block/code-block-single-item';
import CodeBlockComment from '@site/src/components/code-block/code-block-comment';
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
  ImageHeading: ImageHeading,
  OWTable: OWTable,
  OWTableRow: OWTableRow,
  OWexpandedRowGroup: OWexpandedRowGroup,
  OWdataCell: OWdataCell,
  CodeBlock: CodeBlock,
  CodeBlocMainGroup: CodeBlocMainGroup,
  CodeBlockSubGroup: CodeBlockSubGroup,
  CodeBlockSingleItem: CodeBlockSingleItem,
  CodeBlockComment: CodeBlockComment,
  Tagger: Tagger,
  Tabs: Tabs,
  TabItem: TabItem,
  SimpleTab: SimpleTab
};