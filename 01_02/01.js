/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 20:59:04
 * @LastEditTime: 2019-09-24 21:17:00
 * @LastEditors: Please set LastEditors
 */

function identify() {
    return this.name.toUpperCase();
}
function speak() {
    var greeting = "Hello, I'm " + identify.call(this); console.log(greeting);
}
var me = {
    name: "Kyle"
};
var you = {
    name: "Reader"
};
identify.call(me); // KYLE
identify.call(you); // READER
speak.call(me); // Hello, 我是 KYLE speak.call( you ); // Hello, 我是 READER