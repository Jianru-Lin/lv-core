import * as React from 'react'
import { LeftRightPair, LeftRightPairWithState } from './LeftRightPair'
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
  return {
    hover: {
      left: Math.random() >= 0.5,
      right: Math.random() >= 0.5,
    },
    blockData: {
      open: Math.random() >= 0.5,
      hover: Math.random() >= 0.5,
    }
  }
}

function onChange(data: any) {
  // ignore
}
