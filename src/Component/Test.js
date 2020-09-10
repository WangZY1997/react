import React, { Component } from 'react'
import WithMouseListen from './WithMouseListen'

function Point(props) {
    return (<>横坐标:{props.x},纵坐标:{props.y}</>
    )
}

function Div(props) {
    return (<>
        <div style={{
            width: 100,
            height: 100,
            background: "#008c8c",
            position: "absolute",
            top: props.x - 50,
            left: props.y - 50
        }}></div>
    </>)
}
const MousePoint = WithMouseListen(Point)
const MouseDiv = WithMouseListen(Div)

export default class Test extends Component {
    render() {
        return (
            <div>
                <MousePoint/>
               <MouseDiv/>
            </div>
        )
    }
}
