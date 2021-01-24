## 枚举 enums

### 定义

枚举成员会被赋值从 0 开始的自动递增的数字

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

console.log(Direction.Up) // 0

console.log(Direction[0]) // Up

```

为第一枚举成员赋予初始值, 且枚举成员是可双向读取的

```ts
enum Direction {
  Up = 10,
  Down,
  Left,
  Right
}

console.log(Direction)
// {
//   '10': 'Up',
//   '11': 'Down',
//   '12': 'Left',
//   '13': 'Right',
//   Up: 10,
//   Down: 11,
//   Left: 12,
//   Right: 13
// }
```

定义常量枚举

```ts
const enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}

const value = 'UP'

if(value === Direction.Up) {
  console.log('go up!')
}

```
定义常量枚举的时候，ts 在编译的时候，只会关联与枚举有关的变量，并且直接替换为真实的值。
