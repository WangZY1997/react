import React from 'react'
import useAllStudent from '../MyHooks/useAllStudent'
function Test() {
        const stus = useAllStudent()
        const list = stus && stus.map(v => (<li key={v.id}>{v.name}</li>))
        return <ul>
                {list}
        </ul>
}
export default function App() {
        return (
               <Test/>
        )
}






