import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Menu } from 'lv-core';

const content = (
    <div>
        <Menu style={{ marginBottom: 16 }}>Hello</Menu>
    </div>
);

ReactDOM.render(content, document.getElementById('root'));
