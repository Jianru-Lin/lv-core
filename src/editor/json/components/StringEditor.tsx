import * as React from 'react';
import { StringNode } from '../model';
import { LeftRightPair, LeftRightPairStatus } from '../../../components/LeftRightPair';

export interface StringEditorP {
    node: StringNode;
}

export interface StringEditorS {
    lrStatus: LeftRightPairStatus;
}

export class StringEditor extends React.Component<StringEditorP, StringEditorS> {
    constructor(props: StringEditorP) {
        super(props);
        this.state = {
            lrStatus: new LeftRightPairStatus(false),
        };
    }

    render() {
        let str = this.props.node.value;

        return (
            <LeftRightPair
                left={'"'}
                right={'"'}
                data={this.state.lrStatus}
                onChange={lrStatus => {
                    this.setState({ lrStatus });
                }}>
                {str.split('\n').map(line => <div style={{ whiteSpace: 'pre' }}>{line}</div>)}
            </LeftRightPair>
        );
    }
}
