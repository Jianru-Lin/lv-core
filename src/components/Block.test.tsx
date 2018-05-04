import * as React from 'react';
import { Block, BlockStatus } from './Block';
import * as renderer from 'react-test-renderer';

test('Block: empty', () => {
    const component = renderer.create(<Block data={genData()} onChange={onChange} />);
});

test('Block: text', () => {
    const component = renderer.create(
        <Block data={genData()} onChange={onChange}>
            hello
        </Block>
    );
});

test('Block: in block', () => {
    const component = renderer.create(
        <Block data={genData()} onChange={onChange}>
            <Block data={genData()} onChange={onChange} />
        </Block>
    );
});

function genData() {
    const open = Math.random() >= 0.5;
    const hover = Math.random() >= 0.5;
    return new BlockStatus(open, hover);
}

function onChange(data: any) {
    // ignore
}
