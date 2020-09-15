import React from 'react'
import {A,B} from './Component/Comps'
import withLog from './HOC/withLog'
import withLogin from './HOC/withLogin'
const ALog = withLogin(withLog(A,"a"))
const BLog = withLogin(withLog(B,"b"))

export default class App extends React.Component {
    render() {
        return (<div>
            <ALog a={1} isLogin/>
            <BLog b={2} isLogin/>
        </div>)
    }
}


