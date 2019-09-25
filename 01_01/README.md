<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 22:29:04
 * @LastEditTime: 2019-09-24 20:58:39
 * @LastEditors: Please set LastEditors
 -->
# 01

## 作用域
+ 引擎
  - 负责整个js程序的编译和执行过程
+ 编译器
  - 负责语法分析及代码生成
+ 作用域
  - 负责收集并维护所有声明的标识符组成的一系列查询，并实施一套严格的规则，确定当前执行的代码对这些标识符的访问权限
+ 总结：
  - 变量的赋值操作会执行两个动作，首先编译器会在当前作用域声明一个变量（如果之前没有声明过），然后在运行时引擎会在作用域中查找该变量，如果能找到就会对它赋值

## 编译器
+ LHS和RHS
  - 是一个赋值操作对左侧和右侧
  - 当变量出现在赋值操作当左侧时进行LHS操作，出现在右侧时进行RHS查询
  - 可以理解为，赋值操作的目标是谁(LHS)，谁是赋值操作的源头(RHS)
```js
    function foo(a){
        console.log(a) //2
    }
    foo(2)
```
## 作用域嵌套
+ 当一个块或函数嵌套在另一个块或函数中时，就发生了作用域的嵌套。因此，在当前作用 域中无法找到某个变量时，引擎就会在外层嵌套的作用域中继续查找，直到找到该变量， 或抵达最外层的作用域(也就是全局作用域)为止。
```js
    //  变量b没有在foo2作用域找到，就去上层作用域（全局作用域查找），结果找到了
    function foo2(a){
        console.log(a+b) //4
    }
    var b=2;
    foo2(2)
```

### 异常
+ 变量b是个为定义的，在任何作用域也找不到，就会出现异常
```js
    function foo3(a){
        console.log(a+b) //ReferenceError: b is not defined
        b=a
    }
    foo3(2)
```


# 02
## 词法作用域
+ 一级一级查找
+ 词法作用域在函数声明位置确定
```js
    function foo(a){
        var b = a +2;
        function bar(c){
            console.log(a,b,c) //2,4,12
        }
        bar(b* 3)
    }
    foo(2)
```

## 欺骗词法
+ 在运行时确定词法作用域

### eval
+ 使用eval(str)达到欺骗，引擎一直找不到外部的变量b
```js
    function foo2(str,a){
        eval(str) //欺骗
        console.log(a,b) // 1,3
    }
    var b = 2;
    foo2('var b = 3;',1)
```


# 03

## 函数中的作用域
+ 函数外部无法访问函数内部变量
+ 把一些变量和函数可以放到函数内部，变成私有属性和方法
```js
    function dosomething(a){
        function fosomethindlese(a){
            return a - 1;
        }
        var b;
        b = a + fosomethindlese(a * 2)
        console.log(b * 3)
    }
    dosomething(2) //15
```

## 函数作用域
+ 函数自执行
```js
    (function foo(){
        var a= 3;
        console.log(a) //3
    })()
```

+ 匿名函数表达式
```js
    setTimeout(function(){
        console.log('我是一个匿名函数表达式')
    },1000)
```
+ 具名函数表达式
```js
    setTimeout(function foo(){
        console.log('我是一个具名函数表达式')
    },1000)
```

+ 立即执行函数表达式
```js
    var a = 2;
    (function foo(){
        var a= 3;
        console.log(a) //3
    })()
    console.log(a) //2
```
+ IIFE进阶用法：把他们当作函数调用并传递参数进去
```js
    var a = 2;
    (function IIFE( global ) {
        var a = 3;
        console.log( a ); // 3 
        console.log( global.a ); // 2
    })( window );
    console.log( a ); // 2
```

## 块作用域
```js
    for(var i = 0;i<10;i++){
        console.log(i)
    }
```


# 04
## 变量提升
+ 先声明，后赋值
```js
    a = 2;
    var a;
    console.log(a)//2

    console.log(b) // undefeind
    var b = 2;
```
+ 函数声明会被提升，函数表达式不会被提升
```js
    foo()
    function foo(){
        console.log(c) //undefined
        var c = 2;
    }
```  
  - 上面foo函数先调用，后声明。所以进行了函数声明提升
  - 上面foo函数可以分解成这个
  ```js
    function foo(){
        var c;
        console.log(c) //undefined
        c = 2;
    }
    foo()
  ```
  - 函数表达式不会被提升
  ```js 
    bar()
    var bar = function(){
        console.log(111) //TypeError: bar is not a function
    }
  ```

+ 函数优先
  - 函数声明提升大于变量提升


# 05

## 闭包
+ 当函数可以记住并访问所在当词法作用域时，就产生了闭包。即使函数是在当前词法作用域之外执行。
```js
    function foo(){
        var a = 2;
        function bar(){
            console.log(a) //2
        }
        bar()
    }
    foo()
```
+ 下面是闭包
  - 闭包使得函数可以继续访问定义时的 词法作用域
```js   
    function foo(){
        var a =2 ;
        function bar(){
            console.log(a) //2
        }
        return bar;
    }
    var baz = foo()
    baz()
    //bar函数作用域就是闭包
```
+ 再看一个
```js
    function foo(){
        var a = 2;
        function baz(){
            console.log(a)
        }
        bar(baz)
    }
    function bar(fn){
        fn() //这就是闭包
    }
```

## 循环和闭包
```js
    for(var i=0;i<=5;i++){
        setTimeout(function(){
            console.log(i) //6 6 6 6 6 6
        },i*1000)
    }
```
+ 打出来的不是0-5，而是6个6.怎么解决那？
+ iife解决不了
```js
    for(var i=0;i<=5;i++){
        (function(){
            setTimeout(() => {
                console.log(i)//6 6 6 6 6 6
            }, i*1000);
        })()
    }
```
+ 需要有变量j存储i，可行
```js
    for(var i=0;i<=5;i++){
        (function(){
            setTimeout(() => {
                console.log(i) //0 1 2 3 4 5
            }, i*1000);
        })()
    }
```
+ let 
```js
    for(let i=0;i<=5;i++){
        setTimeout(function(){
            console.log(i) //0 1 2 3 4 5
        },i*1000)
    }
```

## 模块