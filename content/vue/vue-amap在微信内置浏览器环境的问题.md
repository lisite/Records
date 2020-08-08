---
title: "vue-amap在微信内置浏览器环境的问题"
slug: "vue"
descripts: "vue-amap 微信 h5 公众号开发"
date: 2020-08-07T15:30:26
draft: false
---

### vue-amap 介绍

> [`vue-amap`](https://github.com/ElemeFE/vue-amap/)是饿了么团队用vue2.0+封装的地图插件, 使前端更好的使用高德地图
> [👇文档地址](https://elemefe.github.io/vue-amap/#/)

#### 问题描述

> 在vue-router设置为history模式的时候, 直接访问需要定位的页面, 可以正确的获取到定位
> 但是如果使用`router.push`进行页面的跳转会出现定位无效的情况, 但是用户肯定是通过内部的页面跳转去获取地址定位信息

代码如下:

```html
<!-- 在vue的template中使用vue-amap插件 -->
<el-amap vid="amap" :zoom="16" :center="mapCenter" :plugin="plugins" class="amap-demo">
  <el-amap-marker
    v-for="(marker, index) in markers"
    :key="index"
    :position="marker.position"
    :icon="marker.icon"
    :events="marker.events"
    :visible="marker.visible"
    :draggable="marker.draggable"
    clickable
    :vid="index">
  </el-amap-marker>
</el-amap>
```

```js
// 这是获取定位的方法
getLocation() {
  const that = this;
  const PLUGIN = [
    {
      pName: 'Geolocation',
      events: {
        init(o) {
          // o 是高德地图定位插件实例
          o.getCurrentPosition((status, result) => {
            console.warn('status, result', status, result);
            if (result && result.position) {
              that.geoLoc = result.position;
              // that.lat = result.position.lat;
              const {
                street, streetNumber, province, city, district,
              } = result.addressComponent;
              that.searchOption.city = city;
              that.defaultVal = `${province}${city}${district}${street}${streetNumber}`;
              that.mapCenter = [that.geoLoc.lng, that.geoLoc.lat];
              // self.loaded = true;
              that.$nextTick();
            } else {
              that.defaultVal = '北京市';
            }
            that.showLoading = false;
          });
        },
      },
    },
  ];
  this.plugins = PLUGIN;
},
```

#### 解决问题

在页面跳转的时候使用router的resolve方法跳转

```js
// resolve页面跳转可用新页面打开
const newRouter = this.$router.resolve({ name: 'addressList' });
window.open(newRouter.href, '_self');
```
