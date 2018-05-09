import * as React from 'react';
import { BlockSimple } from '../../../components/Block';
import { NumberNode } from '../model';

export interface NumberEditorP {
    node: NumberNode;
}

export function NumberEditor(props: NumberEditorP) {
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
