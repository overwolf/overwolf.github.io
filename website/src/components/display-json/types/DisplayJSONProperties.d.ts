import { RecordTypes } from "../enums/DisplayJSONRecordTypes";

export type DisplayJSONPropsChildren<Uniques = {}> = React.PropsWithChildren<DisplayJSONProps<Uniques>>;
export type DisplayJSONProps<Uniques = {}> = Uniques;

export interface Root {
    name: string;
}

export interface Comment {
    comment: string;
}
export interface CommentLine extends Comment {}
export interface CommentBlock extends Comment {}

export interface StringValue {
    value: string;
}

export interface SingleQuote extends StringValue {}
export interface DoubleQuote extends StringValue {}
export interface BacktickQuote extends StringValue {}

export interface TypeDefinition {
    name: string;
}

export interface RecordDefinition {
    name: string;
}

export interface TopLevelRecordDefinition extends RecordDefinition {
    type: RecordTypes;
}