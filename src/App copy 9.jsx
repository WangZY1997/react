import React from 'react'
import { A } from './Component/Comps'
import withLog from './HOC/withLog'
const ALog = withLog(A, "a")

export default class App extends React.Component {
        myRef = React.createRef()
        componentDidMount(){
                console.log(this.myRef)
        }
        render() {
                return (<div>
                        <ALog a={1} ref={this.myRef}/>
                </div>)
        }
}


