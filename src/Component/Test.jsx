import React, { Component } from 'react'
import Modal from './Common/Modal'

export default class Test extends Component {
    state = {
        show: false
    }
    showModal=()=>{
        this.setState({
            show:true
        })
    }
    hideModal=()=>{
        this.setState({
            show:false
        })
    }
    render() {
        return (
            <div>
                <img src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=860747650,3685523174&fm=26&gp=0.jpg" alt="" />
                {
                    this.state.show === true ?
                        (<Modal radis='12px' onClose={this.hideModal}>
                            <h1>这是一个来自父组件的蒙层</h1>
                            <button onClick={this.hideModal}>关闭</button>
                        </Modal>) : null
                }
                <button onClick={this.showModal}>显示蒙层</button>
            </div>
        )
    }
}
