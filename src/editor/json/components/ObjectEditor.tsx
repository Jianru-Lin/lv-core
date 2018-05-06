import * as React from 'react';
import { LeftRightPair, LeftRightPairStatus } from '../../../components/LeftRightPair';
import { ObjectNode, Layout } from '../model';
import { editorOfNode } from '../internal';

export interface ObjectEditorP {
    node: ObjectNode;
}

export interface ObjectEditorS {
    lrStatus: LeftRightPairStatus;
}

export class ObjectEditor extends React.Component<ObjectEditorP, ObjectEditorS> {
    constructor(props: ObjectEditorP) {
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
                alignItems: 'baseline',
            },
            pair: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'baseline',
            },
            pair_name: {},
            pair_node: {},
            comma: {
                cursor: 'pointer',
            },
        };

        let body: React.ReactNode = null;
        if (node.props.length) {
            body = (
                <div style={style.root}>
                    {node.props.map((pair, i) => (
                        <div style={style.pair}>
                            <div style={style.pair_name}>{pair.name}:&nbsp;</div>
                            <div style={style.pair_node}>
                                {editorOfNode(pair.node)}
                                {i < node.props.length - 1 ? (
                                    <span
                                        style={style.comma}
                                        onClick={e => {
                                            node.toggleLayout();
                                            this.forceUpdate();
                                        }}>
                                        ,&nbsp;
                                    </span>
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <LeftRightPair
                left="{"
                right="}"
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
