import * as React from 'react'
import { LeftRightPair, LeftRightPairStatus, LeftRightPairWithState } from './LeftRightPair'
import * as renderer from 'react-test-renderer'

test('LeftRightPair: ()', () => {
  const component = renderer.create(
    <LeftRightPair left="(" right=")" data={genData()} onChange={onChange} />
  )
})

test('LeftRightPairWithState', () => {
  const component = renderer.create(
    <LeftRightPairWithState left="(" right=")" />
  )
})

function genData() {
  return new LeftRightPairStatus(Math.random() >= 0.5).setOpen(Math.random() >= 0.5)
}

function onChange(data: any) {
  // ignore
}
