---
title: "小程序image标签模式"
description: "缩放 和 剪裁"
date: 2018-11-17T12:46:47+08:00
draft: false
---

image组件默认宽度300px、高度225px 注2：image组件中二维码/小程序码图片不支持长按识别。仅在wx.previewImage中支持长按识别。

mode 有效值：

  mode 有 13 种模式，其中 `4` 种是`缩放`模式，`9` 种是`裁剪`模式。



| 模   式|值|说明|
|----:| :-------:| :----|
| 缩放 | scaleToFill | 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素 |
| 缩放 | aspectFit | 保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。|
| 缩放 | aspectFill | 保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。  |
| 缩放 | widthFix  | 宽度不变，高度自动变化，保持原图宽高比不变  |
| 裁剪 | top/bottom/center/left/right/top left/top right/bottom left/bottom right/  | 不缩放图片，只显示图片的 ** 区域 |


> 在完全记得住之前，懒得每次去查官方文档，特此记录在案。。。