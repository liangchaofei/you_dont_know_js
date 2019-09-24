/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 10:01:45
 * @LastEditTime: 2019-09-24 10:12:29
 * @LastEditors: Please set LastEditors
 */
// function foo(a){
//     var b = a +2;
//     function bar(c){
//         console.log(a,b,c) //2,4,12
//     }
//     bar(b* 3)
// }
// foo(2)

function foo2(str,a){
    eval(str) //欺骗
    console.log(a,b) // 1,3
}
var b = 2;
foo2('var b = 3;',1)