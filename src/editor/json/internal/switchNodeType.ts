import {
    NodeType,
    Node,
    NullNode,
    BooleanNode,
    NumberNode,
    StringNode,
    ObjectNode,
    ArrayNode,
} from '../model';

export function switchNodeType<T = any>(
    node: Node,
    cb: {
        Null: (node: NullNode) => T;
        Boolean: (node: BooleanNode) => T;
        Number: (node: NumberNode) => T;
        String: (node: StringNode) => T;
        Object: (node: ObjectNode) => T;
        Array: (node: ArrayNode) => T;
    }
): T {
    switch (node.type) {
        case NodeType.Null:
            return cb.Null(node as NullNode);
        case NodeType.Boolean:
            return cb.Boolean(node as BooleanNode);
        case NodeType.Number:
            return cb.Number(node as NumberNode);
        case NodeType.String:
            return cb.String(node as StringNode);
        case NodeType.Object:
            return cb.Object(node as ObjectNode);
        case NodeType.Array:
            return cb.Array(node as ArrayNode);
        default:
            throw new Error('Stupid.');
    }
}
