import * as React from 'react'
import * as ReactDOM from 'react-dom'

const links = [
    'Block',
    'LeftRightPair',
    'Icon',
    'Menu',
    'MenuItem',
    'ButtonMenu',
    'JsonEditor',
]

const content = (
    <div
        style={{
            position: 'absolute',
            left: 0, top: 0, right: 0, bottom: 0,
            color: 'white',
            padding: 40,
        }}>
        <h1>Demo</h1>
        <ul>
            {links.map(name => (
                <li>
                    <a href={`${name}.html`}>{name}</a>
                </li>
            ))}
        </ul>
    </div>
)

ReactDOM.render(content, document.getElementById('root'))
