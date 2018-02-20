import * as React from 'react'
import { CycleModal } from '../def/CycleModel'

export function WithState<T>(Component: React.SFC<CycleModal<T>>, initData: T) {

  type Props = {
    style?: React.CSSProperties
  }

  return class extends React.Component<Props, { data: T }> {

    constructor(props: Props) {
      super(props)
      this.state = {
        data: initData
      }
    }

    render() {
      return (
        <Component
          data={this.state.data}
          onChange={data => this.setState({ data })}
          style={this.props.style}>
          {this.props.children}
        </Component>
      )
    }
  }
}