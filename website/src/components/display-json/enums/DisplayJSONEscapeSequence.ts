import EscapedSequence from "../../base/mdx/escapedSequence";
import { SyntacticType } from "./DisplayJSONSyntacticType";

export enum ValidSequences {
    "//" = "//",
    "'" = "'",
    "\"" = "\"",
    "`" = "`",
    "/*" = "/*"
}

export default interface DisplayJSONEscapeSequence extends EscapedSequence<SyntacticType, ValidSequences> {};