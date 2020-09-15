import React, { Component } from 'react'

//函数ref转发
function A(props, ref) {
        console.log(props, ref)
        return <h1 ref={ref}>组件A:
                <span>{props.word}</span>
        </h1>
}
// 转发ref
const NewA = React.forwardRef(A)

export default class App extends Component {
        componentDidMount() {
                console.log(this.Aref)
        }
        Aref = React.createRef();
        render() {
                return (
                        <div>
                                <NewA ref={this.Aref} word='abc' />
                                {/* ref转发：this.ref.current/:h1 */}
                        </div>
                )
        }
}



