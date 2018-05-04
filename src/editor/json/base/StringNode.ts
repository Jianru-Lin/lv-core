import { Node, NodeType } from './def/Node';

export class StringNode implements Node {
    private value: string;

    constructor(value: string) {
        this.value = value;
    }

    getType() {
        return NodeType.String;
    }

    getValue() {
        return this.value;
    }

    setValue(value: string): StringNode {
        return new StringNode(value);
    }

    // switchType<T>(map: NodeSwitchTypeCase<T>) {
    //   if (map.tString) {
    //     return map.tString()
    //   }
    // }
}
