import EscapeRegistry from "../../../base/mdx/escapeRegistry";
import { SyntacticType } from "../../enums/DisplayJSONSyntacticType";
import { EscapeType } from "../../../base/mdx/escapeType";
import { ValidSequences } from "../../enums/DisplayJSONEscapeSequence";

export class CommentLine implements EscapeType<SyntacticType, ValidSequences> {
    sequence = ValidSequences["//"]
    syntacticType = SyntacticType.Comment;   
    handleEscape = (currentLine: string, registry: EscapeRegistry<SyntacticType, ValidSequences>, startIndex: number, contentIterator: Generator<string>) => {
        return registry.EscapeSequence(currentLine, this, startIndex);
    }
}