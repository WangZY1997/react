import React, { useState } from 'react'
window.arr = []
export default function App() {
        console.log("render")
        const [state, setstate] = useState(10)
        window.arr.push(setstate)
        return (
                <div>

                        <button onClick={() => {
                                setstate(prev => prev - 1)
                                setstate(prev => prev - 1)
                        }}>-</button>
                        <span>{state}</span>
                        <button onClick={() => setstate(state + 1)}>+</button>

                </div>
        )
}




