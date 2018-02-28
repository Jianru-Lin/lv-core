import * as React from 'react'
import { NullNode } from '../base/NullNode'

export interface NullEditorP {
  status: NullNode
  onChangeStatus: (status: NullNode) => void
}

export function NullEditor(props: NullEditorP) {
  return (
    <span>null</span>
  )
}
