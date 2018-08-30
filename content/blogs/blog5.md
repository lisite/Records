---
title: "HTML5 API"
description: "HTML5 持续让前端发挥更大的可能"
slug: "HTML5"
# image: html5.svg
keywords: "HTML5 api"
categories: 
    - ""
    - ""
date: 2018-04-16T22:42:51-05:00
draft: false
---

### 1、Camera API

通过Camera API,你可以使用手机的摄像头拍照,然后把拍到的照片发送给当前网页.这些操作主要是通过一个input元素来实现的,其中该元素的type属性必须为“file”,accept属性要允许图片格式,这样才能知道这个文件选择框是用来选择图片的,完整的HTML结构看起来是这样的:
```
    <input type="file" id="take-picture" accept="image/*">
```
<input type="file" id="take-picture" accept="image/*">  

建议在移动端测试一下

### 2、`<video>`和`<radio>`语义话标签
视频和音频播放标签


### 3、`<output>`标签：用户计算或者操作的结果

```
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
    <input type="range" name="b" value="50" /> +
    <input type="number" name="a" value="10" /> =
    <output name="result"></output>
</form>
```
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
    <input type="range" name="b" value="50" /> +
    <input type="number" name="a" value="10" /> =
    <output name="result"></output>
</form>

### `<progress>`显示一项任务的完成进度

```
<progress value="388" max="666">388</progress>
```
<progress style="background: #fff" value="388" max="666">388</progress>

谷歌上样式显示还不错，IE10支持，Andriod未实现



