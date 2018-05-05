import * as React from 'react';
import { BooleanNode } from '../model';

export interface BooleanEditorP {
    node: BooleanNode;
}

export function BooleanEditor(props: BooleanEditorP) {
    return <span>{props.node.value.toString()}</span>;
}
