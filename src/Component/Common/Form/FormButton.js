import React from 'react'
import { Consumer } from './formContext'
export default function FormButton(props) {
    return (
        <div>
            <Consumer>
                {ctx => (
                    <button onClick={()=>{ctx.submit()}}>
                        {props.children}
                    </button>
                )}

            </Consumer>

        </div>
    )
}
