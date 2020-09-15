import React, { useState, useEffect } from 'react'

export default function Effect() {
    const [state, setState] = useState(0)
    useEffect(() => {
        console.log('改变页面标题的副作用函数')
        document.title = `计数器：${state}`
    })
    useEffect(() => {
        console.log('其他副作用函数');
    })
    return (
        <div>
            <span>{state}</span>
            <button onClick={() => { setState(state + 1) }}>+1</button>
        </div>
    )
}
