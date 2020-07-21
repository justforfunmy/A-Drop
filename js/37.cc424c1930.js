(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{184:function(s,n,a){const l=a(0);s.exports=function(s){Object.keys(s).forEach((function(n){this[n]=s[n]}));return l.createElement("section",{className:"markdown"},l.createElement("h1",null,"浅拷贝与深拷贝"),l.createElement("p",null,"JavaScript 中的数据类型主要分为原始数据类型（",l.createElement("code",{dangerouslySetInnerHTML:{__html:"Number，String，Boolean，Null，Undefined，Symbol"}}),"）和引用类型（",l.createElement("code",{dangerouslySetInnerHTML:{__html:"Object"}}),"）。深拷贝和浅拷贝主要是针对引用类型的，即在拷贝一个对象时，对于对象中属性值是对象的情况，浅拷贝复制的是对象的引用，深拷贝会复制对象的值。举个例子说，假设 B 复制了 A，如果 B 改变了，A 跟着改变，这就是浅拷贝，如果 B 改变了而 A 不改变，此时就是深拷贝。"),l.createElement("ul",null,l.createElement("li",null,"浅拷贝可以用",l.createElement("code",{dangerouslySetInnerHTML:{__html:"Object.assign()"}}),"实现，也可以用",l.createElement("code",{dangerouslySetInnerHTML:{__html:"..."}}),"扩展运算符实现",l.createElement("code",{dangerouslySetInnerHTML:{__html:"Object.assign()"}})," 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。")),l.createElement("pre",null,l.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-keyword">let</span> temp = {\n  <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;temp&#x27;</span>,\n  <span class="hljs-attr">obj</span>: {\n    <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;hello&#x27;</span>\n  },\n  <span class="hljs-attr">fn</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;hello&#x27;</span>);\n  }\n};\n\n<span class="hljs-keyword">let</span> shallowCopy = <span class="hljs-built_in">Object</span>.assign({}, temp);\ntemp.obj.msg = <span class="hljs-string">&#x27;hi&#x27;</span>;\n<span class="hljs-built_in">console</span>.log(shallowCopy.obj.msg); <span class="hljs-comment">//hi</span>\n'}})),l.createElement("ul",null,l.createElement("li",null,"深拷贝的实现方法主要有两种：",l.createElement("code",{dangerouslySetInnerHTML:{__html:"JSON"}}),"和递归")),l.createElement("ol",null,l.createElement("li",null,"JSON")),l.createElement("p",null,"先把对象序列化成",l.createElement("code",{dangerouslySetInnerHTML:{__html:"JSON"}}),"字符串，然后再把字符串解析成对象，这种方法只适合处理属性值是对象或者数组的情况，对于函数会失真。还有，会丢失",l.createElement("code",{dangerouslySetInnerHTML:{__html:"constructor"}}),",不管原先是什么，都会成为",l.createElement("code",{dangerouslySetInnerHTML:{__html:"Object"}}),"。"),l.createElement("pre",null,l.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-keyword">let</span> temp = {\n  <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;temp&#x27;</span>,\n  <span class="hljs-attr">obj</span>: {\n    <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;hello&#x27;</span>\n  },\n  <span class="hljs-attr">fn</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;hello&#x27;</span>);\n  }\n};\n\n<span class="hljs-keyword">let</span> deepCopy1 = <span class="hljs-built_in">JSON</span>.parse(<span class="hljs-built_in">JSON</span>.stringify(temp));\ntemp.obj.msg = <span class="hljs-string">&#x27;hi&#x27;</span>;\n<span class="hljs-built_in">console</span>.log(deepCopy1.obj.msg, deepCopy1.fn); <span class="hljs-comment">//hello undefined</span>\n'}})),l.createElement("ol",{start:"2"},l.createElement("li",null,"递归，",l.createElement("code",{dangerouslySetInnerHTML:{__html:"for...in..."}}),"循环遍历属性")),l.createElement("pre",null,l.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deepClone</span>(<span class="hljs-params">obj</span>) </span>{\n  <span class="hljs-comment">//判断是否是数组</span>\n  <span class="hljs-keyword">let</span> result = <span class="hljs-built_in">Array</span>.isArray(obj) ? [] : {};\n  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> key <span class="hljs-keyword">in</span> obj) {\n    <span class="hljs-comment">//判断是否是自身的属性</span>\n    <span class="hljs-keyword">if</span> (obj.hasOwnProperty(key)) {\n      <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> obj[key] === <span class="hljs-string">&#x27;object&#x27;</span>) {\n        <span class="hljs-comment">//如果属性值是对象，对这个对象深拷贝</span>\n        result[key] = deepClone(obj[key]);\n      } <span class="hljs-keyword">else</span> {\n        <span class="hljs-comment">//如果属性值类型不是object，直接复制</span>\n        result[key] = obj[key];\n      }\n    }\n  }\n  <span class="hljs-keyword">return</span> result;\n}\n<span class="hljs-keyword">let</span> temp = {\n  <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;temp&#x27;</span>,\n  <span class="hljs-attr">obj</span>: {\n    <span class="hljs-attr">msg</span>: <span class="hljs-string">&#x27;hello&#x27;</span>\n  },\n  <span class="hljs-attr">fn</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;hello&#x27;</span>);\n  }\n};\n<span class="hljs-keyword">let</span> deepCopy2 = deepClone(temp);\ntemp.obj.msg = <span class="hljs-string">&#x27;hi&#x27;</span>;\n<span class="hljs-built_in">console</span>.log(deepCopy2.obj.msg); <span class="hljs-comment">//hello</span>\ndeepCopy2.fn(); <span class="hljs-comment">//hello</span>\n'}})))}}}]);
//# sourceMappingURL=37.cc424c1930.js.map