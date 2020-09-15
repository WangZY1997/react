import React, { useEffect } from 'react'
const ref = React.createRef()
let timer = null //计时器
function Moveable(props) {
    useEffect(() => {
        const div = ref.current
        let currtimes = 0;
        // 每隔10ms运动一次
        const disX = props.left / 100
        const disY = props.top / 100
        timer = setInterval(() => {
            currtimes++;
            const newLeft = currtimes * disX
            const newTop = currtimes * disY
            div.style.left = newLeft + "px";
            div.style.top = newTop + "px"
            if (currtimes === 100) {
                clearInterval(timer)
            }
        }, 10)

    })
    return (
        <div
            ref={ref}
            style={{
                width: 100,
                height: 100,
                top: 0,
                left: 0,
                position: "fixed",
                background:"#f40"
            }}>

        </div>
    )
}


export default function Effect() {
    return (
        <div>
            <Moveable top={400} left={400}/>
        </div>
    )
}
