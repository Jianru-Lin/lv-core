import * as React from 'react';

export interface IconP {
    name: string;
    style?: React.CSSProperties;
}

const defaultStyle: React.CSSProperties = {
    display: 'inline-block',
};

export function Icon(props: IconP) {
    return (
        <i className="material-icons" style={{ fontSize: 'inherit', ...props.style }}>
            {props.name}
        </i>
    );
}

// // setup
// setup()

// function setup() {
//   try {
//     const link = document.createElement('link')
//     link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons'
//     link.rel = 'stylesheet'
//     document.head.appendChild(link)
//   }
//   catch (err) {
//     console.error(err)
//   }
// }
