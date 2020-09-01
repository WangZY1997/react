import React, { Component } from 'react';
import OldLife from './OldLife';
export default class App extends Component {
    state = {
        number: 12,
        show: true
    }
    render() {
        const comp = this.state.show === true ? <OldLife n={this.state.number} /> : null
        return (
            <div>
                {comp}
                <button onClick={() => {
                    this.setState(state => ({
                        number: state.number + 1
                    }))
                }}>点击+1</button>
                <button onClick={()=>{
                    this.setState({
                        show:!this.state.show
                    })
                }}>显示、隐藏</button>
            </div>
        )
    }
}
