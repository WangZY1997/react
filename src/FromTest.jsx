import React, { Component } from 'react'

export default class FromTest extends Component {
    state = {
        loginId: "",
        loginPwd: '',
        city: 'beijing',
        sex: 'female',
        chooseLoves: [],
        loves: [
            { value: 'football', text: "足球" },
            { value: 'basketball', text: "篮球" },
            { value: 'baseball', text: "棒球" },
            { value: 'other', text: "其他" },
            { value: 'music', text: "音乐" },
            { value: 'movie', text: "电影" },
        ]
    }
    handleChange = e => {
        var val = e.target.value
        var name = e.target.name
        if (e.target.type === "checkbox") {
            if (e.target.checked) {
                val = [...this.state.chooseLoves, val]
            } else {
               val= this.state.chooseLoves.filter(l=> l!== val)
            }
        }
        this.setState({
            [name]: val
        })
    }
    getLoves = () => {
        const bs = this.state.loves.map(v => (
            <label key={v.value}>
                <input type="checkbox" value={v.value} name="chooseLoves" onChange={this.handleChange}
                    checked={this.state.chooseLoves.includes(v.value)}
                />
                {v.text}
            </label>))
        return bs
    }
    render() {
        const bs = this.getLoves()
        return (
            <div>
                <p>
                    <input type="text" name="loginId" onChange={this.handleChange} />
                </p>
                <p>
                    <input type="password" name="loginPwd" onChange={this.handleChange} />
                </p>
                <p>
                    <select name='city' onChange={this.handleChange}>
                        <option value="beijing">北京</option>
                        <option value="shanghai">上海</option>
                        <option value="shenzhen">深圳</option>

                    </select>
                </p>
                <p>
                    <label>
                        <input type="radio" name="sex" onChange={this.handleChange} value='male'
                            checked={this.state.sex === "male"}
                        />
                            男
                        </label>
                    <label>
                        <input type="radio" name="sex" onChange={this.handleChange} value='female'
                            checked={this.state.sex === "female"} />
                            女
                        </label>
                </p>
                <p>
                    {bs}
                </p>
                <p>
                    <button onClick={() => {
                        console.log(this.state)
                    }}>获取表单的值</button>
                </p>
            </div>
        )
    }
}
