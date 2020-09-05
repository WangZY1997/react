import React, { Component } from 'react'
import ValidationCopm from './ValidationProps'
export default class App extends Component {

    render() {
        return (<div>
            <ValidationCopm a={123} onClick={()=>{console.log("object")}}/>
        </div>)
    }
}


