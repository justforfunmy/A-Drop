(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{189:function(s,n,a){const e=a(0);s.exports=function(s){Object.keys(s).forEach((function(n){this[n]=s[n]}));return e.createElement("section",{className:"markdown"},e.createElement("h1",null,"简单实现 Vue 的响应式系统"),e.createElement("p",null,"Vue 的响应式系统是基于",e.createElement("code",{dangerouslySetInnerHTML:{__html:"Object.defineProperty"}}),"实现的，所以先来了解",e.createElement("code",{dangerouslySetInnerHTML:{__html:"Object.defineProperty"}}),"是非常有必要的。 在 MDN 上，可以非常明确地看到其作用和用法。",e.createElement("strong",null,e.createElement("code",{dangerouslySetInnerHTML:{__html:"Object.defineProperty()"}})," 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。"),e.createElement("strong",null,"语法"),"：",e.createElement("code",{dangerouslySetInnerHTML:{__html:"Object.defineProperty(obj, prop, descriptor)"}}),"其中，",e.createElement("code",{dangerouslySetInnerHTML:{__html:"obj"}}),"是要在其上定义属性的对象。",e.createElement("code",{dangerouslySetInnerHTML:{__html:"prop"}}),"是要定义或修改的属性的名称。",e.createElement("code",{dangerouslySetInnerHTML:{__html:"descriptor"}}),"是将被定义或修改的属性描述符。 前两个参数比较好理解，至于第三个参数",e.createElement("strong",null,"属性描述符"),"，参见 ",e.createElement("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"},"MDN")),e.createElement("p",null,"Vue 中使用的是",e.createElement("strong",null,"存取描述符"),",有以下四个属性："),e.createElement("ul",null,e.createElement("li",null,e.createElement("code",{dangerouslySetInnerHTML:{__html:"configurable"}}),":为",e.createElement("code",{dangerouslySetInnerHTML:{__html:"true"}}),"时，该属性能够修改，默认为",e.createElement("code",{dangerouslySetInnerHTML:{__html:"false"}})),e.createElement("li",null,e.createElement("code",{dangerouslySetInnerHTML:{__html:"enumerable"}}),":当且仅当该属性的",e.createElement("code",{dangerouslySetInnerHTML:{__html:"enumerable"}}),"为",e.createElement("code",{dangerouslySetInnerHTML:{__html:"true"}}),"时，该属性才能够出现在对象的枚举属性中。默认为",e.createElement("code",{dangerouslySetInnerHTML:{__html:"false"}}),"。"),e.createElement("li",null,e.createElement("code",{dangerouslySetInnerHTML:{__html:"get"}}),":给属性提供",e.createElement("code",{dangerouslySetInnerHTML:{__html:"getter"}}),"方法"),e.createElement("li",null,e.createElement("code",{dangerouslySetInnerHTML:{__html:"set"}}),":给属性提供",e.createElement("code",{dangerouslySetInnerHTML:{__html:"setter"}}),"方法")),e.createElement("p",null,"知道了",e.createElement("code",{dangerouslySetInnerHTML:{__html:"Object.defineProperty"}}),"之后，我们来实现 Vue 的响应式系统。"),e.createElement("ol",null,e.createElement("li",null,"首先，我们定义 Vue 函数，以及函数",e.createElement("code",{dangerouslySetInnerHTML:{__html:"cb"}}),"来模拟视图更新：")),e.createElement("pre",null,e.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-comment">//test.js</span>\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Vue</span>(<span class="hljs-params">options</span>) </span>{}\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">cb</span>(<span class="hljs-params"></span>) </span>{\n  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;更新啦！&#x27;</span>);\n}\n'}})),e.createElement("p",null,"引入 js,"),e.createElement("pre",null,e.createElement("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'//index.html\n<span class="hljs-meta">&lt;!DOCTYPE <span class="hljs-meta-keyword">html</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;en&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">&quot;UTF-8&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;viewport&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;width=device-width, initial-scale=1.0&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Document<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;./test.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n    <span class="hljs-keyword">const</span> vm = <span class="hljs-keyword">new</span> Vue({\n      <span class="hljs-attr">data</span>: {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;a&#x27;</span>\n      }\n    });\n  </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>\n'}})),e.createElement("p",null,"我们给 new 的 Vue 对象传入一个包含",e.createElement("code",{dangerouslySetInnerHTML:{__html:"data"}}),"属性的对象，我们要达到的效果是当",e.createElement("code",{dangerouslySetInnerHTML:{__html:"data"}}),"中的任一属性值发生变化时，视图更新，即调用",e.createElement("code",{dangerouslySetInnerHTML:{__html:"cb"}}),"函数。"),e.createElement("ol",{start:"2"},e.createElement("li",null,"接下来，定义",e.createElement("code",{dangerouslySetInnerHTML:{__html:"defineReactive"}}),"函数,")),e.createElement("pre",null,e.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-comment">//test.js</span>\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">defineReactive</span>(<span class="hljs-params">obj, key, val</span>) </span>{\n  <span class="hljs-built_in">Object</span>.defineProperty(obj, key, {\n    <span class="hljs-attr">configurable</span>: <span class="hljs-literal">true</span>,\n    <span class="hljs-attr">enumerable</span>: <span class="hljs-literal">true</span>,\n    <span class="hljs-attr">get</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n      <span class="hljs-keyword">return</span> val;\n    },\n    <span class="hljs-attr">set</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">newVal</span>) </span>{\n      <span class="hljs-keyword">if</span> (newVal === val) {\n        <span class="hljs-keyword">return</span>;\n      }\n      val = newVal;\n      cb();\n    }\n  });\n}\n'}})),e.createElement("p",null,"这段代码中，形参",e.createElement("code",{dangerouslySetInnerHTML:{__html:"obj"}}),"表示需要捆绑的对象，",e.createElement("code",{dangerouslySetInnerHTML:{__html:"key"}}),"表示",e.createElement("code",{dangerouslySetInnerHTML:{__html:"obj"}}),"的一个属性名，",e.createElement("code",{dangerouslySetInnerHTML:{__html:"val"}}),"表示属性值。在经过",e.createElement("code",{dangerouslySetInnerHTML:{__html:"defineReactive"}}),"处理后，我们在访问",e.createElement("code",{dangerouslySetInnerHTML:{__html:"obj"}}),"的属性时，会调用",e.createElement("code",{dangerouslySetInnerHTML:{__html:"getter"}}),"方法，在更改属性时会调用",e.createElement("code",{dangerouslySetInnerHTML:{__html:"setter"}}),"方法。"),e.createElement("ol",{start:"3"},e.createElement("li",null,"然后，我们需要为 data 的每一个属性都进行",e.createElement("strong",null,"响应式"),"处理。")),e.createElement("pre",null,e.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-comment">//test.js</span>\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">observe</span>(<span class="hljs-params">obj</span>) </span>{\n  <span class="hljs-built_in">Object</span>.keys(obj).forEach(<span class="hljs-function">(<span class="hljs-params">key</span>) =&gt;</span> {\n    defineReactive(obj, key, obj[key]);\n  });\n}\n'}})),e.createElement("p",null,"其中，",e.createElement("code",{dangerouslySetInnerHTML:{__html:"Object.keys(obj)"}}),"返回 obj 的属性名组成的数组。"),e.createElement("ol",{start:"4"},e.createElement("li",null,"整合起来，就是这样的：")),e.createElement("pre",null,e.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-comment">//test.js</span>\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Vue</span>(<span class="hljs-params">options</span>) </span>{\n  <span class="hljs-built_in">this</span>._data = options.data;\n  observe(<span class="hljs-built_in">this</span>._data);\n}\n\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">cb</span>(<span class="hljs-params"></span>) </span>{\n  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;更新啦！&#x27;</span>);\n}\n\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">observe</span>(<span class="hljs-params">obj</span>) </span>{\n  <span class="hljs-built_in">Object</span>.keys(obj).forEach(<span class="hljs-function">(<span class="hljs-params">key</span>) =&gt;</span> {\n    defineReactive(obj, key, obj[key]);\n  });\n}\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">defineReactive</span>(<span class="hljs-params">obj, key, val</span>) </span>{\n  <span class="hljs-built_in">Object</span>.defineProperty(obj, key, {\n    <span class="hljs-attr">configurable</span>: <span class="hljs-literal">true</span>,\n    <span class="hljs-attr">enumerable</span>: <span class="hljs-literal">true</span>,\n    <span class="hljs-attr">get</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n      <span class="hljs-keyword">return</span> val;\n    },\n    <span class="hljs-attr">set</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">newVal</span>) </span>{\n      <span class="hljs-keyword">if</span> (newVal === val) {\n        <span class="hljs-keyword">return</span>;\n      }\n      val = newVal;\n      cb();\n    }\n  });\n}\n'}})),e.createElement("ol",{start:"5"},e.createElement("li",null,"测试，我们在",e.createElement("code",{dangerouslySetInnerHTML:{__html:"index.html"}}),"中更改 Vue 对象中",e.createElement("code",{dangerouslySetInnerHTML:{__html:"name"}}),"的值，如果调用了",e.createElement("code",{dangerouslySetInnerHTML:{__html:"cb"}}),"函数，即为成功。")),e.createElement("pre",null,e.createElement("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="hljs-meta">&lt;!DOCTYPE <span class="hljs-meta-keyword">html</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;en&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">&quot;UTF-8&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;viewport&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;width=device-width, initial-scale=1.0&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Document<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;./test.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n    <span class="hljs-keyword">const</span> vm = <span class="hljs-keyword">new</span> Vue({\n      <span class="hljs-attr">data</span>: {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;a&#x27;</span>\n      }\n    });\n    vm._data.name = <span class="hljs-string">&#x27;b&#x27;</span>;\n  </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>\n'}})),e.createElement("p",null,e.createElement("em",null,"Bingo!")))}}}]);
//# sourceMappingURL=42.7e52c0e107.js.map