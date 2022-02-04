# 水平垂直居中方案

以下方案均基于如下布局和基础样式：

```html
    <div id="parent">
      <div id="children"><span>基础样式</span>ioinn-Mori</div>
    </div>
```

```css
#parent {
  background: red;
  height: 100px;
  margin-bottom: 20px;
}

#children {
  background: blue;
}
```

目前情况下 推荐使用情况`Grid`与`Flex`

适用场景  `子元素宽高不固定、子元素宽高固定`  可以使用

- [Flex](#flex)
- [Grid](#grid)
- [相对定位-transform](#1-transform-相对定位)
- [绝对定位-transform](#1-transform)
- [table-cell](#table-cell)
- [line-height](#line-height)

适用场景： `子元素宽高固定`  可以使用

- [相对定位-transform](#1-transform-相对定位)
- [相对定位-calc](#2-calc-相对定位)
- [绝对定位-transform](#1-transform)
- [绝对定位-calc](#2-calc)
- [负外边距](#3-负外边距) 
- [自动外边距](#4-自动外边距)


## Flex

适用场景：子元素宽高不固定、子元素宽高固定

```css
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Grid

适用场景：子元素宽高不固定、子元素宽高固定

```css
.grid {
  display: grid;
  justify-content: center;
  align-items: center;
}
```

## 相对定位

### 1. transform​-相对定位

适用场景：子元素宽高不固定、子元素宽高固定

```css
.transform {
  display: inline-block;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

适用场景：子元素宽高固定

```css
.transform2 {
  width: 350px;
  height: 50px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-175px, -25px);
}
```

### 2. calc-相对定位

适用场景：子元素宽高固定

```css
.calc {
  width: 200px;
  height: 50px;
  position: relative;
  top: calc(50% - 25px);
  left: calc(50% - 100px);
}
```

## 绝对定位

### 1. transform​

适用场景：子元素宽高不固定、子元素宽高固定

```css
.positionParent {
  position: relative;
}
.positionChild {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

适用场景：子元素宽高固定

```css
.positionParent2 {
  position: relative;
}
.positionChild2 {
  width: 500px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-250px, -25px);
}
```

### 2. calc

适用场景：子元素宽高固定

```css
.positionParentCalc {
  position: relative;
}
.positionChildCalc {
  width: 400px;
  height: 50px;
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 200px);
}
```

### 3. 负外边距

适用场景：子元素宽高固定

```css
.positionParentOuter {
  position: relative;
}
.positionChildOuter {
  width: 500px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -250px;
}
```

### 4. 自动外边距

适用场景：子元素宽高固定

```css
.positionParentAuto {
  position: relative;
}
.positionChildAuto {
  width: 500px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
```

#### 4.1. 自动外边距 简写方式

其实等价于 我们一般的写法，简化了而已

```css
.positionParentAutoIn {
  position: relative;
}
.positionChildAutoIn {
  width: 600px;
  height: 50px;
  position: absolute;
  inset: 0;
  /* 等同于 `top: 0; right: 0; bottom: 0; left: 0;` */
  margin: auto;
}

.element {
  position: absolute;
  inset: 0; 
  /* 等同于 `top: 0; right: 0; bottom: 0; left: 0;` */
  inset: 1em 2em; 
  /* 等同于 `top: 1em; right: 2em; bottom: 1em; left: 2em;` */
  inset: 1em 2em 3em; 
  /* 等同于 `top: 1em; right: 2em; bottom: 3em; left: 2em;` */
  inset: 1em 2em 3em 4em; 
  /* 等同于 `top: 1em; right: 2em; bottom: 3em; left: 4em;` */
}
```

## table-cell

适用场景：子元素宽高不固定、子元素宽高固定

```css
.ParentTableCell {
  width: 800px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
.ChildTableCell {
  display: inline-block;
}
```

## line-height

前提：父元素高度固定  

适用场景：子元素宽高不固定、子元素宽高固定

```css
.ParentLineHeight {
  margin-top: 20px;

  line-height: 100px;
  text-align: center;
}

.ChildLineHeight {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
}
```
