import React, { Component } from 'react'

export default class ClssFunc extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    static defaultProps = {
        a:10,
        b:11,
        c:12
    }
    render() {
        return (
            <div>
                a:{this.props.a},b:{this.props.b},c:{this.props.c}
            </div>
        )
    }
}

// ClssFunc.defaultProps={
//     a:1,
//     b:2,
//     c:3
// }