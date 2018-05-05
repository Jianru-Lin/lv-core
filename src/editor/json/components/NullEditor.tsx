import * as React from 'react';
import { NullNode } from '../model';

export interface NullEditorP {
    node: NullNode;
}

export function NullEditor(props: NullEditorP) {
    return <span>null</span>;
}
