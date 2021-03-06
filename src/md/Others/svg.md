---
title: SVG
description: 可缩放矢量图形（Scalable Vector Graphics，SVG），是一种用于描述基于二维的矢量图形的，基于 XML 的标记语言。
meta: HTML
---

# SVG

可缩放矢量图形（Scalable Vector Graphics，SVG），是一种用于描述基于二维的矢量图形的，基于 XML 的标记语言。本质上，SVG 相对于图像，就好比 HTML 相对于文本。

## SVG 的基本属性

- 最值得注意的一点是元素的渲染顺序。SVG 文件全局有效的规则是“后来居上”，越后面的元素越可见。

- web 上的 svg 文件可以直接在浏览器上展示

## 坐标定位

- 坐标系统是：以页面的左上角为(0,0)坐标点，坐标以像素为单位，x 轴正方向是向右，y 轴正方向是向下。

- 基本上，在 SVG 文档中的 1 个像素对应输出设备（比如显示屏）上的 1 个像素。

- SVG 也可以定义绝对大小（比如使用“pt”或“cm”标识维度）同时 SVG 也能使用相对大小，只需给出数字，不标明单位，输出时就会采用用户的单位。

- viewBox 用来选取要展示的内容，并按比例展示到整个画布

## 基本形状

- 矩形 rect

```svg
<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>
```

- 圆形

```
<circle cx="25" cy="75" r="20"/>
```

- 椭圆

```
<ellipse cx="75" cy="75" rx="20" ry="5"/>
```

- 线条

```
<line x1="10" x2="50" y1="110" y2="150"/>
```

- 折线

```
<polyline points="60 110, 65 120, 70 115, 75 130, 80 125, 85 140, 90 135, 95 150, 100 145"/>
```

- 多边形

```
<polygon points="50 160, 55 180, 70 180, 60 190, 65 205, 50 195, 35 205, 40 190, 30 180, 45 180"/>
```

- 路径

```
<path d="M 20 230 Q 40 205, 50 230 T 90230"/>
```

## 路径

- path 元素的形状是通过属性 d 定义的，属性 d 的值是一个“命令+参数”的序列

- 每一个命令都有两种表示方式，一种是用大写字母，表示采用绝对定位。另一种是用小写字母，表示采用相对定位

- 直线命令：M，L，H，V，Z

- 曲线命令：C，S，Q，T

- 弧形命令：A

## 填充和边框

- fill 填充颜色

- stroke 描边
