import * as uuid from 'uuid/v4';

export enum NodeType {
    Null,
    Boolean,
    Number,
    String,
    Array,
    Object,
}

export enum Layout {
    Horizontal,
    Vertical,
}

export interface NodeManager {
    getLayout: (node: ArrayNode | ObjectNode) => Layout;
    setLayout: (node: ArrayNode | ObjectNode, v: Layout) => void;
    toggleLayout: (node: ArrayNode | ObjectNode) => void;
}

export interface Node {
    id: string;
    type: NodeType;
    manager: NodeManager;
}

export class NullNode implements Node {
    id = uuid();
    type: NodeType = NodeType.Null;
    manager: NodeManager;

    constructor(manager: NodeManager) {
        this.manager = manager;
    }
}

export class NumberNode implements Node {
    id = uuid();
    type = NodeType.Number;
    manager: NodeManager;
    value: number;

    constructor(manager: NodeManager, value: number) {
        this.manager = manager;
        this.value = value;
    }
}

export class BooleanNode implements Node {
    id = uuid();
    type = NodeType.Boolean;
    manager: NodeManager;
    value: boolean;

    constructor(manager: NodeManager, value: boolean) {
        this.manager = manager;
        this.value = value;
    }
}

export class StringNode implements Node {
    id = uuid();
    type = NodeType.String;
    manager: NodeManager;
    value: string;

    constructor(manager: NodeManager, value: string) {
        this.manager = manager;
        this.value = value;
    }
}

export class ObjectNode implements Node {
    id = uuid();
    type = NodeType.Object;
    manager: NodeManager;
    props: { name: string; node: Node }[] = [];

    constructor(manager: NodeManager) {
        this.manager = manager;
    }
}

export class ArrayNode implements Node {
    id = uuid();
    type = NodeType.Array;
    manager: NodeManager;
    elements: Node[] = [];

    constructor(manager: NodeManager) {
        this.manager = manager;
    }
}
