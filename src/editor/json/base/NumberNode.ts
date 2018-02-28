import { Node, NodeType } from './def/Node'

export class NumberNode implements Node {
  private value: number

  constructor(value: number) {
    this.value = value
  }

  getType() {
    return NodeType.Number
  }

  getValue() {
    return this.value
  }

  setValue(value: number): NumberNode {
    return new NumberNode(value)
  }

  // switchType<T>(map: NodeSwitchTypeCase<T>) {
  //   if (map.tNumber) {
  //     return map.tNumber()
  //   }
  // }
}
