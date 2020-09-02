import React, { Component } from 'react'
// import InputNum from './NumerInput'
export default class App extends Component {
    state = {
        val: 123,
        // checked:true
        loves: ["足球", "篮球", "音乐", "其他"],
        chooseLoves: ["足球", "其他"],
        selVal: 'beijing'
    }
    render() {
        // const Comp = this.state.loves.map((v,index) => (<label key={v}>
        //     <input type="checkbox"
        //         checked={this.state.chooseLoves.includes(v)}
        //         onChange={(e) => {
        //            if(e.target.checked){
        //             this.setState({
        //                 chooseLoves:[...this.state.chooseLoves,v]
        //             })
        //            }else{
        //             this.setState({
        //                 chooseLoves:this.state.chooseLoves.filter(l=>l!==v)
        //             })
        //            }
        //         }}
        //     />
        //     {v}
        // </label>
        // ))
        return (
            <div>
                {/* <input type="text" defaultValue={this.state.val} onChange={(e) => {
                    this.setState({
                        val:e.target.value
                    })
                }} />
                <button onClick={()=>{console.log(this.state.val)}}>获取文本框的值</button> */}
                {/* <InputNum></InputNum> */}
                {/* <input type="checkbox" checked={this.state.checked} onChange={(e) => {
                    this.setState({
                        checked:e.target.checked
                    })
                }} /> */}
                {/* {Comp}
                <button onClick={()=>{console.log(this.state.chooseLoves)}}>获取选中的项</button> */}
                <select value={this.state.selVal} onChange={(e) => {
                    this.setState({
                        selVal:e.target.value
                    })
                }}>
                    <option value="beijing">北京</option>
                    <option value="shanghai">上海</option>
                    <option value="shenzhen">深圳</option>
                </select>
            </div>
        )
    }
}


