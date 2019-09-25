/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 09:18:10
 * @LastEditTime: 2019-09-25 09:45:24
 * @LastEditors: Please set LastEditors
 */
//默认绑定
// function foo() {
//      console.log(this.a);
// }
// var a = 2; 
// foo(); // 2


//隐士绑定
// function foo(){
//     console.log(this.a)
// }
// var obj ={
//     a:2,
//     foo:foo
// }
// obj.foo() //2

//隐士丢失
// function foo(){
//     console.log(this.a)
// }
// var obj = {
//     a:2,
//     foo:foo
// }
// var bar = obj.foo;
// var a = 'opps,global'
// bar() //opps,global



//显示绑定call
// function foo(){
//     console.log(this.a)
// }
// var obj = {
//     a:2
// }
// foo.call(obj) //2

// 显示绑定-硬绑定
// function foo(){
//     console.log(this.a)
// }
// var obj = {
//     a:2
// }
// var bar = function(){
//     foo.call(obj)
// }
// bar()   //2
// setTimeout(bar,100) //2
// // bar.call(window) //2

//bind
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