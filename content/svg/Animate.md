---
title: "Animate"
description: "SVG Animate"
draft: false
---

example:

```html
<svg width="200" height="200" x="0" y="0" viewBox="0 0 200 200" >
      <g stroke="#ffffff" fill="none" stroke-width="4">
            <circle cx="100" cy="100" r="10" stroke-opacity="0">
               <animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/>
          </circle>
            <circle cx="100" cy="100" r="10" stroke-opacity="0"></circle>
      </g>
</svg>
```


1. attributeName: I guess this is about which attribute you want to animate.
2. begin: After how much time, you start the animation.
3. dur: The duration of this animation.
4. value: The value of attribute, like 20 or 100 for radius.
5. calcMode( discrete | linear | paced | spline ): 指定動畫的進行速度模式，預設為 linear，也就是以同樣速度進行變化，如果遇到不支援的，則直接使用 discrete 的模式，直接跳到下一個狀態 ( from 直接跳到 to )，至於 paced ，則與 linear 相同，平均分配速度，不過就不能使用後面的 keyTimes 和 keySplines ，而 spline 就一定得用 keyTimes 和 keySplines 來配合運作。

6. keyTimes: keyTimes 就是指動畫的時間，根據 W3C 的規範，若要使用 keyTimes，則必須遵守幾個原則：
keyTimes 為 0-1 之間的浮點數。
keytimes 後面的值一定要大於前面的值。
若和 values 做搭配，values 裡面有幾個值，設定 keyTimes 就要設定幾個值。
如果動畫只有 from 和 to，keyTimes 就只能設定兩個值。
如果使用了 linear 和 spline，則 keyTimes 第一個值須為 0, last should be 1.
如果使用了 discrete，則 keyTimes 第一個值須為 0.
如果只有 from 和 to ，又設為無限重複 indefinite，則 keyTimes 將被忽略。
keytimes 定義錯誤則會被忽略 。
7. keySplines: keySplines 跟 CSS3 Cubic Bezier 其實超像的 ( 參考：CSS3 Cubic Bezier )，不過 keySplines 的彈性沒有 CSS3 Cubic Bezier 來得大，只能限定在 0-1 之間的範圍，而且必須與 keyTimes 一同使用，一個值裡面有四個數字，以分號隔開，比 keyTimes 少一個值，我們可由下圖看到藉由控制 keySplines，可以達到讓動畫加減速的效果。 ( 別忘記還要在 calcMode="spline" 的情形下使用)