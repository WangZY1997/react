import React from 'react'
import './Pager.css'
/**
 * 分页属性；
 * 1. current 初始页码 
 * 2. total 总数据  
 * 3. limit 每页条数
 * 4. panelNumber ：数字页码最多显示多少个
 * 5. onChangePage 改变页码的函数 
 * 状态：
 * 1.current :当前状态
 */
export default function Pager(props) {
    const pageNumber = getPageNumber(props) //总页数
    if(pageNumber < 0) {
        return null;
    }
    const min = getMinNumber(props) //最小数
    const max = getMaxNumber(min, pageNumber, props) //最大页数
    const arr = [];
    for (let i = min; i <= max; i++) {
    arr.push(<span className={props.current === i ? "item active" : "item"} key={i}  onClick={() => { toPage(i, props) }}>{i}</span>)
    }
    return (
        <>
            {/* 首页 */}
            <span
                onClick={() => { toPage(1, props) }}
                className={props.current === 1 ? "item disabled" : "item "}>首页</span>
            {/* 上一页 */}
            <span
                onClick={() => { toPage(props.current - 1 < 1 ? 1 : props.current - 1, props) }}
                className={props.current === 1 ? "item disabled" : "item "}>上一页</span>
            {/* 数字页码 */}
                {arr}
            {/* 下一页 */}
            <span
                onClick={() => { toPage(props.current + 1 > pageNumber ? pageNumber : props.current + 1, props) }}
                className={props.current === pageNumber ? "item disabled" : "item "}>下一页</span>
            {/* 尾页 */}
            <span
                onClick={() => { toPage(pageNumber, props) }}
                className={props.current === pageNumber ? "item disabled" : "item "}>尾页</span>
            <span className="current">{props.current}</span>
            /
            <span>{pageNumber}</span>
        </>)
}
/**
 * 
 * @param {*} props 当前属性
 */
function getMinNumber(props) {
    var min = props.current - Math.floor(props.panelNumber / 2)
    if (min < 1) {
        min = 1
    }
    return min
}
/**
 * 
 * @param {*} min 最小页码
 * @param {*} pageNumber 最大页码
 * @param {*} props 
 */
function getMaxNumber(min, pageNumber, props) {
    var max = min + props.panelNumber- 1
    if (max > pageNumber) {
        max = pageNumber
    }
    return max
}

/**
 * 
 * @param {*} target 目标页码
 * @param {*} props 
 */
function toPage(target, props) {
    if (props.current === target) {
        return;
    }
    props.onChangePage && props.onChangePage(target)
}
/**
 * 计算总页数
 * @param {*} page 
 */

function getPageNumber(props) {
    return Math.ceil(props.total/ props.limit)
}