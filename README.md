<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 22:29:04
 * @LastEditTime: 2019-09-24 10:43:35
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