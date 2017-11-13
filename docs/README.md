# BAS

> Bilibili Animation Script

## 文本对象

### 示例

``` javascript
def text t {
    content = "你好bilibili!"
    fontSize = 10%
    fontFamily = "黑体"
    x = 50%
    y = 0
    alpha = 0.8
    color = 0xffffff
    textShadow = 0
    bold = 0
    rotateX = 0
    rotateY = 0
    rotateZ = 0
    strokeWidth = 1
    strokeColor = 0xfefefe
    anchorX = 1
    anchorY = 0.5
    zIndex = 3
}

def text y {
    content = "子对象"
    parent = 't'
    fontSize = 5%
}
```

### 属性

| 属性名         | 值类型    | 是否必须 | 默认值      | 是否可变 | 是否渐变 | 说明                                       |
| ----------- | ------ | ---- | -------- | ---- | ---- | ---------------------------------------- |
| content     | string | 是    | -        | 是    | 否    | 文本内容 |
| x           | number | 否    | 0        | 是    | 是    | x 坐标，可以为百分比值 |
| y           | number | 否    | 0        | 是    | 是    | y 坐标，可以为百分比值 |
| alpha       | number | 否    | 1        | 是    | 是    | 透明度，取值范围 [0, 1]，0 完全透明, 1 完全不透明 |
| color       | number | 否    | 0xffffff | 是    | 是    | 文本颜色 |
| bold        | number | 否    | 1        | 否    | 否    | 是否加粗 |
| textShadow  | number | 否    | 1        | 否    | 否    | 是否字体阴影 |
| strokeWidth | number | 否    | 0        | 否    | 否    | 描边宽度 |
| strokeColor | number | 否    | 0x000000 | 否    | 否    | 描边颜色 |
| anchorX     | number | 否    | 0        | 否    | 否    | 锚点，位置为长度的百分比 |
| anchorY     | number | 否    | 0        | 否    | 否    | 锚点，位置为宽度的百分比 |
| zIndex      | number | 否    | 0        | 否    | 否    | 层次权重，值越高的对象在上层 |
| rotateX     | number | 否    | 0        | 是    | 是    | X轴旋转 |
| rotateY     | number | 否    | 0        | 是    | 是    | Y轴旋转 |
| rotateZ     | number | 否    | 0        | 是    | 是    | Z轴旋转 |
| parent      | text   | 否    | -        | 否    | 否    | 所属层 |
| fontSize    | number | 否    | 25       | 否    | 否    | 文本字体大小，可以为百分比（在HTML5平台，最终字体大小为当前屏幕宽度*字体百分比px） |
| fontFamily  | string | 否    | ""       | 否    | 否    | 文本字体，默认值为平台默认字体。如果字体不存在时，使用平台默认字体 |

## 交互按钮

### 示例

```javascript
// 按钮使用统一样式
def button b { // 跳转按钮
    text      = "av10000"
    x         = 100
    y         = 50
    fontSize  = 25
    textColor = 0x000000
    fillColor = 0xffffff
    fillAlpha = 0.8
    duration  = 2s
    target    = av {  // 规则(Web) //www.bilibili.com/video/av10000/index_1.html?t=150
        av   = 10000  // 必填属性, 视频 av 号
        page = 1      // 可选属性, 分P数，默认是1, 表示第一P
        time = 2m30s // 可选属性, 打开视频后立即跳到该视频的进度, 默认是零
    }
}

def button c { // seek按钮
    text = "跳转到80s"
    x = 100
    y = 100
    target = seek { time = 80s }
}

def button d { // seek按钮
    text = "bangumi6339"
    x = 100
    y = 100
    target = bangumi { // 规则(Web) //bangumi.bilibili.com/anime/6339/play?t=90#113360
        seasonId   = 6339  // 必填属性, 番剧id
        episodeId = 113360 // 必填属性, 番剧分集id
        time = 1m30s // 可选属性, 打开视频后立即跳到该视频的进度, 默认是零
    }
}
```

### 属性

| 属性名       | 值类型                      | 是否必须 | 默认值      | 是否可变 | 是否渐变 | 说明 |
| --------- | ------------------------ | ---- | -------- | ---- | ---- | ------- |
| text      | string                   | 否    | ""       | 是    | 否    | 按钮标签    |
| fontSize  | number                   | 否    | 25       | 是    | 否    | 按钮字体大小  |
| textColor | number                   | 否    | 0x000000 | 否    | 否    | 按钮文字颜色  |
| textAlpha | number                   | 否    | 1        | 否    | 否    | 按钮字体透明度 |
| fillColor | number                   | 否    | 0xffffff | 否    | 否    | 按钮填充颜色  |
| fillAlpha | number                   | 否    | 1        | 否    | 否    | 按钮填充透明度 |
| duration  | time                     | 否    | 0        | 否    | 否    | 按钮显示时间  |
| target    | av object or seek object | 是    | -        | 否    | 否    | 按钮功能    |
| x         | number                   | 否    | 0        | 是    | 是    | 按钮x坐标   |
| y         | number                   | 否    | 0        | 是    | 是    | 按钮y坐标   |


### av object

| 属性名  | 值类型    | 是否必须 | 默认值  | 是否可变 | 是否渐变 | 说明 |
| ---- | ------ | ---- | ---- | ---- | ---- | ------- |
| av   | number | yes  | -    | -    | -    | 视频av号   |
| page | number | no   | 1    | -    | -    | 视频分P号   |
| time | time   | no   | 0s   | -    | -    | 视频开始播放点 |

### bangumi object

| 属性名       | 值类型    | 是否必须 | 默认值  | 是否可变 | 是否渐变 | 说明 |
| --------- | ------ | ---- | ---- | ---- | ---- | ------- |
| seasonId  | number | yes  | -    | -    | -    | 番剧id    |
| episodeId | number | yes  | -    | -    | -    | 番剧分集id  |
| time      | time   | no   | 0s   | -    | -    | 视频开始播放点 |

### seek object

| 属性名  | 值类型  | 是否必须 | 默认值  | 是否可变 | 是否渐变 | 说明 |
| ---- | ---- | ---- | ---- | ---- | ---- | -------- |
| time | time | 是    | -    | -    | -    | seek目标时间 |

## 动画

### 简单动画

#### SET语法

```
SetExpr
    : SetExpr then SetExpr
    | { SetExpr+ }
    | set id {
        (id = (value_expr | [value_expr, string]))*
    } time_expr (, string)?
```

#### 示例

``` javascript
set t {
    x = 100
    y = [100, "easeOut"]
    alpha = 1
} 1s, "linear"
```

#### 说明

```javascript
set 目标对象 {
    可渐变属性 = 目标值
    可渐变属性 = [目标值, "插值类型"]
} 动画持续, "区块默认的插值类型"
```
set 语句块定义了一个对象的一组属性在相同时间内的动画。

##### 属性

只有目标对象的可渐变属性才有正常的动画效果。对可变属性但是非渐变属性设置新值会立即生效。对其他属性设值或者不存在的属性设值将被忽略。

原则上某一属性在一个 set 语句中最多只能出现一次。在实现上，如果多次出现，以最后一次为准。

##### 目标值

目标值应该与属性所需的值为同一类型。可渐变属性的可以用一个数组的形式，特别指定该属性的插件类型。

##### 插值类型

区块默认的插值类型写在区块动画时间之后，与区块动画时间用逗号隔开。区块默认的插值类型可以省略。在省略时，默认的插值类型为 "linear"。可渐变属性的可以用一个数组的形式，特别指定该属性的插件类型。

### 串联动画

#### 示例

```javascript
set a {
    alpha = 1
} 1s, "easeIn"
then set a {
    alpha = 0
} 1s, "easeOut"
```
#### 说明

```javascript
set语句(组) then set语句(组) then set语句(组) ...
```
后一语句动画在前语句动画完毕后开始。

### 并联动画

```javascript
set a {
    alpha = 0
} 1s
set b {
    alpha = 1
} 1s
```
#### 说明

```
set语句
set语句
...
```

没有then连接的连续出现的set语句定义的动画并行执行。

##### 总时间

并行语句的总时间是子语句的最长时间。一般情况下子语句的动画时间是相同的。如果子语句动画提前执行完，则等待总其他并行动画。

##### 同一目标属性同时更改

在并行语句中出现同一目标属性在多个子语句中有更改，最后更改为准。之前的属性动画忽略。

##### 语句组

```
{
    set语句
    set语句
    ...
}
```

并行语句用大括号包围后，成为一个set语句单位。