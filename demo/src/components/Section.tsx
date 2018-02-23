import * as React from 'react'

export interface SectionP {
  title: string
}

export interface SectionS {

}

export class Section extends React.Component<SectionP, SectionS> {
  constructor(props: SectionP) {
    super(props)
    this.state = {

    }
  }

  render() {
    const style: { [key: string]: React.CSSProperties } = {
      root: {
        margin: 48,
        padding: 32,
        // background: '#ccc',
        border: 'solid 1px white',
      },
      title: {
        color: 'yellow',
        margin: 0,
      },
      content: {
      }
    }

    return (
      <div style={style.root}>
        <h1 style={style.title}>{this.props.title}</h1>
        <div style={style.content}>
          {this.props.children}
        </div>
      </div>
    )
  }
}