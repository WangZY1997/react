import React, { Component } from 'react'
import MovablePanel from './MovablePanel'
import ShowMouse from './ShowMouse'
export default class Test extends Component {
    render() {
        return (
            <div>
                <MovablePanel/>
                <ShowMouse/>
            </div>
        )
    }
}
