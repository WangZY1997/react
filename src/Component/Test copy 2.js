import React, { Component } from 'react'
import MouseListen from './MouseListen'
export default class Test extends Component {
    renderPoint = mouse => (<>横坐标:{mouse.x},纵坐标:{mouse.y}</>)
    renderDiv = mouse => (<>
        <div style={{
            width: 100,
            height: 100,
            background: "#008c8c",
            position: "absolute",
            top: mouse.x - 50,
            left: mouse.y - 50
        }}></div>
    </>)

    render() {
        return (
            <div>
                <MouseListen render={this.renderPoint}/>
                <MouseListen render={this.renderDiv}/>
            </div>
        )
    }
}
