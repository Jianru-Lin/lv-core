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

        const text = this.load() || '{}';

        this.state = {
            text,
            editorStatus: new JsonEditorStatus(text),
        };
    }

    load() {
        return localStorage.getItem('JsonEditorPlay');
    }

    save(v: string) {
        localStorage.setItem('JsonEditorPlay', v);
    }

    render() {
        return (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    color: 'rgb(199, 199, 199)',
                }}>
                <div
                    style={{
                        backgroundColor: '#333',
                        padding: 16,
                    }}>
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
                            this.save(text);
                        }}
                    />
                </div>
                <div
                    style={{
                        border: 'solid 1px #333',
                        padding: 16,
                        overflow: 'auto',
                    }}>
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
