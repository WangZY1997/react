import React,{useState} from 'react'

export default function useReducer(reducer,initialState) {
    const [state, setstate] = useState(initialState)
    function dispatch(actions){
        const newState = reducer(state,actions)
        console.log(`日志从${state} --> ${newState}`);
        setstate(newState)

    }
    return [state,dispatch]
}
