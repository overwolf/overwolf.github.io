interface NodeData {
    id?: string;
}

interface ContentNodeData extends NodeData {
    label: string;
}

interface FieldNodeData extends ContentNodeData {
    value: any;
}

export interface CommentData extends ContentNodeData {

}

export interface FieldData extends FieldNodeData {
    value: string;
}

export interface SubGroupData extends FieldNodeData {
    value: ContentNodeData[];
}

export interface CodeBlockData {
    type: string;
    openingLabel: string;
    parentheses: [string, string];
    children: ContentNodeData[];
}
