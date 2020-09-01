import React, { Component } from 'react'

export default class NewLife extends Component {
    state = {
        n: this.props.n
    }
     static getDerivedStateFromProps(Props, State) {
        console.log('getDerivedStateFromProps',Props,State);
        // return  null
        // this指向变成这个函数了
        return {
            // 用心的状态替换掉之前的状态
            n:Props.n
        }
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate',prevProps,prevState);
        return 123;
    }
    componentDidUpdate(prevProps,prevState,snap){
        
    }
    render() {
        return (
            <div>
                <h1>{this.state.n}</h1>
                <p>
                    <button onClick={() => {
                        this.setState({
                            n: this.state.n + 1
                        })
                    }}>+1</button>
                </p>
            </div>
        )
    }
}
