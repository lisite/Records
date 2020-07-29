---
title: "继承"
description: "类式继承、构造函数继承、组合继承、寄生继承"
date: 2018-08-16T08:31:58+08:00
image: js-jc.png
draft: false
---

> 对象A继承对象B的属性和方法，也可能继承对象B的原型对象的属性和方法，或者两者兼而有之，可以使用`instanceof`来判断某个对象是否继承了某个类

#### 1、类继承
```
// 类式继承，将父类的实例赋给子类的原型
function SuperClass(name){
  this.name = name;
  this.books = ['java', 'javascript', 'english']
}
// 为父类添加原型方法
SuperClass.prototype.showName = function(){
  console.log(name);
}

function SubClass(){
  this.age = 20;
}

SubClass.prototype = new SuperClass();

原理：通过原型链，实例化父类以后，新创建的对象复制了父类构造函数中的属性和方法，同时新建对象的_proto_指向父类的原型对象，然后将新建的对象赋值给子类的原型，从而让子类继承父类的原型属性和方法，同时继承父类构造函数中的属性和方法。
优点：子类的实例拥有父类的所有属性和方法（构造函数中和原型对象中）
缺点：1、如果父类构造函数中的值为引用类型，则子类的实例会同时指向这个值
     2、实例化父类的时候无法对父类的构造函数内的属性进行初始化
```


#### 2、构造函数继承
```
通过call方法改变子类的作用域，即通过改变this指向来继承父类构造函数中的属性和方法
function SuperClass(name){
  this.name = name;
  this.books = ['java', 'javascript', 'english']
}
// 为父类添加原型方法
SuperClass.prototype.showBooks = function(){
  console.log(books);
}

function SubClass(age){
  this.age = 20;
  SuperClass.call(this, age);
}

原理：通过call方法（可以改变函数的作用域）将子类的的变量在父类中执行一遍，由于父类中是给this绑定属性的，因此子类继承了父类的共有属性
优点：每个实例单独的拥有父类的属性和方法，这样的方式不会像类式继承，子类的所有实例都会指向同一个引用类型的属性
缺点：无法继承父类原型属性和方法，违背了代码复用的原则
```




#### 3.混合继承
```
// 同时使用👆，1和2 的继承方式进行组合
function SuperClass(name){
  this.name = name;
  this.books = ['java', 'javascript', 'english']
}
// 为父类添加原型方法
SuperClass.prototype.showBooks = function(){
  console.log(books);
}

function SubClass(age){
  this.age = 20;
  SuperClass.call(this, age);
}

SubClass.prototype = new SuperClass();

优点：完美避免了1和2的缺点
缺点：将父类构造函数执行了两次

```


#### 4.原型继承
> 借助原型prototype可以根据已有的对象创建一个新的对象，同时不必创建新的自定义对象类型。 --道格拉斯·克罗克福德

```
// 对类式继承的一个封装
function inheritObject(o){
  // 声明一个过渡函数对象
  function F(){}

  F.prototype = o;
  return new F();
}
```

#### 5.单继承和多继承

```
// 多继承
Object.prototype.mix = function(){
  var i=0,   // 从第一个参数开始
      len = arguments.length,
      arg;
      for(;i<len;i++){
        arg = arguments[i];
        for(var property in arg){
          this[property] = arg[property];
        }
      }
}

```
