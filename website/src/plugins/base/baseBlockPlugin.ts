// This code is loosely based on https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-mdx-loader/src/remark/admonitions/index.ts

import visit from 'unist-util-visit';
import type { Transformer, Processor, Plugin } from 'unified';
import type { Literal } from 'mdast';

const NEWLINE = '\n';
// This translates to \\ in the string, aka a single raw \ in the regex. String translations are fun
const DEFAULTESCAPE = "\\\\";
const DEFAULTTURN = 'admonition'


export interface BaseBlockOptions {
	openingTag: string;
	closingTag?: string;
	escapeString?: string;
	types?: string[];
	includeOpening: boolean;
	includeClosing: boolean;
	parseContent: boolean;
}

export interface TreeNode {
	type: string;
	data: {
		// hName/hProperties come from HAST
		// See https://github.com/syntax-tree/mdast-util-to-hast#fields-on-nodes
		hName: string;
		hProperties?: any;
	}
	children?: TreeNode[]
}

export function createNode(type: string, properties?: any, children?: TreeNode[]) : TreeNode {
	return {
		type,
		data: {
			hName: type,
			hProperties: properties
		},
		children
	}
}

function normalizeOptions<T extends BaseBlockOptions>(
	options: Partial<T>,
	defaults: T
): T {
	return { ...defaults, ...options };
}

export type OpeningTagFactory<T> = {
	(
		options: T,
		typesMatcher: string
	): RegExp
}

export type ClosingTagFactory<T> = {
	(
		options: T
	): RegExp
}

export type DeEscapeOpening<T> = {
	(
		options: T,
		escaped: string
	): string
}

export type DeEscapeClosing<T> = {
	(
		options: T,
		escaped: string
	): string
}

export type ContentTransform<T> = {
	(
		options: T,
		content: string[]
	): string[]
}

export type ContentNodesTransform<T> = {
	(
		options: T,
		content: string[],
		matchGroups: string[],
		childNodes?: TreeNode[]
	): [TreeNode[] | undefined, any | undefined]
}

export function pluginFactory<T extends BaseBlockOptions>(
	nodeType: string,
	defaultOptions: T,
	openingTagFactory: OpeningTagFactory<T>,
	closingTagFactory: ClosingTagFactory<T>,
	deEscapeOpening: DeEscapeOpening<T>,
	deEscapeClosing?: DeEscapeClosing<T>,
	contentTransform?: ContentTransform<T>,
	ContentNodesTransform?: ContentNodesTransform<T>,
	parsePass?: string | number,
): Plugin {
	// If no escape string is defined, use the default one
	defaultOptions.escapeString = defaultOptions.escapeString ?? DEFAULTESCAPE;


	return function plugin(this: Processor, optionsInput: Partial<T> = {}): Transformer {
		const options = normalizeOptions(optionsInput, defaultOptions);
		const types = Object.values(options?.types).join('|');
		const openingTag = openingTagFactory(options, types);
		const closingTag = closingTagFactory(options);


		// The tokenizer is called on a content block's start, to determine if its node exists within it
		// - If the node does exist, create the relevant node, and re-process its content if necessary
		function blockTokenizer(this: any, eat: any, value: string, silent: boolean) {
			// Check the value for the opening tag's matcher
			const match = openingTag.exec(value);
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
				// Check if the closing tag occurs in this line
				if (closingTag.exec(line)) {
					// Mark as success
					success = true;
					// If we want to include the closing tag, add the line to the content
					let finalLine = line;
					if(!options.includeClosing) {
						// - If we don't want to, remove the closing tag from the line
						finalLine = finalLine.replace(closingTag, "");
					}
					// Add the final line if it has any content left
					if(finalLine) content.push(finalLine);
					// Exit the loop
					break;
				}
				// If we DON'T want to include the opening tag, check if the current anchor is the start of the text
				if(!options.includeOpening && currentAnchor === -1) {
					// - If it is, remove the opening tag from the text
					let firstLine = line.replace(openingTag, "");
					// Add the first line if it has any content left
					if(firstLine) content.push(firstLine);
				}
				else {
					// - Otherwise, just add the line to the content
					content.push(line);
				}
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
			let childNodes: TreeNode[] = [];
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

			// Allow the plugin to perform its own, final transformation
			[childNodes, properties] = ContentNodesTransform?.(options, content, matchGroups, childNodes) ?? [childNodes, properties];

			// The resulting tree node
			const element = createNode(nodeType, properties, childNodes);
			return add(element);
		}



		// Get the current parser instance
		const Parser = this.Parser.prototype;
		// Register this tokenizer for this node type
		Parser.blockTokenizers[nodeType] = blockTokenizer;
		// Add the current node type to the parser's parsing queue
		Parser.blockMethods.splice(
			typeof parsePass === "number" ?
				parsePass :
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