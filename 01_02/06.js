/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 13:09:11
 * @LastEditTime: 2019-09-25 13:12:46
 * @LastEditors: Please set LastEditors
 */
// new绑定比隐式绑定高
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