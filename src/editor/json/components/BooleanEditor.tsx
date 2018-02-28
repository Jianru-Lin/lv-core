// import * as React from 'react'
// import { BooleanNode } from '../base/BooleanNode'
// import { Block, BlockData } from '../../../components/Block'

// export interface BooleanEditorP {
//   status: BooleanNode
//   onChangeStatus: (status: BooleanNode) => void
// }

// export function BooleanEditor(props: BooleanEditorP) {
//   return (
//     <Block
//       data={props.status.data.blockData}
//       onChange={blockData => {
//         props.status.data.blockData = blockData
//         props.onChangeStatus(props.status)
//       }}>
//       {props.status.data.value.toString()}
//     </Block>
//   )
// }

// // export function CreateBooleanEditor(value: boolean, parentEditorStatus: EditorStatus) {
// //   const editorStatus = new BooleanEditorStatus(value)
// //   parentEditorStatus.addChild(editorStatus)

// //   return (
// //     <BooleanEditor status={editorStatus} onChangeStatus={} />
// //   )
// // }