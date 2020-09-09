import React, { Component } from 'react'
// 创建上下文
const ctx1 = React.createContext()
const ctx2 = React.createContext()
function A(props) {
    return (
        <ctx2.Provider value={{ a: 789, c: "hello" }}>
            <div>
                <h1>A</h1>
                <h2>
                    <ctx1.Consumer>
                        {value => <>{value.a},{value.b}</>}
                    </ctx1.Consumer>
                </h2>
                <B />
            </div>
        </ctx2.Provider>
    )
}

class B extends React.Component {
    render() {
        return (
            <ctx1.Consumer >
                {value => (
                    <>
                        <div>
                            B:来自于上下文的数据：a:{value.a} ,b:{value.b}
                            <button onClick={() => { value.chageB(value.a + 3) }}>子组件改变上下文的值+3</button>
                        </div>
                        <p>
                            <ctx2.Consumer>
                                {value => (<>来自于ctx2的数据--,a:{value.a},c:{value.c}</>)}
                            </ctx2.Consumer>
                        </p>
                    </>
                )}
            </ctx1.Consumer>
        )
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
            <ctx1.Provider value={this.state}>
                <div>
                    <A />
                    <button onClick={() => {
                        this.setState({
                            a: this.state.a + 1
                        })
                    }}>父组件+1</button>
                </div>
            </ctx1.Provider>

        )
    }
}
