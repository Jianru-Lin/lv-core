import * as React from 'react'
import { CycleModal } from '../def/CycleModel'
import { Block, BlockData } from './Block'
import { WithState } from './WithState'
import * as color from '../style/color'

export interface LeftRightPairData {
  hover: {
    left: boolean
    right: boolean
  }
  blockData: BlockData
}

export interface LeftRightPairP extends CycleModal<LeftRightPairData> {
  left: string
  right: string
}

interface LeftRightPairStyle {
  root: React.CSSProperties
  left_and_right: {
    normal: React.CSSProperties
    hover: React.CSSProperties
  }
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
    }
  }
}

export function LeftRightPair(props: LeftRightPairP) {
  const { left, right } = props
  const { hover, blockData } = props.data

  const style: { [key: string]: React.CSSProperties } = {
    root: {
      ...DefaultStyle.root,
      ...props.style
    },
    left: {
      ...DefaultStyle.left_and_right.normal,
      ...(hover.left ? DefaultStyle.left_and_right.hover : null)
    },
    right: {
      ...DefaultStyle.left_and_right.normal,
      ...(hover.right ? DefaultStyle.left_and_right.hover : null)
    }
  }

  return (
    <div style={style.root}>
      <div
        style={style.left}
        onMouseEnter={_ => fireChange(data => data.hover.left = data.hover.right = true)}
        onMouseLeave={_ => fireChange(data => data.hover.left = data.hover.right = false)}
        onClick={_ => fireChange(data => data.blockData.open = !data.blockData.open)} >
        {left}
      </div>
      <Block
        data={props.data.blockData}
        onChange={blockData => fireChange(data => data.blockData = blockData)}>
        {props.children}
      </Block>
      <div
        style={style.right}
        onMouseEnter={_ => fireChange(data => data.hover.right = data.hover.left = true)}
        onMouseLeave={_ => fireChange(data => data.hover.right = data.hover.left = false)}
        onClick={_ => fireChange(data => data.blockData.open = !data.blockData.open)} >
        {right}
      </div>
    </div>
  )

  function fireChange(cb: (data: LeftRightPairData) => void) {
    if (!props.onChange) return
    props.onChange(rewriteData(cb))
  }

  function rewriteData(cb: (data: LeftRightPairData) => void): LeftRightPairData {
    const dataCloned = {
      hover: {
        left: props.data.hover.left,
        right: props.data.hover.right,
      },
      blockData: {
        open: props.data.blockData.open,
        hover: props.data.blockData.hover,
      }
    }
    cb(dataCloned)
    return dataCloned
  }
}

export const LeftRightPairWithState = WithState<LeftRightPairData, LeftRightPairP>(
  LeftRightPair,
  {
    hover: { left: false, right: false },
    blockData: { open: false, hover: false }
  }
)
