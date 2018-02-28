// import * as React from 'react'
// // import { ArraryEditor } from '../components/ArraryEditor'
// import { BooleanEditor } from '../components/BooleanEditor'
// import { NullEditor } from '../components/NullEditor'
// import { NumberEditor } from '../components/NumberEditor'
// // import { ObjectEditor } from '../components/ObjectEditor'
// import { StringEditor } from '../components/StringEditor'

// export type FactoryCallback = () => void

// export function Factory(value: any, cb: FactoryCallback) {
//   if (value === null) {
//     return Null
//   }
//   switch (typeof value) {
//     case 'boolean': return Boolean
//     case 'number': return Number
//     case 'object': {
//       if (Array.isArray(value)) {
//         return Array
//       }
//       else {
//         return Object
//       }
//     }
//     case 'string': return String
//     default:
//       throw new Error('Unsupported value type: ' + (typeof value))
//   }
// }
