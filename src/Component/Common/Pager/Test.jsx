import React, { Component } from 'react'
import Pager from './Pager'
import StudentList from './StudentList'
export default class Test extends Component {

    state = {
        current: 1,
        total: 0,
        limit: 10,
        panelNumber: 5,
        stus: []
    }
    constructor(props) {
        super(props);
        this.fetchStudents();
    }

    async fetchStudents() {
        const {current} = this.state
        this.setState(item=>({
            current:item.current
        }))
        const resp = await fetch(
            `https://open.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${current}&size=${this.state.limit}`)
            .then(resp => resp.json())
            .then(resp => resp.data)
        this.setState({
            total: resp.cont,
            stus: resp.findByPage || []
        })
    }
    handlePage = (newPage) => {
        this.setState({
            current:newPage
        },()=>{this.fetchStudents()})
        // 异步函数，需要把请求放在后面
    }
    render() {
        return (
            <div className="container">
                <StudentList stus={this.state.stus} />
                <div className="pager">
                    <Pager {...this.state} onChangePage={this.handlePage} />
                </div>
            </div>


        )
    }
}
