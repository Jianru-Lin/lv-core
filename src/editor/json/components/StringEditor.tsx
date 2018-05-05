import * as React from 'react';
import { StringNode } from '../model';

export interface StringEditorP {
    node: StringNode;
}

export function StringEditor(props: StringEditorP) {
    return <span>{JSON.stringify(props.node.value)}</span>;
}
