import React, { useState ,useReducer} from 'react'
// import useReducer from './APPTest/useReducer'
/**
 * 
 * @param {*} state  当前数据
 * @param {*} action 改变数据的对象
 */
function reducer(state, action) {
        switch (action.type) {
                case "add":
                        return state + 1
                case "minus":
                        if (state === 0) {
                                return 0
                        }
                        return state - 1
                default:
                        return state
        }
}
// /**
//  * 自定义Hook抽离数据处理
//  */
// function useReducer() {
//         const [n, setN] = useState(0)
//         function dispatch(action) {
//                 const newN = reducer(n, action)
//                 console.log(`日志从${n}--> ${newN}`)
//                 setN(newN)
//         }
//         return {
//                 n,
//                 dispatch
//         }
// }
export default function App() {
        const [n, dispatch] = useReducer(reducer, 0,()=>{return 10})
        return (
                <div>
                        <button onClick={() => {
                                dispatch({
                                        type: "minus",
                                })
                        }}>-</button>
                        <span>{n}</span>
                        <button onClick={() => {
                                dispatch({
                                        type: "add",
                                })
                        }}>+</button>
                </div>
        )
}







