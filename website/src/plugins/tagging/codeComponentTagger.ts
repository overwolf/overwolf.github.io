// This code is loosely based on https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-mdx-loader/src/remark/admonitions/index.ts

import type {Transformer, Processor, Plugin} from 'unified';

const NEWLINE = '\n';

// Definition of supported tagger options
export type TaggerOptions = {
  tag: string;
  keywords: string[];
};

// Default tagger options
export const DefaultTaggerOptions: TaggerOptions = {
  tag: '@@',
  keywords: [
    'Function',
    'Object',
    'Enum',
    'Event',
    'GameEvent',
    'InfoUpdate',
    'Endpoint'
  ],
};

// Clean-up method for the options passed to this plugin, to ensure that anything left empty is filled by the default options
function normalizeOptions(
  options: Partial<TaggerOptions>,
): TaggerOptions {
  return {...DefaultTaggerOptions, ...options};
}

// Identifier for this node type in the AST
const taggerNodeType = "Tagger";

// Plugin method
const codeComponentTagger: Plugin = function plugin(
  this: Processor,
  optionsInput: Partial<TaggerOptions> = {},
): Transformer {
  // Clean up options
  const options = normalizeOptions(optionsInput);

  // Bundle up keywords as a list of a|b|c|d for the regex
  const keywords = Object.values(options.keywords).join('|');
  // Create entry regex, to detect when we should enter a block
  const regex = new RegExp(`${options.tag}(${keywords})(\\s*)?\n`);
  // Create exit regex, to detect when we should close a block
  const escapeTag = new RegExp(`\\${options.tag}`, 'g');

  // The tokenizer is called on blocks to determine if there is a tag
  function blockTokenizer(this: any, eat: any, value: string, silent: boolean) {
    // Stop if the section does not start with the tag
    const match = regex.exec(value);
    if (!match || match.index !== 0) {
      return false;
    }
    // If we got here, and we're running in silent, return that there IS a tag
    if (silent) {
      return true;
    }

    const now = eat.now();
    const [opening, keyword] = match as string[] as [
      string,
      string,
    ];
    const food = [];
    const content = [];

    let newValue = value;
    // consume lines until a closing tag
    let idx = newValue.indexOf(NEWLINE);
    while (idx !== -1) {
      // grab this line and eat it
      const next = newValue.indexOf(NEWLINE, idx + 1);
      const line =
        next !== -1 ? newValue.slice(idx + 1, next) : newValue.slice(idx + 1);
      food.push(line);
      newValue = newValue.slice(idx + 1);
      // the closing tag is NOT part of the content
      if (line.startsWith(options.tag)) {
        break;
      }
      content.push(line);
      idx = newValue.indexOf(NEWLINE);
    }

    // consume the processed tag and replace escape sequences
    const contentString = content.join(NEWLINE).replace(escapeTag, options.tag);
    const add = eat(opening + food.join(NEWLINE));

    // parse the content in block mode
    const exit = this.enterBlock();
    const contentNodes = this.tokenizeBlock(contentString, now);
    exit();

    const element = {
      type: taggerNodeType,
      data: {
        // hName/hProperties come from HAST
        // See https://github.com/syntax-tree/mdast-util-to-hast#fields-on-nodes
        hName: taggerNodeType,
        hProperties: {
          type: keyword,
        },
      },
      children: [
        ...contentNodes,
      ],
    };
    return add(element);
  }

  // add tokenizer to parser after fenced code blocks
  const Parser = this.Parser.prototype;
  Parser.blockTokenizers[taggerNodeType] = blockTokenizer;
  Parser.blockMethods.splice(Parser.blockMethods.indexOf("list"), 0, taggerNodeType);

  return;
};

export default codeComponentTagger;