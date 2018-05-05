import * as React from 'react';
import { Node } from '../model';
import { switchNodeType } from './';
import {
    NullEditor,
    BooleanEditor,
    NumberEditor,
    StringEditor,
    ObjectEditor,
    ArrayEditor,
} from '../components';

export function editorOfNode(node: Node): React.ReactNode {
    return switchNodeType(node, {
        Null: node => <NullEditor node={node} />,
        Boolean: node => <BooleanEditor node={node} />,
        Number: node => <NumberEditor node={node} />,
        String: node => <StringEditor node={node} />,
        Object: node => <ObjectEditor node={node} />,
        Array: node => <ArrayEditor node={node} />,
    });
}
