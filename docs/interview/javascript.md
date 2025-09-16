
## JS 的数据类型有哪些？

- 基本数据类型（值类型）：`Number`、`String`、`Boolean`、`Null`、`Undefined`、`Symbol`、`BigInt`。
  - Symbol 代表创建后独一无二且不可变的数据类型，它的出现我认为主要是为了解决可能出现的全局变量冲突的问题。
  - BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。
- 复杂数据类型（引用类型）：`Object`、`Function`、`Array` 。

**基本数据类型保存在栈里面，可以直接访问它的值；**

**引用数据类型保存在堆里面，栈里面保存的是地址，通过栈里面的地址去访问堆里面的值。**

## JavaScript有哪些内置对象

js 中的内置对象主要指的是在程序执行前存在全局作用域里的由 js 定义的一些全局值属性、函数和用来实例化其他对象的构造函数对象。

一般经常用到的如全局变量值 `NaN`、`undefined`，全局函数如 `parseInt()`、`parseFloat()` 用来实例化对象的构造函数如 `Date`、`Object` 等，还有提供数学计算的单体内置对象如 `Math`对象。

## null 和 undefined 的区别？

- `null`表示一个对象被定义了，值为“空值”。用法：
① 作为函数的参数，表示该函数的参数不是对象。
② 作为对象原型链的终点。
- `undefined`表示不存在这个值。就是此处应该有一个值，但是还没有定义，当尝试读取时就会返回 undefined。用法：
① 函数没有返回值时，默认返回 undefined。
② 变量已声明，没有赋值时，为 undefined。
③ 对象中没有赋值的属性，该属性的值为 undefined。
④ 调用函数时，应该提供的参数没有提供，该参数等于 undefined。

## 如何判断 JS 的数据类型？

**`typeof`**

其中数组、对象、null都会被判断为object，其他判断都正确。

```jsx

console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof 'str');           // string
console.log(typeof []);              // object    
console.log(typeof function(){});    // function
console.log(typeof {});              // object
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object
```

**`instanceof`**

**只能正确判断引用数据类型**，而不能判断基本数据类型。**`instanceof`** 运算符可以用来测试一个对象在其原型链中是否存在一个构造函数的 **`prototype`** 属性。**其内部运行机制是判断在其原型链中能否找到该类型的原型**。

```jsx

console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false 
console.log('str' instanceof String);                // false 
 
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true

```

**`Object.prototype.toString.call()`**

使用 Object 对象的原型方法 toString 来判断数据类型

```jsx
var a = Object.prototype.toString;
 
console.log(a.call(2)); // [object Number]
console.log(a.call(true)); // [object Boolean]
console.log(a.call('str')); // [object String]
console.log(a.call([])); // [object Array]
console.log(a.call(function(){})); // [object Function]
console.log(a.call({})); // [object Object]
console.log(a.call(undefined)); // [object Undefined]
console.log(a.call(null)); // [object Null]

```

分割后可以方便判断：

```jsx
**Object**.**prototype**.toString.**call**({}).**slice**(8,-1) // Object
```

**`Array.isArray`**

可以判断 value 是否为数组。

```jsx

Array.isArray([]); // true
Array.isArray({}); // false
```

## == 和 === 的区别？

- `==`：两个等号称为等值符，当等号两边的值为相同类型时比较值是否相同，类型不同时会发生类型的自动转换，转换为相同的类型后再做比较。
- `===`：三个等号称为等同符，当等号两边的值为相同类型时，直接比较等号两边的值，值相同则返回 true；若等号两边值的类型不同时直接返回 false。也就是三个等号既要判断类型也要判断值是否相等。

## 为什么0.1+0.2 ! == 0.3，如何让其相等?

因为浮点数运算的精度问题。在计算机运行过程中，需要将数据转化成二进制，然后再进行计算。
因为浮点数自身小数位数的限制而截断的二进制在转化为十进制，就变成0.30000000000000004，所以在计算时会产生误差。

**解决方案**

- 将其先转换成整数，再相加之后转回小数。具体做法为先乘10相加后除以10

    ```jsx
    let x=(0.1*10+0.2*10)/10;
    console.log(x===0.3)
    ```

- 使用`number`对象的`toFixed`方法，只保留一位小数点。

    ```jsx
    
    (n1 + n2).toFixed(2)
    ```

## 判断数组的方式有哪些

- 通过`Object.prototype.toString.call()`做判断

    ```
    
    Object.prototype.toString.call(obj).slice(8,-1) === 'Array';
    ```

- 通过原型链做判断

    ```
    
    obj.__proto__ === Array.prototype;
    ```

- 通过ES6的`Array.isArray()`做判断

    ```
    
    Array.isArrray(obj);
    ```

- 通过`instanceof`做判断

    ```
    
    obj instanceof Array
    ```

## 对类数组对象的理解，如何转化为数组

类数组也叫**伪数组**，类数组和数组类似，但**不能调用数组方法**，常见的类数组有**arguments**、通过`document.getElements`获取到的内容等，这些类数组具有`length`属性。

**转换方法**

- 通过 `call` 调用数组的 `slice` 方法来实现转换

    ```
    
    Array.prototype.slice.call(arrayLike)
    ```

- 通过 `call` 调用数组的 `splice` 方法来实现转换

    ```
    
    Array.prototype.splice.call(arrayLike, 0)
    ```

- 通过 `apply` 调用数组的 `concat` 方法来实现转换

    ```
    
    Array.prototype.concat.apply([], arrayLike)
    ```

- 通过 `Array.from` 方法来实现转换

    ```
    
    Array.from(arrayLike)
    ```

**Array.propotype.slice.call()是什么**
比如`Array.prototype.slice.call(arguments)`这句里，就是把 `arguments` 当做当前对象。

也就是说 要调用的是 `arguments` 的 `slice` 方法，而`typeof arguments="Object"` 而不是 `Array`

它没有`slice`这个方法，通过这么`Array.prototype.slice.call`调用，JS的内部机制应该是 把`arguments`对象转化为`Array`

## 数组有哪些原生方法？

- 数组和字符串的转换方法：`toString()`、`toLocalString()`、`join()` 其中 `join()` 方法可以指定转换为字符串时的分隔符。
- 数组尾部操作的方法 `pop()` 和 `push()`，`push` 方法可以传入多个参数。
- 数组首部操作的方法 `shift()` 和 `unshift()` 重排序的方法 `reverse()` 和 `sort()`，`sort()` 方法可以传入一个函数来进行比较，传入前后两个值，如果返回值为正数，则交换两个参数的位置。
- 数组连接的方法 `concat()` ，返回的是拼接好的数组，不影响原数组。
- 数组截取办法 `slice()`，用于截取数组中的一部分返回，不影响原数组。
- 数组插入方法 `splice()`，影响原数组查找特定项的索引的方法，`indexOf()` 和 `lastIndexOf()` 迭代方法 `every()`、`some()`、`filter()`、`map()` 和`forEach()`方法
- 数组归并方法 `reduce()` 和 `reduceRight()` 方法
- **改变原数组的方法**：`fill()`、`pop()`、`push()`、`shift()`、`splice()`、`unshift()`、`reverse()`、`sort()`；
- **不改变原数组的方法**：`concat()`、`every()`、`filter()`、`find()`、`findIndex()`、`forEach()`、`indexOf()`、`join()`、`lastIndexOf()`、`map()`、`reduce()`、`reduceRight()`、`slice()`、`some()`。

## substring和substr的区别

它们都是字符串方法，用于截取字符串的一部分，主要区别在于参数不同

- `substring(startIndex, endIndex)`： 接收两个参数，一个起始索引和结束索引，来指定字符串范围，如果省略第二个参数，则截取到字符串末尾。
- `substr(startIndex, length)`： 接收两个参数，并返回从 `startIndex` 开始，长度为 `length` 的子字符串。如果省略第二个参数，则截取到字符串末尾。

```

const str = "Hello, World!";

console.log(str.substring(0, 5)); // 输出: "Hello"

console.log(str.substr(7, 5)); // 输出: "World"
```

## 如何遍历对象的属性？

- 遍历自身**可枚举的属性（可枚举、非继承属性）**：`Object.keys()` 方法,该方法会返回一个由给定对象的自身可枚举属性组成的数组。
- 遍历自身的**所有属性（可枚举、不可枚举、非继承属性）**：`Object.getOwnPropertyNames()`方法，该方法会返回一个由指定对象的所有自身属性组成的数组
- 遍历**可枚举的自身属性和继承属性**：`for ... in ...`

## 如何判断两个对象是否相等？

1. `Object.is(obj1, obj2)`，判断两个对象都引用地址是否一致，true 则一致，false 不一致。
2. 判断两个对象内容是否一致，思路是遍历对象的所有键名和键值是否都一致

    ① 判断两个对象是否指向同一内存

    ② 使用 `Object.getOwnPropertyNames` 获取对象所有键名数组

    ③ 判断两个对象的键名数组是否相等

    ④ 遍历键名，判断键值是否都相等

```jsx

javascript复制代码
function isObjValueEqual(a, b) {
  // 判断两个对象是否指向同一内存，指向同一内存返回 true  if (a === b) return true;
  // 获取两个对象的键名数组  let aProps = Object.getOwnPropertyNames(a);
  let bProps = Object.getOwnPropertyNames(b);
  // 判断两键名数组长度是否一致，不一致返回 false  if (aProps.length !== bProps.length) return false;
  // 遍历对象的键值  for (let prop in a) {
    // 判断 a 的键名，在 b 中是否存在，不存在，直接返回 false    if (b.hasOwnProperty(prop)) {
      // 判断 a 的键值是否为对象，是对象的话需要递归；      // 不是对象，直接判断键值是否相等，不相等则返回 false      if (typeof a[prop] === 'object') {
        if (!isObjValueEqual(a[prop], b[prop])) return false;      } else if (a[prop] !== b[prop]){
        return false      }
    } else {
      return false    }
  }
  return true;
}

```

## 强制类型转换和隐式类型转换有哪些

- 强制：
转换成字符串: toString()、String()
转换成数字：Number()、parseInt()、parseFloat()
转换成布尔类型：Boolean()
- 隐式：
拼接字符串：let str = 1 + "";

## JS 的预解析？

JS 代码的执行是由浏览器中的 JS 解析器来执行的，JS 解析器执行 JS 代码时，分为两个过程：`预解析过程`和`代码执行过程`。预解析分为`变量预解析（变量提升）`和`函数预解析（函数提升）`；代码执行是指按顺序从上至下执行。

- `变量提升`：把变量的声明提升到当前作用域的最前面，只提升声明，不提升赋值；
- `函数提升`：把函数的声明提升到当前作用域的最前面，只提升声明，不提升调用；

**函数表达式的写法不存在函数提升**

**函数提升优先级高于变量提升，即函数提升在变量提升之上，且不会被同名变量声明时覆盖，但是会被同名变量赋值后覆盖**

## Array.from() 和 Array.of() 的使用及区别？

`Array.from()`：将伪数组对象或可遍历对象转换为真数组。接受三个参数：input、map、context。

input：待转换的伪数组对象或可遍历对象；

map：类似于数组的 map 方法，用来对每个元素进行处理，将处理后的值放入返回的数组；

context：绑定map中用到的 this。

`Array.of()`：将一系列值转换成数组，会创建一个包含所有传入参数的数组，而不管参数的数量与类型，解决了`new Array()`行为不统一的问题。

## 原型和原型链？

**原型**

- **prototype** : js通过构造函数来创建对象，每个构造函数内部都会一个原型`prototype`属性，它指向另外一个对象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。
- **proto**: 当使用构造函数创建一个实例对象后，可以通过`__proto__`访问到`prototype`属性。
- **constructor**：实例对象通过这个属性可以访问到构造函数

**原型链**

每个实例对象都有一个`__proto__`属性指向它的构造函数的原型对象，而这个原型对象也会有自己的原型对象，一层一层向上，直到顶级原型对象`null`，这样就形成了一个原型链。

当访问对象的一个属性或方法时，当对象身上不存在该属性方法时，就会沿着原型链向上查找，直到查找到该属性方法位置。

原型链的顶层原型是`Object.prototype`，如果这里没有就只指向`null`

推荐阅读：

[轻松理解JS 原型原型链](https://juejin.cn/post/6844903989088092174)

[JavaScript 深入理解之原型与原型链](http://cavszhouyou.top/JavaScript%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E4%B9%8B%E5%8E%9F%E5%9E%8B%E4%B8%8E%E5%8E%9F%E5%9E%8B%E9%93%BE.html)

## 作用域、作用域链的理解?

**作用域**是一个变量或函数的可访问范围，作用域控制着变量或函数的可见性和生命周期。

1. **全局作用域**：可以全局访问
    - 最外层函数和最外层定义的变量拥有全局作用域
    - `window`上的对象属性方法拥有全局作用域
    - 为定义直接复制的变量自动申明拥有全局作用域
    - 过多的全局作用域变量会导致变量全局污染，命名冲突
2. **函数作用域**：只能在函数中访问使用哦
    - 在函数中定义的变量，都只能在内部使用，外部无法访问
    - 内层作用域可以访问外层，外层不能访问内存作用域
3. ES6中的**块级作用域**：只在代码块中访问使用
    - 使用ES6中新增的`let`、`const`什么的变量，具备块级作用域，块级作用域可以在函数中创建（由{}包裹的代码都是块级作用域）
    - `let`、`const`申明的变量不会变量提升，`const`也不能重复申明
    - 块级作用域主要用来解决由变量提升导致的变量覆盖问题

**作用域链：**
变量在指定的作用域中没有找到，会依次向一层作用域进行查找，直到全局作用域。这个查找的过程被称为作用域链。

推荐阅读：[JavaScript深入之词法作用域和动态作用域](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmqyqingfeng%2FBlog%2Fissues%2F3)

## 对闭包的理解已经它的使用场景

**闭包是指有权访问另一个函数作用域中变量的函数**，创建闭包的最常见的方式就是在一个函数内创建另一个函数，创建的函数可以访问到当前函数的局部变量。

**闭包优点：**

- 创建全局私有变量，避免变量全局污染
- 可以实现封装、缓存等

**闭包缺点：**

- 创建的变量不能被回收，容易消耗内存，使用不当会导致内存溢出
  - **解决：** 在不需要使用的时候把变量设为`null`

**使用场景：**

- 用于创建全局私有变量
- 封装类和模块
- 实现函数柯里化

闭包并不一定会造成内存泄漏，如果在使用闭包后变量没有及时销毁，可能会造成内存泄漏的风险。只要合理的使用闭包，就不会造成内存泄漏。

推荐阅读：

[我从来不理解JavaScript闭包，直到有人这样向我解释它](https://juejin.cn/post/6844903858636849159)

[JavaScript 深入理解之闭包](http://cavszhouyou.top/JavaScript%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E4%B9%8B%E9%97%AD%E5%8C%85.html)

**说说你对闭包的理解**

- 使用闭包主要是为了设计私有的方法和变量。闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。在 js 中，函数即闭包，只有函数才会产生作用域的概念
- 闭包 的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中
- 闭包的另一个用处，是封装对象的私有属性和私有方法
- **好处**：能够实现封装和缓存等；
- **坏处**：就是消耗内存、不正当使用会造成内存溢出的问题

## new 操作符的实现机制?

1. 首先创建了一个新的`空对象`
2. `设置原型`，将对象的原型设置为函数的`prototype`对象。
3. 让函数的`this`指向这个对象，执行构造函数的代码（为这个新对象添加属性）
4. 判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

```jsx
function myNew(context) {
  const obj = new Object();
  obj.__proto__ = context.prototype;
  const res = context.apply(obj, [...arguments].slice(1));
  return typeof res === "object" ? res : obj;
}
```

## for...in和for...of的区别

`for...in`和`for...of`都是`JavaScript`中的循环语句，而`for…of` 是ES6新增的遍历方式，允许遍历一个含有`iterator`接口的数据结构（数组、对象等）并且返回各项的值，和`ES3`中的`for…in`的区别如下

- `for…of` 遍历获取的是**对象的键值**，`for…in` 获取的是**对象的键名**；
- `for… in` 会遍历对象的**整个原型链**，性能非常差不推荐使用，而 `for … of` 只遍历当前对象不会遍历原型链；
- 对于数组的遍历，`for…in` 会返回数组中所有可枚举的属性(包括原型链上可枚举的属性)，`for…of` 只返回数组的下标对应的属性值；

**总结**：`for...in` 循环主要是为了遍历对象而生，不适用于遍历数组；`for...of` 循环可以用来遍历数组、类数组对象，字符串、`Set`、`Map` 以及 `Generator` 对象。

## 如何使用for...of遍历对象

**为什么不能遍历对象**

`for…of`是作为ES6新增的遍历方式，能被其遍历的数据内部都有一个**遍历器iterator接口**，而数组、字符串、`Map`、`Set`内部已经实现，普通对象内部没有，所以在遍历的时候会报错。想要遍历对象，可以给对象添加一个`Symbol.iterator`属性，并指向一个迭代器即可

在迭代器里面，通过`Object.keys`获取对象所有的`key`，然后遍历返回`key 、value`。

```jsx
var obj = {
    a:1,
    b:2,
    c:3
};
obj[Symbol.iterator] = function*(){
    var keys = Object.keys(obj);
    for(var k of keys){
        yield [k,obj[k]]
    }
};

for(var [k,v] of obj){
    console.log(k,v);
}

```

## ajax、axios、fetch的区别

**ajax**

- 基于原生`XHR`开发，`XHR`本身架构不清晰。
- 针对**MVC**编程，不符合现在前端MVVM的浪潮。
- 多个请求之间如果有先后关系的话，就会出现回调地狱
- 配置和调用方式非常混乱，而且基于事件的异步模型不友好。

**axios**

- 支持`Promise`API
- 从浏览器中创建`XMLHttpRequest`
- 从 `node.js` 创建 `http` 请求
- 支持请求拦截和响应拦截
- 自动转换`JSON`数据
- 客服端支持防止`CSRF/XSRF`

**fetch**

- 浏览器原生实现的请求方式，ajax的替代品
- 基于标准 `Promise` 实现，支持`async/await`
- `fetchtch`只对网络请求报错，对400，500都当做成功的请求，需要封装去处理
- 默认不会带`cookie`，需要添加配置项
- `fetch`没有办法原生监测请求的进度，而`XHR`可以。

## this 的理解？

1. 概念：`this`是 JS 的一个关键字，它是函数运行时，自动生成的一个内部对象，只能在函数内部使用，随着函数使用场合的不同，`this`的值会发生变化，但有一个总的原则：`this指的是调用函数的那个对象`。
2. this的指向：
① 作为普通函数执行时，`this`指向`window`，但在严格模式下`this`指向`undefined`。
② 函数作为对象里的方法被调用时，`this`指向该对象.
③ 当用`new`运算符调用构造函数时，`this`指向返回的这个对象。
④ 箭头函数的`this`绑定看的是`this`所在函数定义在哪个对象下，就绑定哪个对象。如果存在嵌套，则`this`绑定到最近的一层对象上。
⑤ `call()`、`apply()`、`bind()`是函数的三个方法，都可以显式的指定调用函数的`this`指向。

## call、apply、bind的区别以及手写实现

- 都可以用作改变`this`指向
- `call`和`apply`的区别在于传参，`call`、`bind`接收若干个参数列表。而`apply` 接收的是一个包含多个参数的数组。
- `call`、`apply`改变`this`指向后会立即执行函数，`bind`在改变`this`后返回一个函数，不会立即执行函数，需要手动调用。

- `call()`可以传递两个参数，第一个参数是指定函数内部中`this`的指向，第二个参数是函数调用时需要传递的参数。改变`this`指向后原函数会立即执行，且此方法只是临时改变`this`指向一次。

```jsx

// 实现call方法
Function.prototype.myCall = function (context) {
  // 判断调用对象  if (typeof this != "function") {
    throw new Error("type error");
  }
  // 首先获取参数  
  let args = [...arguments].slice(1);
  let res = null;
  // 判断context是否传入，如果没有，就设置为window  
  context = context || window;
  // 将被调用的方法置入context的属性  
  // this 即为要调用的方法  
  context.fn = this;
  // 执行要被调用的方法  
  res = context.fn(...args);
  // 删除手动增加的属性方法  
  delete context.fn;
  // 执行结果返回  
  return res;
}

```

- `apply()`接受两个参数，第一个参数是`this`的指向，第二个参数是函数接受的参数，以`数组`的形式传入。改变`this`指向后原函数会立即执行，且此方法只是临时改变`this`指向一次。

```jsx

// 实现apply方法
Function.prototype.myApply = function(context) {
  if (typeof this != "function") {
    throw new Error("type error");
  }
  let res = null;
  context = context || window;
  // 使用 symbol 来保证属性唯一  
  // 也就是保证不会重写用户自己原来定义在context中的同名属性  
  const fnSymbol = Symbol();
  context[fnSymbol] = this;
  // 执行被调用的方法  
  if (arguments[1]) {
    res = context[fnSymbol](...arguments[1]);
  } else {
    res = context[fnSymbol]();
  }
  delete context[fnSymbol];
  return res;
}

```

- `bind()`方法的第一参数也是`this`的指向，后面传入的也是一个参数列表(但是这个参数列表可以分多次传入)。改变`this`指向后不会立即执行，而是返回一个永久改变`this`指向的函数。

```jsx

// 实现bind方法
Function.prototype.myBind = function (context) {
  if (typeof this != "function") {
    throw new Error("type error");
  }
  let args = [...arguments].slice(1);
  const fn = this;
  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this : context,
      // 当前这个 arguments 是指 Fn 的参数      
      args.concat(...arguments)
    );
  };
}

```

---

[apply、call、bind](https://juejin.cn/post/6844903496253177863#heading-0)[实现 call](https://juejin.cn/post/6844904151227301901#heading-1)

## 箭头函数与普通函数的区别

- 箭头函数是**匿名函数**，不能作为构造函数，使用`new`关键字。
- 箭头函数没有`arguments`
- 箭头函数没有自己的`this`，会获取所在的上下文作为自己的`this`
- `call()`、`applay()`、`bind()`方法不能改变箭头函数中的`this`指向
- 箭头函数没有`prototype`
- 箭头函数不能用作`Generator`函数，不能使用`yeild`关键字

## 函数柯里化的实现

```jsx
// 函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

function curry(fn, args) {
  // 获取函数需要的参数长度
  let length = fn.length;

  args = args || [];

  return function() {
    let subArgs = args.slice(0);

    // 拼接得到现有的所有参数
    for (let i = 0; i < arguments.length; i++) {
      subArgs.push(arguments[i]);
    }

    // 判断参数的长度是否已经满足函数所需参数的长度
    if (subArgs.length >= length) {
      // 如果满足，执行函数
      return fn.apply(this, subArgs);
    } else {
      // 如果不满足，递归返回科里化的函数，等待参数的传入
      return curry.call(this, fn, subArgs);
    }
  };
}

// es6 实现
function curry(fn, ...args) {
  return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}

```

## 浅拷贝和深拷贝的实现？

`浅拷贝`：如果属性是基本类型，拷贝的就是基本类型的值；如果属性是引用类型，拷贝的就是内存地址。即浅拷贝是`拷贝一层`，深层次的引用类型则共享内存地址。常用的方法有：object.assign，扩展运算符等等

**object.assign与扩展运算符区别：**

- `Object.assign()`方法接收的第一个参数作为目标对象，后面的所有参数作为源对象。然后把所有的源对象合并到目标对象中。它会修改了一个对象，因此会触发 ES6 setter。
- 扩展操作符`（…）`使用它时，数组或对象中的每一个值都会被拷贝到一个新的数组或对象中。它不复制继承的属性或类的属性，但是它会复制ES6的 `symbols` 属性。

```jsx

var a = { count: 1, deep: { count: 2 } };
var b = Object.assign({}, a);// 或者
var c = {...a};// 实现一个浅拷贝
function shallowClone(obj) {
  const newObj = {};  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop];    }
  }
  return newObj
}

```

`深拷贝`：开辟一个新的栈，两个对象的属性完全相同，但是对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性。

```jsx
javascript复制代码;
/** * 深拷贝
 * @param {Object} obj 要拷贝的对象
 * @param {Map} map 用于存储循环引用对象的地址
 */

function deepClone(obj = {}, map = new Map()) {
  if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj);

  if (obj instanceof RegExp) return new RegExp(obj);
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (typeof obj !== "object") return obj;

  if (map.get(obj)) {
    return map.get(obj);
  }
  let result = {}; // 初始化返回结果
  if (
    obj instanceof Array ||
    Object.prototype.toString(obj) === "[object Array]"
  ) {
    // 加 || 的原因是为了防止 Array 的 prototype 被重写，Array.isArray 也是如此
    result = [];
  }
  // 防止循环引用
  map.set(obj, result);
  for (const key in obj) {
    // 保证 key 不是原型属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用
      result[key] = deepClone(obj[key], map);
    }
  }
  return result;
}
```

## 防抖和节流的区别，以及手写实现？

`防抖`：在规定时间内多次触发事件，事件处理函数只执行一次。

主要应用场景：搜索框搜索输入，用户最后一次输入完，再发送请求；手机号、邮箱验证输入检测

`节流`：事件触发后，规定时间内，事件处理函数不能再次被调用。也就是说在规定的时间内，函数只能被调用一次，且是最先被触发调用的那次。

主要应用场景：高频点击、表单重复提交等。

```jsx
javascript复制代码;
/*** 防抖函数 n 秒后再执行该事件，若在 n 秒内被重复触发，则重新计时   * @param func 要被防抖的函数
 * @param wait 规定的时间
 */
function debounce(func, wait) {
  let timeout;
  return function () {
    let context = this; // 保存this指向
    let args = arguments; // 拿到event对象
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
}
/*** 节流函数 n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效   * @param fn 要被节流的函数
 * @param wait 规定的时间
 */
function throttled(fn, wait) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, wait);
    }
  };
}
```

## EventLoop 事件循环？

js 是单线程运行的，当遇到一个异步事件后并不会一直等待其返回结果，而是会将这个事件挂起，继续执行执行栈中的其他任务。当一个异步事件返回结果后，js会将这个事件加入与当前执行栈不同的另一个队列--`事件队列（Task Queue）`。被放入事件队列不会立刻执行其回调，而是等待当前执行栈中的所有任务都执行完毕， 主线程处于闲置状态时，主线程会去查找事件队列是否有任务。如果有，那么主线程会从中取出排在第一位的事件，并把这个事件对应的回调放入执行栈中，然后执行其中的同步代码...，如此反复，这样就形成了一个无限的循环，这个过程被称为`事件循环（Event Loop）`。

实际上,异步任务之间并不相同，它们的执行优先级也有区别。异步任务分两类：`微任务（micro task`）和`宏任务（macro task）`。

微任务包括： `promise 的回调`、node 中的 `process.nextTick` 、对 Dom 变化监听的 `MutationObserver`。

宏任务包括： script 脚本的执行，`setTimeout` 、`setInterval` 和`setImmediate` 一类的定时事件，还有如 I/O 操作，UI 渲染等。

在一个事件循环中，异步事件返回结果后会被放到一个事件队列中。然而，根据这个异步事件的类型，这个事件实际上会被对应的`宏任务队列`或者`微任务队列`中去。并且在当前执行栈为空的时候，主线程会查看微任务队列是否有事件存在。如果不存在，那么再去宏任务队列中取出一个事件并把对应的回调加入当前执行栈；如果存在，则会依次执行队列中事件对应的回调，直到微任务队列为空，然后去宏任务队列中取出最前面的一个事件，把对应的回调加入当前执行栈...如此反复，进入循环。

**在当前执行栈执行完毕时会立刻先处理所有微任务队列中的事件，然后再去宏任务队列中取出一个事件。同一次事件循环中，微任务永远在宏任务之前执行**。

推荐阅读：

[详解JavaScript中的Event Loop（事件循环）机制](https://link.juejin.cn/?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F33058983)

[微任务、宏任务与Event-Loop](https://juejin.cn/post/6844903657264136200)

## 说说你对Promise的理解

`Promise`是异步编程的一种解决方案，将异步操作以同步操作的流程表达出来，避免了地狱回调。

`Promise`的实例有三个状态:

- `Pending`（初始状态）
- `Fulfilled`（成功状态）
- `Rejected`（失败状态）

`Promise`的实例有两个过程：

- `pending` -> `fulfilled` : **Resolved（已完成）**
- `pending` -> `rejected`：**Rejected（已拒绝）**

    注意：一旦从进行状态变成为其他状态就永远不能更改状态了，其过程是不可逆的。

`Promise`构造函数接收一个带有`resolve`和`reject`参数的回调函数。

- `resolve`的作用是将`Promise`状态从`pending`变为`fulfilled`，在异步操作成功时调用，并将异步结果返回，作为参数传递出去
- `reject`的作用是将`Promise`状态从`pending`变为`rejected`，在异步操作失败后，将异步操作错误的结果，作为参数传递出去

`Promise`的缺点：

- 无法取消 `Promise`，一旦新建它就会立即执行，无法中途取消。
- 如果不设置回调函数，`Promise`内部抛出的错误，不会反应到外部。
- 当处于`pending`状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

## Promise方法

- `promise.then()` 对应`resolve`成功的处理
- `promise.catch()`对应`reject`失败的处理
- `promise.all()`可以完成并行任务，将多个`Promise`实例数组，包装成一个新的`Promise`实例，返回的实例就是普通的`Promise`。有一个失败，代表该`Primise`失败。当所有的子`Promise`完成，返回值时全部值的数组
- `promise.race()`类似`promise.all()`，区别在于有任意一个完成就算完成
- `promise.allSettled()` 返回一个在所有给定的 `promise` 都已经 `fulfilled` 或 `rejected` 后的 `promise` ，并带有一个对象数组，每个对象表示对应的`promise` 结果。

## promise.all 和 promise.allsettled 区别

`Promise.all()` 和 `Promise.allSettled()` 都是用来处理多个 `Promise` 实例的方法，它们的区别在于以下几点：

- **all:** 只有当所有`Promise`实例都`resolve`后，才会`resolve`返回一个由所有`Promise`返回值组成的数组。如果有一个`Promise`实例`reject`，就会立即被拒绝，并返回拒绝原因。`all`是团队的成功才算，如果有一个人失败就算失败。
- **allSettled：** 等所有`Promise`执行完毕后，不管成功或失败， 都会吧每个`Promise`状态信息放到一个数组里面返回。

## promise 和 async await 有什么区别

- 建立在 promise 之上。所以，不能把它和回调函数搭配使用。但它会声明一个异步函数，并隐式地返回一个 Promise。因此可以直接 return 变量，无需使用 Promise.resolve 进行转换。
- 和 promise 一样，是非阻塞的。但不用写 then 及其回调函数，这减少代码行数，也避免了代码嵌套。而且，所有异步调用，可以写在同一个代码块中，无需定义多余的中间变量。
- 它的最大价值在于，可以使异步代码，在形式上，更接近于同步代码。
- 它总是与 await 一起使用的。并且，await 只能在 async 函数体内。
- await 是个运算符，用于组成表达式，它会阻塞后面的代码。如果等到的是 Promise 对象，则得到其 resolve 值。否则，会得到一个表达式的运算结果。

相比于 Promise，async await 能更好地处理 then 链

## 对 async、await 的理解，内部原理

`async/await`其实**是Generator 的语法糖**，它能实现的效果都能用`then`链来实现，它是为优化`then`链而开发出来的。通过`async`关键字声明一个异步函数， `await` 用于等待一个异步方法执行完成，**并且会阻塞执行**。
`async` 函数**返回的是一个 Promise 对象**，如果在函数中 `return` 一个变量，`async` 会把这个直接量通过 `Promise.resolve()` 封装成 `Promise` 对象。如果没有返回值，返回 `Promise.resolve(undefined)`

**内部原理**

generator 函数跟普通函数在写法上的区别就是，多了一个星号*，并且只有在 generator 函数中才能使用 yield，yield 相当于 generator 函数执行的中途暂停点，暂停后继续走就得使用到 next 方法，next 方法执行后会返回一个对象，对象中有 value 和 done 两个属性

- value：暂停点后面接的值，也就是 yield 后面接的值
- done：是否 generator 函数已走完，没走完为 false，走完为 true

## 宏任务与微任务

**先同步 再取出第一个宏任务执行 所有的相关微任务总会在下一个宏任务之前全部执行完毕  如果遇见就先微后宏**

每办理完一个业务，柜员就会问当前的客户，是否还有其他需要办理的业务。**（检查还有没有微任务需要处理）**
而客户明确告知说没有事情以后，柜员就去查看后边还有没有等着办理业务的人。**（结束本次宏任务、检查还有没有宏任务需要处理）**

**题目**

```jsx
console.log("1");

setTimeout(function () {
  console.log("2");
  new Promise(function (resolve) {
    console.log("3");
    resolve();
  }).then(function () {
    console.log("4");
  });
}, 0);
new Promise(function (resolve) {
  console.log("5");
  resolve();
}).then(function () {
  console.log("6");
});

setTimeout(function () {
  console.log("7");
  new Promise(function (resolve) {
    console.log("8");
    resolve();
  }).then(function () {
    console.log("9");
  });
  console.log("10");
}, 0);
console.log("11");

// 1 5 11 6 2 3 4 7 8 10 9
// 第一个setTimeout宏任务结束之后，会去检查队列中是否有微任务存在，如果有的话先执行微任务。（微任务优先级高）
```

## 你用过哪些设计模式

- **单例模式**：保证类只有一个实例，并提供一个访问它的全局访问点。
- **工厂模式**：用来创建对象，根据不同的参数返回不同的对象实例。
- **策略模式**：定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。
- **装饰器模式**：在不改变对象原型的基础上，对其进行包装扩展。
- **观察者模式**：定义了对象间一种一对多关系，当目标对象状态发生改变时，所有依赖它对对象都会得到通知。
- **发布订阅模式**： 基于一个主题/事件通道，希望接收通知的对象通过自定义事件订阅主题，被激活事件的对象（通过发布主题事件的方式被通知)。

## map和Object的区别

`map`和`Object`都是用键值对来存储数据，区别如下：

- **键的类型**：`Map` 的键可以是**任意数据类型**（包括对象、函数、`NaN` 等），而 `Object` 的键**只能是字符串**或者 `Symbol` 类型。
- **键值对的顺序**：`Map`中的键值对是按照插入的顺序存储的，而对象中的键值对则没有顺序。
- **键值对的遍例**：`Map` 的键值对可以使用 `for...of` 进行遍历，而 `Object` 的键值对需要手动遍历键值对。
- **继承关系**：`Map` 没有继承关系，而 `Object` 是所有对象的基类。

## map和weakMap的区别

它们是 `JavaScript` 中的两种不同的键值对集合，主要区别如下：

1. `map`的键可以是任意类型，`weakMap`键只能是对象类型。
2. `map` 使用常规的引用来管理键和值之间的关系，因此即使键不再使用，`map` 仍然会保留该键的内存。`weakMap` 使用弱引用来管理键和值之间的关系，因此如果键不再有其他引用，垃圾回收机制可以自动回收键值对。

## 哪些情况会导致内存泄漏

- 意外的全局变量：由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收。
- 被遗忘的计时器或回调函数：设置了 `setInterval` 定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留在内存中，而无法被回收。
- 脱离 `DOM` 的引用：获取一个 `DOM` 元素的引用，而后面这个元素被删除，由于一直保留了对这个元素的引用，所以它也无法被回收。
- 闭包：不合理的使用闭包，从而导致某些变量一直被留在内存当中。

## 对 rest 参数的理解

扩展运算符被用在函数形参上时，**它还可以把一个分离的参数序列整合成一个数组**：

```jsx

javascript复制代码
function mutiple(...args) {
  let result = 1;
  for (var val of args) {
    result *= val;
  }
  return result;
}
mutiple(1, 2, 3, 4) // 24
```

这里，传入 mutiple 的是四个分离的参数，但是如果在 mutiple 函数里尝试输出 args 的值，会发现它是一个数组：

```jsx

javascript复制代码
function mutiple(...args) {
  console.log(args)
}
mutiple(1, 2, 3, 4) // [1, 2, 3, 4]
```

这就是 … rest运算符的又一层威力了，它可以把函数的多个入参收敛进一个数组里。这一点**经常用于获取函数的多余参数，或者像上面这样处理函数参数个数不确定的情况。**

## **什么是虚拟列表？原理？**

虚拟列表是按需显示思路的一种实现，即**虚拟列表是一种根据滚动容器元素的可视区域来渲染长列表数据中某一个部分数据的技术。**

简而言之，虚拟列表指的就是「可视区域渲染」的列表。有三个概念需要了解一下：

- **滚动容器元素**：一般情况下，滚动容器元素是 `window` 对象。然而，我们可以通过布局的方式，在某个页面中任意指定一个或者多个滚动容器元素。只要某个元素能在内部产生横向或者纵向的滚动，那这个元素就是滚动容器元素考虑每个列表项只是渲染一些纯文本。在本文中，只讨论元素的纵向滚动。
- **可滚动区域**：滚动容器元素的内部内容区域。假设有 100 条数据，每个列表项的高度是 50，那么可滚动的区域的高度就是 100 * 50。可滚动区域当前的具体高度值一般可以通过(滚动容器)元素的 `scrollHeight` 属性获取。用户可以通过滚动来改变列表在可视区域的显示部分。
- **可视区域**：滚动容器元素的视觉可见区域。如果容器元素是 `window` 对象，可视区域就是浏览器的视口大小(即[视觉视口](https://user-images.githubusercontent.com/7871813/43363609-26e0d164-933b-11e8-85e5-1ec21d5ba398.png))；如果容器元素是某个 `div` 元素，其高度是 300，右侧有纵向滚动条可以滚动，那么视觉可见的区域就是可视区域。

**原理：**

整个虚拟列表划分为三个区域，分别是上缓冲区(0/2个元素)，可视区(n个元素)，下缓冲区(2个元素)。当我们滚动到一个元素离开可视区范围内时，就去掉上缓冲区顶上的一个元素，然后再下缓冲区增加一个元素。这就是虚拟列表的核心原理了。

实现虚拟列表就是在处理用户滚动时，要改变列表在可视区域的渲染部分，其具体步骤如下：

- 计算当前可见区域起始数据的 startIndex
- 计算当前可见区域结束数据的 endIndex
- 计算当前可见区域的数据，并渲染到页面中
- 计算 startIndex 对应的数据在整个列表中的偏移位置 startOffset，并设置到列表上
- 计算 endIndex 对应的数据相对于可滚动区域最底部的偏移位置 endOffset，并设置到列表上

数据分割：

```jsx
    //获取真实显示列表数据
    visibleData(){
      return this.listData.slice(this.start, Math.min(this.end,this.listData.length));
    }
```

滚动时处理：

```jsx
    scrollEvent() {
      //当前滚动位置
      let scrollTop = this.$refs.list.scrollTop;
      //此时的开始索引
      this.start = Math.floor(scrollTop / this.itemSize);
      //此时的结束索引
      this.end = this.start + this.visibleCount;
      //此时的偏移量
      this.startOffset = scrollTop - (scrollTop % this.itemSize);
    }
```

元素固定高度的虚拟滚动：

```jsx
<template>
  <div ref="list" class="infinite-list-container" @scroll="scrollEvent($event)">
    <div class="infinite-list-phantom" :style="{ height: listHeight + 'px' }"></div>
    <div class="infinite-list" :style="{ transform: getTransform }">
      <div ref="items"
        class="infinite-list-item" 
        v-for="item in visibleData" 
        :key="item.id"
        :style="{ height: itemSize + 'px',lineHeight: itemSize + 'px' }"
      >{{ item.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'VirtualList',
  props: {
    //所有列表数据
    listData:{
      type:Array,
      default:()=>[]
    },
    //每项高度
    itemSize: {
      type: Number,
      default:200
    }
  },
  computed:{
    //列表总高度
    listHeight(){
      return this.listData.length * this.itemSize;
    },
    //可显示的列表项数
    visibleCount(){
      return Math.ceil(this.screenHeight / this.itemSize)
    },
    //偏移量对应的style
    getTransform(){
      return `translate3d(0,${this.startOffset}px,0)`;
    },
    //获取真实显示列表数据
    visibleData(){
      return this.listData.slice(this.start, Math.min(this.end,this.listData.length));
    }
  },
  mounted() {
    this.screenHeight = this.$el.clientHeight;
    this.start = 0;
    this.end = this.start + this.visibleCount;
  },
  data() {
    return {
      //可视区域高度
      screenHeight:0,
      //偏移量
      startOffset:0,
      //起始索引
      start:0,
      //结束索引
      end:null,
    };
  },
  methods: {
    scrollEvent() {
      //当前滚动位置
      let scrollTop = this.$refs.list.scrollTop;
      //此时的开始索引
      this.start = Math.floor(scrollTop / this.itemSize);
      //此时的结束索引
      this.end = this.start + this.visibleCount;
      //此时的偏移量
      this.startOffset = scrollTop - (scrollTop % this.itemSize);
    }
  }
};
</script>

<style scoped>
.infinite-list-container {
  height: 100%;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.infinite-list-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.infinite-list {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  text-align: center;
}

.infinite-list-item {
  padding: 10px;
  color: #555;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
}
</style>
```
