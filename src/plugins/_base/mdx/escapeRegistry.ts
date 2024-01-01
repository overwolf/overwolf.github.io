import EscapedSequence from "./escapedSequence";
import { EscapeType } from "./escapeType";

export default class EscapeRegistry<Type, Sequence> {
    public escapePrefix: string;
    private registry: EscapedSequence<Type, Sequence>[];

    public constructor(escapePrefix?: string){
        this.escapePrefix = escapePrefix ?? '__\\$@';
        this.registry = [];
    }

    RecordFor = (value: string): EscapedSequence<Type, Sequence> => {
        return this.registry[this.NumberedSequenceMatcher().exec(value)?.[1]];
    }

    NumberedSequenceMatcher = () => {
        return new RegExp(`(?:${this.escapePrefix})(\\d+)`);
    }

    SerializeEscapedString = (escapedString: string) => {
        let result = escapedString;
        const regex = new RegExp(`(?:${this.escapePrefix})(\\d+)`);
        let match: RegExpExecArray;
        while (match = regex.exec(result)) {
            result = result.replace(match[0], this.registry[parseInt(match[1])].content);
        }
        return result;
    }

    EscapeSequence = (escapedString: string, escapeType: EscapeType<Type, Sequence>, startIndex: number, lastIndex?: number) => {
        const escaped: EscapedSequence<Type, Sequence> = {
            content: this.SerializeEscapedString(escapedString.substring(startIndex, lastIndex)),
            sequence: escapeType.sequence,
            syntacticType: escapeType.syntacticType
        };
        return `${escapedString.substring(0, startIndex)}${eval(`'${this.escapePrefix}'`)}${this.registry.push(escaped) - 1}${lastIndex ? escapedString.substring(lastIndex) : ""}`;
    }
}