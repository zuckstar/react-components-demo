## 什么是 Typescript

### 编程语言的类型

+ 动态类型语言
+ 静态类型语言

eslint 就是一个静态类型检查器，在编码期间就可以发现代码错误。

### Typescript

+ 是 JavaScript 的超集（包含了 JavaScript）
+ 静态类型风格的类型系统
+ 支持 es6 到 es10 以及 esnext 的语法支持
+ 兼容各种浏览器，各种系统，各种服务器。并且完全开源

### 为什么要使用 Typescript

优点：

+ 程序更容易理解
+ 效率更高
  - 可以在不同的代码块和定义中跳转
  - 代码自定补全
  - 丰富的接口提示
+ 更少的错误
  - 在编译期间就能够发现大部分错误
  - 杜绝一些常见的错误（变量名拼写错误，变量传入类型错误）
+ 非常好的包容性
  - 完全兼容 JavaScript
  - 第三方库可以单独编写类型文件（提供单独类型文件提供给开发者使用）

一些不足：

+ 增加了学习成本
+ 短期内增加了开发成本


### 安装 Typescript

npm 安装指令 `npm install -g typescript`
查看版本号 `tsc -v`

文件 hello.ts

```typescript
const hello = (name: String) => {
  return `hello ${name}`
}

hello('Jamie')
```

### 编译 ts 文件

指令 `tsc hello.ts`
编译成功后会生成 hello.js 文件


### 使用 ts-node

在终端中运行 `sudo npm install -g ts-node` 来安装 ts-node 工具

使用命令 `ts-node test.ts` 可以直接编译并运行该文件
