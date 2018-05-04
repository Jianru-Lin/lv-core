import * as React from 'react';
import { Node } from './base/def/Node';
import { Block } from '../../components/Block';
import { parseJson } from './internal/parseJson';
import { switchNodeType } from './internal/switchNodeType';
import { NumberEditor } from './components/NumberEditor';
import { BooleanEditor } from './components/BooleanEditor';
import { StringEditor } from './components/StringEditor';
import { NullEditor } from './components/NullEditor';
import { ArrayEditor } from './components/ArrayEditor';
import { ObjectEditor } from './components/ObjectEditor';

export class JsonEditorStatus {
    private jsonText: string = '';
    private node: Node | null = null;
    private error: string | null = null;

    constructor(jsonText?: string | null) {
        this.jsonText = jsonText || '';
        try {
            this.node = parseJson(this.jsonText);
            this.error = null;
        } catch (err) {
            this.error = err.message;
        }
    }

    clone(): JsonEditorStatus {
        const obj = new JsonEditorStatus(null);
        obj.jsonText = this.jsonText;
        obj.node = this.node;
        obj.error = this.error;
        return obj;
    }

    getError() {
        return this.error || '';
    }

    getNode() {
        return this.node;
    }

    setNode(node: Node) {
        if (node === this.node) return this;
        const clone = this.clone();
        clone.node = node;
        clone.error = null; // we have node, we don't have error then
        return clone;
    }

    toJsonText() {
        throw new Error('todo');
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
    const node = status.getNode();
    if (node === null) {
        return <div>{status.getError()}</div>;
    }

    return (
        <div style={props.style}>
            {switchNodeType(node, {
                Null: node => (
                    <NullEditor
                        status={node}
                        onChangeStatus={newNode => props.onChangeStatus(status.setNode(newNode))}
                    />
                ),
                Boolean: node => (
                    <BooleanEditor
                        status={node}
                        onChangeStatus={newNode => props.onChangeStatus(status.setNode(newNode))}
                    />
                ),
                Number: node => (
                    <NumberEditor
                        status={node}
                        onChangeStatus={newNode => props.onChangeStatus(status.setNode(newNode))}
                    />
                ),
                String: node => (
                    <StringEditor
                        status={node}
                        onChangeStatus={newNode => props.onChangeStatus(status.setNode(newNode))}
                    />
                ),
                Object: node => (
                    <ObjectEditor
                        status={node}
                        onChangeStatus={newNode => props.onChangeStatus(status.setNode(newNode))}
                    />
                ),
                Array: node => (
                    <ArrayEditor
                        status={node}
                        onChangeStatus={newNode => props.onChangeStatus(status.setNode(newNode))}
                    />
                ),
            })}
        </div>
    );
}
