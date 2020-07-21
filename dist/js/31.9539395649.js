(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{176:function(s,n,a){const e=a(0);s.exports=function(s){Object.keys(s).forEach((function(n){this[n]=s[n]}));return e.createElement("section",{className:"markdown"},e.createElement("h1",null,"变量提升"),e.createElement("p",null,"在 JavaScript 中，变量提升是很常见的现象，在实际开发中如果对其不够了解，就容易出现问题而找不到错在哪里。今天，我就来详细讲一讲变量提升。"),e.createElement("h2",null,"什么是变量提升"),e.createElement("p",null,"先来看一个例子："),e.createElement("pre",null,e.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{\n  <span class="hljs-built_in">console</span>.log(a);\n  <span class="hljs-keyword">var</span> a = <span class="hljs-number">1</span>;\n}\nfoo();\n'}})),e.createElement("p",null,"这段代码并不会报错，而是输出 ",e.createElement("code",{dangerouslySetInnerHTML:{__html:"undefined"}}),"，原因就在于变量提升(Hoisting)。变量提升会将当前作用域内的所有声明提升到当前作用域的顶部，所以以上这段代码相当于以下代码："),e.createElement("pre",null,e.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{\n  <span class="hljs-keyword">var</span> a;\n  <span class="hljs-built_in">console</span>.log(a);\n  a = <span class="hljs-number">1</span>;\n}\nfoo();\n'}})),e.createElement("p",null,"这样看起来输出 ",e.createElement("code",{dangerouslySetInnerHTML:{__html:"undefined"}})," 就能解释了。"),e.createElement("h2",null,"函数提升"),e.createElement("p",null,"和变量提升一样的还有函数提升，同样来看一个例子："),e.createElement("pre",null,e.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'foo();\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{\n  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;test&#x27;</span>);\n}\n'}})),e.createElement("p",null,"这段代码也不会报错，因为函数声明会被提升到当前作用域的顶部。",e.createElement("strong",null,"注意，当有多个同名的函数声明时，后面的函数声明会覆盖前面的函数声明"),"。以下这段代码会输出 b："),e.createElement("pre",null,e.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'foo();\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{\n  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;a&#x27;</span>);\n}\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{\n  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;b&#x27;</span>);\n}\n'}})),e.createElement("p",null,e.createElement("strong",null,"还有一点需要注意，函数可以用表达式来定义，此时发生的是变量提升，而非函数提升"),"。来看以下代码："),e.createElement("pre",null,e.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'foo();\n<span class="hljs-keyword">var</span> foo = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;a&#x27;</span>);\n};\n'}})),e.createElement("p",null,"此时会报 ",e.createElement("code",{dangerouslySetInnerHTML:{__html:"TypeError"}})," 错误，因为当前提升的变量 foo 为 ",e.createElement("code",{dangerouslySetInnerHTML:{__html:"undefined"}}),",不是函数，所以不能运行。"),e.createElement("h2",null,"当函数提升和变量提升同时存在时，函数优先"),e.createElement("pre",null,e.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'foo();\n<span class="hljs-keyword">var</span> foo = <span class="hljs-number">1</span>;\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{\n  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;a&#x27;</span>);\n}\n'}})))}}}]);
//# sourceMappingURL=31.9539395649.js.map