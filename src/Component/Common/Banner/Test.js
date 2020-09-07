import React, { Component } from 'react'
import Banner from './index'
    const src = [
    "https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg",
    "https://aecpm.alicdn.com/simba/img/TB1_JXrLVXXXXbZXVXXSutbFXXX.jpg",
    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1931304544,2427957648&fm=26&gp=0.jpg",
    "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1772918688,760379630&fm=26&gp=0.jpg",
    "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1249059488,4011146789&fm=26&gp=0.jpg"
]
export default class Test extends Component {
    render() {
        return (
            <div className="container">
                <Banner imgSrcs={src} duration={2000}/>
            </div>
        )
    }
}
