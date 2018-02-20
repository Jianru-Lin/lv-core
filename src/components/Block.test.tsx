import * as React from 'react'
import { Block } from './Block'
import * as renderer from 'react-test-renderer'

test('Block: empty', () => {
  const component = renderer.create(
    <Block data={genData()} onChange={onChange} />
  )
})

test('Block: text', () => {
  const component = renderer.create(
    <Block data={genData()} onChange={onChange}>hello</Block>
  )
})

test('Block: in block', () => {
  const component = renderer.create(
    <Block data={genData()} onChange={onChange}>
      <Block data={genData()} onChange={onChange} />
    </Block>
  )
})

function genData() {
  return {
    open: Math.random() >= 0.5,
    hover: Math.random() >= 0.5,
  }
}

function onChange(data: any) {
  // ignore
}
