import * as React from 'react';
import { CycleModal } from '../def/CycleModel';
import { WithState } from './WithState';
import * as color from '../style/color';

export interface MenuP {
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const defaultStyle: React.CSSProperties = {
    background: 'black',
    color: color.textColor,
    borderRadius: 4,
    paddingTop: '1em',
    paddingBottom: '1em',
};

export function Menu(props: MenuP) {
    return <div style={{ ...defaultStyle, ...props.style }}>{props.children}</div>;
}
