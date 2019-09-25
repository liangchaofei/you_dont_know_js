/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 20:14:51
 * @LastEditTime: 2019-09-24 20:25:10
 * @LastEditors: Please set LastEditors
 */
a = 2;
var a;
console.log(a)//2

console.log(b) // undefeind
var b = 2;


foo()
function foo(){
    console.log(c)
    var c = 2;
}
bar()
var bar = function(){
    console.log(111) //TypeError: bar is not a function
}