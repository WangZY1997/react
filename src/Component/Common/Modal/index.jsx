import React from 'react'
import './index.css'
export default function Modal(props) {
    var defaultProps = {
        bg: "rgba(0,0,0,0.5)"
    }
    var data = { ...props }
    var datas = Object.assign({}, defaultProps, data)
    return (
        <div className="modal" style={{ backgroundColor: datas.bg }}
            onClick={e => {
                if (e.target.className === "modal") {
                    datas.onClose()
                }
            }}
        >
            <div className="modal-center"
                style={{ borderRadius: datas.radis }}>
                {datas.children}
            </div>
        </div>
    )
}
