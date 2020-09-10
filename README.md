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
 
# Context 
上下文：Context，表示做 某一些事情的环境
React中上下文的特点
1.当某个组件创建了上下文之后，上下文中的数据，会被后代共享数据
2.如果当组件依赖了上下文，会导致组件不在纯粹，（外部数据仅仅来源于属性props）
3.一般情况下，用于第三方组件（通用组件）

# 旧的Api 

**创建上下文**
只有类组件可以创建上下文，类组件才有状态
 1.给类组件书写静态属性
childContextTypes 使用该属性对上下文中的数据类型进行约束
 2.添加实例方法 getChildContext
 该方法返回的对象，即为上下文中的数据，该数据必须满足类型约束,该方法在render之后运行

 **使用上下文中的数据**
 要求；如果想要使用上下文中的数据，组件必须有一个静态属性 contextTypes 声明需要使用的上下文数据
 1.可以在组件的构造函数中获取上下文数据
 2.从组件中的context中获取,类组件构造函数第二个参数，函数组件直接在第二个参数

 **上下文的数据变化**
 上下文中的数据不可以直接变化，最终都是通过状态改变的


## 新版API 主要移除旧版API因为严重效率问题，容易导致滥用
推荐用新版API


**创建上下文**
上下文是一个独立于组件的对象，该对象是通过react.creatContext({默认值})
返回的包含两个属性的对象；
1.Provider属性：生产者，本质上一个组件，该组件用于创建一个上下文,该组件有一个value属性，用于改变数据
    同一个Provider，不要用到多个组件中，如果需要在其他组件中使用该数据，应该考虑将数据提升到更高层次
2.Comsumer属性：
**使用上下文的数据**
1.必须拥有静态属性，contextType，应赋值为创建的上下文对象
2.在类组件中，直接使用this.context获取上下文数据
3.在函数组件中，需要使用Consumer来获取上下文数据
    1.Consumer是一个组件
    2.子节点是一个函数，它的（props.children需要传递一个函数）

**注意细节**
1.如果上下文提供者（Context.Provider）中的value发生变化，会导致该上下文提供者的所有后代元素，会导致该上下文提供的
所有后代元素全部重新渲染，无论该子元素是否有优化（无论shouldComponentUpdate函数返回什么结果）

**上下文的应用场景**

1.编写一套组件（有多个组件），这些组件之间需要相互配合才能最终完成功能
比如:我们要开发一套表单组件，使用方式如下

# render props
  当只有渲染的不一样的时候，render里面的操作不同，逻辑都一样
  建议使用 - 横切关注点
  1.render props   2.Hoc

  # Portals
  插槽：指定渲染到真实DOM元素中 React.createPortals("虚拟DOM","真实DOM") 返回一个React元素
  
  # 错误边界
  默认情况下,若一个组件在渲染期间（render）期间发生错误，会导致整个组件全部被卸载
  错误边界：是一个组件，该组件会捕获到渲染期间（render）发生的错误，并有能力阻止错误继续传播
