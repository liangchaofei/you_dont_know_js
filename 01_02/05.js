/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 13:06:09
 * @LastEditTime: 2019-09-25 13:09:04
 * @LastEditors: Please set LastEditors
 */
//显示绑定比隐式绑定优先级高
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