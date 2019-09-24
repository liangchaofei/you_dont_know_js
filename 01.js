/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 09:43:37
 * @LastEditTime: 2019-09-24 09:56:57
 * @LastEditors: Please set LastEditors
 */
// function foo(a){
//     console.log(a) //2
// }
// foo(2)

// function foo2(a){
//     console.log(a+b)
// }
// var b=2;
// foo2(2)

function foo3(a){
    console.log(a+b) //ReferenceError: b is not defined
    b=a
}
foo3(2)