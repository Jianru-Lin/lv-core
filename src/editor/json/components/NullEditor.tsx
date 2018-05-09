import * as React from 'react';
import { BlockSimple } from '../../../components/Block';
import { NullNode } from '../model';

export interface NullEditorP {
    node: NullNode;
}

export function NullEditor(props: NullEditorP) {
    const { node } = props;
    return (
        <BlockSimple
            open={node.manager.getOpen(node)}
            onChange={open => {
                node.manager.setOpen(node, open);
            }}>
            null
        </BlockSimple>
    );
}
