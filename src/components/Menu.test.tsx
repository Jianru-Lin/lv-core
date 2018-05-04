import * as React from 'react';
import { Menu } from './Menu';
import * as renderer from 'react-test-renderer';

test('Menu: empty', () => {
    const component = renderer.create(<Menu />);
});
