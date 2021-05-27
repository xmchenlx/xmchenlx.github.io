---
title: React学习笔记
abbrlink: 3b92
date: 2021-05-26 17:41:02
tags: ['React','笔记']
toc: true
---
## 1. React简介

> 轻量级的视图层**库**！*A JavaScript library for building user interfaces*
>
> React不是一个完整的MVC框架，最多可以认为是MVC中的V（View），甚至React并不非常认可MVC开发模式；React 主要用于构建UI，可以简单地理解为React 将界面分成了各个独立的小块，每一个块就是组件，这些组件之间可以组合、嵌套，就成了我们的页面。

### 1.1 组件化

1. **什么是模块化：**是从**代码**的角度来进行分析的；把一些可复用的代码，抽离为单个的模块；便于项目的维护和开发；

2. **什么是组件化：** 是从 **UI 界面**的角度 来进行分析的；把一些可复用的UI元素，抽离为单独的组件；便于项目的维护和开发；

   **组件化的好处：**随着项目规模的增大，手里的组件越来越多；很方便就能把现有的组件，拼接为一个完整的页面；

3. **Vue是如何实现组件化的：** 通过 `.vue` 文件，来创建对应的组件；

   + template  结构
   + script        行为
   + style          样式


5. **React如何实现组件化**：大家注意，React中有组件化的概念，但是，并没有像vue这样的组件模板文件；React中，一切都是以js来表现的

### 1.2 移动APP

+ Vue，结合 Weex 实现移动端App开发
+ React，结合 ReactNative 实现移动端App开发

## 2. React的虚拟DOM

 + **真实DOM：**是浏览器中的概念是用JS对象来表示页面上的元素，并提供了操作 DOM 对象的API。

 + **虚拟DOM**：是框架中的概念是用JS对象来模拟页面上的 DOM 和 DOM嵌套。

   **本质：** 用JS对象，来模拟DOM元素和嵌套关系

   **目的：** 就是为了实现页面元素的高效更新

+ React 高性能

- React Fiber

## 3. React的特点和优势

- 虚拟DOM

- 组件系统
- 单向数据流
- jsx语法

## 4. 快速构建React开发环境

1. 使用 create-react-app脚手架 快速构建 React 开发环境

2. 引入react、react-dom
3. 创建DOM元素渲染
4. 元素与组件

## 5. JSX的语法

1. jsx介绍
   - jsx 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
   - 它是类型安全的，在编译过程中就能发现错误。
   - 使用 jsx编写模板更加简单快速。
2. jsx的使用
   - jsx语法中, 要把js代码写到{}号中
3. jsx中的注意事项
   - 注释推荐使用`{ /* 这是注释 */ }`
   - 在jsx创建DOM的时候，所有的节点，必须有唯一的根元素进行包裹；
   - 在 jsx 语法中，标签必须成对出现，如果是单标签，则必须自闭和

## 6. React中创建组件

1. 组件的创建方式
   1. 函数式组件(**首字母必须大写**)
   2. class关键字组件

2.  两种组件的区别:

   - 用**函数**创建出来的组件：叫做“无状态组件”

   - 用**class关键字**创建出来的组件：叫做“有状态组件”

   - 这两种组件**本质区别**就是：有无state属性

3. 组件之间的组合和嵌套

## 7. JSX原理

1. JS对象构建DOM结构

   ```js
   <div class='app' id='root'>
     <h1 class='title'>铁蛋儿很帅</h1>
     <p>
       昌平小白龙
     </p>
   	123
   </div>
   ```

   上面这个 HTML 所有的信息我们都可以用 JavaScript 对象来表示：

   ```JS
   {
     tag: 'div',
     attrs: { className: 'app', id: 'root'},
     children: [
       {
         tag: 'h1',
         attrs: { className: 'title' },
         children: ['铁蛋很帅']
       },
       {
         tag: 'p',
         attrs: null,
         children: ['昌平小白龙']
       },
       '123'
     ]
   }
   ```

2. React中构建DOM结构

   React.createElement会构建一个 JavaScript 对象来描述你 HTML 结构的信息，包括标签名、属性、还有子元素等

   ```js
   React.createElement(
     type,
     [props],
     [...children]
   )
   ```

   ```JS
   import React from 'react'
   import ReactDOM from 'react-dom'
   
   class App extends React.Component {
     render () {
       return (
         <div className='app' id='root'>
           <h1 className='title'>欢迎铁蛋儿</h1>
           <p>
            	昌平小白龙
           </p>
         </div>
       )
     }
   }
   
   ReactDOM.render(
   	<App />,
     document.getElementById('root')
   )
   ```

   编译之后将得到的代码:

   ```JS
   import React from 'react'
   import ReactDOM from 'react-dom'
   
   class App extends React.Component {
     render () {
       return (
         React.createElement(
           "div",
           {
             className: 'app',
             id: 'root'
           },
           React.createElement(
             "h1",
             { className: 'title' },
             "铁蛋很帅"
           ),
           React.createElement(
             "p",
             null,
             "昌平小白龙"
           )
         )
       )
     }
   }
   
   ReactDOM.render(
   	React.createElement(App),
     document.getElementById('root')
   )
   ```

## 8. 组件中DOM样式

1. 行内样式

2. 使用class

3. classnames

   > npm  install  classnames --save

4. styled-components

   > npm  install  styled-components --save

## 9. 组件的属性(props)

2. class组件的属性和默认属性
2. 函数组件的属性和默认属性
3. 组件的props.children属性
4. 使用props-type检查props

## 10. 组件的状态(state)

1. 创建组件状态的两种方式

   - 普通方式
   - 继承方式

2. 设置组件状态(setState)

   setState方法(有两个参数)设置状态

   - 第一个参数可以是对象，也可以是方法return一个对象。
     - 参数是对象

     ```js
     this.setState({
       isBool: !this.state.isBool
     })
     ```

     - 参数是方法

     ```JS
     // 参数1是上一次的state, 参数2是props
     this.setState((prevState, props) => {
       return {
         isBool: !prevState.isBool
       }
     })
     ```

   - setState是异步的,所以想要获取最新的state, 没有办法获取,就有了第二个参数,这是一个可选的回调函数

     ```js
     this.setState((prevState, props) => {
       return {
         isBool: !prevState.isBool
       }
     }, () => {
       console.log('回调里的',this.state.isBool)
     })
     console.log('setState外部的',this.state.isBool)
     ```

3. 渲染数据
   - 条件渲染
   - 列表渲染
   - dangerouslySetInnerHTML方法

## 11. 属性 VS 状态

**属性**

`props` 的主要作用是让使用该组件的父组件可以传入参数来配置该组件。

它是外部传进来的配置参数，组件内部无法控制也无法修改。

除非外部组件主动传入新的 `props`，否则组件的 `props` 永远保持不变。

**状态**	

 `state` 的主要作用是用于组件保存、控制、修改自己的可变状态。

 `state` 在组件内部初始化，可以被组件自身修改，而外部不能访问也不能修改。

 `state` 是一个局部的、只能被组件自身控制的数据源。

 `state` 中状态可以通过 `this.setState`方法进行更新，`setState` 会导致组件的重新渲染。 

> 如果搞不清 `state` 和 `props` 的使用场景，记住一个简单的规则：**尽量少地用 `state`，多用 `props`**。
>
> 没有 state 的组件叫**无状态组件**，设置了 state 的叫做**有状态组件**。
>
> 组件的数据渲染是否被调用者传递的`props`完全控制，控制则为**受控组件**，否则**非受控组件**。
>
> 因为状态会带来管理的复杂性，我们尽量多地写无状态组件，尽量少地写有状态的组件。
>
> 这样会降低代码维护的难度，也会在一定程度上增强组件的可复用性。
>

## 12. 事件

1. 绑定事件

   > 采用on+事件名的方式来绑定一个事件，React和原生的事件是有区别的，原生的事件全是小写`onclick`, React中的事件是驼峰`onClick`，**React的事件并不是原生事件，而是合成事件**。

2. 事件用法

   - 直接在render里写行内的箭头函数(不推荐)
   - 在组件内使用箭头函数定义一个方法(推荐)
   - 直接在组件内定义一个非箭头函数的方法，然后在render里直接使用`onClick={this.handleClick.bind(this)}`(不推荐) 
   - 直接在组件内定义一个非箭头函数的方法，然后在constructor里bind(this)(官方推荐)

3. Event对象

   > 和普通浏览器一样，事件handler会被自动传入一个 `event` 对象，这个对象和普通的浏览器 `event` 对象所包含的方法和属性都基本一致。不同的是 React中的 `event` 对象并不是浏览器提供的，而是它自己内部所构建的。它同样具有`event.stopPropagation`、`event.preventDefault` 这种常用的方法

4. 事件的参数传递
   - 在`render`里调用方法的地方外面包一层箭头函数 
   - 在`render`里通过`this.handleEvent.bind(this, 参数)`这样的方式来传递

## 13. 用户输入案例

1. 创建用户输入组件
2. 添加状态绑定事件
3. 改变状态更新组件

## 14. 组件的生命周期

React中组件也有生命周期，有很多钩子函数供我们使用, 组件的生命周期，分为四个阶段，初始化、运行中、销毁、错误处理(16.3之后)

#### 初始化执行

1. constructor 

2. componentWillMount() / UNSAFE_componentWillMount()

   -  组件被挂载到页面之前，自动被执行

3. render()  

   - 渲染组件

4. componentDidMount() 

   - 组件被挂载到页面之后，自动被执行


#### 更新阶段

`props`或`state`的改变可能会引起组件的更新，组件重新渲染的过程中会调用以下方法：

1. componentWillReceiveProps() / UNSAFE_componentWillReceiveProps() 

   - 子组件要从父组件接受参数，如果这个组件第一次存在于父组件中,不会执行

     如果这个组件之前已经存在于父组件中，才会执行

2. shouldComponentUpdate()  

   - 组件被更新之前，自动执行返回true/false来决定 render是否更新  

3. componentWillUpdate() / UNSAFE_componentWillUpdate() 

   - 组件被更新之前它会自动执行但是在shouldComponentUpdate之后执行

     shouldComponentUpdate返回true它才会执行，如果返回false，这个函数就不会被执行

4. render() 

5. componentDidUpdate()

   - 组件更新完成以后被执行

#### 卸载阶段

1. componentWillUnmount()
   - 组件即将被从页面中剔除的时候执行

## 15. ref属性

React提供的这个`ref`属性，表示对组件真正实例的引用，其实就是`ReactDOM.render()`返回的组件实例,`ref`可以挂载到组件上也可以是dom元素上。

- 挂到组件(`class`声明的组件)上的ref表示对组件实例的引用。**不能**在函数式组件上使用 ref 属性，因为它们没有实例：
- 挂载到dom元素上时表示具体的dom元素节点。

## 16. 组件通信

#### 父组件与子组件通信

- 父组件将自己的状态传递给子组件，子组件当做属性来接收，当父组件更改自己状态的时候，子组件接收到的属性就会发生改变
- 父组件利用`ref`对子组件做标记，通过调用子组件的方法以更改子组件的状态,也可以调用子组件的方法

#### 子组件与父组件通信

- 父组件将自己的某个方法传递给子组件，在方法里可以做任意操作，比如可以更改状态，子组件通过`this.props`接收到父组件的方法后调用。

#### 跨组件通信

在react没有类似vue中的事件总线来解决这个问题，我们只能借助它们共同的父级组件来实现，将非父子关系装换成多维度的父子关系。react提供了`context` api来实现跨组件通信, React 16.3之后的`context`api较之前的好用。

### 练习

实例，使用`context` 实现购物车中的加减功能

> 复杂的非父子组件通信在react中很难处理，多组件间的数据共享也不好处理，在实际的工作中我们会使用flux、redux、mobx来实现

## 17. HOC(高阶组件)

> 高阶组件是一个函数接受一个组件作为参数，返回一个新的组件

## 18. React Router

### 原理：

> React Router甚至大部分的前端路由都是依赖于[`history.js`](<https://github.com/browserstate/history.js>)的，它是一个独立的第三方js库。可以用来兼容在不同浏览器、不同环境下对历史记录的管理，拥有统一的API。
>
> - 老浏览器的history: 通过`hash`来存储在不同状态下的`history`信息，对应`createHashHistory`，通过检测`location.hash`的值的变化，使用`location.replace`方法来实现url跳转。通过注册监听`window`对象上的`hashChange`事件来监听路由的变化，实现历史记录的回退。
> - 高版本浏览器: 利用HTML5里面的history，对应`createBrowserHistory`, 使用包括`pushState`， `replaceState`方法来进行跳转。通过注册监听`window`对象上的`popstate`事件来监听路由的变化，实现历史记录的回退。
> - node环境下: 在内存中进行历史记录的存储，对应`createMemoryHistory`。直接在内存里`push`和`pop`状态。

### 用法:

React Router包含了四个包:

| 包名                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [`react-router`](https://github.com/ReactTraining/react-router/blob/master/packages/react-router) | React Router核心api                                          |
| [`react-router-dom`](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom) | React Router的DOM绑定，在浏览器中运行不需要额外安装`react-router` |
| [`react-router-native`](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-native) | [React Native](https://facebook.github.io/react-native/) 中使用，而实际的应用中，其实不会使用这个。 |
| [`react-router-config`](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-config) | 静态路由的配置                                               |

**主要使用:**`react-router-dom` 

```js
npm i react-router-dom --save  // 5.x的版本主要是针对React Hook做更好的支持
```

直接按照[官网](<https://reacttraining.com/react-router/web/guides/quick-start>)的demo就理解 路由的使用方式:

> HashRouter、BrowserRouter、Route、Link、exact、404页面处理、Switch、NavLink、params、link的属性（pathname、search、hash、state)、redirect、push、replace、withRouter、prompt

HashRouter和BrowserRouter

- HashRouter:锚点链接
- BrowserRouter:H5的新特性（history）如果上线之后，需要后台做一些处理:**重定向处理404bug**

##  19. redux

### 传统MVC框架的缺陷

**什么是MVC？**

![](img/mvc-base.png)

`MVC`的全名是`Model View Controller`，是模型(model)－视图(view)－控制器(controller)的缩写，是一种软件设计典范。

`V`即View视图是指用户看到并与之交互的界面。

`M`即Model模型是管理数据 ，很多业务逻辑都在模型中完成。在MVC的三个部件中，模型拥有最多的处理任务。

`C`即Controller控制器是指控制器接受用户的输入并调用模型和视图去完成用户的需求，控制器本身不输出任何东西和做任何处理。它只是接收请求并决定调用哪个模型构件去处理请求，然后再确定用哪个视图来显示返回的数据。

**MVC只是看起来很美**

MVC框架的数据流很理想，请求先到Controller, 由Controller调用Model中的数据交给View进行渲染，但是在实际的项目中，又是允许Model和View直接通信的。然后就出现了这样的结果：

![](img/defect-of-mvc.png)

### Redux

React 只是 DOM 的一个抽象层，并不是 Web 应用的完整解决方案。有两个方面，它没涉及。

- 代码结构 
- 组件之间的通信

2013年 Facebook 提出了 Flux 架构的思想，引发了很多的实现。2015年，Redux 出现，将 Flux 与[函数式编程](<https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/>)结合一起，很短时间内就成为了最热门的前端架构。

如果你不知道是否需要 Redux，那就是不需要它

只有遇到 React 实在解决不了的问题，你才需要 Redux

简单说，如果你的UI层非常简单，没有很多互动，Redux 就是不必要的，用了反而增加复杂性。

- 用户的使用方式非常简单
- 用户之间没有协作
- 不需要与服务器大量交互，也没有使用 WebSocket
- 视图层（View）只从单一来源获取数据

**需要使用Redux的项目:**

- 用户的使用方式复杂
- 不同身份的用户有不同的使用方式（比如普通用户和管理员）
- 多个用户之间可以协作
- 与服务器大量交互，或者使用了WebSocket
- View要从多个来源获取数据

**从组件层面考虑，什么样子的需要Redux：**

- 某个组件的状态，需要共享
- 某个状态需要在任何地方都可以拿到
- 一个组件需要改变全局状态
- 一个组件需要改变另一个组件的状态

**Redux的设计思想：**

1. Web 应用是一个状态机，视图与状态是一一对应的。
2. 所有的状态，保存在一个对象里面（唯一数据源）。

> 注意：flux、redux都不是必须和react搭配使用的，因为flux和redux是完整的架构，在学习react的时候，只是将react的组件作为redux中的视图层去使用了。

**Redux的使用的三大原则：**

- Single Source of Truth(唯一的数据源)

- State is read-only(状态是只读的)

- Changes are made with pure function(数据的改变必须通过纯函数完成)

  > 什么是纯函数:
  >
  > 纯函数指的是 给定固定的输入就一定会有固定的输出，而且不会有任何副作用。
  >
  > 不固定的话像日期对象、ajax请求、异步操作就不是纯函数了
  >
  > 副作用是对接受的参数进行修改。我们可以复制一份修改复制的

## 20. redux和react-redux区别

> redux:js的状态管理
>
> react-redux:为了在react中方便实用redux

### redux

教程:http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html

![](img/3.jpeg)

- createStore:(创建store)

  ```js
  import { createStore} from "redux"
  const store = createStore(Reducer)
  ```

- applyMiddleware:(处理中间件)

  > 一个关键问题没有解决：异步操作怎么办？Action 发出以后，Reducer 立即算出 State，这叫做同步；Action 发出以后，过一段时间再执行 Reducer，这就是异步。
  >
  > 怎么才能 Reducer 在异步操作结束后自动执行呢？这就要用到新的工具：中间件（middleware）

  ```js
  import thunk from "redux-thunk" // 处理异步的中间件
  const  store = createStore(Reducer, applyMiddleware(thunk)
  ```

  - 引入react-thunk的异步操作（注意:异步一定要放在aciton操作)

  ```js
  // 引入react-thunk模块
  import thunk from 'react-thunk'
  const store = createStore(reducer,applyMiddleware(thunk))
  // action里的异步操作 
  export const decrement = num => {
    return dispatch => {
      setTimeout(() => {
        // 因为是一个对象就不用return
        dispatch({
          type: "DECREMENT",
          num
        });
      }, 1000);
    };
  };
  ```

  注意:定时器、网络请求、事件监听、在组件被销毁前都应得到相应的处理

### 实战Redux实现TodoList

1. 使用Antd搭建todoList
2. 创建store
3. 创建action和reducer实现添加功能
4. 实现删除功能 
5. actionTypes的拆分
6. 使用actionCreators拆分action
7. UI组件和容器组件
8. 无状态组件
9. redux中使用异步
10. redux-thunk
11. redux-sage

### react-redux: 

注意版本问题:

```js
"react": "^16.12.0",
"react-dom": "^16.12.0",
"react-redux": "^7.1.3",
"react-scripts": "3.4.0",
"redux": "^4.0.5",
```

- Provider

  ```js
  import { createStore} from "redux"
  import { Provider } from "react-redux"
  const store = createStore(reducer)
  ReactDOM.render(
      <Provider store={ store }>
              <Children />   // 子组件就可以接受store到 但是还不能直接用 
      </Provider>,
  document.getElementById('root'));
  ```

- connect

  ```js
  import React from "react"
  import { connect } from "react-redux"	
  class Children extends React.Component {
    //.....
  }
  // 连接高级组件
  export default connect(mapStateToProps,mapDispachToProps)(Children) 
  ```

  - mapStateToProps（将state映射到 UI 组件的参数（props))

    > mapStateToProps是一个函数,它的作用是建立一个从（外部的）state对象到（UI 组件的props对象的映射关系,传入connect中相当于立即执行,返回一个对象,里面的每一个键值对就是一个映射

    ```js
    // mapStateToProps 可以传入两个参数state、ownProps（本组件的props）
    // 第一个参数
    const mapStateToProps = (state) => {
      return {
        todoList: state.todoList
      }
    }
    // 第二个参数
    //    <FilterLink filter="All">
    //      All
    //    </FilterLink>
    const mapStateToProps = (state, ownProps) => {
      return {
        active: ownProps.filter === state.filter
      }
    }
    ```

  - mapDispachToProps（输出逻辑，即将用户对 UI 组件的操作映射成 Action。）

    > mapDispatchToProps是connect函数的第二个参数，用来建立 UI 组件的参数到store.dispatch方法的映射。也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。

    1. mapDispatchToProps为函数的用法

       ```js
       // 如果mapDispatchToProps是一个函数，会得到dispatch和ownProps（容器组件的props对象）两个参数。
       const mapDispatchToProps = ( dispatch, ownProps) => {
               return {
                 onClick: () => {
                   dispatch({ // action
                     type: 'SET_VISIBILITY_FILTER',
                     filter: ownProps.filter
                   });
                 }
         		};
       }
       // 从上面代码可以看到，mapDispatchToProps作为函数，应该返回一个对象，该对象的每个键值对都是一个映射，定义了 UI 组件的参数怎样发出 Action。
       ```

    2. mapDispatchToProps为对象的用法

       ```js
       //如果mapDispatchToProps是一个对象，它的每个键名也是对应 UI 组件的同名参数，键值应该是一个函数，会被当作 Action creator ，返回的 Action 会由 Redux 自动发
       const mapDispatchToProps = {
         onClick: (filter) => {
           type: 'SET_VISIBILITY_FILTER',
           filter: filter
         };
       }
       // 简化版
       import {onClick} from './actions'
       export default connect(mapStateToProps,{onClick})(App);
       ```

- bindActionCreators:（作用是将一个或多个action和dispatch组合起来生成mapDispatchToProps需要生成的内容）

  ```js
  import {increment,decrement}  from "./actions";
  import { bindActionCreators } from "redux";
  const mapDispatchProps = dispatch => {
     // 单个用法
     //return {
        increment:bindActionCreators(increment,dispatch),
        decrement:bindActionCreators(decrement,dispatch)
    // }
    // 多个用法
    return bindActionCreators({increment,decrement},dispatch)
  };
  // 调用
  // 注意：事件触发函数直接调用不用加() 假如要传递参数 事件要多加一层然后执行传入参数（参数）
  ```

- combineReducers:（合并多个reducer）

  > reducer存放过多的数据 可能造成代码的不可维护 最好把reducer拆分
  >
  > 用redux内置的combinReducers函数进行拆分

  ```js
  // 引入函数
  import { combineReducers } from "redux";
  // 合并reducer
  const rootReducer = combineReducers({
    reducer1,
    reducer2
  });
  export default rootReducer; // 导出
  // 传入state合并好的reducer
  const store = createStore(rootReducer);
  // 在组件中调用reducer
  const mapStateToProps = state => {
    return {
      counter: state.reducer1,
      user: state.reducer2
    };
  };
  ```

## 21. React Hooks

教程:http://www.ruanyifeng.com/blog/2019/09/react-hooks.html?tdsourcetag=s_pctim_aiomsg

**什么是hooks:**

> ​	React一直都提倡使用函数组件，但是有时候需要使用 state 或者其他一些功能时，只能使用类组件，因为函数组件没有实例，没有生命周期函数，只有类组件才有.
>
> Hooks 是 React 16.8 新增的特性，它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性.
>
> 如果你在编写函数组件并意识到需要向其添加一些 state，以前的做法是必须将其它转化为 class。现在你可以直接在现有的函数组件中使用 Hooks. 凡是 use 开头的 React API 都是 Hooks.

### 1. useState

  `useState`可以让我们在函数式组件中定义一个state和一个用来修改state的方法

```JS
// count状态、setCount修改状态、useState(默认值)
let [ count,setCount ] = useState( count的初始值 )
```

### 2. useContext

##### Context

Context 通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递 props 属性。
 有部分小伙伴应该使用props属性进行组件向下传值的操作。当多个组件嵌套时候。你就需要慢慢向上寻找最初的值是什么

**React.createContext：**创建一个上下文的容器(组件), defaultValue可以设置共享的默认数据

```cpp
const {Provider, Consumer} = React.createContext(defaultValue);
```

**Provider(生产者)**: 和它的名字一样。用于生产共享数据的地方。生产什么呢？ 那就看value定义的是什么了。value:放置共享的数据。

```csharp
<Provider value={/*共享的数据*/}>
    /*里面可以渲染对应的内容*/
</Provider>
```

**Consumer(消费者)**:这个可以理解为消费者。 它是专门消费供应商(**Provider** 上面提到的)产生数据。Consumer需要嵌套在生产者下面。才能通过回调的方式拿到共享的数据源。当然也可以单独使用，那就只能消费到上文提到的defaultValue

```csharp
<Consumer>
  {value => /*根据上下文  进行渲染相应内容*/}
</Consumer>
```

**useContext**

如果需要在组件之间共享状态，可以使用`useContext()`。

```js
function Example() {
  const locale = useContext(LocaleContext);
  const theme = useContext(ThemeContext);
  // ...
}
```

useContext 的入参是某个 Provider 提供的 context，如果 context 发生变化的话，返回值也会立即发生变化。

### 3. useReducer

React 本身不提供状态管理功能，通常需要使用外部库。这方面最常用的库是 Redux。

Redux 的核心概念是，组件发出 action 与状态管理器通信。状态管理器收到 action 以后，使用 Reducer 函数算出新的状态，Reducer 函数的形式是`(state, action) => newState`。

`useReducers()`钩子用来引入 Reducer 功能。

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

上面是`useReducer()`的基本用法，它接受 Reducer 函数和状态的初始值作为参数，返回一个数组。数组的第一个成员是状态的当前值，第二个成员是发送 action 的`dispatch`函数。

### 4. useEffect

`Effect Hook`可以使得你在函数组件中执行一些带有副作用的方法。

> 数据获取，设置订阅以及手动更改`React`组件中的`DOM`都是副作用的示例。无论你是否习惯于将这些操作称为“副作用”（或仅仅是“效果”），但你之前可能已经在组件中执行了这些操作。
>
> **提示：** 如果你熟悉`React`类生命周期方法，则可以将`useEffect Hook`视为`componentDidMount`，`componentDidUpdate`和`componentWillUnmount`的组合。

```JS
useEffect(()  =>  {
  // Async Action
}, [dependencies])
```

`useEffect()`接受两个参数。第一个参数是一个函数，异步操作的代码放在里面。第二个参数是一个数组，用于给出 Effect 的依赖项，只要这个数组发生变化，`useEffect()`就会执行。第二个参数可以省略，这时每次组件渲染时，就会执行`useEffect()`。






### constructor(props)

React组件的构造函数在挂载之前被调用。

在实现`React.Component`构造函数时，需要先在添加其他内容前，调用`super(props)`，

用来将父组件传来的`props`绑定到这个类中，使用`this.props`将会得到。

官方建议不要在`constructor`引入任何具有副作用和订阅功能的代码，这些应当使用`componentDidMount()`。

`constructor`中应当做些初始化的动作，如：初始化`state`，将事件处理函数绑定到类实例上，但也不要使用`setState()`。如果没有必要初始化state或绑定方法，则不需要构造`constructor`，或者把这个组件换成纯函数写法。

当然也可以利用`props`初始化`state`，在之后修改`state`不会对`props`造成任何修改，但仍然建议大家提升状态到父组件中，或使用`redux`统一进行状态管理。

```js
constructor(props) {
  super(props);
  this.state = {
    isBool: props.isBool
  };
}
```

### static getDerivedStateFromProps(nextProps, prevState)

`getDerivedStateFromProps` 是react16.3之后新增，在组件实例化后，和接受新的`props`后被调用。他必须返回一个对象来更新状态，或者返回null表示新的props不需要任何state的更新。

如果是由于父组件的`props`更改，所带来的重新渲染，也会触发此方法。

调用`setState()`不会触发`getDerivedStateFromProps()`。

之前这里都是使用`constructor`+`componentWillRecieveProps`完成相同的功能的

###  componentWillMount() / UNSAFE_componentWillMount()

`componentWillMount()`将在React未来版本(官方说法 17.0)中被弃用。`UNSAFE_componentWillMount()`在组件挂载前被调用，在这个方法中调用`setState()`不会起作用，是由于他在`render()`前被调用。

为了避免副作用和其他的订阅，官方都建议使用`componentDidMount()`代替。这个方法是用于在服务器渲染上的唯一方法。这个方法因为是在渲染之前被调用，也是惟一一个可以直接同步修改state的地方。

### render()

render()方法是必需的。当他被调用时，他将计算`this.props`和`this.state`，并返回以下一种类型：

1. React元素。通过jsx创建，既可以是dom元素，也可以是用户自定义的组件。 
2. 字符串或数字。他们将会以文本节点形式渲染到dom中。 
3. Portals。react 16版本中提出的新的解决方案，可以使组件脱离父组件层级直接挂载在DOM树的任何位置。 
4. null，什么也不渲染 
5. 布尔值。也是什么都不渲染。

`render()`方法必须是一个纯函数，他不应该改变`state`，也不能直接和浏览器进行交互，应该将事件放在其他生命周期函数中。 

如果`shouldComponentUpdate()`返回`false`，`render()`不会被调用。

### componentDidMount

`componentDidMount`在组件被装配后立即调用。初始化使得DOM节点应该进行到这里。

**通常在这里进行ajax请求**

如果要初始化第三方的dom库，也在这里进行初始化。只有到这里才能获取到真实的dom.

### componentWillReceiveProps()/UNSAFE_componentWillReceiveProps(nextProps)

官方建议使用`getDerivedStateFromProps`函数代替`componentWillReceiveProps`。当组件挂载后，接收到新的`props`后会被调用。如果需要更新`state`来响应`props`的更改，则可以进行`this.props`和`nextProps`的比较，并在此方法中使用`this.setState()`。

如果父组件会让这个组件重新渲染，即使`props`没有改变，也会调用这个方法。

React不会在组件初始化props时调用这个方法。调用`this.setState`也不会触发。

### shouldComponentUpdate(nextProps, nextState)

调用`shouldComponentUpdate`使React知道，组件的输出是否受`state`和`props`的影响。默认每个状态的更改都会重新渲染，大多数情况下应该保持这个默认行为。

在渲染新的`props`或`state`前，`shouldComponentUpdate`会被调用。默认为`true`。这个方法不会在初始化时被调用，也不会在`forceUpdate()`时被调用。返回`false`不会阻止子组件在`state`更改时重新渲染。

如果`shouldComponentUpdate()`返回`false`，`componentWillUpdate`,`render`和`componentDidUpdate`不会被调用。

> 官方并不建议在`shouldComponentUpdate()`中进行深度查询或使用`JSON.stringify()`，他效率非常低，并且损伤性能。

### UNSAFE_componentWillUpdate(nextProps, nextState)

在渲染新的`state`或`props`时，`UNSAFE_componentWillUpdate`会被调用，将此作为在更新发生之前进行准备的机会。这个方法不会在初始化时被调用。

*不能在这里使用this.setState()*，也不能做会触发视图更新的操作。如果需要更新`state`或`props`，调用`getDerivedStateFromProps`。

### getSnapshotBeforeUpdate()

在react `render()`后的输出被渲染到DOM之前被调用。它使您的组件能够在它们被潜在更改之前捕获当前值（如滚动位置）。这个生命周期返回的任何值都将作为参数传递给componentDidUpdate（）。

### componentDidUpdate(prevProps, prevState, snapshot)

在更新发生后立即调用`componentDidUpdate()`。此方法不用于初始渲染。当组件更新时，将此作为一个机会来操作DOM。只要您将当前的props与以前的props进行比较（例如，如果props没有改变，则可能不需要网络请求），这也是做网络请求的好地方。

如果组件实现`getSnapshotBeforeUpdate()`生命周期，则它返回的值将作为第三个“快照”参数传递给`componentDidUpdate()`。否则，这个参数是`undefined`。

### componentWillUnmount()

在组件被卸载并销毁之前立即被调用。在此方法中执行任何必要的清理，例如使定时器无效，取消网络请求或清理在`componentDidMount`中创建的任何监听。

### componentDidCatch(error, info)

错误边界是React组件，可以在其子组件树中的任何位置捕获JavaScript错误，记录这些错误并显示回退UI，而不是崩溃的组件树。错误边界在渲染期间，生命周期方法以及整个树下的构造函数中捕获错误。

如果类组件定义了此生命周期方法，则它将成错误边界。在它中调用`setState()`可以让你在下面的树中捕获未处理的JavaScript错误，并显示一个后备UI。只能使用错误边界从意外异常中恢复; 不要试图将它们用于控制流程。

错误边界只会捕获树中下面组件中的错误。错误边界本身不能捕获错误。

### PureComponent

`PureComponnet`里如果接收到的新属性或者是更改后的状态和原属性、原状态相同的话，就不会去重新render了
在里面也可以使用`shouldComponentUpdate`，而且。是否重新渲染以`shouldComponentUpdate`的返回值为最终的决定因素。

```js
import React, { PureComponent } from 'react'

class YourComponent extends PureComponent {
  ……
}
```

不错的文章: https://www.jianshu.com/p/514fe21b9914








