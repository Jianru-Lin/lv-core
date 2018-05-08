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
                flexDirection: node.manager.getLayout(node) === Layout.Horizontal ? 'row' : 'column',
                alignItems: 'baseline',
            },
            element: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'baseline',
            },
            element_not_last: {
                marginBottom: '0.5em',
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
                        <div
                            style={{
                                ...style.element,
                                ...(i < node.elements.length - 1 ? style.element_not_last : null),
                            }}>
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
