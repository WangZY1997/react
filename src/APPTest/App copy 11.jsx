import React, { useState } from 'react'
export default function App() {
        const [state, setstate] = useState(10)
        const [flag, setflag] = useState(true)
        return (
                <div>
                        <p style={{display:flag===true ? "block" : "none"}}>
                        <button onClick={() => { setstate(state - 1) }}>-</button>
                        <span>{state}</span>
                        <button onClick={() => setstate(state + 1)}>+</button>
                        </p>
                        <button onClick={()=>{setflag(!flag)}}>显示\隐藏</button>
                </div>
        )
}




