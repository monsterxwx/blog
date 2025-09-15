
## css3 有哪些新特性？

圆角    （border-radius:8px）
多列布局  （multi-column layout）
阴影和反射  （Shadow\Reflect）
文字特效    （text-shadow）
文字渲染    （Text-decoration）
线性渐变    （gradient）
旋转      （transform）
缩放，定位，倾斜，动画，多背景

## style 标签写在 body 后与 body 前有什么区别？

1. 写在 body 标签前有利于浏览器逐步渲染：
resources downloading --> cssDOM + DOM --> Render Tree --> layout --> paint
2. 写在 body 标签后：
由于浏览器以逐行方式对 HTML 文档进行解析，当解析到写在尾部的样式表（外联或写在 style 标签）会导致浏览器停止之前的渲染，等待加载且解析样式完成后重新渲染；在 windows 的 IE 下可能出现样式失效导致的页面闪烁问题。

## 用纯 CSS 创建一个三角形的原理是什么？

采用的是相邻边框连接处的均分原理。将元素的宽高设为 0，只设置 border，把任意三条边隐藏掉（颜色设为
transparent），剩下的就是一个三角形。

```html
#demo {
  width: 0;
  height: 0;
  border-width: 20px;
  border-style: solid;
  border-color: transparent transparent red transparent;
}
```

## CSS选择器及优先级

1. 选择器
    - id选择器(#myid)
    - 类选择器(.myclass)
    - 属性选择器(a[rel="external"])
    - 标签选择器(div, h1, p)
    - 伪类选择器(a:hover, li:nth-child)
    - 伪元素选择器(p::after)
    - 相邻选择器（h1 + p）
    - 子选择器(ul > li)
    - 后代选择器(li a)
    - 通配符选择器(*)
2. 优先级
    - `!important`
    - 内联样式（1000）
    - ID选择器（0100）
    - 类选择器 / 属性选择器 / 伪类选择器（0010）
    - 标签选择器 / 伪元素选择器（0001）
    - 关系选择器 / 通配符选择器（0000）

带 !important 标记的样式属性优先级最高；样式表的来源相同时：`!important > 行内样式> ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性`

## CSS 优先级算法如何计算

判断优先级时，首先我们会判断一条属性声明是否有权重，也就是是否在声明后面加上了!important。一条声明如果加上了权重，那么它的优先级就是最高的，前提是它之后不再出现相同权重的声明。如果权重相同，我们则需要去比较匹配规则的特殊性。
一条匹配规则一般由多个选择器组成，一条规则的特殊性由组成它的选择器的特殊性累加而成。

选择器的特殊性可以分为四个等级

第一个等级是`行内样式`，为 1000

第二个等级是 `id 选择器`，为 0100

第三个等级是`类选择器、伪类选择器和属性选择器`，为 0010

第四个等级是`元素选择器和伪元素选择器`，为 0001。
规则中每出现一个选择器，就将它的特殊性进行叠加，这个叠加只限于对应的等级的叠加，不会产生进位。选择器特殊性值的比较是从左向右排序的，也就是说以 1 开头的特殊性值比所有以 0 开头的特殊性值要大。
比如说特殊性值为 1000 的的规则优先级就要比特殊性值为 0999 的规则高。如果两个规则的特殊性值相等的时候，那么就会根据它们引入的顺序，后出现的规则的优先级最高。

## rgba() 和 opacity 设置透明度的区别是什么？

rgba() 和 opacity 都能实现透明效果

不同是 opacity 作用于元素，以及元素内的所有内容的透明度；

而 rgba() 只作用于元素的颜色或其背景色，设置 rgba() 透明的元素的子元素不会继承透明效果。

## 浏览器是如何解析 css 选择器的？

`从右向左解析的。`若从左向右匹配，发现不符合规则，需要回溯，会损失很多性能。若从右向左匹配，先找到所有的最后节点，对于每一个节点，向上寻找其父节点直到查找至根元素或满足条件的匹配规则，则结束这个分支的遍历。

在 css 解析完毕后，需将解析结果 css 规则树和 DOM树一起进行分析建立一颗渲染树，最终用来进行绘图。

## 单行、多行文本溢出

**单行**

```css

css复制代码
overflow: hidden; // 溢出隐藏
text-overflow: ellipsis; // 溢出用省略号显示
whtie-space: nowrap; //规定段落中的文本不进行换行

```

**多行**

```

CSS复制代码
overflow:hidden
text-overflow: ellipsis;     // 溢出用省略号显示
display:-webkit-box;         // 作为弹性伸缩盒子模型显示。
-webkit-box-orient:vertical; // 设置伸缩盒子的子元素排列方式：从上到下垂直排列
-webkit-line-clamp:3;        // 显示的行数
```

## display 有哪些值？说明他们的作用

| 值 | 作用 |
| --- | --- |
| block | 块类型。默认宽度为父元素宽度，可设置宽高，换行显示。 |
| none | 元素不显示，并从文档流中移除。 |
| inline | 行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。 |
| inline-block | 默认宽度为内容宽度，可以设置宽高，同行显示。 |
| list-item | 像块类型元素一样显示，并添加样式列表标记。 |
| table | 此元素会作为块级表格来显示。 |
| inherit | 规定应该从父元素继承 display 属性的值。 |
|  |  |

## display: none 和 visibility: hidden 两者的区别

1. display: none 隐藏后不占用文档流；而 visibility: hidden 会占用文档流。
2. visibility 具有继承性，给父元素设置 "visibility: hidden"，子元素也会继承该属性，但如果重新给子元素设置 "visibility: visible"，则子元素又会显示出来。
3. visibility: hidden 不会影响计数器的计数，虽然隐藏了，但计数器依然运行着。
4. 在 css3 中 transition 支持 visibility 属性，但不支持 display。因为 transition 可以延迟执行，因此配合 visibility 使用纯 css 延时显示效果可以提高用户体验。
5. display: none 会引起回流（重排）和重绘；visibility: hidden 会引起重绘。

## 隐藏元素的方式

- `display：none`：元素在文档中不存在，不会占据位置。
- `visibility： hidden`：元素在文档中的位置还保留，仍然占据空间。
- `opacity：0`：将透明度设置为0。
- `z-index`：负值：直接将元素放置在最下层，利用其他元素来遮盖。
- `position：absolute`：将元素定位到可视区域以外。

## 简述 transform，transition，animation 的作用

1. `transform`：描述了元素的静态样式，本身不会呈现动画效果，可以对元素进行旋转 rotate、扭曲 skew、缩放 scale 和移动 translate 以及矩阵变形 matrix。`transition` 和 `animation` 两者都能实现动画效果。`transform` 常配合`transition` 和 `animation` 使用。
2. `transition`：样式过渡，从一种效果逐渐改变为另一种效果，它是一个合写属性。transition: transition-property transition-duration transition-timing-function transition-delay 从左到右，依次是：过渡效果的css属性名称、过渡效果花费时间、速度曲线、过渡开始的延迟时间 `transition` 通常和 hover 等事件配合使用，需要由事件来触发过渡。
3. `animation`：动画，有 `@keyframes` 来描述每一帧的样式。

区别：

- `transform` 仅描述元素的静态样式，常配合`transition` 和 `animation` 使用。
- `transition` 通常和 hover 等事件配合使用；`animation` 是自发的，立即播放。
- `animation` 可以设置循环次数。
- `animation` 可以设置每一帧的样式和时间，`transition` 只能设置头尾。
- `transition` 可以与 js 配合使用， js 设定要变化的样式，`transition` 负责动画效果。

## line-height 如何继承？

- 父元素的 `line-height` 是具体数值，则子元素 `line-height` 继承该值。
- 父元素的 `line-height` 是比例值，如'2'，则子元素 `line-height` 继承该比例。
- 父元素的 `line-height` 是百分比，则子元素 `line-height` 继承的是父元素的 font-size * 百分比 计算出来的值。

## CSS 中哪些属性可以继承？

一般具有继承性的属性有：

- 字体相关的属性，font-size 和 font-weight 等。
- 文本相关的属性，color 和 text-align 等。
- 表格的一些布局属性、列表属性如 list-style 等
- 还有光标属性 cursor、元素可见性 visibility。

当一个属性不是继承属性的时候，我们也可以通过将它对应属性的值设置为 `inherit`来使它从父元素那获取同名的属性值继承。

## 如何让 chrome 支持 10px 的文字？

1. font-size: 12px; -webkit-transform: scale(0.84);
2. font-size: 20px; -webkit-transform: scale(0.5);

## position 属性的值有哪些？

1. `static`：默认定位。元素出现在正常的文档流中（忽略top，bottom，left，right 或 z-index声明）
2. `relative`：相对定位。如果对一个元素进行相对定位，将出现在它所在的位置上。然后，可以通过设置垂直或水平位置，使其“相对于”它的起点进行移动。使用相对定位时，无论是否移动，元素仍然占据原来的空间；移动元素会导致其覆盖其他元素。
3. `absolute`：绝对定位。元素的位置相对于最近的已定位的父元素，如果元素没有已定位的父元素，则相对于根元素（即 html 元素）定位。绝对定位的元素会脱离文档流，不占据空间，会与其他元素重叠。
4. `fixed`：固定定位。元素的位置相对于浏览器窗口是固定位置，即使窗口滚动它也不会移动。固定定位的元素会脱离文档流，不占据空间，会与其他元素重叠。
5. `sticky`：粘性定位。粘性定位可以被认为是相对定位和固定定位的混合，元素在跨越特定阈值前为相对定位，之后为固定定位。top，right，buttom，left，必须指定这四个阈值中的一个，才可以使粘性定位生效，否则行为与其相对定位相同。
6. `inherit`：规定应该从父元素继承 position 属性的值。

## css 盒模型？

页面渲染时，dom 元素所采用的 **布局模型**称之为盒模型。可通过`box-sizing`进行设置。

盒模型都是由四个部分组成的，分别是`margin`、`border`、`padding`和`content`。

标准盒模型和IE盒模型的区别在于设置`width`和`height`时，对应的范围不同。

- **标准盒模型**的`width`、`height`只包含了`content`
- **IE盒模型的**的`width`、`height`除了`content`本身，还包含了`border`、`padding`

通过修改元素的`box-sizing`属性来改变元素的盒模型

- `box-sizeing: content-box`表示标准盒模型（默认值）
- `box-sizeing: border-box`表示IE盒模型（IE盒模型)
- `inherit`，继承父元素的 box-sizing 值。

## BFC（块级格式上下文）

BFC（Block Formatting Context），块级格式上下文。一个元素形成了 BFC 之后，那么它内部元素产生的布局不会影响到外部元素，外部元素的布局也不会影响到 BFC 中的内部元素。

一个 BFC 就像是一个隔离区域，和其他区域互不影响。

**创建BFC条件**

- 根元素或包含根元素的元素
- 设置浮动：`float`值≠none
- 设置绝对定位： `position（absolute、fixed）`
- `overfilow`值≠visible，为：`hidden`、`auto`、`scroll`
- `display`值为：`inline-block`、`table-cell`、`table-caption`、`flex`等

**BFC作用**：

- 解决`margin`重叠问题：由于BFC是一个独立的区域，内部元素和外部元素互不影响，将两个元素变为BFC，就解决了`margin`重叠问题
- 创建自适应两栏布局：可以用来创建自适应两栏布局，左边宽高固定，右边宽度自适应。
- 解决高度塌陷问题：在子元素设置浮动后，父元素会发生高度的塌陷，也就是父元素的高度为0解决这个问题，只需要将父元素变成一个BFC。
- 清除浮动

## 清除浮动

方式一：直接把 `<div style="clear: both;"></div>`作为最后一个子标签

方式二：建立伪类选择器,父元素增加`cleafix`样式

```css

  .cleafix:after{
   content:'.';
   display: block;
   clear: both;
   overflow: hidden;
   height: 0;
  }
```

方式三：父元素设置`overflow: hidden`

## 什么是外边距重叠？**如何解决？**

两个块级元素分别设置上下`margin`时可能会导致边距合并为一个边距，合并到边距取最大的那个值。需要注意的是，浮动的元素和绝对定位这种脱离文档流的元素的外边距不会折叠。**重叠只会出现在垂直方向。**

**计算规则**

- 都是正数，取最大的。`20px 40px ---> 40px`
- 一正一负，相加。`20px -50px ---> -30px`
- 都是负数，用0减去两个中绝对值大的那个。`-30px -10px ---> -30px`

**解决方案**
对于重叠的情况，主要有两种：**兄弟之间重叠（margin合并）** 和 **父子之间重叠（margin塌陷）**

- 兄弟之间重叠
  - 底部元素变为行内盒子：`display: inline-block`
  - 底部元素设置浮动：`float`
  - 底部元素的`position`的值为`absolute/fixed`
- 父子之间重叠
  - 父元素加入：`overflow: hidden`
  - 父元素添加透明边框：`border:1px solid transparent`
  - 子元素变为行内盒子：`display: inline-block`
  - 子元素加入浮动属性或定位

## IFC 是什么？

IFC 指的是行级格式化上下文，它有这样的一些布局规则：
（1）行级上下文内部的盒子会在水平方向，一个接一个地放置。
（2）当一行不够的时候会自动切换到下一行。
（3）行级上下文的高度由内部最高的内联盒子的高度决定。

## px、em、rem的区别及使用场景

**三者的区别：**

- px是固定的像素，一旦设置了就无法因为适应页面大小而改变。
- em和rem相对于px更具有灵活性，他们是相对长度单位，其长度不是固定的，更适用于响应式布局。浏览器的默认字体高都是 `16px`。所以未经调整的浏览器都符合: `1em=16px`
- em是相对于其父元素来设置字体大小，这样就会存在一个问题，进行任何元素设置，都有可能需要知道他父元素的大小。而rem是相对于根元素，这样就意味着，只需要在根元素确定一个参考值。

**使用场景：**

- 对于只需要适配少部分移动设备，且分辨率对页面影响不大的，使用px即可 。
- 对于需要适配各种移动设备，使用rem，例如需要适配iPhone和iPad等分辨率差别比较挺大的设备。

## 让一个元素水平/垂直居中

1. 水平居中

- 行内元素：`text-align: center;`
- 对于确定宽度的块级元素
  - width 和 margin 实现： `mragin: 0 auto;`
  - 绝对定位和 margin-left 实现： `margin-left: (父width - 子 width)/2；`(前提是父元素相对定位)
- 对于宽度未知的块级元素
  - 绝对定位和 transform 实现， translateX 可以移动本身元素的50%
  - flex 布局 `justify-content: center`

1. 垂直居中

- 纯文字类，设置 line-height 等于 height
- 子绝父相，子元素通过 margin 实现自适应居中
- 子绝父相，通过位移 transform 实现
- flex 布局，`align-items: center`

**css 中可以让文字在垂直和水平方向上重叠的两个属性是什么？**

- 垂直方向：`line-height`
- 水平方向：`text-align`

**如何垂直居中一个**`<img>`**?（用更简便的方法。）**

```html
#container {
    display:table-cell;
    text-align:center;
    vertical-align:middle;
}
```

总结：
一般常见的几种居中的方法有：

- 对于宽高固定的元素
- 我们可以利用`margin:0 auto`来实现元素的水平居中。
- 利用绝对定位，**设置四个方向的值都为 0，并将 margin 设置为 auto**，由于宽高固定，因此对应方向实现平分，可以实现水平和垂直方向上的居中。
- 利用绝对定位，**先将元素的左上角通过 top:50% 和 left:50% 定位到页面的中心，然后再通过 margin 负值来调整元素的中心点到页面的中心。**
- 利用绝对定位，先将元素的左上角通过 top:50% 和 left:50% 定位到页面的中心，**然后再通过 translate 来调整元素的中心点到页面的中心。**
- **使用 flex 布局**，通过`align-items: center` 和 `justify-content: center` 设置容器的垂直和水平方向上为居中对齐，然后它的子元素也可以实现垂直和水平的居中。
- 对于宽高不定的元素，上面的后面两种方法，可以实现元素的垂直和水平的居中。

**一个盒子垂直水平居中有哪些方法？（2~3 种方法）**

```html
/*确定容器的宽高宽500高300的层设置层的外边距div{*/
position: absolute;/*绝对定位*/
width: 500px;
height: 300px;
top: 50%;
left: 50%;
margin: -150px 250px;/*外边距为自身宽高的一半*/
background-color: pink;/*方便看效果*/
}
```

```html
/*未知容器的宽高，利用`transform`属性*/
div {
  position: absolute; /*相对定位或绝对定位均可*/
  width: 500px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: pink; /*方便看效果*/
}
```

```html
/*利用flex布局实际使用时应考虑兼容性*/
.container {
  display: flex;
  align-items: center; /*垂直居中*/
  justify-content: center; /*水平居中*/
}
.containerdiv {
  width: 100px;
  height: 100px;
  background-color: pink; /*方便看效果*/
}
```

## min-width/max-width 和 min-height/max-height 属性间的覆盖规则？

（1）max-width 会覆盖 width，即使 width 是行类样式或者设置了!important。

（2）min-width 会覆盖 max-width，此规则发生在 min-width 和 max-width 冲突的时候。

## width: auto 和 width:100% 的区别

width:100% 会使元素 box 的宽度等于父元素的 content box 的宽度。

width: auto 会使元素撑满整个父元素，margin、border、padding、content 区域会自动分配水平空间。

## CSS3 新增伪类有那些？

（1）elem: nth-child(n)选中父元素下的第 n 个子元素，并且这个子元素的标签名为 elem，n 可以接受具体的数值，也可以接受函数。
（2）elem: nth-last-child(n)作用同上，不过是从后开始查找。
（3）elem: last-child 选中最后一个子元素。
（4）elem: only-child 如果 elem 是父元素下唯一的子元素，则选中之。
（5）elem: nth-of-type(n)选中父元素下第 n 个 elem 类型元素，n 可以接受具体的数值，也可以接受函数。
（6）elem: first-of-type 选中父元素下第一个 elem 类型元素。
（7）elem: last-of-type 选中父元素下最后一个 elem 类型元素。
（8）elem: only-of-type 如果父元素下的子元素只有一个 elem 类型元素，则选中该元素。
（9）elem: empty 选中不包含子元素和内容的 elem 类型元素。
（10）elem: target 选择当前活动的 elem 元素。
（11）: not(elem)选择非 elem 元素的每个元素。
（12）: enabled 控制表单控件的禁用状态。
（13）: disabled    控制表单控件的禁用状态。
(14) : checked 单选框或复选框被选中。

## 关于伪类 LVHA 的解释?

a 标签有四种状态：链接访问前、链接访问后、鼠标滑过、激活，分别对应四类: link、: visited、: hover、: active；

当链接未访问过时：
（1）当鼠标滑过 a 链接时，满足: link 和: hover 两种状态，要改变 a 标签的颜色，就必须将: hover 伪类在: link 伪类后面声明；
（2）当鼠标点击激活 a 链接时，同时满足: link、: hover、: active 三种状态，要显示 a 标签激活时的样式（: active），必须将: active 声明放到: link 和: hover 之后。因此得出 LVHA 这个顺序。

这个顺序能不能变？可以，但也只有: link 和: visited 可以交换位置，因为一个链接要么访问过要么没访问过，不可能同时满足，也就不存在覆盖的问题。

## :: before 和 : after 中双冒号和单冒号 有什么区别？

在 css3 中使用**单冒号**来表示**伪类**，用**双冒号**来表示**伪元素**。

但是为了兼容已有的伪元素的写法，在一些浏览器中也可以使用单冒号来表示伪元素。

**区别：**

**伪类：**用于当已有的元素处于某个状态时，为其添加对应的样式。比如说，当用户悬停在指定的元素时，我们可以通过: hover 来描述这个元素的状态。

**伪元素：**用于创建一些不在文档树中的元素，并为其添加样式。它们允许我们为元素的某些部分设置样式。比如说，我们可以通过:: before 来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。

## css content 属性作用和应用

> css 的 content 属性专门应用在 before/after 伪元素上，用于来插入生成内容。最常见的应用是利用伪元素清除浮动。
>

```css
.clearfix:after {
  content: "."; //这里利用到了content属性 display:block;
  height: 0;
  visibility: hidden;
  clear: both;
}
.clearfix {
  *zoom: 1;
}
```

## flex 布局

`flex`布局是`CSS3`新增的一种布局方式，能够根据不同屏幕尺寸的变化来自适应大小。通过将一个元素的 display 属性值设置为 flex 从而使它成为一个 flex 容器，它的所有子元素都会成为它的项目。

常用的属性：

- `flex-direction`属性决定主轴的方向（即项目的排列方向）。
- `flex-wrap`属性定义，如果一条轴线排不下，如何换行。
- `flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。
- `justify-conten`t属性定义了项目在主轴上的对齐方式。
- `align-items`属性定义项目在交叉轴上如何对齐。
- `align-content`属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

其中`flex`属性是`flex-grow`，`flex-shrink`和`flex-basis`的简写，默认值为`0 1 auto`。**该属性有两个快捷值：`auto (1 1 auto)` 和 `none (0 0 auto)`。**

- `flex-grow`：定义项目的放大比例，默认值为 0，即如果存在剩余空间，也不放大。如果所有项目的`flex-grow`属性都为 1，则它们将等分剩余空间（如果有的话）。如果一个项目的`flex-grow`属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多一倍。
- `flex-shrink`：项目的缩小比例，默认为 1，即如果空间不足，项目将缩小。如果所有项目的`flex-shrink`属性都为 1，当空间不足时，都将等比例缩小。如果一个项目的`flex-shrink`属性为 0，其他项目都为 1，则空间不足时，前者不缩小。
- `flex-basis`：定义了在分配多余空间之前，项目占据的主轴空间。浏览器会根据该属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小。当设置为 0 的是，会根据内容撑开。也可以设为跟`width`或`height`属性一样的值（比如 350px），则项目将占据固定空间。

`flex`常用的属性值：

- flex: 1 --> flex: 1 1 0%
- flex: 2 --> flex: 2 1 0%
- flex: auto --> flex: 1 1 auto
- flex: none --> flex: 0 0 auto【常用于固定尺寸不伸缩】

## css 中优雅降级和渐进增强有什么区别？

优雅降级和渐进增强是随着 css3 流出来的一个概念。由于低级浏览器不支持 css3， 但 css3 的效果又很优秀不忍放弃，所以在高级浏览器中使用 css3 ，而在低级浏览器只保证最基本的功能。二者最关键的区别是它们所侧重的内容，以及这种不同所造成的工作流程的差异。

- `优雅降级`：一开始就构建完整的功能，然后针对浏览器测试和修复。
- `渐进增强`：一开始就针对低版本浏览器进行构建页面，完成基本的功能，然后再针对高级浏览器进行效果、交互、追加功能以达到更好的体验。

## CSS 优化、提高性能的方法有哪些？

- 将写好的 css 进行打包压缩，可以减少很多的体积。
- 减少使用`@import`,而建议使用`link`，因为后者在页面加载时一起加载，前者是等待页面加载完成之后再进行加载。
- 避免使用通配规则，如 `*{}`计算次数很多。
- 尽量少的去对标签进行选择，而是用 class。
- 慎重使用高性能属性：浮动、定位。
- 尽量减少页面重排、重绘。
- 正确使用 display 的属性，由于 display 的作用，某些样式组合会无效，徒增样式体积的同时也影响解析性能。
- 将具有相同属性的样式抽离出来，整合并通过 class 在页面中进行使用，提高 css 的可维护性。

## img 的 alt 和 title 的异同？实现图片懒加载的原理？

- `alt`是图片加载失败时显示在网页上的替代文字；`title`是鼠标放在图片上面时显示的文字，是对图片的进一步描述和说明。
- `alt`是 img 的必要属性；`title`不是。
- 对于网站 SEO 优先来说，搜索引擎对图片意思的判断，主要是靠`alt`属性，所以在图片`alt`属性中以简要文字说明，同时包含关键字，也是页面优化的一部分。

`懒加载原理`：先设置图片的 `data-src` 属性值（也可以是其他任意的，只要不发生 http 请求就可以，作用是为了存取值）为图片路径，由于不是 `src` 属性，故不会发生 http 请求。然后计算出页面的 scrollTop 的高度和浏览器的高度之和，如果图片距页面顶端距离小于前两者之和，说明图片要显示出来了，这时将 `data-src` 属性替换为 `src` 属性即可。

监听滚动条事件，如果（滚动条距离浏览器顶部的高度 === 图片距离顶部的高度），那么就将 data-src 的值赋值到 src 上。

```html
<img alt="A lazy image" data-src="lazy.jpg">

<------ 滚动到特定位置的时候 ------>

<img alt="A lazy image" src="lazy.jpg" data-src="lazy.jpg">

```

## css sprites （雪碧图/精灵图）

css sprites 就是把网页中一些小图片整合到一张图片文件中，再利用 css 的 background-image、background-repeat、background-position 的组合进行背景定位。

优点： 减少图片体积；减少 http 请求次数

缺点：维护比较麻烦；不能随便改变大小，会失真模糊

## 什么是字体图标？

字体图标简单的说，就是一种特殊的字体，通过这种字体，显示给用户的就像一个个图片一样。字体图标最大的好处，在于它不会变形和加载速度快。字体图标可以像文字一样，随意通过 css 来控制它的大小和颜色，非常方便。

## 主流浏览器内核私有属性 css 前缀？

- mozilla(firefox、flock等): -moz
- webkit 内核(safari、chrome等): -webkit
- opera 内核(opera浏览器): -o
- trident 内核(ie 浏览器): -ms

## 对requestAnimationframe的理解

实现动画效果的方法比较多，Javascript 中可以通过定时器 setTimeout 来实现，CSS3 中可以使用 transition 和 animation 来实现，HTML5 中的 canvas 也可以实现。除此之外，HTML5 提供一个专门用于请求动画的API，那就是 requestAnimationFrame，顾名思义就是**请求动画帧**。

MDN对该方法的描述：

> window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。
>

**语法：** `window.requestAnimationFrame(callback);`  其中，callback是**下一次重绘之前更新动画帧所调用的函数**(即上面所说的回调函数)。该回调函数会被传入DOMHighResTimeStamp参数，它表示requestAnimationFrame() 开始去执行回调函数的时刻。该方法属于**宏任务**，所以会在执行完微任务之后再去执行。

**取消动画：** 使用cancelAnimationFrame()来取消执行动画，该方法接收一个参数——requestAnimationFrame默认返回的id，只需要传入这个id就可以取消动画了。

**优势：**

- **CPU节能**：使用SetTinterval 实现的动画，当页面被隐藏或最小化时，SetTinterval 仍然在后台执行动画任务，由于此时页面处于不可见或不可用状态，刷新动画是没有意义的，完全是浪费CPU资源。而RequestAnimationFrame则完全不同，当页面处理未激活的状态下，该页面的屏幕刷新任务也会被系统暂停，因此跟着系统走的RequestAnimationFrame也会停止渲染，当页面被激活时，动画就从上次停留的地方继续执行，有效节省了CPU开销。
- **函数节流**：在高频率事件( resize, scroll 等)中，为了防止在一个刷新间隔内发生多次函数执行，RequestAnimationFrame可保证每个刷新间隔内，函数只被执行一次，这样既能保证流畅性，也能更好的节省函数执行的开销，一个刷新间隔内函数执行多次时没有意义的，因为多数显示器每16.7ms刷新一次，多次绘制并不会在屏幕上体现出来。
- **减少DOM操作**：requestAnimationFrame 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般来说，这个频率为每秒60帧。

**setTimeout执行动画的缺点**：它通过设定间隔时间来不断改变图像位置，达到动画效果。但是容易出现卡顿、抖动的现象；原因是：

- settimeout任务被放入异步队列，只有当主线程任务执行完后才会执行队列中的任务，因此实际执行时间总是比设定时间要晚；
- settimeout的固定时间间隔不一定与屏幕刷新间隔时间相同，会引起丢帧。

## 有了使用过Sass、Less 吗？他们的区别是什么？为什么要使用他们？

他们都是 `CSS` 预处理器，是 CSS上的一种抽象层。他们是一种特殊的语法/语言编译成 `CSS`。 增加了 `CSS`代码的复用性，层级，`mixin`， 变量，循环， 函数等对编写以及开发UI组件都极为方便。
**区别**

1. 编译环境不一样
    - `Sass`是在服务端处理的，以前是`Ruby`，现在是`Dart-Sass`或`Node-Sass`
    - 而`Less`是需要引入`less.js`来处理Less代码输出CSS到浏览器，也可以在开发服务器将Less语法编译成css文件，输出CSS文件到生产包目录
2. 变量符不一样，Less是`@`，而Scss是`$`。
3. `Sass`支持条件语句，可以使用`if{}else{},for{}`循环等等。而`Less`不支持

**为什么要使用它们？**

- 结构清晰，便于扩展。 可以方便地屏蔽浏览器私有语法差异。封装对浏览器语法差异的重复处理， 减少无意义的机械劳动。
- 可以轻松实现多重继承。 完全兼容 CSS 代码，可以方便地应用到老项目中。LESS 只是在 CSS 语法上做了扩展，所以老的 CSS 代码也可以与 LESS 代码一同编译。

## link和@import的区别

- `link`是HTML提供的标签，不仅可以加载`CSS`文件，还可以定义`RSS、rel`连接属性等
- `@import`是CSS提供等语法规则，只有导入样式表带作用。
- `link`标签引入的CSS被同时加载，而`@import`引入的CSS将在页面**加载完毕**后被加载
- `@import`是CSS2.1才有的语法，存在兼容性，而`link`作为HTML标签不存在兼容性问题
