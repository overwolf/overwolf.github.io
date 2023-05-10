import pluginFactory, { BaseBlockOptions, DeEscapeOpening, OpeningTagFactory, DeEscapeClosing, ClosingTagFactory, ContentTransform, ContentNodesTransform, TreeNode } from "../base/baseBlockPlugin";

export interface DisplayJSONOptions extends BaseBlockOptions {};

// This string value does not matter much
const nodeType = "DisplayJSON";
const defaultOptions: DisplayJSONOptions = {
  openingTag: '!JSON',
  closingTag: "\/JSON",
  includeOpening: false,
  includeClosing: false,
  parseContent: false,
  types: [
    'Function',
    'Event',
    'GameEvent',
    'Values'
  ]
};

const openingTagFuzzy = (openingTag: string) => `${openingTag}`;
const closingTagFuzzy = (closingTag: string) => `${closingTag}`;

// IMPORTANT - Make sure not to try to match for word boundry here, since some of the lines this will run on are split into strings already
const openingTagFactory: OpeningTagFactory<DisplayJSONOptions> = (options: DisplayJSONOptions, typesMatcher: string) =>
  new RegExp(`^(?<!${options.escapeString})${openingTagFuzzy(options.openingTag)} (${typesMatcher}) ([\\w]*)(?:\\s*)`);

// IMPORTANT - Make sure not to try to match for line-end here, since the lines this will run on are split into strings already
const closingTagFactory: ClosingTagFactory<DisplayJSONOptions> = (options: DisplayJSONOptions) =>
  new RegExp(`^(?<!${options.escapeString})${closingTagFuzzy(options.closingTag)}(?:\\s*?)$`);

const deEscapeOpening: DeEscapeOpening<DisplayJSONOptions> = (options: DisplayJSONOptions, escaped: string) =>
  escaped.replace(`${options.escapeString}(${openingTagFuzzy(options.openingTag)})`, "$1");

const deEscapeClosing: DeEscapeClosing<DisplayJSONOptions> = (options: DisplayJSONOptions, escaped: string) =>
  escaped.replace(`${options.escapeString}(${closingTagFuzzy(options.openingTag)})`, "$1");

// The plugin can transform the content here before passing it to further parsing, either the plugins' or remarks'
/* const contentTransformm: ContentTransform<DisplayJSONOptions> = (options: DisplayJSONOptions, content: string[]) => {

} */

// Where we would transform the 
const contentNodesTransform: ContentNodesTransform<DisplayJSONOptions> = (options: DisplayJSONOptions, content: string[], matchGroups: string[], childNodes: TreeNode[]): [TreeNode[], any] => {
  console.log(content);
  return [[], {raw: content, matches: matchGroups}];
}

  

export const displayJSON = pluginFactory(
  nodeType,
  defaultOptions,
  openingTagFactory,
  closingTagFactory,
  deEscapeOpening,
  deEscapeClosing,
  /* contentTransform */ undefined,
  contentNodesTransform
)

export default displayJSON;