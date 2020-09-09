import React from 'react'
import TaskContainer from './Component/Task/TaskContainer'
export default class App extends React.Component {
        render() {
                console.log('APP render')
                return (<div>
                        <TaskContainer />
                </div>)
        }
}



