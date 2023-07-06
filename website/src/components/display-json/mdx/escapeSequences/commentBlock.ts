import EscapeRegistry from "../../../base/mdx/escapeRegistry";
import { SyntacticType } from "../../enums/DisplayJSONSyntacticType";
import { EscapeType } from "../../../base/mdx/escapeType";
import { ValidSequences } from "../../enums/DisplayJSONEscapeSequence";

export class CommentBlock implements EscapeType<SyntacticType, ValidSequences> {
    sequence = ValidSequences["/*"];
    syntacticType = SyntacticType.Comment;   
    handleEscape = (currentLine: string, registry: EscapeRegistry<SyntacticType, ValidSequences>, startIndex: number, contentIterator: Generator<string>) => {
        let endIndex: number;
        while ((endIndex = currentLine.indexOf("*/", startIndex)) === -1) {
            const nextLine = contentIterator.next();
            if(nextLine.done) throw new Error(`Couldn't finish parsing block comment, with content ${currentLine}`);
            currentLine += nextLine.value;
        }
        return registry.EscapeSequence(currentLine, this, startIndex, endIndex + 2);
    }
}