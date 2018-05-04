import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { JsonEditor, JsonEditorStatus } from 'lv-core';
import { Section } from './components/Section';
import { SubSection } from './components/SubSection';

function JsonEditorWithState(jsonText: string) {
    return class extends React.Component<any, { jsonEditorStatus: JsonEditorStatus }> {
        constructor(props: any) {
            super(props);
            this.state = {
                jsonEditorStatus: new JsonEditorStatus(jsonText),
            };
        }

        render() {
            return (
                <JsonEditor
                    status={this.state.jsonEditorStatus}
                    onChangeStatus={status => this.setState({ jsonEditorStatus: status })}
                />
            );
        }
    };
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

const NullEditor = JsonEditorWithState('null');
const BooleanEditor = JsonEditorWithState('true');
const BooleanEditor2 = JsonEditorWithState('false');
const NumberEditor = JsonEditorWithState('-1.23e7'); // 最终会显示为 -1230000 这里需要修正
const StringEditor = JsonEditorWithState('"hello world!"'); // 最终会显示为 -1230000 这里需要修正
const ArrayEditor = JsonEditorWithState('[]');
const ArrayEditorNull = JsonEditorWithState('[null]');
const ArrayEditorNull2 = JsonEditorWithState('[null, null]');
const ArrayEditorString = JsonEditorWithState('["string"]');
const ArrayEditorString2 = JsonEditorWithState('["string1", "string2"]');
const ArrayEditorR = JsonEditorWithState('[[]]');
const ObjectEditor = JsonEditorWithState('{}');
const ObjectEditorKV = JsonEditorWithState('{"k": 1}');
const ObjectEditorKV2 = JsonEditorWithState('{"k1": 1, "k2": 2}');

const content = (
    <div>
        <Section title="JsonEditor">
            <SubSection title="null">
                <NullEditor />
            </SubSection>
            <SubSection title="boolean: true">
                <BooleanEditor />
            </SubSection>
            <SubSection title="boolean: false">
                <BooleanEditor2 />
            </SubSection>
            <SubSection title="number">
                <NumberEditor />
            </SubSection>
            <SubSection title="string">
                <StringEditor />
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
            <SubSection title="array string">
                <ArrayEditorString />
            </SubSection>
            <SubSection title="array string 2">
                <ArrayEditorString2 />
            </SubSection>
            <SubSection title="array in array">
                <ArrayEditorR />
            </SubSection>
            <SubSection title="object">
                <ObjectEditor />
            </SubSection>
            <SubSection title="object kv">
                <ObjectEditorKV />
            </SubSection>
            <SubSection title="object kv 2">
                <ObjectEditorKV2 />
            </SubSection>
        </Section>
    </div>
);
ReactDOM.render(content, document.getElementById('root'));
