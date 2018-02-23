import * as React from 'react'
import { CycleModal } from '../def/CycleModel'

export function WithState<T, P = {}>(Component: React.SFC<P & CycleModal<T>>, initData: T) {

  type Props = Partial<P & CycleModal<T>>

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
          {...this.props}
          data={this.state.data}
          onChange={data => this.setState({ data })}
          style={this.props.style}>
          {this.props.children}
        </Component>
      )
    }
  }
}