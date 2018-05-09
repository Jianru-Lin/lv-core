import * as React from 'react';
import { CycleModal } from '../def/CycleModel';
import { Block, BlockStatus } from './Block';
import { WithState } from './WithState';
import * as color from '../style/color';

export class LeftRightPairStatus {
    private hover: boolean;
    private blockStatus: BlockStatus;

    static AllPossibleStatus(): LeftRightPairStatus[] {
        const [y, n] = [true, false];
        return [
            new LeftRightPairStatus(y).setOpen(y),
            new LeftRightPairStatus(y).setOpen(n),
            new LeftRightPairStatus(n).setOpen(y),
            new LeftRightPairStatus(n).setOpen(n),
        ];
    }

    constructor(hover: boolean) {
        this.hover = hover;
        this.blockStatus = new BlockStatus(false, hover);
    }

    clone() {
        const obj = new LeftRightPairStatus(this.hover);
        obj.blockStatus = this.blockStatus;
        return obj;
    }

    getBlockStatus() {
        return this.blockStatus;
    }

    setBlockStatus(v: BlockStatus): LeftRightPairStatus {
        const clone = this.clone();
        clone.blockStatus = v;
        clone.hover = v.getHover(); // sync
        return clone;
    }

    getHover() {
        return this.hover;
    }

    setHover(v: boolean): LeftRightPairStatus {
        if (v === this.hover) return this;
        const clone = this.clone();
        clone.hover = v;
        clone.blockStatus = this.blockStatus.setHover(v);
        return clone;
    }

    getOpen() {
        return this.blockStatus.getOpen();
    }

    setOpen(v: boolean): LeftRightPairStatus {
        if (v === this.blockStatus.getOpen()) return this;
        const clone = this.clone();
        clone.blockStatus = clone.blockStatus.setOpen(v);
        return clone;
    }

    switchOpen(): LeftRightPairStatus {
        return this.setOpen(!this.getOpen());
    }

    toJSON() {
        return {
            hover: this.hover,
            open: this.blockStatus.getOpen(),
        };
    }

    toString() {
        return JSON.stringify(this.toJSON());
    }
}

export interface LeftRightPairP extends CycleModal<LeftRightPairStatus> {
    left: string;
    right: string;
}

interface LeftRightPairStyle {
    root: React.CSSProperties;
    left_and_right: {
        normal: React.CSSProperties;
        hover: React.CSSProperties;
    };
}

const DefaultStyle: LeftRightPairStyle = {
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    left_and_right: {
        normal: {
            transition: 'all 0.3s',
            color: color.textColor,
            backgroundColor: 'transparent',
            cursor: 'pointer',
        },
        hover: {
            color: color.textColorHi,
            backgroundColor: color.backgroundColorHi,
        },
    },
};

export function LeftRightPair(props: LeftRightPairP) {
    const { left, right } = props;
    const status = props.data;

    const style: { [key: string]: React.CSSProperties } = {
        root: {
            ...DefaultStyle.root,
            ...props.style,
        },
        left_and_right: {
            ...DefaultStyle.left_and_right.normal,
            ...(status.getHover() ? DefaultStyle.left_and_right.hover : null),
        },
    };

    return (
        <div style={style.root}>
            <div
                style={style.left_and_right}
                onMouseEnter={_ => props.onChange(status.setHover(true))}
                onMouseLeave={_ => props.onChange(status.setHover(false))}
                onClick={_ => props.onChange(status.switchOpen())}>
                {left}
            </div>
            <Block
                data={status.getBlockStatus()}
                onChange={newBlockStatus => props.onChange(status.setBlockStatus(newBlockStatus))}>
                {props.children}
            </Block>
            <div
                style={style.left_and_right}
                onMouseEnter={_ => props.onChange(status.setHover(true))}
                onMouseLeave={_ => props.onChange(status.setHover(false))}
                onClick={_ => props.onChange(status.switchOpen())}>
                {right}
            </div>
        </div>
    );
}

export const LeftRightPairWithState = WithState<LeftRightPairStatus, LeftRightPairP>(
    LeftRightPair,
    new LeftRightPairStatus(false)
);

export interface LeftRightPairSimpleP {
    left: string;
    right: string;
    open: boolean;
    onChange: (open: boolean) => void;
}

export interface LeftRightPairSimpleS {
    lrStatus: LeftRightPairStatus;
}

export class LeftRightPairSimple extends React.Component<LeftRightPairSimpleP, LeftRightPairSimpleS> {
    constructor(props: LeftRightPairSimpleP) {
        super(props);
        this.state = {
            lrStatus: new LeftRightPairStatus(false),
        };
    }

    render() {
        return (
            <LeftRightPair
                left={this.props.left}
                right={this.props.right}
                data={this.state.lrStatus}
                onChange={lrStatus => {
                    this.setState({
                        lrStatus,
                    });
                    this.props.onChange(lrStatus.getOpen());
                }}>
                {this.props.children}
            </LeftRightPair>
        );
    }
}
