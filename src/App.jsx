import React from 'react'
import { useState } from 'react'
import useTimer from './MyHooks/useTimer'
function Test() {
        useTimer(() => {
                console.log("组件副作用操作")
        }, 1000)
        return (<div>
                组件
        </div>)
}

export default function App() {
        const [visibale, setvisibale] = useState(true)
        return (
                <div>
                        {visibale ? <Test /> : null}
                        <button onClick={()=>{setvisibale(!visibale)}}>显示</button>
                </div>
        )
}






