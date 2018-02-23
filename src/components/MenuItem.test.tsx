
import * as React from 'react'
import { MenuItem } from './MenuItem'
import * as renderer from 'react-test-renderer'

test('MenuItem: empty', () => {
  const component = renderer.create(
    <MenuItem data={{ hover: false }} onChange={_ => { }} />
  )
})
