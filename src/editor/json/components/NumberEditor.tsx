import * as React from 'react';
import { NumberNode } from '../base/NumberNode';

export interface NumberEditorP {
    status: NumberNode;
    onChangeStatus: (status: NumberNode) => void;
}

export function NumberEditor(props: NumberEditorP) {
    return <span>{props.status.getValue().toString()}</span>;
}
