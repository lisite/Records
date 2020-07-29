---
title: "es5 和 es6 的this指向"
description: "this是 JavaScript 语言的一个关键字"
slug: "this"
image: pic10.jpg
keywords: ""
categories: 
    - ""
    - ""
date: 2018-07-31T21:28:43-05:00
draft: false
---

this在前端开发中使用非常广泛，它的指向问题也一直被人提及，this也是前端同胞们在面试时被问到最多的问题之一，因为它和男人一样，不止一面...

## es5中的this

1、全局函数，函数中的this指向window，非严格模式下(this === window)，严格模式下为undifined。
```
    var x = 1;
    function father() {
        console.log(window.x);
        (function son() {console.log(this.x)})();
    }
    father();  //  结果为 1
```

2、函数作为对象的方法调用时，this指向这个上级对象。
```
    var father = {
        age: 50,
        son: function(){
            console.log(this); // 结果为father这个对象
        }
    }
```

3、使用bind、call、apply绑定的对象，this指的是绑定的对象，这三种方法可以改变this的指向。
```
    egA:
    var father = {
        age: 50,
        son: function(){
            setTimeout(function(){
                console.log(this) // this === window
            }, 1000)
        }
    }
    father.son()

    egB:
    var father = {
        age: 50,
        son: function(){
            setTimeout(function(){
                console.log(this) // this === father
            }.bind(this), 1000)
        }
    }
    father.son()
```

4、定时器setTimeout(function(){}, 1000)中的函数，是匿名函数，所以如果不手动绑定this，则指向window。

5、如果是使用new关键字来调用函数，那么函数内部的this就是一个全新的对象。

## 箭头函数(=>)中的this

es6中箭头函数的this，只取决于函数创建时的作用域，且无法更改。因为箭头函数里面根本就没有自身的this，而是引用外层的this。
```
    eg:
    var id=10;
    var father = {
        age: 1, 
        son: function(){
            setTimeout(()=>{
                console.log(id +","+ this.id);
        }, 1000)
    }};
    father.son.call({id: 666});  // 结果666，因为this只指向函数定义生效时所在的对象
    // call和apply这两个函数（非继承）都是在特定的作用域中调用函数,能改变函数的作用域

```

`ps: 箭头函数可以让this指向固定化，这种特性很有利于封装回调函数。`

