<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-26 09:19:09
 * @LastEditTime: 2019-09-26 09:34:39
 * @LastEditors: Please set LastEditors
 -->
# 03 对象

+ 使用字符串的属性时，js会自动把字符串转成String对象,数字同样也是 
+ 可计算属性名
```js
    var prefix = 'foo'
    var obj = {
        [`${prefix}`]: 'hello'
    }
```
+ 深拷贝方法：
```js
    var newObj = JSON.parse(JSON.stringify(someobj))
```
+ 浅拷贝
```js
    Object.assign()
```
+ 对象的属性描述符
```js
    var myObject = { 
        a:2
    };
     Object.getOwnPropertyDescriptor( myObject, "a" );
     // {
    // value: 2,
    // writable: true,
    // enumerable: true,
    // configurable: true 
    // }
```