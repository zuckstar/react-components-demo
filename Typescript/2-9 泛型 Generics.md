## 泛型 Generics 

在使用函数或者类的时候，不预先指定类型，而是在使用的时候再动态地填入约束的类型。

### 定义

```ts
function echo<T>(arg: T):T  {
  return arg
}

const str: string = 'str'
const result = echo(str)
```
编译器会根据传入参数的类型，自动为其赋予对应的类型，而不是 any
### 定义多个泛型

```ts
function swap<T, U>(tuple:[T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const result = swap(['string', 123])
```

swap 函数的作用是交换 tuple 数组中的两个元素并返回，此时并不知道 tuple 数组中两个元素的类型定义是什么，此时就可以使用泛型来解决这个问题，交换该两个元素的值并且得到具体的类型定义，返回新的 tuple 数组。

### 约束泛型

约束泛型为数组类型

```ts
function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

const arrs = echoWithArr([1,2,3])
```

结合接口来约束泛型必须包含有 length 属性
```ts
interface IWithLength {
  length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}

const str = echoWithLength('str')
const obj = echoWithLength({ length: 10})
const arr2 = echoWithLength([1, 2, 3])

const str = echoWithLength({})
//  Property 'length' is missing in type '{}' but required in type 'IWithLength'.
```
此时如果传入不含 length 属性的对象，静态代码检查器就会报错

### 创建泛型类
```ts
class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}

const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())

const queue2 = new Queue<string>()
queue2.push('str')
console.log(queue2.pop().length)
```

### 创建泛型接口
```ts
interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kp1: KeyPair<number, string> = { key: 1, value: 'str' }
let kp2: KeyPair<string, number> = { key: 'test', value: 1 }

let arr: number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 3]
```

### 利用泛型来描述多种的接口类型
用接口来描述一个函数的参数和返回值类型
```ts
interface IPlus {
  (a: number, b: number) : number
}

function plus(a: number, b: number): number {
  return a + b;
}

const a: IPlus = plus
```
引入泛型可以让一个接口描述多种类型
```ts
interface IPlus<T> {
  (a: T, b: T) : T
}

function plus(a: number, b: number): number {
  return a + b;
}


function connect(a: string, b: string): string {
  return a + b
}

const a: IPlus<number> = plus
const b: IPlus<string> = connect
```
