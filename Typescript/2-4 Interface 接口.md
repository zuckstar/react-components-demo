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

### 可选属性

接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。

带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个`?`符号。

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
