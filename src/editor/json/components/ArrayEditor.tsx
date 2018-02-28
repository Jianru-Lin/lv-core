import * as React from 'react'
import { LeftRightPair, LeftRightPairData } from '../../../components/LeftRightPair'
import { switchNodeType } from '../internal/switchNodeType'
import { NullEditor } from './NullEditor'
import { ArrayNode } from '../base/ArrayNode'

export interface ArrayEditorP {
  status: ArrayNode
  onChangeStatus: (status: ArrayNode) => void
}

export function ArrayEditor(props: ArrayEditorP): React.ReactElement<any> | null {
  const style: { [key: string]: React.CSSProperties } = {
    root: {
      display: 'flex',
      flexDirection: props.status.layout === 'H' ? 'row' : 'column',
    },
    element: {
      display: 'flex',
      flexDirection: 'row',
    },
    comma: {
      cursor: 'pointer',
    }
  }

  let body: React.ReactNode = null
  if (props.status.elements.length) {
    body = (
      <div style={style.root}>
        {props.status.elements.map((node, i) => (
          <div style={style.element}>
            {
              switchNodeType<React.ReactNode>(node, {
                Null: node => (
                  <NullEditor
                    status={node}
                    onChangeStatus={newNode => {
                      props.onChangeStatus(props.status.replace(node, newNode))
                    }} />
                ),
                // tBoolean: () => {throw new Error('TODO')}
                // tNumber: () => T
                // tString: () => T
                Array: node => (
                  <ArrayEditor
                    status={node}
                    onChangeStatus={newNode => {
                      props.onChangeStatus(props.status.replace(node, newNode))
                    }} />
                )
                // tObject: () => T
              })
            }
            {
              i < props.status.value.length - 1 ? (
                <span
                  style={style.comma}
                  onClick={e => props.onChangeStatus(props.status.switchLayout())}>
                  ,&nbsp;
                </span>
              ) : null
            }
          </div>
        ))}
      </div>
    )
  }

  return (
    <LeftRightPair
      left='[' right=']'
      data={props.status.leftRightPairData}
      onChange={leftRightPairData => {
        props.status.leftRightPairData = leftRightPairData
        props.onChangeStatus(props.status)
      }}>
      {body}
    </LeftRightPair>
  )
}
