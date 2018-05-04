import { JsonValue } from './def/JsonValue';
import { Node, NodeType } from './def/Node';
import { createNodeFromValue } from '../internal/createNodeFromValue';
import { LeftRightPair, LeftRightPairStatus } from '../../../components/LeftRightPair';

export class ArrayNode implements Node {
    // core
    private value: any[];
    private elements: Node[];
    // ui
    private layout: 'V' | 'H';
    private leftRightPairStatus: LeftRightPairStatus;

    constructor(value: JsonValue[]) {
        // core
        this.value = value;
        this.elements = value.map(createNodeFromValue);
        // ui
        this.layout = 'V';
        this.leftRightPairStatus = new LeftRightPairStatus(false);
    }

    clone(): ArrayNode {
        const obj = new ArrayNode(this.value); // TODO: low performance, rethink about it
        // core
        obj.value = this.value;
        obj.elements = this.elements;
        // ui
        obj.layout = this.layout;
        obj.leftRightPairStatus = this.leftRightPairStatus; // TODO: DANGER!
        return obj;
    }

    getType() {
        return NodeType.Array;
    }

    replace(node: Node, newNode: Node): ArrayNode {
        if (node === newNode) return this;
        const clone = this.clone();
        clone.elements = clone.elements.map(e => (e === node ? newNode : e));
        return clone;
    }

    remove(index: number): ArrayNode {
        if (!this.elements[index]) return this;
        const clone = new ArrayNode([]);
        for (var i = 0; i < this.elements.length; ++i) {
            if (i === index) continue;
            clone.value.push(this.value[i]);
            clone.elements.push(this.elements[i]);
        }
        return clone;
    }

    getValue() {
        return this.value;
    }

    setValue(value: JsonValue[]): ArrayNode {
        return new ArrayNode(value);
    }

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

    setLeftRightPairStatus(v: LeftRightPairStatus): ArrayNode {
        if (v === this.leftRightPairStatus) return this;
        const clone = this.clone();
        clone.leftRightPairStatus = v;
        return clone;
    }

    switchLayout(): ArrayNode {
        const obj = this.clone();
        obj.layout = obj.layout === 'V' ? 'H' : 'V';
        return obj;
    }
}
