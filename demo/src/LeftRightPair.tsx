import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { LeftRightPair, LeftRightPairData } from 'lv-core'
import { randomSelect } from './utils/randomSelect'

const content = (
  <div>
    {
      allContent().map((content, i) => (
        <div>
          <h1 style={{ margin: '64px 0', color: 'yellow' }}>Content #{i + 1}</h1>
          <div>
            {allData().map(data => (
              <div style={{ marginBottom: 48 }}>
                <div style={{ color: 'white', fontSize: '0.75em', marginBottom: 16 }}>data: {JSON.stringify(data)}</div>
                <LeftRightPair left='{' right='}' data={data} onChange={_ => { }}>
                  {content}
                </LeftRightPair>
              </div>
            ))}
          </div>
        </div>
      ))
    }
  </div>
)

ReactDOM.render(content, document.getElementById('root'))

function allData() {
  const _ = false
  const y = true
  const list: LeftRightPairData[] = []
  allHover().forEach(hover => {
    allBlockData().forEach(blockData => {
      list.push({ hover, blockData })
    })
  })
  return list

  function allHover() {
    return [
      { left: _, right: _ },
      { left: y, right: _ },
      { left: _, right: y },
      { left: y, right: y },
      { left: y, right: y },
    ]
  }

  function allBlockData() {
    return [
      { hover: _, open: _ },
      { hover: y, open: _ },
      { hover: _, open: y },
      { hover: y, open: y },
    ]
  }
}

function randomData() {
  return randomSelect(allData())
}

function allContent(): React.ReactNode[] {
  const a: React.ReactNode = null
  const b: React.ReactNode = 'Content'
  const c: React.ReactNode = [
    'Content1',
    <br />,
    'Content2',
  ]
  const d: React.ReactNode = (
    <LeftRightPair left='{' right='}' data={randomData()} onChange={_ => { }}>
      SubContent
    </LeftRightPair>
  )
  const list: React.ReactNode[] = []

  return [
    a,
    b,
    c,
    d,
  ]
}

// function randomContent(): React.ReactNode {
//   const a: React.ReactNode = null
//   const b: React.ReactNode = 'Content'
//   const c: React.ReactNode = [
//     'Content1',
//     <br />,
//     'Content2',
//   ]
//   // const d: React.ReactNode = (
//   //   <LeftRightPair left='{' right='}' data={randomData()} onChange={_ => { }}>
//   //     {randomContent()}
//   //   </LeftRightPair>
//   // )
//   const list: React.ReactNode[] = []

//   return randomSelect([
//     a,
//     b,
//     c,
//     // d,
//   ])
// }