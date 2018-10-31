---
title: "Vue在生产环境打包出现一片空白的问题"
slug: "vue"
date: 2018-08-23T15:30:26
image: vue.png
draft: false
---

### vue在生产环境打包时会出现页面空白的问题

1、首先先确定是不是路径的问题，如果找不到css文件和js文件，那么要修改config下面的index.js中bulid模块导出的路径
```

assetsPublicPath: '/' => assetsPublicPath: './' 

```

2、确认不是资源路径的问题以后再看history的配置问题

正式环境打包时，在路由中使用了`mode = history`的配置，会导致资源加载都ok的情况下页面空白，解决办法：打包前去掉mode的配置即可

如果需要设置网址无#，则需要改以下两个地方：
```javascript
export default new Router({
  mode: 'history',
  base: '/', //  1、子路径需要加上去
  routes: [
    {
      path:'/acount',
      name:'account',  //  2、name需要加上去
      component: account
    }
  ]
})
```

