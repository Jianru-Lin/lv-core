import { JsonValue } from './JsonValue';

// export interface NodeSwitchTypeCase<T> {
//   tNull?: () => T
//   tBoolean?: () => T
//   tNumber?: () => T
//   tString?: () => T
//   tArray?: () => T
//   tObject?: () => T
// }

export interface Node {
    getType(): NodeType;
    // switchType<T = any>(map: NodeSwitchTypeCase<T>): T | undefined
    getValue(): JsonValue;
}

export enum NodeType {
    Null,
    Boolean,
    Number,
    String,
    Array,
    Object,
}

// export type Node = NullNode | BooleanNode | NumberNode | StringNode | ArrayNode | ObjectNode
