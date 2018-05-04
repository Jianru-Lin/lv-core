import { Node, NodeType } from '../base/def/Node';
import { NullNode } from '../base/NullNode';
import { BooleanNode } from '../base/BooleanNode';
import { NumberNode } from '../base/NumberNode';
import { StringNode } from '../base/StringNode';
import { ArrayNode } from '../base/ArrayNode';
import { ObjectNode } from '../base/ObjectNode';

export interface SwitchNodeTypeCase<T> {
    Null?: (node: NullNode) => T;
    Boolean?: (node: BooleanNode) => T;
    Number?: (node: NumberNode) => T;
    String?: (node: StringNode) => T;
    Array?: (node: ArrayNode) => T;
    Object?: (node: ObjectNode) => T;
}

export function switchNodeType<T = any>(node: Node, cases: SwitchNodeTypeCase<T>): T | undefined {
    switch (node.getType()) {
        case NodeType.Null:
            return cases.Null ? cases.Null(node as NullNode) : undefined;
        case NodeType.Boolean:
            return cases.Boolean ? cases.Boolean(node as BooleanNode) : undefined;
        case NodeType.Number:
            return cases.Number ? cases.Number(node as NumberNode) : undefined;
        case NodeType.String:
            return cases.String ? cases.String(node as StringNode) : undefined;
        case NodeType.Array:
            return cases.Array ? cases.Array(node as ArrayNode) : undefined;
        case NodeType.Object:
            return cases.Object ? cases.Object(node as ObjectNode) : undefined;
        default:
            throw new Error('unknown node type: ' + node.getType());
    }
}
