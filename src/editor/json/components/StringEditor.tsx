// import * as React from 'react'
// import { LeftRightPair, LeftRightPairData } from '../../../components/LeftRightPair'

// export class StringEditorStatus {
//   value: string
//   text: string
//   leftRightPairData: LeftRightPairData

//   constructor(value: string) {
//     this.value = value
//     this.text = JSON.stringify(value)
//     this.text = this.text.substring(1, this.text.length - 1)
//     this.leftRightPairData = {
//       hover: { left: false, right: false },
//       blockData: { open: true, hover: false }
//     }
//   }

//   toJsonText() {
//     return JSON.stringify(this.value)
//   }
// }

// export interface StringEditorP {
//   status: StringEditorStatus
//   onChangeStatus: (status: StringEditorStatus) => void
// }

// export function StringEditor(props: StringEditorP) {
//   return (
//     <LeftRightPair
//       left='"' right='"'
//       data={props.status.leftRightPairData}
//       onChange={leftRightPairData => {
//         props.status.leftRightPairData = leftRightPairData
//         props.onChangeStatus(props.status)
//       }}>
//       {props.status.text}
//     </LeftRightPair>
//   )
// }
