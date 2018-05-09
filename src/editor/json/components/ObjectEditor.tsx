import * as React from 'react';
import { LeftRightPairSimple } from '../../../components/LeftRightPair';
import { ObjectNode, Layout } from '../model';
import { editorOfNode } from '../internal';

export interface ObjectEditorP {
    node: ObjectNode;
}

export interface ObjectEditorS {}

export class ObjectEditor extends React.Component<ObjectEditorP, ObjectEditorS> {
    constructor(props: ObjectEditorP) {
        super(props);
        this.state = {};
    }

    render() {
        const { node } = this.props;

        const style: { [key: string]: React.CSSProperties } = {
            root: {
                display: 'grid',
                ...(node.manager.getLayout(node) === Layout.Vertical
                    ? {
                          gridTemplateRows: `repeat(${node.props.length}, auto)`,
                          gridTemplateColumns: `auto auto`,
                      }
                    : null),
                ...(node.manager.getLayout(node) === Layout.Horizontal
                    ? {
                          gridTemplateColumns: `repeat(${node.props.length * 2}, auto)`,
                      }
                    : null),
                rowGap: '1em',
                alignItems: 'baseline',
            },
            pair: { display: 'flex', flexDirection: 'row', alignItems: 'baseline' },
            pair_name: {},
            pair_node: { display: 'flex', alignItems: 'baseline' },
            comma: { cursor: 'pointer' },
        };

        let body: React.ReactNode = null;
        if (node.props.length) {
            body = (
                <div style={style.root}>
                    {node.props.map(
                        (pair, i) =>
                            // <div style={style.pair}>
                            [
                                <div style={style.pair_name}>{pair.name}:&nbsp;</div>,
                                <div style={style.pair_node}>
                                    {editorOfNode(pair.node)}
                                    {i < node.props.length - 1 ? (
                                        <div
                                            style={style.comma}
                                            onClick={e => {
                                                node.manager.toggleLayout(node);
                                            }}>
                                            ,&nbsp;
                                        </div>
                                    ) : null}
                                </div>,
                            ]
                        // </div>
                    )}
                </div>
            );
        }

        return (
            <LeftRightPairSimple
                left="{"
                right="}"
                open={node.manager.getOpen(node)}
                onChange={open => {
                    node.manager.setOpen(node, open);
                }}>
                {body}
            </LeftRightPairSimple>
        );
    }
}
