import React, { useEffect } from 'react'

export default function useTimer(func,duration) {
    useEffect(() => {
       const timer = setInterval(func,duration)
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <div>
            
        </div>
    )
}
