import { Node, NodeType } from './def/Node'
import { createNodeFromValue } from '../internal/createNodeFromValue'
// import { JsonValue } from './def/JsonValue'

export class ObjectNode implements Node {
  value: { [key: string]: any }
  children: {
    name: string
    node: Node
  }[]

  constructor(value: { [key: string]: any }) {
    this.value = value
    this.children = Object.keys(value).map(name => {
      return {
        name,
        node: createNodeFromValue(value[name])
      }
    })
  }

  getType() {
    return NodeType.Object
  }

  getValue() {
    return this.value
  }

  // switchType<T>(map: NodeSwitchTypeCase<T>) {
  //   if (map.tObject) {
  //     return map.tObject()
  //   }
  // }
}
