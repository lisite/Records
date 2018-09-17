---
title: "{react, redux} 🆚 {vue, vueX}"
description: "都是单页面应用，虚拟DOM提升渲染效率"
slug: "tempus"
image: Vuejs-vs-Reactjs.jpg
keywords: ""
categories: 
    - ""
    - ""
date: 2018-03-31T22:26:13-05:00
draft: false
---


## 关于React：

> React 最初的目的是使用 JavaScript 创建大型的，快速响应的网络应用。

优点：

1、它让你在编写代码的时候同时也在思考你的应用。

#### 只言片语：

组件的本质是一个函数，而组件的属性会被以一个对象的形式（props）传递给该函数。

在Reactjs中，组件的名称必须是大写开头，而通常首字母大写的函数声明意味着这是一个类或者构造函数；

ps: 类声明和函数声明的区别在于，类的声明不会被提升（但是`类的表达式`还是存在`提升`的问题）

#### Reactjs组件生命周期：

初始化:组件状态，获取父组件传的值 => 挂载  => 渲染中 => 渲染结束 => 组件销毁（卸载）

生命周期钩子：

![reactjs组件的生命周期](/img/reactjs-lifecycle.png)


## 关于Vue：

#### vuejs实例生命周期如图：

![vue实例的生命周期](/img/lifecycle.png)

#### vuex
![vuex状态管理](/img/vuex.png)
