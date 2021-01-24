## Array 数组和 Tuple

### 数组类型 array

数组类型中的每一个数组成员的类型都必须相同

```typescript
let arrOfNumbers: number[] = [1,2,3,4,5] // 定义数组类型的变量
arrOfNumbers.push(5)

// arrOfNumbers.push('str') push 其它类型的变量会报错

function test() {
  console.log(arguments)
}
```


### 元组类型 Tuple

元组 Tuple: 限定了数据类型的数组

```typescript
let user: [string, number] = ['hello world', 20]

// 无论多一项，还是少一项变量，都会报错
// user = ['molly', 2, true] 
// user = ['Jamie'] 
```
