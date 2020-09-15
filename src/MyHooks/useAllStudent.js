import { useEffect, useState } from 'react'
import { getAll } from '../services/student'
/**
 * 当组件首次加载完成后，获取学生数据
 */
export default function useAllStudent() {
    const [student, setStudent] = useState([])
    useEffect(() => {
        (async function(){
           const student =  await getAll()
           setStudent(student)
        }())
        return () => {} //清理函数
    }, [])
    return student
}