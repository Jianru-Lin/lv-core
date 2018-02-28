// import * as React from 'react'
// import { Block, BlockData } from '../../../components/Block'

// export class NumberEditorStatus {
//   value: number
//   blockData: BlockData

//   constructor(value: number) {
//     this.value = value
//     this.blockData = { open: true, hover: false }
//   }

//   toJsonText() {
//     return this.value.toString()
//   }
// }

// export interface NumberEditorP {
//   status: NumberEditorStatus
//   onChangeStatus: (status: NumberEditorStatus) => void
// }

// export function NumberEditor(props: NumberEditorP) {
//   return (
//     <Block
//       data={props.status.blockData}
//       onChange={blockData => {
//         props.status.blockData = blockData
//         props.onChangeStatus(props.status)
//       }}>
//       {props.status.value}
//     </Block>
//   )
// }
