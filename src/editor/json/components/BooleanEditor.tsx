import * as React from 'react';
import { BlockSimple } from '../../../components/Block';
import { BooleanNode } from '../model';

export interface BooleanEditorP {
    node: BooleanNode;
}

export function BooleanEditor(props: BooleanEditorP) {
    const { node } = props;
    return (
        <BlockSimple
            open={node.manager.getOpen(node)}
            onChange={open => {
                node.manager.setOpen(node, open);
            }}>
            {props.node.value.toString()}
        </BlockSimple>
    );
}
