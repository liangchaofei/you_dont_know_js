/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 09:12:46
 * @LastEditTime: 2019-09-25 09:15:57
 * @LastEditors: Please set LastEditors
 */
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