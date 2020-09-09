import React, { Component } from 'react'
import PropTypes from 'prop-types';
const types = {
    a: PropTypes.number.isRequired,
    b: PropTypes.string.isRequired,
    onChangeB: PropTypes.func.isRequired
}

function A(props, context) {
    return <div>
        <h1>
            A
            获取a:{context.a}
        </h1>
        <B />
    </div>
}
A.contextTypes = types
class B extends React.Component {
    constructor(props, context) {
        console.log('获取上下文的数据');
        super(props)
        console.log(context);
    }
    static contextTypes = types

    render() {
        return <p>B
            获取上下文的数据a:{this.context.a}
            获取上下文的数据b:{this.context.b}
            <button onClick={() => { this.context.onChangeB && this.context.onChangeB(3) }}>改变上下文中的数据</button>
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
        return {
            a: this.state.a,
            b: 'bbb',
            onChangeB: (newA) => {
                this.setState({
                    a: this.state.a + newA
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
