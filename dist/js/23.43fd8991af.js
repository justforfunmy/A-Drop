(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{172:function(s,a,n){const l=n(0);s.exports=function(s){Object.keys(s).forEach((function(a){this[a]=s[a]}));return l.createElement("section",{className:"markdown"},l.createElement("h1",null,"css 中!important 无效的问题"),l.createElement("pre",null,l.createElement("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="hljs-meta">&lt;!DOCTYPE <span class="hljs-meta-keyword">html</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;en&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">&quot;UTF-8&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;viewport&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;width=device-width, initial-scale=1.0&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Document<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">\n      <span class="hljs-selector-class">.wrapper</span> {\n        <span class="hljs-attribute">color</span>: blue <span class="hljs-meta">!important</span>;\n      }\n      <span class="hljs-selector-class">.box</span> {\n        <span class="hljs-attribute">color</span>: green;\n      }\n    </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box&quot;</span>&gt;</span>文字<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>\n'}})),l.createElement("p",null,"为什么不是蓝色？"),l.createElement("p",null,"color 是一个可以继承的属性，也就是如果内部的元素找不到 color 就从外面一层层找出去，但是内部元素本身就有 color 的话就使用内部的 color，就算外部的 color 加!important 也没用。"),l.createElement("p",null,"如果你希望 ",l.createElement("code",{dangerouslySetInnerHTML:{__html:"scoped"}})," 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用 ",l.createElement("code",{dangerouslySetInnerHTML:{__html:"&gt;&gt;&gt;"}})," 操作符"),l.createElement("pre",null,l.createElement("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="hljs-meta">&lt;!DOCTYPE <span class="hljs-meta-keyword">html</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;en&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">&quot;UTF-8&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;viewport&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;width=device-width, initial-scale=1.0&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Document<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">\n      <span class="hljs-selector-class">.wrapper</span> {\n        <span class="hljs-attribute">color</span>: blue <span class="hljs-meta">!important</span>;\n      }\n      <span class="hljs-selector-class">.wrapper</span> &gt;&gt;&gt; <span class="hljs-selector-class">.box</span> {\n        <span class="hljs-attribute">color</span>: green;\n      }\n    </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box&quot;</span>&gt;</span>文字<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>\n'}})))}}}]);
//# sourceMappingURL=23.43fd8991af.js.map