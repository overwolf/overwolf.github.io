// This code is loosely based on https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-mdx-loader/src/remark/admonitions/index.ts

const visit = require('unist-util-visit');
import type {Transformer, Processor, Plugin} from 'unified';
import type {Literal} from 'mdast';

const NEWLINE = '\n';

export type VariableOptions = {
  tag: string
};

export const DefaultVariableOptions: VariableOptions = {
  tag: '!$_var'
};

function normalizeOptions(
  options: Partial<VariableOptions>,
): VariableOptions {
  return {...DefaultVariableOptions, ...options};
}

// This string value does not matter much
// It is ignored because nodes are using hName/hProperties coming from HAST
const varsNodeType = "Var";

const variablesReplacer: Plugin = function plugin(
  this: Processor,
  optionsInput: Partial<VariableOptions> = {},
): Transformer {
  const options = normalizeOptions(optionsInput);

  const regex = new RegExp(`${options.tag}(\\w+)`);

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

    // consume the processed tag and replace escape sequences
    const contentString = content.join(NEWLINE);
    const add = eat(opening + food.join(NEWLINE));

    // parse the content in block mode
    const exit = this.enterBlock();
    const contentNodes = this.tokenizeBlock(contentString, now);
    exit();

    const element = {
      type: varsNodeType,
      data: {
        // hName/hProperties come from HAST
        // See https://github.com/syntax-tree/mdast-util-to-hast#fields-on-nodes
        hName: varsNodeType,
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
  Parser.inlineTokenizers[varsNodeType] = blockTokenizer;
  Parser.inlineMethods.push(varsNodeType);

  return;
};

export default variablesReplacer;