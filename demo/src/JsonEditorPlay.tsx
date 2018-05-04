import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { JsonEditor, JsonEditorStatus } from 'lv-core';
import { Section } from './components/Section';
import { SubSection } from './components/SubSection';

export interface JsonEditorPlayP {}

export interface JsonEditorPlayS {
    text: string;
    editorStatus: JsonEditorStatus;
}

export class JsonEditorPlay extends React.Component<JsonEditorPlayP, JsonEditorPlayS> {
    constructor(props: JsonEditorPlayP) {
        super(props);

        const text = '{}';

        this.state = {
            text,
            editorStatus: new JsonEditorStatus(text),
        };
    }

    render() {
        return (
            <div style={{ width: '100%', height: '100%', display: 'flex', color: 'rgb(199, 199, 199)' }}>
                <div style={{ flexBasis: '50%', height: '100%', border: 'solid 1px white', padding: 16 }}>
                    <textarea
                        style={{
                            width: '100%',
                            height: '100%',
                            fontSize: 'inherit',
                            fontFamily: 'inherit',
                            color: 'inherit',
                            background: 'transparent',
                            border: 'none',
                            outline: 'none',
                        }}
                        value={this.state.text}
                        onChange={v => {
                            const text = v.target.value;
                            this.setState({ text, editorStatus: new JsonEditorStatus(text) });
                        }}
                    />
                </div>
                <div style={{ flexBasis: '50%', height: '100%', border: 'solid 1px white', padding: 16 }}>
                    <JsonEditor
                        style={{ width: '100%', height: '100%' }}
                        status={this.state.editorStatus}
                        onChangeStatus={status => this.setState({ editorStatus: status })}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<JsonEditorPlay />, document.getElementById('root'));
