import React, { Component } from 'react'
// 创建上下文
const ctx = React.createContext()
console.log(ctx)

function A(props) {
    return <div>
        <h1>A</h1>
        <h2>
            <ctx.Consumer>
                {value => <>{value.a},{value.b}</>}
            </ctx.Consumer>
        </h2>

        <B />
    </div>
}

class B extends React.Component {
    static contextType = ctx
    render() {
        return <div>
            B:来自于上下文的数据：a:{this.context.a} ,b:{this.context.b}
            <button onClick={() => { this.context.chageB(this.context.a + 3) }}>子组件改变上下文的值+3</button>
        </div>
    }
}
export default class NewContext extends Component {
    state = {
        a: 0,
        b: '1we',
        chageB: (newA) => {
            this.setState({
                a: newA
            })
        }
    }
    render() {
        return (
            <ctx.Provider value={this.state}>
                <div>
                    <A />
                    <button onClick={() => {
                        this.setState({
                            a: this.state.a + 1
                        })
                    }}>父组件+1</button>
                </div>
            </ctx.Provider>

        )
    }
}
