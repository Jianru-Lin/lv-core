import * as React from 'react';
import { BooleanNode } from '../base/BooleanNode';

export interface BooleanEditorP {
    status: BooleanNode;
    onChangeStatus: (status: BooleanNode) => void;
}

export function BooleanEditor(props: BooleanEditorP) {
    return <span>{props.status.getValue().toString()}</span>;
}
