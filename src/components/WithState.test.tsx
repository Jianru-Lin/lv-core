import * as React from 'react'
import { Block, BlockStatus } from './Block'
import { WithState } from './WithState'
import * as renderer from 'react-test-renderer'

test('WithState: Block', () => {
  const BlockWithState = WithState<BlockStatus>(Block, new BlockStatus(false, false))

  const component = renderer.create(
    <BlockWithState>Content</BlockWithState>
  )
})
