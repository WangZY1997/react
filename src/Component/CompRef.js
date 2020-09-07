import React, { Component } from 'react'

export default class Comp extends Component {
    constructor(props){
        super(props)
        this.txt = React.createRef(); //创建ref
        console.log(this.txt);
    }
    /**
     * 创建ref，利用React.createRef()
     */
    handleClick = () => {
        console.log(this);
        this.txt.current.focus()
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.txt} />
                <button onClick={this.handleClick}>聚焦</button>
            </div>
        )
    }
}