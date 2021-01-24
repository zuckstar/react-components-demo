## Interface 接口

+ 对对象的形状（shape）进行描述
+ 对（class）进行抽象
+ Duck Typing (鸭子类型， 动态类型语言的对象推断策略)


规范、契约：约束对象的模样

```typescript
interface Person {
  name: string;
  age: number;
}

```
定义的变量必须和接口描述的保持一致，否则会报错

```typescript
let Jamie: Person = {
  name: "Jamie",
  age: 20
}
```

可选属性

```typescript
interface Animal {
  name: String;
  age?: number;
}
```

可选属性，对象的可选属性可以不用声明/赋值

```typescript
let dog: Animal = {
  name: "wang"
}
```

只读属性：规定对象中的一些字段只在创建阶段被赋值

```typescript
interface Plant {
  readonly id: number;
  name: String;
  age: number;
}

let flower:Plant = {
  id: 12345,
  name: "花",
  age: 11
}

// Cannot assign to 'id' because it is a read-only property.
// flower.id = 3
```
