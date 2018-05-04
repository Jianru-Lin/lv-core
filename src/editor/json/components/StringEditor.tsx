import * as React from 'react';
import { StringNode } from '../base/StringNode';

export interface StringEditorP {
    status: StringNode;
    onChangeStatus: (status: StringNode) => void;
}

export function StringEditor(props: StringEditorP) {
    return <span>{JSON.stringify(props.status.getValue())}</span>;
}
