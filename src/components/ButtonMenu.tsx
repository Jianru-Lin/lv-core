import * as React from 'react';
import { CycleModal } from '../def/CycleModel';
import { WithState } from './WithState';
import { Icon } from './Icon';
import * as color from '../style/color';

export interface ButtonMenuData {
    hover: boolean;
    open: boolean;
}

export interface ButtonMenuP extends CycleModal<ButtonMenuData> {
    button?: React.ReactNode;
    style?: React.CSSProperties;
}

interface DefaultStyle {
    root: React.CSSProperties;
    bt: {
        normal: React.CSSProperties;
        hover: React.CSSProperties;
    };
}

const defaultStyle: DefaultStyle = {
    root: {
        width: '1em',
        height: '1em',
        background: 'yellow',
    },
    bt: {
        normal: {
            width: '100%',
            height: '100%',
            transition: 'all 0.3s',
            background: 'green',
            color: color.textColor,
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
        },
        hover: {
            color: color.textColorHi,
            background: 'rgba(255,255,255,0.2)',
        },
    },
};

export function ButtonMenu(props: ButtonMenuP) {
    const { hover, open } = props.data;

    return (
        <div style={{ ...defaultStyle.root, ...props.style }}>
            <div
                style={{ ...defaultStyle.bt.normal, ...(props.data.hover ? defaultStyle.bt.hover : null) }}
                onMouseEnter={_ => props.onChange({ hover: true, open })}
                onMouseLeave={_ => props.onChange({ hover: false, open })}
                onClick={_ => props.onChange({ hover, open: !open })}>
                {props.button || <Icon name="menu" style={{ width: '100%', height: '100%' }} />}
            </div>
        </div>
    );
}

// export const ButtonMenuWithState = WithState<ButtonMenuData, ButtonMenuP>(ButtonMenu, { hover: false })
