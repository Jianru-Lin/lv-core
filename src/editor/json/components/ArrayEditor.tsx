import * as React from 'react';
import { BlockSimple } from '../../../components/Block';
import { LeftRightPairSimple } from '../../../components/LeftRightPair';
import { ArrayNode, Layout } from '../model';
import { editorOfNode } from '../internal';

export interface ArrayEditorP {
    node: ArrayNode;
}

export interface ArrayEditorS {}

export class ArrayEditor extends React.Component<ArrayEditorP, ArrayEditorS> {
    constructor(props: ArrayEditorP) {
        super(props);
        this.state = {};
    }

    render() {
        const { node } = this.props;

        const style: { [key: string]: React.CSSProperties } = {
            root: {
                display: 'grid',
                gridTemplateColumns:
                    node.manager.getLayout(node) === Layout.Horizontal
                        ? `repeat(${node.elements.length}, auto)`
                        : undefined,
                gridTemplateRows:
                    node.manager.getLayout(node) === Layout.Vertical
                        ? `repeat(${node.elements.length}, auto)`
                        : undefined,
                rowGap: '1em',
                alignItems: 'baseline',
            },
            element: { display: 'flex', flexDirection: 'row', alignItems: 'baseline' },
            comma: { cursor: 'pointer' },
        };

        let body: React.ReactNode = null;
        if (node.elements.length) {
            body = (
                <div style={style.root}>
                    {node.elements.map((elNode, i) => (
                        <div style={style.element}>
                            {editorOfNode(elNode)}
                            {i < node.elements.length - 1 ? (
                                <div
                                    style={style.comma}
                                    onClick={e => {
                                        node.manager.toggleLayout(node);
                                    }}>
                                    ,&nbsp;
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <BlockSimple
                open={node.manager.getOpen(node)}
                onChange={open => {
                    node.manager.setOpen(node, open);
                }}>
                <LeftRightPairSimple
                    left="["
                    right="]"
                    open={node.manager.getOpen(node)}
                    onChange={open => {
                        node.manager.setOpen(node, open);
                    }}>
                    {body}
                </LeftRightPairSimple>
            </BlockSimple>
        );
    }
}
