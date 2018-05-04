import * as React from 'react';

export interface SubSectionP {
    title: string;
}

export interface SubSectionS {}

export class SubSection extends React.Component<SubSectionP, SubSectionS> {
    constructor(props: SubSectionP) {
        super(props);
        this.state = {};
    }

    render() {
        const style: { [key: string]: React.CSSProperties } = {
            root: {
                marginTop: 16,
            },
            title: {
                color: 'black',
                margin: 0,
            },
            content: {
                marginTop: 16,
            },
        };

        return (
            <div style={style.root}>
                <h3 style={style.title}>{this.props.title}</h3>
                <div style={style.content}>{this.props.children}</div>
            </div>
        );
    }
}
