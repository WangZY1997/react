import React, { Component } from 'react'

/**
 * 深入认识setState
 * setState 在html元素操作中是异步的
 * 可以接受一个函数作为回调函数进行获取新的值
 * 第一个参数为一个函数，保证可信任参数，也是异步执行，但是在多次执行合并
 */
export default class App extends Component {
        state = {
                n: 0
        }
        handleAdd = () => {
                // this.setState({
                //         n: this.state.n + 1
                // }, () => {
                //         console.log(this.state.n)
                //         // 状态完成改变之后出发,该回调运行在render之后。回调函数里面获取新的状态
                // })
                // console.log(this.state.n) //说明运行到这个地方还没有渲染完成

                this.setState(prev => ({
                        n: prev.n + 1
                }),()=>{
                        console.log(this.state.n)
                })
                this.setState(prev => ({
                        n: prev.n + 1
                }))
                this.setState(prev => ({
                        n: prev.n + 1
                }))
                // console.log(this.state.n)
        }
        render() {
                console.log("render")
                return (
                        <div>
                                <h1>{this.state.n}</h1>
                                <button onClick={this.handleAdd}>+</button>
                        </div>
                )
        }
}





