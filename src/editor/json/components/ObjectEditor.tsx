import * as React from 'react';
import { LeftRightPair, LeftRightPairStatus } from '../../../components/LeftRightPair';
import { switchNodeType } from '../internal/switchNodeType';
import { NullEditor } from './NullEditor';
import { StringEditor } from './StringEditor';
import { NumberEditor } from './NumberEditor';
import { BooleanEditor } from './BooleanEditor';
import { ObjectNode } from '../base/ObjectNode';
import { ArrayEditor } from './ArrayEditor';

export interface ObjectEditorP {
    status: ObjectNode;
    onChangeStatus: (status: ObjectNode) => void;
}

export function ObjectEditor(props: ObjectEditorP): React.ReactElement<any> | null {
    const style: { [key: string]: React.CSSProperties } = {
        root: {
            display: 'flex',
            flexDirection: props.status.getLayout() === 'H' ? 'row' : 'column',
        },
        element: {
            display: 'flex',
            flexDirection: 'row',
        },
        element_name: {},
        element_value: {
            display: 'flex',
            flexDirection: 'row',
        },
        comma: {
            cursor: 'pointer',
        },
    };

    let body: React.ReactNode = null;
    if (props.status.getElements().length) {
        body = (
            <div style={style.root}>
                {props.status.getElements().map((element, i) => {
                    const name = element.name;
                    const node = element.value;
                    return (
                        <div style={style.element}>
                            <div style={style.element_name}>{JSON.stringify(name)}:&nbsp;</div>
                            <div style={style.element_value}>
                                {switchNodeType<React.ReactNode>(node, {
                                    Null: node => (
                                        <NullEditor
                                            status={node}
                                            onChangeStatus={newNode => {
                                                // props.onChangeStatus(props.status.replace(node, newNode));
                                            }}
                                        />
                                    ),
                                    Boolean: node => (
                                        <BooleanEditor
                                            status={node}
                                            onChangeStatus={newNode => {
                                                // props.onChangeStatus(props.status.replace(node, newNode))
                                            }}
                                        />
                                    ),
                                    Number: node => (
                                        <NumberEditor
                                            status={node}
                                            onChangeStatus={newNode => {
                                                // props.onChangeStatus(props.status.replace(node, newNode));
                                            }}
                                        />
                                    ),
                                    String: node => (
                                        <StringEditor
                                            status={node}
                                            onChangeStatus={newNode => {
                                                // props.onChangeStatus(props.status.replace(node, newNode));
                                            }}
                                        />
                                    ),
                                    Array: node => (
                                        <ArrayEditor
                                            status={node}
                                            onChangeStatus={newNode => {
                                                // props.onChangeStatus(props.status.replace(node, newNode));
                                            }}
                                        />
                                    ),
                                    Object: node => (
                                        <ObjectEditor
                                            status={node}
                                            onChangeStatus={newNode => {
                                                // ignore
                                            }}
                                        />
                                    ),
                                })}
                                {i < props.status.getElements().length - 1 ? (
                                    <span
                                        style={style.comma}
                                        onClick={e => props.onChangeStatus(props.status.switchLayout())}>
                                        ,&nbsp;
                                    </span>
                                ) : null}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <LeftRightPair
            left="{"
            right="}"
            data={props.status.getLeftRightPairStatus()}
            onChange={leftRightPairStatus => {
                props.onChangeStatus(props.status.setLeftRightPairStatus(leftRightPairStatus));
            }}>
            {body}
        </LeftRightPair>
    );
}
