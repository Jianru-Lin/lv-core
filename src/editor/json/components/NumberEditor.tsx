import * as React from 'react';
import { NumberNode } from '../model';

export interface NumberEditorP {
    node: NumberNode;
}

export function NumberEditor(props: NumberEditorP) {
    return <span>{props.node.value.toString()}</span>;
}
