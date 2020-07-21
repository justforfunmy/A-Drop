(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{188:function(n,s,e){const l=e(0);n.exports=function(n){Object.keys(n).forEach((function(s){this[s]=n[s]}));return l.createElement("section",{className:"markdown"},l.createElement("h1",null,"JS 中的类型转换"),l.createElement("h2",null,"JS 数据类型"),l.createElement("p",null,"原始类型:",l.createElement("code",{dangerouslySetInnerHTML:{__html:"Number,String,Undefined,Null,Boolean,Symbol"}}),"引用类型：",l.createElement("code",{dangerouslySetInnerHTML:{__html:"Object"}})),l.createElement("h2",null,"原始值,对象转 Boolean"),l.createElement("p",null,"使用 ",l.createElement("code",{dangerouslySetInnerHTML:{__html:"Boolean"}})," 函数将类型转换成布尔类型，除了",l.createElement("code",{dangerouslySetInnerHTML:{__html:"false,'',0,NaN,undefined,null"}}),"可以转换成",l.createElement("code",{dangerouslySetInnerHTML:{__html:"false"}}),",其他都转换成",l.createElement("code",{dangerouslySetInnerHTML:{__html:"true"}})),l.createElement("pre",null,l.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Boolean</span>(<span class="hljs-string">&#x27;&#x27;</span>)); <span class="hljs-comment">//false</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Boolean</span>(<span class="hljs-number">0</span>)); <span class="hljs-comment">//false</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Boolean</span>(<span class="hljs-literal">NaN</span>)); <span class="hljs-comment">//false</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Boolean</span>(<span class="hljs-literal">undefined</span>)); <span class="hljs-comment">//false</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Boolean</span>(<span class="hljs-literal">null</span>)); <span class="hljs-comment">//false</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Boolean</span>(<span class="hljs-literal">false</span>)); <span class="hljs-comment">//false</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Boolean</span>(<span class="hljs-string">&#x27; &#x27;</span>)); <span class="hljs-comment">//true,空格不算空字符</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Boolean</span>()); <span class="hljs-comment">//false 注意，当 Boolean 函数不传任何参数时，会返回 false。</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Boolean</span>({})); <span class="hljs-comment">//true 所有对象(包括数组和函数)都转换为 true。</span>\n'}})),l.createElement("h2",null,"原始值，对象转数值"),l.createElement("ul",null,l.createElement("li",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"Number()"}}))),l.createElement("p",null,"根据参数不同类型，可以分为以下情况："),l.createElement("ol",null,l.createElement("li",null,l.createElement("p",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"Boolean"}}),"：",l.createElement("code",{dangerouslySetInnerHTML:{__html:"true"}}),"和",l.createElement("code",{dangerouslySetInnerHTML:{__html:"false"}}),"对应",l.createElement("code",{dangerouslySetInnerHTML:{__html:"1"}}),"和",l.createElement("code",{dangerouslySetInnerHTML:{__html:"0"}}))),l.createElement("li",null,l.createElement("p",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"Null"}}),"：",l.createElement("code",{dangerouslySetInnerHTML:{__html:"null"}}),"对应",l.createElement("code",{dangerouslySetInnerHTML:{__html:"0"}}))),l.createElement("li",null,l.createElement("p",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"Undefined"}}),"：",l.createElement("code",{dangerouslySetInnerHTML:{__html:"undefined"}}),"对应",l.createElement("code",{dangerouslySetInnerHTML:{__html:"NaN"}}))),l.createElement("li",null,l.createElement("p",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"Number"}}),"：不变")),l.createElement("li",null,l.createElement("p",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"String"}}),"："),l.createElement("p",null,"5.1 字符串只包含数字，将其转化为十进制"),l.createElement("p",null,"5.2 字符串中包含有效的浮点，则转换为浮点数值"),l.createElement("p",null,"5.3 字符串中包含有效的十六进制，则转化为相同大小的十进制数"),l.createElement("p",null,"5.4 字符串为空，转化为",l.createElement("code",{dangerouslySetInnerHTML:{__html:"0"}})),l.createElement("p",null,"5.5 其他情况，返回",l.createElement("code",{dangerouslySetInnerHTML:{__html:"NaN"}}))),l.createElement("li",null,l.createElement("p",null,"对象，先调用对象",l.createElement("code",{dangerouslySetInnerHTML:{__html:"valueOf（）"}}),"方法，对返回值按前面的规则转换，如果返回",l.createElement("code",{dangerouslySetInnerHTML:{__html:"NaN"}}),"，则调用",l.createElement("code",{dangerouslySetInnerHTML:{__html:"toString()"}}),"方法，再按前面的规则转换"))),l.createElement("p",null,l.createElement("strong",null,"一元加操作符的操作与 Number()函数相同。")),l.createElement("pre",null,l.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-comment">//1.Boolean，true和false对应1和0</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Number</span>(<span class="hljs-literal">true</span>), <span class="hljs-built_in">Number</span>(<span class="hljs-literal">false</span>)); <span class="hljs-comment">//1 0</span>\n<span class="hljs-comment">//2.Null,null对应0</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Number</span>(<span class="hljs-literal">null</span>)); <span class="hljs-comment">//0</span>\n<span class="hljs-comment">//3.Undefined,undefined对应NaN</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Number</span>(<span class="hljs-literal">undefined</span>)); <span class="hljs-comment">//NaN</span>\n<span class="hljs-comment">//4.Number,不变</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Number</span>(<span class="hljs-number">12</span>)); <span class="hljs-comment">//12</span>\n<span class="hljs-comment">//5.String</span>\n<span class="hljs-comment">//5.1 字符串只包含数字，将其转化为十进制</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Number</span>(<span class="hljs-string">&#x27;0123&#x27;</span>)); <span class="hljs-comment">//123,前导0忽略</span>\n<span class="hljs-comment">//5.2 字符串中包含有效的浮点，则转换为浮点数值</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Number</span>(<span class="hljs-string">&#x27;01.2&#x27;</span>)); <span class="hljs-comment">//1.2,前导0忽略</span>\n<span class="hljs-comment">//5.3 字符串中包含有效的十六进制，则转化为相同大小的十进制数</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Number</span>(<span class="hljs-string">&#x27;0xF&#x27;</span>)); <span class="hljs-comment">//15</span>\n<span class="hljs-comment">//5.4 字符串为空，转化为0</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Number</span>(<span class="hljs-string">&#x27;&#x27;</span>)); <span class="hljs-comment">//0</span>\n<span class="hljs-comment">//5.5 其他情况，返回NaN</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Number</span>(<span class="hljs-string">&#x27;01.2.3&#x27;</span>)); <span class="hljs-comment">//NaN</span>\n<span class="hljs-comment">//6.对象，先调用对象valueOf（）方法，对返回值按前面的规则转换，如果返回NaN，则调用toString()方法，再按前面的规则转换</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Number</span>({ <span class="hljs-attr">a</span>: <span class="hljs-string">&#x27;1&#x27;</span> })); <span class="hljs-comment">//NaN</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Number</span>(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>())); <span class="hljs-comment">//1585637561096,当前时间的毫秒数</span>\n'}})),l.createElement("ul",null,l.createElement("li",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"parseInt()"}}))),l.createElement("p",null,"用于字符串转",l.createElement("code",{dangerouslySetInnerHTML:{__html:"Int"}}),",忽略前导空格，如果第一个非空字符不是数字字符或者负号，返回",l.createElement("code",{dangerouslySetInnerHTML:{__html:"NaN"}}),"。解析直到遇到一个非数字字符为止"),l.createElement("pre",null,l.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">parseInt</span>(<span class="hljs-string">&#x27;&#x27;</span>)); <span class="hljs-comment">//NaN</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">parseInt</span>(<span class="hljs-string">&#x27; 23.5&#x27;</span>)); <span class="hljs-comment">//23，小数点不是数字字符</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">parseInt</span>(<span class="hljs-string">&#x27;0xA&#x27;</span>)); <span class="hljs-comment">//10,十六进制转十进制</span>\n'}})),l.createElement("ul",null,l.createElement("li",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"parseFloat()"}}))),l.createElement("p",null,"用于字符串转",l.createElement("code",{dangerouslySetInnerHTML:{__html:"float"}}),"，始终忽略前导",l.createElement("code",{dangerouslySetInnerHTML:{__html:"0"}}),"，所以只能解析十进制，第一个小数点有效"),l.createElement("pre",null,l.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">parseFloat</span>(<span class="hljs-string">&#x27;0xA.5&#x27;</span>)); <span class="hljs-comment">//0</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">parseFloat</span>(<span class="hljs-string">&#x27;01.2.4&#x27;</span>)); <span class="hljs-comment">//1.2</span>\n'}})),l.createElement("h2",null,"原始值，对象转字符串"),l.createElement("p",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"toString()"}}),":数值，字符串，对象，布尔值都有",l.createElement("code",{dangerouslySetInnerHTML:{__html:"toString()"}}),"方法，",l.createElement("code",{dangerouslySetInnerHTML:{__html:"undefined"}}),"和",l.createElement("code",{dangerouslySetInnerHTML:{__html:"null"}}),"没有"),l.createElement("p",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"String()"}}),":对于",l.createElement("code",{dangerouslySetInnerHTML:{__html:"null"}}),"和",l.createElement("code",{dangerouslySetInnerHTML:{__html:"undefined"}}),"，可以用",l.createElement("code",{dangerouslySetInnerHTML:{__html:"String()"}}),"方法"),l.createElement("pre",null,l.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-keyword">const</span> num = <span class="hljs-number">10</span>;\n<span class="hljs-built_in">console</span>.log(num.toString()); <span class="hljs-comment">//&#x27;10&#x27;</span>\n<span class="hljs-built_in">console</span>.log({ <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;a&#x27;</span> }.toString()); <span class="hljs-comment">//&#x27;[object Object]&#x27;</span>\n<span class="hljs-keyword">const</span> bool = <span class="hljs-literal">true</span>;\n<span class="hljs-built_in">console</span>.log(bool.toString()); <span class="hljs-comment">//&#x27;true&#x27;</span>\n<span class="hljs-keyword">const</span> str = <span class="hljs-string">&#x27;232&#x27;</span>;\n<span class="hljs-built_in">console</span>.log(str.toString(str)); <span class="hljs-comment">//&#x27;232&#x27;</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">String</span>(<span class="hljs-literal">null</span>)); <span class="hljs-comment">//&#x27;null&#x27;</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">String</span>(<span class="hljs-literal">undefined</span>)); <span class="hljs-comment">//&#x27;undefined&#x27;</span>\n'}})),l.createElement("p",null,"对象转字符串："),l.createElement("ol",null,l.createElement("li",null,"如果对象具有 ",l.createElement("code",{dangerouslySetInnerHTML:{__html:"toString"}})," 方法，则调用这个方法。如果他返回一个原始值，",l.createElement("code",{dangerouslySetInnerHTML:{__html:"JavaScript"}})," 将这个值转换为字符串，并返回这个字符串结果。"),l.createElement("li",null,"如果对象没有 ",l.createElement("code",{dangerouslySetInnerHTML:{__html:"toString"}})," 方法，或者这个方法并不返回一个原始值，那么 ",l.createElement("code",{dangerouslySetInnerHTML:{__html:"JavaScript"}})," 会调用 ",l.createElement("code",{dangerouslySetInnerHTML:{__html:"valueOf"}})," 方法。如果存在这个方法，则 ",l.createElement("code",{dangerouslySetInnerHTML:{__html:"JavaScript"}})," 调用它。如果返回值是原始值，",l.createElement("code",{dangerouslySetInnerHTML:{__html:"JavaScript"}})," 将这个值转换为字符串，并返回这个字符串的结果。"),l.createElement("li",null,"否则，",l.createElement("code",{dangerouslySetInnerHTML:{__html:"JavaScript"}})," 无法从 ",l.createElement("code",{dangerouslySetInnerHTML:{__html:"toString"}})," 或者 ",l.createElement("code",{dangerouslySetInnerHTML:{__html:"valueOf"}})," 获得一个原始值，这时它将抛出一个类型错误异常。")),l.createElement("p",null,"特殊地："),l.createElement("ol",null,l.createElement("li",null,"数组的 ",l.createElement("code",{dangerouslySetInnerHTML:{__html:"toString"}})," 方法将每个数组元素转换成一个字符串，并在元素之间添加逗号后合并成结果字符串。"),l.createElement("li",null,"函数的 ",l.createElement("code",{dangerouslySetInnerHTML:{__html:"toString"}})," 方法返回源代码字符串。"),l.createElement("li",null,"日期的 ",l.createElement("code",{dangerouslySetInnerHTML:{__html:"toString"}})," 方法返回一个可读的日期和时间字符串。"),l.createElement("li",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"RegExp"}})," 的 ",l.createElement("code",{dangerouslySetInnerHTML:{__html:"toString"}})," 方法返回一个表示正则表达式直接量的字符串。")),l.createElement("pre",null,l.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-built_in">console</span>.log([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].toString()); <span class="hljs-comment">// 1,2,3</span>\n<span class="hljs-built_in">console</span>.log(\n  <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n    <span class="hljs-keyword">var</span> a = <span class="hljs-number">1</span>;\n  }.toString()\n); <span class="hljs-comment">// function (){var a = 1;}</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-regexp">/d+/g</span>.toString()); <span class="hljs-comment">// /d+/g</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2010</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>).toString()); <span class="hljs-comment">// Fri Jan 01 2010 00:00:00 GMT+0800 (CST)</span>\n'}})),l.createElement("h2",null,"原始值转对象"),l.createElement("p",null,"通过",l.createElement("code",{dangerouslySetInnerHTML:{__html:"String，Number，Boolean"}}),"构造函数"),l.createElement("pre",null,l.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-keyword">const</span> a = <span class="hljs-number">1</span>;\n<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">typeof</span> a); <span class="hljs-comment">//number</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">typeof</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Number</span>(a)); <span class="hljs-comment">//object</span>\n'}})))}}}]);
//# sourceMappingURL=41.7394cef42f.js.map