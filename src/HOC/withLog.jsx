import React from 'react'
export default function withLog(Comp,str) {

    return class Logwrapper extends React.Component {
        componentDidMount() {
            console.log(`日志：组件${Comp.name}被创建了！${Date.now()}`)
        }
        componentWillUnmount() {
            console.log(`日志：组件${Comp.name}被销毁了！${Date.now()}`)
        }
        render() {
            console.log(this.props)
            return <>
            <Comp {...this.props}/>
            {str}
            </>
        }
    }
}