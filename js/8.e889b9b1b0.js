(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{191:function(e,n,t){const l=t(0);e.exports=function(e){Object.keys(e).forEach((function(n){this[n]=e[n]}));return l.createElement("section",{className:"markdown"},l.createElement("h1",null,"WEB 缓存"),l.createElement("h2",null,"为什么要缓存"),l.createElement("ul",null,l.createElement("li",null,l.createElement("p",null,"请求更快：通过将内容缓存在本地浏览器或距离最近的缓存服务器（如 CDN），在不影响网站交互的前提下可以大大加快网站加载速度。")),l.createElement("li",null,l.createElement("p",null,"节省带宽：对于已缓存的文件，可以减少请求带宽甚至无需请求网络。")),l.createElement("li",null,l.createElement("p",null,"降低服务器压力：在大量用户并发请求的情况下，服务器的性能受到限制，此时将一些静态资源放置在网络的多个节点，可以起到均衡负载的作用，降低服务器的压力。"))),l.createElement("h2",null,"缓存类型"),l.createElement("ol",null,l.createElement("li",null,"强缓存：浏览器在加载资源时，先根据这个资源的一些 http header 判断它是否命中强缓存，强缓存如果命中，浏览器直接从自己的缓存中读取资源，不会发请求到服务器。"),l.createElement("li",null,"协商缓存：当强缓存没有命中的时候，浏览器一定会发送一个请求到服务器，通过服务器端依据资源的另外一些 http header 验证这个资源是否命中协商缓存，如果协商缓存命中，服务器会将这个请求返回（304），但是不会返回这个资源的数据，而是告诉客户端可以直接从缓存中加载这个资源，于是浏览器就又会从自己的缓存中去加载这个资源；若未命中请求，则将资源返回客户端，并更新本地缓存数据（200）")),l.createElement("p",null,"强缓存与协商缓存区别：强缓存不发请求到服务器，协商缓存会发请求到服务器。"),l.createElement("h2",null,"缓存设置"),l.createElement("ol",null,l.createElement("li",null,"HTML Meta 标签控制缓存（非 HTTP 协议定义）")),l.createElement("pre",null,l.createElement("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">http-equiv</span>=<span class="hljs-string">&quot;Pragma&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;no-cache&quot;</span> /&gt;</span>\n'}})),l.createElement("p",null,"这种方法使用上很简单，但只有部分浏览器可以支持，而且所有缓存代理服务器都不支持，因为代理不解析 HTML 内容本身。"),l.createElement("ol",{start:"2"},l.createElement("li",null,"HTTP 头信息控制缓存 HTTP 头信息控制缓存是通过 Expires（强缓存）、Cache-control（强缓存）、Last-Modified/If-Modified-Since（协商缓存）、Etag/If-None-Match（协商缓存）实现.")),l.createElement("ul",null,l.createElement("li",null,"Expires 是 http1.0 提出的一个表示资源过期时间的 header，它描述的是一个绝对时间，由服务器返回，用 GMT 格式的字符串表示，如：Expires:Thu, 31 Dec 2016 23:55:55 GMT，")),l.createElement("pre",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"读取缓存数据条件：缓存过期时间（服务器的）&lt; 当前时间（客户端的)\n"}})),l.createElement("ul",null,l.createElement("li",null,"Cache-Control 描述的是一个相对时间，在进行缓存命中的时候，都是利用客户端时间进行判断，所以相比较 Expires，Cache-Control 的缓存管理更有效，安全一些。")),l.createElement("pre",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"读取缓存数据条件：上次缓存时间（客户端的）+max-age &lt; 当前时间（客户端的）\n"}})),l.createElement("p",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"Cache-Control"}}),"值可以是",l.createElement("code",{dangerouslySetInnerHTML:{__html:"public"}}),"、",l.createElement("code",{dangerouslySetInnerHTML:{__html:"private"}}),"、",l.createElement("code",{dangerouslySetInnerHTML:{__html:"no-cache"}}),"、",l.createElement("code",{dangerouslySetInnerHTML:{__html:"no-store"}}),"、",l.createElement("code",{dangerouslySetInnerHTML:{__html:"no-transform"}}),"、",l.createElement("code",{dangerouslySetInnerHTML:{__html:"must-revalidate"}}),"、",l.createElement("code",{dangerouslySetInnerHTML:{__html:"proxy-revalidate"}}),"、",l.createElement("code",{dangerouslySetInnerHTML:{__html:"max-age"}})),l.createElement("p",null,"各个消息中的指令含义如下： Public 指示响应可被任何缓存区缓存。 Private 指示对于单个用户的整个或部分响应消息，不能被共享缓存处理。这允许服务器仅仅描述当前用户的部分响应消息，此响应消息对于其他用户的请求无效。 no-cache 指示请求或响应消息不能缓存，该选项并不是说可以设置”不缓存“，而是需要和服务器确认 no-store 在请求消息中发送将使得请求和响应消息都不使用缓存，完全不存下來。 max-age 指示客户机可以接收生存期不大于指定时间（以秒为单位）的响应。上次缓存时间（客户端的）+max-age（64200s）<客户端当前时间 min-fresh 指示客户机可以接收响应时间小于当前时间加上指定时间的响应。 max-stale 指示客户机可以接收超出超时期间的响应消息。如果指定 max-stale 消息的值，那么客户机可以接收超出超时期指定值之内的响应消息。"),l.createElement("p",null,l.createElement("strong",null,"当 response header 中，Expires 和 Cache-Control 同时存在时，Cache-Control 优先级高于 Expires")),l.createElement("ul",null,l.createElement("li",null,"Last-Modified/If-Modified-Since：Last-Modified/If-Modified-Since 要配合 Cache-Control 使用。")),l.createElement("p",null,"Last-Modified：标示这个响应资源的最后修改时间。web 服务器在响应请求时，告诉浏览器资源的最后修改时间。 If-Modified-Since：当资源过期时（强缓存失效），发现资源具有 Last-Modified 声明，则再次向 web 服务器请求时带上头 If-Modified-Since，表示请求时间。web 服务器收到请求后发现有头 If-Modified-Since 则与被请求资源的最后修改时间进行比对。若最后修改时间较新，说明资源又被改动过，则响应整片资源内容（写在响应消息包体内），HTTP 200；若最后修改时间较旧，说明资源无新修改，则响应 HTTP 304 (无需包体，节省浏览)，告知浏览器继续使用所保存的 cache。 缺点："),l.createElement("p",null,"Last-Modified 标注的最后修改只能精确到秒级，如果某些文件在 1 秒钟以内，被修改多次的话，它将不能准确标注文件的修改时间（无法及时更新文件）"),l.createElement("p",null,"如果某些文件会被定期生成，当有时内容并没有任何变化，但 Last-Modified 却改变了，导致文件没法使用缓存，有可能存在服务器没有准确获取文件修改时间，或者与代理服务器时间不一致等情形（无法使用缓存）。"),l.createElement("p",null,"HTTP1.1 中 Etag 解决了上述问题。"),l.createElement("ul",null,l.createElement("li",null,"Etag/If-None-Match：Etag/If-None-Match 也要配合 Cache-Control 使用。 Etag：web 服务器响应请求时，告诉浏览器当前资源在服务器的唯一标识（生成规则由服务器决定）。Apache 中，ETag 的值，默认是对文件的索引节（INode），大小（Size）和最后修改时间（MTime）进行 Hash 后得到的。 If-None-Match：当资源过期时（使用 Cache-Control 标识的 max-age），发现资源具有 Etage 声明，则再次向 web 服务器请求时带上头 If-None-Match （Etag 的值）。web 服务器收到请求后发现有头 If-None-Match 则与被请求资源的相应校验串进行比对，决定返回 200 或 304。 Etag 是服务器自动生成或者由开发者生成的对应资源在服务器端的唯一标识符，能够更加准确的控制缓存。Last-Modified 与 ETag 一起使用时，服务器会优先验证 ETag。")),l.createElement("h2",null,"浏览器请求流程图"),l.createElement("p",null,"第一次请求：",l.createElement("img",{src:t(242).default,alt:"first-request.png"}),"再次请求：",l.createElement("img",{src:t(243).default,alt:"request-again.png"})),l.createElement("h2",null,"缓存最佳实践"),l.createElement("ul",null,l.createElement("li",null,"模式一：不变的内容+长寿命（",l.createElement("code",{dangerouslySetInnerHTML:{__html:"long max-age"}}),"）")),l.createElement("p",null,"一般，我们会设置",l.createElement("code",{dangerouslySetInnerHTML:{__html:"Cache-Control"}}),"的值为",l.createElement("code",{dangerouslySetInnerHTML:{__html:"max-age=xxx"}}),"，表示在 xxx 秒内再次访问该资源，均使用本地的缓存，不再向服务器发起请求。"),l.createElement("p",null,"以",l.createElement("a",{href:"http://expressjs.com/"},"expressjs"),"开发为例："),l.createElement("ol",null,l.createElement("li",null,"对静态文件设置缓存:")),l.createElement("pre",null,l.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-keyword">const</span> express = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#x27;express&#x27;</span>);\n<span class="hljs-keyword">const</span> app = express();\napp.use(\n  express.static(path.join(__dirname, <span class="hljs-string">&#x27;public&#x27;</span>), {\n    <span class="hljs-attr">maxAge</span>: <span class="hljs-number">31536000</span>\n  })\n);\n'}})),l.createElement("p",null,"此处需要在更新静态资源内容的同时更新",l.createElement("code",{dangerouslySetInnerHTML:{__html:"URL"}}),"，",l.createElement("code",{dangerouslySetInnerHTML:{__html:"webpack"}}),"可以让我们在打包的时候，在文件的命名上带上",l.createElement("code",{dangerouslySetInnerHTML:{__html:"hash"}}),"值,就像这样："),l.createElement("p",null,l.createElement("img",{src:t(244).default,alt:"cache.jpg"})),l.createElement("ol",{start:"2"},l.createElement("li",null,"对单一请求设置缓存：")),l.createElement("pre",null,l.createElement("code",{className:"language-js",dangerouslySetInnerHTML:{__html:'<span class="hljs-keyword">const</span> express = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#x27;express&#x27;</span>)\n<span class="hljs-keyword">const</span> router = express.Router()\nrouter.get(<span class="hljs-string">&#x27;/major_news&#x27;</span>, <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">req, res, next</span>) </span>{\n  res.header(<span class="hljs-string">&#x27;Cache-Control&#x27;</span>, <span class="hljs-string">&#x27;Max-Age=180000&#x27;</span>)\n\t<span class="hljs-comment">//...</span>\n}\n'}})),l.createElement("ul",null,l.createElement("li",null,"模式二：变化的内容，始终需要服务器验证")),l.createElement("pre",null,l.createElement("code",{dangerouslySetInnerHTML:{__html:"Cache-Control: no-cache\n"}})))}},242:function(e,n,t){"use strict";t.r(n),n.default=t.p+"media/images/5ec4338f1754fb049dc3056a04f939a5.png"},243:function(e,n,t){"use strict";t.r(n),n.default=t.p+"media/images/ef8950ba1d735b0cade8c6b08bce461f.png"},244:function(e,n,t){"use strict";t.r(n),n.default="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=8.e889b9b1b0.js.map