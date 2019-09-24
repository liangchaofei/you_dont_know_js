/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 10:14:17
 * @LastEditTime: 2019-09-24 10:39:34
 * @LastEditors: Please set LastEditors
 */
// function dosomething(a){
//     function fosomethindlese(a){
//         return a - 1;
//     }
//     var b;
//     b = a + fosomethindlese(a * 2)
//     console.log(b * 3)
// }
// dosomething(2) //15


// (function foo(){
//     var a= 3;
//     console.log(a) //3
// })()


// 立即执行函数表达式
// var a = 2;
// (function foo(){
//     var a= 3;
//     console.log(a) //3
// })()
// console.log(a) //2


//iife高级
// var a = 2;
// (function IIFE( global ) {
// var a = 3;
// console.log( a ); // 3 console.log( global.a ); // 2
//      })( window );
//      console.log( a ); // 2


// 块作用域
for(var i = 0;i<10;i++){
    console.log(i)
}