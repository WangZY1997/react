const appkey = "demo13_1545210570249"

/**
 * 获取所有学生列表
 */
export async function getAll() {
    return await fetch(`/api/student/findAll?appkey=${appkey}`)
        .then(resp => resp.json()).then(resp => resp.data)
}
export async function getStudent(page = 1, limit = 10) {
    return await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
        .then(resp => resp.json()).then(resp => resp.data)
}