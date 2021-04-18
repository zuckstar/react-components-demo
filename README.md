# React-Components

React 组件库 Phantom Canyon 幻影峡谷

### 完成一个组件库需要考虑的问题

- 代码结构
- 样式解决方案
- 组件的需求分析和编码
- 组件测试用例分析和编码
- 代码打包输出和发布
- CI/CD、文档生成等

### 样式解决方案分析

- Inline CSS
- CSS in JS
- Styled Component
- Sass/Less ✅

### 样式系统文件结构

```
styles/
  _variables.scss (各种变量以及可配置设置)
  _mixins.scss (全局 mixins)
  _functions.scss (全局 functions)
components/
  Button/
    style.scss (组件单独的样式)
```

### 创建自己的色彩体系

- 系统色板 = 基础色板 + 中性色板 
- 系统色 = 主题色 + 基础色 + 功能色

### 组件库样式变量分类

- 基础色彩系统
- 字体系统
- 表单
- 按钮
- 边框和阴影
- 可配置开关


### normalize.css

- 保护有用的样式
- 修复浏览器自身的bug，保证样式的一致性

### Button 组件需求分析

- 不同的 Button type，包括
  - Primary
  - Default
  - Danger
  - Link Button
- 不同的 Button Size
  - Normal
  - Small
  - Large
- Disabled 状态

样式分析：

background、font-size、padding 

### 测试的重要性

- 高质量的代码
- 更早地发现 bug，减少成本
- 让重构和升级变得更加容易可靠
- 让开发流程更加敏捷

### 测试金字塔

塔尖 => 塔底
- UI Test
- Service Test
- Unit Test（单元测试）

大量的 Unit Test, 中等的 Service Test, 少量的 UI Test

### React 组件特别适合单元测试

- Component - 组件
- Function - 函数
- 单向数据流

### JEST 测试框架

断言：一个值是否是预期的结果

断言库：

通用的断言：
expect(x).toBe()

布尔的断言：
expect(x).toBeNull()
expect(x).toBeUndefined()
expect(x).toBeDefined()
...

数字的断言：
expect(value).toBeGreaterThan(x) // 比 x 大
expect(value).toBeLessThan(x) // 比 x 小
...



监听测试用例变化

```
npx jest jest.test.js --watch
```

### React 测试工具

- React-testing-library(默认包含在 create-react 中)
- Jest-dom 库，给 jest 增加了针对 DOM 相关的断言
- 增加 SetupTests.ts ,并在文件内填入 `import '@testing-library/jest-dom'`来扩展 jest的断言库

### 图标库

fontawsome

### Transition 动画

react-transition-group

### StoryBook

使用 StoryBook 库来自动为组件生成文档

npx -p @storybook/cli sb init

### Input 组件开发
- 1. 分析组件属性
- 2. 每个组件都包含4个部分：主体代码、样式文件、story 文件、test 文件
- 3. mvp: Minimum Viable Product(最小化可行产品) 
### AutoComplete 
- 拥有同步/异步获取数据
- 支持用户自定义 change 方法
- 支持自定义选项
- 支持键盘操作
- debounce
- click outside

### Upload 组件

上传一个文件的生命周期

- 开始
- 点击按钮选择文件
- beforeUpload(file)
- onProgress(event.file)
- onChange(file)
- onSuccess(response, file)   /  onError(error, file)
- onRemoved(file)



XHR （发送异步请求的对象、原生XHR配置复杂）

fetch

​	1、只对网络请求报错、对400、500都当做成功的请求

​	2、默认不会带 cookie

​	3、不支持 abort、不支持超时控制

​	4、没有办法原生监测请求的进度

axios

	1. 支持浏览器和 Node.js ，浏览器中使用的是XHR、在 node 中使用的是 http 模块
 	2. 支持 Promise API
 	3. 拦截请求和响应 等等

### mock 服务

JSONPlaceholder

Mocky.io

### 发送文件

form 表单发送文件

- encType="multipart/form-data" action
- input- file

