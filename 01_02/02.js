/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 21:28:09
 * @LastEditTime: 2019-09-24 21:36:17
 * @LastEditors: Please set LastEditors
 */
// function foo(num){
//     console.log('foo：'+ num)
//     this.count++
// }
// foo.count = 0;
// var i;
// for(i=0;i<10;i++){
//     if(i>5){
//         foo(i)
//     }
// }
// console.log(foo.count)


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