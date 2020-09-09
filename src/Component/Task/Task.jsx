import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './task.css'
export default class Task extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired, //任务名称
        isFinish: PropTypes.bool.isRequired //任务是否完成
    }
    render() {
        console.log('Task render')
        return (
            <li className={this.props.isFinish ? "finish" : ""}>{this.props.name}</li>
        )
    }
}
