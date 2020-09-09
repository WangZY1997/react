import React, { Component } from 'react'
// 创建上下文
const ctx = React.createContext()
function A(props) {
    return (
        <div>
            <h1>A</h1>
            <B />
        </div>

    )
}

class B extends React.Component {
    static contextType = ctx
    // 强制更新
    shouldComponentUpdate(nextProps, nextState) {
        console.log('运行了优化');
        return false
    }

    render() {
        console.log('B render');
        return (
            <h1>
                a:{this.context.a}
                b:{this.context.b}
            </h1>
        )
    }
}
export default class NewContext extends Component {
    state = {
        ctx: {
            a: 0,
            b: '1we',
            chageB: (newA) => {
                this.setState({
                    a: newA
                })
            }
        }
    }
    render() {
        return (
            <ctx.Provider value={this.state.ctx}>
                <div>
                    <A />
                    <button onClick={() => {
                        this.setState({})
                    }}>父组件+1</button>
                </div>
            </ctx.Provider>

        )
    }
}
