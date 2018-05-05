import * as React from 'react';
import { LeftRightPair, LeftRightPairStatus } from '../../../components/LeftRightPair';
import { ArrayNode, Layout } from '../model';
import { editorOfNode } from '../internal';

export interface ArrayEditorP {
    node: ArrayNode;
}

export interface ArrayEditorS {
    lrStatus: LeftRightPairStatus;
}

export class ArrayEditor extends React.Component<ArrayEditorP, ArrayEditorS> {
    constructor(props: ArrayEditorP) {
        super(props);
        this.state = {
            lrStatus: new LeftRightPairStatus(false),
        };
    }

    render() {
        const { node } = this.props;

        const style: { [key: string]: React.CSSProperties } = {
            root: {
                display: 'flex',
                flexDirection: node.layout === Layout.Horizontal ? 'row' : 'column',
            },
            element: {
                display: 'flex',
                flexDirection: 'row',
            },
            comma: {
                cursor: 'pointer',
            },
        };

        let body: React.ReactNode = null;
        if (node.elements.length) {
            body = (
                <div style={style.root}>
                    {node.elements.map((elNode, i) => (
                        <div style={style.element}>
                            {editorOfNode(elNode)}
                            {i < node.elements.length - 1 ? (
                                <span
                                    style={style.comma}
                                    onClick={e => {
                                        alert('todo');
                                    }}>
                                    ,&nbsp;
                                </span>
                            ) : null}
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <LeftRightPair
                left="["
                right="]"
                data={this.state.lrStatus}
                onChange={lrStatus => {
                    this.setState({
                        lrStatus,
                    });
                }}>
                {body}
            </LeftRightPair>
        );
    }
}
