import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types';
export default class SwitchDot extends Component {
    static propTypes = {
        num: PropTypes.number.isRequired,
        cur: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired
    }

    render() {
        const spans = [];
        for (let i = 0; i < this.props.num; i++) {
            spans.push(
            <span 
                key={i} 
                className={i === this.props.cur ? "active" : "F"}
                onClick = {()=>{this.props.onChange && this.props.onChange(i)}}
                >
                </span>)
        }
        return (
            <div className="dot">
                {spans}
            </div>
        )
    }
}
