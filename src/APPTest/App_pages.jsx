import React, { useState } from 'react'
import usePageStudent from '../MyHooks/usePageStudent'
function Test() {
        const [page, setPage] = useState(1)
        const resp = usePageStudent(page, 10)
        const list = resp && resp.findByPage && resp.findByPage.map(v => (<li key={v.id}>{v.name}</li>))
        return (<div>
                总数：{resp.cont}
                <ul>
                        {list}
                </ul>
                <input type="number" 
                value={page} 
                onChange={(e)=>{setPage(parseInt(e.target.value))}} />
        </div>)





}
export default function App() {
        return (
                <Test />
        )
}






