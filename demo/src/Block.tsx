import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Block, BlockWithState } from 'lv-core'

const content = (
  <div>
    <BlockWithState>Content</BlockWithState>
    <BlockWithState style={{ marginTop: 16 }}>Content</BlockWithState>
    <div style={{ marginTop: 16 }}>
      <BlockWithState>
        <BlockWithState style={{ marginBottom: 16 }}>Content1</BlockWithState>
        <BlockWithState>Content2</BlockWithState>
      </BlockWithState>
    </div>
  </div>
)

ReactDOM.render(content, document.getElementById('root'))
