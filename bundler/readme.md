# bundler

## 模块格式

- UMD
- AMD（已经过时，requireJS）
- CommonJS
- ES6 module

UMD 利用一些关键字是否存在，来判断当前系统所处的环境。

### ES6 module

ES 模块允许进行静态分析，从而实现像 tree-shaking 的优化。

## 打包工具

### webpack

- 入口文件
- 出口
- 加载多种文件类型(.css,.png,...)

### Parcel

### rollup

### tree-shaking

没有被引用的变量和方法不会被打包到最终的文件中。

## tsc 编译器
