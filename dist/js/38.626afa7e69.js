(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{187:function(e,s,n){const l=n(0);e.exports=function(e){Object.keys(e).forEach((function(s){this[s]=e[s]}));return l.createElement("section",{className:"markdown"},l.createElement("h1",null,"事件循环机制"),l.createElement("p",null,"Javascript 是单线程执行的，出现异步时，并不会阻塞 JS 的执行，而是接着往下执行，等到异步结果返回时再处理。对于这些异步的执行任务，就依靠 JS 的事件循环机制，即 EventLoop。 JS 中的任务，可以分为宏任务（macrotask）和微任务（microtask）。这两种任务分别由两个队列来维护，这两个队列都遵循先进先出的机制。"),l.createElement("ul",null,l.createElement("li",null,"宏任务：整体代码",l.createElement("code",{dangerouslySetInnerHTML:{__html:"main script"}}),"，",l.createElement("code",{dangerouslySetInnerHTML:{__html:"setTimeout"}}),"，",l.createElement("code",{dangerouslySetInnerHTML:{__html:"setInterval"}}),",I/O,UI 交互事件，",l.createElement("code",{dangerouslySetInnerHTML:{__html:"postMessage"}}),"，",l.createElement("code",{dangerouslySetInnerHTML:{__html:"MessageChannel"}}),"，",l.createElement("code",{dangerouslySetInnerHTML:{__html:"setImmediate"}}),"（Node.js 环境）"),l.createElement("li",null,"微任务：",l.createElement("code",{dangerouslySetInnerHTML:{__html:"Promise.then()"}}),"，",l.createElement("code",{dangerouslySetInnerHTML:{__html:"MutationObserver"}}),"，",l.createElement("code",{dangerouslySetInnerHTML:{__html:"process.nextTick"}}),"(Node.js 环境)")),l.createElement("p",null,"具体的执行过程："),l.createElement("ol",null,l.createElement("li",null,"从宏任务队列中取出第一个任务开始执行（我的理解是整体代码是宏任务队列中的第一个任务）"),l.createElement("li",null,"执行过程中遇到微任务就把微任务添加到微任务队列，遇到宏任务就把宏任务添加到宏任务队列"),l.createElement("li",null,"宏任务执行完后，查看微任务队列，如果有任务，就按顺序执行微任务，知道执行完毕"),l.createElement("li",null,"GUI 渲染；"),l.createElement("li",null,"从宏任务队列中取出下一个宏任务开始执行，回到第 2 步")),l.createElement("p",null,"让我们来看一道题，分析在注释中："),l.createElement("pre",null,l.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">promise1</span>(<span class="hljs-params"></span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;async1 start&#x27;</span>); <span class="hljs-comment">//4.promise立即执行，输出async1 start</span>\n    promise2().then(<span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-comment">//6.回调函数添加到微任务，微1</span>\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;async1 end&#x27;</span>); <span class="hljs-comment">//13.微1执行，输出async1 end</span>\n      resolve();\n    });\n  });\n}\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">promise2</span>(<span class="hljs-params"></span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;async2&#x27;</span>); <span class="hljs-comment">//5.promise立即执行，输出async2</span>\n    resolve();\n  });\n}\n<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;script start&#x27;</span>); <span class="hljs-comment">//1.整体代码宏任务执行，输出script start</span>\n<span class="hljs-built_in">setTimeout</span>(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n  <span class="hljs-comment">//2.回调函数添加到宏任务队列，宏1</span>\n  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;settimeout&#x27;</span>); <span class="hljs-comment">//15.宏1执行，输出settimeout</span>\n});\npromise1(); <span class="hljs-comment">//3.执行函数promise1</span>\n<span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">resolve</span>) </span>{\n  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;promise1&#x27;</span>); <span class="hljs-comment">//7.promise立即执行，输出promise1</span>\n  resolve();\n}).then(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n  <span class="hljs-comment">//8.回调函数加入微任务队列，微2</span>\n  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;promise2&#x27;</span>); <span class="hljs-comment">//14.微2执行，输出promise2</span>\n});\nsetImmediate(<span class="hljs-function">() =&gt;</span> {\n  <span class="hljs-comment">//9.回调函数加入宏任务队列，宏2</span>\n  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;setImmediate&#x27;</span>); <span class="hljs-comment">//16.宏2执行，输出setImmediate</span>\n});\nprocess.nextTick(<span class="hljs-function">() =&gt;</span> {\n  <span class="hljs-comment">//10.回调函数加入微任务队列，微3</span>\n  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;process&#x27;</span>); <span class="hljs-comment">//12.process.nextTick优先级高于promise，微3执行，输出process</span>\n});\n<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;script end&#x27;</span>); <span class="hljs-comment">//11.整体代码执行，输出script end</span>\n'}})),l.createElement("p",null,"过程解析："),l.createElement("ol",null,l.createElement("li",null,"宏任务队列中只有一个宏任务，就是整体代码，并开始执行，输出",l.createElement("code",{dangerouslySetInnerHTML:{__html:"script start"}})),l.createElement("li",null,"遇到",l.createElement("code",{dangerouslySetInnerHTML:{__html:"setTimeout"}}),"，将回调函数添加到宏任务队列，即宏任务队列为",l.createElement("code",{dangerouslySetInnerHTML:{__html:"[console.log(&quot;settimeout&quot;),]"}}),",继续向下执行"),l.createElement("li",null,"遇到 promise1 函数，promise1 入栈"),l.createElement("li",null,"promise1 中，",l.createElement("code",{dangerouslySetInnerHTML:{__html:"new Promise（fn）"}}),"中的 fn 会立即执行，输出",l.createElement("code",{dangerouslySetInnerHTML:{__html:"async1 start"}}),"，继续执行"),l.createElement("li",null,"遇到 promise2 函数，promise2 入栈"),l.createElement("li",null,"执行 promise2 函数体，",l.createElement("code",{dangerouslySetInnerHTML:{__html:"new Promise（fn）"}}),"中函数立即执行，输出",l.createElement("code",{dangerouslySetInnerHTML:{__html:"async2"}}),"，返回一个 promise，promise2 出栈，继续执行 promise1"),l.createElement("li",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"promise2().then"}}),"是微任务，回调函数加入微任务队列，即当前微任务队列",l.createElement("code",{dangerouslySetInnerHTML:{__html:"[console.log('async1 end')]"}}),",promise1 出栈，继续执行主体代码"),l.createElement("li",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"new Promise（fn）"}}),"中 fn 立即执行，输出 promise1，then 方法中的函数加入微任务队列，则当前微任务队列为",l.createElement("code",{dangerouslySetInnerHTML:{__html:"[console.log('async1 end')，console.log(&quot;promise2&quot;)]"}}),"，继续向下执行"),l.createElement("li",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"setImmediate"}}),"是宏任务，回调函数加入宏任务队列，即当前宏任务队列为",l.createElement("code",{dangerouslySetInnerHTML:{__html:"[console.log(&quot;settimeout&quot;),console.log(&quot;setImmediate&quot;)]"}}),",继续向下执行"),l.createElement("li",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"process.nextTick"}}),"是微任务，回调函数加入微任务队列，即当前微任务队列为",l.createElement("code",{dangerouslySetInnerHTML:{__html:"[console.log('async1 end')，console.log(&quot;promise2&quot;)，console.log(&quot;process&quot;)]"}}),"，继续向下执行"),l.createElement("li",null,"主体代码执行，输出 script end"),l.createElement("li",null,"当前宏任务执行完毕，查看微任务队列为",l.createElement("code",{dangerouslySetInnerHTML:{__html:"[console.log('async1 end')，console.log(&quot;promise2&quot;)，console.log(&quot;process&quot;)]"}})),l.createElement("li",null,"因为",l.createElement("code",{dangerouslySetInnerHTML:{__html:"process.nextTick"}}),"优先级高于 promise，所以先执行，输出 process，然后执行其他两个微任务，先后输出",l.createElement("code",{dangerouslySetInnerHTML:{__html:"async1 end，promise2"}})),l.createElement("li",null,"微任务队列清空后，查看宏任务队列，为",l.createElement("code",{dangerouslySetInnerHTML:{__html:"[console.log(&quot;settimeout&quot;),console.log(&quot;setImmediate&quot;)]"}})),l.createElement("li",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"setTimeout"}}),"的优先级高于",l.createElement("code",{dangerouslySetInnerHTML:{__html:"setImmediate"}}),"，所以先取出",l.createElement("code",{dangerouslySetInnerHTML:{__html:"setTimeout"}}),"宏任务并执行，输出",l.createElement("code",{dangerouslySetInnerHTML:{__html:"settimeout"}})),l.createElement("li",null,"当前宏任务执行完毕，查看微任务队列，没有微任务，则继续执行下一个宏任务，输出",l.createElement("code",{dangerouslySetInnerHTML:{__html:"setImmediate"}}),"所以执行结果是：",l.createElement("code",{dangerouslySetInnerHTML:{__html:"script start，async1 start，async2，promise1，script end，process，async1 end，promise2，settimeout，setImmediate"}}))),l.createElement("h2",null,"优先级："),l.createElement("p",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"process.nextTick()&gt;Promise.then()&gt;setTimeout&gt;setImmediate"}}),"。"))}}}]);
//# sourceMappingURL=38.626afa7e69.js.map