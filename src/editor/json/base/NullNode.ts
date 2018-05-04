import { Node, NodeType } from './def/Node';
import { Block, BlockStatus } from '../../../components/Block';

export class NullNode implements Node {
    getType() {
        return NodeType.Null;
    }

    getValue() {
        return null;
    }

    // switchType<T>(map: NodeSwitchTypeCase<T>) {
    //   if (map.tBoolean) {
    //     return map.tBoolean()
    //   }
    // }
}
