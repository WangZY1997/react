import React, { Component } from 'react'
import PropTypes from 'prop-types';
const types = {
    a: PropTypes.number.isRequired,
    b: PropTypes.string.isRequired,
    onChangeB: PropTypes.func.isRequired
}

class A extends Component {
    static contextTypes = types
    static childContextTypes = {
        a: PropTypes.number,
        c: PropTypes.string
    }
    getChildContext() {
        return {
            a: 789,
            c: "hello"
        }
    }
    render() {
        return (
            <div>
                <h1>
                    A
                    a:{this.context.a}
                    b:{this.context.b}
                </h1>
                <B />
            </div>
        )
    }
}


class B extends React.Component {
    constructor(props, context) {
        super(props)
        console.log(context);
    }
    static contextTypes = {
        ...types,
        c:PropTypes.string
    }

    render() {
        return <p>
            B
            获取上下文的数据a:{this.context.a},
            获取上下文的数据b:{this.context.b},
            获取上下文的数据c:{this.context.c},
            <button onClick={() => { this.context.onChangeB && this.context.onChangeB(this.context.a + 3) }}>子组件的按钮，a+3</button>
        </p>
    }
}

export default class OldContexts extends Component {
    state = {
        a: 11,
        b: 'bbb'
    }
    static childContextTypes = types
    getChildContext() {
        console.log('获取上下文的数据');
        return {
            a: this.state.a,
            b: 'bbb',
            onChangeB: (newA) => {
                this.setState({
                    a: newA
                })
            }
        }
    }
    render() {
        return (
            <div>
                <A />
                <button onClick={() => {
                    this.setState({
                        a: this.state.a + 1
                    })
                }}>a+1</button>
            </div>
        )
    }
}
