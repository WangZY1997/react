## 组件的生命周期 旧版
constructor 
初始化阶段 同一个组件只会创建一次  只运行一次，不能在这个生命周期中使用setState
componentWillMount 
即将挂载，只会运行一次 ，可能会运行多次（引起bug） 新版移除了
## render 
 挂载到虚拟DOM树中，只要重新渲染就会重新运行
## componentDidMount 
挂在完成，只会运行一次，可以使用setState、网络请求、倒计时、异步请求、组件进入活跃状态
 componentWillReceiveProps 
 即将接受新的属性值，参数：新的属性对象，属性变化（只要属性重新被赋值就会变化） 属性一定是父级传递过来的
## shouldComponentUpdate  
是否要重新渲染该组件，通过返回htrue、false来判断是否重新如渲染
 componentWillUpdate   
 即将重新渲染 
 componentDidUpdate  
  得到之前的状态和属性，往往在该函数中使用DOM操作改变一些元素（swiper插件new Swiper就可以在这个阶段运行）
## componentWillUnmount 
 销毁一些组件依赖的资源、比如计数器


 React官方认为：数据来源一定是单一的


 getDerivedStateFromProps
 在render之前运行一次，状态、属性改变运行一次,能获取新的状态新的属性，静态的，返回值覆盖组件状态

 getSnapshotBeforeUpdate
 运行时间点:虚拟DOM数构建完成，真实DOM构建完成，还没有渲染到页面上，通常用于实现附加的DOM操作，设置滚动条，添加动画
 该函数的返回值会作为componentDidUpdate 的第三个参数