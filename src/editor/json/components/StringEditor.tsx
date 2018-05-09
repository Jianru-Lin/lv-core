import * as React from 'react';
import { StringNode } from '../model';
import { BlockSimple } from '../../../components/Block';
import { LeftRightPairSimple } from '../../../components/LeftRightPair';

export interface StringEditorP {
    node: StringNode;
}

export interface StringEditorS {}

export class StringEditor extends React.Component<StringEditorP, StringEditorS> {
    constructor(props: StringEditorP) {
        super(props);
        this.state = {};
    }

    render() {
        const { node } = this.props;
        const str = this.props.node.value;

        return (
            <BlockSimple
                open={node.manager.getOpen(node)}
                onChange={open => {
                    node.manager.setOpen(node, open);
                }}>
                <LeftRightPairSimple
                    left={'"'}
                    right={'"'}
                    open={node.manager.getOpen(node)}
                    onChange={open => {
                        node.manager.setOpen(node, open);
                    }}>
                    {str.split('\n').map(line => <div style={{ whiteSpace: 'pre' }}>{line}</div>)}
                </LeftRightPairSimple>
            </BlockSimple>
        );
    }
}
