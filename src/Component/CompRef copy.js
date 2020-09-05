import React, { Component } from 'react'
class A extends Component {
    methods=()=>{
    console.log('这是组件A');
    }
    render() {
        return (<h1>这是组件A</h1>)
    }
}
export default class Comp extends Component {
    handleClick = () => {
        console.log(this);
        this.refs.text.focus()
        this.refs.A.methods()
    }
    render() {
        return (
            <div>
                <input type="text" ref="text" />
                <A ref="A"/>
                <button onClick={this.handleClick}>聚焦</button>
            </div>
        )
    }
}