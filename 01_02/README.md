<!--
 * @Description: In User Settings Edit 
 * @Author: your name
 * @Date: 2019-09-24 20:58:58
 * @LastEditTime: 2019-09-26 09:15:42
 * @LastEditors: Please set LastEditors
 -->
# 01_关于this
+ this实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用
### this例子
```js
function foo(num){
    console.log('foo：'+ num)
    this.count++
}
foo.count = 0;
var i;
for(i=0;i<10;i++){
    if(i>5){
        foo(i)
    }
}
console.log(foo.count) //0

//打出来的是0

// 办法1
function foo(num) {
    console.log("foo: " + num);
    // 记录 foo 被调用的次数
    data.count++;
}
var data = {
    count: 0
};
var i;
for (i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i);
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
console.log(data.count); // 4


// 办法2
function foo(num) {
    console.log("foo: " + num);
    // 记录 foo 被调用的次数
    foo.count++;
}
foo.count = 0;
var i;
for (i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i);
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
// foo 被调用了多少次? 
console.log(foo.count); // 4

// 办法3:强制 this 指向 foo 函数对象:
function foo(num) {
    console.log("foo: " + num);
    // 记录 foo 被调用的次数
    // 注意，在当前的调用方式下(参见下方代码)，this 确实指向 foo this.count++;
}
foo.count = 0; var i;
for (i = 0; i < 10; i++) {
    if (i > 5) {
        // 使用 call(..) 可以确保 this 指向函数对象 foo 本身
        foo.call(foo, i);
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
// foo 被调用了多少次? 
console.log(foo.count); // 4
```
## this全面解析
### 调用位置
```js
    function baz(){
        // 当前调用栈是:baz
        // 因此，当前调用位置是全局作用域
        console.log('baz')
        bar()// <-- bar 的调用位
    }
    function bar(){
        // 当前调用栈是baz -> bar
        // 因此，当前调用位置在 baz 中
        console.log('bar')
        foo() //<-- foo 的调用位置
    }
    function foo(){
        // 当前调用栈是 baz -> bar -> foo 
        // 因此，当前调用位置在 bar 中
        console.log('foo')
    }
    baz() //baz bar foo  <-- baz 的调用位置
```

### this绑定规则
#### 默认绑定
+ 独立函数调用
```js
    //默认绑定
    function foo() {
        console.log(this.a);
    }
    var a = 2; 
    foo(); // 2
```
+ 严格模式下，this会绑定到undefined
```js
    function foo() { "use strict";
         console.log( this.a );
     }
    var a = 2;
    foo(); // TypeError: this is undefined
```

#### 隐式绑定
+ 必须一个对象内包含一个指向函数的数学，并通过这个属性间接引用函数，从而把this间接绑定到这个对象上
+ this隐士绑定到obj对象
```js
    function foo(){
        console.log(this.a)
    }
    var obj ={
        a:2,
        foo:foo
    }
    obj.foo() //2
```
+ 隐式丢失
  - this绑定到了foo,等于window
```js
    function foo(){
        console.log(this.a)
    }
    var obj = {
        a:2,
        foo:foo
    }
    var bar = obj.foo;
    var a = 'opps,global'
    bar() //opps,global
```
+ 参数传递也是一种隐式绑定
```js
    function foo() { 
        console.log( this.a );
    }
    function doFoo(fn) {
    // fn 其实引用的是 foo 
    fn(); // <-- 调用位置!
    }
    var obj = { 
        a: 2,
        foo: foo 
    };
    var a = "oops, global"; // a 是全局对象的属性 
    doFoo( obj.foo ); // "oops, global"
```

#### 显示绑定
+ call
+ apply
+ 第一个参数是一个对象，会把这个对象绑定到this，接着在函数调用时绑定这个this
```js
    function foo(){
        console.log(this.a)
    }
    var obj = {
        a:2
    }
    foo.call(obj) //2
```
+ 显示绑定仍有绑定丢失问题，通过一下办法解决
+ 硬绑定(bind)
```js
    function foo(sth){
        console.log(this.a,sth)
        return this.a + sth
    }
    var obj = {
        a:2
    }
    var bar = foo.bind(obj)
    var b = bar(3)  //2 3
    console.log(b)  //5
```

#### new绑定
```js
    function Foo(a){
        this.a= a
    }
    var bar = new Foo(2)
    console.log(bar.a) //2
```

### 优先级
+ 默认绑定最低
+ 显示绑定比隐式绑定高
```js
    function foo(){
        console.log(this.a)
    }
    var obj1= {
        a:2,
        foo:foo
    }
    var obj2 = {
        a:3,
        foo:foo
    }
    obj1.foo()  //2
    obj2.foo()  //3

    obj1.foo.call(obj2) //3
    obj2.foo.call(obj1) //2
```
+ new绑定比隐式绑定高
```js
    function foo(sth){
        this.a = sth;
    }
    var obj1= {
        foo:foo,
    }
    var obj2 = {}
    obj1.foo(2)
    console.log(obj1.a) //2

    obj1.foo.call(obj2, 3)
    console.log(obj2.a) //3

    var bar = new obj1.foo(4)
    console.log(obj1.a) //2
    console.log(bar.a)  //4
```
### 判断this
+ 1. 函数是否在new中调用(new绑定)?如果是的话this绑定的是新创建的对象。
```js
    var bar = new foo()
```
+ 2. 函数是否通过call、apply(显式绑定)或者硬绑定调用?如果是的话，this绑定的是 指定的对象
```js
    var bar = foo.call(obj2)
```
+ 3. 函数是否在某个上下文对象中调用(隐式绑定)?如果是的话，this 绑定的是那个上 下文对象。
```js   
    var bar = obj1.foo()
```
+ 4. 如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到undefined，否则绑定到 全局对象。
```js
    var bar = foo()
```

### 被忽略的this
+ 如果把 null 或者 undefined 作为 this 的绑定对象传入 call、apply 或者 bind，这些值,在调用时会被忽略，实际应用的是默认绑定规则:
```js   
    function foo() { 
        console.log( this.a );
    }
    var a = 2;
    foo.call( null ); // 2
```