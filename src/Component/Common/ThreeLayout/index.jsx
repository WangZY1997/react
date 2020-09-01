import React from 'react'
import './index.css'
export default function ThreeLayout(props) {
    const defaultProps = {
        leftWidth: 200,
        rightWidth: 200,
        minWidth: 800,
        gap:0
    }
    const datas = Object.assign({}, defaultProps, props)
    console.log(datas)
    return (
        <div className='three-layout'  >
            <div className="main" style={{ width: datas.minWidth }}>
                {props.children}
            </div>
            <div className="aside-left" style={{ width: datas.leftWidth ,margin:datas.gap}}>
                {props.left}
            </div>
            <div className="aside-right" style={{ width: datas.rightWidth ,margin:datas.gap}}>
                {props.right}
            </div>
        </div>
    )
}
