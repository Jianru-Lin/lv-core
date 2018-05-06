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

export interface Node {
    id: string;
    type: NodeType;
}

export class NullNode implements Node {
    id = uuid();
    type: NodeType = NodeType.Null;
}

export class NumberNode implements Node {
    id = uuid();
    type = NodeType.Number;
    value: number;

    constructor(value: number) {
        this.value = value;
    }
}

export class BooleanNode implements Node {
    id = uuid();
    type = NodeType.Boolean;
    value: boolean;

    constructor(value: boolean) {
        this.value = value;
    }
}

export class StringNode implements Node {
    id = uuid();
    type = NodeType.String;
    value: string;

    constructor(value: string) {
        this.value = value;
    }
}

export class ObjectNode implements Node {
    id = uuid();
    type = NodeType.Object;
    props: { name: string; node: Node }[];
    layout: Layout;

    constructor() {
        this.props = [];
        this.layout = Layout.Vertical;
    }

    toggleLayout() {
        this.layout = this.layout === Layout.Horizontal ? Layout.Vertical : Layout.Horizontal;
    }
}

export class ArrayNode implements Node {
    id = uuid();
    type = NodeType.Array;
    elements: Node[];
    layout: Layout;

    constructor() {
        this.elements = [];
        this.layout = Layout.Vertical;
    }

    toggleLayout() {
        this.layout = this.layout === Layout.Horizontal ? Layout.Vertical : Layout.Horizontal;
    }
}
