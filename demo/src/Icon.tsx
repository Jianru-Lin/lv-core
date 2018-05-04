import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Icon } from 'lv-core';

const content = (
    <div style={{ color: 'white' }}>
        <div>
            <Icon name="add" />
        </div>
        <div>
            <Icon name="clear" />
        </div>
    </div>
);

ReactDOM.render(content, document.getElementById('root'));
