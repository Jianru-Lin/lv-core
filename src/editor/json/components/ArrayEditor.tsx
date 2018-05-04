import * as React from 'react';
import { LeftRightPair, LeftRightPairStatus } from '../../../components/LeftRightPair';
import { switchNodeType } from '../internal/switchNodeType';
import { NullEditor } from './NullEditor';
import { StringEditor } from './StringEditor';
import { NumberEditor } from './NumberEditor';
import { BooleanEditor } from './BooleanEditor';
import { ArrayNode } from '../base/ArrayNode';
import { ObjectEditor } from './ObjectEditor';

export interface ArrayEditorP {
    status: ArrayNode;
    onChangeStatus: (status: ArrayNode) => void;
}

export function ArrayEditor(props: ArrayEditorP): React.ReactElement<any> | null {
    const style: { [key: string]: React.CSSProperties } = {
        root: {
            display: 'flex',
            flexDirection: props.status.getLayout() === 'H' ? 'row' : 'column',
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
    if (props.status.getElements().length) {
        body = (
            <div style={style.root}>
                {props.status.getElements().map((node, i) => (
                    <div style={style.element}>
                        {switchNodeType<React.ReactNode>(node, {
                            Null: node => (
                                <NullEditor
                                    status={node}
                                    onChangeStatus={newNode => {
                                        props.onChangeStatus(props.status.replace(node, newNode));
                                    }}
                                />
                            ),
                            Boolean: node => (
                                <BooleanEditor
                                    status={node}
                                    onChangeStatus={newNode =>
                                        props.onChangeStatus(props.status.replace(node, newNode))
                                    }
                                />
                            ),
                            Number: node => (
                                <NumberEditor
                                    status={node}
                                    onChangeStatus={newNode => {
                                        props.onChangeStatus(props.status.replace(node, newNode));
                                    }}
                                />
                            ),
                            String: node => (
                                <StringEditor
                                    status={node}
                                    onChangeStatus={newNode => {
                                        props.onChangeStatus(props.status.replace(node, newNode));
                                    }}
                                />
                            ),
                            Array: node => (
                                <ArrayEditor
                                    status={node}
                                    onChangeStatus={newNode => {
                                        props.onChangeStatus(props.status.replace(node, newNode));
                                    }}
                                />
                            ),
                            Object: node => (
                                <ObjectEditor
                                    status={node}
                                    onChangeStatus={newNode => {
                                        props.onChangeStatus(props.status.replace(node, newNode));
                                    }}
                                />
                            ),
                        })}
                        {i < props.status.getValue().length - 1 ? (
                            <span
                                style={style.comma}
                                onClick={e => props.onChangeStatus(props.status.switchLayout())}>
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
            data={props.status.getLeftRightPairStatus()}
            onChange={leftRightPairStatus => {
                props.onChangeStatus(props.status.setLeftRightPairStatus(leftRightPairStatus));
            }}>
            {body}
        </LeftRightPair>
    );
}
