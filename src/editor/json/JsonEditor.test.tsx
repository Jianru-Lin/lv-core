import * as React from 'react'
import { JsonEditor, JsonEditorStatus } from './JsonEditor'
import * as renderer from 'react-test-renderer'

test('JsonEditor: empty status (undefined)', () => {
  let status = new JsonEditorStatus()
  const component = renderer.create(
    <JsonEditor status={status} onChangeStatus={newStatus => status = newStatus} />
  )
})

test('JsonEditor: empty status (null)', () => {
  let status = new JsonEditorStatus(null)
  const component = renderer.create(
    <JsonEditor status={status} onChangeStatus={newStatus => status = newStatus} />
  )
})

test('JsonEditor: empty status ("")', () => {
  let status = new JsonEditorStatus('')
  const component = renderer.create(
    <JsonEditor status={status} onChangeStatus={newStatus => status = newStatus} />
  )
})

test('JsonEditor: json text', () => {
  let status = new JsonEditorStatus('{}')
  const component = renderer.create(
    <JsonEditor status={status} onChangeStatus={newStatus => status = newStatus} />
  )
})

test('JsonEditor: invalid json text', () => {
  let status = new JsonEditorStatus('abc')
  const component = renderer.create(
    <JsonEditor status={status} onChangeStatus={newStatus => status = newStatus} />
  )
})
