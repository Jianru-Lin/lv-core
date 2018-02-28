export type SwitchTypeCallback = () => any
export type SwitchTypeCallbackMap = {
  tNull: SwitchTypeCallback
  tBoolean: SwitchTypeCallback
  tNumber: SwitchTypeCallback
  tString: SwitchTypeCallback
  tArray: SwitchTypeCallback
  tObject: SwitchTypeCallback
  error?: SwitchTypeCallback
}

export function switchType(value: any, cbMap: SwitchTypeCallbackMap): any {
  if (value === null) {
    return cbMap.tNull()
  }
  switch (typeof value) {
    case 'boolean': return cbMap.tBoolean()
    case 'number': return cbMap.tNumber()
    case 'string': return cbMap.tString()
    case 'object': {
      if (Array.isArray(value)) {
        return cbMap.tArray()
      }
      else {
        return cbMap.tObject()
      }
    }
    default:
      if (cbMap.error) {
        return cbMap.error()
      }
      else {
        throw new Error('switchType: invalid type: ' + (typeof value))
      }
  }
}