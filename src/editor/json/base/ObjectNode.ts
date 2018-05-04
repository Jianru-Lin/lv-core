import { JsonValue } from './def/JsonValue';
import { Node, NodeType } from './def/Node';
import { createNodeFromValue } from '../internal/createNodeFromValue';
import { LeftRightPair, LeftRightPairStatus } from '../../../components/LeftRightPair';

export interface ObjectNodeKV {
    name: string;
    value: Node;
}

export class ObjectNode implements Node {
    // core
    private value: { [key: string]: JsonValue };
    private elements: ObjectNodeKV[];
    // ui
    private layout: 'V' | 'H';
    private leftRightPairStatus: LeftRightPairStatus;

    constructor(value: { [key: string]: JsonValue }) {
        // core
        this.value = value;
        this.elements = Object.keys(value).map(name => ({
            name,
            value: createNodeFromValue(value[name]),
        }));
        // ui
        this.layout = 'V';
        this.leftRightPairStatus = new LeftRightPairStatus(false);
    }

    clone(): ObjectNode {
        const obj = new ObjectNode(this.value); // TODO: low performance, rethink about it
        // core
        obj.value = this.value;
        obj.elements = this.elements;
        // ui
        obj.layout = this.layout;
        obj.leftRightPairStatus = this.leftRightPairStatus; // TODO: DANGER!
        return obj;
    }

    getType() {
        return NodeType.Object;
    }

    // replace(node: Node, newNode: Node): ObjectNode {
    //     if (node === newNode) return this;
    //     const clone = this.clone();
    //     clone.elements = clone.elements.map(e => (e === node ? newNode : e));
    //     return clone;
    // }

    // remove(index: number): ObjectNode {
    //     if (!this.elements[index]) return this;
    //     const clone = new ObjectNode([]);
    //     for (var i = 0; i < this.elements.length; ++i) {
    //         if (i === index) continue;
    //         clone.value.push(this.value[i]);
    //         clone.elements.push(this.elements[i]);
    //     }
    //     return clone;
    // }

    getValue() {
        return this.value;
    }

    // setValue(value: JsonValue[]): ObjectNode {
    //     return new ObjectNode(value);
    // }

    // switchType<T>(map: NodeSwitchTypeCase<T>) {
    //   if (map.tArray) {
    //     return map.tArray()
    //   }
    // }

    getLayout() {
        return this.layout;
    }

    getElements() {
        return this.elements;
    }

    getLeftRightPairStatus() {
        return this.leftRightPairStatus;
    }

    setLeftRightPairStatus(v: LeftRightPairStatus): ObjectNode {
        if (v === this.leftRightPairStatus) return this;
        const clone = this.clone();
        clone.leftRightPairStatus = v;
        return clone;
    }

    switchLayout(): ObjectNode {
        const obj = this.clone();
        obj.layout = obj.layout === 'V' ? 'H' : 'V';
        return obj;
    }
}
