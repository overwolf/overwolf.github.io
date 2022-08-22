// This code is loosely based on https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-mdx-loader/src/remark/admonitions/index.ts

const visit = require('unist-util-visit');
import type {Transformer, Processor, Plugin} from 'unified';
import type {Literal} from 'mdast';

const NEWLINE = '\n';

export type TaggerOptions = {
  tag: string;
  keywords: string[];
};

export const DefaultTaggerOptions: TaggerOptions = {
  tag: '@@',
  keywords: [
    'Function',
    'Object',
    'Enum',
    'Event',
    'GameEvent',
    'InfoUpdate'
  ],
};

function normalizeOptions(
  options: Partial<TaggerOptions>,
): TaggerOptions {
  return {...DefaultTaggerOptions, ...options};
}

// This string value does not matter much
// It is ignored because nodes are using hName/hProperties coming from HAST
const taggerNodeType = "Tagger";

const codeComponentTagger: Plugin = function plugin(
  this: Processor,
  optionsInput: Partial<TaggerOptions> = {},
): Transformer {
  const options = normalizeOptions(optionsInput);

  const keywords = Object.values(options.keywords).join('|');
  const regex = new RegExp(`${options.tag}(${keywords})(\\s*)?\n`);
  const escapeTag = new RegExp(`\\${options.tag}`, 'g');

  // The tokenizer is called on blocks to determine if there is an admonition
  // present and create tags for it
  function blockTokenizer(this: any, eat: any, value: string, silent: boolean) {
    // Stop if no match or match does not start at beginning of line
    const match = regex.exec(value);
    if (!match || match.index !== 0) {
      return false;
    }
    // If silent return the match
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
  Parser.blockTokenizers.Tagger = blockTokenizer;
  Parser.blockMethods.splice(
    Parser.blockMethods.indexOf('admonition') + 1,
    0,
    taggerNodeType,
  );

  return (root) => {
    // escape everything except admonitionHTML nodes
    visit(
      root,
      (node: unknown): node is Literal =>
        (node as Literal | undefined)?.type !== taggerNodeType,
      (node: Literal) => {
        if (node.value) {
          node.value = node.value.replace(escapeTag, options.tag);
        }
      },
    );
  };
};

export default codeComponentTagger;