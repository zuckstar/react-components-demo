### Create React App

Create React App 是一个用于学习 React 的舒适环境，也是用 React 创建新的单页应用的最佳方式。

- 方法一

1. 创建一个支持typescript的项目
```
npx create-react-app my-app --typescript
cd my-app
npm start
```

2. 将 TypeScript 添加到 Create React App 项目
```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

或者

 yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

- 方法2：
```
create-react-app ts-with-react --template typescript
```


### npx 是什么

- npx 可以避免全局安装模块

除了调用项目内部模块，npx 还能避免全局安装的模块。比如，create-react-app这个模块是全局安装，npx 可以运行它，而且不进行全局安装。


$ npx create-react-app my-app --typescript
上面代码运行时，npx 将create-react-app下载到一个临时目录，使用以后再删除。所以，以后再次执行上面的命令，会重新下载create-react-app。

- 调用项目安装的模块

npx 想要解决的主要问题，就是调用项目内部安装的模块。比如，项目内部安装了测试工具 Mocha。


$ npm install -D mocha
一般来说，调用 Mocha ，只能在项目脚本和 package.json 的scripts字段里面， 如果想在命令行下调用，必须像下面这样。


- 项目的根目录下执行

$ node-modules/.bin/mocha --version
npx 就是想解决这个问题，让项目内部安装的模块用起来更方便，只要像下面这样调用就行了。


$ npx mocha --version

npx 的原理很简单，就是运行的时候，会到node_modules/.bin路径和环境变量$PATH里面，检查命令是否存在。

由于 npx 会检查环境变量$PATH，所以系统命令也可以调用。


- 等同于 ls

$ npx ls
注意，Bash 内置的命令不在$PATH里面，所以不能用。比如，cd是 Bash 命令，因此就不能用npx cd。
