import React, { Component } from 'react'
export default class oldLife extends Component {
    constructor(props) {
        super(props)
        console.log('constructor，第一次生命周期诞生了，只运行一次', props)
    }
    componentWillMount() {
        console.log('componentWillMount,组件即将被挂载，只会运行一次');

    }
    componentDidMount() {
        console.log('componentDidMount,只会运行一次，挂载完成');
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', '接受到新的属性对象', this.props, nextProps);

    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', this.props, nextProps, this.state, nextState);
        // if(this.props.n === nextProps.n && this.state.count === nextState.count){
        //     return false
        // }
        return true

    }
    componentWillUpdate() {
        console.log('componentWillUpdate', '即将重新渲染');

    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', '组件已经完成渲染', prevProps, prevState);
    }
    componentWillUnmount(){
        console.log('componentWillUnmount,组件被销毁');
        
    }
    state = {
        count: 0,
    }
    render() {
        console.log('render', "渲染", "返回的react元素会被挂载到虚拟DOM树中");
        return (
            <div>
                <h1>旧版生命周期</h1>
                <h2>属性：{this.props.n}</h2>
                <h2>状态：{this.state.count}</h2>
                <button onClick={() => this.setState(state => ({
                    count: state.count + 1
                }))}>状态+1</button>
            </div>
        )
    }
}
