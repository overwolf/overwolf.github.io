export default interface EscapedSequence<Syntactic, Sequence> {
    sequence: Sequence,
    content: string,
    syntacticType: Syntactic
}