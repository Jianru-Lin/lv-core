import * as React from 'react';
import {
    Node,
    NullNode,
    BooleanNode,
    NumberNode,
    StringNode,
    ObjectNode,
    ArrayNode,
    NodeManager,
    Layout,
    NodeType,
} from './model';
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

export interface ReadyData {
    root: Node | null;
    nodeList: Node[];
}

export class Manager implements NodeManager, ReadyData {
    root: Node | null;
    nodeList: Node[];
    ext: {
        [key: string]: {
            layout: Layout;
            open: boolean;
        };
    };
    private onChange: () => void;

    constructor(text: string, onChange: () => void) {
        this.root = null;
        this.nodeList = [];
        this.ext = {};
        this.onChange = onChange;

        // empty string is acceptable
        if (!text) return;

        const value = JSON.parse(text);
        this.root = this.createNodeFromValue(value);
    }

    getLayout(node: ArrayNode | ObjectNode): Layout {
        return this.ext[node.id].layout;
    }

    setLayout(node: ArrayNode | ObjectNode, v: Layout): void {
        this.ext[node.id].layout = v;
        this.onChange();
    }

    toggleLayout(node: ArrayNode | ObjectNode): void {
        const layout = this.getLayout(node);
        if (layout === Layout.Horizontal) {
            this.setLayout(node, Layout.Vertical);
        } else {
            this.setLayout(node, Layout.Horizontal);
        }
    }

    getOpen(node: Node) {
        return this.ext[node.id].open;
    }

    setOpen(node: Node, v: boolean) {
        this.ext[node.id].open = v;
        this.onChange();
    }

    toggleOpen(node: Node) {
        this.setOpen(node, !this.getOpen(node));
    }

    private createNodeFromValue(value: any): Node {
        const save = (node: Node) => {
            this.nodeList.push(node);
            this.ext[node.id] = {
                layout: Layout.Vertical,
                open: true,
            };
            return node;
        };

        return switchType(value, {
            tNull: () => save(new NullNode(this)),
            tBoolean: () => save(new BooleanNode(this, value)),
            tNumber: () => save(new NumberNode(this, value)),
            tString: () => save(new StringNode(this, value)),
            tObject: () => {
                const node = new ObjectNode(this);
                Object.keys(value).forEach(name => {
                    node.props.push({
                        name,
                        node: this.createNodeFromValue(value[name]),
                    });
                });
                return save(node);
            },
            tArray: () => {
                const node = new ArrayNode(this);
                for (const el of value) {
                    node.elements.push(this.createNodeFromValue(el));
                }
                return save(node);
            },
        });
    }
}

export class JsonEditorStatus {
    private data: [Kind.Error, string] | [Kind.Ready, NodeManager];
    onChange: () => void;

    constructor(text?: string | null) {
        this.onChange = () => {};

        if (!text) {
            this.data = [Kind.Ready, new Manager('', () => this.onChange())];
            return;
        }

        try {
            this.data = [Kind.Ready, new Manager(text, () => this.onChange())];
        } catch (err) {
            this.data = [Kind.Error, err.toString()];
        }
    }

    switchData<T = any>(cb: { ready: (data: ReadyData) => T; error: (info: string) => T }): T {
        if (this.data[0] === Kind.Ready) {
            return cb.ready(this.data[1] as Manager);
        } else if (this.data[0] === Kind.Error) {
            return cb.error(this.data[1] as string);
        } else {
            throw new Error('Stupid.');
        }
    }
}

export interface JsonEditorP {
    style?: React.CSSProperties;
    status: JsonEditorStatus;
    onChangeStatus: (status: JsonEditorStatus) => void;
}

export interface JsonEditorS {}

export class JsonEditor extends React.Component<JsonEditorP, JsonEditorS> {
    constructor(props: JsonEditorP) {
        super(props);
    }

    render() {
        // dirty: hook onChange
        this.props.status.onChange = () => {
            this.forceUpdate();
        };

        const status = this.props.status;
        const style = { lineHeight: '2em' };
        return status.switchData({
            ready: ({ root }) => {
                if (!root) {
                    return <div style={{ ...this.props.style, ...style }} />;
                }

                return <div style={{ ...this.props.style, ...style }}>{editorOfNode(root)}</div>;
            },
            error: str => {
                return <div style={{ ...this.props.style, ...style }}>{str}</div>;
            },
        });
    }
}
