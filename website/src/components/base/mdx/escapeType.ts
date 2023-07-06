import EscapeRegistry from "./escapeRegistry";

export abstract class EscapeType<Type, Sequence> {
    sequence: Sequence;
    syntacticType: Type;
    handleEscape: (currentLine: string, registry: EscapeRegistry<Type, Sequence>, startIndex: number, contentIterator: Generator<string>) => string;
}

export const FirstOccuranceOfGroup1 = (regex: RegExp, currentLine: string, startIndex: number) => {
    const targetString = currentLine.substring(startIndex + 1);
    let match: RegExpExecArray;
    regex = new RegExp(regex, 'g')
    while (match = regex.exec(targetString)) {
        if (!match[1]) continue;
        return startIndex + 1 + match.index + match[1].length;
    }
    throw new Error(`No closing tag found for current line after index: ${startIndex}!
    Looking for: ${regex}
    In line: ${currentLine}
    From index: ${startIndex}`);
}