import * as React from 'react'
import { Block, BlockData } from './Block'
import { WithState } from './WithState'
import * as renderer from 'react-test-renderer'

test('WithState: Block', () => {
  const BlockWithState = WithState<BlockData>(Block, { open: false, hover: false })

  const component = renderer.create(
    <BlockWithState>Content</BlockWithState>
  )
})
