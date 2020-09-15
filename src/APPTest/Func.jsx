import React from 'react'

export default function Func(props) {
    console.log(props)
    return (
        <div>
            a:{props.a}
            b:{props.b}
            c:{props.c}
        </div>
    )
}

Func.defaultProps = {
    a:1,
    b:2,
    c:3
}