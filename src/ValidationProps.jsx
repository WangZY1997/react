import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class ValidationProps extends Component {
    static propTypes = {
        a: PropTypes.number.isRequired,
        b: PropTypes.bool.isRequired,
        onClick:PropTypes.func
    }
    static defaultProps = {
        b:true
    }
    render() {
        return (
            <div>
                {this.props.a}
                {this.props.b}
                {this.props.onClick()}
            </div>
        )
    }
}
