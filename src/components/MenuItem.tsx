import * as React from 'react';
import { CycleModal } from '../def/CycleModel';
import { WithState } from './WithState';
import * as color from '../style/color';

export interface MenuItemData {
    hover: boolean;
}

export interface MenuItemP extends CycleModal<MenuItemData> {
    onClick?: () => void;
    style?: React.CSSProperties;
}

interface DefaultStyle {
    normal: React.CSSProperties;
    hover: React.CSSProperties;
}

const defaultStyle: DefaultStyle = {
    normal: {
        transition: 'all 0.3s',
        background: 'transparent',
        color: color.textColor,
        padding: '0.5em',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    },
    hover: {
        color: color.textColorHi,
        background: 'rgba(255,255,255,0.2)',
    },
};

export function MenuItem(props: MenuItemP) {
    return (
        <div
            style={{
                ...defaultStyle.normal,
                ...(props.data.hover ? defaultStyle.hover : null),
                ...props.style,
            }}
            onMouseEnter={_ => props.onChange({ hover: true })}
            onMouseLeave={_ => props.onChange({ hover: false })}
            onClick={_ => props.onClick && props.onClick()}>
            {props.children}
        </div>
    );
}

export const MenuItemWithState = WithState<MenuItemData, MenuItemP>(MenuItem, { hover: false });
