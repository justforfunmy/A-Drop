(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{171:function(s,a,n){const l=n(0);s.exports=function(s){Object.keys(s).forEach((function(a){this[a]=s[a]}));return l.createElement("section",{className:"markdown"},l.createElement("h1",null,"关于浮动"),l.createElement("p",null,"在标准的文档流中，",l.createElement("code",{dangerouslySetInnerHTML:{__html:"div"}}),"元素会独占一行，但在实际的布局中经常会遇到让多个",l.createElement("code",{dangerouslySetInnerHTML:{__html:"div"}}),"显示在一行中的需求，浮动就是解决这个需求的一种方法。",l.createElement("strong",null,"浮动可以理解为让元素脱离标准文档流，漂浮于标准文档流之上，和标准文档流不在一个层次上"),"。如下图所示："),l.createElement("pre",null,l.createElement("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="hljs-meta">&lt;!DOCTYPE <span class="hljs-meta-keyword">html</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;en&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">&quot;UTF-8&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;viewport&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;width=device-width, initial-scale=1.0&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Document<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">\n      <span class="hljs-selector-class">.wrapper</span> {\n        <span class="hljs-attribute">background</span>: <span class="hljs-number">#666</span>;\n      }\n      <span class="hljs-selector-class">.box</span> {\n        <span class="hljs-attribute">width</span>: <span class="hljs-number">50px</span>;\n        <span class="hljs-attribute">height</span>: <span class="hljs-number">50px</span>;\n        <span class="hljs-attribute">line-height</span>: <span class="hljs-number">50px</span>;\n        <span class="hljs-attribute">text-align</span>: center;\n        <span class="hljs-attribute">float</span>: left;\n      }\n      <span class="hljs-selector-class">.box</span><span class="hljs-selector-pseudo">:nth-child(odd)</span> {\n        <span class="hljs-attribute">background</span>: tomato;\n      }\n      <span class="hljs-selector-class">.box</span><span class="hljs-selector-pseudo">:nth-child(even)</span> {\n        <span class="hljs-attribute">background</span>: wheat;\n      }\n    </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box&quot;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box&quot;</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box&quot;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box&quot;</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>\n'}})),l.createElement("p",null,l.createElement("img",{src:n(223).default,alt:"float"})),l.createElement("h1",null,"关于清除浮动"),l.createElement("p",null,"清除浮动可以用",l.createElement("code",{dangerouslySetInnerHTML:{__html:"clear"}}),"属性，取值："),l.createElement("ul",null,l.createElement("li",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"none"}}),"：元素不会向下移动清除之前的浮动,即允许两边有浮动对象"),l.createElement("li",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"left"}}),"：元素被向下移动用于清除之前的左浮动，即不允许左边有浮动对象"),l.createElement("li",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"right"}}),"：元素被向下移动用于清除之前的右浮动，即不允许右边有浮动对象"),l.createElement("li",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"both"}}),"：元素被向下移动用于清除之前的左右浮动，即不允许两边有浮动对象"),l.createElement("li",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"inline-start"}}),"：该关键字表示该元素向下移动以清除其包含块的起始侧上的浮动。即在某个区域的左侧浮动或右侧浮动。"),l.createElement("li",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"inline-end"}}),"：该关键字表示该元素向下移动以清除其包含块的末端的浮点，即在某个区域的右侧浮动或左侧浮动。")),l.createElement("h2",null,"对于 CSS 的清除浮动(clear)，一定要牢记：这个规则只能影响使用清除的元素本身，不能影响其他元素。"),l.createElement("p",null,"那么，如果清除第二个",l.createElement("code",{dangerouslySetInnerHTML:{__html:"div"}}),"左浮动，则："),l.createElement("pre",null,l.createElement("code",{className:"language-css",dangerouslySetInnerHTML:{__html:'<span class="hljs-selector-class">.box</span><span class="hljs-selector-pseudo">:nth-child(2)</span> {\n  <span class="hljs-attribute">clear</span>: left;\n}\n'}})),l.createElement("p",null,l.createElement("img",{src:"../../assets/images/md/2-clear-left.png",alt:"float"}),"因为清除浮动只能影响元素本身，为了使第二个",l.createElement("code",{dangerouslySetInnerHTML:{__html:"div"}}),"左边没有浮动元素，又不能让第一个",l.createElement("code",{dangerouslySetInnerHTML:{__html:"div"}}),"改变位置，所以只能使自己向下移动一行。这里注意，即使给这个",l.createElement("code",{dangerouslySetInnerHTML:{__html:"div"}}),"清除右浮动，并不会有效果，因为它不能使后一个",l.createElement("code",{dangerouslySetInnerHTML:{__html:"div"}}),"改变位置，只能作用在自己身上。"),l.createElement("h2",null,"关于父元素高度塌陷"),l.createElement("p",null,"同上的布局，可以发现，父元素",l.createElement("code",{dangerouslySetInnerHTML:{__html:".wrapper"}}),"虽然设置了",l.createElement("code",{dangerouslySetInnerHTML:{__html:"background"}}),",却依然没有效果，因为浮动元素脱离了文档流，即对父元素而言，并没有元素占用了空间，所以高度无法撑开。通常有两种方法可以解决，清除浮动和 BFC："),l.createElement("ul",null,l.createElement("li",null,"清除浮动")),l.createElement("pre",null,l.createElement("code",{className:"language-css",dangerouslySetInnerHTML:{__html:'<span class="hljs-selector-class">.wrapper</span><span class="hljs-selector-pseudo">::after</span> {\n  <span class="hljs-attribute">content</span>: <span class="hljs-string">&#x27;&#x27;</span>;\n  <span class="hljs-attribute">display</span>: block;\n  <span class="hljs-attribute">clear</span>: both;\n}\n'}})),l.createElement("p",null,"这样做的原理相当于在最后一个子元素后边添加一个空",l.createElement("code",{dangerouslySetInnerHTML:{__html:"div"}}),"，因为清除了浮动，所以会到浮动元素的下面一行，高度就撑开了。"),l.createElement("ul",null,l.createElement("li",null,"BFC 触发 BFC 的方法有很多，详见我写的",l.createElement("a",{href:"https://github.com/justforfunmy/Notebook/blob/master/md/CSS/%E5%9D%97%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%B8%8A%E4%B8%8B%E6%96%87%EF%BC%88Block-Formatting-Context%EF%BC%8CBFC%EF%BC%89.md"},"BFC"),"章节，常见的方式可以是：")),l.createElement("pre",null,l.createElement("code",{className:"language-css",dangerouslySetInnerHTML:{__html:'<span class="hljs-selector-class">.wrapper</span> {\n  <span class="hljs-attribute">overflow</span>: hidden;\n}\n'}})),l.createElement("p",null,l.createElement("img",{src:"../../assets/images/md/height.jpg",alt:"height"})))}},223:function(s,a,n){"use strict";n.r(a),a.default="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=9.bdd4875c34.js.map