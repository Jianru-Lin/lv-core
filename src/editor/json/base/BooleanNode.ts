import { Node, NodeType } from './def/Node'

export class BooleanNode implements Node {
  private value: boolean

  constructor(value: boolean) {
    this.value = value
  }

  getType() {
    return NodeType.Boolean
  }

  getValue() {
    return this.value
  }

  setValue(value: boolean): BooleanNode {
    return new BooleanNode(value)
  }

  reverseValue(): BooleanNode {
    return new BooleanNode(!this.value)
  }

  // switchType<T>(map: NodeSwitchTypeCase<T>) {
  //   if (map.tBoolean) {
  //     return map.tBoolean()
  //   }
  // }
}