(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{169:function(e,n,a){const l=a(0);e.exports=function(e){Object.keys(e).forEach((function(n){this[n]=e[n]}));return l.createElement("section",{className:"markdown"},l.createElement("h1",null,"css条纹"),l.createElement("p",null,"实现方法：CSS 线性渐变",l.createElement("code",{dangerouslySetInnerHTML:{__html:"linear-gradient()"}})," 函数用于创建一个表示两种或多种颜色线性渐变的图片。",l.createElement("code",{dangerouslySetInnerHTML:{__html:"linear-gradient([ [ [ &lt;angle&gt; | to &lt;side-or-corner&gt; ],]? &lt;color-stop&gt;[, &lt;color-stop&gt;]+);"}})),l.createElement("ul",null,l.createElement("li",null,"side-or-corner : 描述渐变线的起始点位置。它包含 to 和两个关键词：第一个指出水平位置 left or right，第二个指出垂直位置 top or bottom。"),l.createElement("li",null,"angle: 用角度值指定渐变的方向（或角度）。角度顺时针增加。"),l.createElement("li",null,"color-stop: 由一个",l.createElement("code",{dangerouslySetInnerHTML:{__html:"color"}}),"值组成，并且跟随着一个可选的终点位置（可以是一个百分比值或者是沿着渐变轴的",l.createElement("code",{dangerouslySetInnerHTML:{__html:"length"}}),"）")),l.createElement("p",null,"例如，",l.createElement("code",{dangerouslySetInnerHTML:{__html:"background: linear-gradient(orange,blue);"}}),"意思是背景色从 orange 向 blue 渐变，默认方向从上往下，效果如下：",l.createElement("img",{src:"./media/md/orange-blue-up-down.png",alt:"橙-蓝-上下"}),"如果想从左往右渐变，则",l.createElement("code",{dangerouslySetInnerHTML:{__html:"background: linear-gradient(to right ,orange,blue);"}}),l.createElement("img",{src:"./media/md/orange-blue-left-right.png",alt:"橙-蓝-左右"}),"此外，还可以添加长度或者百分比来控制渐变的过程，例如",l.createElement("code",{dangerouslySetInnerHTML:{__html:"background: linear-gradient(to right ,orange 30%,blue 60%);"}}),"意思是从左往右 30%宽度为 orange 实色，从 60%宽度开始为 blue 实色，中间为渐变部分，效果如下：",l.createElement("img",{src:"./media/md/orange-3-blue-7.png",alt:"橙30%-蓝60%"}),"如果我们把百分比设置成一样，",l.createElement("code",{dangerouslySetInnerHTML:{__html:"background: linear-gradient(to right ,orange 30%,blue 30%);"}}),",效果是这样的：",l.createElement("img",{src:"./media/md/orange-3-blue-3.png",alt:"橙30%-蓝30%."}),"这不就是最简单的渐变了吗？ 因为背景默认会平铺填满，所以我们可以设置",l.createElement("code",{dangerouslySetInnerHTML:{__html:"background-size"}}),"值来控制条纹宽度。由此，我们可以实现竖条纹："),l.createElement("pre",null,l.createElement("code",{className:"language-css",dangerouslySetInnerHTML:{__html:'<span class="hljs-selector-class">.stripes</span> {\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;\n  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(to right, orange <span class="hljs-number">50%</span>, blue <span class="hljs-number">50%</span>);\n  <span class="hljs-attribute">background-size</span>: <span class="hljs-number">20px</span>;\n}\n'}})),l.createElement("p",null,l.createElement("img",{src:"./media/md/stripes-column.png",alt:"竖条纹"}),"横条纹同竖条纹原理一样，就不再赘述。如果要实现 45° 斜条纹呢？我们同样可以使用",l.createElement("code",{dangerouslySetInnerHTML:{__html:"linear-gradient()"}}),"实现，不过相对比较麻烦。这边推荐使用",l.createElement("code",{dangerouslySetInnerHTML:{__html:"repeating-linear-gradient()"}}),",用法同",l.createElement("code",{dangerouslySetInnerHTML:{__html:"linear-gradient()"}}),"基本相同，只是色标是无限循环的，直到填满整个背景。例如："),l.createElement("pre",null,l.createElement("code",{className:"language-css",dangerouslySetInnerHTML:{__html:'<span class="hljs-selector-class">.stripes</span> {\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">600px</span>;\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;\n  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">repeating-linear-gradient</span>(<span class="hljs-number">45deg</span>, orange, orange <span class="hljs-number">15px</span>, blue <span class="hljs-number">0</span>, blue <span class="hljs-number">30px</span>);\n}\n'}})),l.createElement("p",null,"效果如图：",l.createElement("img",{src:"./media/md/stripes-skew.png",alt:"斜条纹"})))}}}]);
//# sourceMappingURL=20.ad2670bf10.js.map