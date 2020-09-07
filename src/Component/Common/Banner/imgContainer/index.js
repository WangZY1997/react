import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class ImgContainer extends Component {
    static propTypes = {
        imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired, //图片路径数组
        imgWidth: PropTypes.number.isRequired, //单张图片宽度
        imgHeight: PropTypes.number.isRequired, //单张图片高度
        duration: PropTypes.number.isRequired
    }
    /**
     * 切换到第几张图片
     * 调用该函数，此组件会经过一段动画完成
     * @param {*} index 
     */
    switchTo(index) {
        if (index < 0) {
            index = 0
        }
        else if (index > this.props.imgSrcs.length) {
            index = this.props.imgSrcs.length - 1
        }
        // 根据div切换找到规律
        const targetLeft = -index * this.props.imgWidth
        // 得到当前marginLeft
        var curLeft = parseInt(getComputedStyle(this.div).marginLeft)
        console.log(curLeft, targetLeft);
        // 计算运动次数
        const times = Math.ceil(this.props.duration / this.tick)
        // this.div.style.marginLeft = targetLeft + "px"
        let curTimes = 0;
        // 计算每次运动的距离
        const totalDis = targetLeft - curLeft; //总距离
        const dis = totalDis / times //每次运动的距离
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            curTimes++;
            curLeft += dis
            this.div.style.marginLeft = curLeft + "px"
            // console.log(curTimes);
            if (curTimes === times) {
                this.div.style.marginLeft = targetLeft + "px"
                clearInterval(this.timer)
            }
        }, this.tick)
    }
    timer = null
    tick = 16 //计时器的间隔时间
    containerRef = el => {
        this.div = el;
    }
    render() {
        const pic = this.props.imgSrcs.map((src, index) => <img src={src} alt="" key={index} style={{
            width: this.props.imgWidth,
            height: this.props.imgHeight,
            float: "left"
        }} />)
        return (
            <div
                ref={this.containerRef}
                className="imgContainer"
                style={{
                    width: this.props.imgWidth * this.props.imgSrcs.length,
                    height: this.props.imgHeight
                }}
                duration={this.props.duration}
            >
                {pic}
            </div>
        )
    }
}
