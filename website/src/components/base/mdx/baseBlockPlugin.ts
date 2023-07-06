// This code is loosely based on https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-mdx-loader/src/remark/admonitions/index.ts

import visit from 'unist-util-visit';
import type { Transformer, Processor, Plugin } from 'unified';
import type { Literal } from 'mdast';

const NEWLINE = '\n';
// This translates to \\ in the string, aka a single escaped \ in the regex. String translations are fun
const DEFAULTESCAPE = "\\\\";
const DEFAULTTURN = 'admonition'


export interface BaseBlockOptions {
	openingTag: string;
	closingTag?: string;
	escapeString?: string;
	types?: { [key: string]: any };
	includeOpening: boolean;
	includeClosing: boolean;
	parseContent: boolean;
}

export interface TreeNode<Type, Properties = undefined> {
	type: string;
	data: {
		// hName/hProperties come from HAST
		// See https://github.com/syntax-tree/mdast-util-to-hast#fields-on-nodes
		hName: string;
		enumType?: Type
		hProperties: Properties;
	}
	children?: TreeNode<any>[]
}

export function createTreeNode<Type, Properties = undefined>(type: string, properties: Properties, enumType?: Type, children?: TreeNode<any, any>[]) : TreeNode<Type, Properties> {
	return {
		type,
		data: {
			hName: type,
			enumType,
			hProperties: properties
		},
		children
	}
}

function normalizeOptions<Options extends BaseBlockOptions>(
	options: Partial<Options>,
	defaults: Options
): Options {
	return { ...defaults, ...options };
}

export type OpeningTagFactory<Options = BaseBlockOptions> = {
	(
		options: Options,
		typesMatcher: string
	): RegExp
}

export type ClosingTagFactory<Options = BaseBlockOptions> = {
	(
		options: Options
	): RegExp
}

export type DeEscapeOpening<Options = BaseBlockOptions> = {
	(
		options: Options,
		escaped: string
	): string
}

export type DeEscapeClosing<Options = BaseBlockOptions> = {
	(
		options: Options,
		escaped: string
	): string
}

export type ContentTransform<Options = BaseBlockOptions> = {
	(
		options: Options,
		content: string[]
	): string[]
}

export type CreateContentNode<Options = BaseBlockOptions> = {
	(
		options: Options,
		content: string[],
		matchGroups: string[],
		childNodes?: TreeNode<any>[]
	): TreeNode<any, any>
}

export function pluginFactory<Options extends BaseBlockOptions>(
	nodeType: string,
	defaultOptions: Options,
	openingTagFactory: OpeningTagFactory<Options>,
	closingTagFactory: ClosingTagFactory<Options>,
	deEscapeOpening: DeEscapeOpening<Options>,
	deEscapeClosing?: DeEscapeClosing<Options>,
	contentTransform?: ContentTransform<Options>,
	CreateContentNode?: CreateContentNode<Options>,
	parsePass?: string | number,
): Plugin {
	// If no escape string is defined, use the default one
	defaultOptions.escapeString = defaultOptions.escapeString ?? DEFAULTESCAPE;


	return function plugin(this: Processor, optionsInput: Partial<Options> = {}): Transformer {
		const options = normalizeOptions(optionsInput, defaultOptions);
		const types = Object.keys(options?.types ?? []).join('|');
		const openingTag = openingTagFactory(options, types);
		const closingTag = closingTagFactory(options);


		// The tokenizer is called on a content block's start, to determine if its node exists within it
		// - If the node does exist, create the relevant node, and re-process its content if necessary
		function blockTokenizer(this: any, eat: any, value: string, silent: boolean) {
			// Check the value for the opening tag's matcher
			const match = openingTag.exec(value.trim());
			// Stop if no match is found / running in silent mode
			// TODO: Verify that silent run should not maybe return ONLY AFTER the closed tag is located
			if (!match || silent) {
				// Return true only if a match is found AND running in silent, otherwise false
				return match && silent;
			}

			// Mark the current location
			const now = eat.now();
			// Extract the different match groups from the opening tag
			const matchGroups = match as string[];

			// Consume lines until a closing tag
			let newValue = value;
			// Lines to potentially be marked as food if this component completes
			const potentialFood = [];
			// Content that will be further processed
			let content = [];
			// Whether or not a closing tag was found
			let success = false;
			// The current anchor for line splitting
			let currentAnchor = -1;
			// While there is a next line (since currentAnchor starts at -1, this will run at least once)
			do {
				// Locate the next newline starting at currentAnchor line
				const next = newValue.indexOf(NEWLINE, currentAnchor + 1);
				// Obtain the string leading up to the next newline / end of string, whichever comes first
				const line =
					next > -1 ? newValue.slice(currentAnchor + 1, next) : newValue.slice(currentAnchor + 1);
				// Mark the line as scanned (do not eat it yet)
				potentialFood.push(line);
				// Remove the line from newValue
				newValue = newValue.slice(currentAnchor + 1);
				// Trim all spaces from the current line
				let contentLine = line.trim();
				// Check if the closing tag occurs in this trimmed line
				if (closingTag.exec(contentLine)) {
					// Mark as success
					success = true;
					// If we want to include the closing tag, we will add the line to the content
					if(!options.includeClosing) {
						// - If we don't want to, remove the closing tag from the line
						contentLine = contentLine.replace(closingTag, "");
					}
					// Add the final line if it has any content left
					if(contentLine) content.push(contentLine);
					// Exit the loop
					break;
				}
				// If we DON'T want to include the opening tag, check if the current anchor is the start of the text
				if(!options.includeOpening && currentAnchor === -1) {
					// - If it is, remove the opening tag from the text
					contentLine = contentLine.replace(openingTag, "");
				}
				// Add the content line if it has any content left
				if(contentLine) content.push(contentLine);
				// Advance the anchor
				currentAnchor = newValue.indexOf(NEWLINE);
			}
			// Check if there is a next line
			while (currentAnchor !== -1)

			// We throw an error if the block couldn't close, because if an explicit enough, un-escaped call for it occured and wasn't closed
			// - There is probably something going wrong, and it's better to abort the build than silently keep it in
			if(!success) {
				throw new Error(`
				${nodeType} Was started, but was never closed!
				Closing regex: ${closingTag.source} ${closingTag}
				Starting at: ${match}
				Now: ${JSON.stringify(now, undefined, 4)}
				Raw file: ${JSON.stringify(content, undefined, 4)}
				`)
			}

			content = content.map((line) => {
				// De-escape contained opening tags
				deEscapeOpening(options, line)
				// De-escape contained closing tags if desired
				line = deEscapeClosing?.(options, line) ?? line;
				// Return the new line
				return line;
			});
			
			// Allow the plugin to further transform the content directly
			content = contentTransform?.(options, content) ?? content;

			// Consume the parsed text
			const add = eat(potentialFood.join(NEWLINE));

			// All child nodes of this tree
			let childNodes: TreeNode<any>[] = [];
			// All properties of this node
			let properties: any;
			// Re-parse the content in block mode
			if(options.parseContent){
				// Begin a block
				const exit = this.enterBlock();
				// Parse content string
				childNodes = this.tokenizeBlock(content.join(NEWLINE), now);
				// Exit block
				exit();
			}

			// The final tree node
			const element = CreateContentNode?.(options, content, matchGroups, childNodes) ?? createTreeNode(nodeType, properties, undefined, childNodes);
			return add(element);
		}



		// Get the current parser instance
		const Parser = this.Parser.prototype;
		// Register this tokenizer for this node type
		Parser.blockTokenizers[nodeType] = blockTokenizer;
		// Add the current node type to the parser's parsing queue
		Parser.blockMethods.splice(
			// If parsePass is a number, add it at that point
			typeof parsePass === "number" ?
				parsePass :
				// Otherwise, find the block type it references, and add it just afterwards
				Parser.blockMethods.indexOf(parsePass ?? DEFAULTTURN) + 1,
			0,
			nodeType
		);

		// Return a de-escaping transformer, to de-escape escaped version of this tag inside of any other node type
		return (root) => {
			visit(
				// Visit the given root
				root,
				// Ensure for every node that it is NOT of the current type
				(node: unknown): node is Literal =>
					(node as Literal | undefined)?.type !== nodeType,
				(node: Literal) => {
					// If so, and it has a value, de-escape all relevant instances of this node in there
					if (node.value) {
						node.value = deEscapeOpening(options, node.value)
						node.value = deEscapeClosing?.(options, node.value) ?? node.value
					}
				},
			);
		};
	}
}

export default pluginFactory;