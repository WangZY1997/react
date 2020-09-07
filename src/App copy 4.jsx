import React, { Component } from 'react'
import ValidationCopm from './ValidationProps'
export default class App extends Component {
/**
 * 属性验证，传递属性
 */
    render() {
        return (<div>
            <ValidationCopm a={123} onClick={()=>{console.log("object")}}/>
        </div>)
    }
}


