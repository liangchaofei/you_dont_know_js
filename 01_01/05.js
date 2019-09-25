/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 20:26:51
 * @LastEditTime: 2019-09-24 20:53:21
 * @LastEditors: Please set LastEditors
 */
// function foo(){
//     var a = 2;
//     function bar(){
//         console.log(a) //2
//     }
//     bar()
// }
// foo()

// function foo(){
//     var a =2 ;
//     function bar(){
//         console.log(a) //2
//     }
//     return bar;
// }
// var baz = foo()
// baz()


// function foo(){
//     var a = 2;
//     function baz(){
//         console.log(a)
//     }
//     bar(baz)
// }
// function bar(fn){
//     fn() //这就是闭包
// }



// for(let i=0;i<=5;i++){
//     setTimeout(function(){
//         console.log(i) //6 6 6 6 6 6
//     },i*1000)
// }

// for(var i=0;i<5;i++){
//     (function(){
//         setTimeout(() => {
//             console.log(i)
//         }, i*1000);
//     })()
// }


for(var i=0;i<5;i++){
    (function(){
        var j =i;
        setTimeout(() => {
            console.log(j)
        }, j*1000);
    })()
}