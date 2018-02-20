import * as React from 'react'
import * as ReactDOM from 'react-dom'

const content = (
    <div
        style={{
            position: 'absolute',
            left: 0, top: 0, right: 0, bottom: 0,
            color: 'white',
        }}>
        <h1>Demo</h1>
        <ol>
            <li>
                <a href="Block.html">Block</a>
            </li>
            <li>
                <a href="LeftRightPair.html">LeftRightPair</a>
            </li>
        </ol>
    </div>
)

ReactDOM.render(content, document.getElementById('root'))
