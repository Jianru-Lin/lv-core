import * as React from 'react';
import { Icon } from './Icon';
import * as renderer from 'react-test-renderer';

test('Icon: empty', () => {
    const component = renderer.create(<Icon name="" />);
});

test('Icon: add', () => {
    const component = renderer.create(<Icon name="add" />);
});
