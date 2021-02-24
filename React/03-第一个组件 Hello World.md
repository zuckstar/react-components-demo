## 第一个组件

```typescript
import React from 'react'

interface IHelloProps {
  message?: string; // 设置可选属性
}

const Hello: React.FC<IHelloProps> = (props) => {
  return <h2>{props.message}</h2>
}

// 设置默认 props 值
Hello.defaultProps = {
  message: "Hello World"
}

export default Hello
```
### 函数组件

React 的函数组件是 React 组件的另一种定义方式，两种方式都可以用于定义组件，但是相比于类组件，函数组件要更简单好用些。

组件名一般要大写，是为了在组件使用时与一般的 html 标签区分开

函数接收外部数据的方式就是在函数的参数（props）里拿到的

函数组件没有 state，React v16.8.0 推出了 Hooks API，提供了 React.useState API解决了此问题。

### React.FunctionComponent

React.FunctionComponent 可以简写为 React.FC

React.FunctionComponent 接收一个泛型，该泛型就是 props 的类型

任何的 component 组件都拥有 children 属性（props.children) 来读取子节点的值
