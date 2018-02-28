import * as React from 'react'
import { CycleModal } from '../def/CycleModel'
import { WithState } from './WithState'
import * as color from '../style/color'

export class BlockStatus {
  private open: boolean
  private hover: boolean

  constructor(open: boolean, hover: boolean) {
    this.open = open
    this.hover = hover
  }

  clone() {
    const obj = new BlockStatus(this.open, this.hover)
    return obj
  }

  getOpen() {
    return this.open
  }

  setOpen(v: boolean): BlockStatus {
    const clone = this.clone()
    clone.open = v
    return clone
  }

  getHover() {
    return this.hover
  }

  setHover(v: boolean): BlockStatus {
    const clone = this.clone()
    clone.hover = v
    return clone
  }

  toJSON() {
    return {
      open: this.open,
      hover: this.hover
    }
  }

  toString() {
    return JSON.stringify(this.toJSON())
  }
}

export interface BlockP extends CycleModal<BlockStatus> {
}

interface BlockStyle {
  base: React.CSSProperties
  open: {
    normal: React.CSSProperties
    hover: React.CSSProperties
  }
  close: {
    normal: React.CSSProperties
    hover: React.CSSProperties
  }
}

const DefaultStyle: BlockStyle = {
  base: {
    transition: 'all .3s',
    position: 'relative',
  },
  open: {
    normal: {
      backgroundColor: 'rgba(58, 98, 113, 0.2)',
      padding: '1em',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 4,
      color: color.textColor,
    },
    hover: {
      outline: 'solid 1px rgba(255, 255, 255, 0.1)',
    }
  },
  close: {
    normal: {
      padding: 0, //4,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: 2,
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: color.textColor,
    },
    hover: {
      backgroundColor: color.backgroundColorHiPink,
      color: color.textColorHi,
    },
  }
}

export function Block(props: BlockP) {
  const status = props.data

  if (!status.getOpen()) {
    return (
      <div
        style={calcStyle()}
        onMouseEnter={_ => fireChange(status.setHover(true))}
        onMouseLeave={_ => fireChange(status.setHover(false))}
        onClick={_ => fireChange(status.setOpen(true))} >
        ...
        </div>
    )
  }

  let containerDom: (HTMLDivElement | null) = null;
  let children = props.children
  if (!children || (Array.isArray(children) && children.length === 0)) {
    children = <div style={{ width: 0, overflow: 'hidden', whiteSpace: 'pre' }}> </div>
  }

  return (
    <div
      ref={dom => containerDom = dom}
      style={calcStyle()}
      onClick={e => {
        // if (containerDom && e.target === containerDom) fireChange(...)
      }}
      onMouseEnter={_ => fireChange(status.setHover(true))}
      onMouseLeave={_ => fireChange(status.setHover(false))} >
      {children}
    </div>
  )

  function calcStyle() {
    const targetStyle = status.getOpen() ? DefaultStyle.open : DefaultStyle.close
    return {
      ...DefaultStyle.base,
      ...targetStyle.normal,
      ...(status.getHover() ? targetStyle.hover : null),
      ...props.style
    }
  }

  function fireChange(data: BlockStatus) {
    if (props.onChange) props.onChange(data)
  }
}

export const BlockWithState = WithState<BlockStatus>(Block, new BlockStatus(false, false))
