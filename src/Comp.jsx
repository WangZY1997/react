import React from 'react'

export default function Comp(props) {
    console.log(props)
    return (
        <div className="comp">
            {/* {props.html} */}
            {props.children || "默认值"}
        </div>
    )
}
