import React, { Component } from 'react'

export default class Test extends Component {
    constructor(props){
        super(props)
        console.log('props',props);
        
    }
    state = {
        n: this.props.n
    }
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps',this.props,nextProps);
        if(this.props.n !== nextProps.n){
            this.setState({
                n:nextProps.n
            })
        }
    }
    render() {
        return (
            <div>
                <h1>数字：{this.props.n}</h1>
                {/* <button onClick={() => {
                    this.setState({
                        n: this.state.n + 1
                    })
                }}>子组件状态+1</button> */}
                <button onClick={this.props.add}>从父组件传递过来的+1</button>
            </div>
        )
    }
}   
