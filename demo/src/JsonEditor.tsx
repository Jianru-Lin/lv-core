import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { JsonEditor, JsonEditorStatus } from 'lv-core'
import { Section } from './components/Section'
import { SubSection } from './components/SubSection'

function JsonEditorWithState(jsonText: string) {
  return class extends React.Component<any, { jsonEditorStatus: JsonEditorStatus }> {
    constructor(props: any) {
      super(props)
      this.state = {
        jsonEditorStatus: new JsonEditorStatus(jsonText)
      }
    }

    render() {
      return (
        <JsonEditor
          status={this.state.jsonEditorStatus}
          onChangeStatus={status => this.setState({ jsonEditorStatus: status })} />
      )
    }
  }
}

// const NumberEditor = JsonEditorWithState('1.23e-1')
// const NullEditor = JsonEditorWithState('null')
// const BooleanEditor = JsonEditorWithState('true')
// const StringEditor = JsonEditorWithState('"hello, string"')
// const EmptyArrayEditor = JsonEditorWithState('[]')
// const ArrayEditor = JsonEditorWithState('[1,2,3]')
// const ObjectEditor = JsonEditorWithState('{a: "hello", b: 123}')

// const content = (
//   <div>
//     <Section title="JsonEditor">
//       <SubSection title="number">
//         <NumberEditor />
//       </SubSection>
//       <SubSection title="null">
//         <NullEditor />
//       </SubSection>
//       <SubSection title="boolean">
//         <BooleanEditor />
//       </SubSection>
//       <SubSection title="string">
//         <StringEditor />
//       </SubSection>
//       <SubSection title="array">
//         <ArrayEditor />
//       </SubSection>
//       <SubSection title="object">
//         <ObjectEditor />
//       </SubSection>
//     </Section>
//   </div>
// )

const NullEditor = JsonEditorWithState('null')
const ArrayEditor = JsonEditorWithState('[]')
const ArrayEditorNull = JsonEditorWithState('[null]')
const ArrayEditorNull2 = JsonEditorWithState('[null, null]')
const ArrayEditorR = JsonEditorWithState('[[]]')

const content = (
  <div>
    <Section title="JsonEditor">
      <SubSection title="null">
        <NullEditor />
      </SubSection>
      <SubSection title="array">
        <ArrayEditor />
      </SubSection>
      <SubSection title="array null">
        <ArrayEditorNull />
      </SubSection>
      <SubSection title="array null 2">
        <ArrayEditorNull2 />
      </SubSection>
      <SubSection title="array in array">
        <ArrayEditorR />
      </SubSection>
    </Section>
  </div>
)
ReactDOM.render(content, document.getElementById('root'))
