import DisplayJSON from "./tsx/DisplayJSON";
import DisplayJSONRecord from "./tsx/DisplayJSONRecord";
import DisplayJSONRecordDefinition from "./tsx/DisplayJSONRecordDefinition";
import DisplayJSONTopLevelRecordDefinition from "./tsx/DisplayJSONTopLevelRecordDefinition";
import DisplayJSONType from "./tsx/DisplayJSONType";
import DisplayJSONExpandedType from "./tsx/DisplayJSONExpandedType";
import DisplayJSONFunction from "./tsx/DisplayJSONFunction";
import DisplayJSONParameters from "./tsx/DisplayJSONParameters";
import DisplayJSONObject from "./tsx/DisplayJSONObject";
import DisplayJSONArray from "./tsx/DisplayJSONArray";
import DisplayJSONCommentLine from "./tsx/DisplayJSONCommentLine";
import DisplayJSONCommentBlock from "./tsx/DisplayJSONCommentBlock";
import DisplayJSONDoubleQuote from "./tsx/DisplayJSONDoubleQuote";
import DisplayJSONSingleQuote from "./tsx/DisplayJSONSingleQuote";
import DisplayJSONBacktickQuote from "./tsx/DisplayJSONBacktickQuote";
import DisplayJSONCommented from "./tsx/DisplayJSONCommented";

export default {
    DisplayJSON: DisplayJSON,
    Record: DisplayJSONRecord,
    RecordDefinition: DisplayJSONRecordDefinition,
    TopLevelRecordDefinition: DisplayJSONTopLevelRecordDefinition,
    Type: DisplayJSONType,
    ExpandedType: DisplayJSONExpandedType,
    Function: DisplayJSONFunction,
    Parameters: DisplayJSONParameters,
    Object: DisplayJSONObject,
    Array: DisplayJSONArray,
    CommentedNode: DisplayJSONCommented,
    CommentLine: DisplayJSONCommentLine,
    CommentBlock: DisplayJSONCommentBlock,
    DoubleQuote: DisplayJSONDoubleQuote,
    SingleQuote: DisplayJSONSingleQuote,
    BacktickQuote: DisplayJSONBacktickQuote,
}