import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LeftRightPair, LeftRightPairStatus, LeftRightPairWithState } from 'lv-core';
import { randomSelect } from './utils/randomSelect';

const content = (
    <div>
        <div>
            {allContent().map((content, i) => (
                <div>
                    <h1 style={{ margin: '64px 0', color: 'yellow' }}>Content #{i + 1}</h1>
                    <div>
                        {LeftRightPairStatus.AllPossibleStatus().map(data => (
                            <div style={{ marginBottom: 48 }}>
                                <div style={{ color: 'white', fontSize: '0.75em', marginBottom: 16 }}>
                                    data: {data.toString()}
                                </div>
                                <LeftRightPair left="{" right="}" data={data} onChange={_ => {}}>
                                    {content}
                                </LeftRightPair>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <div>
            <h1 style={{ margin: '64px 0', color: 'yellow' }}>WithState</h1>
            <LeftRightPairWithState left="{" right="}" style={{ marginBottom: 16 }}>
                Content
            </LeftRightPairWithState>
            <LeftRightPairWithState left="-->" right="" style={{ marginBottom: 16 }}>
                Content
            </LeftRightPairWithState>
            <LeftRightPairWithState left="" right="<--" style={{ marginBottom: 16 }}>
                Content
            </LeftRightPairWithState>
        </div>
    </div>
);

ReactDOM.render(content, document.getElementById('root'));

function randomData() {
    return randomSelect(LeftRightPairStatus.AllPossibleStatus());
}

function allContent(): React.ReactNode[] {
    const a: React.ReactNode = null;
    const b: React.ReactNode = 'Content';
    const c: React.ReactNode = ['Content1', <br />, 'Content2'];
    const d: React.ReactNode = (
        <LeftRightPair left="{" right="}" data={randomData()} onChange={_ => {}}>
            SubContent
        </LeftRightPair>
    );
    const list: React.ReactNode[] = [];

    return [a, b, c, d];
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
