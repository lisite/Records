---
title: "Svg"
description: "svg点击测试"
date: 2018-11-22T15:14:45+08:00
keywords: "svg svg点击事件 svg事件捕获 svg用img引用"
draft: false
---

### 这是一个用 img 标签引用的 svg 图片

<img src="/img/arrow.svg" />

![svg 图片](/img/arrow.svg)

<object type="image/svg+xml" data="/img/arrow.svg" role="img" aria-label="shapes animation">
  <div role="img" class="shapes-fallback" aria-label="shapes animation"></div>
</object>

## `点的试试？` 请问各位同学，哪个可以点击的了？

```html
<img src="/img/arrow.svg" />

![svg 图片](/img/arrow.svg)

<object
  type="image/svg+xml"
  data="/img/arrow.svg"
  role="img"
  aria-label="shapes animation"
>
  <div role="img" class="shapes-fallback" aria-label="shapes animation"></div>
</object>
```

`firefox` 和 `safari` 没有很友好的显示出点击时的过渡动画
