import EscapeRegistry from "../../../base/mdx/escapeRegistry";
import { SyntacticType } from "../../enums/DisplayJSONSyntacticType";
import { EscapeType, FirstOccuranceOfGroup1 } from "../../../base/mdx/escapeType";
import { ValidSequences } from "../../enums/DisplayJSONEscapeSequence";

export class SingleQuote implements EscapeType<SyntacticType, ValidSequences> {
    sequence = ValidSequences["'"];
    syntacticType = SyntacticType.StringValue;
    handleEscape = (currentLine: string, registry: EscapeRegistry<SyntacticType, ValidSequences>, startIndex: number, contentIterator: Generator<string>) => {
        return registry.EscapeSequence(currentLine, this, startIndex, FirstOccuranceOfGroup1(new RegExp(`\\\\\\\\|\\\\${this.sequence}|(${this.sequence})`), currentLine, startIndex))
    }
}