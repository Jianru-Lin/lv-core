import * as React from 'react'
import { CycleModal } from '../def/CycleModel'
import { WithState } from './WithState'
import * as color from '../style/color'

export type BlockData = {
  open: boolean
  hover: boolean
}

export interface BlockP extends CycleModal<BlockData> {
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
  const { open, hover } = props.data

  if (!open) {
    return (
      <div
        style={calcStyle()}
        onMouseEnter={_ => fireChange({ open, hover: true })}
        onMouseLeave={_ => fireChange({ open, hover: false })}
        onClick={_ => fireChange({ open: true, hover })} >
        ...
        </div>
    )
  }

  let containerDom: (HTMLDivElement | null) = null;

  return (
    <div
      ref={dom => containerDom = dom}
      style={calcStyle()}
      onClick={e => {
        if (containerDom && e.target === containerDom) fireChange({ open: false, hover })
      }}
      onMouseEnter={_ => fireChange({ open, hover: true })}
      onMouseLeave={_ => fireChange({ open, hover: false })} >
      {props.children || <div style={{ width: 0, overflow: 'hidden', whiteSpace: 'pre' }}> </div>}
    </div>
  )

  function calcStyle() {
    const { open, hover } = props.data
    const targetStyle = open ? DefaultStyle.open : DefaultStyle.close
    return {
      ...DefaultStyle.base,
      ...targetStyle.normal,
      ...(hover ? targetStyle.hover : null),
      ...props.style
    }
  }

  function fireChange(data: BlockData) {
    if (props.onChange) props.onChange(data)
  }
}

export const BlockWithState = WithState<BlockData>(Block, { open: false, hover: false })
