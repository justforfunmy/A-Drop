(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{179:function(s,n,a){const l=a(0);s.exports=function(s){Object.keys(s).forEach((function(n){this[n]=s[n]}));return l.createElement("section",{className:"markdown"},l.createElement("h1",null,"对象和继承"),l.createElement("p",null,"JavaScript 中对象的创建方式有以下几种："),l.createElement("ul",null,l.createElement("li",null,"object 构造函数")),l.createElement("pre",null,l.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-keyword">let</span> a = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Object</span>();\na.name = <span class="hljs-string">&#x27;king&#x27;</span>;\na.getName = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n  <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">this</span>.name);\n};\n'}})),l.createElement("p",null,"缺点：动态添加属性，代码量大"),l.createElement("ul",null,l.createElement("li",null,"对象字面量")),l.createElement("pre",null,l.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-keyword">let</span> b = {\n  <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;king&#x27;</span>,\n  <span class="hljs-attr">getName</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">this</span>.name);\n  }\n};\n'}})),l.createElement("p",null,"缺点：创建多个对象时，有重复代码，不能复用"),l.createElement("ul",null,l.createElement("li",null,"工厂模式")),l.createElement("pre",null,l.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">C</span>(<span class="hljs-params">name</span>) </span>{\n  <span class="hljs-keyword">let</span> obj = {\n    <span class="hljs-attr">name</span>: name,\n    <span class="hljs-attr">getName</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">this</span>.name);\n    }\n  };\n  <span class="hljs-keyword">return</span> obj;\n}\n<span class="hljs-keyword">let</span> c = C(<span class="hljs-string">&#x27;king&#x27;</span>);\n'}})),l.createElement("p",null,"缺点：对象没有特定的类型，都是 Object，不好区分"),l.createElement("ul",null,l.createElement("li",null,"构造函数")),l.createElement("pre",null,l.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">D</span>(<span class="hljs-params">name</span>) </span>{\n  <span class="hljs-built_in">this</span>.name = name;\n  <span class="hljs-built_in">this</span>.getName = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">this</span>.name);\n  };\n}\n<span class="hljs-keyword">let</span> d = <span class="hljs-keyword">new</span> D(<span class="hljs-string">&#x27;king&#x27;</span>);\n'}})),l.createElement("p",null,"缺点：每次创建对象都产生新的方法，不能复用，浪费内存"),l.createElement("ul",null,l.createElement("li",null,"构造函数+原型")),l.createElement("pre",null,l.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">E</span>(<span class="hljs-params">name</span>) </span>{\n  <span class="hljs-built_in">this</span>.name = name;\n}\nE.prototype.getName = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n  <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">this</span>.name);\n};\n<span class="hljs-keyword">let</span> e = <span class="hljs-keyword">new</span> E(<span class="hljs-string">&#x27;king&#x27;</span>);\n'}})),l.createElement("p",null,"属性在构造函数中，方法绑定在原型上，节省内存"),l.createElement("h2",null,"继承"),l.createElement("ul",null,l.createElement("li",null,"借用构造函数继承 这里用到了",l.createElement("code",{dangerouslySetInnerHTML:{__html:"call"}}),"方法来改变 this 指向来实现继承属性")),l.createElement("pre",null,l.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Person</span>(<span class="hljs-params">name</span>) </span>{\n  <span class="hljs-built_in">this</span>.name = name;\n}\nPerson.prototype.getName = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n  <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">this</span>.name);\n};\n\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Boy</span>(<span class="hljs-params">name</span>) </span>{\n  <span class="hljs-comment">//借用构造函数改变this指向，继承父类的属性</span>\n  Person.call(<span class="hljs-built_in">this</span>, name);\n  <span class="hljs-built_in">this</span>.gender = <span class="hljs-string">&#x27;male&#x27;</span>;\n}\n'}})),l.createElement("ul",null,l.createElement("li",null,"原型链继承")),l.createElement("pre",null,l.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-comment">//将子类型的原型对象指向父类型的实例来继承父类型的方法</span>\nBoy.prototype = <span class="hljs-keyword">new</span> Person();\n<span class="hljs-comment">//上一步操作会使得子类型原型中的constructor指向父类，需要更改为子类函数</span>\nBoy.prototype.constructor = Boy;\n'}})),l.createElement("ul",null,l.createElement("li",null,"构造函数+原型链组合继承 用构造函数继承属性，原型链继承方法,以上两块代码结合即为组合继承。")))}}}]);
//# sourceMappingURL=30.eb0f0a3305.js.map