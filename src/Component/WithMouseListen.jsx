import React, { PureComponent } from 'react'
import './style.css'
/**
 * HOC传递一个组件包装一次
 * @param {*} Comp 
 */
export default function WithMouseListen(Comp) {
    return class MouseListen extends PureComponent {
        // constructor(props){
        //     super(props) //this.props = props
        // }
        state = {
            x: 0,
            y: 0
        }
        divRef = React.createRef()
        handleMouseMove = (e) => {
            var { left, top } = this.divRef.current.getBoundingClientRect()
            const x = e.clientX - left
            const y = e.clientY - top
            this.setState({
                x,
                y
            })
        }
        render() {
            return (
                <div className="point"
                    ref={this.divRef}
                    onMouseMove={this.handleMouseMove}
                >
                    <Comp
                        {...this.props}
                        x={this.state.x}
                        y={this.state.y} />
                </div>
            )
        }
    }

}
