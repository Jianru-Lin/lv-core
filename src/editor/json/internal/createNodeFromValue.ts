import { Node } from '../base/def/Node'
import { switchType } from './switchType'
import { NullNode } from '../base/NullNode'
import { BooleanNode } from '../base/BooleanNode'
import { NumberNode } from '../base/NumberNode'
import { StringNode } from '../base/StringNode'
import { ArrayNode } from '../base/ArrayNode'
import { ObjectNode } from '../base/ObjectNode'

export function createNodeFromValue(value: any): Node {
  return switchType(value, {
    tNull: () => new NullNode(),
    tBoolean: () => new BooleanNode(value),
    tNumber: () => new NumberNode(value),
    tString: () => new StringNode(value),
    tArray: () => new ArrayNode(value),
    tObject: () => new ObjectNode(value),
  })
}
