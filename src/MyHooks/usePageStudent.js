import { useEffect, useState } from 'react'
import { getStudent } from '../services/student'
/**
 * 当组件首次加载完成后，获取学生数据
 */
export default function usePageStudent( page = 1, limit = 10) {
    const [resp, setResp] = useState({})
    useEffect(() => {
        (async function () {
            const resp = await getStudent(page, limit)
            setResp(resp)
        }())
        return () => { } //清理函数
    }, [page, limit])
    return resp
}