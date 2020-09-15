import React,{useState,useEffect} from 'react'
import StudetList from '../StudentList'
import {getStudent} from '../../services/student'
import Pager from '../common/Pager/Pager'
/**
 * 用于提供数据，以及数据的变化
 */
export default function StudentContainer() {
    const [students, setStudents] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [total, setTotal] = useState(0)
    const [panelNumber, setPanelNumber] = useState(5)
    //当页码和页容量发生变化时
    useEffect(() => {
       ( async function(){
          const resp = await  getStudent(page,limit)
          setStudents(resp.findByPage) //设置学生数组
          setTotal(resp.cont) //设置学生总数
          
       })()
        return () => {}
    }, [page,limit]) //空数组的目的是让该副作用没有任何依赖项，首次挂载运行

    return (
        <div>
            <StudetList stus={students}/>
            <Pager current={page} limit={limit} total={total} panelNumber={panelNumber}
            onChangePage={newPage=>setPage(newPage)}/>
           <p>
               每页显示的条数：
               <input type="number" value={limit} onChange={(e)=>setLimit((parseInt(e.target.value)))}/>
           </p>
           <p>
               最多显示的页码数量
               <input type="number" value={panelNumber} onChange={(e)=>setPanelNumber(parseInt(e.target.value))}/>

           </p>
        </div>
    )
}
