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
- 修复浏览器自身的 bug，保证样式的一致性

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
- 增加 SetupTests.ts ,并在文件内填入 `import '@testing-library/jest-dom'`来扩展 jest 的断言库

### 图标库

fontawsome

### Transition 动画

react-transition-group

### StoryBook

使用 StoryBook 库来自动为组件生成文档

npx -p @storybook/cli sb init

### Input 组件开发

- 1. 分析组件属性
- 2. 每个组件都包含 4 个部分：主体代码、样式文件、story 文件、test 文件
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
- onSuccess(response, file) / onError(error, file)
- onRemoved(file)

XHR （发送异步请求的对象、原生 XHR 配置复杂）

fetch

​ 1、只对网络请求报错、对 400、500 都当做成功的请求

​ 2、默认不会带 cookie

​ 3、不支持 abort、不支持超时控制

​ 4、没有办法原生监测请求的进度

axios

    1. 支持浏览器和 Node.js ，浏览器中使用的是XHR、在 node 中使用的是 http 模块

2. 支持 Promise API
3. 拦截请求和响应 等等

### Upload: mock 服务

JSONPlaceholder

Mocky.io

### Upload: 发送文件

form 表单发送文件

- encType="multipart/form-data" action
- input- file

### Upload: 丰富化上传数据

- 添加自定义 header
- 添加 name 属性 - 代表发送到后台的 name 参数
- 添加 data 属性 - 上传所需的额外参数
- 添加 input 本身的 file 约束属性 - mutiple, accept

### Upload: 展示更丰富的界面和交互

- 自定义触发元素
- 支持拖动上传文件
- onPreview

### tsconfig.json

### npm link

利用 npm link 把项目的依赖链接到本地的项目中去

### npm

- `npm add user` 添加用户
- `npm whoami` 查看当前用户

version 版本号:

主版本号(不兼容的大版本更新).次版本号(可向下兼容的功能更新).修订号(修复 bug)
0.1.0

author: 作者名称

license：开源软件遵守的协议

keywords: 关键词搜索

homepage: 项目主页

repository: 项目地址

files: 想上传的文件

`npm publish` 发布一个新的版本

devDependencies: 开发过程中所需的依赖库

dependencies: 生成最终产物所需的依赖库

peerDependencies: 不会被 npm 自动安装，会声明 warning 的日志
peerDependencies 的目的是提示宿主环境去安装满足插件 peerDependencies 所指定依赖的包，然后在插件 import 或者 require 所依赖的包的时候，永远都是引用宿主环境统一安装的 npm 包，最终解决插件与所依赖包不一致的问题。

### 添加和发布 commit 前检查

- 代码规范 eslint
- 单元测试

cross-env 跨平台设置环境变量的工具

CI: CI = true, test && lint

Husky 工具

- pre-commit
- pre-push

commit 和 push 前进行检查

### storybook 生成静态页面

### CI/CD

组件库 => unit tests （单元测试） e2e tests（端对端测试）=> npm publish => build 文档静态文件 => build 成功 => 上传到服务器 => 生成新的站点

CI - 持续集成

- 频繁地将代码集成到主干
- 快速发现错误
- 防止分支大幅偏离主干
- 快速评审，每次 push 的时候都运行测试，通过测试和代码规范

CD - 持续交付、持续部署

- 频繁地将软件的新版本，交付给质量团队或者用户
- 代码通过评审以后，自动部署到生成环境

自动化平台 Travis CI， travis-ci.com

添加 .travis.yml 文件, npm ci

github pages
