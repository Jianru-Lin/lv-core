import * as React from 'react';
import { Node, NullNode, BooleanNode, NumberNode, StringNode, ObjectNode, ArrayNode } from './model';
import { Block } from '../../components/Block';
import { NumberEditor } from './components/NumberEditor';
import { BooleanEditor } from './components/BooleanEditor';
import { StringEditor } from './components/StringEditor';
import { NullEditor } from './components/NullEditor';
import { ArrayEditor } from './components/ArrayEditor';
import { ObjectEditor } from './components/ObjectEditor';
import { switchType, switchNodeType, editorOfNode } from './internal';

export enum Kind {
    Ready,
    Error,
}

export type ReadyData = {
    root: Node | null;
    nodeList: Node[];
};

export class JsonEditorStatus {
    private data: [Kind.Error, string] | [Kind.Ready, ReadyData];

    constructor(text: string) {
        if (!text) {
            this.data = [
                Kind.Ready,
                {
                    root: null,
                    nodeList: [],
                },
            ];
            return;
        }

        try {
            const value = JSON.parse(text);
            this.data = [
                Kind.Ready,
                {
                    root: null,
                    nodeList: [],
                },
            ];
            this.data[1].root = this.createNodeFromValue(value, this.data[1].nodeList);
        } catch (err) {
            this.data = [Kind.Error, err.toString()];
        }
    }

    switchData<T = any>(cb: { ready: (data: ReadyData) => T; error: (info: string) => T }): T {
        if (this.data[0] === Kind.Ready) {
            return cb.ready(this.data[1] as ReadyData);
        } else if (this.data[0] === Kind.Error) {
            return cb.error(this.data[1] as string);
        } else {
            throw new Error('Stupid.');
        }
    }

    private createNodeFromValue(value: any, nodeList: Node[]): Node {
        const save = (node: Node) => {
            nodeList.push(node);
            return node;
        };

        return switchType(value, {
            tNull: () => save(new NullNode()),
            tBoolean: () => save(new BooleanNode(value)),
            tNumber: () => save(new NumberNode(value)),
            tString: () => save(new StringNode(value)),
            tObject: () => {
                const node = new ObjectNode();
                Object.keys(value).forEach(name => {
                    node.props.push({
                        name,
                        node: this.createNodeFromValue(value[name], nodeList),
                    });
                });
                return node;
            },
            tArray: () => {
                const node = new ArrayNode();
                for (const el of value) {
                    node.elements.push(this.createNodeFromValue(el, nodeList));
                }
                return node;
            },
        });
    }
}

export interface JsonEditorP {
    style?: React.CSSProperties;
    status: JsonEditorStatus;
    onChangeStatus: (status: JsonEditorStatus) => void;
}

export interface JsonEditorS {}

export function JsonEditor(props: JsonEditorP) {
    const status = props.status;
    return status.switchData({
        ready: ({ root }) => {
            if (!root) {
                return <div />;
            }

            return <div style={props.style}>{editorOfNode(root)}</div>;
        },
        error: str => {
            return <div>{str}</div>;
        },
    });
}
