# bas 指南

> bilibili animation script, 新一代 bilibili 高级弹幕脚本语言

元素：文本对象、交换按钮、path 对象

动画：简单动画、串联动画、并联动画

## 文本对象

普通文本元素

### 定位

关键词：x y anchorX anchorY

:::demo
```js
def text tl {
    content = "左上"
    fontSize = 5%
    x = 0
    y = 0
    anchorX = 0
    anchorY = 0
}
def text tr {
    content = "右上"
    fontSize = 5%
    x = 100%
    y = 0
    anchorX = 1
    anchorY = 0
}
def text bl {
    content = "左下"
    fontSize = 5%
    x = 0
    y = 100%
    anchorX = 0
    anchorY = 1
}
def text br {
    content = "右下"
    fontSize = 5%
    x = 100%
    y = 100%
    anchorX = 1
    anchorY = 1
}
def text c {
    content = "BAS弹幕"
    fontSize = 10%
    x = 50%
    y = 50%
    anchorX = 0.5
    anchorY = 0.5
}
set c {
    y = 20%
} 5s
```
:::

### 透明度

关键词：alpha

取值范围 [0, 1]，0 完全透明, 1 完全不透明

:::demo
```js
def text c {
    content = "bilibili"
    fontSize = 10%
    x = 50%
    y = 50%
    anchorX = 0.5
    anchorY = 0.5
    alpha = 0
}
set c {
    alpha = 1
} 5s
```
:::

### 颜色

关键词：color

:::demo
```js
def text c {
    content = "bilibili"
    fontSize = 10%
    x = 50%
    y = 50%
    anchorX = 0.5
    anchorY = 0.5
    color = 0x80D8FF
}
set c {
    color = 0xFF9100
} 5s
```
:::

### 层次

关键词：zIndex

不可变

层次权重，值高的对象在上层

:::demo
```js
def text c {
    content = "bilibili"
    fontSize = 10%
    x = 50%
    y = 50%
    anchorX = 0.5
    anchorY = 0.5
    color = 0x80D8FF
    zIndex = 2
}
def text d {
    content = "bilibili"
    fontSize = 10%
    x = 55%
    y = 55%
    anchorX = 0.5
    anchorY = 0.5
    color = 0xFF9100
    zIndex = 1
}
set c {} 5s
set d {} 5s
```
:::

### 旋转

关键词：rotateX rotateY rotateZ

:::demo
```js
def text c {
    content = "bilibili"
    fontSize = 10%
    x = 50%
    y = 50%
    anchorX = 0.5
    anchorY = 0.5
    rotateX = 0
    rotateY = 0
    rotateZ = 0
}
set c {
    rotateX = 180
    rotateY = 180
    rotateZ = 180
} 5s
```
:::

### 所属层

关键词：parent

不可变

以父级对象作为舞台进行绘制

:::demo
```js
def text a {
    content = "□"
    fontSize = 40%
    x = 0
    y = 0
    color = 0xffff00
}
def text b {
    parent = "a"
    content = "□"
    fontSize = 20%
    x = 0
    y = 0
    color = 0xff00ff
}
def text c {
    parent = "b"
    content = "□"
    fontSize = 10%
    x = 0
    y = 0
    color = 0x00ffff
}
def text d {
    parent = "c"
    content = "•"
    fontSize = 5%
    alpha = 0.8
    x = 50%
    y = 0
    color = 0x0000ff
}
set a {
    x = 50%
    y = 0
} 2s
then set a {} 3s
set b {
    x = 50%
    y = 50%
} 3s
then set b {} 3s
set c {
    x = 50%
    y = 50%
} 3s
then set c {} 2s
set d {
    x = 100%
    y = 100%
} 1s
then set d {} 4s
```
:::

### 文本

关键词：content

不可渐变

:::demo
```js
def text c {
    content = "bilibili"
    fontSize = 10%
    x = 50%
    y = 50%
    anchorX = 0.5
    anchorY = 0.5
}
set c {} 2s
then set c {
    content = "干杯"
} 3s
```
:::

### 字号

关键词：fontSize

不可渐变

:::demo
```js
def text c {
    content = "bilibili"
    fontSize = 10%
    x = 50%
    y = 50%
    anchorX = 0.5
    anchorY = 0.5
}
set c {} 2s
then set c {
    fontSize = 20%
} 3s
```
:::

可以突破浏览器限制的最小字号12px

:::demo
```js
def text c {
    content = "bilibili"
    fontSize = 5
    x = 50%
    y = 50%
    anchorX = 0.5
    anchorY = 0.5
}
```
:::

### 描边

关键词：strokeWidth strokeColor

:::demo
```js
def text c {
    content = "bilibili"
    fontSize = 10%
    x = 50%
    y = 50%
    anchorX = 0.5
    anchorY = 0.5
    strokeWidth = 2
    strokeColor = 0x80D8FF
}
```
:::

### 阴影

关键词：textShadow

取值 0 或 1

:::demo
```js
def text c {
    content = "bilibili"
    fontSize = 10%
    x = 50%
    y = 50%
    anchorX = 0.5
    anchorY = 0.5
    textShadow = 0
}
```
:::

### 粗体

关键词：bold

取值 0 或 1

:::demo
```js
def text c {
    content = "bilibili"
    fontSize = 10%
    x = 50%
    y = 50%
    anchorX = 0.5
    anchorY = 0.5
    bold = 0
}
```
:::

### 生命周期

关键词：duration

取值为时间，形如 1h5m30s、5m30s、30s

:::demo
```js
def text c {
    content = "bilibili"
    fontSize = 10%
    x = 50%
    y = 50%
    anchorX = 0.5
    anchorY = 0.5
    duration = 10s
}
```
:::

## 交互按钮

带点击效果的交互按钮元素

### seek 按钮

此交互依赖视频，无法演示，请到播放器测试效果

:::demo
```js
def button c {
    text = "跳转到30分钟"
    x = 35%
    y = 45%
    fontSize = 5%
    textColor = 0xffffff
    fillColor = 0x80D8FF
    target = seek {
        time = 30m
    }
}
```
:::

### av 跳转按钮

:::demo
```js
def button c {
    text = "av1714157"
    x = 35%
    y = 45%
    fontSize = 5%
    textColor = 0xffffff
    fillColor = 0x80D8FF
    duration = 2s
    target = av {
        av = 1714157
        page = 1
        time = 20.5s500ms
    }
}
```
:::

### bangumi 跳转按钮

:::demo
```js
def button c {
    text = "第22话 春风"
    x = 35%
    y = 45%
    fontSize = 5%
    textColor = 0xffffff
    fillColor = 0x80D8FF
    duration = 2s
    target = bangumi {
        seasonId = 1699
        episodeId = 80041
        time = 1m30s
    }
}
```
:::

## path 对象

svg 图形元素

### path 对象

:::demo
```js
def path p {
    d = "M30.828,30.422 C30.564,30.423 30.297,30.446 30.036,30.418 C29.078,30.314 28.380,31.402 28.048,32.549 C27.749,33.582 26.614,34.110 25.592,34.004 C24.412,33.883 23.631,33.208 23.330,32.141 C23.149,31.496 22.602,30.996 22.000,31.000 C17.847,31.024 14.153,31.012 10.000,31.000 C9.522,30.999 9.012,31.457 8.872,32.020 C8.573,33.228 7.546,33.995 6.409,34.014 C5.232,34.034 4.209,33.287 3.866,32.033 C3.722,31.508 3.479,30.385 2.977,30.413 C2.331,30.449 1.681,30.431 1.033,30.420 C0.325,30.407 0.012,30.123 0.012,29.451 C0.017,22.618 0.027,15.786 0.045,8.953 C0.047,8.247 0.340,8.009 1.154,8.008 C4.491,8.004 7.828,8.006 11.165,8.006 C11.398,8.006 11.631,8.006 11.863,8.006 C11.884,7.949 11.906,7.891 11.927,7.833 C11.152,7.426 10.377,7.019 9.603,6.611 C8.318,5.933 7.031,5.257 5.748,4.576 C5.228,4.300 5.012,3.879 5.306,3.357 C5.603,2.829 6.094,2.797 6.607,3.067 C9.620,4.656 12.634,6.243 15.636,7.849 C16.405,8.261 17.789,8.014 18.284,7.318 C19.819,5.154 21.353,2.990 22.888,0.825 C22.942,0.749 22.994,0.670 23.050,0.595 C23.488,0.007 23.985,-0.152 24.437,0.195 C24.960,0.596 24.870,1.072 24.534,1.549 C23.911,2.432 23.288,3.314 22.666,4.197 C21.804,5.421 20.943,6.646 19.986,8.006 C20.378,8.006 20.629,8.006 20.880,8.006 C24.194,8.006 27.507,8.005 30.820,8.007 C31.832,8.008 31.988,8.161 31.989,9.145 C31.999,15.861 32.008,22.577 32.014,29.293 C32.015,30.253 31.838,30.416 30.828,30.422 ZM25.848,32.431 C26.378,32.396 26.630,30.992 26.791,30.461 C26.102,30.461 25.492,30.461 24.787,30.461 C24.984,31.045 25.257,32.471 25.848,32.431 ZM6.318,32.432 C6.905,32.468 7.182,31.049 7.357,30.466 C6.663,30.466 6.056,30.466 5.383,30.466 C5.517,31.015 5.793,32.400 6.318,32.432 ZM30.000,10.000 C20.412,10.000 11.532,10.000 2.000,10.000 C2.000,16.462 2.000,22.576 2.000,29.000 C11.579,29.000 20.420,29.000 30.000,29.000 C30.000,22.528 30.000,16.432 30.000,10.000 ZM4.000,13.882 C4.002,12.956 4.449,12.051 5.381,12.050 C12.494,12.049 19.041,11.998 26.154,12.000 C27.100,12.000 27.997,12.966 28.000,13.882 C28.012,18.300 27.993,21.700 28.000,26.118 C28.002,27.062 27.146,27.999 26.154,28.000 C22.608,28.002 19.545,28.000 16.000,28.000 C12.455,28.000 9.392,28.002 5.846,28.000 C4.814,27.999 3.999,27.135 4.000,26.118 C4.005,21.722 3.992,18.278 4.000,13.882 ZM26.297,25.981 C26.297,21.804 26.154,17.971 26.154,13.882 C19.290,13.882 12.649,13.882 5.846,13.882 C5.846,18.035 5.822,21.866 5.822,25.981 C12.673,25.981 19.463,25.981 26.297,25.981 ZM11.608,16.318 C11.666,16.292 11.738,16.297 11.980,16.262 C12.121,16.400 12.477,16.590 12.515,16.828 C12.558,17.106 12.409,17.591 12.194,17.700 C10.880,18.367 9.530,18.968 8.177,19.557 C7.765,19.736 7.312,19.601 7.207,19.161 C7.138,18.873 7.262,18.326 7.469,18.222 C8.823,17.537 10.222,16.940 11.608,16.318 ZM12.021,20.776 C12.277,20.767 12.608,21.121 12.793,21.391 C12.941,21.606 12.879,21.950 12.983,22.210 C13.180,22.705 13.551,23.176 14.099,23.060 C14.504,22.975 14.874,22.570 15.178,22.234 C15.328,22.068 15.303,21.740 15.339,21.483 C15.407,20.999 15.693,20.701 16.171,20.713 C16.608,20.724 16.892,20.988 16.948,21.461 C16.984,21.760 16.992,22.131 17.171,22.330 C17.457,22.648 17.869,23.032 18.238,23.044 C18.572,23.055 18.978,22.651 19.241,22.339 C19.416,22.132 19.406,21.766 19.461,21.467 C19.550,20.990 19.826,20.700 20.320,20.738 C20.811,20.776 21.069,21.092 21.050,21.585 C21.003,22.836 20.506,23.853 19.334,24.411 C18.242,24.932 17.222,24.708 16.328,23.907 C16.280,23.864 16.222,23.833 16.162,23.792 C15.890,23.981 15.638,24.200 15.349,24.351 C14.404,24.844 13.458,24.803 12.586,24.197 C11.624,23.527 11.195,22.551 11.281,21.416 C11.299,21.170 11.755,20.785 12.021,20.776 ZM18.997,16.260 C19.229,15.854 19.641,15.743 20.026,15.962 C21.555,16.833 23.067,17.734 24.569,18.648 C24.749,18.757 24.833,19.019 24.896,19.113 C24.913,19.856 24.298,20.260 23.732,19.941 C22.219,19.088 20.731,18.190 19.245,17.289 C18.853,17.051 18.770,16.656 18.997,16.260 Z"
    viewBox="0 0 32 34"
    x = 45%
    y = 45%
    scale = 3
    borderWidth = 1
    borderColor = 0xffffff
    borderAlpha = 0.8
    fillColor = 0x00a1d6
    fillAlpha = 0.8
}
```
:::

## 复杂动画

### 串联动画

1. 可以串联任意对象
1. 可以串联任意可变属性

:::demo
```js
def text c {
    content = "bilibili"
    fontSize = 10%
    x = 0
    y = 0
}
set c {
    x = 70%
    y = 50%
} 3s
then set c {
    x = 0
    y = 80%
} 2s

def text t1 {
    content = "bilibili1"
    fontSize = 5%
    y = 80%
}
def text t2 {
    content = "bilibili2"
    fontSize = 5%
    y = 80%
}
set t1 {
    x = 40%
} 1s
then set t2 {
    y = 20%
} 1s
then set t1 {
    x = 0
} 1s
then set t2 {
    y = 80%
} 1s
```
:::

### 并联动画

1. 可以并联任意对象
1. 并联相同属性时，以最后一次为准，之前冲突的动画会被忽略
1. 由于技术限制，x y rotateX rotateY rotateZ scale 视为相同属性

:::demo
```js
def text c {
    content = "bilibili"
    fontSize = 10%
    x = 0
    y = 10%
    color = 0x80D8FF
}
set tl {} 5s
set c {
    x = 70%
    y = 60%
} 5s
set c {
     color = 0xFF9100
} 5s
```
:::

> Game start!
  ![](http://7xoebg.com1.z0.glb.clouddn.com/170707152338.png)
