## 1. 变量声明

使用 `$` 符号 可以声明一个或者多个，多个用逗号分隔

```css
$border-base:1px solid black;
```

```css
$plain-font: "Myriad Pro",Myriad,"Helvetica Neue",Helveticau,"Liberation Sans";
```

## 2. 变量引用

凡是 CSS 属性的标准值（比如说 1px 或者 bold）可存在的地方，变量就可以使用。CSS 生成时，变量会被它们的值所替代。如果你需要一个不同的值，只需要改变这个变量的值，则所有引用此变量的地方生成的值都会随之改变。

```SCSS
$color-base:#00c16f;
$color-border:red;
$border-base:1px solid $color-border;
$color-back:#f2f2f2;
$layout-base:flex;

.aaa{
    $c:center;
    border:$border-base;
    width:500px;
    height:500px;
    background:$color-base;
    align-items:$c;
    display:$layout-base;
    justify-content:$c;
    .bbb{
        width:400px;
        height:400px;
        background:$color-back;
        display:$layout-base;
        align-items:$c;
        border:2px solid $color-border;
        .CCC{
            width:300px;
            height:36epx;
            background:pink;
            display:$layout-base;
            align-items:$c;
        }
    }
}
```

## 3. 变量的嵌套

在 Sass 中，你可以像俄罗斯套娃那样在规则块中嵌套规则块。**sass** 在输出 **css** 时会帮你把这些嵌套规则处理好，避免你的重复书写。

```SCSS
.aaa{
    div{
        width:100px;
        height:100px;
        background:red;
        h1{
            co1or:#999;
            font-size:50px;
            p{
                margin-top:20px;
            }
        }
    }
    input{
        margin-left:20px;
    }
        
}
```

## 4.父选择器的标识符&

当包含父选择器标识符的嵌套规则被打开时，它不会像后代选择器那样进行拼接，而是&被父选择器直接替换

```SCSS
.test {
  width:100px;
  height:100px;
  
  &:hover {
   width:200px;
   height:50px;    
  } 
}

//上面的操作等同于下面的
.test {
  width:100px;
  height:100px;
}
  
.test:hover {
  width:200px;
  height:50px;    
 } 

```

## 5. 继承

SASS 允许一个选择器，继承另一个选择器。比如，现有 class1：

```SCSS
　.class1 {
　　　　border: 1px solid #ddd;
　　}
```

class2 要继承 class1，就要使用 `@extend` 命令：

```SCSS
　.class2 {
　　　　@extend .class1;
　　　　font-size:120%;
　　}
```

## 6.Mixin

Mixin 有点像 C 语言的宏（macro），是可以重用的代码块。 使用@mixin 命令，定义一个代码块。

```SCSS
@mixin left {
  float: left;
  margin-left: 10px;
}

```

使用 `@include` 命令，调用这个 mixin。

```SCSS
div {
  @include left;
}
```

mixin 的强大之处，在于可以指定参数和缺省值。

```SCSS
@mixin left($value: 10px) {
  float: left;
  margin-right: $value;
}
```

使用的时候，根据需要加入参数：

```SCSS
div {
  @include left(20px);
}
```

下面是一个 mixin 的实例，用来生成浏览器前缀。

```SCSS
@mixin rounded($vert, $horz, $radius: 10px) {
  border-#{$vert}-#{$horz}-radius: $radius;
  -moz-border-radius-#{$vert}#{$horz}: $radius;
  -webkit-border-#{$vert}-#{$horz}-radius: $radius;
}
```

使用的时候，可以像下面这样调用：

```SCSS
#navbar li { 
  @include rounded(top, left); 
}

#footer { 
  @include rounded(top, left, 5px); 
}
```

## 7. 条件语句

@if 可以用来判断：

```SCSS
p {
  @if 1 + 1 == 2 { border: 1px solid; }
  @if 5 < 3 { border: 2px dotted; }
}
```

配套的还有@else 命令：

```SCSS
@if lightness($color) > 30% {
  background-color: #000;
} @else {
  background-color: #fff;
}

```

## 8. 循环语句

SASS 支持 for 循环：

```SCSS
@for $i from 1 to 10 {
  .border-#{$i} {
    border: #{$i}px solid blue;
  }
}

```

也支持 while 循环：

```SCSS
$i: 6;

@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}
```

each 命令，作用与 for 类似：

```SCSS
@each $member in a, b, c, d {
  .#{$member} {
    background-image: url("/image/#{$member}.jpg");
  }
}
```

