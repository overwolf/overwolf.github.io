"use strict";
// This code is loosely based on https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-mdx-loader/src/remark/admonitions/index.ts
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.DefaultVariableOptions = void 0;
var visit = require('unist-util-visit');
var NEWLINE = '\n';
exports.DefaultVariableOptions = {
    tag: '!$_var'
};
function normalizeOptions(options) {
    return __assign(__assign({}, exports.DefaultVariableOptions), options);
}
// This string value does not matter much
// It is ignored because nodes are using hName/hProperties coming from HAST
var varsNodeType = "Var";
var variablesReplacer = function plugin(optionsInput) {
    if (optionsInput === void 0) { optionsInput = {}; }
    var options = normalizeOptions(optionsInput);
    var regex = new RegExp("".concat(options.tag, "(\\w+)"));
    // The tokenizer is called on blocks to determine if there is an admonition
    // present and create tags for it
    function blockTokenizer(eat, value, silent) {
        // Stop if no match or match does not start at beginning of line
        var match = regex.exec(value);
        if (!match || match.index !== 0) {
            return false;
        }
        // If silent return the match
        if (silent) {
            return true;
        }
        var now = eat.now();
        var _a = match, opening = _a[0], keyword = _a[1];
        var food = [];
        var content = [];
        var newValue = value;
        // consume lines until a closing tag
        var idx = newValue.indexOf(NEWLINE);
        // consume the processed tag and replace escape sequences
        var contentString = content.join(NEWLINE);
        var add = eat(opening + food.join(NEWLINE));
        // parse the content in block mode
        var exit = this.enterBlock();
        var contentNodes = this.tokenizeBlock(contentString, now);
        exit();
        var element = {
            type: varsNodeType,
            data: {
                // hName/hProperties come from HAST
                // See https://github.com/syntax-tree/mdast-util-to-hast#fields-on-nodes
                hName: varsNodeType,
                hProperties: {
                    type: keyword
                }
            },
            children: __spreadArray([], contentNodes, true)
        };
        return add(element);
    }
    // add tokenizer to parser after fenced code blocks
    var Parser = this.Parser.prototype;
    Parser.inlineTokenizers[varsNodeType] = blockTokenizer;
    Parser.inlineMethods.push(varsNodeType);
    return function (root) {
        // escape everything except admonitionHTML nodes
        visit(root, function (node) {
            return (node === null || node === void 0 ? void 0 : node.type) !== varsNodeType;
        }, function (node) {
            if (node.value) {
                // node.value = node.value.replace(escapeTag, options.tag);
            }
        });
    };
};
exports["default"] = variablesReplacer;
