import React from 'react'
import PropTypes from 'prop-types'
/**
 * 学生列表的组件纯展示
 */
export default function StudentList({stus}) {
    const list = stus && stus.map(v=>(<li key={v.id}>
    【姓名】{v.name},
    【性别】{v.sex === 1 ?"男" : "女"}
    【地址】{v.address}
    </li>))
    return (
        <ul>
            {list}
        </ul>
    )
}

StudentList.propTypes = {
    stus: PropTypes.array.isRequired
}

StudentList.defaultProps = {
    stus:[]
}
