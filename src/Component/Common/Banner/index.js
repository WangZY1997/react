import React, { Component } from 'react'
import './index.css'
import ImgContainer from './imgContainer'
import SwitchArrow from './switchArrow'
import SwitchDot from './SwitchDot'
import PropTypes from 'prop-types'
export default class Banner extends Component {
    static defaultProps = {
        width: 520,
        height: 280,
        imgSrcs: [],
        autoDuration: 3000,
        duration: 5000
    }
    static propTypes = {
        width: PropTypes.number.isRequired, //容器宽度
        height: PropTypes.number.isRequired, //容器高度
        imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired, //容器图片数组
        autoDuration: PropTypes.number.isRequired, //自动切换的间隔时间
        duration: PropTypes.number.isRequired, //完成一次切换需要的时间

    }
    timer = null;
    componentDidMount() {
        this.autoSwitch()
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    autoSwitch = () => {
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            var cur = this.state.curIndex;
            cur = (cur + 1) % this.props.imgSrcs.length
            this.handleSwitch(cur)
        }, this.props.autoDuration)
    }
    state = {
        curIndex: 0//前是第几张图片
    }
    handleSwitch = (index) => {
        console.log(index);
        // 得到对象的方法
        this.setState({
            curIndex: index
        })
        this.imgContainer.switchTo(index)
    }
    //利用ref函数形式进行操作DOM
    imgContainerRef = el => {
        this.imgContainer = el;
    }
    /**
     * 左右箭头点击h事件
     * @param {*} type 
     */
    handleArrowChange = (type) => {
        var cur = this.state.curIndex
        if (type === "left") {
            cur--
            if (cur < 0) {
                cur = this.props.imgSrcs.length - 1
            }

        } else {
            cur++;
            if (cur > this.props.imgSrcs.length - 1) {
                cur = 0;
            }
        }
        this.handleSwitch(cur)
    }

    render() {
        return (
            <div className="banner-container"
                style={{
                    width: this.props.width,
                    height: this.props.height
                }}
                onMouseEnter={()=>{
                    clearInterval(this.timer)
                }}
                onMouseLeave={()=>{
                    this.autoSwitch()
                }}
            >
                {/* 图片容器 */}
                <ImgContainer
                    ref={this.imgContainerRef}
                    imgSrcs={this.props.imgSrcs}
                    imgWidth={this.props.width}
                    imgHeight={this.props.height}
                    duration={this.props.duration}
                />
                {/* 箭头 */}
                <SwitchArrow
                    onChange={this.handleArrowChange}
                />
                {/* 下方小点 */}
                <SwitchDot
                    num={this.props.imgSrcs.length}
                    cur={this.state.curIndex}
                    onChange={this.handleSwitch}
                />
            </div>
        )
    }
}
